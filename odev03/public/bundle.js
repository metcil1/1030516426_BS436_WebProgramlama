var Resimbul;(()=>{"use strict";var e={d:(t,i)=>{for(var r in i)e.o(i,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{newGame:()=>c,Game:()=>o});const i=[{src:"public/img/köpek.jpg"},{src:"public/img/köpek.jpg"},{src:"public/img/kedi.jpg"}];let r,d,n=i.length;function c(){document.getElementById("img-0").setAttribute("src","public/img/red.jpg"),document.getElementById("img-1").setAttribute("src","public/img/red.jpg"),document.getElementById("img-2").setAttribute("src","public/img/red.jpg"),d=0}function o(e){r=Math.floor(Math.random()*n);var t=e.id;document.getElementById(t).setAttribute("src",i[r].src),d++,"public/img/kedi.jpg"===i[r].src?document.getElementById("bilgi").appendChild(document.createTextNode("Tebrikler kazandınız!")):2==d&&document.getElementById("bilgi").appendChild(document.createTextNode("Kaybettiniz"))}c(),Resimbul=t})();