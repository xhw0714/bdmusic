var dpr = 1 / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+ dpr +',minimum-scale='+ dpr +',maximum-scale='+ dpr +',user-scalable=no" />');

var w = document.documentElement.clientWidth / 10;
var html = document.getElementsByTagName('html')[0];
html.style.fontSize = w + 'px';