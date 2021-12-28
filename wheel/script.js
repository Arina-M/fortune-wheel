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
    if(window.localStorage.getItem("spin_used") == '1') {
        return false;
    }

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

    window.localStorage.setItem("spin_used", "1");

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


function goHome() {
    document.location = 'http://strongj.com.ua';
}

//timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;

    let intervalPtr = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalPtr);
            goHome();
        }


    }, 1000);
}


function timer () {
    let eightMinutes = 60 * 8,
        display = document.querySelector('#time');
    startTimer(eightMinutes, display);
}


document.addEventListener("DOMContentLoaded", function(event) {

    if(window.localStorage.getItem("spin_used") == '1') {
        play.style.visibility = "hidden";
        lock.style.visibility = "visible";
    }

    // console.log(window.localStorage.getItem("spin_used"));
    // $('#go-to-wheel-btn').click(function(e){
    //     $(this).attr('id', '');
    //     $('#go-to-wheel').click();
    // });

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});

