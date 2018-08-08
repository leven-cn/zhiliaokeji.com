/**
 * 打印多段文字
 */

var _index = 0;
var _listIndex = 0;
var _nextFlag = false;
var _container = null;
var _typingList = null;
var _intervalId = null;
function loopTyping(_c, _t){
  _container = _c;
  _typingList = _t;
  _intervalId = setInterval(function(){
    _typing();
  }, 200);
}

function _typing(){
  if(_nextFlag){
    return;
  }
  if(_listIndex >= _typingList.length){
    clearInterval(_intervalId);
    return;
  }

  var text = _typingList[_listIndex];
  if(_index < text.length){
      _container.innerHTML = text.slice(0, ++_index) + '_';
  }else{
    _container.innerHTML = text.slice(0, _index);
    _nextFlag = true;
    _index = 0;
    _listIndex++;
    setTimeout(function(){
      _nextFlag = false;
      _typing();
    }, 1200);
  }
}


