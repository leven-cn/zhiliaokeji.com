var exp = document.getElementById("explore");
var main = document.getElementsByTagName("main");
var list = main[0].getElementsByTagName("ul")[0];
list.style.position = "fixed";
list.style.top = window.innerHeight;

// 首页 -> 开始探索
exp.onclick = function(){
 times = setInterval(function(){
    var speed = parseInt(getComputedStyle(list).top) - 10;
    if(speed < 0){
      speed = 0;
    }
    list.style.top = speed + "px";
    if(speed == 0){
      speed = 0;
      clearInterval(times);
    }
    setTimeout(function(){
      typing[0].style.animation = "typing 3s steps(30,end)";
      typing[0].style.opacity= "1";
    },1000)
    
    setTimeout(function(){
      typingEm.style.animation = "typingEm 3s";
      typingEm.style.animationFillMode= "forwards";
    },2500)
  },8)
}


var btn = document.getElementById("btn");
var figure = document.getElementById("figure");
var icon = document.getElementById("icon");
var OlList = icon.getElementsByTagName("ol")[0];
var liList = OlList.getElementsByTagName("li");
var scanSvg = icon.getElementsByTagName("svg");
var wechat = document.getElementById("wechat");
var qrcode = document.getElementById("qrcode");
var Tag = document.getElementById("tag");


// 收集情报
btn.onclick = function(){
  this.style.display = "none";
  iconRotate();
  setTimeout(function(){
    qrcode.style.width = "12rem";
    qrcode.style.transition = "all 1s";
    Tag.style.opacity = "1";
    scanning();
  },1000)
  setTimeout(function(){
    iconShow();
  },1200)
}

wechat.onmousemove = function(){
  qrcode.style.width = "12rem";
  qrcode.style.opacity = "1";
  Tag.style.opacity = "1";
}

wechat.onmouseout = function(){
  qrcode.style.width = "0";
  qrcode.style.opacity = "0";
  Tag.style.opacity = "0";
}

// 图标旋转效果
function iconRotate() {
  figure.style.animation = "rotate 1s 8";
  figure.style.animationFillMode= "forwards";
}
function iconRotate1() {
  figure.style.animation = "";
}
figure.addEventListener("animationend",iconRotate1);


// 图标出现效果
function iconShow() {
  var timesList = [600, 200, 200, 1500, 200, 200, 1800, 200, 200, 600];
  var i = 0;
  doIconShow(timesList, i);
}

function doIconShow(timesList, i) {
  if(i<liList.length){
    item = timesList.shift();
    setTimeout(function(){
      liList[i].style.animation = "liList 2s 1";
      liList[i].style.animationFillMode= "forwards";
      i++;
      doIconShow(timesList, i);
    }, item);
  }
}

for(var i=0; i<liList.length; i++){
  liList[i].addEventListener("animationend",iconShow);
}


// 扫描线效果
function scanning() {
  scanSvg[0].style.animation = "scanning 2s linear 3";
}
scanSvg[0].addEventListener("animationend", scanning);

// 打字效果
var typing = icon.getElementsByTagName("p");
var typingEm = typing[0].getElementsByTagName("em")[0];
