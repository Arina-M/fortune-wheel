
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


    degrees = 2800;
    console.log(degrees);
    wheel.style.transition = "all 6s ease-out";
    wheel.style.transform = `rotate(${degrees}deg)`;
    wheel.style.animationFillMode = "both";
    console.log(clicks + " >>");



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
