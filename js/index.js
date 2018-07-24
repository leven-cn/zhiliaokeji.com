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
  },8)
}


var btn = document.getElementById("btn");
var figure = document.getElementById("figure");
var icon = document.getElementById("icon");
var OlList = icon.getElementsByTagName("ol")[0];
var liList = OlList.getElementsByTagName("li");
var scanning = icon.getElementsByTagName("svg");
var wechat = document.getElementById("wechat");
var qrcode = document.getElementById("qrcode");
var Tag = document.getElementById("tag");


// 收集情报
btn.onclick = function(){
  this.style.display = "none";
  myFunction();
  setTimeout(function(){
    qrcode.style.width = "12rem";
    qrcode.style.transition = "all 1s";
    Tag.style.opacity = "1";
    myEndFunction();
    mySvg();
  },1000)
  setTimeout(function(){
    mySvg();
  },1500)
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
function myFunction() {
  figure.style.animation = "rotate 1s 8";
  figure.style.animationFillMode= "forwards";
}
figure.addEventListener("animationend",myFunction);


// 图标出现效果
function myEndFunction() {
  setTimeout(function(){
    liList[0].style.animation = "liList 2s 1";
    liList[0].style.animationFillMode= "forwards";
  },800)
  setTimeout(function(){
    liList[1].style.animation = "liList 2s 1";
    liList[1].style.animationFillMode= "forwards";
  },800)
  setTimeout(function(){
    liList[2].style.animation = "liList 2s 1";
    liList[2].style.animationFillMode= "forwards";
  },800)
  setTimeout(function(){
    liList[3].style.animation = "liList 2s 1";
    liList[3].style.animationFillMode= "forwards";
  },3000)
  setTimeout(function(){
    liList[4].style.animation = "liList 2s 1";
    liList[4].style.animationFillMode= "forwards";
  },3000)
  setTimeout(function(){
    liList[5].style.animation = "liList 2s 1";
    liList[5].style.animationFillMode= "forwards";
  },3000)
  setTimeout(function(){
    liList[6].style.animation = "liList 2s 1";
    liList[6].style.animationFillMode= "forwards";
  },5500)
  setTimeout(function(){
    liList[7].style.animation = "liList 2s 1";
    liList[7].style.animationFillMode= "forwards";
  },5500)
  setTimeout(function(){
    liList[8].style.animation = "liList 2s 1";
    liList[8].style.animationFillMode= "forwards";
  },5500)
  setTimeout(function(){
    liList[9].style.animation = "liList 2s 1";
    liList[9].style.animationFillMode= "forwards";
  },6500)
}

for(var i=0; i<liList.length; i++){
  liList[i].addEventListener("animationend",myEndFunction);
}


// 扫描线效果
function mySvg() {
  scanning[0].style.animation = "scanning  2s linear 3";
}
scanning[0].addEventListener("animationend",mySvg);

// 打字效果
var typing = icon.getElementsByTagName("p");
setTimeout(function(){
  typing[0].style.animation = "typing 3s steps(30,end)";
  typing[0].style.opacity= "1";
},2500)

var typingEm = typing[0].getElementsByTagName("em")[0];

console.log(typingEm)

setTimeout(function(){
  typingEm.style.animation = "typingEm 3s";
  typingEm.style.animationFillMode= "forwards";
},4000)