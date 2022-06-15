// show/hide menu: toggle(on/off반복) menu
const toggleMenu = (toggleId, navListId) => {
    //html -> js 가져옴
    const toggle = document.getElementById(toggleId); 
    const navList = document.getElementById(navListId); 
    
    const clickHandler = () => {
        // show/hide menu : .show-menu
        navList.classList.toggle('show-menu')
    }

    if(toggle && navList) {
    // toggle click 
    toggle.addEventListener('click', clickHandler);
    }
}
toggleMenu("nav-toggle", "nav-list");

// const say = () => console.log("Hello word4");

// const say = () => {
//     console.log("Hello word3");
// }

// const say = function(){
//     console.log("Hello word2");
// }

// function say(){
//     console.log("Hello word");
// }
// say();