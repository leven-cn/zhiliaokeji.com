var exp = document.getElementById("explore");
var main = document.getElementsByTagName("main");
var ul = main[0].getElementsByTagName("ul")[0];
ul.style.position = "fixed";
ul.style.top = window.innerHeight;

// 首页 -> 开始探索
// 默认切换到情报站
var intelligencePhone = document.getElementById("intelligence-phone");
var typing = intelligencePhone.getElementsByTagName("p");
var typingEm = typing[0].getElementsByTagName("em")[0];
exp.onclick = function(){
 times = setInterval(function(){
    var speed = parseInt(getComputedStyle(ul).top) - 10;
    if(speed < 0){
      speed = 0;
    }
    ul.style.top = speed + "px";
    if(speed == 0){
      speed = 0;
      clearInterval(times);
    }

    // 情报站手机打字效果
    setTimeout(function(){
      typing[0].style.animation = "typing 3s steps(30,end)";
      typing[0].style.opacity= "1";
    },1000);
    // 强调“正”字
    setTimeout(function(){
      typingEm.style.animation = "typingEm 3s";
      typingEm.style.animationFillMode= "forwards";
    },2500);
  },8);
};


/**
 * 情报站
 */
var intelligenceGetBtn = document.getElementById("intelligence-get-btn");
var qrcode = document.getElementById("qrcode");
var tag = document.getElementById("tag");

// 收集情报
intelligenceGetBtn.onclick = function(){
  this.style.display = "none";
  iconRotate();
  setTimeout(function(){
    qrcode.style.width = "12rem";
    qrcode.style.transition = "all 1s";
    tag.style.opacity = "1";
    scanning();
  },1000)
  setTimeout(function(){
    iconShow();
  },1200)
}

// 情报站图标旋转效果
var intelligenceIcon = document.getElementById("intelligence-icon");
function iconRotate() {
  intelligenceIcon.style.animation = "rotate 1s 8";
  intelligenceIcon.style.animationFillMode= "forwards";
}
function iconRotate1() {
  intelligenceIcon.style.animation = "";
}
intelligenceIcon.addEventListener("animationend", iconRotate1);

// 微信图标二维码显示
var wechat = document.getElementById("wechat");
wechat.onmousemove = function(){
  qrcode.style.width = "12rem";
  qrcode.style.opacity = "1";
  tag.style.opacity = "1";
}
wechat.onmouseout = function(){
  qrcode.style.width = "0";
  qrcode.style.opacity = "0";
  tag.style.opacity = "0";
}

// 图标出现效果
var ol = intelligencePhone.getElementsByTagName("ol")[0];
var liList = ol.getElementsByTagName("li");
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
  liList[i].addEventListener("animationend", iconShow);
}

// 扫描线效果
var scanSvg = intelligencePhone.getElementsByTagName("svg");
function scanning() {
  scanSvg[0].style.animation = "scanning 2s linear 3";
}
scanSvg[0].addEventListener("animationend", scanning);
