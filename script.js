var mysound = document.getElementById("mysound");
var icon = document.getElementById("icon");

icon.addEventListener("click", ()=>{
    if (mysound.paused) {
        mysound.play();
        icon.src = "images/pause.png";
    }else{
        mysound.pause();
        icon.src = "images/play.png";   
    }
});


var menu_btn = document.getElementById("menu_btn");
var side_btn = document.getElementById("side_nav");

side_btn.style.right = "-250px";
menu_btn.onclick = function() {
    if (side_btn.style.right == "-250px"){
        side_btn.style.right = "0px"
    }else{
        side_btn.style.right = "-250px";
    }
}