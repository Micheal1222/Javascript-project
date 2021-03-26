
let toggleMenuBtn = document.querySelector('.toggleButton');

let root = document.querySelector(':root');

let menuIsOpen = false;


toggleMenuBtn.addEventListener('click', openMenu);

document.addEventListener('click', closeMenu);


function openMenu() {
  if(menuIsOpen === false) {
    root.style.setProperty('--sliderWidth',"220px");
    toggleMenuBtn.classList.toggle('anim');
    menuIsOpen = true;
  }else{
    root.style.setProperty('--sliderWidth',"100px");
    toggleMenuBtn.classList.toggle('anim');
    menuIsOpen = false;
  };
};

function closeMenu(e){
  if(e.target.classList.contains('contentPage')){
    
    if(menuIsOpen === true) {
    
      root.style.setProperty('--sliderWidth',"100px");
   
      toggleMenuBtn.classList.toggle('anim');
     
      menuIsOpen = false;
    };
  };
}