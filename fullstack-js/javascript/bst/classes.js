class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    buildTree(array) {
        // Use Set to remove duplicates
        let sorted = [...new Set(array)].sort((a, b) => a - b); 

        const length = sorted.length;

        if (length === 0) return null;

        const mid = Math.floor((length - 1) / 2);
        let root = new Node(sorted[mid]);

        // Create a queue of objects holding the current node and the start/end indices of the array it serves as the root node of, if that subarray were to be a subtree
        let q = [ 
            { 
                node: root, 
                range: [0, length - 1], 
            } 
        ];
        let frontIndex = 0;

        while (frontIndex < q.length) {
            const front = q[frontIndex];
            const currNode = front.node;
            const [start, end] = front.range;

            // Get the middle index of the current subarray
            const middleIndex = Math.floor((start + end) / 2);

            // If left subtree exists i.e. if there are elements on the left of the element at middleIndex (because all elements on its left are smaller than it)
            if (start < middleIndex) {
                // Take the middle element of the left half as the root of the left subtree
                const midLeft = start + Math.floor(((middleIndex - 1) - start) / 2);
                const leftRoot = new Node(sorted[midLeft]);
                currNode.left = leftRoot;

                // Push leftRoot onto the queue to build its own subtree later on
                q.push({
                    node: leftRoot,
                    range: [start, middleIndex - 1],
                });
            }

            // If right subtree exists i.e. if there are elements on the right of the element at middleIndex (because all elements on its right are bigger than it)
            if (end > middleIndex) {
                // Take the middle element of the right half as the root of the right subtree
                const midRight = (middleIndex + 1) + Math.floor((end - (middleIndex + 1)) / 2);
                const rightRoot = new Node(sorted[midRight]);
                currNode.right = rightRoot;

                // Push rightRoot onto the queue to build its own subtree later on
                q.push({
                    node: rightRoot,
                    range: [middleIndex + 1, end],
                });
            }

            // Once done, move on to the next item in the queue
            frontIndex++;
        }

        return root;
    }   

    insert(value) {
        // Starting at the root, we recursively traverse the tree
        this.root = insertRecursive(this.root, value);

        function insertRecursive(currNode, value) {
            // If we get to an empty spot, we can place the new node there
            if (!currNode) return new Node(value);

            // If we encounter a duplicate, we need not do anything
            if (value === currNode.data) return currNode; 

            if (value < currNode.data) {
                // If the value to be inserted is less than currNode, we insert it somewhere in its left subtree
                currNode.left = insertRecursive(currNode.left, value);
            } else {
                // Otherwise, it should be inserted somewhere in its right subtree
                currNode.right = insertRecursive(currNode.right, value);
            }

            return currNode;
        }
    }
   
    deleteItem(value) {
        this.root = recursiveDelete(this.root, value);

        function recursiveDelete(node, value) {
            // If we recurse to an empty location, the value never existed in the tree
            if (!node) return null;

            // Otherwise, traverse based on value
            if (value < node.data) {
                node.left = recursiveDelete(node.left, value);
                return node;
            } else if (value > node.data) {
                node.right = recursiveDelete(node.right, value);
                return node;
            } else { // value === node.data, so we proceed with the deletion
                // If the node to be deleted is a leaf, the structure of the tree does not change. We can simply remove it from the tree
                if (!node.left && !node.right) return null;

                // If the node has one child, we can simply replace the node with its child in the tree
                // This is because, say in a tree         A       where I wanted to delete F, even though G > F, we know that EVERYTHINNG in C's left subtree (including G!) is less than C. Hence, we can simply set C.left = G, and this maintains the structure of the tree.
                //                                     /     \
                //                                    B       C
                //                                   / \     /
                //                                   D  E   F 
                //                                  /  / \   \  
                //                                 G  H   I    J    
                

                if (!node.left) return node.right;
                if (!node.right) return node.left;
                
                // If the node has two children, we first locate the next biggest node in the tree. This will be the leftmost leaf *OF THE RIGHT SUBTREE* i.e. the smallest of the larger nodes. We then replace the deleted node with it.
                // Similarly to above, this preserves the structure of the tree due to the nature of the left subtree's elements all being larger than the root. 
                // If we wanted to remove B from the earlier example, we would simply navigate to the leftmost leaf of the right subtree (of root E), which is H. We know H > D and H < E, thus the structure of the tree is preserved.
    
                // Two Children
                if (node.left && node.right) {
                    // Helper function
                    function getSmallestInSubtree(root) {
                        let currNode = root;
                        // If there are no more left children, we are at the smallest node
                        if (!currNode.left) return currNode;
                        // Otherwise, we call this function recursively on that node's left subtree
                        return getSmallestInSubtree(currNode.left);
                    }
                    
                    // We call the above function on the node's right subtree to find the next largest node 
                    const nextLargestNode = getSmallestInSubtree(node.right);

                    // Replace the current node's data
                    node.data = nextLargestNode.data;

                    // Traverse the right subtree to delete the nextLargestNode
                    node.right = recursiveDelete(node.right, nextLargestNode.data);
                    return node;
                }
            }
        }
    }

    find(value) {
        // No mutation of the tree is happening hence we can simply return the result of the recursion instead of setting this.root = findRecursive(this.root, value) etc.
        return findRecursive(this.root, value);

        function findRecursive(node, value) {
            // Node does not exist
            if (!node) return null;

            if (value < node.data) {
                return findRecursive(node.left, value);
            } else if (value > node.data) {
                return findRecursive(node.right, value);
            } else {
                // node.data === value
                return node;
            }
        }
    }

    levelOrder(callback) {
        if (!callback) throw new Error('A callback function is required.');

        let q = [];
        q.push(this.root);
        let currIndex = 0

        while(currIndex < q.length) {
            let currNode = q[currIndex];
            // Execute callback function on the current node
            callback(currNode);
            
            // Enqueue the current node's children
            if (currNode.left) q.push(currNode.left);
            if (currNode.right) q.push(currNode.right);

            // Move to the next node in the queue   
            currIndex++;
        }
    }

    // D, L, R
    preOrder(callback) {
        if (!callback) throw new Error('A callback function is required');

        preOrderRecursive(this.root, callback);

        function preOrderRecursive(node, callback) {
            if (!node) return;

            callback(node);
            if (node.left) preOrderRecursive(node.left, callback);
            if (node.right) preOrderRecursive(node.right, callback);
        }
    }
    
    // L, D, R
    inOrder(callback) {
        if (!callback) throw new Error('A callback function is required');

        inOrderRecursive(this.root, callback);

        function inOrderRecursive(node, callback) {
            if (!node) return;
            
            if (node.left) inOrderRecursive(node.left, callback);
            callback(node);
            if (node.right) inOrderRecursive(node.right, callback);
        }
    }    
    
    // L, R, D
    postOrder(callback) {
        if (!callback) throw new Error('A callback function is required');

        postOrderRecursive(this.root, callback);

        function postOrderRecursive(node, callback) {
            if (!node) return;
            
            if (node.left) postOrderRecursive(node.left, callback);
            if (node.right) postOrderRecursive(node.right, callback);
            callback(node);
        }
    }

    height(value) {
        if (!this.find(value)) return null;

        return heightRecursive(this.root, value);

        function heightRecursive(node, value) {
            // Search for the node
            if (value < node.data) return heightRecursive(node.left, value);
            if (value > node.data) return heightRecursive(node.right, value);

            // Once the node is found, we need to get the height of its deepest subtree (left or right)
            return getHeight(node);

            function getHeight(node) {
                // Null node
                if (!node) return -1;

                // If the node has 1 child
                if (!node.left) return 1 + getHeight(node.right);
                if (!node.right) return 1 + getHeight(node.left);

                // If the node has two children, we simply return the maximum height out of the two subtrees
                return 1 + Math.max(getHeight(node.left), getHeight(node.right));
            }
        }
    }

    depth(value) {
        if (!this.find(value)) return null;

        return depthRecursive(this.root, value);

        function depthRecursive(node, value) {
            // Search for the node. If the required node is already the root, return 0.
            if (node.data === value) return 0;

            // Otherwise, continue searching and add 1 to the count with each call
            if (value < node.data) return 1 + depthRecursive(node.left, value);
            if (value > node.data) return 1 + depthRecursive(node.right, value);
        }
    }

    // A binary tree is considered balanced if, for every node in the tree, the height difference between its left and right subtrees is no more than 1, 
    // and both the left and right subtrees are also balanced.
    // A common mistake is only checking the height difference between the root’s left and right children. 
    // That is not enough — you must check the balance condition for every node.
    isBalanced() {
        return checkNode(this.root).balanced;

        // Do a post-order traversal, and return both the height of the current node and whether its subtrees are balanced.
        // O(n) operation, avoids having to repeatedly call this.height
        function checkNode(node) {
            // Base case: Null
            if (!node) return { balanced: true, height: -1 };

            // Check the left and right subtrees
            const left = checkNode(node.left);
            const right = checkNode(node.right);

            // Check balance condition
            const nodeIsBalanced = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;

            // Height of current node = 1 + Max height (out of left or right child) 
            const nodeHeight = 1 + Math.max(left.height, right.height);

            // return the current node's info
            return { balanced: nodeIsBalanced, height: nodeHeight };
        }
    }

    rebalance() {
        // Inorder traversal always returns the nodes in sorted order
        let newSorted = [];
        this.inOrder((node) => newSorted.push(node.data));  

        // Rebuild the tree
        this.root = this.buildTree(newSorted);
    }
}