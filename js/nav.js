"use strict";for(var hs=document.getElementsByClassName("h"),i=0;i<hs.length;i++)hs[i].onclick=function(){var s=this.getAttribute("diy"),a=document.getElementsByClassName("show-b");for(j=0;j<a.length;j++)"0"==s?a[0].className="show-b cl act":"1"==s?a[1].className="show-b cl act":a[2].className="show-b cl act";for(var e=0;e<hs.length;e++)"active h"==hs[e].className&&(hs[e].className="h",a[e].className="show-b cl");this.className="active h";s=this.getAttribute("diy"),a=document.getElementsByClassName("show-b");for(j=0;j<a.length;j++)"0"==s?a[0].className="show-b cl act":"1"==s?a[1].className="show-b cl act":a[2].className="show-b cl act"};