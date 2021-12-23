let discountArr = [['Скидку 600грн на 3 персональные тренировки (к оплате 300грн)', 2800],
                   ['Скидку 550грн на гостевой абонемент на 2 недели (к оплате 200грн)', 3070],
                   ['Скидку 70грн на 10 минут солярия (к оплате 70грн)', 3016]];


let clicks = 0;

let wheel = document.querySelector('#fortune-wheel');
let play = document.querySelector('.fa-play-circle');
let lock = document.querySelector('.fa-lock');
let randDisc;

function getRandDisc() {
    randDisc = Math.floor(Math.random() * discountArr.length);
    return discountArr[randDisc];
}



let result = getRandDisc();

let degrees = result[1];
console.log(degrees);

let discName = result[0];
console.log(discName);


//spinning
function spinIt() {
    clicks++;
    if(degrees === 2800){
        wheel.style.transition = "all 6s ease-out";
        wheel.style.animation = "spinRotation2800 4.5s ";
        wheel.style.transformOrigin = "center";
        wheel.style.animationFillMode = "forwards";
        setTimeout(showPopUp, 6000);
        setTimeout(timer, 6000);

    }

    if(degrees === 3070){
        wheel.style.transition = "all 6s ease-out";
        wheel.style.animation = "spinRotation3070 6.5s ";
        wheel.style.transformOrigin = "center";
        wheel.style.animationFillMode = "forwards";
        // console.log(setTimeout(showPopUp, 3600));
        setTimeout(showPopUp, 7000);
        setTimeout(timer, 7000);

    }

    if(degrees === 3016){
        wheel.style.transition = "all 6s ease-out";
        wheel.style.animation = "spinRotation3016 5.5s ";
        wheel.style.transformOrigin = "center";
        wheel.style.animationFillMode = "forwards";
        // console.log(setTimeout(showPopUp, 3600));
        setTimeout(showPopUp, 6000);
        setTimeout(timer, 6000);

    }



    console.log(clicks + " >>");

    play.style.visibility = "hidden";
    lock.style.visibility = "visible";


}

//locale storage
// function ls(data){
//     if(!localStorage[discName]){
//         localStorage.setItem(discName, JSON.stringify(data));
//     }
//     else{
//         return JSON.parse(localStorage[discName]);
//     }
// }


//pop up window
function showPopUp(){
    document.body.innerHTML =
        `   
<div class="popUp">
    <div class="popUp-container">
        <div class="popUp-body">
            <h1>Поздравляем!</h1>
            <h3>Вы выиграли</h3>
            <div class="wonPrize">${discName}</div>
            <h3>Сообщите нам!</h3>
            <div class="textTime">Осталось <span id="time">08:00</span> минут!</div>
            <button class="btn"><a href="https://taplink.cc/strong_j_fitness">Перейти к оплате </a></button>
        </div>
    </div>
</div>
        `
    ;
}




//timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


function timer () {
    let eightMinutes = 60 * 8,
        display = document.querySelector('#time');
    startTimer(eightMinutes, display);
}








//scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
