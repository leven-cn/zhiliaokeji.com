
/**
 * 防止运营商网络劫持
 *
 * 一直以来有一个问题困扰着我，就是网页的js被人替换掉，然后造成自己辛辛苦苦
 * 写的代码，变成了bug代码，用户又说点不动啦，无奈之下，自己也尝试过工信部投
 * 诉，但是投诉没多久，牛皮癣出来了.
 * 
 * 为了暂时解决这个问题，就临时想了一个办法解决。
 */

var IP = "124.232.160.178";
function isHacked() {
    var ss = document.getElementsByTagName("script");
    var hacked = false;  //是否劫持
    for (var i = 0; i < ss.length; i++) {
        if(ss[i].src.indexOf(IP)>0){
            hacked = true;
        }
    }
    return hacked;
};
if(isHacked()){
    console.log("一直以来有一个问题困扰着我，就是网页的js被人替换掉，然后造成自己辛辛苦苦" +
    "写的代码，变成了bug代码，用户又说点不动啦，无奈之下，自己也尝试过工信部投" +
    "诉，但是投诉没多久，牛皮癣出来了.");

    //最好再加上一段cookie计数的逻辑，比如一个1分钟的cookie的key值中，判断此情况刷新次数，设置个上限。
    //如果不这样，万一每次都被劫持的话，那么直接页面无限刷了，直接被自己并发攻击了。。。
    setTimeout(function(){
        alert("湖南电信专属劫持IP(124.232.160.178)劫持你的网络，请打电话投诉！" +
        "\n中华人民共和国工业和信息化部电信用户申诉受理中心网址：" +
        "\nhttp://www.chinatcc.gov.cn:8080/cms/shensus/" +
        "\n工信部申诉电话：010-12300");
        console.log("湖南电信专属劫持IP(124.232.160.178)劫持你的网络，请打电话投诉！");
        console.log("最后补充一句: 期待运营商优化劫持的js代码，减少劫持的频率。求放过");
        window.location.href = window.location.href;
    }, 200);
};
