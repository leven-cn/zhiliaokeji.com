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