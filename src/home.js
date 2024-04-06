import homeIcon from './home.png';


function createGlitchedHome() {
    const homeBgDiv = document.createElement('div');
    homeBgDiv.classList.add('bg-black', 'bg-opacity-40', 'w-10/12', 'md:w-8/12', 'lg:w-6/12', 'rounded-xl', 'p-4', 'py-6', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-2' );

    const homeImage = document.createElement('div');
    homeImage.style.backgroundImage = `url(${homeIcon})`;
    homeImage.alt = 'Glitched Statue';
    homeImage.classList.add('w-56', 'h-96', 'ml-3', 'glitchEffect', 'bg-cover', 'mb-3');


    homeBgDiv.appendChild(createTextEle('Your Reality has been hacked.'));
    homeBgDiv.appendChild(homeImage);
    homeBgDiv.appendChild(createTextEle('Choose your nutriment and come find us.'));



    return homeBgDiv;
}

function createTextEle(text, ) {
    const textPara = document.createElement('div');
    textPara.textContent = text;
    textPara.classList.add('text-center', 'text-xl')
    return textPara;
}

function LoadHome() {
    let home = createGlitchedHome();
    const container = document.querySelector('#content');
    container.innerHTML = '';
    container.appendChild(home);

}

export default LoadHome;

