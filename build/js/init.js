webpackJsonp([30],{722:function(e,t,n){e.exports=n(723)},723:function(e,t){var n={};!function(){function setSize(){var e,t,o,i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e=i,t=r,o=1.9*r<i?i/14/1.9:r<i?r/14:i>=768?i/14:i/10,document.documentElement.style.fontSize=o+"px",n.APP_PX=o,n.APP_W=e,n.APP_H=t}var e;setSize(),window.addEventListener("resize",function(){window.lockResize||(clearTimeout(e),e=setTimeout(setSize,300))}),window.addEventListener("orientationchange",function(t){window.lastRotate!==window.orientation&&(clearTimeout(e),e=setTimeout(setSize,300),window.lastRotate=window.orientation)}),n.setSize=setSize,n.allowSessionStorage=function(){var e=window.sessionStorage;try{return e.setItem("test_sessionStorage","1"),e.removeItem("test_sessionStorage"),!0}catch(e){return!1}}(),n.allowLocalStorage=function(){var e=window.localStorage;try{return e.setItem("test_localstorage","1"),e.removeItem("test_localstorage"),!0}catch(e){return!1}}()}(),window.HYAPP=n}},[722]);