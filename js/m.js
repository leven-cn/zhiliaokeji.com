var str = '做一个有追求的开发者';
var i = 0;
function typing(){
  var heTyping = document.getElementsByTagName("h1")[0];
  if (i <= str.length) {
    heTyping.innerHTML = str.slice(0, i++) + '_';
    setTimeout('typing()', 200);
  }
  else{
    heTyping.innerHTML = str;//结束打字,移除 _ 光标
  }
}
typing();

try {
  setTimeout(function(){
    window.addEventListener("deviceorientation", orientationHandler, false);
  },2500)
  function orientationHandler(event) {
    var arrow = document.getElementsByTagName("main")[0];
    arrow.style.opacity = "1";
    if(Math.round(event.gamma) > 10){ // 扭转设备
      arrow.style.background= "#F6D860";
      arrow.innerHTML = "<p>领先一步步步领先</p>"
    }else if(Math.round(event.gamma) < -20){ // 扭转设备
      arrow.style.background= "#64d6e2";
      arrow.innerHTML = "<p>善待知识，就是善待自己</p>"
    }else if(Math.round(event.beta) > 40){ // 前后旋转
      arrow.style.background= "#ba94de";
      arrow.innerHTML = "<p>since 2014</p>"
    }else if(Math.round(event.beta) < 150){ // 前后旋转
      arrow.style.background= "#F68F6F";
      arrow.innerHTML = "<p>不辜负时间</p>"
      
    }
  }
}
catch (e) {
  arrow.innerHTML = "请在微信端打开页面";
}