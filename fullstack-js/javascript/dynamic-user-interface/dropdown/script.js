const dropdownButton = document.getElementById('dropdown-button');
dropdownButton.addEventListener('click', (event) => {
    event.preventDefault();
    const option = getActiveOption();

    const existingMenu = document.getElementById('dropdown-menu');
    if (!existingMenu) showDropdownMenu(option);
});

function getActiveOption() {
    return parseInt(dropdownButton.dataset.activeOption, 10)
}

function updateActiveOption(newOption) {
    dropdownButton.dataset.activeOption = newOption;
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.remove();
}

function showDropdownMenu(option) {
    const dropdownMenu = document.createElement('div');
    dropdownMenu.id = 'dropdown-menu';

    const optionOne = document.createElement('div');
    optionOne.id = 'option-one';
    optionOne.textContent = 'Option 1';
    optionOne.addEventListener('click', () => {
        updateActiveOption(1);
    }); 

    const optionTwo = document.createElement('div');
    optionTwo.id = 'option-two';
    optionTwo.textContent = 'Option 2';
    optionTwo.addEventListener('click', () => {
        updateActiveOption(2);
    }); 

    const optionThree = document.createElement('div');
    optionThree.id = 'option-three';
    optionThree.textContent = 'Option 3';
    optionThree.addEventListener('click', () => {
        updateActiveOption(3);
    }); 

    if (option === 1) {
        optionOne.style.textDecoration = "underline";
    } else if (option === 2) {
        optionTwo.style.textDecoration = "underline";
    } else {
        optionThree.style.textDecoration = "underline";
    }

    dropdownMenu.appendChild(optionOne);
    dropdownMenu.appendChild(optionTwo);
    dropdownMenu.appendChild(optionThree);
    
    const content = document.getElementById('content');
    content.appendChild(dropdownMenu);
}

