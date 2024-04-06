import menu1 from './menu1.png';
import menu2 from './menu2.png';
import menu3 from './menu3.png';
import menu4 from './menu4.png';

function createMenu() {
    const menuBg = document.createElement('div');
    menuBg.classList.add('bg-black', 'bg-opacity-40', 'w-10/12', 'md:w-8/12', 'rounded-xl', 'p-4', 'py-6', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-4', '2xl:grid', '2xl:grid-cols-2', '2xl:items-stretch', '2xl:gap-8');

    menuBg.appendChild(createMenuCard('Digital Hermes', 'A vegan-based meal that reminds of a godly message written in binary code.', menu1, 'firstImg'));
    menuBg.appendChild(createMenuCard('Ares interference', 'A spiked passionate dish made out of the most warmonger spices. It create a reality interference.', menu2, 'secondImg'));
    menuBg.appendChild(createMenuCard('Chewing Byte Apollo', 'Dessert that reminds of a full of knowledge bubble gum. Be careful, if it explodes they can bruteforce their way in your reality.', menu3, 'thirdImg'));
    menuBg.appendChild(createMenuCard('Pixel sad Aphrodite', 'A salty drink that reminds of the bitterness of love. Each drop can reduce the opacity of your reality.', menu4, 'fourthImg'));


    return menuBg;
}


function createMenuCard(title, description, img, index) {
    const cardBg = document.createElement('div');
    cardBg.classList.add('bg-black', 'bg-opacity-20', 'rounded-xl', 'w-full', 'p-4', 'flex', 'justify-between', '2xl:justify-around', 'items-center', 'card', 'hover:bg-opacity-90');

    const cardImgBox = document.createElement('div');
    cardImgBox.style.backgroundImage = `url("${img}")`;
    cardImgBox.classList.add('menuImg', 'w-24', '2xl:w-32', 'h-36', '2xl:h-44', 'bg-cover', 'bg-center', 'rounded-full', index);

    const cardTextBox = document.createElement('div');
    cardTextBox.classList.add('flex-1', 'flex', 'flex-col');

    const cardTitle = document.createElement('div');
    cardTitle.textContent = title;
    cardTitle.classList.add('text-center', 'text-lg', 'font-bold');

    const cardDescription = document.createElement('div');
    cardDescription.textContent = description;
    cardDescription.classList.add('text-center', 'text-sm');

    cardTextBox.appendChild(cardTitle);
    cardTextBox.appendChild(cardDescription);
    cardBg.appendChild(cardImgBox);
    cardBg.appendChild(cardTextBox);

    return cardBg;
}

function loadMenu() {
    const container = document.querySelector('#content');
    container.innerHTML = '';
    let menu = createMenu();
    container.appendChild(menu);
}

export default loadMenu;