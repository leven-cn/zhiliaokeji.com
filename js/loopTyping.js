/**
 * 
 */

var index = 0;
var listIndex = 0;
var nextFlag = false;
var container = null;
var typingList = null;
var intervalId = null;
function loopTyping(_container, _typingList){
  container = _container;
  typingList = _typingList;
  intervalId = setInterval(function(){
    _typing();
  }, 200);
}

function _typing(){
  if(nextFlag){
    return;
  }
  if(listIndex >= typingList.length){
    clearInterval(intervalId);
    return;
  }

  var text = typingList[listIndex];
  if(index < text.length){
      container.innerHTML = text.slice(0, ++index) + '_';
  }else{
    container.innerHTML = text.slice(0, index);
    nextFlag = true;
    index = 0;
    listIndex++;
    setTimeout(function(){
      nextFlag = false;
      _typing();
    }, 1200);
  }
}


