export const loadHomePage = (doc) => {
    const content = doc.querySelector('#content');

    const backgroundImage = doc.createElement('img');
    backgroundImage.id = 'background';
    backgroundImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg";

    const textContainer = doc.createElement('div');
    textContainer.id = 'text-container';

    const title = doc.createElement('h1');
    title.id = 'title';
    title.innerHTML = 'Odin Restaurant';

    const description = doc.createElement('span');
    description.id = 'description';
    description.innerHTML = 'Welcome to Odin Restaurant – where bold flavors meet timeless tradition. Enjoy handcrafted dishes, warm ambiance, and unforgettable service in a place where every meal feels like a celebration.';

    textContainer.appendChild(title);
    textContainer.appendChild(description);

    // clear existing content
    content.innerHTML = '';

    content.appendChild(backgroundImage);
    content.appendChild(textContainer);
};