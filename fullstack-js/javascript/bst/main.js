import { Tree } from "./classes.js";

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

function generateNumbersLessThanHundred(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    const integer = Math.round(Math.random() * 100);
    result.push(integer);
  }

  return result;
}

const tree = new Tree(generateNumbersLessThanHundred(10));
prettyPrint(tree.root);
console.log(tree.isBalanced())

// Unbalance the tree
tree.insert(200);
tree.insert(300);
tree.insert(400);
tree.insert(500);
prettyPrint(tree.root);
console.log(tree.isBalanced());

// Rebalance
tree.rebalance();
prettyPrint(tree.root);