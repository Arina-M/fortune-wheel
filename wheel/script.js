/*let degree = 1800;
let clicks = 0;
function fun (){
    ('#spin').click(function(){
        clicks ++;
        let newDegree = degree*clicks;
        let extraDegree = 385;
        let totalDegree = newDegree+extraDegree;
        ('#fortune-wheel .sec').forEach(function(){
            let t = this;
            let noY = 0;
            let c = 0;
            let n = 700;
            let interval = setInterval(function () {
                c++;
                if (c === n) {
                    clearInterval(interval);
                }
                let aoY = t.offset().top;
                ("#txt").innerHTML(aoY);
                console.log(aoY);
                if(aoY < 23.89){ console.log('<<<<<<<<');
                    ('#spin').addClass('spin');
                    setTimeout(function () {
                        ('#spin').removeID('spin');
                    }, 100);
                }
            }, 10);
            ('#inner-wheel').style({ 'transform' : 'rotate(' + totalDegree + 'deg)' });
            noY = t.offset().top;
        });
    });
}


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function changeHref() {
    window.location.href='https://vc-education.ru/rozygrysh_win1';
    var user=getCookie("username");
    if (user == "") {
        user = "username";
        if (user != "" && user != null) {
            setCookie("username", user, 300);
            $("#spin").hide();
            $("#spin2").css('display','block'); }
    }
}
var wheelCookie = getCookie("username");
if (wheelCookie == "username") {
    $("#spin").hide();
    $("#spin2").css('display','block');
    console.log('coockies_full');
}
else {
    $("#spin").show();
    console.log('coockies_empty');
}
*/
/*function changeHref() { window.location.href='https://vc-education.ru/rozygrysh_win1'; /*var date = new Date(); date.setTime(date.getTime() + (60 * 2000));*/ /*$.cookie("wheel", "", {expires: 2, path: '/' }); $("#spin").hide(); $("#spin2").css('display','block'); }; if ( $.cookie("popup") == null ){ $("#spin").show(); console.log('true'); } else { $("#spin").hide(); $("#spin2").css('display','block'); console.log('false'); }*/




// to object? |
//------------------------------------------------------------------------------------
                   //discount | degrees | colour
/*let discountArray = [['Скидка1', 60, '832c54'],
                     ['Скидка2', 120, '627473'],
                     ['Скидка3', 180, '34495e'],
                     ['Скидка4', 240, 'e7e3e3'],
                     ['Скидка5', 300, 'a85c7f'],
                     ['Скидка6', 360, '293540']];



let arrayDiv = [];


function getDiv(){
    discountArray.forEach(function(item, index){
        arrayDiv.push(`<div class="discount${index+1}" >${item[0]}</div>`);
    });
    return arrayDiv.join('');
}

//todo
function getStyle(){
    // let divs = getDiv();
    discountArray.forEach(function (item, index){
        let div = document.querySelector(`.discount${index+1}`);
        div.style.borderColor = `${item[2]} transparent`;
        div.style.transform = `rotate:${item[1]}deg`;
        // div.style.
    });
}

getStyle();

function mainHTML(){
    let mainHTML = `
    <div id="inner-wheel2">
        <div class="sec">
             ${getDiv()}
        </div>
    </div> 
    `;

    document.write(mainHTML);
    console.log(mainHTML);

    document.body.insertBefore(mainHTML, wheel);

}


mainHTML();
*/
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






