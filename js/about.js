
// 获取列表
var aboutList = document.getElementById("about_list");
var aboutListLi = aboutList.getElementsByTagName("li");

var index = 0;
aboutListLi[0].style.opacity = "1";

var figcaptionTyping = aboutListLi[0].getElementsByTagName("figcaption")[0];
var figcaptionList = ["Since 2014","情报站 2018"];

loopTyping(figcaptionTyping, figcaptionList);


var aboutBtn = document.getElementById("about-btn");

// 上下按钮class列表
var listCLass = ['crow','vaquita','iguana','damselfly'];
aboutBtn.className = listCLass[index];

var up = document.getElementById("up");
var down = document.getElementById("down");

// 点击上一页
down.onclick = function(){
  aboutBtn.className = "";
  aboutListLi[index].style.opacity = "0";
  index++;
  if(index == aboutListLi.length) {
    index = 0;
  }
  aboutBtn.className = listCLass[index];
  aboutListLi[index].style.opacity = "1";

  if(index == 0){
    loopTyping(figcaptionTyping, figcaptionList);
  }

  if(index == 1){
    doIndexPath();
    doIndexComputer();
  }
  if(index == 2){
    typingIndex();
    setTimeout("iconShow()",2000);
  }
}

down.onmouseup = function (){
  this.style.transform = ""
}
down.onmousedown = function (){
  this.style.transform = "scale(1.07)"
}

// 点击下一页
var macComputer = document.getElementById("mac");
var macStroke = document.getElementById("mac-stroke");
var macStrokePath = macStroke.getElementsByTagName("path");
up.onclick = function() {
  aboutBtn.className = "";
  aboutListLi[index].style.opacity = "0";
  index--;
  if(index < 0) {
    index = aboutListLi.length-1;
  }
  aboutBtn.className = listCLass[index];
  aboutListLi[index].style.opacity = "1";

  if(index == 0){
    loopTyping(figcaptionTyping, figcaptionList);
  }

  if(index == 1){
    doIndexPath();
    doIndexComputer();
  }
  if(index == 2){
    typingIndex();
    setTimeout("iconShow()",2000)
  }
}

up.onmouseup = function (){
  this.style.transform = ""
}
up.onmousedown = function (){
  this.style.transform = "scale(1.07)"
}

// 进入知识引擎页面
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// 电脑画线动画
async function doIndexPath(){
  var originalStrokeStyle1 = new Array(10);
  var originalStrokeStyle2 = new Array(10);
  for(var i=0; i<macStrokePath.length; i++){
    originalStrokeStyle1[i] = macStrokePath[i].style.strokeDasharray;
    originalStrokeStyle2[i] = macStrokePath[i].style.strokeDashoffset;
  }
  for(var i = 0; i<macStrokePath.length;i++){
    macStrokePath[i].style.removeProperty("animation");
    macStrokePath[i].style.removeProperty("stroke-dasharray");
    macStrokePath[i].style.removeProperty("stroke-dashoffset");
  }
  await sleep(500);
  for(var i = 0; i<macStrokePath.length;i++){
    macStrokePath[i].style.setProperty("animation","dash 3s 1");
    macStrokePath[i].style.setProperty("stroke-dasharray", originalStrokeStyle1[i]);
    macStrokePath[i].style.setProperty("stroke-dashoffset", originalStrokeStyle2[i]);
  }
}

// 电脑淡出动画
async function doIndexComputer(){  
    macComputer.style.removeProperty("animation");
    await sleep(500);
    macComputer.style.setProperty("animation","dash1 4s 1");
}

// 情报站手机打字效果
var typing = document.getElementById("typing");
async function typingIndex(){
  typing.style.animation = "";
  typing.style.opacity= "0";
  await sleep(500);
  typing.style.animation = "typing 3s steps(30,end)";
  typing.style.opacity= "1";
}

// 图标出现效果
var listIcon = document.getElementById("list-icon");
var listIconEm = listIcon.getElementsByTagName("em");
async function iconShow(){
  for(var i=0; i<listIconEm.length;i++){
    listIconEm[i].style.opacity = "0";
    listIconEm[i].style.animation = "";
    await sleep(500);
    listIconEm[i].style.animation = "emList 2s 1";
    listIconEm[i].style.opacity = "1";
  }
}
