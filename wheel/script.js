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





//------------------------------------------------------------------------------------

let clicks = 0;
let degrees = 0;
let wheel = document.querySelector('#fortune-wheel');
let play = document.querySelector('.fa-play-circle');
let lock = document.querySelector('.fa-lock');

function spinIt() {
        clicks++;
        //random degrees
        degrees = Math.floor(500+ Math.random() * 5000);
        console.log(degrees);
        wheel.style.transition = "all 6s ease-out";
        wheel.style.transform = `rotate(${degrees}deg)`;
        console.log(clicks+" >>");

    //static degrees
    //  wheel.style.animation = "spinRotation 3.5s";
    // wheel.style.animationFillMode = "both";
    // wheel.style.transformOrigin = "center";x


    play.style.visibility = "hidden";
    lock.style.visibility = "visible";
function jdu




}

// console.log(window.getComputedStyle(document.querySelector('#inner-spin'), ':after'));


// function setItemToLocaleStorage(){
//
// }
//
// function getItemFromLocaleStorage(){
//     localeStorage.setItem();
// }










