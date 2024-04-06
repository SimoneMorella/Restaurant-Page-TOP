import aboutImage from './about-bg.jpeg';


function createAbout() {
    const aboutBg = document.createElement('div');
    aboutBg.classList.add('rounded-xl', 'w-10/12','h-[600px]', 'sm:h-[500]', 'sm:w-8/12', 'lg:w-3/5', 'xl:w-2/6', 'bg-center', 'bg-cover', 'aboutImg', 'flex', 'items-center', 'justify-center');
    aboutBg.style.backgroundImage = `url("${aboutImage}")`;

    const aboutTextBox = document.createElement('div');
    aboutTextBox.classList.add('bg-black', 'bg-opacity-80', 'z-10', 'rounded-xl', 'w-2/3', 'md:w-3/5', 'p-4', 'flex','text-center', 'flex-col', 'justify-center', 'gap-2', 'items-center', 'font-bold');
    aboutTextBox.textContent = 'Breach into the BlackWall to reach us. Be aware it is possible you will never be able to go back.'

    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('aboutBtn', 'w-10/12', 'p-2', 'rounded-xl','transition', 'ease-in-out', 'hover:scale-105');
    aboutBtn.textContent = 'Breach BlackWall';

    aboutTextBox.appendChild(aboutBtn);
    aboutBg.appendChild(aboutTextBox);

    glitchBgEffect(aboutBtn, aboutBg);

    return aboutBg;
}

function glitchBgEffect(glitchBtn, glitchedBg) {

    glitchBtn.addEventListener('mouseenter', () => {
        glitchedBg.classList.add('glitchedAnim');
    })

    glitchBtn.addEventListener('mouseleave', () => {
        glitchedBg.classList.remove('glitchedAnim');
    })
}


function loadAbout() {
    const container = document.querySelector('#content');
    container.innerHTML = '';
    let about = createAbout();
    container.appendChild(about);
}


export default loadAbout;

