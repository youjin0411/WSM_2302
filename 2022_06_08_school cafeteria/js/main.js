// show/hide menu: toggle(on/off반복) menu
const toggleMenu = (toggleId, navListId) => {
    //html -> js 가져옴
    const toggle = document.getElementById(toggleId); 
    const navList = document.getElementById(navListId); 
    const toggleIcon = toggle.getElementsByTagName("i")[0];
    
    if(toggle && navList) {
        // toggle click 
        toggle.addEventListener('click', () => {
            // show/hide menu : .show-menu -> 함수를 한 번만 사용함으로
            navList.classList.toggle('show-menu');
            //change toggle icon : bx-menu <-> bx-x 
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bxs-x-square");
        });
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

const addNow = (mainCardId) =>  {
    //html -> js 
    const mainCard = document.getElementById(mainCardId)
    //지금 몇시 ? 다음 식사 -> 몇번째 카드인지
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let index = 0; 
    let minutes = (hour * 60) + minute;

    //지금 시각 : index 
    //조식:  ~ 7: 30
    if(minutes >= 1090){
        index = 0;
    //중식: 7:31 ~ 13:10 -> 1 
    }else if(minutes >= 790){
        index = 2;
    //석식: 13:10 ~ 18 : 10  -> 2 
    }else if(minutes >= 450){
        index = 1;
    }else{
        index = 0;
    }

    let selectedCard = mainCard.getElementsByClassName('card')[index];
    //.now 클래스 추가 
    selectedCard.classList.add('now');
}

addNow("main-card");

