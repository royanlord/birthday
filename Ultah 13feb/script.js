var a = new Audio("https://dl.dropboxusercontent.com/s/l3r7js8rx0xqgik/gellen-martadinata-selamat-ulang-tahun_BMf3ghyw.mp3?dl=0");
// var a = new Audio("https://dl.dropboxusercontent.com/s/e93f5kxsmtankf3/Best%20Happy%20Birthday%20To%20You%20_%20Happy%20Birthday%20Songs%20Remix%202020%28M4A_128K%29_1.m4a?dl=0")

window.addEventListener('click',() => {
a.play();
});

function start(){
    var clab= document.querySelector("#clab")
    clab.style.display = "block";//this is your all tag in clab
    document.getElementById("loader").style.background="trasparent";
    document.getElementById("loader").style.display="none";
    document.getElementById("loader").style.transition ="2s";
    document.getElementById("loader").innerHTML =" ";
}

setInterval(start, 3000);