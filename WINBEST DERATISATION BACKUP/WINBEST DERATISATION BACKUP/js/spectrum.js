!function(e,t,r){var a={beforeShow:c,move:c,change:c,show:c,hide:c,color:!1,flat:!1,showInput:!1,showButtons:!0,clickoutFiresChange:!1,showInitial:!1,showPalette:!1,showPaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",preferredFormat:!1,className:"",showAlpha:!1,theme:"sp-light",palette:["fff","000"],selectionPalette:[],disabled:!1},n=[],o=!!/msie/i.exec(e.navigator.userAgent),s=function(){function e(e,t){return!!~(""+e).indexOf(t)}var t=document.createElement("div").style;return t.cssText="background-color:rgba(0,0,0,.5)",e(t.backgroundColor,"rgba")||e(t.backgroundColor,"hsla")}(),i=function(){var e="";if(o)for(var t=1;t<=6;t++)e+="<div class='sp-"+t+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",e,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button class='sp-choose'></button>","</div>","</div>","</div>"].join("")}();function l(e,t,r){for(var a=[],n=0;n<e.length;n++){var o=tinycolor(e[n]),i=o.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";i+=tinycolor.equals(t,e[n])?" sp-thumb-active":"";var l=s?"background-color:"+o.toRgbString():"filter:"+o.toFilter();a.push('<span title="'+o.toRgbString()+'" data-color="'+o.toRgbString()+'" class="'+i+'"><span class="sp-thumb-inner" style="'+l+';" /></span>')}return"<div class='sp-cf "+r+"'>"+a.join("")+"</div>"}function c(){}function f(e){e.stopPropagation()}function d(e,t){var r=Array.prototype.slice,a=r.call(arguments,2);return function(){return e.apply(t,a.concat(r.call(arguments)))}}function u(r,a,n,s){a=a||function(){},n=n||function(){},s=s||function(){};var i=r.ownerDocument||document,l=!1,c={},f=0,d=0,u="ontouchstart"in e,$={};function h(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.returnValue=!1}function p(e){if(l){if(o&&document.documentMode<9&&!e.button)return g();var t=e.originalEvent.touches,n=t?t[0].pageX:e.pageX,s=t?t[0].pageY:e.pageY,i=Math.max(0,Math.min(n-c.left,d)),$=Math.max(0,Math.min(s-c.top,f));u&&h(e),a.apply(r,[i,$,e])}}function g(){l&&(t(i).unbind($),t(i.body).removeClass("sp-dragging"),s.apply(r,arguments)),l=!1}$.selectstart=h,$.dragstart=h,$["touchmove mousemove"]=p,$["touchend mouseup"]=g,t(r).bind("touchstart mousedown",function e(a){var o=a.which?3==a.which:2==a.button;a.originalEvent.touches,o||l||!1===n.apply(r,arguments)||(l=!0,f=t(r).height(),d=t(r).width(),c=t(r).offset(),t(i).bind($),t(i.body).addClass("sp-dragging"),u||p(a),h(a))})}function $(){e.console&&($=Function.prototype.bind?Function.prototype.bind.call(console.log,console):function(){Function.prototype.apply.call(console.log,console,arguments)}).apply(this,arguments)}var h="spectrum.id";t.fn.spectrum=function(c,$){if("string"==typeof c){var p=this,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=n[t(this).data(h)];if(e){var r=e[c];if(!r)throw Error("Spectrum: no such method: '"+c+"'");"get"==c?p=e.get():"container"==c?p=e.container:"option"==c?p=e.option.apply(e,g):"destroy"==c?(e.destroy(),t(this).removeData(h)):r.apply(e,g)}}),p}return this.spectrum("destroy").each(function(){var $=function c($,h){var p,g,b,v,m,_,y=10,w=(v=h,m=$,(_=t.extend({},a,v)).callbacks={move:d(_.move,m),change:d(_.change,m),show:d(_.show,m),hide:d(_.hide,m),beforeShow:d(_.beforeShow,m)},_),k=w.flat,x=w.showSelectionPalette,S=w.localStorageKey,P=w.theme,C=w.callbacks,H=(p=eH,function(){var e=this,t=arguments,r=function(){b=null,p.apply(e,t)};g&&clearTimeout(b),(g||!b)&&(b=setTimeout(r,10))}),R=!1,A=0,O=0,F=0,q=0,T=0,D=0,j=0,I=0,z=0,N=0,E=0,K=1,B=w.palette.slice(0),X=t.isArray(B[0])?B:[B],L=w.selectionPalette.slice(0),M=w.maxSelectionSize,W="sp-dragging",Y=null,G=$.ownerDocument,V=(G.body,t($)),J=!1,Q=t(i,G).addClass(P),U=Q.find(".sp-color"),Z=Q.find(".sp-dragger"),ee=Q.find(".sp-hue"),et=Q.find(".sp-slider"),er=Q.find(".sp-alpha-inner"),ea=Q.find(".sp-alpha"),en=Q.find(".sp-alpha-handle"),eo=Q.find(".sp-input"),es=Q.find(".sp-palette"),ei=Q.find(".sp-initial"),el=Q.find(".sp-cancel"),ec=Q.find(".sp-choose"),ef=V.is("input"),ed=ef&&!k,eu=ed?t("<div class='sp-replacer'><div class='sp-preview'><div class='sp-preview-inner'></div></div><div class='sp-dd'>&#9660;</div></div>").addClass(P).addClass(w.className):t([]),e$=ed?eu:V,eh=eu.find(".sp-preview-inner"),ep=w.color||ef&&V.val(),eg=!1,eb=w.preferredFormat,ev=eb,em=!w.showButtons||w.clickoutFiresChange;function e_(){Q.toggleClass("sp-flat",k),Q.toggleClass("sp-input-disabled",!w.showInput),Q.toggleClass("sp-alpha-enabled",w.showAlpha),Q.toggleClass("sp-buttons-disabled",!w.showButtons),Q.toggleClass("sp-palette-disabled",!w.showPalette),Q.toggleClass("sp-palette-only",w.showPaletteOnly),Q.toggleClass("sp-initial-disabled",!w.showInitial),Q.addClass(w.className),eH()}function e3(r){if(x){var a=tinycolor(r).toRgbString();if(-1===t.inArray(a,L))for(L.push(a);L.length>M;)L.shift();if(S&&e.localStorage)try{e.localStorage[S]=L.join(";")}catch(n){}}}function ey(){var e=e7(),r=t.map(X,function(t,r){return l(t,e,"sp-palette-row sp-palette-row-"+r)});L&&r.push(l(function e(){var t,r=[],a=L,n={};if(w.showPalette){for(var o=0;o<X.length;o++)for(var s=0;s<X[o].length;s++)n[t=tinycolor(X[o][s]).toRgbString()]=!0;for(o=0;o<a.length;o++)t=tinycolor(a[o]).toRgbString(),n.hasOwnProperty(t)||(r.push(a[o]),n[t]=!0)}return r.reverse().slice(0,w.maxSelectionSize)}(),e,"sp-palette-row sp-palette-row-selection")),es.html(r.join(""))}function e0(){if(w.showInitial){var e=eg,t=e7();ei.html(l([e,t],t,"sp-palette-row-initial"))}}function ew(){(O<=0||A<=0||q<=0)&&eH(),Q.addClass(W),Y=null}function e4(){Q.removeClass(W)}function ek(){var e=tinycolor(eo.val());e.ok?eS(e):eo.addClass("sp-validation-error")}function e6(){R?ex():e1()}function e1(){var r=t.Event("beforeShow.spectrum");if(R){eH();return}V.trigger(r,[e7()]),!(!1===C.beforeShow(e7())||r.isDefaultPrevented())&&(function e(){for(var t=0;t<n.length;t++)n[t]&&n[t].hide()}(),R=!0,t(G).bind("click.spectrum",ex),t(e).bind("resize.spectrum",H),eu.addClass("sp-active"),Q.removeClass("sp-hidden"),w.showPalette&&ey(),eH(),eP(),eg=e7(),e0(),C.show(eg),V.trigger("show.spectrum",[eg]))}function ex(r){(!r||"click"!=r.type||2!=r.button)&&R&&!k&&(R=!1,t(G).unbind("click.spectrum",ex),t(e).unbind("resize.spectrum",H),eu.removeClass("sp-active"),Q.addClass("sp-hidden"),tinycolor.equals(e7(),eg)||(em&&"cancel"!==r?e5(!0):eS(eg,!0)),C.hide(e7()),V.trigger("hide.spectrum",[e7()]))}function eS(e,t){if(!tinycolor.equals(e,e7())){var r=tinycolor(e),a=r.toHsv();z=a.h%360/360,N=a.s,E=a.v,K=a.a,eP(),r.ok&&!t&&(ev=eb||r.format)}}function e7(e){return e=e||{},tinycolor.fromRatio({h:z,s:N,v:E,a:Math.round(100*K)/100},{format:e.format||ev})}function e2(){eP(),C.move(e7()),V.trigger("move.spectrum",[e7()])}function eP(){eo.removeClass("sp-validation-error"),eC();var e=tinycolor.fromRatio({h:z,s:1,v:1});U.css("background-color",e.toHexString());var t=ev;K<1&&("hex"===t||"hex3"===t||"hex6"===t||"name"===t)&&(t="rgb");var r=e7({format:t}),a=r.toHexString(),n=r.toRgbString();if(s||1===r.alpha?eh.css("background-color",n):(eh.css("background-color","transparent"),eh.css("filter",r.toFilter())),w.showAlpha){var i=r.toRgb();i.a=0;var l=tinycolor(i).toRgbString(),c="linear-gradient(left, "+l+", "+a+")";o?er.css("filter",tinycolor(l).toFilter({gradientType:1},a)):(er.css("background","-webkit-"+c),er.css("background","-moz-"+c),er.css("background","-ms-"+c),er.css("background",c))}w.showInput&&eo.val(r.toString(t)),w.showPalette&&ey(),e0()}function eC(){var e=N*A,t=O-E*O;e=Math.max(-F,Math.min(A-F,e-F)),t=Math.max(-F,Math.min(O-F,t-F)),Z.css({top:t,left:e});var r=K*D;en.css({left:r-j/2});var a=z*q;et.css({top:a-I})}function e5(e){var t=e7();ef&&V.val(t.toString(ev)).change();var r=!tinycolor.equals(t,eg);eg=t,e3(t),e&&r&&(C.change(t),V.trigger("change.spectrum",[t]))}function eH(){var e,r,a,n,o,s,i,l,c,f;A=U.width(),O=U.height(),F=Z.height(),T=ee.width(),q=ee.height(),I=et.height(),D=ea.width(),j=en.width(),k||(Q.css("position","absolute"),Q.offset((e=Q,r=e$,a=e.outerWidth(),n=e.outerHeight(),o=r.outerHeight(),s=e[0].ownerDocument,i=s.documentElement,l=i.clientWidth+t(s).scrollLeft(),c=i.clientHeight+t(s).scrollTop(),f=r.offset(),f.top+=o,f.left-=Math.min(f.left,f.left+a>l&&l>a?Math.abs(f.left+a-l):0),f.top-=Math.min(f.top,f.top+n>c&&c>n?Math.abs(n+o-0):0),f))),eC()}function eR(){ex(),J=!0,V.attr("disabled",!0),e$.addClass("sp-disabled")}!function r(){if(o&&Q.find("*:not(input)").attr("unselectable","on"),e_(),ed&&V.after(eu).hide(),k)V.after(Q).hide();else{var a="parent"===w.appendTo?V.parent():t(w.appendTo);1!==a.length&&(a=t("body")),a.append(Q)}if(S&&e.localStorage){try{var n=e.localStorage[S].split(",#");n.length>1&&(delete e.localStorage[S],t.each(n,function(e,t){e3(t)}))}catch(s){}try{L=e.localStorage[S].split(";")}catch(i){}}function l(e){return e.data&&e.data.ignore?(eS(t(this).data("color")),e2()):(eS(t(this).data("color")),e5(!0),e2(),ex()),!1}e$.bind("click.spectrum touchstart.spectrum",function(e){J||e6(),e.stopPropagation(),t(e.target).is("input")||e.preventDefault()}),(V.is(":disabled")||!0===w.disabled)&&eR(),Q.click(f),eo.change(ek),eo.bind("paste",function(){setTimeout(ek,1)}),eo.keydown(function(e){13==e.keyCode&&ek()}),el.text(w.cancelText),el.bind("click.spectrum",function(e){e.stopPropagation(),e.preventDefault(),ex("cancel")}),ec.text(w.chooseText),ec.bind("click.spectrum",function(e){e.stopPropagation(),e.preventDefault(),eo.hasClass("sp-validation-error")||(e5(!0),ex())}),u(ea,function(e,t,r){K=e/D,r.shiftKey&&(K=Math.round(10*K)/10),e2()}),u(ee,function(e,t){z=parseFloat(t/q),e2()},ew,e4),u(U,function(e,t,r){if(r.shiftKey){if(!Y){var a,n;Y=Math.abs(e-N*A)>Math.abs(t-(O-E*O))?"x":"y"}}else Y=null;var o=!Y||"x"===Y,s=!Y||"y"===Y;o&&(N=parseFloat(e/A)),s&&(E=parseFloat((O-t)/O)),e2()},ew,e4),ep?(eS(ep),eP(),ev=eb||tinycolor(ep).format,e3(ep)):eP(),k&&e1();var c=o?"mousedown.spectrum":"click.spectrum touchstart.spectrum";es.delegate(".sp-thumb-el",c,l),ei.delegate(".sp-thumb-el:nth-child(1)",c,{ignore:!0},l)}();var eA={show:e1,hide:ex,toggle:e6,reflow:eH,option:function e(a,n){return a===r?t.extend({},w):n===r?w[a]:void(w[a]=n,e_())},enable:function e(){J=!1,V.attr("disabled",!1),e$.removeClass("sp-disabled")},disable:eR,set:function(e){eS(e),e5()},get:e7,destroy:function e(){V.show(),e$.unbind("click.spectrum touchstart.spectrum"),Q.remove(),eu.remove(),n[eA.id]=null},container:Q};return eA.id=n.push(eA)-1,eA}(this,c);t(this).data(h,$.id)})},t.fn.spectrum.load=!0,t.fn.spectrum.loadOpts={},t.fn.spectrum.draggable=u,t.fn.spectrum.defaults=a,t.spectrum={},t.spectrum.localization={},t.spectrum.palettes={},t.fn.spectrum.processNativeColorInputs=function(){var e=t("<input type='color' value='!' />")[0];"color"===e.type&&"!"!=e.value||t("input[type=color]").spectrum({preferredFormat:"hex6"})},function(e){var t=/^[\s,#]+/,r=/\s+$/,a=0,n=Math,o=n.round,s=n.min,i=n.max,l=n.random;function c(e,l){if(l=l||{},"object"==typeof(e=e||"")&&e.hasOwnProperty("_tc_id"))return e;var g,_,y,w,x,S,P,C,H,R,A,O,F,q,T,D,j,I,z,N,E=(g=e,_={r:0,g:0,b:0},y=1,w=!1,x=!1,"string"==typeof g&&(g=function e(a){a=a.replace(t,"").replace(r,"").toLowerCase();var n,o=!1;if($[a])a=$[a],o=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0};return(n=k.rgb.exec(a))?{r:n[1],g:n[2],b:n[3]}:(n=k.rgba.exec(a))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=k.hsl.exec(a))?{h:n[1],s:n[2],l:n[3]}:(n=k.hsla.exec(a))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=k.hsv.exec(a))?{h:n[1],s:n[2],v:n[3]}:(n=k.hex6.exec(a))?{r:b(n[1]),g:b(n[2]),b:b(n[3]),format:o?"name":"hex"}:!!(n=k.hex3.exec(a))&&{r:b(n[1]+""+n[1]),g:b(n[2]+""+n[2]),b:b(n[3]+""+n[3]),format:o?"name":"hex"}}(g)),"object"==typeof g&&(g.hasOwnProperty("r")&&g.hasOwnProperty("g")&&g.hasOwnProperty("b")?(_=(S=g.r,P=g.g,C=g.b,{r:255*p(S,255),g:255*p(P,255),b:255*p(C,255)}),w=!0,x="%"===String(g.r).substr(-1)?"prgb":"rgb"):g.hasOwnProperty("h")&&g.hasOwnProperty("s")&&g.hasOwnProperty("v")?(g.s=m(g.s),g.v=m(g.v),_=(H=g.h,R=g.s,A=g.v,H=6*p(H,360),R=p(R,100),A=p(A,100),O=n.floor(H),F=H-O,q=A*(1-R),T=A*(1-F*R),D=A*(1-(1-F)*R),j=O%6,I=[A,T,q,q,D,A][j],z=[D,A,A,T,q,q][j],N=[q,q,D,A,A,T][j],{r:255*I,g:255*z,b:255*N}),w=!0,x="hsv"):g.hasOwnProperty("h")&&g.hasOwnProperty("s")&&g.hasOwnProperty("l")&&(g.s=m(g.s),g.l=m(g.l),_=function e(t,r,a){var n,o,s;function i(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(t=p(t,360),r=p(r,100),a=p(a,100),0===r)n=o=s=a;else{var l=a<.5?a*(1+r):a+r-a*r,c=2*a-l;n=i(c,l,t+1/3),o=i(c,l,t),s=i(c,l,t-1/3)}return{r:255*n,g:255*o,b:255*s}}(g.h,g.s,g.l),w=!0,x="hsl"),g.hasOwnProperty("a")&&(y=g.a)),(isNaN(y=parseFloat(y))||y<0||y>1)&&(y=1),{ok:w,format:g.format||x,r:s(255,i(_.r,0)),g:s(255,i(_.g,0)),b:s(255,i(_.b,0)),a:y}),K=E.r,B=E.g,X=E.b,L=E.a,M=o(100*L)/100,W=l.format||E.format;return K<1&&(K=o(K)),B<1&&(B=o(B)),X<1&&(X=o(X)),{ok:E.ok,format:W,_tc_id:a++,alpha:L,toHsv:function(){var e=d(K,B,X);return{h:360*e.h,s:e.s,v:e.v,a:L}},toHsvString:function(){var e=d(K,B,X),t=o(360*e.h),r=o(100*e.s),a=o(100*e.v);return 1==L?"hsv("+t+", "+r+"%, "+a+"%)":"hsva("+t+", "+r+"%, "+a+"%, "+M+")"},toHsl:function(){var e=f(K,B,X);return{h:360*e.h,s:e.s,l:e.l,a:L}},toHslString:function(){var e=f(K,B,X),t=o(360*e.h),r=o(100*e.s),a=o(100*e.l);return 1==L?"hsl("+t+", "+r+"%, "+a+"%)":"hsla("+t+", "+r+"%, "+a+"%, "+M+")"},toHex:function(e){return u(K,B,X,e)},toHexString:function(e){return"#"+u(K,B,X,e)},toRgb:function(){return{r:o(K),g:o(B),b:o(X),a:L}},toRgbString:function(){return 1==L?"rgb("+o(K)+", "+o(B)+", "+o(X)+")":"rgba("+o(K)+", "+o(B)+", "+o(X)+", "+M+")"},toPercentageRgb:function(){return{r:o(100*p(K,255))+"%",g:o(100*p(B,255))+"%",b:o(100*p(X,255))+"%",a:L}},toPercentageRgbString:function(){return 1==L?"rgb("+o(100*p(K,255))+"%, "+o(100*p(B,255))+"%, "+o(100*p(X,255))+"%)":"rgba("+o(100*p(K,255))+"%, "+o(100*p(B,255))+"%, "+o(100*p(X,255))+"%, "+M+")"},toName:function(){return h[u(K,B,X,!0)]||!1},toFilter:function(e){var t=u(K,B,X),r=t,a=Math.round(255*parseFloat(L)).toString(16),n=a,o=l&&l.gradientType?"GradientType = 1, ":"";if(e){var s=c(e);r=s.toHex(),n=Math.round(255*parseFloat(s.alpha)).toString(16)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr=#"+v(a)+t+",endColorstr=#"+v(n)+r+")"},toString:function(e){e=e||this.format;var t=!1;return"rgb"===e&&(t=this.toRgbString()),"prgb"===e&&(t=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(t=this.toHexString()),"hex3"===e&&(t=this.toHexString(!0)),"name"===e&&(t=this.toName()),"hsl"===e&&(t=this.toHslString()),"hsv"===e&&(t=this.toHsvString()),t||this.toHexString()}}}function f(e,t,r){e=p(e,255),t=p(t,255),r=p(r,255);var a,n,o=i(e,t,r),l=s(e,t,r),c=(o+l)/2;if(o==l)a=n=0;else{var f=o-l;switch(n=c>.5?f/(2-o-l):f/(o+l),o){case e:a=(t-r)/f+(t<r?6:0);break;case t:a=(r-e)/f+2;break;case r:a=(e-t)/f+4}a/=6}return{h:a,s:n,l:c}}function d(e,t,r){e=p(e,255),t=p(t,255),r=p(r,255);var a,n,o=i(e,t,r),l=s(e,t,r),c=o-l;if(n=0===o?0:c/o,o==l)a=0;else{switch(o){case e:a=(t-r)/c+(t<r?6:0);break;case t:a=(r-e)/c+2;break;case r:a=(e-t)/c+4}a/=6}return{h:a,s:n,v:o}}function u(e,t,r,a){var n=[v(o(e).toString(16)),v(o(t).toString(16)),v(o(r).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}c.fromRatio=function(e,t){if("object"==typeof e){var r={};for(var a in e)e.hasOwnProperty(a)&&("a"===a?r[a]=e[a]:r[a]=m(e[a]));e=r}return c(e,t)},c.equals=function(e,t){return!!e&&!!t&&c(e).toRgbString()==c(t).toRgbString()},c.random=function(){return c.fromRatio({r:l(),g:l(),b:l()})},c.desaturate=function(e,t){var r=c(e).toHsl();return r.s-=(t||10)/100,r.s=g(r.s),c(r)},c.saturate=function(e,t){var r=c(e).toHsl();return r.s+=(t||10)/100,r.s=g(r.s),c(r)},c.greyscale=function(e){return c.desaturate(e,100)},c.lighten=function(e,t){var r=c(e).toHsl();return r.l+=(t||10)/100,r.l=g(r.l),c(r)},c.darken=function(e,t){var r=c(e).toHsl();return r.l-=(t||10)/100,r.l=g(r.l),c(r)},c.complement=function(e){var t=c(e).toHsl();return t.h=(t.h+180)%360,c(t)},c.triad=function(e){var t=c(e).toHsl(),r=t.h;return[c(e),c({h:(r+120)%360,s:t.s,l:t.l}),c({h:(r+240)%360,s:t.s,l:t.l})]},c.tetrad=function(e){var t=c(e).toHsl(),r=t.h;return[c(e),c({h:(r+90)%360,s:t.s,l:t.l}),c({h:(r+180)%360,s:t.s,l:t.l}),c({h:(r+270)%360,s:t.s,l:t.l})]},c.splitcomplement=function(e){var t=c(e).toHsl(),r=t.h;return[c(e),c({h:(r+72)%360,s:t.s,l:t.l}),c({h:(r+216)%360,s:t.s,l:t.l})]},c.analogous=function(e,t,r){t=t||6,r=r||30;var a=c(e).toHsl(),n=360/r,o=[c(e)];for(a.h=(a.h-(n*t>>1)+720)%360;--t;)a.h=(a.h+n)%360,o.push(c(a));return o},c.monochromatic=function(e,t){t=t||6;for(var r=c(e).toHsv(),a=r.h,n=r.s,o=r.v,s=[],i=1/t;t--;)s.push(c({h:a,s:n,v:o})),o=(o+i)%1;return s},c.readability=function(e,t){var r,a=c(e).toRgb(),n=c(t).toRgb(),o=(299*a.r+587*a.g+114*a.b)/1e3;return{brightness:Math.abs(o-(299*n.r+587*n.g+114*n.b)/1e3),color:Math.max(a.r,n.r)-Math.min(a.r,n.r)+Math.max(a.g,n.g)-Math.min(a.g,n.g)+Math.max(a.b,n.b)-Math.min(a.b,n.b)}},c.readable=function(e,t){var r=c.readability(e,t);return r.brightness>125&&r.color>500},c.mostReadable=function(e,t){for(var r=null,a=0,n=!1,o=0;o<t.length;o++){var s=c.readability(e,t[o]),i=s.brightness>125&&s.color>500,l=3*(s.brightness/125)+s.color/500;(i&&!n||i&&n&&l>a||!i&&!n&&l>a)&&(n=i,a=l,r=c(t[o]))}return r};var $=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},h=c.hexNames=function e(t){var r={};for(var a in t)t.hasOwnProperty(a)&&(r[t[a]]=a);return r}($);function p(e,t){r=e,"string"==typeof r&&-1!=r.indexOf(".")&&1===parseFloat(r)&&(e="100%");var r,a,o=(a=e,"string"==typeof a&&-1!=a.indexOf("%"));return(e=s(t,i(0,parseFloat(e))),o&&(e=parseInt(e*t,10)/100),1e-6>n.abs(e-t))?1:e%t/parseFloat(t)}function g(e){return s(1,i(0,e))}function b(e){return parseInt(e,16)}function v(e){return 1==e.length?"0"+e:""+e}function m(e){return e<=1&&(e=100*e+"%"),e}var _,y,w,k=(y="[\\s|\\(]+("+(_="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+_+")[,|\\s]+("+_+")\\s*\\)?",w="[\\s|\\(]+("+_+")[,|\\s]+("+_+")[,|\\s]+("+_+")[,|\\s]+("+_+")\\s*\\)?",{rgb:RegExp("rgb"+y),rgba:RegExp("rgba"+w),hsl:RegExp("hsl"+y),hsla:RegExp("hsla"+w),hsv:RegExp("hsv"+y),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});e.tinycolor=c}(this),t(function(){t.fn.spectrum.load&&t.fn.spectrum.processNativeColorInputs()})}(window,jQuery);