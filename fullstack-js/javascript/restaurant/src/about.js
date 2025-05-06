export const loadAboutPage = (doc) => {
    const content = doc.querySelector('#content');

    const backgroundImage = doc.createElement('img');
    backgroundImage.id = 'background';
    backgroundImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg";

    const textContainer = doc.createElement('div');
    textContainer.id = 'text-container';

    const title = doc.createElement('h1');
    title.id = 'title';
    title.innerHTML = 'About Us';

    const paragraphsContainer = doc.createElement('div');
    paragraphsContainer.id = 'paragraphs';

    const para1 = doc.createElement('p');
    para1.innerHTML = 'Welcome to Odin Restaurant, where we believe that food is more than just a meal—it’s an experience. Nestled in the heart of olympus, we bring you a thoughtfully curated menu that combines the finest ingredients with innovative culinary techniques, all served in a warm, inviting atmosphere.';

    const para2 = doc.createElement('p');
    para2.innerHTML = 'Our chefs are passionate about creating dishes that not only satisfy your hunger but also delight your senses. Whether you’re here for a casual bite or a special celebration, we aim to make every visit memorable. Our menu features a delightful selection of appetizers, mains, desserts, and beverages, each crafted to offer a unique culinary experience inspired by both local and international flavors.';

    const para3 = doc.createElement('p');
    para3.innerHTML = 'At Odin Restaurant, we’re dedicated to sustainability, sourcing our ingredients responsibly, and offering choices that cater to various dietary preferences. We take pride in offering a dining experience that is both enjoyable and mindful, ensuring every guest leaves feeling content and inspired.';

    const para4 = doc.createElement('p');
    para4.innerHTML = 'Join us for a journey of flavors, a celebration of good company, and an unforgettable dining experience. We look forward to welcoming you soon!';

    paragraphsContainer.appendChild(para1);
    paragraphsContainer.appendChild(para2);
    paragraphsContainer.appendChild(para3);
    paragraphsContainer.appendChild(para4);

    textContainer.appendChild(title);
    textContainer.appendChild(paragraphsContainer);

    // clear existing content
    content.innerHTML = '';

    content.appendChild(backgroundImage);
    content.appendChild(textContainer);
};