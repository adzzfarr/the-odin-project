export const loadMenuPage = (doc) => {
    const content = doc.querySelector('#content');

    const backgroundImage = doc.createElement('img');
    backgroundImage.id = 'background';
    backgroundImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg";

    const menuContainer = doc.createElement('div');
    menuContainer.id = 'menu';

    for (let menuCategory in menu) {
        const card = doc.createElement('div');
        card.classList.add('card');
        card.classList.add(menuCategory.toLowerCase().replace(/\s+/g, ''));

        const menuSectionElement = doc.createElement('h2');
        menuSectionElement.innerHTML = menuCategory;
        card.appendChild(menuSectionElement);

        for (let menuItem of menu[menuCategory]) {
            const menuItemContainer = doc.createElement('div');
            menuItemContainer.classList.add('menu-item');

            const dishNameElement = doc.createElement('h3');
            dishNameElement.innerHTML = menuItem.name;

            const dishDescriptionElement = doc.createElement('span');
            dishDescriptionElement.classList.add('item-desc')
            dishDescriptionElement.innerHTML = menuItem.desc;

            menuItemContainer.appendChild(dishNameElement);
            menuItemContainer.appendChild(dishDescriptionElement);

            card.appendChild(menuItemContainer);
        }

        menuContainer.appendChild(card);
    }

    content.appendChild(backgroundImage);
    content.appendChild(menuContainer)
}

class MenuItem {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
    }
}

const menu = {
    "Appetisers": [
        new MenuItem('Smoked Salmon Blinis', 'Mini pancakes topped with house-smoked salmon and dill crème fraîche'),
        new MenuItem('Roasted Beetroot Salad', 'Heirloom beets with whipped goat cheese, candied walnuts, and arugula'),
        new MenuItem('Crispy Cod Bites', 'Lightly battered Atlantic cod served with lemon aioli.'),
    ],
    "Mains": [
        new MenuItem('Pan-Seared Duck Breast', 'Served medium with lingonberry jus, potato mash, and charred carrots'),
        new MenuItem('Grilled Halibut Fillet', 'Lemon-thyme butter, baby potatoes, and asparagus spears'),
        new MenuItem('Wild Mushroom Risotto', 'Creamy Arborio rice with porcini, oyster mushrooms, and shaved parmesan'),
    ],
    "Sharing Platters": [
        new MenuItem('Nordic Charcuterie Board', 'Cured meats, cheeses, pickled veggies, and rye crisps'),
        new MenuItem('Seafood Feast', 'Mussels, shrimp, grilled squid, and garlic butter dip'),
        new MenuItem('Veggie Mezze Platter', 'Roasted peppers, hummus, falafel, olives, and pita'),
    ],
    "Desserts": [
        new MenuItem('Lingonberry Cheesecake', 'Creamy cheesecake with a tart lingonberry glaze'),
        new MenuItem('Chocolate Lava Cake', 'Rich, gooey center served warm with vanilla bean ice cream'),
        new MenuItem('Cinnamon Apple Crumble', 'Baked spiced apples with oat crumble and whipped cream'),
    ],
    "Beverages": [
        new MenuItem('Elderflower Spritz', 'Sparkling water with elderflower syrup, lemon, and mint'),
        new MenuItem('Cloudberry Fizz', 'House-made cloudberry soda with crushed ice'),
        new MenuItem('Iced Nordic Brew', 'Cold brew coffee infused with cardamom and orange peel.'),
        new MenuItem('Iced Hibiscus Tea', 'A refreshing, tangy floral brew served over ice with a hint of citrus'),
        new MenuItem('Spiced Hot Chocolate', 'Rich dark chocolate infused with cinnamon and nutmeg, topped with whipped cream'),
    ],
};