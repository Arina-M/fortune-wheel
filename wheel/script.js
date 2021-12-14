
/*
let keyframes;
keyframes.insertRule("0% {
    -webkit-transform: translate(100px, 100px) rotate(" + (multiplier + 0) + "deg)
translate(-100px, -100px) rotate(" + (multiplier + 0) + "deg);
background-color: red;
}");
keyframes.insertRule("13% {
    -webkit-transform: translate(100px, 100px) rotate(" + (multiplier + 45) + "deg)
translate(-100px, -100px) rotate(" + (multiplier + 45) + "deg);
}");


// Gets the browser prefix
let browserPrefix;
let navigator;
navigator.sayswho = (function(){
    let N = navigator.appName, ua = navigator.userAgent, tem;
    let M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem = ua.match(/version\/([\.\d]+)/i))!= null) M[2] = tem[1];
    M = M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
    M = M[0];
    if(M === "Chrome") { browserPrefix = "webkit"; }
    if(M === "Firefox") { browserPrefix = "moz"; }
    if(M === "Safari") { browserPrefix = "webkit"; }
    if(M === "MSIE") { browserPrefix = "ms"; }
});
*/



let discountArr = [['-67% на персональные тренировки', 60],
                   ['-73% на гостевой абонемент', 180],
                   ['-50% на солярий', 240]];


let clicks = 0;
let degrees = 0;
let wheel = document.querySelector('#fortune-wheel');
let play = document.querySelector('.fa-play-circle');
let lock = document.querySelector('.fa-lock');


//spinning
function spinIt() {
    clicks++;
    //random degrees
    degrees = 2800;
    console.log(degrees);
    wheel.style.transition = "all 6s ease-out";
    wheel.style.transform = `rotate(${degrees}deg)`;
    wheel.style.animationFillMode = "both";
    console.log(clicks + " >>");

    //static degrees
    //  wheel.style.animation = "spinRotation 3.5s";
    // wheel.style.animationFillMode = "both";
    // wheel.style.transformOrigin = "center";


    play.style.visibility = "hidden";
    lock.style.visibility = "visible";
}







/*
function getDiscount(){
    let arrayDis = [];
    discountArray.forEach(function(item){
        // console.log(item) ;
        arrayDis.push(item[0]);
    });
     return arrayDis.join();
}

function getDegrees(){
    let arrayDegr = [];
    discountArray.forEach(function(item){
        // console.log(item) ;
        arrayDegr.push(item[1]);
    });
    return arrayDegr.join();

}

function getColour(){
    let arrayCol = [];
    discountArray.forEach(function(item){
        // console.log(item) ;
        arrayCol.push(item[2]);
    });
    return arrayCol.join();

}
*/

document.querySelectorAll('a[href^="#"').forEach(link => {

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
