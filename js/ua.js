document.addEventListener('DOMContentLoaded', function() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  if(bIsAndroid || bIsIphoneOs){
    window.location.href = "/m.html";
  }
}, false);