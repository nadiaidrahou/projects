!function(s){"use strict";var e,o,n,t,i,r,a,h,l,p,f,u,c,d,v,C=(n={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},t=((e=/iPhone|iPad|iPod/i.test(navigator.userAgent))&&s(window).load(function(){s("body").children().on("click",s.noop)}),e),i="behavior"in(o=document.documentElement.style)&&"fill"in o&&/iemobile/i.test(navigator.userAgent),r=function(s,e){var o=n.menuClass;e.cssArrows&&(o+=" "+n.menuArrowClass),s.toggleClass(o)},a=function(s){s.children("a").toggleClass(n.anchorClass)},h=function(s){var e=s.css("ms-touch-action");e="pan-y"===e?"auto":"pan-y",s.css("ms-touch-action",e)},l=function(e,o){var n="li:has("+o.popUpSelector+")";s.fn.hoverIntent&&!o.disableHI?e.hoverIntent(f,u,n):e.on("mouseenter.superfish",n,f).on("mouseleave.superfish",n,u);var r="MSPointerDown.superfish";t||(r+=" touchend.superfish"),i&&(r+=" mousedown.superfish"),e.on("focusin.superfish","li",f).on("focusout.superfish","li",u).on(r,"a",o,p)},p=function(e){var o=s(this),n=o.siblings(e.data.popUpSelector);n.length>0&&n.is(":hidden")&&(o.one("click.superfish",!1),"MSPointerDown"===e.type?o.trigger("focus"):s.proxy(f,o.parent("li"))())},f=function(){var e=s(this),o=v(e);clearTimeout(o.sfTimer),e.siblings().superfish("hide").end().superfish("show")},u=function(){var e=s(this),o=v(e);t?s.proxy(c,e,o)():(clearTimeout(o.sfTimer),o.sfTimer=setTimeout(s.proxy(c,e,o),o.delay))},c=function(e){e.retainPath=s.inArray(this[0],e.$path)>-1,this.superfish("hide"),!this.parents("."+e.hoverClass).length&&(e.onIdle.call(d(this)),e.$path.length&&s.proxy(f,e.$path)())},d=function(s){return s.closest("."+n.menuClass)},v=function(s){return d(s).data("sf-options")},{hide:function(e){if(this.length){var o=v(this);if(!o)return this;var n=!0===o.retainPath?o.$path:"",t=this.find("li."+o.hoverClass).add(this).not(n).removeClass(o.hoverClass).children(o.popUpSelector),i=o.speedOut;e&&(t.show(),i=0),o.retainPath=!1,o.onBeforeHide.call(t),t.stop(!0,!0).animate(o.animationOut,i,function(){var e=s(this);o.onHide.call(e)})}return this},show:function(){var s=v(this);if(!s)return this;var e=this.addClass(s.hoverClass).children(s.popUpSelector);return s.onBeforeShow.call(e),e.stop(!0,!0).animate(s.animation,s.speed,function(){s.onShow.call(e)}),this},destroy:function(){return this.each(function(){var e,o=s(this),t=o.data("sf-options");if(!t)return!1;e=o.find(t.popUpSelector).parent("li"),clearTimeout(t.sfTimer),r(o,t),a(e),h(o),o.off(".superfish").off(".hoverIntent"),e.children(t.popUpSelector).attr("style",function(s,e){return e.replace(/display[^;]+;?/g,"")}),t.$path.removeClass(t.hoverClass+" "+n.bcClass).addClass(t.pathClass),o.find("."+t.hoverClass).removeClass(t.hoverClass),t.onDestroy.call(o),o.removeData("sf-options")})},init:function(e){return this.each(function(){var o=s(this);if(o.data("sf-options"))return!1;var t,i,p=s.extend({},s.fn.superfish.defaults,e),f=o.find(p.popUpSelector).parent("li");p.$path=(t=o,i=p,t.find("li."+i.pathClass).slice(0,i.pathLevels).addClass(i.hoverClass+" "+n.bcClass).filter(function(){return s(this).children(i.popUpSelector).hide().show().length}).removeClass(i.pathClass)),o.data("sf-options",p),r(o,p),a(f),h(o),l(o,p),f.not("."+n.bcClass).superfish("hide",!0),p.onInit.call(this)})}});s.fn.superfish=function(e,o){return C[e]?C[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?s.error("Method "+e+" does not exist on jQuery.fn.superfish"):C.init.apply(this,arguments)},s.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:s.noop,onBeforeShow:s.noop,onShow:s.noop,onBeforeHide:s.noop,onHide:s.noop,onIdle:s.noop,onDestroy:s.noop},s.fn.extend({hideSuperfishUl:C.hide,showSuperfishUl:C.show})}(jQuery);