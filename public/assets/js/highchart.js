/*
 Highcharts JS v4.2.5 (2016-05-06)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(D,aa){typeof module==="object"&&module.exports?module.exports=D.document?aa(D):aa:D.Highcharts=aa(D)})(typeof window!=="undefined"?window:this,function(D){function aa(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw Error(c);D.console&&console.log(c)}function pb(a,b,c){this.options=b;this.elem=a;this.prop=c}function E(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&
Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function C(a,b){return parseInt(a,b||10)}function xa(a){return typeof a==="string"}function Z(a){return a&&typeof a==="object"}function Ea(a){return Object.prototype.toString.call(a)==="[object Array]"}function pa(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);
break}}function r(a){return a!==y&&a!==null}function P(a,b,c){var d,e;if(xa(b))r(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(r(b)&&Z(b))for(d in b)a.setAttribute(d,b[d]);return e}function ta(a){return Ea(a)?a:[a]}function Pa(a,b,c){if(b)return setTimeout(a,b,c);a.call(0,c)}function M(a,b){if(ya&&!fa&&b&&b.opacity!==y)b.filter="alpha(opacity="+b.opacity*100+")";u(a.style,b)}function ba(a,b,c,d,e){a=A.createElement(a);b&&u(a,b);e&&M(a,{padding:0,border:"none",margin:0});
c&&M(a,c);d&&d.appendChild(a);return a}function qa(a,b){var c=function(){};c.prototype=new a;u(c.prototype,b);return c}function Fa(a,b,c){return Array((b||2)+1-String(a).length).join(c||0)+a}function Ya(a){return(Za&&Za(a)||qb||0)*6E4}function Ka(a,b){for(var c="{",d=!1,e,f,g,h,i,k=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=U.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:
-1,e!==null&&(e=x.numberFormat(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=Qa(f,e)}k.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}k.push(a);return k.join("")}function rb(a){return Y.pow(10,V(Y.log(a)/Y.LN10))}function sb(a,b,c,d,e){var f,g=a,c=o(c,1);f=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(g=b[d],e&&g*c>=a||!e&&f<=(b[d]+(b[d+1]||b[d]))/2)break;g*=c;return g}function hb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].safeI=e;a.sort(function(a,
c){d=b(a,c);return d===0?a.safeI-c.safeI:d});for(e=0;e<c;e++)delete a[e].safeI}function La(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Ga(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Ra(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Sa(a){ib||(ib=ba(Ma));a&&ib.appendChild(a);ib.innerHTML=""}function ca(a,b){return parseFloat(a.toPrecision(b||14))}function Ta(a,b){b.renderer.globalAnimation=o(a,b.animation)}function $a(a){return Z(a)?
E(a):{duration:a?500:0}}function Eb(){var a=U.global,b=a.useUTC,c=b?"getUTC":"get",d=b?"setUTC":"set";la=a.Date||D.Date;qb=b&&a.timezoneOffset;Za=b&&a.getTimezoneOffset;jb=function(a,c,d,h,i,k){var j;b?(j=la.UTC.apply(0,arguments),j+=Ya(j)):j=(new la(a,c,o(d,1),o(h,0),o(i,0),o(k,0))).getTime();return j};tb=c+"Minutes";ub=c+"Hours";vb=c+"Day";Ua=c+"Date";ab=c+"Month";bb=c+"FullYear";Fb=d+"Milliseconds";Gb=d+"Seconds";Hb=d+"Minutes";Ib=d+"Hours";kb=d+"Date";wb=d+"Month";xb=d+"FullYear"}function ma(a){if(!(this instanceof
ma))return new ma(a);this.init(a)}function O(){}function Va(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function Jb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.rightCliff=this.leftCliff=0;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:o(b.y,f?4:c?14:-6),x:o(b.x,f?c?-6:6:0)};this.textAlign=
b.textAlign||(f?c?"right":"left":"center")}var y,A=D.document,Y=Math,B=Y.round,V=Y.floor,ua=Y.ceil,t=Y.max,F=Y.min,Q=Y.abs,W=Y.cos,da=Y.sin,ra=Y.PI,ja=ra*2/360,za=D.navigator&&D.navigator.userAgent||"",Kb=D.opera,ya=/(msie|trident|edge)/i.test(za)&&!Kb,lb=A&&A.documentMode===8,mb=!ya&&/AppleWebKit/.test(za),Na=/Firefox/.test(za),Lb=/(Mobile|Android|Windows Phone)/.test(za),Ha="http://www.w3.org/2000/svg",fa=A&&A.createElementNS&&!!A.createElementNS(Ha,"svg").createSVGRect,Pb=Na&&parseInt(za.split("Firefox/")[1],
10)<4,ka=A&&!fa&&!ya&&!!A.createElement("canvas").getContext,cb,db,Mb={},yb=0,ib,U,Qa,H,Aa=function(){},T=[],eb=0,Ma="div",Qb=/^[0-9]+$/,nb=["plotTop","marginRight","marginBottom","plotLeft"],la,jb,qb,Za,tb,ub,vb,Ua,ab,bb,Fb,Gb,Hb,Ib,kb,wb,xb,L={},x;x=D.Highcharts?aa(16,!0):{win:D};x.seriesTypes=L;var Ia=[],na,sa,p,Ba,zb,Ca,N,X,I,Wa,Oa;pb.prototype={dSetter:function(){var a=this.paths[0],b=this.paths[1],c=[],d=this.now,e=a.length,f;if(d===1)c=this.toD;else if(e===b.length&&d<1)for(;e--;)f=parseFloat(a[e]),
c[e]=isNaN(f)?a[e]:d*parseFloat(b[e]-f)+f;else c=b;this.elem.attr("d",c)},update:function(){var a=this.elem,b=this.prop,c=this.now,d=this.options.step;if(this[b+"Setter"])this[b+"Setter"]();else a.attr?a.element&&a.attr(b,c):a.style[b]=c+this.unit;d&&d.call(a,c,this)},run:function(a,b,c){var d=this,e=function(a){return e.stopped?!1:d.step(a)},f;this.startTime=+new la;this.start=a;this.end=b;this.unit=c;this.now=this.start;this.pos=0;e.elem=this.elem;if(e()&&Ia.push(e)===1)e.timerId=setInterval(function(){for(f=
0;f<Ia.length;f++)Ia[f]()||Ia.splice(f--,1);Ia.length||clearInterval(e.timerId)},13)},step:function(a){var b=+new la,c,d=this.options;c=this.elem;var e=d.complete,f=d.duration,g=d.curAnim,h;if(c.attr&&!c.element)c=!1;else if(a||b>=f+this.startTime){this.now=this.end;this.pos=1;this.update();a=g[this.prop]=!0;for(h in g)g[h]!==!0&&(a=!1);a&&e&&e.call(c);c=!1}else this.pos=d.easing((b-this.startTime)/f),this.now=this.start+(this.end-this.start)*this.pos,this.update(),c=!0;return c},initPath:function(a,
b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h=a.isArea,i=h?2:1,k=function(a){for(g=a.length;g--;)(a[g]==="M"||a[g]==="L")&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(k(b),k(c));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=c.slice(0,f).concat(c),h&&(c=c.concat(c.slice(c.length-f)));a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=b.slice().splice(b.length/i-f,f*i),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),[].splice.apply(b,[b.length/i,0].concat(d));return[b,
c]}};var u=x.extend=function(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a},J=x.isNumber=function(a){return typeof a==="number"&&!isNaN(a)},o=x.pick=function(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==y&&c!==null)return c},fb=x.wrap=function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}};Qa=function(a,b,c){if(!J(b))return U.lang.invalidDate||"";var a=o(a,"%Y-%m-%d %H:%M:%S"),d=new la(b-Ya(b)),e,f=d[ub](),
g=d[vb](),h=d[Ua](),i=d[ab](),k=d[bb](),j=U.lang,l=j.weekdays,m=j.shortWeekdays,d=u({a:m?m[g]:l[g].substr(0,3),A:l[g],d:Fa(h),e:Fa(h,2," "),w:g,b:j.shortMonths[i],B:j.months[i],m:Fa(i+1),y:k.toString().substr(2,2),Y:k,H:Fa(f),k:f,I:Fa(f%12||12),l:f%12||12,M:Fa(d[tb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Fa(d.getSeconds()),L:Fa(B(b%1E3),3)},x.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):
a};H={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};x.numberFormat=function(a,b,c,d){var a=+a||0,b=+b,e=U.lang,f=(a.toString().split(".")[1]||"").length,g,h,i=Math.abs(a);b===-1?b=Math.min(f,20):J(b)||(b=2);g=String(C(i.toFixed(b)));h=g.length>3?g.length%3:0;c=o(c,e.decimalPoint);d=o(d,e.thousandsSep);a=a<0?"-":"";a+=h?g.substr(0,h)+d:"";a+=g.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+d);b&&(d=Math.abs(i-g+Math.pow(10,-Math.max(b,f)-1)),a+=c+d.toFixed(b).slice(2));
return a};Math.easeInOutSine=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};na=function(a,b){var c;if(b==="width")return Math.min(a.offsetWidth,a.scrollWidth)-na(a,"padding-left")-na(a,"padding-right");else if(b==="height")return Math.min(a.offsetHeight,a.scrollHeight)-na(a,"padding-top")-na(a,"padding-bottom");return(c=D.getComputedStyle(a,void 0))&&C(c.getPropertyValue(b))};sa=function(a,b){return b.indexOf?b.indexOf(a):[].indexOf.call(b,a)};Ba=function(a,b){return[].filter.call(a,b)};Ca=function(a,
b){for(var c=[],d=0,e=a.length;d<e;d++)c[d]=b.call(a[d],a[d],d,a);return c};zb=function(a){var b=A.documentElement,a=a.getBoundingClientRect();return{top:a.top+(D.pageYOffset||b.scrollTop)-(b.clientTop||0),left:a.left+(D.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};Oa=function(a){for(var b=Ia.length;b--;)if(Ia[b].elem===a)Ia[b].stopped=!0};p=function(a,b){return Array.prototype.forEach.call(a,b)};N=function(a,b,c){function d(b){b.target=b.srcElement||D;c.call(a,b)}var e=a.hcEvents=a.hcEvents||{};
if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent){if(!a.hcEventsIE)a.hcEventsIE={};a.hcEventsIE[c.toString()]=d;a.attachEvent("on"+b,d)}e[b]||(e[b]=[]);e[b].push(c)};X=function(a,b,c){function d(b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.attachEvent&&(c=a.hcEventsIE[c.toString()],a.detachEvent("on"+b,c))}function e(){var c,e,f;if(a.nodeName)for(f in b?(c={},c[b]=!0):c=g,c)if(g[f])for(e=g[f].length;e--;)d(f,g[f][e])}var f,g=a.hcEvents,h;if(g)b?(f=g[b]||[],c?(h=
sa(c,f),h>-1&&(f.splice(h,1),g[b]=f),d(b,c)):(e(),g[b]=[])):(e(),a.hcEvents={})};I=function(a,b,c,d){var e;e=a.hcEvents;var f,g,c=c||{};if(A.createEvent&&(a.dispatchEvent||a.fireEvent))e=A.createEvent("Events"),e.initEvent(b,!0,!0),e.target=a,u(e,c),a.dispatchEvent?a.dispatchEvent(e):a.fireEvent(b,e);else if(e){e=e[b]||[];f=e.length;if(!c.preventDefault)c.preventDefault=function(){c.defaultPrevented=!0};c.target=a;if(!c.type)c.type=b;for(b=0;b<f;b++)g=e[b],g.call(a,c)===!1&&c.preventDefault()}d&&
!c.defaultPrevented&&d(c)};Wa=function(a,b,c){var d,e="",f,g,h;Z(c)||(d=arguments,c={duration:d[2],easing:d[3],complete:d[4]});if(!J(c.duration))c.duration=400;c.easing=typeof c.easing==="function"?c.easing:Math[c.easing]||Math.easeInOutSine;c.curAnim=E(b);for(h in b)g=new pb(a,c,h),f=null,h==="d"?(g.paths=g.initPath(a,a.d,b.d),g.toD=b.d,d=0,f=1):a.attr?d=a.attr(h):(d=parseFloat(na(a,h))||0,h!=="opacity"&&(e="px")),f||(f=b[h]),f.match&&f.match("px")&&(f=f.replace(/px/g,"")),g.run(d,f,e)};if(D.jQuery)D.jQuery.fn.highcharts=
function(){var a=[].slice.call(arguments);if(this[0])return a[0]?(new (x[xa(a[0])?a.shift():"Chart"])(this[0],a[0],a[1]),this):T[P(this[0],"data-highcharts-chart")]};A&&!A.defaultView&&(na=function(a,b){var c;c={width:"clientWidth",height:"clientHeight"}[b];if(a.style[b])return C(a.style[b]);b==="opacity"&&(b="filter");if(c)return a.style.zoom=1,Math.max(a[c]-2*na(a,"padding"),0);c=a.currentStyle[b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()})];b==="filter"&&(c=c.replace(/alpha\(opacity=([0-9]+)\)/,
function(a,b){return b/100}));return c===""?1:C(c)});Array.prototype.forEach||(p=function(a,b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],a[c],c,a)===!1)return c});Array.prototype.indexOf||(sa=function(a,b){var c,d=0;if(b)for(c=b.length;d<c;d++)if(b[d]===a)return d;return-1});Array.prototype.filter||(Ba=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c});x.Fx=pb;x.inArray=sa;x.each=p;x.grep=Ba;x.offset=zb;x.map=Ca;x.addEvent=N;x.removeEvent=X;x.fireEvent=I;x.animate=
Wa;x.animObject=$a;x.stop=Oa;U={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),
resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.2.5/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",
align:"center",margin:15,style:{color:"#333333",fontSize:"18px"},widthAdjust:-44},subtitle:{text:"",align:"center",style:{color:"#555555"},widthAdjust:-44},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return this.y===
null?"":x.numberFormat(this.y,-1)},style:{color:"contrast",fontSize:"11px",fontWeight:"bold",textShadow:"0 0 6px contrast, 0 0 3px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},
borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,
textAlign:"center"}},tooltip:{enabled:!0,animation:fa,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
shadow:!0,snap:Lb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var ea=U.plotOptions,ga=ea.line;Eb();ma.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[C(a[1]),
C(a[2]),C(a[3]),parseFloat(a[4],10)]}},{regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[C(a[1],16),C(a[2],16),C(a[3],16),1]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[C(a[1]),C(a[2]),C(a[3]),1]}}],init:function(a){var b,c,d,e;if((this.input=a)&&a.stops)this.stops=Ca(a.stops,function(a){return new ma(a[1])});else for(d=this.parsers.length;d--&&!c;)e=this.parsers[d],(b=e.regex.exec(a))&&(c=e.parse(b));this.rgba=
c||[]},get:function(a){var b=this.input,c=this.rgba,d;this.stops?(d=E(b),d.stops=[].concat(d.stops),p(this.stops,function(b,c){d.stops[c]=[d.stops[c][0],b.get(a)]})):d=c&&J(c[0])?a==="rgb"||!a&&c[3]===1?"rgb("+c[0]+","+c[1]+","+c[2]+")":a==="a"?c[3]:"rgba("+c.join(",")+")":b;return d},brighten:function(a){var b,c=this.rgba;if(this.stops)p(this.stops,function(b){b.brighten(a)});else if(J(a)&&a!==0)for(b=0;b<3;b++)c[b]+=C(a*255),c[b]<0&&(c[b]=0),c[b]>255&&(c[b]=255);return this},setOpacity:function(a){this.rgba[3]=
a;return this}};O.prototype={opacity:1,textProps:"direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),init:function(a,b){this.element=b==="span"?ba(b):A.createElementNS(Ha,b);this.renderer=a},animate:function(a,b,c){b=o(b,this.renderer.globalAnimation,!0);Oa(this);if(b){if(c)b.complete=c;Wa(this,a,b)}else this.attr(a,null,c);return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,k,j,l,m,n,q,z=[],s;a.linearGradient?
f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];i=d.gradients;j=a.stops;n=c.radialReference;Ea(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});f==="radialGradient"&&n&&!r(g.gradientUnits)&&(h=g,g=E(g,d.getRadialAttr(n,h),{gradientUnits:"userSpaceOnUse"}));for(q in g)q!=="id"&&z.push(q,g[q]);for(q in j)z.push(j[q]);z=z.join(",");i[z]?n=i[z].attr("id"):(g.id=n="highcharts-"+yb++,i[z]=k=d.createElement(f).attr(g).add(d.defs),k.radAttr=h,k.stops=[],
p(j,function(a){a[1].indexOf("rgba")===0?(e=ma(a[1]),l=e.get("rgb"),m=e.get("a")):(l=a[1],m=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":l,"stop-opacity":m}).add(k);k.stops.push(a)}));s="url("+d.url+"#"+n+")";c.setAttribute(b,s);c.gradient=z;a.toString=function(){return s}}},applyTextShadow:function(a){var b=this.element,c,d=a.indexOf("contrast")!==-1,e={},f=this.renderer.forExport,g=f||b.style.textShadow!==y&&!ya;if(d)e.textShadow=a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill));
if(mb||f)e.textRendering="geometricPrecision";g?this.css(e):(this.fakeTS=!0,this.ySetter=this.xSetter,c=[].slice.call(b.getElementsByTagName("tspan")),p(a.split(/\s?,\s?/g),function(a){var d=b.firstChild,e,f,a=a.split(" ");e=a[a.length-1];(f=a[a.length-2])&&p(c,function(a,c){var g;c===0&&(a.setAttribute("x",b.getAttribute("x")),c=b.getAttribute("y"),a.setAttribute("y",c||0),c===null&&b.setAttribute("y",0));g=a.cloneNode(1);P(g,{"class":"highcharts-text-shadow",fill:e,stroke:e,"stroke-opacity":1/t(C(f),
3),"stroke-width":f,"stroke-linejoin":"round"});b.insertBefore(g,d)})}))},attr:function(a,b,c){var d,e=this.element,f,g=this,h;typeof a==="string"&&b!==y&&(d=a,a={},a[d]=b);if(typeof a==="string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(d in a){b=a[d];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d)&&(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(d==="x"||d==="y"))this.doTransform=!0;h||(h=this[d+"Setter"]||this._defaultSetter,
h.call(this,b,d,e),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&this.updateShadows(d,b,h))}if(this.doTransform)this.updateTransform(),this.doTransform=!1}c&&c();return g},updateShadows:function(a,b,c){for(var d=this.shadows,e=d.length;e--;)c.call(d[e],a==="height"?Math.max(b-(d[e].cutHeight||0),0):a==="d"?this.d:b,a,d[e])},addClass:function(a){var b=this.element,c=P(b,"class")||"";c.indexOf(a)===-1&&P(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;
p("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=o(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a){var b,c={},d,e=this.strokeWidth||0;d=B(e)%2/2;a.x=V(a.x||this.x||0)+d;a.y=V(a.y||this.y||0)+d;a.width=V((a.width||this.width||0)-2*d);a.height=V((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&
(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&C(a.width)||this.textWidth;b&&(a=u(b,c));this.styles=a;e&&(ka||!fa&&this.renderer.forExport)&&delete a.width;if(ya&&!fa)M(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";P(d,"style",g)}e&&this.added&&
this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;db&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=la.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(za.indexOf("Android")===-1||la.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){var b=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this},
translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(r(c)||r(d))&&
a.push("scale("+o(c,1)+" "+o(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||xa(c))this.alignTo=d=c||"renderer",pa(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=o(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+
(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=B(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=B(g);this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(a,b){var c,d=this.renderer,e,f,g,h=this.element,i=this.styles;e=this.textStr;var k,j=h.style,l,m=d.cache,n=d.cacheKeys,q;f=o(b,this.rotation);g=f*ja;e!==y&&(q=["",f||0,i&&i.fontSize,
h.style.width].join(","),q=e===""||Qb.test(e)?"num:"+e.toString().length+q:e+q);q&&!a&&(c=m[q]);if(!c){if(h.namespaceURI===Ha||d.forExport){try{l=this.fakeTS&&function(a){p(h.querySelectorAll(".highcharts-text-shadow"),function(b){b.style.display=a})},Na&&j.textShadow?(k=j.textShadow,j.textShadow=""):l&&l("none"),c=h.getBBox?u({},h.getBBox()):{width:h.offsetWidth,height:h.offsetHeight},k?j.textShadow=k:l&&l("")}catch(z){}if(!c||c.width<0)c={width:0,height:0}}else c=this.htmlGetBBox();if(d.isSVG){d=
c.width;e=c.height;if(ya&&i&&i.fontSize==="11px"&&e.toPrecision(3)==="16.9")c.height=e=14;if(f)c.width=Q(e*da(g))+Q(d*W(g)),c.height=Q(e*W(g))+Q(d*da(g))}if(q){for(;n.length>250;)delete m[n.shift()];m[q]||n.push(q);m[q]=c}}return c},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,
c=this.element,d;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:b.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=
null;Oa(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&p(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&pa(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,k,j;if(a){i=o(a.width,3);k=(a.opacity||0.15)/i;j=this.parentInverted?
"(-1,-1)":"("+o(a.offsetX,1)+", "+o(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;P(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":k*e,"stroke-width":h,transform:"translate"+j,fill:"none"});if(c)P(f,"height",t(P(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=
o(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b,c=this["stroke-width"];c==="inherit"&&(c=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,
"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=C(a[b])*c;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=A.createElementNS(Ha,"title"),this.element.appendChild(b));b.firstChild&&
b.removeChild(b.firstChild);b.appendChild(A.createTextNode(String(o(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},visibilitySetter:function(a,b,c){a==="inherit"?c.removeAttribute(b):c.setAttribute(b,a)},zIndexSetter:function(a,b){var c=this.renderer,d=this.parentGroup,c=(d||c).element||c.box,e,f,g=
this.element,h;e=this.added;var i;if(r(a))g.zIndex=a,a=+a,this[b]===a&&(e=!1),this[b]=a;if(e){if((a=this.zIndex)&&d)d.handleZ=!0;d=c.childNodes;for(i=0;i<d.length&&!h;i++)if(e=d[i],f=e.zIndex,e!==g&&(C(f)>a||!r(a)&&r(f)))c.insertBefore(g,e),h=!0;h||c.appendChild(g)}return h},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};O.prototype.yGetter=O.prototype.xGetter;O.prototype.translateXSetter=O.prototype.translateYSetter=O.prototype.rotationSetter=O.prototype.verticalAlignSetter=O.prototype.scaleXSetter=
O.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};O.prototype["stroke-widthSetter"]=O.prototype.strokeSetter=function(a,b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],O.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var Da=function(){this.init.apply(this,arguments)};
Da.prototype={Element:O,init:function(a,b,c,d,e,f){var g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&P(g,"xmlns",Ha);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Na||mb)&&A.getElementsByTagName("base").length?D.location.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(A.createTextNode("Created with Highcharts 4.2.5"));
this.defs=this.createElement("defs").add();this.allowHTML=f;this.forExport=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);var h;if(Na&&a.getBoundingClientRect)this.subPixelFix=b=function(){M(a,{left:0,top:0});h=a.getBoundingClientRect();M(a,{left:ua(h.left)-h.left+"px",top:ua(h.top)-h.top+"px"})},b(),N(D,"resize",b)},getStyle:function(a){return this.style=u({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},
a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Ra(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&X(D,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},getRadialAttr:function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}},buildText:function(a){for(var b=
a.element,c=this,d=c.forExport,e=o(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,k,j=P(b,"x"),l=a.styles,m=a.textWidth,n=l&&l.lineHeight,q=l&&l.textShadow,z=l&&l.textOverflow==="ellipsis",s=g.length,G=m&&!a.added&&this.box,w=function(a){return n?C(n):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:l&&l.fontSize||c.style.fontSize||12,a).h},v=function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")};s--;)b.removeChild(g[s]);!f&&!q&&!z&&e.indexOf(" ")===
-1?b.appendChild(A.createTextNode(v(e))):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,G&&G.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],e=Ba(e,function(a){return a!==""}),p(e,function(e,f){var g,n=0,e=e.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");p(g,
function(e){if(e!==""||g.length===1){var q={},s=A.createElementNS(Ha,"tspan"),o;h.test(e)&&(o=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),P(s,"style",o));i.test(e)&&!d&&(P(s,"onclick",'location.href="'+e.match(i)[1]+'"'),M(s,{cursor:"pointer"}));e=v(e.replace(/<(.|\n)*?>/g,"")||" ");if(e!==" "){s.appendChild(A.createTextNode(e));if(n)q.dx=0;else if(f&&j!==null)q.x=j;P(s,q);b.appendChild(s);!n&&f&&(!fa&&d&&M(s,{display:"block"}),P(s,"dy",w(s)));if(m){for(var q=e.replace(/([^\^])-/g,"$1- ").split(" "),
p=g.length>1||f||q.length>1&&l.whiteSpace!=="nowrap",G,S,r=[],t=w(s),u=1,B=a.rotation,y=e,x=y.length;(p||z)&&(q.length||r.length);)a.rotation=0,G=a.getBBox(!0),S=G.width,!fa&&c.forExport&&(S=c.measureSpanWidth(s.firstChild.data,a.styles)),G=S>m,k===void 0&&(k=G),z&&k?(x/=2,y===""||!G&&x<0.5?q=[]:(y=e.substring(0,y.length+(G?-1:1)*ua(x)),q=[y+(m>3?"\u2026":"")],s.removeChild(s.firstChild))):!G||q.length===1?(q=r,r=[],q.length&&(u++,s=A.createElementNS(Ha,"tspan"),P(s,{dy:t,x:j}),o&&P(s,"style",o),
b.appendChild(s)),S>m&&(m=S)):(s.removeChild(s.firstChild),r.unshift(q.pop())),q.length&&s.appendChild(A.createTextNode(q.join(" ").replace(/- /g,"-")));a.rotation=B}n++}}})}),k&&a.attr("title",a.textStr),G&&G.removeChild(b),q&&a.applyTextShadow&&a.applyTextShadow(q))},getContrast:function(a){a=ma(a).rgba;return a[0]+a[1]+a[2]>384?"#000000":"#FFFFFF"},button:function(a,b,c,d,e,f,g,h,i){var k=this.label(a,b,c,i,null,null,null,null,"button"),j=0,l,m,n,q,z,s,a={x1:0,y1:0,x2:0,y2:1},e=E({"stroke-width":1,
stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);n=e.style;delete e.style;f=E(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);q=f.style;delete f.style;g=E(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);z=g.style;delete g.style;h=E(e,{style:{color:"#CCC"}},h);s=h.style;delete h.style;N(k.element,ya?"mouseover":"mouseenter",function(){j!==3&&k.attr(f).css(q)});N(k.element,ya?"mouseout":
"mouseleave",function(){j!==3&&(l=[e,f,g][j],m=[n,q,z][j],k.attr(l).css(m))});k.setState=function(a){(k.state=j=a)?a===2?k.attr(g).css(z):a===3&&k.attr(h).css(s):k.attr(e).css(n)};return k.on("click",function(a){j!==3&&d.call(k,a)}).attr(e).css(u({cursor:"default"},n))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=B(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=B(a[2])+b%2/2);return a},path:function(a){var b={fill:"none"};Ea(a)?b.d=a:Z(a)&&u(b,a);return this.createElement("path").attr(b)},circle:function(a,
b,c){a=Z(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=b.ySetter=function(a,b,c){c.setAttribute("c"+b,a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(Z(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=Z(a)?a.r:e,g=this.createElement("rect"),a=Z(a)?a:a===y?{}:{x:a,y:b,width:t(c,0),height:t(d,0)};if(f!==y)g.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a,
b,c){P(c,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[o(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return r(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:"none"};arguments.length>1&&u(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink",
"href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g=this,h,i=this.symbols[a],i=i&&i(B(b),B(c),d,e,f),k=/^url\((.*?)\)$/,j,l;if(i)h=this.path(i),u(h,{symbolName:a,x:b,y:c,width:d,height:e}),f&&u(h,f);else if(k.test(a))l=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(B((d-b[0])/2),B((e-b[1])/2)))},j=a.match(k)[1],a=Mb[j]||f&&f.width&&f.height&&[f.width,f.height],h=this.image(j).attr({x:b,y:c}),h.isImg=!0,a?l(h,a):
(h.attr({width:0,height:0}),ba("img",{onload:function(){this.width===0&&(M(this,{position:"absolute",top:"-999em"}),A.body.appendChild(this));l(h,Mb[j]=[this.width,this.height]);this.parentNode&&this.parentNode.removeChild(this);g.imgCount--;if(!g.imgCount&&T[g.chartIndex].onload)T[g.chartIndex].onload()},src:j}),this.imgCount++);return h},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",
a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=W(f),k=da(f),j=W(g),g=da(g),e=e.end-f<ra?0:1;return["M",a+c*i,b+c*k,"A",c,c,0,e,1,a+c*j,b+c*g,h?"M":"L",a+d*j,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*k,h?"":"Z"]},
callout:function(a,b,c,d,e){var f=F(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,e=e&&e.anchorY,i;i=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&e>b+g&&e<b+d-g?i.splice(13,3,"L",a+c,e-6,a+c+6,e,a+c,e+6,a+c,b+d-f):h&&h<0&&e>b+g&&e<b+d-g?i.splice(33,3,"L",a,e+6,a-6,e,a,e-6,a,b+f):e&&e>d&&h>a+g&&h<a+c-g?i.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):e&&e<0&&h>a+g&&h<a+c-g&&i.splice(3,3,"L",
h-6,b,h,b-6,h+6,b,c-f,b);return i}},clipRect:function(a,b,c,d){var e="highcharts-"+yb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;a.count=0;return a},text:function(a,b,c,d){var e=ka||!fa&&this.forExport,f={};if(d&&(this.allowHTML||!this.forExport))return this.html(a,b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,
b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),m;for(m=0;m<d.length;m++)e=d[m],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){var c,d,a=a||this.style.fontSize;!a&&b&&D.getComputedStyle&&(b=b.element||b,a=(c=D.getComputedStyle(b,""))&&c.fontSize);a=/px/.test(a)?C(a):/em/.test(a)?parseFloat(a)*12:12;c=a<24?a+3:B(a*1.2);d=B(c*0.8);return{h:c,b:d,f:a}},rotCorr:function(a,b,c){var d=a;b&&c&&(d=t(d*W(b*ja),4));return{x:-a/3*da(b*ja),
y:d}},label:function(a,b,c,d,e,f,g,h,i){var k=this,j=k.g(i),l=k.text("",0,0,g).attr({zIndex:1}),m,n,q=0,z=3,s=0,o,w,v,S,t=0,$={},x,A,Ab,F,D;Ab=function(){var a,b;a=l.element.style;n=(o===void 0||w===void 0||j.styles.textAlign)&&r(l.textStr)&&l.getBBox();j.width=(o||n.width||0)+2*z+s;j.height=(w||n.height||0)+2*z;x=z+k.fontMetrics(a&&a.fontSize,l).b;if(A){if(!m)a=t,b=(h?-x:0)+t,j.box=m=d?k.symbol(d,a,b,j.width,j.height,$):k.rect(a,b,j.width,j.height,0,$["stroke-width"]),m.isImg||m.attr("fill","none"),
m.add(j);m.isImg||m.attr(u({width:B(j.width),height:B(j.height)},$));$=null}};F=function(){var a=j.styles,a=a&&a.textAlign,b=s+z,c;c=h?0:x;if(r(o)&&n&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(o-n.width);if(b!==l.x||c!==l.y)l.attr("x",b),c!==y&&l.attr("y",c);l.x=b;l.y=c};D=function(a,b){m?m.attr(a,b):$[a]=b};j.onAdd=function(){l.add(j);j.attr({text:a||a===0?a:"",x:b,y:c});m&&r(e)&&j.attr({anchorX:e,anchorY:f})};j.widthSetter=function(a){o=a};j.heightSetter=function(a){w=a};j.paddingSetter=
function(a){if(r(a)&&a!==z)z=j.padding=a,F()};j.paddingLeftSetter=function(a){r(a)&&a!==s&&(s=a,F())};j.alignSetter=function(a){a={left:0,center:0.5,right:1}[a];a!==q&&(q=a,n&&j.attr({x:v}))};j.textSetter=function(a){a!==y&&l.textSetter(a);Ab();F()};j["stroke-widthSetter"]=function(a,b){a&&(A=!0);t=a%2/2;D(b,a)};j.strokeSetter=j.fillSetter=j.rSetter=function(a,b){b==="fill"&&a&&(A=!0);D(b,a)};j.anchorXSetter=function(a,b){e=a;D(b,B(a)-t-v)};j.anchorYSetter=function(a,b){f=a;D(b,a-S)};j.xSetter=function(a){j.x=
a;q&&(a-=q*((o||n.width)+2*z));v=B(a);j.attr("translateX",v)};j.ySetter=function(a){S=j.y=B(a);j.attr("translateY",S)};var C=j.css;return u(j,{css:function(a){if(a){var b={},a=E(a);p(j.textProps,function(c){a[c]!==y&&(b[c]=a[c],delete a[c])});l.css(b)}return C.call(j,a)},getBBox:function(){return{width:n.width+2*z,height:n.height+2*z,x:n.x-z,y:n.y-z}},shadow:function(a){m&&m.shadow(a);return j},destroy:function(){X(j.element,"mouseenter");X(j.element,"mouseleave");l&&(l=l.destroy());m&&(m=m.destroy());
O.prototype.destroy.call(j);j=k=Ab=F=D=null}})}};cb=Da;u(O.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();if(a&&a.textOverflow==="ellipsis")a.whiteSpace="nowrap",a.overflow="hidden";this.styles=u(this.styles,a);M(this.element,a);return this},htmlGetBBox:function(){var a=this.element;if(a.nodeName==="text")a.style.position="absolute";return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},
htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows,k=this.styles;M(b,{marginLeft:c,marginTop:d});i&&p(i,function(a){M(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&p(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var i=this.rotation,j=C(this.textWidth),l=k&&k.whiteSpace,m=[i,g,b.innerHTML,this.textWidth,
this.textAlign].join(",");if(m!==this.cTT){k=a.fontMetrics(b.style.fontSize).b;r(i)&&this.setSpanRotation(i,h,k);if(b.offsetWidth>j&&/[ \-]/.test(b.textContent||b.innerText))M(b,{width:j+"px",display:"block",whiteSpace:l||"normal"}),this.hasTextWidth=!0;else if(this.hasTextWidth)M(b,{width:"",display:"",whiteSpace:l||"nowrap"}),this.hasTextWidth=!1;this.getSpanCorrection(this.hasTextWidth?j:b.offsetWidth,k,h,i,g)}M(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(mb)k=b.offsetHeight;
this.cTT=m}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=ya?"-ms-transform":mb?"-webkit-transform":Na?"MozTransform":Kb?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Na?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";M(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});u(Da.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer,g=f.isSVG,h=function(a,b){p(["opacity","visibility"],function(c){fb(a,
c+"Setter",function(a,c,d,e){a.call(this,c,d,e);b[d]=c})})};d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;d.htmlUpdateTransform()};g&&h(d,d.element.style);d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:B(b),y:B(c)}).css({position:"absolute",fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});e.style.whiteSpace="nowrap";d.css=d.htmlCss;if(g)d.add=function(a){var b,
c=f.box.parentNode,g=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)g.push(a),a=a.parentGroup;p(g.reverse(),function(a){var d,e=P(a.element,"class");e&&(e={className:e});b=a.div=a.div||ba(Ma,e,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",opacity:a.opacity},b||c);d=b.style;u(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,c){d.top=b+"px";a[c]=b;a.doTransform=!0}});h(a,d)})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&
d.htmlUpdateTransform();return d};return d}});var K;if(!fa&&!ka){K={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===Ma;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=ba(c);this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,e=a&&a.inverted,d=a?a.element||a:d;if(a)this.parentGroup=
a;e&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:O.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=W(a*ja),c=da(a*ja);M(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,e){var f=d?W(d*ja):1,g=d?
da(d*ja):0,h=o(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),M(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(J(a[b]))c[b]=B(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=
a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,pa(c,b),c.push(b),b.destroyClip=function(){pa(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:lb?"inherit":"rect(auto)"});return b.css(a)},css:O.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Sa(a)},destroy:function(){this.destroyClip&&this.destroyClip();return O.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=D.event;a.target=a.srcElement;b(a)};
return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=C(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,k,j=f.path,l,m,n,q;j&&typeof j.value!=="string"&&(j="x");m=j;if(a){n=o(a.width,3);q=(a.opacity||0.15)/n;for(e=1;e<=3;e++){l=n*2+1-2*e;c&&(m=this.cutOffPath(j.value,l+0.5));k=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',m,'" coordsize="10 10" style="',f.style.cssText,
'" />'];h=ba(g.prepVML(k),null,{left:C(i.left)+o(a.offsetX,1),top:C(i.top)+o(a.offsetY,1)});if(c)h.cutOff=l+1;k=['<stroke color="',a.color||"black",'" opacity="',q*e,'"/>'];ba(g.prepVML(k),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:Aa,setAttr:function(a,b){lb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||
ba(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!=="none",this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},"fill-opacitySetter":function(a,b,c){ba(this.renderer.prepVML(["<",
b.split("-")[0],' opacity="',a,'"/>']),null,null,c)},opacitySetter:Aa,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-B(da(a*ja)+1)+"px";c.top=B(W(a*ja))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;J(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&p(this.shadows,
function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,lb||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};K["stroke-opacitySetter"]=K["fill-opacitySetter"];x.VMLElement=K=qa(O,K);K.prototype.ySetter=K.prototype.widthSetter=K.prototype.heightSetter=K.prototype.xSetter;var Bb={Element:K,isIE8:za.indexOf("MSIE 8.0")>
-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(Ma).css(u(this.getStyle(d),{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!A.namespaces.hcv){A.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{A.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){A.styleSheets[0].cssText+=
"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=Z(a);return u(e,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+B(a?e:d)+"px,"+
B(a?f:b)+"px,"+B(a?b:f)+"px,"+B(a?d:e)+"px)"};!a&&lb&&c==="DIV"&&u(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){p(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,k="none";a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var j,l,m=a.linearGradient||a.radialGradient,n,q,z,s,o,w="",a=a.stops,v,S=[],r=function(){h=['<fill colors="'+S.join(",")+'" opacity="',z,'" o:opacity2="',q,'" type="',i,'" ',
w,'focus="100%" method="any" />'];ba(e.prepVML(h),null,null,b)};n=a[0];v=a[a.length-1];n[0]>0&&a.unshift([0,n[1]]);v[0]<1&&a.push([1,v[1]]);p(a,function(a,b){g.test(a[1])?(f=ma(a[1]),j=f.get("rgb"),l=f.get("a")):(j=a[1],l=1);S.push(a[0]*100+"% "+j);b?(z=l,s=j):(q=l,o=j)});if(c==="fill")if(i==="gradient")c=m.x1||m[0]||0,a=m.y1||m[1]||0,n=m.x2||m[2]||0,m=m.y2||m[3]||0,w='angle="'+(90-Y.atan((m-a)/(n-c))*180/ra)+'"',r();else{var k=m.r,$=k*2,t=k*2,u=m.cx,y=m.cy,B=b.radialReference,x,k=function(){B&&(x=
d.getBBox(),u+=(B[0]-x.x)/x.width-0.5,y+=(B[1]-x.y)/x.height-0.5,$*=B[2]/x.width,t*=B[2]/x.height);w='src="'+U.global.VMLRadialGradientURL+'" size="'+$+","+t+'" origin="0.5,0.5" position="'+u+","+y+'" color2="'+o+'" ';r()};d.added?k():d.onAdd=k;k=s}else k=j}else if(g.test(a)&&b.tagName!=="IMG")f=ma(a),d[c+"-opacitySetter"](f.get("a"),c,b),k=f.get("rgb");else{k=b.getElementsByTagName(c);if(k.length)k[0].opacity=1,k[0].type="solid";k=a}return k},prepVML:function(a){var b=this.isIE8,a=a.join("");b?(a=
a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:Da.prototype.html,path:function(a){var b={coordsize:"10 10"};Ea(a)?b.d=a:Z(a)&&u(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(Z(a))c=a.r,b=a.y,a=a.x;d.isCircle=
!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Ma).attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):Da.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;M(a,{flip:"x",left:C(d.width)-(e?C(e.top):
1),top:C(d.height)-(e?C(e.left):1),rotation:-90});p(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||d,c=e.innerR,d=W(f),i=da(f),k=W(g),j=da(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*k,b+h*j];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*k,b+c*j,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+
c,b+d/2,"e"]},rect:function(a,b,c,d,e){return Da.prototype.symbols[!r(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}};x.VMLRenderer=K=function(){this.init.apply(this,arguments)};K.prototype=E(Da.prototype,Bb);cb=K}Da.prototype.measureSpanWidth=function(a,b){var c=A.createElement("span"),d;d=A.createTextNode(a);c.appendChild(d);M(c,b);this.box.appendChild(c);d=c.offsetWidth;Sa(c);return d};var Nb;if(ka)x.CanVGRenderer=K=function(){Ha="http://www.w3.org/1999/xhtml"},K.prototype.symbols={},Nb=function(){function a(){var a=
b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){if(b.length===0){var e=A.getElementsByTagName("head")[0],f=A.createElement("script");f.type="text/javascript";f.src=d;f.onload=a;e.appendChild(f)}b.push(c)}}}(),cb=K;Va.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.categories,e=a.names,f=this.pos,g=b.labels,h=a.tickPositions,i=f===h[0],k=f===h[h.length-1],e=d?o(d[f],e[f],f):f,d=this.label,h=h.info,j;a.isDatetimeAxis&&h&&(j=b.dateTimeLabelFormats[h.higherRanks[f]||
h.unitName]);this.isFirst=i;this.isLast=k;b=a.labelFormatter.call({axis:a,chart:c,isFirst:i,isLast:k,dateTimeLabelFormat:j,value:a.isLog?ca(a.lin2log(e)):e});r(d)?d&&d.attr({text:b}):(this.labelLength=(this.label=d=r(b)&&g.enabled?c.renderer.text(b,0,0,g.useHTML).css(E(g.style)).add(a.labelGroup):null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var b=this.axis,c=a.x,d=b.chart.chartWidth,
e=b.chart.spacing,f=o(b.labelLeft,F(b.pos,e[3])),e=o(b.labelRight,t(b.pos+b.len,d-e[1])),g=this.label,h=this.rotation,i={left:0,center:0.5,right:1}[b.labelAlign],k=g.getBBox().width,j=b.getSlotWidth(),l=j,m=1,n,q={};if(h)h<0&&c-i*k<f?n=B(c/W(h*ja)-f):h>0&&c+i*k>e&&(n=B((d-c)/W(h*ja)));else if(d=c+(1-i)*k,c-i*k<f?l=a.x+l*(1-i)-f:d>e&&(l=e-a.x+l*i,m=-1),l=F(j,l),l<j&&b.labelAlign==="center"&&(a.x+=m*(j-l-i*(j-F(k,l)))),k>l||b.autoRotation&&g.styles.width)n=l;if(n){q.width=n;if(!b.options.labels.style.textOverflow)q.textOverflow=
"ellipsis";g.css(q)}},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,k=i.transA,j=i.reversed,l=i.staggerLines,m=i.tickRotCorr||{x:0,y:0},n=e.y;r(n)||(n=i.side===0?c.rotation?-8:
-c.getBBox().height:i.side===2?m.y+8:W(c.rotation*ja)*(m.y-c.getBBox(!1,0).height/2));a=a+e.x+m.x-(f&&d?f*k*(j?-1:1):0);b=b+n-(f&&!d?f*k*(j?1:-1):0);l&&(c=g/(h||1)%l,i.opposite&&(c=l-c-1),b+=c*(i.labelOffset/l));return{x:a,y:B(b)}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,k=this.pos,j=e.labels,l=this.gridLine,m=h?h+"Grid":"grid",n=h?h+"Tick":"tick",
q=e[m+"LineWidth"],z=e[m+"LineColor"],s=e[m+"LineDashStyle"],m=d.tickSize(n),n=e[n+"Color"],p=this.mark,w=j.step,v=!0,S=d.tickmarkOffset,r=this.getPosition(g,k,S,b),$=r.x,r=r.y,t=g&&$===d.pos+d.len||!g&&r===d.pos?-1:1,c=o(c,1);this.isActive=!0;if(q){k=d.getPlotLinePath(k+S,q*t,b,!0);if(l===y){l={stroke:z,"stroke-width":q};if(s)l.dashstyle=s;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=q?f.path(k).attr(l).add(d.gridGroup):null}if(!b&&l&&k)l[this.isNew?"attr":"animate"]({d:k,opacity:c})}if(m)d.opposite&&
(m[0]=-m[0]),h=this.getMarkPath($,r,m[0],m[1]*t,g,f),p?p.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:n,"stroke-width":m[1],opacity:c}).add(d.axisGroup);if(i&&J($))i.xy=r=this.getLabelPosition($,r,i,g,j,S,a,w),this.isFirst&&!this.isLast&&!o(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!o(e.showLastLabel,1)?v=!1:g&&!d.isRadial&&!j.step&&!j.rotation&&!b&&c!==0&&this.handleOverflow(r),w&&a%w&&(v=!1),v&&J(r.y)?(r.opacity=c,i[this.isNew?"attr":"animate"](r),this.isNew=!1):i.attr("y",-9999)},
destroy:function(){Ra(this,this.axis)}};x.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};x.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=a.options,e=d.label,f=a.label,g=d.width,h=d.to,i=d.from,k=r(i)&&r(h),j=d.value,l=d.dashStyle,m=a.svgElem,n=[],q,z=d.color,s=o(d.zIndex,0),p=d.events,w={},v=b.chart.renderer,n=b.log2lin;b.isLog&&(i=n(i),h=n(h),j=n(j));if(g){if(n=b.getPlotLinePath(j,g),w={stroke:z,"stroke-width":g},l)w.dashstyle=l}else if(k){n=
b.getPlotBandPath(i,h,d);if(z)w.fill=z;if(d.borderWidth)w.stroke=d.borderColor,w["stroke-width"]=d.borderWidth}else return;w.zIndex=s;if(m)if(n)m.show(),m.animate({d:n});else{if(m.hide(),f)a.label=f=f.destroy()}else if(n&&n.length&&(a.svgElem=m=v.path(n).attr(w).add(),p))for(q in d=function(b){m.on(b,function(c){p[b].apply(a,[c])})},p)d(q);e&&r(e.text)&&n&&n.length&&b.width>0&&b.height>0&&!n.flat?(e=E({align:c&&k&&"center",x:c?!k&&4:10,verticalAlign:!c&&k&&"middle",y:c?k?16:10:k?6:-4,rotation:c&&
!k&&90},e),this.renderLabel(e,n,k,s)):f&&f.hide();return a},renderLabel:function(a,b,c,d){var e=this.label,f=this.axis.chart.renderer;if(!e)e={align:a.textAlign||a.align,rotation:a.rotation},e.zIndex=d,this.label=e=f.text(a.text,0,0,a.useHTML).attr(e).css(a.style).add();d=[b[1],b[4],c?b[6]:b[1]];b=[b[2],b[5],c?b[7]:b[2]];c=La(d);f=La(b);e.align(a,!1,{x:c,y:f,width:Ga(d)-c,height:Ga(b)-f});e.show()},destroy:function(){pa(this.axis.plotLinesAndBands,this);delete this.axis;Ra(this)}};var ha=x.Axis=function(){this.init.apply(this,
arguments)};ha.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#D8D8D8",labels:{enabled:!0,style:{color:"#606060",cursor:"default",fontSize:"11px"},x:0},lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,
startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return x.numberFormat(this.total,-1)},style:E(ea.line.dataLabels.style,{color:"#000000"})}},
defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var c=b.isX;this.chart=a;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=
this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.visible=d.visible!==!1;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=this.names||[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=r(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=
this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=o(d.crosshair,ta(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;sa(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===y)this.reversed=!0;this.removePlotLine=this.removePlotBand=
this.removePlotBandOrLine;for(f in d)N(this,f,d[f]);if(this.isLog)this.val2lin=this.log2lin,this.lin2val=this.lin2log},setOptions:function(a){this.options=E(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],E(U[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=U.lang.numericSymbols,f=e&&e.length,
g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ka(h,this);else if(c)g=b;else if(d)g=Qa(d,b);else if(f&&a>=1E3)for(;f--&&g===y;)c=Math.pow(1E3,f+1),a>=c&&b*10%c===0&&e[f]!==null&&(g=x.numberFormat(b/c,-1)+e[f]);g===y&&(g=Q(b)>=1E4?x.numberFormat(b,-1):x.numberFormat(b,-1,y,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();p(a.series,function(c){if(c.visible||
!b.options.chart.ignoreHiddenSeries){var d=c.options,e=d.threshold,f;a.hasVisibleSeries=!0;a.isLog&&e<=0&&(e=null);if(a.isXAxis){if(d=c.xData,d.length)c=La(d),!J(c)&&!(c instanceof la)&&(d=Ba(d,function(a){return J(a)}),c=La(d)),a.dataMin=F(o(a.dataMin,d[0]),c),a.dataMax=t(o(a.dataMax,d[0]),Ga(d))}else{c.getExtremes();f=c.dataMax;c=c.dataMin;if(r(c)&&r(f))a.dataMin=F(o(a.dataMin,c),c),a.dataMax=t(o(a.dataMax,f),f);if(r(e))a.threshold=e;if(!d.softThreshold||a.isLog)a.softThreshold=!1}}})},translate:function(a,
b,c,d,e,f){var g=this.linkedParent||this,h=1,i=0,k=d?g.oldTransA:g.transA,d=d?g.oldMin:g.min,j=g.minPixelPadding,e=(g.isOrdinal||g.isBroken||g.isLog&&e)&&g.lin2val;if(!k)k=g.transA;if(c)h*=-1,i=g.len;g.reversed&&(h*=-1,i-=h*(g.sector||g.len));b?(a=a*h+i,a-=j,a=a/k+d,e&&(a=g.lin2val(a))):(e&&(a=g.val2lin(a)),f==="between"&&(f=0.5),a=h*(a-d)*k+i+h*j+(J(f)?k*f*g.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-
(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,k,j=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,m;i=this.transB;var n=function(a,b,c){if(a<b||a>c)d?a=F(t(b,a),c):m=!0;return a},e=o(e,this.translate(a,null,null,c)),a=c=B(e+i);i=k=B(j-e-i);J(e)?this.horiz?(i=h,k=j-this.bottom,a=c=n(a,g,g+this.width)):(a=g,c=l-this.right,i=k=n(i,h,h+this.height)):m=!0;return m&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,
k],b||1)},getLinearTickPositions:function(a,b,c){var d,e=ca(V(b/a)*a),f=ca(ua(c/a)*a),g=[];if(b===c&&J(b))return[b];for(b=e;b<=f;){g.push(b);b=ca(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e,f=this.pointRangePadding||0;e=this.min-f;var f=this.max+f,g=f-e;if(g&&g/c<this.len/3)if(this.isLog){f=b.length;for(e=1;e<f;e++)d=d.concat(this.getLogTickPositions(c,b[e-1],b[e],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval===
"auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),e,f,a.startOfWeek));else for(b=e+(b[0]-e)%c;b<=f;b+=c)d.push(b);d.length!==0&&this.trimTicks(d,a.startOnTick,a.endOnTick);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,k,j;if(this.isXAxis&&this.minRange===y&&!this.isLog)r(a.min)||r(a.max)?this.minRange=null:(p(this.series,function(a){i=a.xData;for(g=k=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-
i[g-1],f===y||h<f)f=h}),this.minRange=F(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){j=this.minRange;d=(j-c+b)/2;d=[b-d,o(a.min,b-d)];if(e)d[2]=this.dataMin;b=Ga(d);c=[b+j,o(a.max,b+j)];if(e)c[2]=this.dataMax;c=La(c);c-b<j&&(d[0]=c-j,d[1]=o(a.min,c-j),b=Ga(d))}this.min=b;this.max=c},getClosest:function(){var a;p(this.series,function(b){var c=b.closestPointRange;!b.noSharedTooltip&&r(c)&&(a=r(a)?F(a,c):c)});return a},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||
0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,k=b.transA,j=b.isXAxis;if(j||i||d)if(h?(f=h.minPointOffset,g=h.pointRangePadding):(e=b.getClosest(),p(b.series,function(a){var c=i?1:j?o(a.options.pointRange,e,0):b.axisPointRange||0,a=a.options.pointPlacement;d=t(d,c);b.single||(f=t(f,xa(a)?0:c/2),g=t(g,a==="on"?0:c))})),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=F(d,c),j)b.closestPointRange=e;if(a)b.oldTransA=k;b.translationSlope=b.transA=k=b.len/
(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=k*f},minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.log2lin,g=b.isDatetimeAxis,h=b.isXAxis,i=b.isLinked,k=d.maxPadding,j=d.minPadding,l=d.tickInterval,m=d.tickPixelInterval,n=b.categories,q=b.threshold,z=b.softThreshold,s,G,w,v;!g&&!n&&!i&&this.getTickAmount();w=o(b.userMin,d.min);v=o(b.userMax,d.max);i?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),
b.min=o(c.min,c.dataMin),b.max=o(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&aa(11,1)):(!z&&r(q)&&(b.dataMin>=q?(s=q,j=0):b.dataMax<=q&&(G=q,k=0)),b.min=o(w,s,b.dataMin),b.max=o(v,G,b.dataMax));if(e)!a&&F(b.min,o(b.dataMin,b.min))<=0&&aa(10,1),b.min=ca(f(b.min),15),b.max=ca(f(b.max),15);if(b.range&&r(b.max))b.userMin=b.min=w=t(b.min,b.minFromRange()),b.userMax=v=b.max,b.range=null;I(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!n&&!b.axisPointRange&&!b.usePercentage&&
!i&&r(b.min)&&r(b.max)&&(f=b.max-b.min))!r(w)&&j&&(b.min-=f*j),!r(v)&&k&&(b.max+=f*k);if(J(d.floor))b.min=t(b.min,d.floor);if(J(d.ceiling))b.max=F(b.max,d.ceiling);if(z&&r(b.dataMin))if(q=q||0,!r(w)&&b.min<q&&b.dataMin>=q)b.min=q;else if(!r(v)&&b.max>q&&b.dataMax<=q)b.max=q;b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:i&&!l&&m===b.linkedParent.options.tickPixelInterval?l=b.linkedParent.tickInterval:o(l,this.tickAmount?(b.max-b.min)/t(this.tickAmount-1,1):void 0,n?1:(b.max-b.min)*
m/t(b.len,m));h&&!a&&p(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange&&!l)b.tickInterval=t(b.pointRange,b.tickInterval);a=o(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);if(!l&&b.tickInterval<a)b.tickInterval=a;if(!g&&!e&&!l)b.tickInterval=sb(b.tickInterval,null,rb(b.tickInterval),o(d.allowDecimals,
!(b.tickInterval>0.5&&b.tickInterval<5&&b.max>1E3&&b.max<9999)),!!this.tickAmount);if(!this.tickAmount&&this.len)b.tickInterval=b.unsquish();this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,e=a.startOnTick,f=a.endOnTick,g;this.tickmarkOffset=this.categories&&a.tickmarkPlacement==="between"&&this.tickInterval===1?0.5:0;this.minorTickInterval=a.minorTickInterval==="auto"&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=
b=c&&c.slice();if(!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max]))))this.tickPositions=b=d;if(!this.isLinked)this.trimTicks(b,e,
f),this.min===this.max&&r(this.min)&&!this.tickAmount&&(g=!0,this.min-=0.5,this.max+=0.5),this.single=g,!c&&!d&&this.adjustTickAmount()},trimTicks:function(a,b,c){var d=a[0],e=a[a.length-1],f=this.minPointOffset||0;if(b)this.min=d;else for(;this.min-f>a[0];)a.shift();if(c)this.max=e;else for(;this.max+f<a[a.length-1];)a.pop();a.length===0&&r(d)&&a.push((e+d)/2)},alignToOthers:function(){var a={},b,c=this.options;this.chart.options.chart.alignTicks!==!1&&c.alignTicks!==!1&&p(this.chart[this.coll],
function(c){var e=c.options,e=[c.horiz?e.left:e.top,e.width,e.height,e.pane].join(",");c.series.length&&(a[e]?b=!0:a[e]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!r(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=ua(this.len/c)+1);if(b<4)this.finalTickAmt=b,b=5;this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=
this.finalTickAmt,e=b&&b.length;if(e<c){for(;b.length<c;)b.push(ca(b[b.length-1]+a));this.transA*=(e-1)/(c-1);this.max=b[b.length-1]}else e>c&&(this.tickInterval*=2,this.setTickPositions());if(r(d)){for(a=c=b.length;a--;)(d===3&&a%2===1||d<=2&&a>0&&a<c-1)&&b.splice(a,1);this.finalTickAmt=y}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;p(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=
!0});if(b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()){if(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,!this.isDirty)this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax}else this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=o(c,!0);p(f.series,function(a){delete a.kdTree});
e=u(e,{min:a,max:b});I(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options,f=F(c,o(e.min,c)),e=t(d,o(e.max,d));this.allowZoomOutside||(r(c)&&a<=f&&(a=f),r(d)&&b>=e&&(b=e));this.displayBtn=a!==y||b!==y;this.setExtremes(a,b,!1,y,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=o(b.width,a.plotWidth-c+(b.offsetRight||0)),f=o(b.height,
a.plotHeight),g=o(b.top,a.plotTop),b=o(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=Math.round(parseFloat(f)/100*a.plotHeight));c.test(g)&&(g=Math.round(parseFloat(g)/100*a.plotHeight+a.plotTop));this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=t(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?ca(b(this.min)):this.min,max:a?ca(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,
userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=this.lin2log,d=b?c(this.min):this.min,b=b?c(this.max):this.max;a===null?a=b<0?b:d:d>a?a=d:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(o(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},tickSize:function(a){var b=this.options,c=b[a+"Length"],d=o(b[a+"Width"],a==="tick"&&this.isXAxis?1:0);if(d&&c)return b[a+"Position"]==="inside"&&(c=-c),[c,d]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize,
this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,d=c,e=this.len/(((this.categories?1:0)+this.max-this.min)/c),f,g=a.rotation,h=this.labelMetrics(),i,k=Number.MAX_VALUE,j,l=function(a){a/=e||1;a=a>1?ua(a):1;return a*c};b?(j=!a.staggerLines&&!a.step&&(r(g)?[g]:e<o(a.autoRotationLimit,80)&&a.autoRotation))&&p(j,function(a){var b;if(a===g||a&&a>=-90&&a<=90)i=l(Q(h.h/da(ja*a))),b=i+Q(a/360),b<k&&(k=b,f=a,d=i)}):a.step||(d=l(h.h));this.autoRotation=
j;this.labelRotation=o(f,g);return d},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),e=a.margin[3];return b&&(c.step||0)<2&&!c.rotation&&(this.staggerLines||1)*a.plotWidth/d||!b&&(e&&e-a.spacing[3]||a.chartWidth*0.33)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,e=this.options.labels,f=this.horiz,g=this.getSlotWidth(),h=t(1,B(g-2*(e.padding||5))),i={},k=this.labelMetrics(),
j=e.style.textOverflow,l,m=0,n,q;if(!xa(e.rotation))i.rotation=e.rotation||0;if(this.autoRotation)p(c,function(a){if((a=d[a])&&a.labelLength>m)m=a.labelLength}),m>h&&m>k.h?i.rotation=this.labelRotation:this.labelRotation=0;else if(g&&(l={width:h+"px"},!j)){l.textOverflow="clip";for(n=c.length;!f&&n--;)if(q=c[n],h=d[q].label)if(h.styles.textOverflow==="ellipsis"?h.css({textOverflow:"clip"}):d[q].labelLength>g&&h.css({width:g+"px"}),h.getBBox().height>this.len/c.length-(k.h-k.f))h.specCss={textOverflow:"ellipsis"}}if(i.rotation&&
(l={width:(m>a.chartHeight*0.5?a.chartHeight*0.33:a.chartHeight)+"px"},!j))l.textOverflow="ellipsis";if(this.labelAlign=e.align||this.autoLabelAlign(this.labelRotation))i.align=this.labelAlign;p(c,function(a){var b=(a=d[a])&&a.label;if(b)b.attr(i),l&&b.css(E(l,b.specCss)),delete b.specCss,a.rotation=i.rotation});this.tickRotCorr=b.rotCorr(k.b,this.labelRotation||0,this.side!==0)},hasData:function(){return this.hasVisibleSeries||r(this.min)&&r(this.max)&&!!this.tickPositions},getOffset:function(){var a=
this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,k,j,l=0,m,n=0,q=d.title,z=d.labels,s=0,G=a.opposite,w=b.axisOffset,b=b.clipOffset,v=[-1,1,1,-1][h],S,u=a.axisParent,$=this.tickSize("tick");k=a.hasData();a.showAxis=j=k||o(d.showEmpty,!0);a.staggerLines=a.horiz&&z.staggerLines;if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(u),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(u),a.labelGroup=c.g("axis-labels").attr({zIndex:z.zIndex||
7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add(u);if(k||a.isLinked){if(p(e,function(b){f[b]?f[b].addLabel():f[b]=new Va(a,b)}),a.renderUnsquish(),z.reserveSpace!==!1&&(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign||a.labelAlign==="center")&&p(e,function(a){s=t(f[a].getLabelSize(),s)}),a.staggerLines)s*=a.staggerLines,a.labelOffset=s*(a.opposite?-1:1)}else for(S in f)f[S].destroy(),delete f[S];if(q&&q.text&&q.enabled!==!1){if(!a.axisTitle)(S=q.textAlign)||(S=(g?{low:"left",middle:"center",
high:"right"}:{low:G?"right":"left",middle:"center",high:G?"left":"right"})[q.align]),a.axisTitle=c.text(q.text,0,0,q.useHTML).attr({zIndex:7,rotation:q.rotation||0,align:S}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(q.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(j)l=a.axisTitle.getBBox()[g?"height":"width"],m=q.offset,n=r(m)?0:o(q.margin,g?5:10);a.axisTitle[j?"show":"hide"](!0)}a.offset=v*o(d.offset,w[h]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=h===0?-a.labelMetrics().h:h===
2?a.tickRotCorr.y:0;n=Math.abs(s)+n;s&&(n-=c,n+=v*(g?o(z.y,a.tickRotCorr.y+v*8):z.x));a.axisTitleMargin=o(m,n);w[h]=t(w[h],a.axisTitleMargin+l+v*a.offset,n,k&&e.length&&$?$[0]:0);d=d.offset?0:V(d.lineWidth/2)*2;b[i]=t(b[i],d)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-
this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=e.x||0,k=e.y||0,j=C(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?j:0);return{x:a?d+i:b+(g?this.width:0)+h+i,y:a?b+k-(g?this.height:0)+h:d+k}},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.lin2log,g=a.isLinked,
h=a.tickPositions,i=a.axisTitle,k=a.ticks,j=a.minorTicks,l=a.alternateBands,m=d.stackLabels,n=d.alternateGridColor,q=a.tickmarkOffset,z=d.lineWidth,s,o=b.hasRendered&&J(a.oldMin),w=a.showAxis,v=$a(c.globalAnimation),r,t;a.labelEdge.length=0;a.overlap=!1;p([k,j,l],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||g){a.minorTickInterval&&!a.categories&&p(a.getMinorTickPositions(),function(b){j[b]||(j[b]=new Va(a,b,"minor"));o&&j[b].isNew&&j[b].render(null,!0);j[b].render(null,!1,1)});if(h.length&&
(p(h,function(b,c){if(!g||b>=a.min&&b<=a.max)k[b]||(k[b]=new Va(a,b)),o&&k[b].isNew&&k[b].render(c,!0,0.1),k[b].render(c)}),q&&(a.min===0||a.single)))k[-1]||(k[-1]=new Va(a,-1,null,!0)),k[-1].render(-1);n&&p(h,function(c,d){t=h[d+1]!==y?h[d+1]+q:a.max-q;if(d%2===0&&c<a.max&&t<=a.max+(b.polar?-q:q))l[c]||(l[c]=new x.PlotLineOrBand(a)),r=c+q,l[c].options={from:e?f(r):r,to:e?f(t):t,color:n},l[c].render(),l[c].isActive=!0});if(!a._addedPlotLB)p((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),
a._addedPlotLB=!0}p([k,j,l],function(a){var c,d,e=[],f=v.duration;for(c in a)if(!a[c].isActive)a[c].render(c,!1,0),a[c].isActive=!1,e.push(c);Pa(function(){for(d=e.length;d--;)a[e[d]]&&!a[e[d]].isActive&&(a[e[d]].destroy(),delete a[e[d]])},a===l||!b.hasRendered||!f?0:f)});if(z)s=a.getLinePath(z),a.axisLine?a.axisLine.animate({d:s}):a.axisLine=c.path(s).attr({stroke:d.lineColor,"stroke-width":z,zIndex:7}).add(a.axisGroup),a.axisLine[w?"show":"hide"](!0);if(i&&w)i[i.isNew?"attr":"animate"](a.getTitlePosition()),
i.isNew=!1;m&&m.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),p(this.plotLinesAndBands,function(a){a.render()}));p(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||X(b);for(d in c)Ra(c[d]),c[d]=null;p([b.ticks,b.minorTicks,b.alternateBands],function(a){Ra(a)});for(a=e.length;a--;)e[a].destroy();p("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(a){b[a]&&
(b[a]=b[a].destroy())});this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){var c,d=this.crosshair,e,f;if(!this.crosshair||(r(b)||!o(d.snap,!0))===!1)this.hideCrosshair();else if(o(d.snap,!0)?r(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos,c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:o(b.stackY,b.y))||null:this.getPlotLinePath(null,null,null,null,c)||null,c===null)this.hideCrosshair();else if(e=this.categories&&!this.isRadial,
f=o(d.width,e?this.transA:1),this.cross)this.cross.attr({d:c,visibility:"visible","stroke-width":f});else{e={"pointer-events":"none","stroke-width":f,stroke:d.color||(e?"rgba(155,200,255,0.2)":"#C0C0C0"),zIndex:o(d.zIndex,2)};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}},hideCrosshair:function(){this.cross&&this.cross.hide()}};u(ha.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b,null,null,!0),d=this.getPlotLinePath(a,null,null,
!0);d&&c?(d.flat=d.toString()===c.toString(),d.push(c[4],c[5],c[1],c[2])):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(a,b){var c=(new x.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,
e=b.length;e--;)b[e].id===a&&b[e].destroy();p([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&pa(b,b[e])})}});ha.prototype.getTimeTicks=function(a,b,c,d){var e=[],f={},g=U.global.useUTC,h,i=new la(b-Ya(b)),k=a.unitRange,j=a.count;if(r(b)){i[Fb](k>=H.second?0:j*V(i.getMilliseconds()/j));if(k>=H.second)i[Gb](k>=H.minute?0:j*V(i.getSeconds()/j));if(k>=H.minute)i[Hb](k>=H.hour?0:j*V(i[tb]()/j));if(k>=H.hour)i[Ib](k>=H.day?0:j*V(i[ub]()/j));
if(k>=H.day)i[kb](k>=H.month?1:j*V(i[Ua]()/j));k>=H.month&&(i[wb](k>=H.year?0:j*V(i[ab]()/j)),h=i[bb]());k>=H.year&&(h-=h%j,i[xb](h));if(k===H.week)i[kb](i[Ua]()-i[vb]()+o(d,1));b=1;if(qb||Za)i=i.getTime(),i=new la(i+Ya(i));h=i[bb]();for(var d=i.getTime(),l=i[ab](),m=i[Ua](),n=!g||!!Za,q=(H.day+(g?Ya(i):i.getTimezoneOffset()*6E4))%H.day;d<c;)e.push(d),k===H.year?d=jb(h+b*j,0):k===H.month?d=jb(h,l+b*j):n&&(k===H.day||k===H.week)?d=jb(h,l,m+b*j*(k===H.day?1:7)):d+=k*j,b++;e.push(d);p(Ba(e,function(a){return k<=
H.hour&&a%H.day===q}),function(a){f[a]="day"})}e.info=u(a,{higherRanks:f,totalRange:k*j});return e};ha.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=H[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=H[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+H[c[g+1][0]])/2)break;e===H.year&&
a<5*e&&(f=[1,2,5]);c=sb(a/e,f,d[0]==="year"?t(rb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};ha.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=this.lin2log,h=this.log2lin,i=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=B(a),i=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=V(b),k,j,l,m,n,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!n;f++){j=e.length;for(k=0;k<j&&!n;k++)l=h(g(f)*e[k]),l>b&&(!d||m<=c)&&m!==y&&i.push(m),m>
c&&(n=!0),m=l}else if(b=g(b),c=g(c),a=e[d?"minorTickInterval":"tickInterval"],a=o(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=sb(a,null,rb(a)),i=Ca(this.getLinearTickPositions(a,b,c),h),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return i};ha.prototype.log2lin=function(a){return Y.log(a)/Y.LN10};ha.prototype.lin2log=function(a){return Y.pow(10,a)};var Ob=x.Tooltip=function(){this.init.apply(this,arguments)};Ob.prototype=
{init:function(a,b){var c=b.borderWidth,d=b.style,e=C(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});ka||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);
clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden&&(Q(a-f.x)>1||Q(b-f.y)>1),h=e.followPointer||e.len>1;u(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?y:g?(2*f.anchorX+c)/3:c,anchorY:h?y:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=o(a,this.options.hideDelay,500);if(!this.isHidden)this.hideTimer=
Pa(function(){b.label[a?"fadeOut":"hide"]();b.isHidden=!0},a)},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=d.plotLeft,h=0,i=0,k,j,a=ta(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===y&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(p(a,function(a){k=a.series.yAxis;j=a.series.xAxis;h+=a.plotX+(!e&&j?j.left-g:0);i+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&k?k.top-f:0)}),h/=a.length,i/=a.length,c=[e?d.plotWidth-i:h,this.shared&&!e&&a.length>
1&&b?b.chartY-f:e?d.plotHeight-h:i]);return Ca(c,B)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,f={},g=c.h||0,h,i=["y",d.chartHeight,b,c.plotY+d.plotTop,d.plotTop,d.plotTop+d.plotHeight],k=["x",d.chartWidth,a,c.plotX+d.plotLeft,d.plotLeft,d.plotLeft+d.plotWidth],j=!this.followPointer&&o(c.ttBelow,!d.inverted===!!c.negative),l=function(a,b,c,d,h,i){var k=c<d-e,m=d+e+c<b,l=d-e-c;d+=e;if(j&&m)f[a]=d;else if(!j&&k)f[a]=l;else if(k)f[a]=F(i-c,l-g<0?l:l-g);else if(m)f[a]=t(h,d+g+c>b?d:
d+g);else return!1},m=function(a,b,c,d){var g;d<e||d>b-e?g=!1:f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2;return g},n=function(a){var b=i;i=k;k=b;h=a},q=function(){l.apply(0,i)!==!1?m.apply(0,k)===!1&&!h&&(n(!0),q()):h?f.x=f.y=0:(n(!0),q())};(d.inverted||this.len>1)&&n();q();return f},defaultFormatter:function(a){var b=this.points||ta(this),c;c=[a.tooltipFooterHeaderFormatter(b[0])];c=c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0],!0));return c.join("")},refresh:function(a,b){var c=
this.chart,d=this.label,e=this.options,f,g,h,i={},k,j=[];k=e.formatter||this.defaultFormatter;var i=c.hoverPoints,l,m=this.shared;clearTimeout(this.hideTimer);this.followPointer=ta(a)[0].series.tooltipOptions.followPointer;h=this.getAnchor(a,b);f=h[0];g=h[1];m&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,i&&p(i,function(a){a.setState()}),p(a,function(a){a.setState("hover");j.push(a.getLabelConfig())}),i={x:a[0].category,y:a[0].y},i.points=j,this.len=j.length,a=a[0]):i=a.getLabelConfig();
k=k.call(i,this);i=a.series;this.distance=o(i.tooltipOptions.distance,16);k===!1?this.hide():(this.isHidden&&(Oa(d),d.attr("opacity",1).show()),d.attr({text:k}),l=e.borderColor||a.color||i.color||"#606060",d.attr({stroke:l}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow,h:h[2]||0}),this.isHidden=!1);I(c,"tooltipRefresh",{text:k,x:f+c.plotLeft,y:g+c.plotTop,borderColor:l})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,
c.width,c.height,a);this.move(B(c.x),B(c.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getXDateFormat:function(a,b,c){var d,b=b.dateTimeLabelFormats,e=c&&c.closestPointRange,f,g={millisecond:15,second:12,minute:9,hour:6,day:3},h,i="millisecond";if(e){h=Qa("%m-%d %H:%M:%S.%L",a.x);for(f in H){if(e===H.week&&+Qa("%w",a.x)===c.options.startOfWeek&&h.substr(6)==="00:00:00.000"){f="week";break}if(H[f]>e){f=i;break}if(g[f]&&h.substr(g[f])!=="01-01 00:00:00.000".substr(g[f]))break;f!=="week"&&(i=f)}f&&(d=
b[f])}else d=b.day;return d||b.year},tooltipFooterHeaderFormatter:function(a,b){var c=b?"footer":"header",d=a.series,e=d.tooltipOptions,f=e.xDateFormat,g=d.xAxis,h=g&&g.options.type==="datetime"&&J(a.key),c=e[c+"Format"];h&&!f&&(f=this.getXDateFormat(a,e,g));h&&f&&(c=c.replace("{point.key}","{point.key:"+f+"}"));return Ka(c,{point:a,series:d})},bodyFormatter:function(a){return Ca(a,function(a){var c=a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}};
var ia;db=A&&A.documentElement.ontouchstart!==y;var Xa=x.Pointer=function(a,b){this.init(a,b)};Xa.prototype={init:function(a,b){var c=b.chart,d=c.events,e=ka?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(x.Tooltip&&b.tooltip.enabled)a.tooltip=new Ob(a,b.tooltip),this.followTouchMove=o(b.tooltip.followTouchMove,
!0);this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||D.event;if(!a.target)a.target=a.srcElement;d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=zb(this.chart.container);d.pageX===y?(c=t(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return u(a,{chartX:B(c),chartY:B(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};p(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":
"chartY"])})});return b},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e=d?d.shared:!1,f=b.hoverPoint,g=b.hoverSeries,h,i=[Number.MAX_VALUE,Number.MAX_VALUE],k,j,l=[],m=[],n;if(!e&&!g)for(h=0;h<c.length;h++)if(c[h].directTouch||!c[h].options.stickyTracking)c=[];g&&(e?g.noSharedTooltip:g.directTouch)&&f?m=[f]:(p(c,function(b){k=b.noSharedTooltip&&e;j=!e&&b.directTouch;b.visible&&!k&&!j&&o(b.options.enableMouseTracking,!0)&&(n=b.searchPoint(a,!k&&b.kdDimensions===1))&&l.push(n)}),
p(l,function(a){a&&p(["dist","distX"],function(b,c){if(J(a[b])){var d=a[b]===i[c]&&a.series.group.zIndex>=m[c].series.group.zIndex;if(a[b]<i[c]||d)i[c]=a[b],m[c]=a}})}));if(e)for(h=l.length;h--;)(l[h].clientX!==m[1].clientX||l[h].series.noSharedTooltip)&&l.splice(h,1);if(m[0]&&(m[0]!==this.prevKDPoint||d&&d.isHidden))if(e&&!m[0].series.noSharedTooltip)l.length&&d&&d.refresh(l,a),p(l,function(b){b.onMouseOver(a,b!==(g&&g.directTouch&&f||m[0]))}),this.prevKDPoint=m[1];else{d&&d.refresh(m[0],a);if(!g||
!g.directTouch)m[0].onMouseOver(a);this.prevKDPoint=m[0]}else c=g&&g.tooltipOptions.followPointer,d&&c&&!d.isHidden&&(c=d.getAnchor([{}],a),d.updatePosition({plotX:c[0],plotY:c[1]}));if(!this._onDocumentMouseMove)this._onDocumentMouseMove=function(a){if(T[ia])T[ia].pointer.onDocumentMouseMove(a)},N(A,"mousemove",this._onDocumentMouseMove);p(e?l:[o(f,m[1])],function(c){p(b.axes,function(b){(!c||c.series[b.coll]===b)&&b.drawCrosshair(a,c)})})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=
c.hoverPoint,f=c.hoverPoints,g=c.tooltip,h=g&&g.shared?f:e;a&&h&&p(ta(h),function(b){b.series.isCartesian&&b.plotX===void 0&&(a=!1)});if(a)g&&h&&(g.refresh(h),e&&(e.setState(e.state,!0),p(c.axes,function(a){o(a.crosshair&&a.crosshair.snap,!0)?a.drawCrosshair(null,e):a.hideCrosshair()})));else{if(e)e.onMouseOut();f&&p(f,function(a){a.setState()});if(d)d.onMouseOut();g&&g.hide(b);if(this._onDocumentMouseMove)X(A,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null;p(c.axes,function(a){a.hideCrosshair()});
this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;p(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=
this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,k=b.plotWidth,j=b.plotHeight,l,m=this.selectionMarker,n=this.mouseDownX,q=this.mouseDownY,o=c.panKey&&a[c.panKey+"Key"];if(!m||!m.touch)if(d<h?d=h:d>h+k&&(d=h+k),e<i?e=i:e>i+j&&(e=i+j),this.hasDragged=Math.sqrt(Math.pow(n-d,2)+Math.pow(q-e,2)),this.hasDragged>10){l=b.isInsidePlot(n-h,q-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!o&&!m)this.selectionMarker=m=b.renderer.rect(h,i,
f?1:k,g?1:j,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();m&&f&&(d-=n,m.attr({width:Q(d),x:(d>0?0:d)+n}));m&&g&&(d=e-q,m.attr({height:Q(d),y:(d>0?0:d)+q}));l&&!m&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},f=this.selectionMarker,g=f.attr?f.attr("x"):f.x,h=f.attr?f.attr("y"):f.y,i=f.attr?f.attr("width"):f.width,k=f.attr?f.attr("height"):f.height,j;if(this.hasDragged||
d)p(c.axes,function(c){if(c.zoomEnabled&&r(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,n=a.type==="touchend"?c.minPixelPadding:0,q=c.toValue((f?g:h)+n),f=c.toValue((f?g+i:h+k)-n);e[c.coll].push({axis:c,min:F(q,f),max:t(q,f)});j=!0}}),j&&I(c,"selection",e,function(a){c.zoom(u(a,d?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}if(c)M(c.container,{cursor:c._cursor}),c.cancelClick=this.hasDragged>10,c.mouseIsDown=this.hasDragged=
this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){T[ia]&&T[ia].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,a=this.normalize(a,c);c&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(a){var b=T[ia];if(b&&(a.relatedTarget||a.toElement))b.pointer.reset(),
b.pointer.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart;if(!r(ia)||!T[ia]||!T[ia].mouseIsDown)ia=b.index;a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=P(a,"class")){if(c.indexOf(b)!==-1)return!0;if(c.indexOf("highcharts-container")!==-1)return!1}a=a.parentNode}},
onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,a=a.relatedTarget||a.toElement;if(b&&a&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&!this.inClass(a,"highcharts-series-"+b.index))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(I(c.series,"click",u(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(u(a,this.getCoordinates(a)),
b.isInsidePlot(a.chartX-d,a.chartY-e)&&I(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};N(b,"mouseleave",a.onContainerMouseLeave);eb===1&&N(A,"mouseup",a.onDocumentMouseUp);if(db)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},eb===1&&N(A,"touchend",a.onDocumentTouchEnd)},
destroy:function(){var a;X(this.chart.container,"mouseleave",this.onContainerMouseLeave);eb||(X(A,"mouseup",this.onDocumentMouseUp),X(A,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};u(x.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var i=
this.chart,k=a?"x":"y",j=a?"X":"Y",l="chart"+j,m=a?"width":"height",n=i["plot"+(a?"Left":"Top")],q,o,s=h||1,p=i.inverted,w=i.bounds[a?"h":"v"],v=b.length===1,r=b[0][l],t=c[0][l],u=!v&&b[1][l],x=!v&&c[1][l],B,c=function(){!v&&Q(r-u)>20&&(s=h||Q(t-x)/Q(r-u));o=(n-t)/s+r;q=i["plot"+(a?"Width":"Height")]/s};c();b=o;b<w.min?(b=w.min,B=!0):b+q>w.max&&(b=w.max-q,B=!0);B?(t-=0.8*(t-g[k][0]),v||(x-=0.8*(x-g[k][1])),c()):g[k]=[t,x];p||(f[k]=o-n,f[m]=q);f=p?1/s:s;e[m]=q;e[k]=b;d[p?a?"scaleY":"scaleX":"scale"+
j]=s;d["translate"+j]=f*n+(t-f*r)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=a.touches,f=e.length,g=b.lastValidTouch,h=b.hasZoom,i=b.selectionMarker,k={},j=f===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),l={};if(f>1)b.initiated=!0;h&&b.initiated&&!j&&a.preventDefault();Ca(e,function(a){return b.normalize(a)});if(a.type==="touchstart")p(e,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),g.x=[d[0].chartX,d[1]&&d[1].chartX],g.y=[d[0].chartY,d[1]&&
d[1].chartY],p(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(o(a.options.min,a.dataMin)),f=a.toPixels(o(a.options.max,a.dataMax)),g=F(e,f),e=t(e,f);b.min=F(a.pos,g-d);b.max=t(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!i)b.selectionMarker=i=u({destroy:Aa,touch:!0},c.plotBox);b.pinchTranslate(d,e,k,i,l,g);b.hasPinched=h;b.scaleGroups(k,l);if(!h&&b.followTouchMove&&f===1)this.runPointActions(b.normalize(a));else if(b.res)b.res=!1,this.reset(!1,
0)}},touch:function(a,b){var c=this.chart,d;ia=c.index;if(a.touches.length===1)if(a=this.normalize(a),c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop)&&!c.openMenu){b&&this.runPointActions(a);if(a.type==="touchmove")c=this.pinchDown,d=c[0]?Math.sqrt(Math.pow(c[0].chartX-a.chartX,2)+Math.pow(c[0].chartY-a.chartY,2))>=4:!1;o(d,!0)&&this.pinch(a)}else b&&this.reset();else a.touches.length===2&&this.pinch(a)},onContainerTouchStart:function(a){this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},
onDocumentTouchEnd:function(a){T[ia]&&T[ia].pointer.drop(a)}});if(D.PointerEvent||D.MSPointerEvent){var va={},Cb=!!D.PointerEvent,Rb=function(){var a,b=[];b.item=function(a){return this[a]};for(a in va)va.hasOwnProperty(a)&&b.push({pageX:va[a].pageX,pageY:va[a].pageY,target:va[a].target});return b},Db=function(a,b,c,d){if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&T[ia])d(a),d=T[ia].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:Aa,touches:Rb()})};u(Xa.prototype,
{onContainerPointerDown:function(a){Db(a,"onContainerTouchStart","touchstart",function(a){va[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Db(a,"onContainerTouchMove","touchmove",function(a){va[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!va[a.pointerId].target)va[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Db(a,"onDocumentTouchEnd","touchend",function(a){delete va[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,
Cb?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,Cb?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(A,Cb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});fb(Xa.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&M(b.container,{"-ms-touch-action":"none","touch-action":"none"})});fb(Xa.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(N)});fb(Xa.prototype,"destroy",function(a){this.batchMSEvents(X);
a.call(this)})}var ob=x.Legend=function(a,b){this.init(a,b)};ob.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=b.itemMarginTop||0;this.options=b;if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=E(d,b.itemHiddenStyle),c.itemMarginTop=e,c.padding=d=o(b.padding,8),c.initialItemX=d,c.initialItemY=d-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.symbolWidth=o(b.symbolWidth,16),c.pages=[],c.render(),N(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,
d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},k;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(k in i.stroke=h,g=a.convertAttribs(g),g)d=g[k],d!==y&&(i[k]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-
e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;p(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Sa(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight,e=this.titleHeight;if(b)c=b.translateY,p(this.allItems,function(f){var g=f.checkbox,h;g&&(h=c+e+g.y+(a||0)+3,M(g,
{left:b.translateX+f.checkboxOffset+g.x-20+"px",top:h+"px",display:h>c-6&&h<c+d-6?"":"none"}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?
Ka(b.labelFormat,a):b.labelFormatter.call(a)})},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,k=this.padding,j=e?o(d.itemDistance,20):0,l=!d.rtl,m=d.width,n=d.itemMarginBottom||0,q=this.itemMarginTop,z=this.initialItemX,s=a.legendItem,p=a.series&&a.series.drawLegendSymbol?a.series:a,w=p.options,w=this.createCheckboxForItem&&w&&w.showCheckbox,v=d.useHTML;if(!s){a.legendGroup=
c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);a.legendItem=s=c.text("",l?f+g:-g,this.baseline||0,v).css(E(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.fontMetrics=c.fontMetrics(h.fontSize,s),this.baseline=this.fontMetrics.f+3+q,s.attr("y",this.baseline);p.drawLegendSymbol(this,a);this.setItemEvents&&this.setItemEvents(a,s,v,h,i);w&&this.createCheckboxForItem(a)}this.colorizeItem(a,a.visible);this.setText(a);c=s.getBBox();f=a.checkboxOffset=
d.itemWidth||a.legendItemWidth||f+g+c.width+j+(w?20:0);this.itemHeight=g=B(a.legendItemHeight||c.height);if(e&&this.itemX-z+f>(m||b.chartWidth-2*k-z-d.x))this.itemX=z,this.itemY+=q+this.lastLineHeight+n,this.lastLineHeight=0;this.maxItemWidth=t(this.maxItemWidth,f);this.lastItemY=q+this.itemY+n;this.lastLineHeight=t(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=q+g+n,this.lastLineHeight=g);this.offsetWidth=m||t((e?this.itemX-z-j:f)+k,this.offsetWidth)},
getAllItems:function(){var a=[];p(this.chart.series,function(b){var c=b.options;if(o(c.showInLegend,!r(c.linkedTo)?y:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},adjustMargins:function(a,b){var c=this.chart,d=this.options,e=d.align.charAt(0)+d.verticalAlign.charAt(0)+d.layout.charAt(0);this.display&&!d.floating&&p([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,g){f.test(e)&&!r(a[g])&&(c[nb[g]]=t(c[nb[g]],c.legend[(g+1)%2?"legendHeight":
"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+o(d.margin,12)+b[g]))})},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,k=a.options,j=a.padding,l=k.borderWidth,m=k.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();hb(e,function(a,b){return(a.options&&a.options.legendIndex||
0)-(b.options&&b.options.legendIndex||0)});k.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;a.lastLineHeight=0;p(e,function(b){a.renderItem(b)});g=(k.width||a.offsetWidth)+j;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);h+=j;if(l||m){if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,k.borderRadius,l||0).attr({stroke:k.borderColor,"stroke-width":l||0,fill:m||"none"}).add(d).shadow(k.shadow),i.isNew=!0;i[f?
"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;p(e,function(b){a.positionItem(b)});f&&d.align(u({width:g,height:h},k),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,k=e.navigation,j=o(k.animation,!0),l=k.arrowSize||12,m=this.nav,n=this.pages,q=this.padding,z,s=this.allItems,r=function(a){i.attr({height:a});
if(b.contentGroup.div)b.contentGroup.div.style.clip="rect("+q+"px,9999px,"+(q+a)+"px,0)"};e.layout==="horizontal"&&(f/=2);g&&(f=F(f,g));n.length=0;if(a>f&&k.enabled!==!1){this.clipHeight=h=t(f-20-this.titleHeight-q,0);this.currentPage=o(this.currentPage,1);this.fullHeight=a;p(s,function(a,b){var c=a._legendItemPos[1],d=B(a.legendItem.getBBox().height),e=n.length;if(!e||c-n[e-1]>h&&(z||c)!==n[e-1])n.push(z||c),e++;b===s.length-1&&c+d-n[e-1]>h&&n.push(c);c!==z&&(z=c)});if(!i)i=b.clipRect=d.clipRect(0,
q,9999,0),b.contentGroup.clip(i);r(h);if(!m)this.nav=m=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,j)}).add(m),this.pager=d.text("",15,10).css(k.style).add(m),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,j)}).add(m);b.scroll(0);a=f}else if(m)r(c.chartHeight),m.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,
f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,k=this.padding;e>d&&(e=d);if(e>0)b!==y&&Ta(b,this.chart),this.nav.attr({translateX:k,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),
this.currentPage=e,this.positionCheckboxes(c)}};K=x.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||a.fontMetrics.f;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-c+1,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d=a.symbolWidth,e=this.chart.renderer,f=this.legendGroup,a=a.baseline-B(a.fontMetrics.b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=
b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=c=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b,c).add(f),c.isMarker=!0}};(/Trident\/7\.0/.test(za)||Na)&&fb(ob.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});var gb=x.Chart=function(){this.getArgs.apply(this,arguments)};x.chart=function(a,b,c){return new gb(a,b,c)};gb.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);
if(xa(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(a,b){var c,d=a.series;a.series=null;c=E(U,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=T.length;T.push(f);eb++;d.reflow!==!1&&N(f,"load",function(){f.initReflow()});
if(e)for(g in e)N(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=ka?!1:o(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=L[a.type||b.type||b.defaultSeriesType])||aa(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,
k=this.isDirtyBox,j=c.length,l=j,m=this.renderer,n=m.isHidden(),q=[];Ta(a,this);n&&this.cloneRenderTo();for(this.layOutTitles();l--;)if(a=c[l],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(l=j;l--;)if(a=c[l],a.options.stacking)a.isDirty=!0;p(c,function(a){a.isDirty&&a.options.legendType==="point"&&(a.updateTotals&&a.updateTotals(),f=!0);a.isDirtyData&&I(a,"updatedData")});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;g&&this.getStacks();if(i&&!this.isResizing)this.maxTicks=
null,p(b,function(a){a.setScale()});this.getMargins();i&&(p(b,function(a){a.isDirty&&(k=!0)}),p(b,function(a){var b=a.min+","+a.max;if(a.extKey!==b)a.extKey=b,q.push(function(){I(a,"afterSetExtremes",u(a.eventArgs,a.getExtremes()));delete a.eventArgs});(k||g)&&a.redraw()}));k&&this.drawChartBox();p(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);m.draw();I(this,"redraw");n&&this.cloneRenderTo(!0);p(q,function(a){a.call()})},get:function(a){var b=this.axes,
c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=ta(b.xAxis||{}),b=b.yAxis=ta(b.yAxis||{});p(c,function(a,b){a.index=b;a.isX=!0});p(b,function(a,b){a.index=b});c=c.concat(b);p(c,function(b){new ha(a,b)})},getSelectedPoints:function(){var a=[];p(this.series,
function(b){a=a.concat(Ba(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return Ba(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=E(e.title,a);g=e.subtitle=E(e.subtitle,b),e=g;p([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||
4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.renderer,h=this.spacingBox;if(c&&(c.css({width:(f.width||h.width+f.widthAdjust)+"px"}).align(u({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,h),!f.floating&&!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||h.width+e.widthAdjust)+"px"}).align(u({y:b+(f.margin-13)+g.fontMetrics(e.style.fontSize,c).b},e),!1,h),!e.floating&&!e.verticalAlign&&
(b=ua(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&o(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!r(b))this.containerWidth=na(c,"width");if(!r(a))this.containerHeight=na(c,"height");this.chartWidth=t(0,b||this.containerWidth||600);this.chartHeight=t(0,o(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=
this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Sa(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),M(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),A.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options,c=b.chart,d,e;a=this.renderTo;var f="highcharts-"+yb++;if(!a)this.renderTo=
a=c.renderTo;if(xa(a))this.renderTo=a=A.getElementById(a);a||aa(13,!0);d=C(P(a,"data-highcharts-chart"));J(d)&&T[d]&&T[d].hasRendered&&T[d].destroy();P(a,"data-highcharts-chart",this.index);a.innerHTML="";!c.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();d=this.chartWidth;e=this.chartHeight;this.container=a=ba(Ma,{className:"highcharts-container"+(c.className?" "+c.className:""),id:f},u({position:"relative",overflow:"hidden",width:d+"px",height:e+"px",textAlign:"left",lineHeight:"normal",
zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},c.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=new (x[c.renderer]||cb)(a,d,e,c.style,c.forExport,b.exporting&&b.exporting.allowHTML);ka&&this.renderer.create(this,a,d,e);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();if(d&&!r(c[0]))this.plotTop=t(this.plotTop,d+this.options.title.margin+b[0]);this.legend.adjustMargins(c,b);this.extraBottomMargin&&
(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&p(a.axes,function(a){a.visible&&a.getOffset()});p(nb,function(d,e){r(c[e])||(a[d]+=b[e])});a.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||na(d,"width"),f=c.height||na(d,"height"),c=a?a.target:D;if(!b.hasUserSize&&!b.isPrinting&&e&&f&&(c===
D||c===A)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=Pa(function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null},a?100:0);b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};N(D,"resize",b);N(a,"destroy",function(){X(D,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g=d.renderer;d.isResizing+=1;Ta(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(r(a))d.chartWidth=e=t(0,
B(a)),d.hasUserSize=!!e;if(r(b))d.chartHeight=f=t(0,B(b));a=g.globalAnimation;(a?Wa:M)(d.container,{width:e+"px",height:f+"px"},a);d.setChartSize(!0);g.setSize(e,f,c);d.maxTicks=null;p(d.axes,function(a){a.isDirty=!0;a.setScale()});p(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;I(d,"resize");Pa(function(){d&&I(d,"endResize",null,function(){d.isResizing-=1})},$a(a).duration)},setChartSize:function(a){var b=
this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,k,j,l;this.plotLeft=i=B(this.plotLeft);this.plotTop=k=B(this.plotTop);this.plotWidth=j=t(0,B(d-i-this.marginRight));this.plotHeight=l=t(0,B(e-k-this.marginBottom));this.plotSizeX=b?l:j;this.plotSizeY=b?j:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:k,width:j,height:l};
d=2*V(this.plotBorderWidth/2);b=ua(t(d,h[3])/2);c=ua(t(d,h[0])/2);this.clipBox={x:b,y:c,width:V(this.plotSizeX-t(d,h[1])/2-b),height:t(0,V(this.plotSizeY-t(d,h[2])/2-c))};a||p(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this;p(nb,function(b,c){a[b]=o(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,
f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,k=a.backgroundColor,j=a.plotBackgroundColor,l=a.plotBackgroundImage,m=a.plotBorderWidth||0,n,q=this.plotLeft,o=this.plotTop,p=this.plotWidth,r=this.plotHeight,w=this.plotBox,v=this.clipRect,t=this.clipBox;n=i+(a.shadow?8:0);if(i||k)if(e)e.animate(e.crisp({width:c-n,height:d-n}));else{e={fill:k||"none"};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(n/2,n/2,c-n,d-n,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(j)f?
f.animate(w):this.plotBackground=b.rect(q,o,p,r,0).attr({fill:j}).add().shadow(a.plotShadow);if(l)h?h.animate(w):this.plotBGImage=b.image(l,q,o,p,r).add();v?v.animate({width:t.width,height:t.height}):this.clipRect=b.clipRect(t);if(m)g?(g.strokeWidth=-m,g.animate(g.crisp({x:q,y:o,width:p,height:r}))):this.plotBorder=b.rect(q,o,p,r,0,-m).attr({stroke:a.plotBorderColor,"stroke-width":m,fill:"none",zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,
e,f;p(["inverted","angular","polar"],function(g){c=L[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=L[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;p(b,function(a){a.linkedSeries.length=0});p(b,function(b){var d=b.options.linkedTo;if(xa(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d,b.visible=o(b.options.visible,d.options.visible,b.visible)})},renderSeries:function(){p(this.series,
function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&p(b.items,function(c){var d=u(b.style,c.style),e=C(d.left)+a.plotLeft,f=C(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,e,f,g;this.setTitle();this.legend=new ob(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;e=this.plotHeight-=
21;p(a,function(a){a.setScale()});this.getAxisMargins();f=d/this.plotWidth>1.1;g=e/this.plotHeight>1.05;if(f||g)this.maxTicks=null,p(a,function(a){(a.horiz&&f||!a.horiz&&g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&p(a,function(a){a.visible&&a.render()});if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();this.renderSeries();this.renderLabels();this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&
!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)D.location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;I(a,"destroy");T[a.index]=y;eb--;a.renderTo.removeAttribute("data-highcharts-chart");X(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();p("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),
function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",X(d),f&&Sa(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!fa&&D==D.top&&A.readyState!=="complete"||ka&&!D.canvg?(ka?Nb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):A.attachEvent("onreadystatechange",function(){A.detachEvent("onreadystatechange",a.firstRender);A.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();
I(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();p(b.series||[],function(b){a.initSeries(b)});a.linkSeries();I(a,"beforeRender");if(x.Pointer)a.pointer=new Xa(a,b);a.render();a.renderer.draw();if(!a.renderer.imgCount&&a.onload)a.onload();a.cloneRenderTo(!0)}},onload:function(){var a=this;p([this.callback].concat(this.callbacks),function(b){b&&a.index!==void 0&&b.apply(a,[a])});I(a,"load");this.onload=null},splashArray:function(a,b){var c=b[a],c=Z(c)?c:[c,c,c,c];return[o(b[a+
"Top"],c[0]),o(b[a+"Right"],c[1]),o(b[a+"Bottom"],c[2]),o(b[a+"Left"],c[3])]}};var Bb=x.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d=b.plotWidth-2*c,b=b.plotHeight-2*c,e=a.center,e=[o(e[0],"50%"),o(e[1],"50%"),a.size||"100%",a.innerSize||0],f=F(d,b),g,h;for(g=0;g<4;++g)h=e[g],a=g<2||g===2&&/%$/.test(h),e[g]=(/%$/.test(h)?[d,b,f,e[2]][g]*parseFloat(h)/100:parseFloat(h))+(a?c:0);e[3]>e[2]&&(e[3]=e[2]);return e}},Ja=function(){};Ja.prototype={init:function(a,
b,c){this.series=a;this.color=a.color;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Ja.prototype.optionsToObject.call(this,a);u(this,a);this.options=this.options?u(this.options,a):a;if(d)this.y=this[d];this.isNull=this.x===null||
this.y===null;if(this.x===void 0&&c)this.x=b===void 0?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.options.keys,e=d||c.pointArrayMap||["y"],f=e.length,g=0,h=0;if(J(a)||a===null)b[e[0]]=a;else if(Ea(a)){if(!d&&a.length>f){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];g++}for(;h<f;){if(!d||a[g]!==void 0)b[e[h]]=a[g];g++;h++}}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},
destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),pa(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)X(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,
y:this.y,color:this.color,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=o(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";p(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ka(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;
(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});I(this,a,b,c)},visible:!0};var R=x.Series=function(){};R.prototype={isCartesian:!0,type:"line",pointClass:Ja,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x",
"y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return o(a.options.index,a._i)-o(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();u(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(ka)b.animation=!1;e=b.events;for(d in e)N(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();p(c.parallelArrays,function(a){c[a+"Data"]=
[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-1;hb(f,g);this.yAxis&&hb(this.yAxis.series,g);p(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;p(a.axisTypes||[],function(e){p(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==y&&b[e]===d.id||b[e]===y&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&aa(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,
d=arguments,e=J(b)?function(d){var e=d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=e}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};p(c.parallelArrays,e)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=o(b,a.pointStart,0);this.pointInterval=c=o(this.pointInterval,a.pointInterval,1);d&&(a=new la(b),d==="day"?a=+a[kb](a[Ua]()+c):d==="month"?a=+a[wb](a[ab]()+c):d==="year"&&(a=+a[xb](a[bb]()+c)),c=a-b);this.xIncrement=
b+c;return b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=E(e,c.series,a);this.tooltipOptions=E(U.tooltip,U.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();if((c.negativeColor||c.negativeFillColor)&&!c.zones)a.push({value:c[this.zoneAxis+"Threshold"]||
c.threshold||0,color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&r(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",f=a+"Counter";b||(r(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||ea[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=
this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);if(/^url/.test(this.symbol))a.radius=0},drawLegendSymbol:K.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,k=e.chart,j=null,l=e.xAxis,m=l&&!!l.categories,n=i.turboThreshold,q=this.xData,z=this.yData,s=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=o(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData&&e.visible)p(a,function(a,b){f[b].update&&a!==i.data[b]&&f[b].update(a,
!1,null,!1)});else{e.xIncrement=null;e.colorCounter=0;p(this.parallelArrays,function(a){e[a+"Data"].length=0});if(n&&h>n){for(c=0;j===null&&c<h;)j=a[c],c++;if(J(j)){m=o(i.pointStart,0);j=o(i.pointInterval,1);for(c=0;c<h;c++)q[c]=m,z[c]=a[c],m+=j;e.xIncrement=m}else if(Ea(j))if(s)for(c=0;c<h;c++)j=a[c],q[c]=j[0],z[c]=j.slice(1,s+1);else for(c=0;c<h;c++)j=a[c],q[c]=j[0],z[c]=j[1];else aa(12)}else for(c=0;c<h;c++)if(a[c]!==y&&(j={series:e},e.pointClass.prototype.applyOptions.apply(j,[a[c]]),e.updateParallelArrays(j,
c),m&&r(j.name)))l.names[j.x]=j.name;xa(z[0])&&aa(14,!0);e.data=[];e.options.data=e.userOptions.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=k.isDirtyBox=!0;c=!1}i.legendType==="point"&&(this.processData(),this.generatePoints());b&&k.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,k=this.options;i=k.cropThreshold;var j=this.getExtremesFromAll||k.getExtremesFromAll,l=this.isCartesian,
k=h&&h.val2lin,m=h&&h.isLog,n,q;if(l&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h)a=h.getExtremes(),n=a.min,q=a.max;if(l&&this.sorted&&!j&&(!i||d>i||this.forceCrop))if(b[d-1]<n||b[0]>q)b=[],c=[];else if(b[0]<n||b[d-1]>q)e=this.cropData(this.xData,this.yData,n,q),b=e.xData,c=e.yData,e=e.start,f=!0;for(i=b.length||1;--i;)d=m?k(b[i])-k(b[i-1]):b[i]-b[i-1],d>0&&(g===y||d<g)?g=d:d<0&&this.requireSorting&&aa(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=
c;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=o(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=t(0,i-h);break}for(c=i;c<e;c++)if(a[c]>d){g=c+h;break}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,k=this.hasGroupedData,j,l=[],m;if(!b&&!k)b=[],b.length=a.length,b=this.data=b;for(m=0;m<g;m++)i=
h+m,k?(l[m]=(new f).init(this,[d[m]].concat(ta(e[m]))),l[m].dataGroup=this.groupMap[m]):(b[i]?j=b[i]:a[i]!==y&&(b[i]=j=(new f).init(this,a[i],d[m])),l[m]=j),l[m].index=i;if(b&&(g!==(c=b.length)||k))for(m=0;m<c;m++)if(m===h&&!k&&(m+=g),b[m])b[m].destroyElements(),b[m].plotX=y;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,k,j,l,a=a||this.stackedYData||this.processedYData||[];d=a.length;for(l=0;l<
d;l++)if(k=c[l],j=a[l],i=j!==null&&j!==y&&(!b.isLog||j.length||j>0),k=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[l+1]||k)>=g&&(c[l-1]||k)<=h,i&&k)if(i=j.length)for(;i--;)j[i]!==null&&(e[f++]=j[i]);else e[f++]=j;this.dataMin=La(e);this.dataMax=Ga(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,
k=i==="between"||J(i),j=a.threshold,l=a.startFromThreshold?j:0,m,n,q,p,s=Number.MAX_VALUE,a=0;a<g;a++){var G=f[a],w=G.x,v=G.y;n=G.low;var u=b&&e.stacks[(this.negStacks&&v<(l?0:j)?"-":"")+this.stackKey];if(e.isLog&&v!==null&&v<=0)G.y=v=null,aa(10);G.plotX=m=ca(F(t(-1E5,c.translate(w,0,0,0,1,i,this.type==="flags")),1E5));if(b&&this.visible&&!G.isNull&&u&&u[w])p=this.getStackIndicator(p,w,this.index),u=u[w],v=u.points[p.key],n=v[0],v=v[1],n===l&&(n=o(j,e.min)),e.isLog&&n<=0&&(n=null),G.total=G.stackTotal=
u.total,G.percentage=u.total&&G.y/u.total*100,G.stackY=v,u.setOffset(this.pointXOffset||0,this.barW||0);G.yBottom=r(n)?e.translate(n,0,1,0,1):null;h&&(v=this.modifyValue(v,G));G.plotY=n=typeof v==="number"&&v!==Infinity?F(t(-1E5,e.translate(v,0,1,0,1)),1E5):y;G.isInside=n!==y&&n>=0&&n<=e.len&&m>=0&&m<=c.len;G.clientX=k?c.translate(w,0,0,0,1):m;G.negative=G.y<(j||0);G.category=d&&d[G.x]!==y?d[G.x]:G.x;G.isNull||(q!==void 0&&(s=F(s,Q(m-q))),q=m)}this.closestPointRangePx=s},getValidPoints:function(a,
b){var c=this.chart;return Ba(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,f=this.clipBox,g=f||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(","),i=b[h],k=b[h+"m"];if(!i){if(a)g.width=0,b[h+"m"]=k=d.clipRect(-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight);b[h]=i=d.clipRect(g)}a&&(i.count+=1);if(c.clip!==
!1)this.group.clip(a||f?i:b.clipRect),this.markerGroup.clip(k),this.sharedClipKey=h;a||(i.count-=1,i.count<=0&&h&&b[h]&&(f||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,c=this.options.animation,d;if(c&&!Z(c))c=ea[this.type].animation;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();I(this,"afterAnimate")},
drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,k,j,l=this.options.marker,m=this.pointAttr[""],n,q,p,s=this.markerGroup,r=o(l.enabled,this.xAxis.isRadial,this.closestPointRangePx>2*l.radius);if(l.enabled!==!1||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=V(g.plotX),e=g.plotY,j=g.graphic,n=g.marker||{},q=!!g.marker,a=r&&n.enabled===y||n.enabled,p=g.isInside,a&&J(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||m,h=a.r,i=o(n.symbol,this.symbol),k=i.indexOf("url")===
0,j)j[p?"show":"hide"](!0).attr(a).animate(u({x:d-h,y:e-h},j.symbolName?{width:2*h,height:2*h}:{}));else{if(p&&(h>0||k))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,q?n:l).attr(a).add(s)}else if(j)g.graphic=j.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=o(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=ea[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color,h=a.options.negativeColor,
i={stroke:g,fill:g},k=a.points||[],j,l=[],m,n=a.pointAttrToOptions;f=a.hasPointSpecificOptions;var q=c.lineColor,z=c.fillColor;j=b.turboThreshold;var s=a.zones,t=a.zoneAxis||"y",w,v;b.marker?(e.radius=e.radius||c.radius+e.radiusPlus,e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):(e.color=e.color||ma(e.color||g).brighten(e.brightness).get(),e.negativeColor=e.negativeColor||ma(e.negativeColor||h).brighten(e.brightness).get());l[""]=a.convertAttribs(c,i);p(["hover","select"],function(b){l[b]=
a.convertAttribs(d[b],l[""])});a.pointAttr=l;g=k.length;if(!j||g<j||f)for(;g--;){j=k[g];if((c=j.options&&j.options.marker||j.options)&&c.enabled===!1)c.radius=0;i=null;if(s.length){f=0;for(i=s[f];j[t]>=i.value;)i=s[++f];j.color=j.fillColor=i=o(i.color,a.color)}f=b.colorByPoint||j.color;if(j.options)for(v in n)r(c[n[v]])&&(f=!0);if(f){c=c||{};m=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker||j.negative&&!f.fillColor&&!e.fillColor)f[a.pointAttrToOptions.fill]=f.color||!j.options.color&&e[j.negative&&
h?"negativeColor":"color"]||ma(j.color).brighten(f.brightness||e.brightness).get();w={color:j.color};if(!z)w.fillColor=j.color;if(!q)w.lineColor=j.color;c.hasOwnProperty("color")&&!c.color&&delete c.color;if(i&&!e.fillColor)f.fillColor=i;m[""]=a.convertAttribs(u(w,c),l[""]);m.hover=a.convertAttribs(d.hover,l.hover,m[""]);m.select=a.convertAttribs(d.select,l.select,m[""])}else m=l;j.pointAttr=m}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(za),d,e=a.data||[],f,g,h;I(a,"destroy");
X(a);p(a.axisTypes||[],function(b){if(h=a[b])pa(h.series,a),h.isDirty=h.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(d=e.length;d--;)(f=e[d])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);for(g in a)a[g]instanceof O&&!a[g].survive&&(d=c&&g==="group"?"hide":"destroy",a[g][d]());if(b.hoverSeries===a)b.hoverSeries=null;pa(b.series,a);for(g in a)delete a[g]},getGraphPath:function(a,b,c){var d=this,e=d.options,f=e.step,g,h=[],i,a=a||d.points;(g=a.reversed)&&
a.reverse();(f={right:1,center:2}[f]||f&&3)&&g&&(f=4-f);e.connectNulls&&!b&&!c&&(a=this.getValidPoints(a));p(a,function(g,j){var l=g.plotX,m=g.plotY,n=a[j-1];if((g.leftCliff||n&&n.rightCliff)&&!c)i=!0;g.isNull&&!r(b)&&j>0?i=!e.connectNulls:g.isNull&&!b?i=!0:(j===0||i?n=["M",g.plotX,g.plotY]:d.getPointSpline?n=d.getPointSpline(a,g,j):f?(n=f===1?["L",n.plotX,m]:f===2?["L",(n.plotX+l)/2,n.plotY,"L",(n.plotX+l)/2,m]:["L",l,n.plotY],n.push("L",l,m)):n=["L",l,m],h.push.apply(h,n),i=!1)});return d.graphPath=
h},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color,b.dashStyle]],d=b.lineWidth,e=b.linecap!=="square",f=(this.gappedPath||this.getGraphPath).call(this),g=this.fillGraph&&this.color||"none";p(this.zones,function(d,e){c.push(["zoneGraph"+e,d.color||a.color,d.dashStyle||b.dashStyle])});p(c,function(c,i){var k=c[0],j=a[k];if(j)j.animate({d:f});else if((d||g)&&f.length)j={stroke:c[1],"stroke-width":d,fill:g,zIndex:1},c[2]?j.dashstyle=c[2]:e&&(j["stroke-linecap"]=j["stroke-linejoin"]=
"round"),a[k]=a.chart.renderer.path(f).attr(j).add(a.group).shadow(i<2&&b.shadow)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,f,g=this.clips||[],h,i=this.graph,k=this.area,j=t(b.chartWidth,b.chartHeight),l=this[(this.zoneAxis||"y")+"Axis"],m,n=l.reversed,q=b.inverted,z=l.horiz,s,r,w,v=!1;if(d.length&&(i||k)&&l.min!==y)i&&i.hide(),k&&k.hide(),m=l.getExtremes(),p(d,function(d,p){e=n?z?b.plotWidth:0:z?0:l.toPixels(m.min);e=F(t(o(f,e),0),j);f=F(t(B(l.toPixels(o(d.value,
m.max),!0)),0),j);v&&(e=f=l.toPixels(m.max));s=Math.abs(e-f);r=F(e,f);w=t(e,f);if(l.isXAxis){if(h={x:q?w:r,y:0,width:s,height:j},!z)h.x=b.plotHeight-h.x}else if(h={x:0,y:q?w:r,width:j,height:s},z)h.y=b.plotWidth-h.y;b.inverted&&c.isVML&&(h=l.isXAxis?{x:0,y:n?r:w,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});g[p]?g[p].animate(h):(g[p]=c.clipRect(h),i&&a["zoneGraph"+p].clip(g[p]),k&&a["zoneArea"+p].clip(g[p]));v=d.value>m.max}),this.clips=
g},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};p(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)N(c,"resize",a),N(b,"destroy",function(){X(c,"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({zIndex:d||0.1}).add(e),f.addClass("highcharts-series-"+this.index));f.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=
this.chart,b=this.xAxis,c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=!!a.animate&&b.renderer.isSVG&&$a(d.animation).duration,f=a.visible?"inherit":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:
!1;a.drawGraph&&(a.drawGraph(),a.applyZones());p(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)a.animationTimeout=Pa(function(){a.afterAnimate()},e);a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,
d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:o(d&&d.left,a.plotLeft),translateY:o(e&&e.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,
e,f){var g,h;if(h=c&&c.length)return g=b.kdAxisArray[e%f],c.sort(function(a,b){return a[g]-b[g]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),e+1,f),right:a(c.slice(h+1),e+1,f)}}var b=this,c=b.kdDimensions;delete b.kdTree;Pa(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c)},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,k,j){var l=b.point,m=d.kdAxisArray[k%j],n,q,o=l;q=r(a[e])&&r(l[e])?Math.pow(a[e]-l[e],2):null;n=r(a[f])&&r(l[f])?Math.pow(a[f]-l[f],2):null;
n=(q||0)+(n||0);l.dist=r(n)?Math.sqrt(n):Number.MAX_VALUE;l.distX=r(q)?Math.sqrt(q):Number.MAX_VALUE;m=a[m]-l[m];n=m<0?"left":"right";q=m<0?"right":"left";b[n]&&(n=c(a,b[n],k+1,j),o=n[g]<o[g]?n:l);b[q]&&Math.sqrt(m*m)<o[g]&&(a=c(a,b[q],k+1,j),o=a[g]<o[g]?a:o);return o}var d=this,e=this.kdAxisArray[0],f=this.kdAxisArray[1],g=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}};Jb.prototype={destroy:function(){Ra(this,this.axis)},
render:function(a){var b=this.options,c=b.format,c=c?Ka(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=c.reversed,f=this.isNegative&&!f||!this.isNegative&&f,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=Q(g-c),h=d.xAxis[0].translate(this.x)+
a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};gb.prototype.getStacks=function(){var a=this;p(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});p(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=b.type+o(b.options.stack,"")})};ha.prototype.buildStacks=
function(){var a=this.series,b,c=o(this.options.reversedStacks,!0),d=a.length,e;if(!this.isXAxis){this.usePercentage=!1;for(e=d;e--;)a[c?e:d-e-1].setStackedPoints();for(e=d;e--;)b=a[c?e:d-e-1],b.setStackCliffs&&b.setStackCliffs();if(this.usePercentage)for(e=0;e<d;e++)a[e].setPercentStacks()}};ha.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,
a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};ha.prototype.resetStacks=function(){var a=this.stacks,b,c;if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].touched<this.stacksTouched?(a[b][c].destroy(),delete a[b][c]):(a[b][c].total=null,a[b][c].cum=0)};ha.prototype.cleanStacks=function(){var a,b,c;if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}};R.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==
!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.startFromThreshold?f:0,h=e.stack,e=e.stacking,i=this.stackKey,k="-"+i,j=this.negStacks,l=this.yAxis,m=l.stacks,n=l.oldStacks,q,p,s,r,w,v,u;l.stacksTouched+=1;for(w=0;w<d;w++){v=a[w];u=b[w];q=this.getStackIndicator(q,v,this.index);r=q.key;s=(p=j&&u<(g?0:f))?k:i;m[s]||(m[s]={});if(!m[s][v])n[s]&&n[s][v]?(m[s][v]=n[s][v],m[s][v].total=null):m[s][v]=new Jb(l,
l.options.stackLabels,p,v,h);s=m[s][v];if(u!==null)s.points[r]=s.points[this.index]=[o(s.cum,g)],s.touched=l.stacksTouched,q.index>0&&this.singleStacks===!1&&(s.points[r][0]=s.points[this.index+","+v+",0"][0]);e==="percent"?(p=p?i:k,j&&m[p]&&m[p][v]?(p=m[p][v],s.total=p.total=t(p.total,s.total)+Q(u)||0):s.total=ca(s.total+(Q(u)||0))):s.total=ca(s.total+(u||0));s.cum=o(s.cum,g)+(u||0);if(u!==null)s.points[r].push(s.cum),c[w]=s.cum}if(e==="percent")l.usePercentage=!0;this.stackedYData=c;l.oldStacks=
{}}};R.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData,e;p([b,"-"+b],function(b){var f;for(var g=d.length,h,i;g--;)if(h=d[g],e=a.getStackIndicator(e,h,a.index),f=(i=c[b]&&c[b][h])&&i.points[e.key],h=f)i=i.total?100/i.total:0,h[0]=ca(h[0]*i),h[1]=ca(h[1]*i),a.stackedYData[g]=h[1]})};R.prototype.getStackIndicator=function(a,b,c){!r(a)||a.x!==b?a={x:b,index:0}:a.index++;a.key=[c,b,a.index].join(",");return a};u(gb.prototype,{addSeries:function(a,b,c){var d,
e=this;a&&(b=o(b,!0),I(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options,a=E(a,{index:this[e].length,isX:b});new ha(this,a);f[e]=ta(f[e]||{});f[e].push(a);o(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&M(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};if(!d)b.loadingDiv=
d=ba(Ma,{className:"highcharts-loading"},u(e.style,{zIndex:10,display:"none"}),b.container),b.loadingSpan=ba("span",null,e.labelStyle,d),N(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;if(!b.loadingShown)M(d,{opacity:0,display:""}),Wa(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&Wa(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){M(b,{display:"none"})}});this.loadingShown=
!1}});u(Ja.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);if(f.y===null&&h)f.graphic=h.destroy();if(Z(a)&&!Ea(a))f.redraw=function(){if(h&&h.element&&a&&a.marker&&a.marker.symbol)f.graphic=h.destroy();if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);if(l&&f.name)l[f.x]=f.name;j.data[i]=Z(j.data[i])&&!Ea(j.data[i])?f.options:a;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)k.isDirtyBox=!0;if(j.legendType===
"point")k.isDirtyLegend=!0;b&&k.redraw(c)}var f=this,g=f.series,h=f.graphic,i,k=g.chart,j=g.options,l=g.xAxis&&g.xAxis.names,b=o(b,!0);d===!1?e():f.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(sa(this,this.series.data),a,b)}});u(R.prototype,{addPoint:function(a,b,c,d){var e=this,f=e.options,g=e.data,h=e.graph,i=e.area,k=e.chart,j=e.xAxis&&e.xAxis.names,l=h&&h.shift||0,m=["graph","area"],h=f.data,n,q=e.xData;Ta(d,k);if(c){for(d=e.zones.length;d--;)m.push("zoneGraph"+
d,"zoneArea"+d);p(m,function(a){if(e[a])e[a].shift=l+(f.step?2:1)})}if(i)i.isArea=!0;b=o(b,!0);i={series:e};e.pointClass.prototype.applyOptions.apply(i,[a]);m=i.x;d=q.length;if(e.requireSorting&&m<q[d-1])for(n=!0;d&&q[d-1]>m;)d--;e.updateParallelArrays(i,"splice",d,0,0);e.updateParallelArrays(i,d);if(j&&i.name)j[m]=i.name;h.splice(d,0,a);n&&(e.data.splice(d,0,null),e.processData());f.legendType==="point"&&e.generatePoints();c&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),e.updateParallelArrays(i,
"shift"),h.shift()));e.isDirty=!0;e.isDirtyData=!0;b&&(e.getAttribs(),k.redraw())},removePoint:function(a,b,c){var d=this,e=d.data,f=e[a],g=d.points,h=d.chart,i=function(){g&&g.length===e.length&&g.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};Ta(c,h);b=o(b,!0);f?f.firePointEvent("remove",null,i):i()},remove:function(a,b){var c=this,d=c.chart;I(c,"remove",null,function(){c.destroy();
d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();o(a,!0)&&d.redraw(b)})},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=L[f].prototype,h=["group","markerGroup","dataLabelsGroup"],i;if(a.type&&a.type!==f||a.zIndex!==void 0)h.length=0;p(h,function(a){h[a]=c[a];delete c[a]});a=E(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(i in g)this[i]=y;u(this,L[a.type||f].prototype);p(h,function(a){c[a]=h[a]});this.init(d,
a);d.linkSeries();o(b,!0)&&d.redraw(!1)}});u(ha.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=E(this.userOptions,a);this.destroy(!0);this._addedPlotLB=this.chart._labelPanes=y;this.init(c,u(a,{events:y}));c.isDirtyBox=!0;o(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);pa(b.axes,this);pa(b[c],this);b.options[c].splice(this.options.index,1);p(b[c],function(a,b){a.options.index=
b});this.destroy();b.isDirtyBox=!0;o(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});var wa=qa(R);L.line=wa;ea.area=E(ga,{softThreshold:!1,threshold:0});var oa=qa(R,{type:"area",singleStacks:!1,getStackPoints:function(){var a=[],b=[],c=this.xAxis,d=this.yAxis,e=d.stacks[this.stackKey],f={},g=this.points,h=this.index,i=d.series,k=i.length,j,l=o(d.options.reversedStacks,!0)?1:-1,m,n;if(this.options.stacking){for(m=0;m<
g.length;m++)f[g[m].x]=g[m];for(n in e)e[n].total!==null&&b.push(n);b.sort(function(a,b){return a-b});j=Ca(i,function(){return this.visible});p(b,function(g,i){var n=0,o,r;if(f[g]&&!f[g].isNull)a.push(f[g]),p([-1,1],function(a){var c=a===1?"rightNull":"leftNull",d=0,n=e[b[i+a]];if(n)for(m=h;m>=0&&m<k;)o=n.points[m],o||(m===h?f[g][c]=!0:j[m]&&(r=e[g].points[m])&&(d-=r[1]-r[0])),m+=l;f[g][a===1?"rightCliff":"leftCliff"]=d});else{for(m=h;m>=0&&m<k;){if(o=e[g].points[m]){n=o[1];break}m+=l}n=d.toPixels(n,
!0);a.push({isNull:!0,plotX:c.toPixels(g,!0),plotY:n,yBottom:n})}})}return a},getGraphPath:function(a){var b=R.prototype.getGraphPath,c=this.options,d=c.stacking,e=this.yAxis,f,g,h=[],i=[],k=this.index,j,l=e.stacks[this.stackKey],m=c.threshold,n=e.getThreshold(c.threshold),q,c=c.connectNulls||d==="percent",p=function(b,c,f){var g=a[b],b=d&&l[g.x].points[k],q=g[f+"Null"]||0,f=g[f+"Cliff"]||0,o,p,g=!0;f||q?(o=(q?b[0]:b[1])+f,p=b[0]+f,g=!!q):!d&&a[c]&&a[c].isNull&&(o=p=m);o!==void 0&&(i.push({plotX:j,
plotY:o===null?n:e.getThreshold(o),isNull:g}),h.push({plotX:j,plotY:p===null?n:e.getThreshold(p)}))},a=a||this.points;d&&(a=this.getStackPoints());for(f=0;f<a.length;f++)if(g=a[f].isNull,j=o(a[f].rectPlotX,a[f].plotX),q=o(a[f].yBottom,n),!g||c){c||p(f,f-1,"left");if(!g||d||!c)i.push(a[f]),h.push({x:f,plotX:j,plotY:q});c||p(f,f+1,"right")}f=b.call(this,i,!0,!0);h.reversed=!0;g=b.call(this,h,!0,!0);g.length&&(g[0]="L");f=f.concat(g);b=b.call(this,i,!1,c);this.areaPath=f;return b},drawGraph:function(){this.areaPath=
[];R.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=[["area",this.color,c.fillColor]];p(this.zones,function(b,f){d.push(["zoneArea"+f,b.color||a.color,b.fillColor||c.fillColor])});p(d,function(d){var f=d[0],g=a[f];g?g.animate({d:b}):(g={fill:d[2]||d[1],zIndex:0},d[2]||(g["fill-opacity"]=o(c.fillOpacity,0.75)),a[f]=a.chart.renderer.path(b).attr(g).add(a.group))})},drawLegendSymbol:K.drawRectangle});L.area=oa;ea.spline=E(ga);wa=qa(R,{type:"spline",getPointSpline:function(a,
b,c){var d=b.plotX,e=b.plotY,f=a[c-1],c=a[c+1],g,h,i,k;if(f&&!f.isNull&&c&&!c.isNull){a=f.plotY;i=c.plotX;var c=c.plotY,j=0;g=(1.5*d+f.plotX)/2.5;h=(1.5*e+a)/2.5;i=(1.5*d+i)/2.5;k=(1.5*e+c)/2.5;i!==g&&(j=(k-h)*(i-d)/(i-g)+e-k);h+=j;k+=j;h>a&&h>e?(h=t(a,e),k=2*e-h):h<a&&h<e&&(h=F(a,e),k=2*e-h);k>c&&k>e?(k=t(c,e),h=2*e-k):k<c&&k<e&&(k=F(c,e),h=2*e-k);b.rightContX=i;b.rightContY=k}b=["C",o(f.rightContX,f.plotX),o(f.rightContY,f.plotY),o(g,d),o(h,e),d,e];f.rightContX=f.rightContY=null;return b}});L.spline=
wa;ea.areaspline=E(ea.area);oa=oa.prototype;wa=qa(wa,{type:"areaspline",getStackPoints:oa.getStackPoints,getGraphPath:oa.getGraphPath,setStackCliffs:oa.setStackCliffs,drawGraph:oa.drawGraph,drawLegendSymbol:K.drawRectangle});L.areaspline=wa;ea.column=E(ga,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,
verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0});wa=qa(R,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){R.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&p(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=
a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h=0;b.grouping===!1?h=1:p(a.chart.series,function(b){var c=b.options,e=b.yAxis,i;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===y&&(g[f]=h++),i=g[f]):c.grouping!==!1&&(i=h++),b.columnIndex=i});var i=F(Q(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),k=i*b.groupPadding,j=(i-2*k)/h,b=F(b.maxPointWidth||c.len,o(b.pointWidth,j*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(j-
b)/2+(k+((a.columnIndex||0)+(e?1:0))*j-i/2)*(e?-1:1)};return a.columnMetrics},crispCol:function(a,b,c,d){var e=this.chart,f=this.borderWidth,g=-(f%2?0.5:0),f=f%2?0.5:1;e.inverted&&e.renderer.isVML&&(f+=1);c=Math.round(a+c)+g;a=Math.round(a)+g;c-=a;d=Math.round(b+d)+f;g=Q(b)<=0.5&&d>0.5;b=Math.round(b)+f;d-=b;g&&d&&(b-=1,d+=1);return{x:a,y:b,width:c,height:d}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=o(c.borderWidth,a.closestPointRange*a.xAxis.transA<2?0:1),e=a.yAxis,f=
a.translatedThreshold=e.getThreshold(c.threshold),g=o(c.minPointLength,5),h=a.getColumnMetrics(),i=h.width,k=a.barW=t(i,1+2*d),j=a.pointXOffset=h.offset;b.inverted&&(f-=0.5);c.pointPadding&&(k=ua(k));R.prototype.translate.apply(a);p(a.points,function(c){var d=F(o(c.yBottom,f),9E4),h=999+Q(d),h=F(t(-h,c.plotY),e.len+h),q=c.plotX+j,p=k,s=F(h,d),r,w=t(h,d)-s;Q(w)<g&&g&&(w=g,r=!e.reversed&&!c.negative||e.reversed&&c.negative,s=Q(s-f)>g?d-g:f-(r?g:0));c.barX=q;c.pointWidth=i;c.tooltipPos=b.inverted?[e.len+
e.pos-b.plotLeft-h,a.xAxis.len-q-p/2,w]:[q+p/2,h+e.pos-b.plotTop,w];c.shapeType="rect";c.shapeArgs=a.crispCol(q,s,p,w)})},getSymbol:Aa,drawLegendSymbol:K.drawRectangle,drawGraph:Aa,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,f,g;p(a.points,function(h){var i=h.graphic,k;if(J(h.plotY)&&h.y!==null)f=h.shapeArgs,k=r(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=h.pointAttr[h.selected?"select":""]||a.pointAttr[""],i?(Oa(i),i.attr(k).attr(g)[b.pointCount<
e?"animate":"attr"](E(f))):h.graphic=d[h.shapeType](f).attr(k).attr(g).add(h.group||a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(i)h.graphic=i.destroy()})},animate:function(a){var b=this,c=this.yAxis,d=b.options,e=this.chart.inverted,f={};if(fa)a?(f.scaleY=0.001,a=F(c.pos+c.len,t(c.pos,c.toPixels(d.threshold))),e?f.translateX=a-c.len:f.translateY=a,b.group.attr(f)):(f[e?"translateX":"translateY"]=c.pos,b.group.animate(f,u($a(b.options.animation),{step:function(a,c){b.group.attr({scaleY:t(0.001,
c.pos)})}})),b.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&p(b.series,function(b){if(b.type===a.type)b.isDirty=!0});R.prototype.remove.apply(a,arguments)}});L.column=wa;ea.bar=E(ea.column);oa=qa(wa,{type:"bar",inverted:!0});L.bar=oa;ea.scatter=E(ga,{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});
oa=qa(R,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&R.prototype.drawGraph.call(this)}});L.scatter=oa;ea.pie=E(ga,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.y===null?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,
size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});ga={type:"pie",isCartesian:!1,pointClass:qa(Ja,{init:function(){Ja.prototype.init.apply(this,arguments);var a=this,b;a.name=o(a.name,"Slice");b=function(b){a.slice(b.type==="select")};N(a,"select",b);N(a,"unselect",b);return a},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=d.options.ignoreHiddenPoint,b=o(b,f);if(a!==c.visible){c.visible=c.options.visible=
a=a===y?!c.visible:a;d.options.data[sa(c,d.data)]=c.options;p(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)});c.legendItem&&e.legend.colorizeItem(c,a);!a&&c.state==="hover"&&c.setState("");if(f)d.isDirty=!0;b&&e.redraw()}},slice:function(a,b,c){var d=this.series;Ta(c,d.chart);o(b,!0);this.sliced=this.options.sliced=a=r(a)?a:!this.sliced;d.options.data[sa(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);
this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},animate:function(a){var b=this,
c=b.points,d=b.startAngleRad;if(!a)p(c,function(a){var c=a.graphic,g=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:d,end:d}),c.animate({r:g.r,start:g.start,end:g.end},b.options.animation))}),b.animate=null},updateTotals:function(){var a,b=0,c=this.points,d=c.length,e,f=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0&&(e.visible||!f)?e.y/b*100:0,e.total=b},generatePoints:function(){R.prototype.generatePoints.call(this);
this.updateTotals()},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,k=this.startAngleRad=ra/180*(i-90),i=(this.endAngleRad=ra/180*(o(c.endAngle,i+360)-90))-k,j=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,m,n=j.length,q;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=Y.asin(F((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*W(h)*(a[2]/2+l)};for(m=0;m<n;m++){q=j[m];f=k+b*i;if(!c||q.visible)b+=q.percentage/
100;g=k+b*i;q.shapeType="arc";q.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:B(f*1E3)/1E3,end:B(g*1E3)/1E3};h=(g+f)/2;h>1.5*ra?h-=2*ra:h<-ra/2&&(h+=2*ra);q.slicedTranslation={translateX:B(W(h)*d),translateY:B(da(h)*d)};f=W(h)*a[2]/2;g=da(h)*a[2]/2;q.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];q.half=h<-ra/2||h>ra/2?1:0;q.angle=h;e=F(e,l/2);q.labelPos=[a[0]+f+W(h)*l,a[1]+g+da(h)*l,a[0]+f+W(h)*e,a[1]+g+da(h)*e,a[0]+f,a[1]+g,l<0?"center":q.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=
this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g,h,i;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);p(a.points,function(k){if(k.y!==null){d=k.graphic;h=k.shapeArgs;f=k.shadowGroup;g=k.pointAttr[k.selected?"select":""];if(!g.stroke)g.stroke=g.fill;if(e&&!f)f=k.shadowGroup=b.g("shadow").add(a.shadowGroup);c=k.sliced?k.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);if(d)d.setRadialReference(a.center).attr(g).animate(u(h,c));else{i={"stroke-linejoin":"round"};if(!k.visible)i.visibility=
"hidden";k.graphic=d=b[k.shapeType](h).setRadialReference(a.center).attr(g).attr(i).attr(c).add(a.group).shadow(e,f)}}})},searchPoint:Aa,sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:K.drawRectangle,getCenter:Bb.getCenter,getSymbol:Aa};ga=qa(R,ga);L.pie=ga;R.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h=a.hasRendered||0,i,k,j=o(d.defer,!0),l=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&
a.dlProcessOptions(d),k=a.plotGroup("dataLabelsGroup","data-labels",j&&!h?"hidden":"visible",d.zIndex||6),j&&(k.attr({opacity:+h}),h||N(a,"afterAnimate",function(){a.visible&&k.show();k[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,p(e,function(e){var h,j=e.dataLabel,p,s,t=e.connector,w=!0,v,x={};f=e.dlOptions||e.options&&e.options.dataLabels;h=o(f&&f.enabled,g.enabled)&&e.y!==null;if(j&&!h)e.dataLabel=j.destroy();else if(h){d=E(g,f);v=d.style;h=d.rotation;p=e.getLabelConfig();
i=d.format?Ka(d.format,p):d.formatter.call(p,d);v.color=o(d.color,v.color,a.color,"black");if(j)if(r(i))j.attr({text:i}),w=!1;else{if(e.dataLabel=j=j.destroy(),t)e.connector=t.destroy()}else if(r(i)){j={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:h,padding:d.padding,zIndex:1};if(v.color==="contrast")x.color=d.inside||d.distance<0||b.stacking?l.getContrast(e.color||a.color):"#000000";if(c)x.cursor=c;for(s in j)j[s]===y&&delete j[s];j=e.dataLabel=
l[h?"text":"label"](i,0,-9999,d.shape,null,null,d.useHTML).attr(j).css(u(v,x)).add(k).shadow(d.shadow)}j&&a.alignDataLabel(e,j,d,null,w)}})};R.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=o(a.plotX,-9999),i=o(a.plotY,-9999),k=b.getBBox(),j=f.renderer.fontMetrics(c.style.fontSize).b,l=c.rotation,m=c.align,n=this.visible&&(a.series.forceDL||f.isInsidePlot(h,B(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)),q=o(c.overflow,"justify")==="justify";if(n)d=u({x:g?f.plotWidth-
i:h,y:B(g?f.plotHeight-h:i),width:0,height:0},d),u(c,{width:k.width,height:k.height}),l?(q=!1,g=f.renderer.rotCorr(j,l),g={x:d.x+c.x+d.width/2+g.x,y:d.y+c.y+{top:0,middle:0.5,bottom:1}[c.verticalAlign]*d.height},b[e?"attr":"animate"](g).attr({align:m}),h=(l+720)%360,h=h>180&&h<360,m==="left"?g.y-=h?k.height:0:m==="center"?(g.x-=k.width/2,g.y-=k.height/2):m==="right"&&(g.x-=k.width,g.y-=h?0:k.height)):(b.align(c,null,d),g=b.alignAttr),q?this.justifyDataLabel(b,c,g,k,d,e):o(c.crop,!0)&&(n=f.isInsidePlot(g.x,
g.y)&&f.isInsidePlot(g.x+k.width,g.y+k.height)),c.shape&&!l&&b.attr({anchorX:a.plotX,anchorY:a.plotY});if(!n)Oa(b),b.attr({y:-9999}),b.placed=!1};R.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,k,j,l=a.box?0:a.padding||0;k=c.x+l;if(k<0)h==="right"?b.align="left":b.x=-k,j=!0;k=c.x+d.width-l;if(k>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-k,j=!0;k=c.y+l;if(k<0)i==="bottom"?b.verticalAlign="top":b.y=-k,j=!0;k=c.y+d.height-l;if(k>g.plotHeight)i===
"top"?b.verticalAlign="bottom":b.y=g.plotHeight-k,j=!0;if(j)a.placed=!f,a.align(b,null,e)};if(L.pie)L.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=o(e.connectorPadding,10),g=o(e.connectorWidth,1),h=d.plotWidth,i=d.plotHeight,k,j,l=o(e.softConnector,!0),m=e.distance,n=a.center,q=n[2]/2,r=n[1],s=m>0,u,w,v,x=[[],[]],y,A,D,E,C,H=[0,0,0,0],M=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){R.prototype.drawDataLabels.apply(a);
p(b,function(a){if(a.dataLabel&&a.visible)x[a.half].push(a),a.dataLabel._pos=null});for(E=2;E--;){var I=[],N=[],J=x[E],L=J.length,K;if(L){a.sortByAngle(J,E-0.5);for(C=b=0;!b&&J[C];)b=J[C]&&J[C].dataLabel&&(J[C].dataLabel.getBBox().height||21),C++;if(m>0){w=F(r+q+m,d.plotHeight);for(C=t(0,r-q-m);C<=w;C+=b)I.push(C);w=I.length;if(L>w){c=[].concat(J);c.sort(M);for(C=L;C--;)c[C].rank=C;for(C=L;C--;)J[C].rank>=w&&J.splice(C,1);L=J.length}for(C=0;C<L;C++){c=J[C];v=c.labelPos;c=9999;var P,O;for(O=0;O<w;O++)P=
Q(I[O]-v[1]),P<c&&(c=P,K=O);if(K<C&&I[C]!==null)K=C;else for(w<L-C+K&&I[C]!==null&&(K=w-L+C);I[K]===null;)K++;N.push({i:K,y:I[K]});I[K]=null}N.sort(M)}for(C=0;C<L;C++){c=J[C];v=c.labelPos;u=c.dataLabel;D=c.visible===!1?"hidden":"inherit";c=v[1];if(m>0){if(w=N.pop(),K=w.i,A=w.y,c>A&&I[K+1]!==null||c<A&&I[K-1]!==null)A=F(t(0,c),d.plotHeight)}else A=c;y=e.justify?n[0]+(E?-1:1)*(q+m):a.getX(A===r-q-m||A===r+q+m?c:A,E);u._attr={visibility:D,align:v[6]};u._pos={x:y+e.x+({left:f,right:-f}[v[6]]||0),y:A+
e.y-10};u.connX=y;u.connY=A;if(this.options.size===null)w=u.width,y-w<f?H[3]=t(B(w-y+f),H[3]):y+w>h-f&&(H[1]=t(B(y+w-h+f),H[1])),A-b/2<0?H[0]=t(B(-A+b/2),H[0]):A+b/2>i&&(H[2]=t(B(A+b/2-i),H[2]))}}}if(Ga(H)===0||this.verifyDataLabelOverflow(H))this.placeDataLabels(),s&&g&&p(this.points,function(b){k=b.connector;v=b.labelPos;if((u=b.dataLabel)&&u._pos&&b.visible)D=u._attr.visibility,y=u.connX,A=u.connY,j=l?["M",y+(v[6]==="left"?5:-5),A,"C",y,A,2*v[2]-v[4],2*v[3]-v[5],v[2],v[3],"L",v[4],v[5]]:["M",y+
(v[6]==="left"?5:-5),A,"L",v[2],v[3],"L",v[4],v[5]],k?(k.animate({d:j}),k.attr("visibility",D)):b.connector=k=a.chart.renderer.path(j).attr({"stroke-width":g,stroke:e.connectorColor||b.color||"#606060",visibility:D}).add(a.dataLabelsGroup);else if(k)b.connector=k.destroy()})}},L.pie.prototype.placeDataLabels=function(){p(this.points,function(a){var b=a.dataLabel;if(b&&a.visible)(a=b._pos)?(b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999})})},L.pie.prototype.alignDataLabel=
Aa,L.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||80,f=e,g;d[0]!==null?f=t(b[2]-t(a[1],a[3]),e):(f=t(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2);d[1]!==null?f=t(F(f,b[2]-t(a[0],a[2])),e):(f=t(F(f,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2);f<b[2]?(b[2]=f,b[3]=Math.min(/%$/.test(c.innerSize||0)?f*parseFloat(c.innerSize||0)/100:parseFloat(c.innerSize||0),f),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):g=!0;return g};if(L.column)L.column.prototype.alignDataLabel=
function(a,b,c,d,e){var f=this.chart.inverted,g=a.series,h=a.dlBox||a.shapeArgs,i=o(a.below,a.plotY>o(this.translatedThreshold,g.yAxis.len)),k=o(c.inside,!!this.options.stacking);if(h){d=E(h);if(d.y<0)d.height+=d.y,d.y=0;h=d.y+d.height-g.yAxis.len;h>0&&(d.height-=h);f&&(d={x:g.yAxis.len-d.y-d.height,y:g.xAxis.len-d.x-d.width,width:d.height,height:d.width});if(!k)f?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0)}c.align=o(c.align,!f||k?"center":i?"right":"left");c.verticalAlign=o(c.verticalAlign,
f||k?"middle":i?"top":"bottom");R.prototype.alignDataLabel.call(this,a,b,c,d,e)};(function(a){var b=a.Chart,c=a.each,d=a.pick,e=a.addEvent;b.prototype.callbacks.push(function(a){function b(){var e=[];c(a.series,function(a){var b=a.options.dataLabels,f=a.dataLabelCollections||["dataLabel"];(b.enabled||a._hasPointLabels)&&!b.allowOverlap&&a.visible&&c(f,function(b){c(a.points,function(a){if(a[b])a[b].labelrank=d(a.labelrank,a.shapeArgs&&a.shapeArgs.height),e.push(a[b])})})});a.hideOverlappingLabels(e)}
b();e(a,"redraw",b)});b.prototype.hideOverlappingLabels=function(a){var b=a.length,d,e,k,j,l,m,n,q,o;for(e=0;e<b;e++)if(d=a[e])d.oldOpacity=d.opacity,d.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(e=0;e<b;e++){k=a[e];for(d=e+1;d<b;++d)if(j=a[d],k&&j&&k.placed&&j.placed&&k.newOpacity!==0&&j.newOpacity!==0&&(l=k.alignAttr,m=j.alignAttr,n=k.parentGroup,q=j.parentGroup,o=2*(k.box?0:k.padding),l=!(m.x+q.translateX>l.x+n.translateX+(k.width-o)||m.x+q.translateX+(j.width-
o)<l.x+n.translateX||m.y+q.translateY>l.y+n.translateY+(k.height-o)||m.y+q.translateY+(j.height-o)<l.y+n.translateY)))(k.labelrank<j.labelrank?k:j).newOpacity=0}c(a,function(a){var b,c;if(a){c=a.newOpacity;if(a.oldOpacity!==c&&a.placed)c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b);a.isOld=!0}})}})(x);ga=x.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(a){for(var c=
a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(d!==y&&d!==b.hoverPoint)d.onMouseOver(a)};p(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)p(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),db))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:
a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,k=a.tracker,j=b.cursor,l=j&&{cursor:j},m=function(){if(f.hoverSeries!==a)a.onMouseOver()},n="rgba(192,192,192,"+(fa?1.0E-4:0.002)+")";if(e&&!c)for(j=e+1;j--;)d[j]==="M"&&d.splice(j+1,0,d[j+1]-i,d[j+2],"L"),(j&&d[j]==="M"||j===e)&&d.splice(j,0,"L",d[j-2]+i,d[j-1]);k?k.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:n,fill:c?n:"none","stroke-width":b.lineWidth+
(c?0:2*i),zIndex:2}).add(a.group),p([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);if(db)a.on("touchstart",m)}))}};if(L.column)wa.prototype.drawTracker=ga.drawTrackerPoint;if(L.pie)L.pie.prototype.drawTracker=ga.drawTrackerPoint;if(L.scatter)oa.prototype.drawTracker=ga.drawTrackerPoint;u(ob.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");
b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):I(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=ba("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);N(a.checkbox,"click",function(b){I(a.series||a,"checkboxClick",
{checked:b.target.checked,item:a},function(){a.select()})})}});U.legend.itemStyle.cursor="pointer";u(gb.prototype,{showResetZoom:function(){var a=this,b=U.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;I(a,"selection",{resetSelection:!0},
function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?p(this.axes,function(a){b=a.zoom()}):p(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&Z(e))this.resetZoomButton=e.destroy();b&&this.redraw(o(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,
e;d&&p(d,function(a){a.setState()});p(b==="xy"?[1,0]:[1],function(b){var b=c[b?"xAxis":"yAxis"][0],d=b.horiz,h=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",i=c[d],k=(b.pointRange||0)/2,j=b.getExtremes(),l=b.toValue(i-h,!0)+k,k=b.toValue(i+b.len-h,!0)-k,i=i>h;if(b.series.length&&(i||l>F(j.dataMin,j.min))&&(!i||k<t(j.dataMax,j.max)))b.setExtremes(l,k,!1,!1,{trigger:"pan"}),e=!0;c[d]=h});e&&c.redraw(!1);M(c.container,{cursor:"move"})}});u(Ja.prototype,{select:function(a,b){var c=this,d=c.series,
e=d.chart,a=o(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[sa(c,d.data)]=c.options;c.setState(a&&"select");b||p(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[sa(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a,b){var c=this.series,d=c.chart,e=d.tooltip,f=d.hoverPoint;if(d.hoverSeries!==c)c.onMouseOver();if(f&&f!==this)f.onMouseOut();
if(this.series&&(this.firePointEvent("mouseOver"),e&&(!e.shared||c.noSharedTooltip)&&e.refresh(this,a),this.setState("hover"),!b))d.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");if(!b||sa(this,b)===-1)this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=E(this.series.options.point,this.options).events,b;this.events=a;for(b in a)N(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=
V(this.plotX),d=this.plotY,e=this.series,f=e.options.states,g=ea[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],k=i&&i.enabled===!1,j=e.stateMarkerGraphic,l=this.marker||{},m=e.chart,n=e.halo,o,a=a||"";o=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(k||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&o.r,this.graphic.attr(E(o,g?{x:c-g,y:d-
g,width:2*g,height:2*g}:{})),j&&j.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,j&&j.currentSymbol!==l&&(j=j.destroy()),j)j[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=j=m.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(o).add(e.markerGroup),j.currentSymbol=l;if(j)j[a&&m.isInsidePlot(c,d,m.inverted)?"show":"hide"](),j.element.point=this}if((c=f[a]&&f[a].halo)&&c.size){if(!n)e.halo=n=m.renderer.path().add(m.seriesGroup);n.attr(u({fill:this.color||e.color,"fill-opacity":c.opacity,
zIndex:-1},c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else n&&n.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted,f=Math.floor(this.plotX);return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:f)-a,d.translateY+(e?b.xAxis.len-f:this.plotY)-a,a*2,a*2)}});u(R.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&I(this,"mouseOver");this.setState("hover");
a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&I(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();this.setState()},setState:function(a){var b=this.options,c=this.graph,d=b.states,e=b.lineWidth,b=0,a=a||"";if(this.state!==a&&(this.state=a,!(d[a]&&d[a].enabled===!1)&&(a&&(e=d[a].lineWidth||e+(d[a].lineWidthPlus||0)),c&&!c.dashstyle))){a={"stroke-width":e};
for(c.attr(a);this["zoneGraph"+b];)this["zoneGraph"+b].attr(a),b+=1}},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===y?!h:a)?"show":"hide";p(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&p(d.series,function(a){if(a.options.stacking&&
a.visible)a.isDirty=!0});p(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();I(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===y?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;I(this,a?"select":"unselect")},drawTracker:ga.drawTrackerGraph});u(x,{Color:ma,Point:Ja,Tick:Va,Renderer:cb,SVGElement:O,SVGRenderer:Da,arrayMin:La,arrayMax:Ga,charts:T,correctFloat:ca,dateFormat:Qa,error:aa,
    format: Ka, pathAnim: void 0, getOptions: function () { return U }, hasBidiBug: Pb, isTouchDevice: Lb, setOptions: function (a) { U = E(!0, U, a); Eb(); return U }, addEvent: N, removeEvent: X, createElement: ba, discardElement: Sa, css: M, each: p, map: Ca, merge: E, splat: ta, stableSort: hb, extendClass: qa, pInt: C, svg: fa, canvas: ka, vml: !fa && !ka, product: "Highcharts", version: "4.2.5"
}); return x
});

/**
* Multicolor Series v2.2.1-0(2016-06-24)
*
* (c) 2012-2016 Black Label
*
* License: Creative Commons Attribution (CC)
*/
(function () {
    'use strict'; (function (f) { "object" === typeof module && module.exports ? module.exports = f : f(Highcharts) })(function (f) {
        function v(b) { var a = []; l(b, function (b) { a = a.concat(b[0]) }); return a } var l = f.each, p = f.seriesTypes, w = f.pick, x = void 0 !== document.documentElement.ontouchstart, u = "rgba(192,192,192," + (f.hasSVG ? 1E-4 : .002) + ")"; f.Series.prototype.getSegmentPath = function (b) {
            var a = this, d = [], c = a.options.step; l(b, function (e, g) {
                var f = e.plotX, h = e.plotY; a.getPointSpline ? d.push.apply(d, a.getPointSpline(b, e, g)) : (d.push(g ?
                "L" : "M"), c && g && (g = b[g - 1], "right" === c ? d.push(g.plotX, h, "L") : "center" === c ? d.push((g.plotX + f) / 2, g.plotY, "L", (g.plotX + f) / 2, h, "L") : d.push(f, g.plotY, "L")), d.push(e.plotX, e.plotY))
            }); return d
        }; p.coloredline = f.extendClass(p.line); f.seriesTypes.coloredline.prototype.processData = function (b) {
            var a = this.xData, d = this.yData, c, e = this.xAxis, g = this.options; if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !b) return !1; for (e = a.length - 1; 0 <= e; e--) b = a[e] - a[e - 1], 0 < b && (void 0 === c || b < c) ? c = b : 0 > b && this.requireSorting &&
            window.console && console.log("Highcharts error #15: www.highcharts.com/errors/15"); this.cropped = void 0; this.cropStart = 0; this.processedXData = a; this.processedYData = d; null === g.pointRange && (this.pointRange = c || 1); this.closestPointRange = c; return !0
        }; f.seriesTypes.coloredline.prototype.drawTracker = function () {
            var b = this, a = b.options, d = a.trackByArea, c = [].concat(d ? b.areaPath : v(b.graphPath)), e = c.length, g = b.chart, f = g.pointer, h = g.renderer, n = g.options.tooltip.snap, q = b.tracker, m = a.cursor, y = m && { cursor: m }, m = b.singlePoints,
            k, t; t = function () { if (g.hoverSeries !== b) b.onMouseOver() }; if (e && !d) for (k = e + 1; k--;) "M" === c[k] && c.splice(k + 1, 0, c[k + 1] - n, c[k + 2], "L"), (k && "M" === c[k] || k === e) && c.splice(k, 0, "L", c[k - 2] + n, c[k - 1]); for (k = 0; k < m.length; k++) e = m[k], e.plotX && e.plotY && c.push("M", e.plotX - n, e.plotY, "L", e.plotX + n, e.plotY); q ? q.attr({ d: c }) : (b.tracker = h.path(c).attr({ "stroke-linejoin": "round", visibility: b.visible ? "visible" : "hidden", stroke: u, fill: d ? u : "none", "stroke-width": a.lineWidth + (d ? 0 : 2 * n), zIndex: 2 }).add(b.group), l([b.tracker, b.markerGroup],
            function (a) { a.addClass("highcharts-tracker").on("mouseover", t).on("mouseout", function (a) { f.onTrackerMouseOut(a) }).css(y); if (x) a.on("touchstart", t) }))
        }; f.seriesTypes.coloredline.prototype.setState = function (b) { var a = this.options, d = this.graph, c = a.states, a = a.lineWidth, e; b = b || ""; this.state !== b && (this.state = b, c[b] && !1 === c[b].enabled || (b && (a = c[b].lineWidth || a + 1), d && !d.dashstyle && (e = { "stroke-width": a }, l(d, function (a) { a.attr(e) })))) }; f.seriesTypes.coloredline.prototype.getSegments = function () {
            var b = 0, a = [],
            d, c = this.points, e = c.length; if (e) if (this.options.connectNulls) { for (d = e - 1; 0 <= d; --d) null === c[d].y && c.splice(d, 1); e = c.length; l(c, function (e, d) { 0 < d && c[d].segmentColor !== c[d - 1].segmentColor && (a.push({ points: c.slice(b, d + 1), color: c[d - 1].segmentColor }), b = d) }); b !== e - 1 && a.push({ points: c.slice(b, e), color: c[e - 1].segmentColor }); c.length && 0 === a.length && (a = [c]) } else {
                var f = null; l(c, function (d, h) {
                    var n = 0 < h && (null === d.y || null === c[h - 1].y || d.segmentColor !== c[h - 1].segmentColor && c[h].segmentColor !== f), q = c[h - 1] && c[h - 1].segmentColor &&
                    null !== c[h - 1].y ? !0 : !1; !f && d.segmetColor && (f = d.segmentColor); if (n) { var m = c.slice(b, h + 1); 0 < m.length && (l(m, function (a, b) { null === a.y && m.splice(b, 1) }), a.push({ points: m, color: q ? c[h - 1].segmentColor : f }), b = h) } else h === e - 1 && (n = h + 1, null === d.y && n--, m = c.slice(b, n), 0 < m.length && (l(m, function (a, b) { null === a.y && m.splice(b, 1) }), a.push({ points: m, color: q ? c[h - 1].segmentColor : f }), b = h)); d && (f = d.segmentColor)
                })
            } this.segments = a
        }; f.seriesTypes.coloredline.prototype.getGraphPath = function () {
            var b = this, a = [], d, c = []; l(b.segments,
            function (e) { d = b.getSegmentPath(e.points); 1 < e.points.length ? a.push([d, e.color]) : c.push(e.points) }); b.singlePoints = c; return b.graphPath = a
        }; f.seriesTypes.coloredline.prototype.drawGraph = function () {
            function b(b, c, k) { c = { stroke: c[1], "stroke-width": e, zIndex: 1 }; f ? c.dashstyle = f : p && (c["stroke-linecap"] = c["stroke-linejoin"] = "round"); b[1] && (c.stroke = b[1]); return a.chart.renderer.path(b[0]).attr(c).add(a.group).shadow(!k && d.shadow) } var a = this, d = a.options, c = [["graph", d.lineColor || a.color]], e = d.lineWidth, f = d.dashStyle,
            p = "square" !== d.linecap, h = a.getGraphPath(), n = h.length, q = 0; l(c, function (c, d) { var f = c[0], g = a[f], p; g ? l(h, function (e, g) { a[f][g] ? a[f][g].attr({ d: e[0], stroke: e[1] }) : a[f][g] = b(e, c, d) }) : e && h.length && (g = [], l(h, function (a, e) { g[e] = b(a, c, d) }), a[f] = g, a[f].destroy = function () { for (p in a[f]) { var b = a[f][p]; b && b.destroy && b.destroy() } }); for (var r = q = a.graph && a.graph.length || -1; r >= n; r--) a[f][r] && (a[f][r].destroy(), a[f].splice(r, 1)) })
        }; f.wrap(p.coloredline.prototype, "translate", function (b) {
            b.apply(this, [].slice.call(arguments,
            1)); this.getSegments && this.getSegments()
        }); p.coloredarea = f.extendClass(p.coloredline); f.seriesTypes.coloredarea.prototype.init = function (b, a) { a.threshold = a.threshold || null; f.Series.prototype.init.call(this, b, a) }; f.seriesTypes.coloredarea.prototype.closeSegment = function (b, a, d) { b.push("L", a[a.length - 1].plotX, d, "L", a[0].plotX, d) }; f.seriesTypes.coloredarea.prototype.drawGraph = function (b) {
            f.seriesTypes.coloredline.prototype.drawGraph.call(this, b); var a = this; l([["graph", this.options.lineColor || a.color]],
            function (b) { var c = b[0]; a[c] && l(a.graphPath, function (b, d) { a[c][d] && a[c][d].attr({ fill: b[1] }) }) })
        }; f.seriesTypes.coloredarea.prototype.getSegmentPath = function (b) { var a = f.Series.prototype.getSegmentPath.call(this, b), d = [].concat(a), c = this.options, e = a.length, g = this.yAxis.getThreshold(c.threshold); 3 === e && d.push("L", a[1], a[2]); if (c.stacking && !this.closedStacks) for (a = b.length - 1; 0 <= a; a--) e = w(b[a].yBottom, g), a < b.length - 1 && c.step && d.push(b[a + 1].plotX, e), d.push(b[a].plotX, e); else this.closeSegment(d, b, g); return d };
        f.seriesTypes.coloredarea.prototype.getGraphPath = function () { var b = this, a = [], d, c = []; this.areaPath = []; l(b.segments, function (e) { d = b.getSegmentPath(e.points); 1 < e.points.length ? a.push([d, e.color]) : c.push(e.points) }); b.singlePoints = c; return b.graphPath = a }; f.seriesTypes.coloredarea.prototype.drawLegendSymbol = f.LegendSymbolMixin.drawRectangle
    });
}).call(this)

//# sourceMappingURL=multicolor_series.min.js.map

/******************************************************************************
Name:    Highslide JS
Version: 4.1.8 (October 27 2009)
Config:  default +events +unobtrusive +imagemap +slideshow +positioning +transitions +viewport +thumbstrip +inline +ajax +iframe +flash
Author:  Torstein Honsi
Support: http://highslide.com/support

Licence:
Highslide JS is licensed under a Creative Commons Attribution-NonCommercial 2.5
License (http://creativecommons.org/licenses/by-nc/2.5/).

You are free:
	* to copy, distribute, display, and perform the work
	* to make derivative works

Under the following conditions:
	* Attribution. You must attribute the work in the manner  specified by  the
	  author or licensor.
	* Noncommercial. You may not use this work for commercial purposes.

* For  any  reuse  or  distribution, you  must make clear to others the license
  terms of this work.
* Any  of  these  conditions  can  be  waived  if  you  get permission from the 
  copyright holder.

Your fair use and other rights are in no way affected by the above.
******************************************************************************/
if (!hs) {
    var hs = {
        // Language strings
        lang: {
            cssDirection: 'ltr',
            loadingText: 'Loading...',
            loadingTitle: 'Click to cancel',
            focusTitle: 'Click to bring to front',
            fullExpandTitle: 'Expand to actual size (f)',
            creditsText: 'Powered by <i>Highslide JS</i>',
            creditsTitle: 'Go to the Highslide JS homepage',
            previousText: 'Previous',
            nextText: 'Next',
            moveText: 'Move',
            closeText: 'Close',
            closeTitle: 'Close (esc)',
            resizeTitle: 'Resize',
            playText: 'Play',
            playTitle: 'Play slideshow (spacebar)',
            pauseText: 'Pause',
            pauseTitle: 'Pause slideshow (spacebar)',
            previousTitle: 'Previous (arrow left)',
            nextTitle: 'Next (arrow right)',
            moveTitle: 'Move',
            fullExpandText: '1:1',
            number: 'Image %1 of %2',
            restoreTitle: 'Click to close image, click and drag to move. Use arrow keys for next and previous.'
        },
        // See http://highslide.com/ref for examples of settings  
        graphicsDir: 'highslide/graphics/',
        expandCursor: 'zoomin.cur', // null disables
        restoreCursor: 'zoomout.cur', // null disables
        expandDuration: 250, // milliseconds
        restoreDuration: 250,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
        zIndexCounter: 1001, // adjust to other absolutely positioned elements
        loadingOpacity: 0.75,
        allowMultipleInstances: true,
        numberOfImagesToPreload: 5,
        outlineWhileAnimating: 2, // 0 = never, 1 = always, 2 = HTML only 
        outlineStartOffset: 3, // ends at 10
        padToMinWidth: false, // pad the popup width to make room for wide caption
        fullExpandPosition: 'bottom right',
        fullExpandOpacity: 1,
        showCredits: true, // you can set this to false if you want
        creditsHref: 'http://highslide.com/',
        creditsTarget: '_self',
        enableKeyListener: true,
        openerTagNames: ['a', 'area'], // Add more to allow slideshow indexing
        transitions: [],
        transitionDuration: 250,
        dimmingOpacity: 0, // Lightbox style dimming background
        dimmingDuration: 50, // 0 for instant dimming

        allowWidthReduction: false,
        allowHeightReduction: true,
        preserveContent: true, // Preserve changes made to the content and position of HTML popups.
        objectLoadTime: 'before', // Load iframes 'before' or 'after' expansion.
        cacheAjax: true, // Cache ajax popups for instant display. Can be overridden for each popup.
        anchor: 'auto', // where the image expands from
        align: 'auto', // position in the client (overrides anchor)
        targetX: null, // the id of a target element
        targetY: null,
        dragByHeading: true,
        minWidth: 200,
        minHeight: 200,
        allowSizeReduction: true, // allow the image to reduce to fit client size. If false, this overrides minWidth and minHeight
        outlineType: 'drop-shadow', // set null to disable outlines
        skin: {
            controls:
                '<div class="highslide-controls"><ul>' +
                    '<li class="highslide-previous">' +
                        '<a href="#" title="{hs.lang.previousTitle}">' +
                        '<span>{hs.lang.previousText}</span></a>' +
                    '</li>' +
                    '<li class="highslide-play">' +
                        '<a href="#" title="{hs.lang.playTitle}">' +
                        '<span>{hs.lang.playText}</span></a>' +
                    '</li>' +
                    '<li class="highslide-pause">' +
                        '<a href="#" title="{hs.lang.pauseTitle}">' +
                        '<span>{hs.lang.pauseText}</span></a>' +
                    '</li>' +
                    '<li class="highslide-next">' +
                        '<a href="#" title="{hs.lang.nextTitle}">' +
                        '<span>{hs.lang.nextText}</span></a>' +
                    '</li>' +
                    '<li class="highslide-move">' +
                        '<a href="#" title="{hs.lang.moveTitle}">' +
                        '<span>{hs.lang.moveText}</span></a>' +
                    '</li>' +
                    '<li class="highslide-full-expand">' +
                        '<a href="#" title="{hs.lang.fullExpandTitle}">' +
                        '<span>{hs.lang.fullExpandText}</span></a>' +
                    '</li>' +
                    '<li class="highslide-close">' +
                        '<a href="#" title="{hs.lang.closeTitle}" >' +
                        '<span>{hs.lang.closeText}</span></a>' +
                    '</li>' +
                '</ul></div>'
            ,
            contentWrapper:
                '<div class="highslide-header"><ul>' +
                    '<li class="highslide-previous">' +
                        '<a href="#" title="{hs.lang.previousTitle}" onclick="return hs.previous(this)">' +
                        '<span>{hs.lang.previousText}</span></a>' +
                    '</li>' +
                    '<li class="highslide-next">' +
                        '<a href="#" title="{hs.lang.nextTitle}" onclick="return hs.next(this)">' +
                        '<span>{hs.lang.nextText}</span></a>' +
                    '</li>' +
                    '<li class="highslide-move">' +
                        '<a href="#" title="{hs.lang.moveTitle}" onclick="return false">' +
                        '<span>{hs.lang.moveText}</span></a>' +
                    '</li>' +
                    '<li class="highslide-close">' +
                        '<a href="#" title="{hs.lang.closeTitle}" onclick="return hs.close(this)">' +
                        '<span>{hs.lang.closeText}</span></a>' +
                    '</li>' +
                '</ul></div>' +
                '<div class="highslide-body"></div>' +
                '<div class="highslide-footer"><div>' +
                    '<span class="highslide-resize" title="{hs.lang.resizeTitle}"><span></span></span>' +
                '</div></div>'
        },
        // END OF YOUR SETTINGS


        // declare internal properties
        preloadTheseImages: [],
        continuePreloading: true,
        expanders: [],
        overrides: [
            'allowSizeReduction',
            'useBox',
            'anchor',
            'align',
            'targetX',
            'targetY',
            'outlineType',
            'outlineWhileAnimating',
            'captionId',
            'captionText',
            'captionEval',
            'captionOverlay',
            'headingId',
            'headingText',
            'headingEval',
            'headingOverlay',
            'creditsPosition',
            'dragByHeading',
            'autoplay',
            'numberPosition',
            'transitions',
            'dimmingOpacity',

            'width',
            'height',

            'contentId',
            'allowWidthReduction',
            'allowHeightReduction',
            'preserveContent',
            'maincontentId',
            'maincontentText',
            'maincontentEval',
            'objectType',
            'cacheAjax',
            'objectWidth',
            'objectHeight',
            'objectLoadTime',
            'swfOptions',
            'wrapperClassName',
            'minWidth',
            'minHeight',
            'maxWidth',
            'maxHeight',
            'pageOrigin',
            'slideshowGroup',
            'easing',
            'easingClose',
            'fadeInOut',
            'src'
        ],
        overlays: [],
        idCounter: 0,
        oPos: {
            x: ['leftpanel', 'left', 'center', 'right', 'rightpanel'],
            y: ['above', 'top', 'middle', 'bottom', 'below']
        },
        mouse: {},
        headingOverlay: {},
        captionOverlay: {},
        swfOptions: { flashvars: {}, params: {}, attributes: {} },
        timers: [],

        slideshows: [],

        pendingOutlines: {},
        sleeping: [],
        preloadTheseAjax: [],
        cacheBindings: [],
        cachedGets: {},
        clones: {},
        onReady: [],
        uaVersion: /Trident\/4\.0/.test(navigator.userAgent) ? 8 :
            parseFloat((navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1]),
        ie: (document.all && !window.opera),
        safari: /Safari/.test(navigator.userAgent),
        geckoMac: /Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),

        $: function (id) {
            if (id) return document.getElementById(id);
        },

        push: function (arr, val) {
            arr[arr.length] = val;
        },

        createElement: function (tag, attribs, styles, parent, nopad) {
            var el = document.createElement(tag);
            if (attribs) hs.extend(el, attribs);
            if (nopad) hs.setStyles(el, { padding: 0, border: 'none', margin: 0 });
            if (styles) hs.setStyles(el, styles);
            if (parent) parent.appendChild(el);
            return el;
        },

        extend: function (el, attribs) {
            for (var x in attribs) el[x] = attribs[x];
            return el;
        },

        setStyles: function (el, styles) {
            for (var x in styles) {
                if (hs.ie && x == 'opacity') {
                    if (styles[x] > 0.99) el.style.removeAttribute('filter');
                    else el.style.filter = 'alpha(opacity=' + (styles[x] * 100) + ')';
                }
                else el.style[x] = styles[x];
            }
        },
        animate: function (el, prop, opt) {
            var start,
                end,
                unit;
            if (typeof opt != 'object' || opt === null) {
                var args = arguments;
                opt = {
                    duration: args[2],
                    easing: args[3],
                    complete: args[4]
                };
            }
            if (typeof opt.duration != 'number') opt.duration = 250;
            opt.easing = Math[opt.easing] || Math.easeInQuad;
            opt.curAnim = hs.extend({}, prop);
            for (var name in prop) {
                var e = new hs.fx(el, opt, name);

                start = parseFloat(hs.css(el, name)) || 0;
                end = parseFloat(prop[name]);
                unit = name != 'opacity' ? 'px' : '';

                e.custom(start, end, unit);
            }
        },
        css: function (el, prop) {
            if (el.style[prop]) {
                return el.style[prop];
            } else if (document.defaultView) {
                return document.defaultView.getComputedStyle(el, null).getPropertyValue(prop);

            } else {
                if (prop == 'opacity') prop = 'filter';
                var val = el.currentStyle[prop.replace(/\-(\w)/g, function (a, b) { return b.toUpperCase(); })];
                if (prop == 'filter')
                    val = val.replace(/alpha\(opacity=([0-9]+)\)/,
                        function (a, b) { return b / 100 });
                return val === '' ? 1 : val;
            }
        },

        getPageSize: function () {
            var d = document, w = window, iebody = d.compatMode && d.compatMode != 'BackCompat'
                ? d.documentElement : d.body;

            var width = hs.ie ? iebody.clientWidth :
                    (d.documentElement.clientWidth || self.innerWidth),
                height = hs.ie ? iebody.clientHeight : self.innerHeight;

            hs.page = {
                width: width,
                height: height,
                scrollLeft: hs.ie ? iebody.scrollLeft : pageXOffset,
                scrollTop: hs.ie ? iebody.scrollTop : pageYOffset
            };
            return hs.page;
        },

        getPosition: function (el) {
            if (/area/i.test(el.tagName)) {
                var imgs = document.getElementsByTagName('img');
                for (var i = 0; i < imgs.length; i++) {
                    var u = imgs[i].useMap;
                    if (u && u.replace(/^.*?#/, '') == el.parentNode.name) {
                        el = imgs[i];
                        break;
                    }
                }
            }
            var p = { x: el.offsetLeft, y: el.offsetTop };
            while (el.offsetParent) {
                el = el.offsetParent;
                p.x += el.offsetLeft;
                p.y += el.offsetTop;
                if (el != document.body && el != document.documentElement) {
                    p.x -= el.scrollLeft;
                    p.y -= el.scrollTop;
                }
            }
            return p;
        },

        expand: function (a, params, custom, type) {
            if (!a) a = hs.createElement('a', null, { display: 'none' }, hs.container);
            if (typeof a.getParams == 'function') return params;
            if (type == 'html') {
                for (var i = 0; i < hs.sleeping.length; i++) {
                    if (hs.sleeping[i] && hs.sleeping[i].a == a) {
                        hs.sleeping[i].awake();
                        hs.sleeping[i] = null;
                        return false;
                    }
                }
                hs.hasHtmlExpanders = true;
            }
            try {
                new hs.Expander(a, params, custom, type);
                return false;
            } catch (e) { return true; }
        },

        htmlExpand: function (a, params, custom) {
            return hs.expand(a, params, custom, 'html');
        },

        getSelfRendered: function () {
            return hs.createElement('div', {
                className: 'highslide-html-content',
                innerHTML: hs.replaceLang(hs.skin.contentWrapper)
            });
        },
        getElementByClass: function (el, tagName, className) {
            var els = el.getElementsByTagName(tagName);
            for (var i = 0; i < els.length; i++) {
                if ((new RegExp(className)).test(els[i].className)) {
                    return els[i];
                }
            }
            return null;
        },
        replaceLang: function (s) {
            s = s.replace(/\s/g, ' ');
            var re = /{hs\.lang\.([^}]+)\}/g,
                matches = s.match(re),
                lang;
            if (matches) for (var i = 0; i < matches.length; i++) {
                lang = matches[i].replace(re, "$1");
                if (typeof hs.lang[lang] != 'undefined') s = s.replace(matches[i], hs.lang[lang]);
            }
            return s;
        },


        setClickEvents: function () {
            var els = document.getElementsByTagName('a');
            for (var i = 0; i < els.length; i++) {
                var type = hs.isUnobtrusiveAnchor(els[i]);
                if (type && !els[i].hsHasSetClick) {
                    (function () {
                        var t = type;
                        if (hs.fireEvent(hs, 'onSetClickEvent', { element: els[i], type: t })) {
                            els[i].onclick = (type == 'image') ? function () { return hs.expand(this) } :
                                function () { return hs.htmlExpand(this, { objectType: t }); };
                        }
                    })();
                    els[i].hsHasSetClick = true;
                }
            }
            hs.getAnchors();
        },
        isUnobtrusiveAnchor: function (el) {
            if (el.rel == 'highslide') return 'image';
            else if (el.rel == 'highslide-ajax') return 'ajax';
            else if (el.rel == 'highslide-iframe') return 'iframe';
            else if (el.rel == 'highslide-swf') return 'swf';
        },

        getCacheBinding: function (a) {
            for (var i = 0; i < hs.cacheBindings.length; i++) {
                if (hs.cacheBindings[i][0] == a) {
                    var c = hs.cacheBindings[i][1];
                    hs.cacheBindings[i][1] = c.cloneNode(1);
                    return c;
                }
            }
            return null;
        },

        preloadAjax: function (e) {
            var arr = hs.getAnchors();
            for (var i = 0; i < arr.htmls.length; i++) {
                var a = arr.htmls[i];
                if (hs.getParam(a, 'objectType') == 'ajax' && hs.getParam(a, 'cacheAjax'))
                    hs.push(hs.preloadTheseAjax, a);
            }

            hs.preloadAjaxElement(0);
        },

        preloadAjaxElement: function (i) {
            if (!hs.preloadTheseAjax[i]) return;
            var a = hs.preloadTheseAjax[i];
            var cache = hs.getNode(hs.getParam(a, 'contentId'));
            if (!cache) cache = hs.getSelfRendered();
            var ajax = new hs.Ajax(a, cache, 1);
            ajax.onError = function () { };
            ajax.onLoad = function () {
                hs.push(hs.cacheBindings, [a, cache]);
                hs.preloadAjaxElement(i + 1);
            };
            ajax.run();
        },

        focusTopmost: function () {
            var topZ = 0,
                topmostKey = -1,
                expanders = hs.expanders,
                exp,
                zIndex;
            for (var i = 0; i < expanders.length; i++) {
                exp = expanders[i];
                if (exp) {
                    zIndex = exp.wrapper.style.zIndex;
                    if (zIndex && zIndex > topZ) {
                        topZ = zIndex;
                        topmostKey = i;
                    }
                }
            }
            if (topmostKey == -1) hs.focusKey = -1;
            else expanders[topmostKey].focus();
        },

        getParam: function (a, param) {
            a.getParams = a.onclick;
            var p = a.getParams ? a.getParams() : null;
            a.getParams = null;

            return (p && typeof p[param] != 'undefined') ? p[param] :
                (typeof hs[param] != 'undefined' ? hs[param] : null);
        },

        getSrc: function (a) {
            var src = hs.getParam(a, 'src');
            if (src) return src;
            return a.href;
        },

        getNode: function (id) {
            var node = hs.$(id), clone = hs.clones[id], a = {};
            if (!node && !clone) return null;
            if (!clone) {
                clone = node.cloneNode(true);
                clone.id = '';
                hs.clones[id] = clone;
                return node;
            } else {
                return clone.cloneNode(true);
            }
        },

        discardElement: function (d) {
            if (d) hs.garbageBin.appendChild(d);
            hs.garbageBin.innerHTML = '';
        },
        dim: function (exp) {
            if (!hs.dimmer) {
                hs.dimmer = hs.createElement('div', {
                    className: 'highslide-dimming highslide-viewport-size',
                    owner: '',
                    onclick: function () {
                        if (hs.fireEvent(hs, 'onDimmerClick'))

                            hs.close();
                    }
                }, {
                    visibility: 'visible',
                    opacity: 0
                }, hs.container, true);
            }

            hs.dimmer.style.display = '';

            hs.dimmer.owner += '|' + exp.key;
            if (hs.geckoMac && hs.dimmingGeckoFix)
                hs.setStyles(hs.dimmer, {
                    background: 'url(' + hs.graphicsDir + 'geckodimmer.png)',
                    opacity: 1
                });
            else
                hs.animate(hs.dimmer, { opacity: exp.dimmingOpacity }, hs.dimmingDuration);
        },
        undim: function (key) {
            if (!hs.dimmer) return;
            if (typeof key != 'undefined') hs.dimmer.owner = hs.dimmer.owner.replace('|' + key, '');

            if (
                (typeof key != 'undefined' && hs.dimmer.owner != '')
                || (hs.upcoming && hs.getParam(hs.upcoming, 'dimmingOpacity'))
            ) return;

            if (hs.geckoMac && hs.dimmingGeckoFix) hs.dimmer.style.display = 'none';
            else hs.animate(hs.dimmer, { opacity: 0 }, hs.dimmingDuration, null, function () {
                hs.dimmer.style.display = 'none';
            });
        },
        transit: function (adj, exp) {
            var last = exp || hs.getExpander();
            exp = last;
            if (hs.upcoming) return false;
            else hs.last = last;
            hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
            try {
                hs.upcoming = adj;
                adj.onclick();
            } catch (e) {
                hs.last = hs.upcoming = null;
            }
            try {
                if (!adj || exp.transitions[1] != 'crossfade')
                    exp.close();
            } catch (e) { }
            return false;
        },

        previousOrNext: function (el, op) {
            var exp = hs.getExpander(el);
            if (exp) return hs.transit(exp.getAdjacentAnchor(op), exp);
            else return false;
        },

        previous: function (el) {
            return hs.previousOrNext(el, -1);
        },

        next: function (el) {
            return hs.previousOrNext(el, 1);
        },

        keyHandler: function (e) {
            if (!e) e = window.event;
            if (!e.target) e.target = e.srcElement; // ie
            if (typeof e.target.form != 'undefined') return true; // form element has focus
            if (!hs.fireEvent(hs, 'onKeyDown', e)) return true;
            var exp = hs.getExpander();

            var op = null;
            switch (e.keyCode) {
                case 70: // f
                    if (exp) exp.doFullExpand();
                    return true;
                case 32: // Space
                    op = 2;
                    break;
                case 34: // Page Down
                case 39: // Arrow right
                case 40: // Arrow down
                    op = 1;
                    break;
                case 8:  // Backspace
                case 33: // Page Up
                case 37: // Arrow left
                case 38: // Arrow up
                    op = -1;
                    break;
                case 27: // Escape
                case 13: // Enter
                    op = 0;
            }
            if (op !== null) {
                hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
                if (!hs.enableKeyListener) return true;

                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                if (exp) {
                    if (op == 0) {
                        exp.close();
                    } else if (op == 2) {
                        if (exp.slideshow) exp.slideshow.hitSpace();
                    } else {
                        if (exp.slideshow) exp.slideshow.pause();
                        hs.previousOrNext(exp.key, op);
                    }
                    return false;
                }
            }
            return true;
        },


        registerOverlay: function (overlay) {
            hs.push(hs.overlays, hs.extend(overlay, { hsId: 'hsId' + hs.idCounter++ }));
        },


        addSlideshow: function (options) {
            var sg = options.slideshowGroup;
            if (typeof sg == 'object') {
                for (var i = 0; i < sg.length; i++) {
                    var o = {};
                    for (var x in options) o[x] = options[x];
                    o.slideshowGroup = sg[i];
                    hs.push(hs.slideshows, o);
                }
            } else {
                hs.push(hs.slideshows, options);
            }
        },

        getWrapperKey: function (element, expOnly) {
            var el, re = /^highslide-wrapper-([0-9]+)$/;
            // 1. look in open expanders
            el = element;
            while (el.parentNode) {
                if (el.hsKey !== undefined) return el.hsKey;
                if (el.id && re.test(el.id)) return el.id.replace(re, "$1");
                el = el.parentNode;
            }
            // 2. look in thumbnail
            if (!expOnly) {
                el = element;
                while (el.parentNode) {
                    if (el.tagName && hs.isHsAnchor(el)) {
                        for (var key = 0; key < hs.expanders.length; key++) {
                            var exp = hs.expanders[key];
                            if (exp && exp.a == el) return key;
                        }
                    }
                    el = el.parentNode;
                }
            }
            return null;
        },

        getExpander: function (el, expOnly) {
            if (typeof el == 'undefined') return hs.expanders[hs.focusKey] || null;
            if (typeof el == 'number') return hs.expanders[el] || null;
            if (typeof el == 'string') el = hs.$(el);
            return hs.expanders[hs.getWrapperKey(el, expOnly)] || null;
        },

        isHsAnchor: function (a) {
            return (a.onclick && a.onclick.toString().replace(/\s/g, ' ').match(/hs.(htmlE|e)xpand/));
        },

        reOrder: function () {
            for (var i = 0; i < hs.expanders.length; i++)
                if (hs.expanders[i] && hs.expanders[i].isExpanded) hs.focusTopmost();
        },
        fireEvent: function (obj, evt, args) {
            return obj && obj[evt] ? (obj[evt](obj, args) !== false) : true;
        },

        mouseClickHandler: function (e) {
            if (!e) e = window.event;
            if (e.button > 1) return true;
            if (!e.target) e.target = e.srcElement;

            var el = e.target;
            while (el.parentNode
                && !(/highslide-(image|move|html|resize)/.test(el.className))) {
                el = el.parentNode;
            }
            var exp = hs.getExpander(el);
            if (exp && (exp.isClosing || !exp.isExpanded)) return true;

            if (exp && e.type == 'mousedown') {
                if (e.target.form) return true;
                var match = el.className.match(/highslide-(image|move|resize)/);
                if (match) {
                    hs.dragArgs = {
                        exp: exp,
                        type: match[1],
                        left: exp.x.pos,
                        width: exp.x.size,
                        top: exp.y.pos,
                        height: exp.y.size,
                        clickX: e.clientX,
                        clickY: e.clientY
                    };


                    hs.addEventListener(document, 'mousemove', hs.dragHandler);
                    if (e.preventDefault) e.preventDefault(); // FF

                    if (/highslide-(image|html)-blur/.test(exp.content.className)) {
                        exp.focus();
                        hs.hasFocused = true;
                    }
                    return false;
                }
                else if (/highslide-html/.test(el.className) && hs.focusKey != exp.key) {
                    exp.focus();
                    exp.doShowHide('hidden');
                }
            } else if (e.type == 'mouseup') {

                hs.removeEventListener(document, 'mousemove', hs.dragHandler);

                if (hs.dragArgs) {
                    if (hs.styleRestoreCursor && hs.dragArgs.type == 'image')
                        hs.dragArgs.exp.content.style.cursor = hs.styleRestoreCursor;
                    var hasDragged = hs.dragArgs.hasDragged;

                    if (!hasDragged && !hs.hasFocused && !/(move|resize)/.test(hs.dragArgs.type)) {
                        if (hs.fireEvent(exp, 'onImageClick'))
                            exp.close();
                    }
                    else if (hasDragged || (!hasDragged && hs.hasHtmlExpanders)) {
                        hs.dragArgs.exp.doShowHide('hidden');
                    }

                    if (hs.dragArgs.exp.releaseMask)
                        hs.dragArgs.exp.releaseMask.style.display = 'none';

                    if (hasDragged) hs.fireEvent(hs.dragArgs.exp, 'onDrop', hs.dragArgs);
                    hs.hasFocused = false;
                    hs.dragArgs = null;

                } else if (/highslide-image-blur/.test(el.className)) {
                    el.style.cursor = hs.styleRestoreCursor;
                }
            }
            return false;
        },

        dragHandler: function (e) {
            if (!hs.dragArgs) return true;
            if (!e) e = window.event;
            var a = hs.dragArgs, exp = a.exp;
            if (exp.iframe) {
                if (!exp.releaseMask) exp.releaseMask = hs.createElement('div', null,
                    {
                        position: 'absolute', width: exp.x.size + 'px', height: exp.y.size + 'px',
                        left: exp.x.cb + 'px', top: exp.y.cb + 'px', zIndex: 4, background: (hs.ie ? 'white' : 'none'),
                        opacity: 0.01
                    },
                    exp.wrapper, true);
                if (exp.releaseMask.style.display == 'none')
                    exp.releaseMask.style.display = '';
            }

            a.dX = e.clientX - a.clickX;
            a.dY = e.clientY - a.clickY;

            var distance = Math.sqrt(Math.pow(a.dX, 2) + Math.pow(a.dY, 2));
            if (!a.hasDragged) a.hasDragged = (a.type != 'image' && distance > 0)
                || (distance > (hs.dragSensitivity || 5));

            if (a.hasDragged && e.clientX > 5 && e.clientY > 5) {
                if (!hs.fireEvent(exp, 'onDrag', a)) return false;

                if (a.type == 'resize') exp.resize(a);
                else {
                    exp.moveTo(a.left + a.dX, a.top + a.dY);
                    if (a.type == 'image') exp.content.style.cursor = 'move';
                }
            }
            return false;
        },

        wrapperMouseHandler: function (e) {
            try {
                if (!e) e = window.event;
                var over = /mouseover/i.test(e.type);
                if (!e.target) e.target = e.srcElement; // ie
                if (hs.ie) e.relatedTarget =
                    over ? e.fromElement : e.toElement; // ie
                var exp = hs.getExpander(e.target);
                if (!exp.isExpanded) return;
                if (!exp || !e.relatedTarget || hs.getExpander(e.relatedTarget, true) == exp
                    || hs.dragArgs) return;
                hs.fireEvent(exp, over ? 'onMouseOver' : 'onMouseOut', e);
                for (var i = 0; i < exp.overlays.length; i++) (function () {
                    var o = hs.$('hsId' + exp.overlays[i]);
                    if (o && o.hideOnMouseOut) {
                        if (over) hs.setStyles(o, { visibility: 'visible', display: '' });
                        hs.animate(o, { opacity: over ? o.opacity : 0 }, o.dur);
                    }
                })();
            } catch (e) { }
        },
        addEventListener: function (el, event, func) {
            if (el == document && event == 'ready') {
                hs.push(hs.onReady, func);
            }
            try {
                el.addEventListener(event, func, false);
            } catch (e) {
                try {
                    el.detachEvent('on' + event, func);
                    el.attachEvent('on' + event, func);
                } catch (e) {
                    el['on' + event] = func;
                }
            }
        },

        removeEventListener: function (el, event, func) {
            try {
                el.removeEventListener(event, func, false);
            } catch (e) {
                try {
                    el.detachEvent('on' + event, func);
                } catch (e) {
                    el['on' + event] = null;
                }
            }
        },

        preloadFullImage: function (i) {
            if (hs.continuePreloading && hs.preloadTheseImages[i] && hs.preloadTheseImages[i] != 'undefined') {
                var img = document.createElement('img');
                img.onload = function () {
                    img = null;
                    hs.preloadFullImage(i + 1);
                };
                img.src = hs.preloadTheseImages[i];
            }
        },
        preloadImages: function (number) {
            if (number && typeof number != 'object') hs.numberOfImagesToPreload = number;

            var arr = hs.getAnchors();
            for (var i = 0; i < arr.images.length && i < hs.numberOfImagesToPreload; i++) {
                hs.push(hs.preloadTheseImages, hs.getSrc(arr.images[i]));
            }

            // preload outlines
            if (hs.outlineType) new hs.Outline(hs.outlineType, function () { hs.preloadFullImage(0) });
            else

                hs.preloadFullImage(0);

            // preload cursor
            if (hs.restoreCursor) var cur = hs.createElement('img', { src: hs.graphicsDir + hs.restoreCursor });
        },


        init: function () {
            if (!hs.container) {

                hs.getPageSize();
                hs.ieLt7 = hs.ie && hs.uaVersion < 7;
                hs.ie6SSL = hs.ieLt7 && location.protocol == 'https:';
                for (var x in hs.langDefaults) {
                    if (typeof hs[x] != 'undefined') hs.lang[x] = hs[x];
                    else if (typeof hs.lang[x] == 'undefined' && typeof hs.langDefaults[x] != 'undefined')
                        hs.lang[x] = hs.langDefaults[x];
                }

                hs.container = hs.createElement('div', {
                    className: 'highslide-container'
                }, {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    zIndex: hs.zIndexCounter,
                    direction: 'ltr'
                },
                    document.body,
                    true
                );
                hs.loading = hs.createElement('a', {
                    className: 'highslide-loading',
                    title: hs.lang.loadingTitle,
                    innerHTML: hs.lang.loadingText,
                    href: 'javascript:;'
                }, {
                    position: 'absolute',
                    top: '-9999px',
                    opacity: hs.loadingOpacity,
                    zIndex: 1
                }, hs.container
                );
                hs.garbageBin = hs.createElement('div', null, { display: 'none' }, hs.container);
                hs.viewport = hs.createElement('div', {
                    className: 'highslide-viewport highslide-viewport-size'
                }, {
                    visibility: (hs.safari && hs.uaVersion < 525) ? 'visible' : 'hidden'
                }, hs.container, 1
                );
                hs.clearing = hs.createElement('div', null,
                    { clear: 'both', paddingTop: '1px' }, null, true);

                // http://www.robertpenner.com/easing/ 
                Math.linearTween = function (t, b, c, d) {
                    return c * t / d + b;
                };
                Math.easeInQuad = function (t, b, c, d) {
                    return c * (t /= d) * t + b;
                };
                Math.easeOutQuad = function (t, b, c, d) {
                    return -c * (t /= d) * (t - 2) + b;
                };

                hs.hideSelects = hs.ieLt7;
                hs.hideIframes = ((window.opera && hs.uaVersion < 9) || navigator.vendor == 'KDE'
                    || (hs.ie && hs.uaVersion < 5.5));
                hs.fireEvent(this, 'onActivate');
            }
        },
        ready: function () {
            if (hs.isReady) return;
            hs.isReady = true;
            for (var i = 0; i < hs.onReady.length; i++) hs.onReady[i]();
        },

        updateAnchors: function () {
            var el, els, all = [], images = [], htmls = [], groups = {}, re;

            for (var i = 0; i < hs.openerTagNames.length; i++) {
                els = document.getElementsByTagName(hs.openerTagNames[i]);
                for (var j = 0; j < els.length; j++) {
                    el = els[j];
                    re = hs.isHsAnchor(el);
                    if (re) {
                        hs.push(all, el);
                        if (re[0] == 'hs.expand') hs.push(images, el);
                        else if (re[0] == 'hs.htmlExpand') hs.push(htmls, el);
                        var g = hs.getParam(el, 'slideshowGroup') || 'none';
                        if (!groups[g]) groups[g] = [];
                        hs.push(groups[g], el);
                    }
                }
            }
            hs.anchors = { all: all, groups: groups, images: images, htmls: htmls };
            return hs.anchors;

        },

        getAnchors: function () {
            return hs.anchors || hs.updateAnchors();
        },


        close: function (el) {
            var exp = hs.getExpander(el);
            if (exp) exp.close();
            return false;
        }
    }; // end hs object
    hs.fx = function (elem, options, prop) {
        this.options = options;
        this.elem = elem;
        this.prop = prop;

        if (!options.orig) options.orig = {};
    };
    hs.fx.prototype = {
        update: function () {
            (hs.fx.step[this.prop] || hs.fx.step._default)(this);

            if (this.options.step)
                this.options.step.call(this.elem, this.now, this);

        },
        custom: function (from, to, unit) {
            this.startTime = (new Date()).getTime();
            this.start = from;
            this.end = to;
            this.unit = unit;// || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;

            var self = this;
            function t(gotoEnd) {
                return self.step(gotoEnd);
            }

            t.elem = this.elem;

            if (t() && hs.timers.push(t) == 1) {
                hs.timerId = setInterval(function () {
                    var timers = hs.timers;

                    for (var i = 0; i < timers.length; i++)
                        if (!timers[i]())
                            timers.splice(i--, 1);

                    if (!timers.length) {
                        clearInterval(hs.timerId);
                    }
                }, 13);
            }
        },
        step: function (gotoEnd) {
            var t = (new Date()).getTime();
            if (gotoEnd || t >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();

                this.options.curAnim[this.prop] = true;

                var done = true;
                for (var i in this.options.curAnim)
                    if (this.options.curAnim[i] !== true)
                        done = false;

                if (done) {
                    if (this.options.complete) this.options.complete.call(this.elem);
                }
                return false;
            } else {
                var n = t - this.startTime;
                this.state = n / this.options.duration;
                this.pos = this.options.easing(n, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update();
            }
            return true;
        }

    };

    hs.extend(hs.fx, {
        step: {

            opacity: function (fx) {
                hs.setStyles(fx.elem, { opacity: fx.now });
            },

            _default: function (fx) {
                try {
                    if (fx.elem.style && fx.elem.style[fx.prop] != null)
                        fx.elem.style[fx.prop] = fx.now + fx.unit;
                    else
                        fx.elem[fx.prop] = fx.now;
                } catch (e) { }
            }
        }
    });

    hs.Outline = function (outlineType, onLoad) {
        this.onLoad = onLoad;
        this.outlineType = outlineType;
        var v = hs.uaVersion, tr;

        this.hasAlphaImageLoader = hs.ie && v >= 5.5 && v < 7;
        if (!outlineType) {
            if (onLoad) onLoad();
            return;
        }

        hs.init();
        this.table = hs.createElement(
            'table', {
                cellSpacing: 0
            }, {
                visibility: 'hidden',
                position: 'absolute',
                borderCollapse: 'collapse',
                width: 0
            },
            hs.container,
            true
        );
        var tbody = hs.createElement('tbody', null, null, this.table, 1);

        this.td = [];
        for (var i = 0; i <= 8; i++) {
            if (i % 3 == 0) tr = hs.createElement('tr', null, { height: 'auto' }, tbody, true);
            this.td[i] = hs.createElement('td', null, null, tr, true);
            var style = i != 4 ? { lineHeight: 0, fontSize: 0 } : { position: 'relative' };
            hs.setStyles(this.td[i], style);
        }
        this.td[4].className = outlineType + ' highslide-outline';

        this.preloadGraphic();
    };

    hs.Outline.prototype = {
        preloadGraphic: function () {
            var src = hs.graphicsDir + (hs.outlinesDir || "outlines/") + this.outlineType + ".png";

            var appendTo = hs.safari ? hs.container : null;
            this.graphic = hs.createElement('img', null, {
                position: 'absolute',
                top: '-9999px'
            }, appendTo, true); // for onload trigger

            var pThis = this;
            this.graphic.onload = function () { pThis.onGraphicLoad(); };

            this.graphic.src = src;
        },

        onGraphicLoad: function () {
            var o = this.offset = this.graphic.width / 4,
                pos = [[0, 0], [0, -4], [-2, 0], [0, -8], 0, [-2, -8], [0, -2], [0, -6], [-2, -2]],
                dim = { height: (2 * o) + 'px', width: (2 * o) + 'px' };
            for (var i = 0; i <= 8; i++) {
                if (pos[i]) {
                    if (this.hasAlphaImageLoader) {
                        var w = (i == 1 || i == 7) ? '100%' : this.graphic.width + 'px';
                        var div = hs.createElement('div', null, { width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }, this.td[i], true);
                        hs.createElement('div', null, {
                            filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='" + this.graphic.src + "')",
                            position: 'absolute',
                            width: w,
                            height: this.graphic.height + 'px',
                            left: (pos[i][0] * o) + 'px',
                            top: (pos[i][1] * o) + 'px'
                        },
                        div,
                        true);
                    } else {
                        hs.setStyles(this.td[i], { background: 'url(' + this.graphic.src + ') ' + (pos[i][0] * o) + 'px ' + (pos[i][1] * o) + 'px' });
                    }

                    if (window.opera && (i == 3 || i == 5))
                        hs.createElement('div', null, dim, this.td[i], true);

                    hs.setStyles(this.td[i], dim);
                }
            }
            this.graphic = null;
            if (hs.pendingOutlines[this.outlineType]) hs.pendingOutlines[this.outlineType].destroy();
            hs.pendingOutlines[this.outlineType] = this;
            if (this.onLoad) this.onLoad();
        },

        setPosition: function (pos, offset, vis, dur, easing) {
            var exp = this.exp,
                stl = exp.wrapper.style,
                offset = offset || 0,
                pos = pos || {
                    x: exp.x.pos + offset,
                    y: exp.y.pos + offset,
                    w: exp.x.get('wsize') - 2 * offset,
                    h: exp.y.get('wsize') - 2 * offset
                };
            if (vis) this.table.style.visibility = (pos.h >= 4 * this.offset)
                ? 'visible' : 'hidden';
            hs.setStyles(this.table, {
                left: (pos.x - this.offset) + 'px',
                top: (pos.y - this.offset) + 'px',
                width: (pos.w + 2 * this.offset) + 'px'
            });

            pos.w -= 2 * this.offset;
            pos.h -= 2 * this.offset;
            hs.setStyles(this.td[4], {
                width: pos.w >= 0 ? pos.w + 'px' : 0,
                height: pos.h >= 0 ? pos.h + 'px' : 0
            });
            if (this.hasAlphaImageLoader) this.td[3].style.height
                = this.td[5].style.height = this.td[4].style.height;

        },

        destroy: function (hide) {
            if (hide) this.table.style.visibility = 'hidden';
            else hs.discardElement(this.table);
        }
    };

    hs.Dimension = function (exp, dim) {
        this.exp = exp;
        this.dim = dim;
        this.ucwh = dim == 'x' ? 'Width' : 'Height';
        this.wh = this.ucwh.toLowerCase();
        this.uclt = dim == 'x' ? 'Left' : 'Top';
        this.lt = this.uclt.toLowerCase();
        this.ucrb = dim == 'x' ? 'Right' : 'Bottom';
        this.rb = this.ucrb.toLowerCase();
        this.p1 = this.p2 = 0;
    };
    hs.Dimension.prototype = {
        get: function (key) {
            switch (key) {
                case 'loadingPos':
                    return this.tpos + this.tb + (this.t - hs.loading['offset' + this.ucwh]) / 2;
                case 'loadingPosXfade':
                    return this.pos + this.cb + this.p1 + (this.size - hs.loading['offset' + this.ucwh]) / 2;
                case 'wsize':
                    return this.size + 2 * this.cb + this.p1 + this.p2;
                case 'fitsize':
                    return this.clientSize - this.marginMin - this.marginMax;
                case 'maxsize':
                    return this.get('fitsize') - 2 * this.cb - this.p1 - this.p2;
                case 'opos':
                    return this.pos - (this.exp.outline ? this.exp.outline.offset : 0);
                case 'osize':
                    return this.get('wsize') + (this.exp.outline ? 2 * this.exp.outline.offset : 0);
                case 'imgPad':
                    return this.imgSize ? Math.round((this.size - this.imgSize) / 2) : 0;

            }
        },
        calcBorders: function () {
            // correct for borders
            this.cb = (this.exp.content['offset' + this.ucwh] - this.t) / 2;

            this.marginMax = hs['margin' + this.ucrb];
        },
        calcThumb: function () {
            this.t = this.exp.el[this.wh] ? parseInt(this.exp.el[this.wh]) :
                this.exp.el['offset' + this.ucwh];
            this.tpos = this.exp.tpos[this.dim];
            this.tb = (this.exp.el['offset' + this.ucwh] - this.t) / 2;
            if (this.tpos == 0 || this.tpos == -1) {
                this.tpos = (hs.page[this.wh] / 2) + hs.page['scroll' + this.uclt];
            };
        },
        calcExpanded: function () {
            var exp = this.exp;
            this.justify = 'auto';

            // get alignment
            if (exp.align == 'center') this.justify = 'center';
            else if (new RegExp(this.lt).test(exp.anchor)) this.justify = null;
            else if (new RegExp(this.rb).test(exp.anchor)) this.justify = 'max';


            // size and position
            this.pos = this.tpos - this.cb + this.tb;

            if (this.maxHeight && this.dim == 'x')
                exp.maxWidth = Math.min(exp.maxWidth || this.full, exp.maxHeight * this.full / exp.y.full);

            this.size = Math.min(this.full, exp['max' + this.ucwh] || this.full);
            this.minSize = exp.allowSizeReduction ?
                Math.min(exp['min' + this.ucwh], this.full) : this.full;
            if (exp.isImage && exp.useBox) {
                this.size = exp[this.wh];
                this.imgSize = this.full;
            }
            if (this.dim == 'x' && hs.padToMinWidth) this.minSize = exp.minWidth;
            this.target = exp['target' + this.dim.toUpperCase()];
            this.marginMin = hs['margin' + this.uclt];
            this.scroll = hs.page['scroll' + this.uclt];
            this.clientSize = hs.page[this.wh];
        },
        setSize: function (i) {
            var exp = this.exp;
            if (exp.isImage && (exp.useBox || hs.padToMinWidth)) {
                this.imgSize = i;
                this.size = Math.max(this.size, this.imgSize);
                exp.content.style[this.lt] = this.get('imgPad') + 'px';
            } else
                this.size = i;

            exp.content.style[this.wh] = i + 'px';
            exp.wrapper.style[this.wh] = this.get('wsize') + 'px';
            if (exp.outline) exp.outline.setPosition();
            if (exp.releaseMask) exp.releaseMask.style[this.wh] = i + 'px';
            if (this.dim == 'y' && exp.iDoc && exp.body.style.height != 'auto') try {
                exp.iDoc.body.style.overflow = 'auto';
            } catch (e) { }
            if (exp.isHtml) {
                var d = exp.scrollerDiv;
                if (this.sizeDiff === undefined)
                    this.sizeDiff = exp.innerContent['offset' + this.ucwh] - d['offset' + this.ucwh];
                d.style[this.wh] = (this.size - this.sizeDiff) + 'px';

                if (this.dim == 'x') exp.mediumContent.style.width = 'auto';
                if (exp.body) exp.body.style[this.wh] = 'auto';
            }
            if (this.dim == 'x' && exp.overlayBox) exp.sizeOverlayBox(true);
            if (this.dim == 'x' && exp.slideshow && exp.isImage) {
                if (i == this.full) exp.slideshow.disable('full-expand');
                else exp.slideshow.enable('full-expand');
            }
        },
        setPos: function (i) {
            this.pos = i;
            this.exp.wrapper.style[this.lt] = i + 'px';

            if (this.exp.outline) this.exp.outline.setPosition();

        }
    };

    hs.Expander = function (a, params, custom, contentType) {
        if (document.readyState && hs.ie && !hs.isReady) {
            hs.addEventListener(document, 'ready', function () {
                new hs.Expander(a, params, custom, contentType);
            });
            return;
        }
        this.a = a;
        this.custom = custom;
        this.contentType = contentType || 'image';
        this.isHtml = (contentType == 'html');
        this.isImage = !this.isHtml;

        hs.continuePreloading = false;
        this.overlays = [];
        this.last = hs.last;
        hs.last = null;
        hs.init();
        var key = this.key = hs.expanders.length;
        // override inline parameters
        for (var i = 0; i < hs.overrides.length; i++) {
            var name = hs.overrides[i];
            this[name] = params && typeof params[name] != 'undefined' ?
                params[name] : hs[name];
        }
        if (!this.src) this.src = a.href;

        // get thumb
        var el = (params && params.thumbnailId) ? hs.$(params.thumbnailId) : a;
        el = this.thumb = el.getElementsByTagName('img')[0] || el;
        this.thumbsUserSetId = el.id || a.id;
        if (!hs.fireEvent(this, 'onInit')) return true;

        // check if already open
        for (var i = 0; i < hs.expanders.length; i++) {
            if (hs.expanders[i] && hs.expanders[i].a == a
                && !(this.last && this.transitions[1] == 'crossfade')) {
                hs.expanders[i].focus();
                return false;
            }
        }

        // cancel other
        if (!hs.allowSimultaneousLoading) for (var i = 0; i < hs.expanders.length; i++) {
            if (hs.expanders[i] && hs.expanders[i].thumb != el && !hs.expanders[i].onLoadStarted) {
                hs.expanders[i].cancelLoading();
            }
        }
        hs.expanders[key] = this;
        if (!hs.allowMultipleInstances && !hs.upcoming) {
            if (hs.expanders[key - 1]) hs.expanders[key - 1].close();
            if (typeof hs.focusKey != 'undefined' && hs.expanders[hs.focusKey])
                hs.expanders[hs.focusKey].close();
        }

        // initiate metrics
        this.el = el;
        this.tpos = this.pageOrigin || hs.getPosition(el);
        hs.getPageSize();
        var x = this.x = new hs.Dimension(this, 'x');
        x.calcThumb();
        var y = this.y = new hs.Dimension(this, 'y');
        y.calcThumb();
        if (/area/i.test(el.tagName)) this.getImageMapAreaCorrection(el);
        this.wrapper = hs.createElement(
            'div', {
                id: 'highslide-wrapper-' + this.key,
                className: 'highslide-wrapper ' + this.wrapperClassName
            }, {
                visibility: 'hidden',
                position: 'absolute',
                zIndex: hs.zIndexCounter += 2
            }, null, true);

        this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMouseHandler;
        if (this.contentType == 'image' && this.outlineWhileAnimating == 2)
            this.outlineWhileAnimating = 0;

        // get the outline
        if (!this.outlineType
            || (this.last && this.isImage && this.transitions[1] == 'crossfade')) {
            this[this.contentType + 'Create']();

        } else if (hs.pendingOutlines[this.outlineType]) {
            this.connectOutline();
            this[this.contentType + 'Create']();

        } else {
            this.showLoading();
            var exp = this;
            new hs.Outline(this.outlineType,
                function () {
                    exp.connectOutline();
                    exp[exp.contentType + 'Create']();
                }
            );
        }
        return true;
    };

    hs.Expander.prototype = {
        error: function (e) {
            if (hs.debug) alert('Line ' + e.lineNumber + ': ' + e.message);
            else window.location.href = this.src;
        },

        connectOutline: function () {
            var outline = this.outline = hs.pendingOutlines[this.outlineType];
            outline.exp = this;
            outline.table.style.zIndex = this.wrapper.style.zIndex - 1;
            hs.pendingOutlines[this.outlineType] = null;
        },

        showLoading: function () {
            if (this.onLoadStarted || this.loading) return;

            this.loading = hs.loading;
            var exp = this;
            this.loading.onclick = function () {
                exp.cancelLoading();
            };


            if (!hs.fireEvent(this, 'onShowLoading')) return;
            var exp = this,
                l = this.x.get('loadingPos') + 'px',
                t = this.y.get('loadingPos') + 'px';
            if (!tgt && this.last && this.transitions[1] == 'crossfade')
                var tgt = this.last;
            if (tgt) {
                l = tgt.x.get('loadingPosXfade') + 'px';
                t = tgt.y.get('loadingPosXfade') + 'px';
                this.loading.style.zIndex = hs.zIndexCounter++;
            }
            setTimeout(function () {
                if (exp.loading) hs.setStyles(exp.loading, { left: l, top: t, zIndex: hs.zIndexCounter++ })
            }
            , 100);
        },

        imageCreate: function () {
            var exp = this;

            var img = document.createElement('img');
            this.content = img;
            img.onload = function () {
                if (hs.expanders[exp.key]) exp.contentLoaded();
            };
            if (hs.blockRightClick) img.oncontextmenu = function () { return false; };
            img.className = 'highslide-image';
            hs.setStyles(img, {
                visibility: 'hidden',
                display: 'block',
                position: 'absolute',
                maxWidth: '9999px',
                zIndex: 3
            });
            img.title = hs.lang.restoreTitle;
            if (hs.safari) hs.container.appendChild(img);
            if (hs.ie && hs.flushImgSize) img.src = null;
            img.src = this.src;

            this.showLoading();
        },

        htmlCreate: function () {
            if (!hs.fireEvent(this, 'onBeforeGetContent')) return;

            this.content = hs.getCacheBinding(this.a);
            if (!this.content)
                this.content = hs.getNode(this.contentId);
            if (!this.content)
                this.content = hs.getSelfRendered();
            this.getInline(['maincontent']);
            if (this.maincontent) {
                var body = hs.getElementByClass(this.content, 'div', 'highslide-body');
                if (body) body.appendChild(this.maincontent);
                this.maincontent.style.display = 'block';
            }
            hs.fireEvent(this, 'onAfterGetContent');

            var innerContent = this.innerContent = this.content;

            if (/(swf|iframe)/.test(this.objectType)) this.setObjContainerSize(innerContent);

            // the content tree
            hs.container.appendChild(this.wrapper);
            hs.setStyles(this.wrapper, {
                position: 'static',
                padding: '0 ' + hs.marginRight + 'px 0 ' + hs.marginLeft + 'px'
            });
            this.content = hs.createElement(
                'div', {
                    className: 'highslide-html'
                }, {
                    position: 'relative',
                    zIndex: 3,
                    height: 0,
                    overflow: 'hidden'
                },
                this.wrapper
            );
            this.mediumContent = hs.createElement('div', null, null, this.content, 1);
            this.mediumContent.appendChild(innerContent);

            hs.setStyles(innerContent, {
                position: 'relative',
                display: 'block',
                direction: hs.lang.cssDirection || ''
            });
            if (this.width) innerContent.style.width = this.width + 'px';
            if (this.height) hs.setStyles(innerContent, {
                height: this.height + 'px',
                overflow: 'hidden'
            });
            if (innerContent.offsetWidth < this.minWidth)
                innerContent.style.width = this.minWidth + 'px';



            if (this.objectType == 'ajax' && !hs.getCacheBinding(this.a)) {
                this.showLoading();
                var exp = this;
                var ajax = new hs.Ajax(this.a, innerContent);
                ajax.src = this.src;
                ajax.onLoad = function () { if (hs.expanders[exp.key]) exp.contentLoaded(); };
                ajax.onError = function () { location.href = exp.src; };
                ajax.run();
            }
            else

                if (this.objectType == 'iframe' && this.objectLoadTime == 'before') {
                    this.writeExtendedContent();
                }
                else
                    this.contentLoaded();
        },

        contentLoaded: function () {
            try {
                if (!this.content) return;
                this.content.onload = null;
                if (this.onLoadStarted) return;
                else this.onLoadStarted = true;

                var x = this.x, y = this.y;

                if (this.loading) {
                    hs.setStyles(this.loading, { top: '-9999px' });
                    this.loading = null;
                    hs.fireEvent(this, 'onHideLoading');
                }
                if (this.isImage) {
                    x.full = this.content.width;
                    y.full = this.content.height;

                    hs.setStyles(this.content, {
                        width: x.t + 'px',
                        height: y.t + 'px'
                    });
                    this.wrapper.appendChild(this.content);
                    hs.container.appendChild(this.wrapper);
                } else if (this.htmlGetSize) this.htmlGetSize();

                x.calcBorders();
                y.calcBorders();

                hs.setStyles(this.wrapper, {
                    left: (x.tpos + x.tb - x.cb) + 'px',
                    top: (y.tpos + x.tb - y.cb) + 'px'
                });


                this.initSlideshow();
                this.getOverlays();

                var ratio = x.full / y.full;
                x.calcExpanded();
                this.justify(x);

                y.calcExpanded();
                this.justify(y);
                if (this.isHtml) this.htmlSizeOperations();
                if (this.overlayBox) this.sizeOverlayBox(0, 1);


                if (this.allowSizeReduction) {
                    if (this.isImage)
                        this.correctRatio(ratio);
                    else this.fitOverlayBox();
                    var ss = this.slideshow;
                    if (ss && this.last && ss.controls && ss.fixedControls) {
                        var pos = ss.overlayOptions.position || '', p;
                        for (var dim in hs.oPos) for (var i = 0; i < 5; i++) {
                            p = this[dim];
                            if (pos.match(hs.oPos[dim][i])) {
                                p.pos = this.last[dim].pos
                                    + (this.last[dim].p1 - p.p1)
                                    + (this.last[dim].size - p.size) * [0, 0, .5, 1, 1][i];
                                if (ss.fixedControls == 'fit') {
                                    if (p.pos + p.size + p.p1 + p.p2 > p.scroll + p.clientSize - p.marginMax)
                                        p.pos = p.scroll + p.clientSize - p.size - p.marginMin - p.marginMax - p.p1 - p.p2;
                                    if (p.pos < p.scroll + p.marginMin) p.pos = p.scroll + p.marginMin;
                                }
                            }
                        }
                    }
                    if (this.isImage && this.x.full > (this.x.imgSize || this.x.size)) {
                        this.createFullExpand();
                        if (this.overlays.length == 1) this.sizeOverlayBox();
                    }
                }
                this.show();

            } catch (e) {
                this.error(e);
            }
        },


        setObjContainerSize: function (parent, auto) {
            var c = hs.getElementByClass(parent, 'DIV', 'highslide-body');
            if (/(iframe|swf)/.test(this.objectType)) {
                if (this.objectWidth) c.style.width = this.objectWidth + 'px';
                if (this.objectHeight) c.style.height = this.objectHeight + 'px';
            }
        },

        writeExtendedContent: function () {
            if (this.hasExtendedContent) return;
            var exp = this;
            this.body = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
            if (this.objectType == 'iframe') {
                this.showLoading();
                var ruler = hs.clearing.cloneNode(1);
                this.body.appendChild(ruler);
                this.newWidth = this.innerContent.offsetWidth;
                if (!this.objectWidth) this.objectWidth = ruler.offsetWidth;
                var hDiff = this.innerContent.offsetHeight - this.body.offsetHeight,
                    h = this.objectHeight || hs.page.height - hDiff - hs.marginTop - hs.marginBottom,
                    onload = this.objectLoadTime == 'before' ?
                        ' onload="if (hs.expanders[' + this.key + ']) hs.expanders[' + this.key + '].contentLoaded()" ' : '';
                this.body.innerHTML += '<iframe name="hs' + (new Date()).getTime() + '" frameborder="0" key="' + this.key + '" '
                    + ' style="width:' + this.objectWidth + 'px; height:' + h + 'px" '
                    + onload + ' src="' + this.src + '" ></iframe>';
                this.ruler = this.body.getElementsByTagName('div')[0];
                this.iframe = this.body.getElementsByTagName('iframe')[0];

                if (this.objectLoadTime == 'after') this.correctIframeSize();

            }
            if (this.objectType == 'swf') {
                this.body.id = this.body.id || 'hs-flash-id-' + this.key;
                var a = this.swfOptions;
                if (!a.params) a.params = {};
                if (typeof a.params.wmode == 'undefined') a.params.wmode = 'transparent';
                if (swfobject) swfobject.embedSWF(this.src, this.body.id, this.objectWidth, this.objectHeight,
                    a.version || '7', a.expressInstallSwfurl, a.flashvars, a.params, a.attributes);
            }
            this.hasExtendedContent = true;
        },
        htmlGetSize: function () {
            if (this.iframe && !this.objectHeight) { // loadtime before
                this.iframe.style.height = this.body.style.height = this.getIframePageHeight() + 'px';
            }
            this.innerContent.appendChild(hs.clearing);
            if (!this.x.full) this.x.full = this.innerContent.offsetWidth;
            this.y.full = this.innerContent.offsetHeight;
            this.innerContent.removeChild(hs.clearing);
            if (hs.ie && this.newHeight > parseInt(this.innerContent.currentStyle.height)) { // ie css bug
                this.newHeight = parseInt(this.innerContent.currentStyle.height);
            }
            hs.setStyles(this.wrapper, { position: 'absolute', padding: '0' });
            hs.setStyles(this.content, { width: this.x.t + 'px', height: this.y.t + 'px' });

        },

        getIframePageHeight: function () {
            var h;
            try {
                var doc = this.iDoc = this.iframe.contentDocument || this.iframe.contentWindow.document;
                var clearing = doc.createElement('div');
                clearing.style.clear = 'both';
                doc.body.appendChild(clearing);
                h = clearing.offsetTop;
                if (hs.ie) h += parseInt(doc.body.currentStyle.marginTop)
                    + parseInt(doc.body.currentStyle.marginBottom) - 1;
            } catch (e) { // other domain
                h = 300;
            }
            return h;
        },
        correctIframeSize: function () {
            var wDiff = this.innerContent.offsetWidth - this.ruler.offsetWidth;
            hs.discardElement(this.ruler);
            if (wDiff < 0) wDiff = 0;

            var hDiff = this.innerContent.offsetHeight - this.iframe.offsetHeight;
            if (this.iDoc && !this.objectHeight && !this.height && this.y.size == this.y.full) try {
                this.iDoc.body.style.overflow = 'hidden';
            } catch (e) { }
            hs.setStyles(this.iframe, {
                width: Math.abs(this.x.size - wDiff) + 'px',
                height: Math.abs(this.y.size - hDiff) + 'px'
            });
            hs.setStyles(this.body, {
                width: this.iframe.style.width,
                height: this.iframe.style.height
            });

            this.scrollingContent = this.iframe;
            this.scrollerDiv = this.scrollingContent;

        },
        htmlSizeOperations: function () {

            this.setObjContainerSize(this.innerContent);


            if (this.objectType == 'swf' && this.objectLoadTime == 'before') this.writeExtendedContent();

            // handle minimum size
            if (this.x.size < this.x.full && !this.allowWidthReduction) this.x.size = this.x.full;
            if (this.y.size < this.y.full && !this.allowHeightReduction) this.y.size = this.y.full;
            this.scrollerDiv = this.innerContent;
            hs.setStyles(this.mediumContent, {
                position: 'relative',
                width: this.x.size + 'px'
            });
            hs.setStyles(this.innerContent, {
                border: 'none',
                width: 'auto',
                height: 'auto'
            });
            var node = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
            if (node && !/(iframe|swf)/.test(this.objectType)) {
                var cNode = node; // wrap to get true size
                node = hs.createElement(cNode.nodeName, null, { overflow: 'hidden' }, null, true);
                cNode.parentNode.insertBefore(node, cNode);
                node.appendChild(hs.clearing); // IE6
                node.appendChild(cNode);

                var wDiff = this.innerContent.offsetWidth - node.offsetWidth;
                var hDiff = this.innerContent.offsetHeight - node.offsetHeight;
                node.removeChild(hs.clearing);

                var kdeBugCorr = hs.safari || navigator.vendor == 'KDE' ? 1 : 0; // KDE repainting bug
                hs.setStyles(node, {
                    width: (this.x.size - wDiff - kdeBugCorr) + 'px',
                    height: (this.y.size - hDiff) + 'px',
                    overflow: 'auto',
                    position: 'relative'
                }
                );
                if (kdeBugCorr && cNode.offsetHeight > node.offsetHeight) {
                    node.style.width = (parseInt(node.style.width) + kdeBugCorr) + 'px';
                }
                this.scrollingContent = node;
                this.scrollerDiv = this.scrollingContent;
            }
            if (this.iframe && this.objectLoadTime == 'before') this.correctIframeSize();
            if (!this.scrollingContent && this.y.size < this.mediumContent.offsetHeight) this.scrollerDiv = this.content;

            if (this.scrollerDiv == this.content && !this.allowWidthReduction && !/(iframe|swf)/.test(this.objectType)) {
                this.x.size += 17; // room for scrollbars
            }
            if (this.scrollerDiv && this.scrollerDiv.offsetHeight > this.scrollerDiv.parentNode.offsetHeight) {
                setTimeout("try { hs.expanders[" + this.key + "].scrollerDiv.style.overflow = 'auto'; } catch(e) {}",
                     hs.expandDuration);
            }
        },

        getImageMapAreaCorrection: function (area) {
            var c = area.coords.split(',');
            for (var i = 0; i < c.length; i++) c[i] = parseInt(c[i]);

            if (area.shape.toLowerCase() == 'circle') {
                this.x.tpos += c[0] - c[2];
                this.y.tpos += c[1] - c[2];
                this.x.t = this.y.t = 2 * c[2];
            } else {
                var maxX, maxY, minX = maxX = c[0], minY = maxY = c[1];
                for (var i = 0; i < c.length; i++) {
                    if (i % 2 == 0) {
                        minX = Math.min(minX, c[i]);
                        maxX = Math.max(maxX, c[i]);
                    } else {
                        minY = Math.min(minY, c[i]);
                        maxY = Math.max(maxY, c[i]);
                    }
                }
                this.x.tpos += minX;
                this.x.t = maxX - minX;
                this.y.tpos += minY;
                this.y.t = maxY - minY;
            }
        },
        justify: function (p, moveOnly) {
            var tgtArr, tgt = p.target, dim = p == this.x ? 'x' : 'y';

            if (tgt && tgt.match(/ /)) {
                tgtArr = tgt.split(' ');
                tgt = tgtArr[0];
            }
            if (tgt && hs.$(tgt)) {
                p.pos = hs.getPosition(hs.$(tgt))[dim];
                if (tgtArr && tgtArr[1] && tgtArr[1].match(/^[-]?[0-9]+px$/))
                    p.pos += parseInt(tgtArr[1]);
                if (p.size < p.minSize) p.size = p.minSize;

            } else if (p.justify == 'auto' || p.justify == 'center') {

                var hasMovedMin = false;

                var allowReduce = p.exp.allowSizeReduction;
                if (p.justify == 'center')
                    p.pos = Math.round(p.scroll + (p.clientSize + p.marginMin - p.marginMax - p.get('wsize')) / 2);
                else
                    p.pos = Math.round(p.pos - ((p.get('wsize') - p.t) / 2));
                if (p.pos < p.scroll + p.marginMin) {
                    p.pos = p.scroll + p.marginMin;
                    hasMovedMin = true;
                }
                if (!moveOnly && p.size < p.minSize) {
                    p.size = p.minSize;
                    allowReduce = false;
                }
                if (p.pos + p.get('wsize') > p.scroll + p.clientSize - p.marginMax) {
                    if (!moveOnly && hasMovedMin && allowReduce) {
                        p.size = Math.min(p.size, p.get(dim == 'y' ? 'fitsize' : 'maxsize'));
                    } else if (p.get('wsize') < p.get('fitsize')) {
                        p.pos = p.scroll + p.clientSize - p.marginMax - p.get('wsize');
                    } else { // image larger than viewport
                        p.pos = p.scroll + p.marginMin;
                        if (!moveOnly && allowReduce) p.size = p.get(dim == 'y' ? 'fitsize' : 'maxsize');
                    }
                }

                if (!moveOnly && p.size < p.minSize) {
                    p.size = p.minSize;
                    allowReduce = false;
                }


            } else if (p.justify == 'max') {
                p.pos = Math.floor(p.pos - p.size + p.t);
            }


            if (p.pos < p.marginMin) {
                var tmpMin = p.pos;
                p.pos = p.marginMin;

                if (allowReduce && !moveOnly) p.size = p.size - (p.pos - tmpMin);

            }
        },

        correctRatio: function (ratio) {
            var x = this.x,
                y = this.y,
                changed = false,
                xSize = Math.min(x.full, x.size),
                ySize = Math.min(y.full, y.size),
                useBox = (this.useBox || hs.padToMinWidth);

            if (xSize / ySize > ratio) { // width greater
                xSize = ySize * ratio;
                if (xSize < x.minSize) { // below minWidth
                    xSize = x.minSize;
                    ySize = xSize / ratio;
                }
                changed = true;

            } else if (xSize / ySize < ratio) { // height greater
                ySize = xSize / ratio;
                changed = true;
            }

            if (hs.padToMinWidth && x.full < x.minSize) {
                x.imgSize = x.full;
                y.size = y.imgSize = y.full;
            } else if (this.useBox) {
                x.imgSize = xSize;
                y.imgSize = ySize;
            } else {
                x.size = xSize;
                y.size = ySize;
            }
            changed = this.fitOverlayBox(useBox ? null : ratio, changed);
            if (useBox && y.size < y.imgSize) {
                y.imgSize = y.size;
                x.imgSize = y.size * ratio;
            }
            if (changed || useBox) {
                x.pos = x.tpos - x.cb + x.tb;
                x.minSize = x.size;
                this.justify(x, true);

                y.pos = y.tpos - y.cb + y.tb;
                y.minSize = y.size;
                this.justify(y, true);
                if (this.overlayBox) this.sizeOverlayBox();
            }
        },
        fitOverlayBox: function (ratio, changed) {
            var x = this.x, y = this.y;
            if (this.overlayBox && (this.isImage || this.allowHeightReduction)) {
                while (y.size > this.minHeight && x.size > this.minWidth
                        && y.get('wsize') > y.get('fitsize')) {
                    y.size -= 10;
                    if (ratio) x.size = y.size * ratio;
                    this.sizeOverlayBox(0, 1);
                    changed = true;
                }
            }
            return changed;
        },

        reflow: function () {
            if (this.scrollerDiv) {
                var h = /iframe/i.test(this.scrollerDiv.tagName) ? (this.getIframePageHeight() + 1) + 'px' : 'auto';
                if (this.body) this.body.style.height = h;
                this.scrollerDiv.style.height = h;
                this.y.setSize(this.innerContent.offsetHeight);
            }
        },

        show: function () {
            var x = this.x, y = this.y;
            this.doShowHide('hidden');
            hs.fireEvent(this, 'onBeforeExpand');
            if (this.slideshow && this.slideshow.thumbstrip) this.slideshow.thumbstrip.selectThumb();

            // Apply size change
            this.changeSize(
                1, {
                    wrapper: {
                        width: x.get('wsize'),
                        height: y.get('wsize'),
                        left: x.pos,
                        top: y.pos
                    },
                    content: {
                        left: x.p1 + x.get('imgPad'),
                        top: y.p1 + y.get('imgPad'),
                        width: x.imgSize || x.size,
                        height: y.imgSize || y.size
                    }
                },
                hs.expandDuration
            );
        },

        changeSize: function (up, to, dur) {
            // transition
            var trans = this.transitions,
            other = up ? (this.last ? this.last.a : null) : hs.upcoming,
            t = (trans[1] && other
                    && hs.getParam(other, 'transitions')[1] == trans[1]) ?
                trans[1] : trans[0];

            if (this[t] && t != 'expand') {
                this[t](up, to);
                return;
            }

            if (this.outline && !this.outlineWhileAnimating) {
                if (up) this.outline.setPosition();
                else this.outline.destroy(
                        (this.isHtml && this.preserveContent));
            }


            if (!up) this.destroyOverlays();

            var exp = this,
                x = exp.x,
                y = exp.y,
                easing = this.easing;
            if (!up) easing = this.easingClose || easing;
            var after = up ?
                function () {

                    if (exp.outline) exp.outline.table.style.visibility = "visible";
                    setTimeout(function () {
                        exp.afterExpand();
                    }, 50);
                } :
                function () {
                    exp.afterClose();
                };
            if (up) hs.setStyles(this.wrapper, {
                width: x.t + 'px',
                height: y.t + 'px'
            });
            if (up && this.isHtml) {
                hs.setStyles(this.wrapper, {
                    left: (x.tpos - x.cb + x.tb) + 'px',
                    top: (y.tpos - y.cb + y.tb) + 'px'
                });
            }
            if (this.fadeInOut) {
                hs.setStyles(this.wrapper, { opacity: up ? 0 : 1 });
                hs.extend(to.wrapper, { opacity: up });
            }
            hs.animate(this.wrapper, to.wrapper, {
                duration: dur,
                easing: easing,
                step: function (val, args) {
                    if (exp.outline && exp.outlineWhileAnimating && args.prop == 'top') {
                        var fac = up ? args.pos : 1 - args.pos;
                        var pos = {
                            w: x.t + (x.get('wsize') - x.t) * fac,
                            h: y.t + (y.get('wsize') - y.t) * fac,
                            x: x.tpos + (x.pos - x.tpos) * fac,
                            y: y.tpos + (y.pos - y.tpos) * fac
                        };
                        exp.outline.setPosition(pos, 0, 1);
                    }
                    if (exp.isHtml) {
                        if (args.prop == 'left')
                            exp.mediumContent.style.left = (x.pos - val) + 'px';
                        if (args.prop == 'top')
                            exp.mediumContent.style.top = (y.pos - val) + 'px';
                    }
                }
            });
            hs.animate(this.content, to.content, dur, easing, after);
            if (up) {
                this.wrapper.style.visibility = 'visible';
                this.content.style.visibility = 'visible';
                if (this.isHtml) this.innerContent.style.visibility = 'visible';
            }
        },



        fade: function (up, to) {
            this.outlineWhileAnimating = false;
            var exp = this, t = up ? hs.expandDuration : 0;

            if (up) {
                hs.animate(this.wrapper, to.wrapper, 0);
                hs.setStyles(this.wrapper, { opacity: 0, visibility: 'visible' });
                hs.animate(this.content, to.content, 0);
                this.content.style.visibility = 'visible';

                hs.animate(this.wrapper, { opacity: 1 }, t, null,
                    function () { exp.afterExpand(); });
            }

            if (this.outline) {
                this.outline.table.style.zIndex = this.wrapper.style.zIndex;
                var dir = up || -1,
                    offset = this.outline.offset,
                    startOff = up ? 3 : offset,
                    endOff = up ? offset : 3;
                for (var i = startOff; dir * i <= dir * endOff; i += dir, t += 25) {
                    (function () {
                        var o = up ? endOff - i : startOff - i;
                        setTimeout(function () {
                            exp.outline.setPosition(0, o, 1);
                        }, t);
                    })();
                }
            }


            if (up) { }//setTimeout(function() { exp.afterExpand(); }, t+50);
            else {
                setTimeout(function () {
                    if (exp.outline) exp.outline.destroy(exp.preserveContent);

                    exp.destroyOverlays();

                    hs.animate(exp.wrapper, { opacity: 0 }, hs.restoreDuration, null, function () {
                        exp.afterClose();
                    });
                }, t);
            }
        },
        crossfade: function (up, to, from) {
            if (!up) return;
            var exp = this,
                last = this.last,
                x = this.x,
                y = this.y,
                lastX = last.x,
                lastY = last.y,
                wrapper = this.wrapper,
                content = this.content,
                overlayBox = this.overlayBox;
            hs.removeEventListener(document, 'mousemove', hs.dragHandler);

            hs.setStyles(content, {
                width: (x.imgSize || x.size) + 'px',
                height: (y.imgSize || y.size) + 'px'
            });
            if (overlayBox) overlayBox.style.overflow = 'visible';
            this.outline = last.outline;
            if (this.outline) this.outline.exp = exp;
            last.outline = null;
            var fadeBox = hs.createElement('div', {
                className: 'highslide-' + this.contentType
            }, {
                position: 'absolute',
                zIndex: 4,
                overflow: 'hidden',
                display: 'none'
            }
            );
            var names = { oldImg: last, newImg: this };
            for (var n in names) {
                this[n] = names[n].content.cloneNode(1);
                hs.setStyles(this[n], {
                    position: 'absolute',
                    border: 0,
                    visibility: 'visible'
                });
                fadeBox.appendChild(this[n]);
            }
            wrapper.appendChild(fadeBox);
            if (this.isHtml) hs.setStyles(this.mediumContent, {
                left: 0,
                top: 0
            });
            if (overlayBox) {
                overlayBox.className = '';
                wrapper.appendChild(overlayBox);
            }
            fadeBox.style.display = '';
            last.content.style.display = 'none';


            if (hs.safari) {
                var match = navigator.userAgent.match(/Safari\/([0-9]{3})/);
                if (match && parseInt(match[1]) < 525) this.wrapper.style.visibility = 'visible';
            }
            hs.animate(wrapper, {
                width: x.size
            }, {
                duration: hs.transitionDuration,
                step: function (val, args) {
                    var pos = args.pos,
                        invPos = 1 - pos;
                    var prop,
                        size = {},
                        props = ['pos', 'size', 'p1', 'p2'];
                    for (var n in props) {
                        prop = props[n];
                        size['x' + prop] = Math.round(invPos * lastX[prop] + pos * x[prop]);
                        size['y' + prop] = Math.round(invPos * lastY[prop] + pos * y[prop]);
                        size.ximgSize = Math.round(
                            invPos * (lastX.imgSize || lastX.size) + pos * (x.imgSize || x.size));
                        size.ximgPad = Math.round(invPos * lastX.get('imgPad') + pos * x.get('imgPad'));
                        size.yimgSize = Math.round(
                            invPos * (lastY.imgSize || lastY.size) + pos * (y.imgSize || y.size));
                        size.yimgPad = Math.round(invPos * lastY.get('imgPad') + pos * y.get('imgPad'));
                    }
                    if (exp.outline) exp.outline.setPosition({
                        x: size.xpos,
                        y: size.ypos,
                        w: size.xsize + size.xp1 + size.xp2 + 2 * x.cb,
                        h: size.ysize + size.yp1 + size.yp2 + 2 * y.cb
                    });
                    last.wrapper.style.clip = 'rect('
                        + (size.ypos - lastY.pos) + 'px, '
                        + (size.xsize + size.xp1 + size.xp2 + size.xpos + 2 * lastX.cb - lastX.pos) + 'px, '
                        + (size.ysize + size.yp1 + size.yp2 + size.ypos + 2 * lastY.cb - lastY.pos) + 'px, '
                        + (size.xpos - lastX.pos) + 'px)';

                    hs.setStyles(content, {
                        top: (size.yp1 + y.get('imgPad')) + 'px',
                        left: (size.xp1 + x.get('imgPad')) + 'px',
                        marginTop: (y.pos - size.ypos) + 'px',
                        marginLeft: (x.pos - size.xpos) + 'px'
                    });
                    hs.setStyles(wrapper, {
                        top: size.ypos + 'px',
                        left: size.xpos + 'px',
                        width: (size.xp1 + size.xp2 + size.xsize + 2 * x.cb) + 'px',
                        height: (size.yp1 + size.yp2 + size.ysize + 2 * y.cb) + 'px'
                    });
                    hs.setStyles(fadeBox, {
                        width: (size.ximgSize || size.xsize) + 'px',
                        height: (size.yimgSize || size.ysize) + 'px',
                        left: (size.xp1 + size.ximgPad) + 'px',
                        top: (size.yp1 + size.yimgPad) + 'px',
                        visibility: 'visible'
                    });

                    hs.setStyles(exp.oldImg, {
                        top: (lastY.pos - size.ypos + lastY.p1 - size.yp1 + lastY.get('imgPad') - size.yimgPad) + 'px',
                        left: (lastX.pos - size.xpos + lastX.p1 - size.xp1 + lastX.get('imgPad') - size.ximgPad) + 'px'
                    });

                    hs.setStyles(exp.newImg, {
                        opacity: pos,
                        top: (y.pos - size.ypos + y.p1 - size.yp1 + y.get('imgPad') - size.yimgPad) + 'px',
                        left: (x.pos - size.xpos + x.p1 - size.xp1 + x.get('imgPad') - size.ximgPad) + 'px'
                    });
                    if (overlayBox) hs.setStyles(overlayBox, {
                        width: size.xsize + 'px',
                        height: size.ysize + 'px',
                        left: (size.xp1 + x.cb) + 'px',
                        top: (size.yp1 + y.cb) + 'px'
                    });
                },
                complete: function () {
                    wrapper.style.visibility = content.style.visibility = 'visible';
                    content.style.display = 'block';
                    hs.discardElement(fadeBox);
                    exp.afterExpand();
                    last.afterClose();
                    exp.last = null;
                }

            });
        },
        reuseOverlay: function (o, el) {
            if (!this.last) return false;
            for (var i = 0; i < this.last.overlays.length; i++) {
                var oDiv = hs.$('hsId' + this.last.overlays[i]);
                if (oDiv && oDiv.hsId == o.hsId) {
                    this.genOverlayBox();
                    oDiv.reuse = this.key;
                    hs.push(this.overlays, this.last.overlays[i]);
                    return true;
                }
            }
            return false;
        },


        afterExpand: function () {
            this.isExpanded = true;

            this.a.className += ' highslide-active-anchor';
            this.focus();

            if (this.isHtml && this.objectLoadTime == 'after') this.writeExtendedContent();
            if (this.iframe) {
                try {
                    var exp = this,
                        doc = this.iframe.contentDocument || this.iframe.contentWindow.document;
                    hs.addEventListener(doc, 'mousedown', function () {
                        if (hs.focusKey != exp.key) exp.focus();
                    });
                } catch (e) { }
                if (hs.ie && typeof this.isClosing != 'boolean') // first open 
                    this.iframe.style.width = (this.objectWidth - 1) + 'px'; // hasLayout
            }
            if (this.dimmingOpacity) hs.dim(this);
            if (hs.upcoming && hs.upcoming == this.a) hs.upcoming = null;
            this.prepareNextOutline();
            var p = hs.page, mX = hs.mouse.x + p.scrollLeft, mY = hs.mouse.y + p.scrollTop;
            this.mouseIsOver = this.x.pos < mX && mX < this.x.pos + this.x.get('wsize')
                && this.y.pos < mY && mY < this.y.pos + this.y.get('wsize');
            if (this.overlayBox) this.showOverlays();
            hs.fireEvent(this, 'onAfterExpand');

        },


        prepareNextOutline: function () {
            var key = this.key;
            var outlineType = this.outlineType;
            new hs.Outline(outlineType,
                function () { try { hs.expanders[key].preloadNext(); } catch (e) { } });
        },


        preloadNext: function () {
            var next = this.getAdjacentAnchor(1);
            if (next && next.onclick.toString().match(/hs\.expand/))
                var img = hs.createElement('img', { src: hs.getSrc(next) });
        },


        getAdjacentAnchor: function (op) {
            var current = this.getAnchorIndex(), as = hs.anchors.groups[this.slideshowGroup || 'none'];

            /*< ? if ($cfg->slideshow) : ?>s*/
            if (!as[current + op] && this.slideshow && this.slideshow.repeat) {
                if (op == 1) return as[0];
                else if (op == -1) return as[as.length - 1];
            }
            /*< ? endif ?>s*/
            return as[current + op] || null;
        },

        getAnchorIndex: function () {
            var arr = hs.getAnchors().groups[this.slideshowGroup || 'none'];
            if (arr) for (var i = 0; i < arr.length; i++) {
                if (arr[i] == this.a) return i;
            }
            return null;
        },


        getNumber: function () {
            if (this[this.numberPosition]) {
                var arr = hs.anchors.groups[this.slideshowGroup || 'none'];
                if (arr) {
                    var s = hs.lang.number.replace('%1', this.getAnchorIndex() + 1).replace('%2', arr.length);
                    this[this.numberPosition].innerHTML =
                        '<div class="highslide-number">' + s + '</div>' + this[this.numberPosition].innerHTML;
                }
            }
        },
        initSlideshow: function () {
            if (!this.last) {
                for (var i = 0; i < hs.slideshows.length; i++) {
                    var ss = hs.slideshows[i], sg = ss.slideshowGroup;
                    if (typeof sg == 'undefined' || sg === null || sg === this.slideshowGroup)
                        this.slideshow = new hs.Slideshow(this.key, ss);
                }
            } else {
                this.slideshow = this.last.slideshow;
            }
            var ss = this.slideshow;
            if (!ss) return;
            var key = ss.expKey = this.key;

            ss.checkFirstAndLast();
            ss.disable('full-expand');
            if (ss.controls) {
                this.createOverlay(hs.extend(ss.overlayOptions || {}, {
                    overlayId: ss.controls,
                    hsId: 'controls',
                    zIndex: 5
                }));
            }
            if (ss.thumbstrip) ss.thumbstrip.add(this);
            if (!this.last && this.autoplay) ss.play(true);
            if (ss.autoplay) {
                ss.autoplay = setTimeout(function () {
                    hs.next(key);
                }, (ss.interval || 500));
            }
        },

        cancelLoading: function () {
            hs.discardElement(this.wrapper);
            hs.expanders[this.key] = null;
            if (hs.upcoming == this.a) hs.upcoming = null;
            hs.undim(this.key);
            if (this.loading) hs.loading.style.left = '-9999px';
            hs.fireEvent(this, 'onHideLoading');
        },

        writeCredits: function () {
            if (this.credits) return;
            this.credits = hs.createElement('a', {
                href: hs.creditsHref,
                target: hs.creditsTarget,
                className: 'highslide-credits',
                innerHTML: hs.lang.creditsText,
                title: hs.lang.creditsTitle
            });
            this.createOverlay({
                overlayId: this.credits,
                position: this.creditsPosition || 'top left',
                hsId: 'credits'
            });
        },

        getInline: function (types, addOverlay) {
            for (var i = 0; i < types.length; i++) {
                var type = types[i], s = null;
                if (type == 'caption' && !hs.fireEvent(this, 'onBeforeGetCaption')) return;
                else if (type == 'heading' && !hs.fireEvent(this, 'onBeforeGetHeading')) return;
                if (!this[type + 'Id'] && this.thumbsUserSetId)
                    this[type + 'Id'] = type + '-for-' + this.thumbsUserSetId;
                if (this[type + 'Id']) this[type] = hs.getNode(this[type + 'Id']);
                if (!this[type] && !this[type + 'Text'] && this[type + 'Eval']) try {
                    s = eval(this[type + 'Eval']);
                } catch (e) { }
                if (!this[type] && this[type + 'Text']) {
                    s = this[type + 'Text'];
                }
                if (!this[type] && !s) {
                    this[type] = hs.getNode(this.a['_' + type + 'Id']);
                    if (!this[type]) {
                        var next = this.a.nextSibling;
                        while (next && !hs.isHsAnchor(next)) {
                            if ((new RegExp('highslide-' + type)).test(next.className || null)) {
                                if (!next.id) this.a['_' + type + 'Id'] = next.id = 'hsId' + hs.idCounter++;
                                this[type] = hs.getNode(next.id);
                                break;
                            }
                            next = next.nextSibling;
                        }
                    }
                }
                if (!this[type] && !s && this.numberPosition == type) s = '\n';

                if (!this[type] && s) this[type] = hs.createElement('div',
                        { className: 'highslide-' + type, innerHTML: s });

                if (addOverlay && this[type]) {
                    var o = { position: (type == 'heading') ? 'above' : 'below' };
                    for (var x in this[type + 'Overlay']) o[x] = this[type + 'Overlay'][x];
                    o.overlayId = this[type];
                    this.createOverlay(o);
                }
            }
        },


        // on end move and resize
        doShowHide: function (visibility) {
            if (hs.hideSelects) this.showHideElements('SELECT', visibility);
            if (hs.hideIframes) this.showHideElements('IFRAME', visibility);
            if (hs.geckoMac) this.showHideElements('*', visibility);
        },
        showHideElements: function (tagName, visibility) {
            var els = document.getElementsByTagName(tagName);
            var prop = tagName == '*' ? 'overflow' : 'visibility';
            for (var i = 0; i < els.length; i++) {
                if (prop == 'visibility' || (document.defaultView.getComputedStyle(
                        els[i], "").getPropertyValue('overflow') == 'auto'
                        || els[i].getAttribute('hidden-by') != null)) {
                    var hiddenBy = els[i].getAttribute('hidden-by');
                    if (visibility == 'visible' && hiddenBy) {
                        hiddenBy = hiddenBy.replace('[' + this.key + ']', '');
                        els[i].setAttribute('hidden-by', hiddenBy);
                        if (!hiddenBy) els[i].style[prop] = els[i].origProp;
                    } else if (visibility == 'hidden') { // hide if behind
                        var elPos = hs.getPosition(els[i]);
                        elPos.w = els[i].offsetWidth;
                        elPos.h = els[i].offsetHeight;
                        if (!this.dimmingOpacity) { // hide all if dimming

                            var clearsX = (elPos.x + elPos.w < this.x.get('opos')
                                || elPos.x > this.x.get('opos') + this.x.get('osize'));
                            var clearsY = (elPos.y + elPos.h < this.y.get('opos')
                                || elPos.y > this.y.get('opos') + this.y.get('osize'));
                        }
                        var wrapperKey = hs.getWrapperKey(els[i]);
                        if (!clearsX && !clearsY && wrapperKey != this.key) { // element falls behind image
                            if (!hiddenBy) {
                                els[i].setAttribute('hidden-by', '[' + this.key + ']');
                                els[i].origProp = els[i].style[prop];
                                els[i].style[prop] = 'hidden';

                            } else if (hiddenBy.indexOf('[' + this.key + ']') == -1) {
                                els[i].setAttribute('hidden-by', hiddenBy + '[' + this.key + ']');
                            }
                        } else if ((hiddenBy == '[' + this.key + ']' || hs.focusKey == wrapperKey)
                                && wrapperKey != this.key) { // on move
                            els[i].setAttribute('hidden-by', '');
                            els[i].style[prop] = els[i].origProp || '';
                        } else if (hiddenBy && hiddenBy.indexOf('[' + this.key + ']') > -1) {
                            els[i].setAttribute('hidden-by', hiddenBy.replace('[' + this.key + ']', ''));
                        }

                    }
                }
            }
        },

        focus: function () {
            this.wrapper.style.zIndex = hs.zIndexCounter += 2;
            // blur others
            for (var i = 0; i < hs.expanders.length; i++) {
                if (hs.expanders[i] && i == hs.focusKey) {
                    var blurExp = hs.expanders[i];
                    blurExp.content.className += ' highslide-' + blurExp.contentType + '-blur';
                    if (blurExp.isImage) {
                        blurExp.content.style.cursor = hs.ie ? 'hand' : 'pointer';
                        blurExp.content.title = hs.lang.focusTitle;
                    }
                    hs.fireEvent(blurExp, 'onBlur');
                }
            }

            // focus this
            if (this.outline) this.outline.table.style.zIndex
                = this.wrapper.style.zIndex - 1;
            this.content.className = 'highslide-' + this.contentType;
            if (this.isImage) {
                this.content.title = hs.lang.restoreTitle;

                if (hs.restoreCursor) {
                    hs.styleRestoreCursor = window.opera ? 'pointer' : 'url(' + hs.graphicsDir + hs.restoreCursor + '), pointer';
                    if (hs.ie && hs.uaVersion < 6) hs.styleRestoreCursor = 'hand';
                    this.content.style.cursor = hs.styleRestoreCursor;
                }
            }
            hs.focusKey = this.key;
            hs.addEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
            hs.fireEvent(this, 'onFocus');
        },
        moveTo: function (x, y) {
            this.x.setPos(x);
            this.y.setPos(y);
        },
        resize: function (e) {
            var w, h, r = e.width / e.height;
            w = Math.max(e.width + e.dX, Math.min(this.minWidth, this.x.full));
            if (this.isImage && Math.abs(w - this.x.full) < 12) w = this.x.full;
            h = this.isHtml ? e.height + e.dY : w / r;
            if (h < Math.min(this.minHeight, this.y.full)) {
                h = Math.min(this.minHeight, this.y.full);
                if (this.isImage) w = h * r;
            }
            this.resizeTo(w, h);
        },
        resizeTo: function (w, h) {
            this.y.setSize(h);
            this.x.setSize(w);
            this.wrapper.style.height = this.y.get('wsize') + 'px';
        },

        close: function () {
            if (this.isClosing || !this.isExpanded) return;
            if (this.transitions[1] == 'crossfade' && hs.upcoming) {
                hs.getExpander(hs.upcoming).cancelLoading();
                hs.upcoming = null;
            }
            if (!hs.fireEvent(this, 'onBeforeClose')) return;
            this.isClosing = true;
            if (this.slideshow && !hs.upcoming) this.slideshow.pause();

            hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);

            try {
                if (this.isHtml) this.htmlPrepareClose();
                this.content.style.cursor = 'default';
                this.changeSize(
                    0, {
                        wrapper: {
                            width: this.x.t,
                            height: this.y.t,
                            left: this.x.tpos - this.x.cb + this.x.tb,
                            top: this.y.tpos - this.y.cb + this.y.tb
                        },
                        content: {
                            left: 0,
                            top: 0,
                            width: this.x.t,
                            height: this.y.t
                        }
                    }, hs.restoreDuration
                );
            } catch (e) { this.afterClose(); }
        },

        htmlPrepareClose: function () {
            if (hs.geckoMac) { // bad redraws
                if (!hs.mask) hs.mask = hs.createElement('div', null,
                    { position: 'absolute' }, hs.container);
                hs.setStyles(hs.mask, {
                    width: this.x.size + 'px', height: this.y.size + 'px',
                    left: this.x.pos + 'px', top: this.y.pos + 'px', display: 'block'
                });
            }
            if (this.objectType == 'swf') try { hs.$(this.body.id).StopPlay(); } catch (e) { }

            if (this.objectLoadTime == 'after' && !this.preserveContent) this.destroyObject();
            if (this.scrollerDiv && this.scrollerDiv != this.scrollingContent)
                this.scrollerDiv.style.overflow = 'hidden';
        },

        destroyObject: function () {
            if (hs.ie && this.iframe)
                try { this.iframe.contentWindow.document.body.innerHTML = ''; } catch (e) { }
            if (this.objectType == 'swf') swfobject.removeSWF(this.body.id);
            this.body.innerHTML = '';
        },

        sleep: function () {
            if (this.outline) this.outline.table.style.display = 'none';
            this.releaseMask = null;
            this.wrapper.style.display = 'none';
            hs.push(hs.sleeping, this);
        },

        awake: function () {
            try {

                hs.expanders[this.key] = this;

                if (!hs.allowMultipleInstances && hs.focusKey != this.key) {
                    try { hs.expanders[hs.focusKey].close(); } catch (e) { }
                }

                var z = hs.zIndexCounter++, stl = { display: '', zIndex: z };
                hs.setStyles(this.wrapper, stl);
                this.isClosing = false;

                var o = this.outline || 0;
                if (o) {
                    if (!this.outlineWhileAnimating) stl.visibility = 'hidden';
                    hs.setStyles(o.table, stl);
                }
                if (this.slideshow) {
                    this.initSlideshow();
                }

                this.show();
            } catch (e) { }


        },

        createOverlay: function (o) {
            var el = o.overlayId,
                relToVP = (o.relativeTo == 'viewport' && !/panel$/.test(o.position));
            if (typeof el == 'string') el = hs.getNode(el);
            if (o.html) el = hs.createElement('div', { innerHTML: o.html });
            if (!el || typeof el == 'string') return;
            if (!hs.fireEvent(this, 'onCreateOverlay', { overlay: el })) return;
            el.style.display = 'block';
            o.hsId = o.hsId || o.overlayId;
            if (this.transitions[1] == 'crossfade' && this.reuseOverlay(o, el)) return;
            this.genOverlayBox();
            var width = o.width && /^[0-9]+(px|%)$/.test(o.width) ? o.width : 'auto';
            if (/^(left|right)panel$/.test(o.position) && !/^[0-9]+px$/.test(o.width)) width = '200px';
            var overlay = hs.createElement(
                'div', {
                    id: 'hsId' + hs.idCounter++,
                    hsId: o.hsId
                }, {
                    position: 'absolute',
                    visibility: 'hidden',
                    width: width,
                    direction: hs.lang.cssDirection || '',
                    opacity: 0
                },
                relToVP ? hs.viewport : this.overlayBox,
                true
            );
            if (relToVP) overlay.hsKey = this.key;

            overlay.appendChild(el);
            hs.extend(overlay, {
                opacity: 1,
                offsetX: 0,
                offsetY: 0,
                dur: (o.fade === 0 || o.fade === false || (o.fade == 2 && hs.ie)) ? 0 : 250
            });
            hs.extend(overlay, o);


            if (this.gotOverlays) {
                this.positionOverlay(overlay);
                if (!overlay.hideOnMouseOut || this.mouseIsOver)
                    hs.animate(overlay, { opacity: overlay.opacity }, overlay.dur);
            }
            hs.push(this.overlays, hs.idCounter - 1);
        },
        positionOverlay: function (overlay) {
            var p = overlay.position || 'middle center',
                relToVP = (overlay.relativeTo == 'viewport'),
                offX = overlay.offsetX,
                offY = overlay.offsetY;
            if (relToVP) {
                hs.viewport.style.display = 'block';
                overlay.hsKey = this.key;
                if (overlay.offsetWidth > overlay.parentNode.offsetWidth)
                    overlay.style.width = '100%';
            } else
                if (overlay.parentNode != this.overlayBox) this.overlayBox.appendChild(overlay);
            if (/left$/.test(p)) overlay.style.left = offX + 'px';

            if (/center$/.test(p)) hs.setStyles(overlay, {
                left: '50%',
                marginLeft: (offX - Math.round(overlay.offsetWidth / 2)) + 'px'
            });

            if (/right$/.test(p)) overlay.style.right = -offX + 'px';

            if (/^leftpanel$/.test(p)) {
                hs.setStyles(overlay, {
                    right: '100%',
                    marginRight: this.x.cb + 'px',
                    top: -this.y.cb + 'px',
                    bottom: -this.y.cb + 'px',
                    overflow: 'auto'
                });
                this.x.p1 = overlay.offsetWidth;

            } else if (/^rightpanel$/.test(p)) {
                hs.setStyles(overlay, {
                    left: '100%',
                    marginLeft: this.x.cb + 'px',
                    top: -this.y.cb + 'px',
                    bottom: -this.y.cb + 'px',
                    overflow: 'auto'
                });
                this.x.p2 = overlay.offsetWidth;
            }
            var parOff = overlay.parentNode.offsetHeight;
            overlay.style.height = 'auto';
            if (relToVP && overlay.offsetHeight > parOff)
                overlay.style.height = hs.ieLt7 ? parOff + 'px' : '100%';

            if (/^top/.test(p)) overlay.style.top = offY + 'px';
            if (/^middle/.test(p)) hs.setStyles(overlay, {
                top: '50%',
                marginTop: (offY - Math.round(overlay.offsetHeight / 2)) + 'px'
            });
            if (/^bottom/.test(p)) overlay.style.bottom = -offY + 'px';
            if (/^above$/.test(p)) {
                hs.setStyles(overlay, {
                    left: (-this.x.p1 - this.x.cb) + 'px',
                    right: (-this.x.p2 - this.x.cb) + 'px',
                    bottom: '100%',
                    marginBottom: this.y.cb + 'px',
                    width: 'auto'
                });
                this.y.p1 = overlay.offsetHeight;

            } else if (/^below$/.test(p)) {
                hs.setStyles(overlay, {
                    position: 'relative',
                    left: (-this.x.p1 - this.x.cb) + 'px',
                    right: (-this.x.p2 - this.x.cb) + 'px',
                    top: '100%',
                    marginTop: this.y.cb + 'px',
                    width: 'auto'
                });
                this.y.p2 = overlay.offsetHeight;
                overlay.style.position = 'absolute';
            }
        },

        getOverlays: function () {
            this.getInline(['heading', 'caption'], true);
            this.getNumber();
            if (this.caption) hs.fireEvent(this, 'onAfterGetCaption');
            if (this.heading) hs.fireEvent(this, 'onAfterGetHeading');
            if (this.heading && this.dragByHeading) this.heading.className += ' highslide-move';
            if (hs.showCredits) this.writeCredits();
            for (var i = 0; i < hs.overlays.length; i++) {
                var o = hs.overlays[i], tId = o.thumbnailId, sg = o.slideshowGroup;
                if ((!tId && !sg) || (tId && tId == this.thumbsUserSetId)
                        || (sg && sg === this.slideshowGroup)) {
                    if (this.isImage || (this.isHtml && o.useOnHtml))
                        this.createOverlay(o);
                }
            }
            var os = [];
            for (var i = 0; i < this.overlays.length; i++) {
                var o = hs.$('hsId' + this.overlays[i]);
                if (/panel$/.test(o.position)) this.positionOverlay(o);
                else hs.push(os, o);
            }
            for (var i = 0; i < os.length; i++) this.positionOverlay(os[i]);
            this.gotOverlays = true;
        },
        genOverlayBox: function () {
            if (!this.overlayBox) this.overlayBox = hs.createElement(
                'div', {
                    className: this.wrapperClassName
                }, {
                    position: 'absolute',
                    width: (this.x.size || (this.useBox ? this.width : null)
                        || this.x.full) + 'px',
                    height: (this.y.size || this.y.full) + 'px',
                    visibility: 'hidden',
                    overflow: 'hidden',
                    zIndex: hs.ie ? 4 : 'auto'
                },
                hs.container,
                true
            );
        },
        sizeOverlayBox: function (doWrapper, doPanels) {
            var overlayBox = this.overlayBox,
                x = this.x,
                y = this.y;
            hs.setStyles(overlayBox, {
                width: x.size + 'px',
                height: y.size + 'px'
            });
            if (doWrapper || doPanels) {
                for (var i = 0; i < this.overlays.length; i++) {
                    var o = hs.$('hsId' + this.overlays[i]);
                    var ie6 = (hs.ieLt7 || document.compatMode == 'BackCompat');
                    if (o && /^(above|below)$/.test(o.position)) {
                        if (ie6) {
                            o.style.width = (overlayBox.offsetWidth + 2 * x.cb
                                + x.p1 + x.p2) + 'px';
                        }
                        y[o.position == 'above' ? 'p1' : 'p2'] = o.offsetHeight;
                    }
                    if (o && ie6 && /^(left|right)panel$/.test(o.position)) {
                        o.style.height = (overlayBox.offsetHeight + 2 * y.cb) + 'px';
                    }
                }
            }
            if (doWrapper) {
                hs.setStyles(this.content, {
                    top: y.p1 + 'px'
                });
                hs.setStyles(overlayBox, {
                    top: (y.p1 + y.cb) + 'px'
                });
            }
        },

        showOverlays: function () {
            var b = this.overlayBox;
            b.className = '';
            hs.setStyles(b, {
                top: (this.y.p1 + this.y.cb) + 'px',
                left: (this.x.p1 + this.x.cb) + 'px',
                overflow: 'visible'
            });
            if (hs.safari) b.style.visibility = 'visible';
            this.wrapper.appendChild(b);
            for (var i = 0; i < this.overlays.length; i++) {
                var o = hs.$('hsId' + this.overlays[i]);
                o.style.zIndex = o.zIndex || 4;
                if (!o.hideOnMouseOut || this.mouseIsOver) {
                    o.style.visibility = 'visible';
                    hs.setStyles(o, { visibility: 'visible', display: '' });
                    hs.animate(o, { opacity: o.opacity }, o.dur);
                }
            }
        },

        destroyOverlays: function () {
            if (!this.overlays.length) return;
            if (this.slideshow) {
                var c = this.slideshow.controls;
                if (c && hs.getExpander(c) == this) c.parentNode.removeChild(c);
            }
            for (var i = 0; i < this.overlays.length; i++) {
                var o = hs.$('hsId' + this.overlays[i]);
                if (o && o.parentNode == hs.viewport && hs.getExpander(o) == this) hs.discardElement(o);
            }
            if (this.isHtml && this.preserveContent) {
                this.overlayBox.style.top = '-9999px';
                hs.container.appendChild(this.overlayBox);
            } else
                hs.discardElement(this.overlayBox);
        },



        createFullExpand: function () {
            if (this.slideshow && this.slideshow.controls) {
                this.slideshow.enable('full-expand');
                return;
            }
            this.fullExpandLabel = hs.createElement(
                'a', {
                    href: 'javascript:hs.expanders[' + this.key + '].doFullExpand();',
                    title: hs.lang.fullExpandTitle,
                    className: 'highslide-full-expand'
                }
            );
            if (!hs.fireEvent(this, 'onCreateFullExpand')) return;

            this.createOverlay({
                overlayId: this.fullExpandLabel,
                position: hs.fullExpandPosition,
                hideOnMouseOut: true,
                opacity: hs.fullExpandOpacity
            });
        },

        doFullExpand: function () {
            try {
                if (!hs.fireEvent(this, 'onDoFullExpand')) return;
                if (this.fullExpandLabel) hs.discardElement(this.fullExpandLabel);

                this.focus();
                var xSize = this.x.size;
                this.resizeTo(this.x.full, this.y.full);

                var xpos = this.x.pos - (this.x.size - xSize) / 2;
                if (xpos < hs.marginLeft) xpos = hs.marginLeft;

                this.moveTo(xpos, this.y.pos);
                this.doShowHide('hidden');

            } catch (e) {
                this.error(e);
            }
        },


        afterClose: function () {
            this.a.className = this.a.className.replace('highslide-active-anchor', '');

            this.doShowHide('visible');

            if (this.isHtml && this.preserveContent
                     && this.transitions[1] != 'crossfade') {
                this.sleep();
            } else {
                if (this.outline && this.outlineWhileAnimating) this.outline.destroy();

                hs.discardElement(this.wrapper);
            }
            if (hs.mask) hs.mask.style.display = 'none';
            this.destroyOverlays();
            if (!hs.viewport.childNodes.length) hs.viewport.style.display = 'none';

            if (this.dimmingOpacity) hs.undim(this.key);
            hs.fireEvent(this, 'onAfterClose');
            hs.expanders[this.key] = null;
            hs.reOrder();
        }

    };


    // hs.Ajax object prototype
    hs.Ajax = function (a, content, pre) {
        this.a = a;
        this.content = content;
        this.pre = pre;
    };

    hs.Ajax.prototype = {
        run: function () {
            var xhr;
            if (!this.src) this.src = hs.getSrc(this.a);
            if (this.src.match('#')) {
                var arr = this.src.split('#');
                this.src = arr[0];
                this.id = arr[1];
            }
            if (hs.cachedGets[this.src]) {
                this.cachedGet = hs.cachedGets[this.src];
                if (this.id) this.getElementContent();
                else this.loadHTML();
                return;
            }
            try { xhr = new XMLHttpRequest(); }
            catch (e) {
                try { xhr = new ActiveXObject("Msxml2.XMLHTTP"); }
                catch (e) {
                    try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); }
                    catch (e) { this.onError(); }
                }
            }
            var pThis = this;
            xhr.onreadystatechange = function () {
                if (pThis.xhr.readyState == 4) {
                    if (pThis.id) pThis.getElementContent();
                    else pThis.loadHTML();
                }
            };
            var src = this.src;
            this.xhr = xhr;
            if (hs.forceAjaxReload)
                src = src.replace(/$/, (/\?/.test(src) ? '&' : '?') + 'dummy=' + (new Date()).getTime());
            xhr.open('GET', src, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(null);
        },

        getElementContent: function () {
            hs.init();
            var attribs = window.opera || hs.ie6SSL ? { src: 'about:blank' } : null;

            this.iframe = hs.createElement('iframe', attribs,
                { position: 'absolute', top: '-9999px' }, hs.container);

            this.loadHTML();
        },

        loadHTML: function () {
            var s = this.cachedGet || this.xhr.responseText,
                regBody;
            if (this.pre) hs.cachedGets[this.src] = s;
            if (!hs.ie || hs.uaVersion >= 5.5) {
                s = s.replace(new RegExp('<link[^>]*>', 'gi'), '')
                    .replace(new RegExp('<script[^>]*>.*?</script>', 'gi'), '');
                if (this.iframe) {
                    var doc = this.iframe.contentDocument;
                    if (!doc && this.iframe.contentWindow) doc = this.iframe.contentWindow.document;
                    if (!doc) { // Opera
                        var pThis = this;
                        setTimeout(function () { pThis.loadHTML(); }, 25);
                        return;
                    }
                    doc.open();
                    doc.write(s);
                    doc.close();
                    try { s = doc.getElementById(this.id).innerHTML; } catch (e) {
                        try { s = this.iframe.document.getElementById(this.id).innerHTML; } catch (e) { } // opera
                    }
                    hs.discardElement(this.iframe);
                } else {
                    regBody = /(<body[^>]*>|<\/body>)/ig;
                    if (regBody.test(s)) s = s.split(regBody)[hs.ie ? 1 : 2];

                }
            }
            hs.getElementByClass(this.content, 'DIV', 'highslide-body').innerHTML = s;
            this.onLoad();
            for (var x in this) this[x] = null;
        }
    };


    hs.Slideshow = function (expKey, options) {
        if (hs.dynamicallyUpdateAnchors !== false) hs.updateAnchors();
        this.expKey = expKey;
        for (var x in options) this[x] = options[x];
        if (this.useControls) this.getControls();
        if (this.thumbstrip) this.thumbstrip = hs.Thumbstrip(this);
    };
    hs.Slideshow.prototype = {
        getControls: function () {
            this.controls = hs.createElement('div', { innerHTML: hs.replaceLang(hs.skin.controls) },
                null, hs.container);

            var buttons = ['play', 'pause', 'previous', 'next', 'move', 'full-expand', 'close'];
            this.btn = {};
            var pThis = this;
            for (var i = 0; i < buttons.length; i++) {
                this.btn[buttons[i]] = hs.getElementByClass(this.controls, 'li', 'highslide-' + buttons[i]);
                this.enable(buttons[i]);
            }
            this.btn.pause.style.display = 'none';
            //this.disable('full-expand');
        },
        checkFirstAndLast: function () {
            if (this.repeat || !this.controls) return;
            var exp = hs.expanders[this.expKey],
                cur = exp.getAnchorIndex(),
                re = /disabled$/;
            if (cur == 0)
                this.disable('previous');
            else if (re.test(this.btn.previous.getElementsByTagName('a')[0].className))
                this.enable('previous');
            if (cur + 1 == hs.anchors.groups[exp.slideshowGroup || 'none'].length) {
                this.disable('next');
                this.disable('play');
            } else if (re.test(this.btn.next.getElementsByTagName('a')[0].className)) {
                this.enable('next');
                this.enable('play');
            }
        },
        enable: function (btn) {
            if (!this.btn) return;
            var sls = this, a = this.btn[btn].getElementsByTagName('a')[0], re = /disabled$/;
            a.onclick = function () {
                sls[btn]();
                return false;
            };
            if (re.test(a.className)) a.className = a.className.replace(re, '');
        },
        disable: function (btn) {
            if (!this.btn) return;
            var a = this.btn[btn].getElementsByTagName('a')[0];
            a.onclick = function () { return false; };
            if (!/disabled$/.test(a.className)) a.className += ' disabled';
        },
        hitSpace: function () {
            if (this.autoplay) this.pause();
            else this.play();
        },
        play: function (wait) {
            if (this.btn) {
                this.btn.play.style.display = 'none';
                this.btn.pause.style.display = '';
            }

            this.autoplay = true;
            if (!wait) hs.next(this.expKey);
        },
        pause: function () {
            if (this.btn) {
                this.btn.pause.style.display = 'none';
                this.btn.play.style.display = '';
            }

            clearTimeout(this.autoplay);
            this.autoplay = null;
        },
        previous: function () {
            this.pause();
            hs.previous(this.btn.previous);
        },
        next: function () {
            this.pause();
            hs.next(this.btn.next);
        },
        move: function () { },
        'full-expand': function () {
            hs.getExpander().doFullExpand();
        },
        close: function () {
            hs.close(this.btn.close);
        }
    };
    hs.Thumbstrip = function (slideshow) {
        function add(exp) {
            hs.extend(options || {}, {
                overlayId: dom,
                hsId: 'thumbstrip',
                className: 'highslide-thumbstrip-' + mode + '-overlay ' + (options.className || '')
            });
            if (hs.ieLt7) options.fade = 0;
            exp.createOverlay(options);
            hs.setStyles(dom.parentNode, { overflow: 'hidden' });
        };

        function scroll(delta) {
            selectThumb(undefined, Math.round(delta * dom[isX ? 'offsetWidth' : 'offsetHeight'] * 0.7));
        };

        function selectThumb(i, scrollBy) {
            if (i === undefined) for (var j = 0; j < group.length; j++) {
                if (group[j] == hs.expanders[slideshow.expKey].a) {
                    i = j;
                    break;
                }
            }
            if (i === undefined) return;
            var as = dom.getElementsByTagName('a'),
                active = as[i],
                cell = active.parentNode,
                left = isX ? 'Left' : 'Top',
                right = isX ? 'Right' : 'Bottom',
                width = isX ? 'Width' : 'Height',
                offsetLeft = 'offset' + left,
                offsetWidth = 'offset' + width,
                overlayWidth = div.parentNode.parentNode[offsetWidth],
                minTblPos = overlayWidth - table[offsetWidth],
                curTblPos = parseInt(table.style[isX ? 'left' : 'top']) || 0,
                tblPos = curTblPos,
                mgnRight = 20;
            if (scrollBy !== undefined) {
                tblPos = curTblPos - scrollBy;

                if (minTblPos > 0) minTblPos = 0;
                if (tblPos > 0) tblPos = 0;
                if (tblPos < minTblPos) tblPos = minTblPos;


            } else {
                for (var j = 0; j < as.length; j++) as[j].className = '';
                active.className = 'highslide-active-anchor';
                var activeLeft = i > 0 ? as[i - 1].parentNode[offsetLeft] : cell[offsetLeft],
                    activeRight = cell[offsetLeft] + cell[offsetWidth] +
                        (as[i + 1] ? as[i + 1].parentNode[offsetWidth] : 0);
                if (activeRight > overlayWidth - curTblPos) tblPos = overlayWidth - activeRight;
                else if (activeLeft < -curTblPos) tblPos = -activeLeft;
            }
            var markerPos = cell[offsetLeft] + (cell[offsetWidth] - marker[offsetWidth]) / 2 + tblPos;
            hs.animate(table, isX ? { left: tblPos } : { top: tblPos }, null, 'easeOutQuad');
            hs.animate(marker, isX ? { left: markerPos } : { top: markerPos }, null, 'easeOutQuad');
            scrollUp.style.display = tblPos < 0 ? 'block' : 'none';
            scrollDown.style.display = (tblPos > minTblPos) ? 'block' : 'none';

        };


        // initialize
        var group = hs.anchors.groups[hs.expanders[slideshow.expKey].slideshowGroup || 'none'],
            options = slideshow.thumbstrip,
            mode = options.mode || 'horizontal',
            floatMode = (mode == 'float'),
            tree = floatMode ? ['div', 'ul', 'li', 'span'] : ['table', 'tbody', 'tr', 'td'],
            isX = (mode == 'horizontal'),
            dom = hs.createElement('div', {
                className: 'highslide-thumbstrip highslide-thumbstrip-' + mode,
                innerHTML:
					'<div class="highslide-thumbstrip-inner">' +
					'<' + tree[0] + '><' + tree[1] + '></' + tree[1] + '></' + tree[0] + '></div>' +
					'<div class="highslide-scroll-up"><div></div></div>' +
					'<div class="highslide-scroll-down"><div></div></div>' +
					'<div class="highslide-marker"><div></div></div>'
            }, {
                display: 'none'
            }, hs.container),
            domCh = dom.childNodes,
            div = domCh[0],
            scrollUp = domCh[1],
            scrollDown = domCh[2],
            marker = domCh[3],
            table = div.firstChild,
            tbody = dom.getElementsByTagName(tree[1])[0],
            tr;
        for (var i = 0; i < group.length; i++) {
            if (i == 0 || !isX) tr = hs.createElement(tree[2], null, null, tbody);
            (function () {
                var a = group[i],
                    cell = hs.createElement(tree[3], null, null, tr),
                    pI = i;
                hs.createElement('a', {
                    href: a.href,
                    onclick: function () {
                        hs.getExpander(this).focus();
                        return hs.transit(a);
                    },
                    innerHTML: hs.stripItemFormatter ? hs.stripItemFormatter(a) : a.innerHTML
                }, null, cell);
            })();
        }
        if (!floatMode) {
            scrollUp.onclick = function () { scroll(-1); };
            scrollDown.onclick = function () { scroll(1); };
            hs.addEventListener(tbody, document.onmousewheel !== undefined ?
                    'mousewheel' : 'DOMMouseScroll', function (e) {
                        var delta = 0;
                        e = e || window.event;
                        if (e.wheelDelta) {
                            delta = e.wheelDelta / 120;
                            if (hs.opera) delta = -delta;
                        } else if (e.detail) {
                            delta = -e.detail / 3;
                        }
                        if (delta) scroll(-delta * 0.2);
                        if (e.preventDefault) e.preventDefault();
                        e.returnValue = false;
                    });
        }

        return {
            add: add,
            selectThumb: selectThumb
        }
    };
    hs.langDefaults = hs.lang;
    // history
    var HsExpander = hs.Expander;
    if (hs.ie && window == window.top) {
        (function () {
            try {
                document.documentElement.doScroll('left');
            } catch (e) {
                setTimeout(arguments.callee, 50);
                return;
            }
            hs.ready();
        })();
    }
    hs.addEventListener(document, 'DOMContentLoaded', hs.ready);
    hs.addEventListener(window, 'load', hs.ready);

    // set handlers
    hs.addEventListener(document, 'ready', function () {
        if (hs.expandCursor || hs.dimmingOpacity) {
            var style = hs.createElement('style', { type: 'text/css' }, null,
                document.getElementsByTagName('HEAD')[0]);

            function addRule(sel, dec) {
                if (!hs.ie) {
                    style.appendChild(document.createTextNode(sel + " {" + dec + "}"));
                } else {
                    var last = document.styleSheets[document.styleSheets.length - 1];
                    if (typeof (last.addRule) == "object") last.addRule(sel, dec);
                }
            }
            function fix(prop) {
                return 'expression( ( ( ignoreMe = document.documentElement.' + prop +
                    ' ? document.documentElement.' + prop + ' : document.body.' + prop + ' ) ) + \'px\' );';
            }
            if (hs.expandCursor) addRule('.highslide img',
                'cursor: url(' + hs.graphicsDir + hs.expandCursor + '), pointer !important;');
            addRule('.highslide-viewport-size',
                hs.ie && (hs.uaVersion < 7 || document.compatMode == 'BackCompat') ?
                    'position: absolute; ' +
                    'left:' + fix('scrollLeft') +
                    'top:' + fix('scrollTop') +
                    'width:' + fix('clientWidth') +
                    'height:' + fix('clientHeight') :
                    'position: fixed; width: 100%; height: 100%; left: 0; top: 0');
        }
    });
    hs.addEventListener(window, 'resize', function () {
        hs.getPageSize();
        if (hs.viewport) for (var i = 0; i < hs.viewport.childNodes.length; i++) {
            var node = hs.viewport.childNodes[i],
                exp = hs.getExpander(node);
            exp.positionOverlay(node);
            if (node.hsId == 'thumbstrip') exp.slideshow.thumbstrip.selectThumb();
        }
    });
    hs.addEventListener(document, 'mousemove', function (e) {
        hs.mouse = { x: e.clientX, y: e.clientY };
    });
    hs.addEventListener(document, 'mousedown', hs.mouseClickHandler);
    hs.addEventListener(document, 'mouseup', hs.mouseClickHandler);
    hs.addEventListener(document, 'ready', hs.setClickEvents);
    hs.addEventListener(window, 'load', hs.preloadImages);
    hs.addEventListener(window, 'load', hs.preloadAjax);
}

/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = 'https://www.highcharts.com/samples/graphics/highslide/';
hs.outlineType = '';
hs.wrapperClassName = 'draggable-header';
hs.captionEval = 'this.a.title';
hs.showCredits = false;
hs.marginTop = 20;
hs.marginRight = 20;
hs.marginBottom = 20;
hs.marginLeft = 20;


/**
 * Highcharts plugin for dragging a legend by its title
 *
 * Author: Torstein Hønsi
 * License: MIT License
 * Version: 1.3.5
 * Requires: Highcharts 3.0+
 *
 * Usage: Set draggable:true and floating:true in the legend options. The legend
 * preserves is alignment after dragging. For example if it is aligned to the right,
 * if will keep the same distance to the right edge even after chart resize or
 * when exporting to a different size.
 */
(function (H) {
    var addEvent = H.addEvent;

    H.wrap(H.Chart.prototype, 'init', function (proceed) {
        proceed.apply(this, Array.prototype.slice.call(arguments, 1));

        var chart = this,
            legend = chart.legend,
            title = legend.title,
            options = legend.options,
            isDragging,
            downX,
            downY,
            optionsX,
            optionsY,
            currentX,
            currentY;


        function pointerDown(e) {
            e = chart.pointer.normalize(e);
            downX = e.chartX;
            downY = e.chartY;
            optionsX = options.x;
            optionsY = options.y;
            currentX = legend.group.attr('translateX');
            currentY = legend.group.attr('translateY');
            isDragging = true;
        }

        function pointerMove(e) {
            if (isDragging) {
                e = chart.pointer.normalize(e);
                var draggedX = e.chartX - downX,
                    draggedY = e.chartY - downY;

                // Stop touch-panning the page
                e.preventDefault();

                options.x = optionsX + draggedX;
                options.y = optionsY + draggedY;

                // Do the move is we're inside the chart
                if (currentX + draggedX > 0 &&
                    currentX + draggedX + legend.legendWidth < chart.chartWidth &&
                    currentY + draggedY > 0 &&
                    currentY + draggedY + legend.legendHeight < chart.chartHeight) {
                    legend.group.placed = false; // prevent animation
                    legend.group.align(H.extend({
                        width: legend.legendWidth,
                        height: legend.legendHeight
                    }, options), true, 'spacingBox');
                    legend.positionCheckboxes();
                }
                if (chart.pointer.selectionMarker) {
                    chart.pointer.selectionMarker = chart.pointer.selectionMarker.destroy();
                }

            }
        }

        function pointerUp() {
            isDragging = false;
        }

        if (options.draggable && title) {

            title.css({ cursor: 'move' });

            // Mouse events
            addEvent(title.element, 'mousedown', pointerDown);
            addEvent(chart.container, 'mousemove', pointerMove);
            addEvent(document, 'mouseup', pointerUp);

            // Touch events
            addEvent(title.element, 'touchstart', pointerDown);
            addEvent(chart.container, 'touchmove', pointerMove);
            addEvent(document, 'touchend', pointerUp);

        }
    });
}(Highcharts));

/*
 Highcharts JS v4.2.5 (2016-05-06)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (m) { typeof module === "object" && module.exports ? module.exports = m : m(Highcharts) })(function (m) {
    function M(a, b, c) { this.init(a, b, c) } var R = m.arrayMin, S = m.arrayMax, t = m.each, H = m.extend, I = m.isNumber, u = m.merge, T = m.map, o = m.pick, B = m.pInt, G = m.correctFloat, p = m.getOptions().plotOptions, i = m.seriesTypes, v = m.extendClass, N = m.splat, w = m.wrap, O = m.Axis, z = m.Tick, J = m.Point, U = m.Pointer, V = m.CenteredSeriesMixin, C = m.TrackerMixin, x = m.Series, y = Math, F = y.round, D = y.floor, P = y.max, W = m.Color, r = function () { }; H(M.prototype, {
        init: function (a,
        b, c) { var d = this, g = d.defaultOptions; d.chart = b; d.options = a = u(g, b.angular ? { background: {} } : void 0, a); (a = a.background) && t([].concat(N(a)).reverse(), function (a) { var b = a.backgroundColor, g = c.userOptions, a = u(d.defaultBackgroundOptions, a); if (b) a.backgroundColor = b; a.color = a.backgroundColor; c.options.plotBands.unshift(a); g.plotBands = g.plotBands || []; g.plotBands !== c.options.plotBands && g.plotBands.unshift(a) }) }, defaultOptions: { center: ["50%", "50%"], size: "85%", startAngle: 0 }, defaultBackgroundOptions: {
            shape: "circle",
            borderWidth: 1, borderColor: "silver", backgroundColor: { linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, stops: [[0, "#FFF"], [1, "#DDD"]] }, from: -Number.MAX_VALUE, innerRadius: 0, to: Number.MAX_VALUE, outerRadius: "105%"
        }
    }); var A = O.prototype, z = z.prototype, X = { getOffset: r, redraw: function () { this.isDirty = !1 }, render: function () { this.isDirty = !1 }, setScale: r, setCategories: r, setTitle: r }, Q = {
        isRadial: !0, defaultRadialGaugeOptions: {
            labels: { align: "center", x: 0, y: null }, minorGridLineWidth: 0, minorTickInterval: "auto", minorTickLength: 10, minorTickPosition: "inside",
            minorTickWidth: 1, tickLength: 10, tickPosition: "inside", tickWidth: 2, title: { rotation: 0 }, zIndex: 2
        }, defaultRadialXOptions: { gridLineWidth: 1, labels: { align: null, distance: 15, x: 0, y: null }, maxPadding: 0, minPadding: 0, showLastLabel: !1, tickLength: 0 }, defaultRadialYOptions: { gridLineInterpolation: "circle", labels: { align: "right", x: -3, y: -2 }, showLastLabel: !1, title: { x: 4, text: null, rotation: 90 } }, setOptions: function (a) { a = this.options = u(this.defaultOptions, this.defaultRadialOptions, a); if (!a.plotBands) a.plotBands = [] }, getOffset: function () {
            A.getOffset.call(this);
            this.chart.axisOffset[this.side] = 0; this.center = this.pane.center = V.getCenter.call(this.pane)
        }, getLinePath: function (a, b) { var c = this.center, b = o(b, c[2] / 2 - this.offset); return this.chart.renderer.symbols.arc(this.left + c[0], this.top + c[1], b, b, { start: this.startAngleRad, end: this.endAngleRad, open: !0, innerR: 0 }) }, setAxisTranslation: function () {
            A.setAxisTranslation.call(this); if (this.center) this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min ||
            1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0
        }, beforeSetTickPositions: function () { this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0) }, setAxisSize: function () { A.setAxisSize.call(this); if (this.isRadial) { this.center = this.pane.center = m.CenteredSeriesMixin.getCenter.call(this.pane); if (this.isCircular) this.sector = this.endAngleRad - this.startAngleRad; this.len = this.width = this.height = this.center[2] * o(this.sector, 1) / 2 } }, getPosition: function (a,
        b) { return this.postTranslate(this.isCircular ? this.translate(a) : 0, o(this.isCircular ? b : this.translate(a), this.center[2] / 2) - this.offset) }, postTranslate: function (a, b) { var c = this.chart, d = this.center, a = this.startAngleRad + a; return { x: c.plotLeft + d[0] + Math.cos(a) * b, y: c.plotTop + d[1] + Math.sin(a) * b } }, getPlotBandPath: function (a, b, c) {
            var d = this.center, g = this.startAngleRad, e = d[2] / 2, j = [o(c.outerRadius, "100%"), c.innerRadius, o(c.thickness, 10)], l = /%$/, h, f = this.isCircular; this.options.gridLineInterpolation === "polygon" ?
            d = this.getPlotLinePath(a).concat(this.getPlotLinePath(b, !0)) : (a = Math.max(a, this.min), b = Math.min(b, this.max), f || (j[0] = this.translate(a), j[1] = this.translate(b)), j = T(j, function (a) { l.test(a) && (a = B(a, 10) * e / 100); return a }), c.shape === "circle" || !f ? (a = -Math.PI / 2, b = Math.PI * 1.5, h = !0) : (a = g + this.translate(a), b = g + this.translate(b)), d = this.chart.renderer.symbols.arc(this.left + d[0], this.top + d[1], j[0], j[0], { start: Math.min(a, b), end: Math.max(a, b), innerR: o(j[1], j[0] - j[2]), open: h })); return d
        }, getPlotLinePath: function (a,
        b) { var c = this, d = c.center, g = c.chart, e = c.getPosition(a), j, l, h; c.isCircular ? h = ["M", d[0] + g.plotLeft, d[1] + g.plotTop, "L", e.x, e.y] : c.options.gridLineInterpolation === "circle" ? (a = c.translate(a)) && (h = c.getLinePath(0, a)) : (t(g.xAxis, function (a) { a.pane === c.pane && (j = a) }), h = [], a = c.translate(a), d = j.tickPositions, j.autoConnect && (d = d.concat([d[0]])), b && (d = [].concat(d).reverse()), t(d, function (e, b) { l = j.getPosition(e, a); h.push(b ? "L" : "M", l.x, l.y) })); return h }, getTitlePosition: function () {
            var a = this.center, b = this.chart,
            c = this.options.title; return { x: b.plotLeft + a[0] + (c.x || 0), y: b.plotTop + a[1] - { high: 0.5, middle: 0.25, low: 0 }[c.align] * a[2] + (c.y || 0) }
        }
    }; w(A, "init", function (a, b, c) {
        var k; var d = b.angular, g = b.polar, e = c.isX, j = d && e, l, h; h = b.options; var f = c.pane || 0; if (d) { if (H(this, j ? X : Q), l = !e) this.defaultRadialOptions = this.defaultRadialGaugeOptions } else if (g) H(this, Q), this.defaultRadialOptions = (l = e) ? this.defaultRadialXOptions : u(this.defaultYAxisOptions, this.defaultRadialYOptions); if (d || g) b.inverted = !1, h.chart.zoomType = null; a.call(this,
        b, c); if (!j && (d || g)) { a = this.options; if (!b.panes) b.panes = []; this.pane = (k = b.panes[f] = b.panes[f] || new M(N(h.pane)[f], b, this), b = k); h = b.options; this.startAngleRad = b = (h.startAngle - 90) * Math.PI / 180; this.endAngleRad = h = (o(h.endAngle, h.startAngle + 360) - 90) * Math.PI / 180; this.offset = a.offset || 0; if ((this.isCircular = l) && c.max === void 0 && h - b === 2 * Math.PI) this.autoConnect = !0 }
    }); w(A, "autoLabelAlign", function (a) { if (!this.isRadial) return a.apply(this, [].slice.call(arguments, 1)) }); w(z, "getPosition", function (a, b, c, d, g) {
        var e =
        this.axis; return e.getPosition ? e.getPosition(c) : a.call(this, b, c, d, g)
    }); w(z, "getLabelPosition", function (a, b, c, d, g, e, j, l, h) {
        var f = this.axis, k = e.y, n = 20, s = e.align, i = (f.translate(this.pos) + f.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360; f.isRadial ? (a = f.getPosition(this.pos, f.center[2] / 2 + o(e.distance, -25)), e.rotation === "auto" ? d.attr({ rotation: i }) : k === null && (k = f.chart.renderer.fontMetrics(d.styles.fontSize).b - d.getBBox().height / 2), s === null && (f.isCircular ? (this.label.getBBox().width > f.len * f.tickInterval / (f.max -
        f.min) && (n = 0), s = i > n && i < 180 - n ? "left" : i > 180 + n && i < 360 - n ? "right" : "center") : s = "center", d.attr({ align: s })), a.x += e.x, a.y += k) : a = a.call(this, b, c, d, g, e, j, l, h); return a
    }); w(z, "getMarkPath", function (a, b, c, d, g, e, j) { var l = this.axis; l.isRadial ? (a = l.getPosition(this.pos, l.center[2] / 2 + d), b = ["M", b, c, "L", a.x, a.y]) : b = a.call(this, b, c, d, g, e, j); return b }); p.arearange = u(p.area, {
        lineWidth: 1, marker: null, threshold: null, tooltip: { pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>' },
        trackByArea: !0, dataLabels: { align: null, verticalAlign: null, xLow: 0, xHigh: 0, yLow: 0, yHigh: 0 }, states: { hover: { halo: !1 } }
    }); i.arearange = v(i.area, {
        type: "arearange", pointArrayMap: ["low", "high"], dataLabelCollections: ["dataLabel", "dataLabelUpper"], toYData: function (a) { return [a.low, a.high] }, pointValKey: "low", deferTranslatePolar: !0, highToXY: function (a) { var b = this.chart, c = this.xAxis.postTranslate(a.rectPlotX, this.yAxis.len - a.plotHigh); a.plotHighX = c.x - b.plotLeft; a.plotHigh = c.y - b.plotTop }, translate: function () {
            var a =
            this, b = a.yAxis; i.area.prototype.translate.apply(a); t(a.points, function (a) { var d = a.low, g = a.high, e = a.plotY; g === null || d === null ? a.isNull = !0 : (a.plotLow = e, a.plotHigh = b.translate(g, 0, 1, 0, 1)) }); this.chart.polar && t(this.points, function (b) { a.highToXY(b) })
        }, getGraphPath: function () {
            var a = this.points, b = [], c = [], d = a.length, g = x.prototype.getGraphPath, e, j, l; l = this.options; for (var h = l.step, d = a.length; d--;) e = a[d], !e.isNull && (!a[d + 1] || a[d + 1].isNull) && c.push({ plotX: e.plotX, plotY: e.plotLow }), j = {
                plotX: e.plotX, plotY: e.plotHigh,
                isNull: e.isNull
            }, c.push(j), b.push(j), !e.isNull && (!a[d - 1] || a[d - 1].isNull) && c.push({ plotX: e.plotX, plotY: e.plotLow }); a = g.call(this, a); if (h) h === !0 && (h = "left"), l.step = { left: "right", center: "center", right: "left" }[h]; b = g.call(this, b); c = g.call(this, c); l.step = h; l = [].concat(a, b); !this.chart.polar && c[0] === "M" && (c[0] = "L"); this.areaPath = this.areaPath.concat(a, c); return l
        }, drawDataLabels: function () {
            var a = this.data, b = a.length, c, d = [], g = x.prototype, e = this.options.dataLabels, j = e.align, l = e.verticalAlign, h = e.inside, f,
            k, n = this.chart.inverted; if (e.enabled || this._hasPointLabels) {
                for (c = b; c--;) if (f = a[c]) { k = h ? f.plotHigh < f.plotLow : f.plotHigh > f.plotLow; f.y = f.high; f._plotY = f.plotY; f.plotY = f.plotHigh; d[c] = f.dataLabel; f.dataLabel = f.dataLabelUpper; f.below = k; if (n) { if (!j) e.align = k ? "right" : "left" } else if (!l) e.verticalAlign = k ? "top" : "bottom"; e.x = e.xHigh; e.y = e.yHigh } g.drawDataLabels && g.drawDataLabels.apply(this, arguments); for (c = b; c--;) if (f = a[c]) {
                    k = h ? f.plotHigh < f.plotLow : f.plotHigh > f.plotLow; f.dataLabelUpper = f.dataLabel; f.dataLabel =
                    d[c]; f.y = f.low; f.plotY = f._plotY; f.below = !k; if (n) { if (!j) e.align = k ? "left" : "right" } else if (!l) e.verticalAlign = k ? "bottom" : "top"; e.x = e.xLow; e.y = e.yLow
                } g.drawDataLabels && g.drawDataLabels.apply(this, arguments)
            } e.align = j; e.verticalAlign = l
        }, alignDataLabel: function () { i.column.prototype.alignDataLabel.apply(this, arguments) }, setStackedPoints: r, getSymbol: r, drawPoints: r
    }); p.areasplinerange = u(p.arearange); i.areasplinerange = v(i.arearange, { type: "areasplinerange", getPointSpline: i.spline.prototype.getPointSpline });
    (function () {
        var a = i.column.prototype; p.columnrange = u(p.column, p.arearange, { lineWidth: 1, pointRange: null }); i.columnrange = v(i.arearange, {
            type: "columnrange", translate: function () {
                var b = this, c = b.yAxis, d = b.xAxis, g = d.startAngleRad, e, j = b.chart, l = b.xAxis.isRadial, h; a.translate.apply(b); t(b.points, function (a) {
                    var k = a.shapeArgs, n = b.options.minPointLength, s, i; a.plotHigh = h = c.translate(a.high, 0, 1, 0, 1); a.plotLow = a.plotY; i = h; s = o(a.rectPlotY, a.plotY) - h; Math.abs(s) < n ? (n -= s, s += n, i -= n / 2) : s < 0 && (s *= -1, i -= s); l ? (e = a.barX +
                    g, a.shapeType = "path", a.shapeArgs = { d: b.polarArc(i + s, i, e, e + a.pointWidth) }) : (k.height = s, k.y = i, a.tooltipPos = j.inverted ? [c.len + c.pos - j.plotLeft - i - s / 2, d.len + d.pos - j.plotTop - k.x - k.width / 2, s] : [d.left - j.plotLeft + k.x + k.width / 2, c.pos - j.plotTop + i + s / 2, s])
                })
            }, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], drawGraph: r, crispCol: a.crispCol, pointAttrToOptions: a.pointAttrToOptions, drawPoints: a.drawPoints, drawTracker: a.drawTracker, getColumnMetrics: a.getColumnMetrics, animate: function () {
                return a.animate.apply(this,
                arguments)
            }, polarArc: function () { return a.polarArc.apply(this, arguments) }
        })
    })(); p.gauge = u(p.line, { dataLabels: { enabled: !0, defer: !1, y: 15, borderWidth: 1, borderColor: "silver", borderRadius: 3, crop: !1, verticalAlign: "top", zIndex: 2 }, dial: {}, pivot: {}, tooltip: { headerFormat: "" }, showInLegend: !1 }); C = {
        type: "gauge", pointClass: v(J, { setState: function (a) { this.state = a } }), angular: !0, directTouch: !0, drawGraph: r, fixedBox: !0, forceDL: !0, trackerGroups: ["group", "dataLabelsGroup"], translate: function () {
            var a = this.yAxis, b = this.options,
            c = a.center; this.generatePoints(); t(this.points, function (d) {
                var g = u(b.dial, d.dial), e = B(o(g.radius, 80)) * c[2] / 200, j = B(o(g.baseLength, 70)) * e / 100, l = B(o(g.rearLength, 10)) * e / 100, h = g.baseWidth || 3, f = g.topWidth || 1, k = b.overshoot, n = a.startAngleRad + a.translate(d.y, null, null, null, !0); I(k) ? (k = k / 180 * Math.PI, n = Math.max(a.startAngleRad - k, Math.min(a.endAngleRad + k, n))) : b.wrap === !1 && (n = Math.max(a.startAngleRad, Math.min(a.endAngleRad, n))); n = n * 180 / Math.PI; d.shapeType = "path"; d.shapeArgs = {
                    d: g.path || ["M", -l, -h / 2, "L", j, -h /
                    2, e, -f / 2, e, f / 2, j, h / 2, -l, h / 2, "z"], translateX: c[0], translateY: c[1], rotation: n
                }; d.plotX = c[0]; d.plotY = c[1]
            })
        }, drawPoints: function () {
            var a = this, b = a.yAxis.center, c = a.pivot, d = a.options, g = d.pivot, e = a.chart.renderer; t(a.points, function (b) { var g = b.graphic, c = b.shapeArgs, f = c.d, k = u(d.dial, b.dial); g ? (g.animate(c), c.d = f) : b.graphic = e[b.shapeType](c).attr({ stroke: k.borderColor || "none", "stroke-width": k.borderWidth || 0, fill: k.backgroundColor || "black", rotation: c.rotation, zIndex: 1 }).add(a.group) }); c ? c.animate({
                translateX: b[0],
                translateY: b[1]
            }) : a.pivot = e.circle(0, 0, o(g.radius, 5)).attr({ "stroke-width": g.borderWidth || 0, stroke: g.borderColor || "silver", fill: g.backgroundColor || "black", zIndex: 2 }).translate(b[0], b[1]).add(a.group)
        }, animate: function (a) { var b = this; if (!a) t(b.points, function (a) { var d = a.graphic; d && (d.attr({ rotation: b.yAxis.startAngleRad * 180 / Math.PI }), d.animate({ rotation: a.shapeArgs.rotation }, b.options.animation)) }), b.animate = null }, render: function () {
            this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden",
            this.options.zIndex, this.chart.seriesGroup); x.prototype.render.call(this); this.group.clip(this.chart.clipRect)
        }, setData: function (a, b) { x.prototype.setData.call(this, a, !1); this.processData(); this.generatePoints(); o(b, !0) && this.chart.redraw() }, drawTracker: C && C.drawTrackerPoint
    }; i.gauge = v(i.line, C); p.boxplot = u(p.column, {
        fillColor: "#FFFFFF", lineWidth: 1, medianWidth: 2, states: { hover: { brightness: -0.3 } }, threshold: null, tooltip: { pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>' },
        whiskerLength: "50%", whiskerWidth: 2
    }); i.boxplot = v(i.column, {
        type: "boxplot", pointArrayMap: ["low", "q1", "median", "q3", "high"], toYData: function (a) { return [a.low, a.q1, a.median, a.q3, a.high] }, pointValKey: "high", pointAttrToOptions: { fill: "fillColor", stroke: "color", "stroke-width": "lineWidth" }, drawDataLabels: r, translate: function () { var a = this.yAxis, b = this.pointArrayMap; i.column.prototype.translate.apply(this); t(this.points, function (c) { t(b, function (b) { c[b] !== null && (c[b + "Plot"] = a.translate(c[b], 0, 1, 0, 1)) }) }) }, drawPoints: function () {
            var a =
            this, b = a.options, c = a.chart.renderer, d, g, e, j, l, h, f, k, n, i, m, K, L, p, u, r, w, v, x, y, C, B, z = a.doQuartiles !== !1, A, E = a.options.whiskerLength; t(a.points, function (q) {
                n = q.graphic; C = q.shapeArgs; m = {}; p = {}; r = {}; B = q.color || a.color; if (q.plotY !== void 0) if (d = q.pointAttr[q.selected ? "selected" : ""], w = C.width, v = D(C.x), x = v + w, y = F(w / 2), g = D(z ? q.q1Plot : q.lowPlot), e = D(z ? q.q3Plot : q.lowPlot), j = D(q.highPlot), l = D(q.lowPlot), m.stroke = q.stemColor || b.stemColor || B, m["stroke-width"] = o(q.stemWidth, b.stemWidth, b.lineWidth), m.dashstyle = q.stemDashStyle ||
                b.stemDashStyle, p.stroke = q.whiskerColor || b.whiskerColor || B, p["stroke-width"] = o(q.whiskerWidth, b.whiskerWidth, b.lineWidth), r.stroke = q.medianColor || b.medianColor || B, r["stroke-width"] = o(q.medianWidth, b.medianWidth, b.lineWidth), f = m["stroke-width"] % 2 / 2, k = v + y + f, i = ["M", k, e, "L", k, j, "M", k, g, "L", k, l], z && (f = d["stroke-width"] % 2 / 2, k = D(k) + f, g = D(g) + f, e = D(e) + f, v += f, x += f, K = ["M", v, e, "L", v, g, "L", x, g, "L", x, e, "L", v, e, "z"]), E && (f = p["stroke-width"] % 2 / 2, j += f, l += f, A = /%$/.test(E) ? y * parseFloat(E) / 100 : E / 2, L = ["M", k - A, j, "L", k +
                A, j, "M", k - A, l, "L", k + A, l]), f = r["stroke-width"] % 2 / 2, h = F(q.medianPlot) + f, u = ["M", v, h, "L", x, h], n) q.stem.animate({ d: i }), E && q.whiskers.animate({ d: L }), z && q.box.animate({ d: K }), q.medianShape.animate({ d: u }); else { q.graphic = n = c.g().add(a.group); q.stem = c.path(i).attr(m).add(n); if (E) q.whiskers = c.path(L).attr(p).add(n); if (z) q.box = c.path(K).attr(d).add(n); q.medianShape = c.path(u).attr(r).add(n) }
            })
        }, setStackedPoints: r
    }); p.errorbar = u(p.boxplot, {
        color: "#000000", grouping: !1, linkedTo: ":previous", tooltip: { pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>' },
        whiskerWidth: null
    }); i.errorbar = v(i.boxplot, { type: "errorbar", pointArrayMap: ["low", "high"], toYData: function (a) { return [a.low, a.high] }, pointValKey: "high", doQuartiles: !1, drawDataLabels: i.arearange ? i.arearange.prototype.drawDataLabels : r, getColumnMetrics: function () { return this.linkedParent && this.linkedParent.columnMetrics || i.column.prototype.getColumnMetrics.call(this) } }); p.waterfall = u(p.column, { lineWidth: 1, lineColor: "#333", dashStyle: "dot", borderColor: "#333", dataLabels: { inside: !0 }, states: { hover: { lineWidthPlus: 0 } } });
    i.waterfall = v(i.column, {
        type: "waterfall", upColorProp: "fill", pointValKey: "y", translate: function () {
            var a = this.options, b = this.yAxis, c, d, g, e, j, l, h, f, k, n = o(a.minPointLength, 5), s = a.threshold, m = a.stacking; i.column.prototype.translate.apply(this); this.minPointLengthOffset = 0; h = f = s; d = this.points; for (c = 0, a = d.length; c < a; c++) {
                g = d[c]; l = this.processedYData[c]; e = g.shapeArgs; k = (j = m && b.stacks[(this.negStacks && l < s ? "-" : "") + this.stackKey]) ? j[g.x].points[this.index + "," + c] : [0, l]; if (g.isSum) g.y = G(l); else if (g.isIntermediateSum) g.y =
                G(l - f); j = P(h, h + g.y) + k[0]; e.y = b.translate(j, 0, 1); if (g.isSum) e.y = b.translate(k[1], 0, 1), e.height = Math.min(b.translate(k[0], 0, 1), b.len) - e.y + this.minPointLengthOffset; else if (g.isIntermediateSum) e.y = b.translate(k[1], 0, 1), e.height = Math.min(b.translate(f, 0, 1), b.len) - e.y + this.minPointLengthOffset, f = k[1]; else { if (h !== 0) e.height = l > 0 ? b.translate(h, 0, 1) - e.y : b.translate(h, 0, 1) - b.translate(h - l, 0, 1); h += l } e.height < 0 && (e.y += e.height, e.height *= -1); g.plotY = e.y = F(e.y) - this.borderWidth % 2 / 2; e.height = P(F(e.height), 0.001);
                g.yBottom = e.y + e.height; if (e.height <= n) e.height = n, this.minPointLengthOffset += n; e.y -= this.minPointLengthOffset; e = g.plotY + (g.negative ? e.height : 0) - this.minPointLengthOffset; this.chart.inverted ? g.tooltipPos[0] = b.len - e : g.tooltipPos[1] = e
            }
        }, processData: function (a) {
            var b = this.yData, c = this.options.data, d, g = b.length, e, j, l, h, f, k; j = e = l = h = this.options.threshold || 0; for (k = 0; k < g; k++) f = b[k], d = c && c[k] ? c[k] : {}, f === "sum" || d.isSum ? b[k] = G(j) : f === "intermediateSum" || d.isIntermediateSum ? b[k] = G(e) : (j += f, e += f), l = Math.min(j,
            l), h = Math.max(j, h); x.prototype.processData.call(this, a); this.dataMin = l; this.dataMax = h
        }, toYData: function (a) { return a.isSum ? a.x === 0 ? null : "sum" : a.isIntermediateSum ? a.x === 0 ? null : "intermediateSum" : a.y }, getAttribs: function () {
            i.column.prototype.getAttribs.apply(this, arguments); var a = this, b = a.options, c = b.states, d = b.upColor || a.color, b = m.Color(d).brighten(0.1).get(), g = u(a.pointAttr), e = a.upColorProp; g[""][e] = d; g.hover[e] = c.hover.upColor || b; g.select[e] = c.select.upColor || d; t(a.points, function (e) {
                if (!e.options.color) e.y >
                0 ? (e.pointAttr = g, e.color = d) : e.pointAttr = a.pointAttr
            })
        }, getGraphPath: function () { var a = this.data, b = a.length, c = F(this.options.lineWidth + this.borderWidth) % 2 / 2, d = [], g, e, j; for (j = 1; j < b; j++) e = a[j].shapeArgs, g = a[j - 1].shapeArgs, e = ["M", g.x + g.width, g.y + c, "L", e.x, g.y + c], a[j - 1].y < 0 && (e[2] += g.height, e[5] += g.height), d = d.concat(e); return d }, getExtremes: r, drawGraph: x.prototype.drawGraph
    }); p.polygon = u(p.scatter, { marker: { enabled: !1 } }); i.polygon = v(i.scatter, {
        type: "polygon", fillGraph: !0, getSegmentPath: function (a) {
            return x.prototype.getSegmentPath.call(this,
            a).concat("z")
        }, drawGraph: x.prototype.drawGraph, drawLegendSymbol: m.LegendSymbolMixin.drawRectangle
    }); p.bubble = u(p.scatter, { dataLabels: { formatter: function () { return this.point.z }, inside: !0, verticalAlign: "middle" }, marker: { lineColor: null, lineWidth: 1 }, minSize: 8, maxSize: "20%", softThreshold: !1, states: { hover: { halo: { size: 5 } } }, tooltip: { pointFormat: "({point.x}, {point.y}), Size: {point.z}" }, turboThreshold: 0, zThreshold: 0, zoneAxis: "z" }); C = v(J, {
        haloPath: function () {
            return J.prototype.haloPath.call(this, this.shapeArgs.r +
            this.series.options.states.hover.halo.size)
        }, ttBelow: !1
    }); i.bubble = v(i.scatter, {
        type: "bubble", pointClass: C, pointArrayMap: ["y", "z"], parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"], bubblePadding: !0, zoneAxis: "z", pointAttrToOptions: { stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor" }, applyOpacity: function (a) { var b = this.options.marker, c = o(b.fillOpacity, 0.5), a = a || b.fillColor || this.color; c !== 1 && (a = W(a).setOpacity(c).get("rgba")); return a }, convertAttribs: function () {
            var a =
            x.prototype.convertAttribs.apply(this, arguments); a.fill = this.applyOpacity(a.fill); return a
        }, getRadii: function (a, b, c, d) { var g, e, j, l = this.zData, h = [], f = this.options, k = f.sizeBy !== "width", n = f.zThreshold, i = b - a; for (e = 0, g = l.length; e < g; e++) j = l[e], f.sizeByAbsoluteValue && j !== null && (j = Math.abs(j - n), b = Math.max(b - n, Math.abs(a - n)), a = 0), j === null ? j = null : j < a ? j = c / 2 - 1 : (j = i > 0 ? (j - a) / i : 0.5, k && j >= 0 && (j = Math.sqrt(j)), j = y.ceil(c + j * (d - c)) / 2), h.push(j); this.radii = h }, animate: function (a) {
            var b = this.options.animation; if (!a) t(this.points,
            function (a) { var d = a.graphic, a = a.shapeArgs; d && a && (d.attr("r", 1), d.animate({ r: a.r }, b)) }), this.animate = null
        }, translate: function () { var a, b = this.data, c, d, g = this.radii; i.scatter.prototype.translate.call(this); for (a = b.length; a--;) c = b[a], d = g ? g[a] : 0, I(d) && d >= this.minPxSize / 2 ? (c.shapeType = "circle", c.shapeArgs = { x: c.plotX, y: c.plotY, r: d }, c.dlBox = { x: c.plotX - d, y: c.plotY - d, width: 2 * d, height: 2 * d }) : c.shapeArgs = c.plotY = c.dlBox = void 0 }, drawLegendSymbol: function (a, b) {
            var c = this.chart.renderer, d = c.fontMetrics(a.itemStyle.fontSize).f /
            2; b.legendSymbol = c.circle(d, a.baseline - d, d).attr({ zIndex: 3 }).add(b.legendGroup); b.legendSymbol.isMarker = !0
        }, drawPoints: i.column.prototype.drawPoints, alignDataLabel: i.column.prototype.alignDataLabel, buildKDTree: r, applyZones: r
    }); O.prototype.beforePadding = function () {
        var a = this, b = this.len, c = this.chart, d = 0, g = b, e = this.isXAxis, j = e ? "xData" : "yData", l = this.min, h = {}, f = y.min(c.plotWidth, c.plotHeight), k = Number.MAX_VALUE, n = -Number.MAX_VALUE, i = this.max - l, m = b / i, p = []; t(this.series, function (b) {
            var g = b.options; if (b.bubblePadding &&
            (b.visible || !c.options.chart.ignoreHiddenSeries)) if (a.allowZoomOutside = !0, p.push(b), e) t(["minSize", "maxSize"], function (a) { var b = g[a], e = /%$/.test(b), b = B(b); h[a] = e ? f * b / 100 : b }), b.minPxSize = h.minSize, b.maxPxSize = h.maxSize, b = b.zData, b.length && (k = o(g.zMin, y.min(k, y.max(R(b), g.displayNegative === !1 ? g.zThreshold : -Number.MAX_VALUE))), n = o(g.zMax, y.max(n, S(b))))
        }); t(p, function (b) {
            var c = b[j], f = c.length, h; e && b.getRadii(k, n, b.minPxSize, b.maxPxSize); if (i > 0) for (; f--;) I(c[f]) && a.dataMin <= c[f] && c[f] <= a.dataMax && (h =
            b.radii[f], d = Math.min((c[f] - l) * m - h, d), g = Math.max((c[f] - l) * m + h, g))
        }); p.length && i > 0 && !this.isLog && (g -= b, m *= (b + d - g) / b, t([["min", "userMin", d], ["max", "userMax", g]], function (b) { o(a.options[b[0]], a[b[1]]) === void 0 && (a[b[0]] += b[2] / m) }))
    }; (function () {
        function a(a, b) {
            var c = this.chart, d = this.options.animation, h = this.group, f = this.markerGroup, k = this.xAxis.center, i = c.plotLeft, m = c.plotTop; if (c.polar) {
                if (c.renderer.isSVG) d === !0 && (d = {}), b ? (c = { translateX: k[0] + i, translateY: k[1] + m, scaleX: 0.001, scaleY: 0.001 }, h.attr(c),
                f && f.attr(c)) : (c = { translateX: i, translateY: m, scaleX: 1, scaleY: 1 }, h.animate(c, d), f && f.animate(c, d), this.animate = null)
            } else a.call(this, b)
        } var b = x.prototype, c = U.prototype, d; b.searchPointByAngle = function (a) { var b = this.chart, c = this.xAxis.pane.center; return this.searchKDTree({ clientX: 180 + Math.atan2(a.chartX - c[0] - b.plotLeft, a.chartY - c[1] - b.plotTop) * (-180 / Math.PI) }) }; w(b, "buildKDTree", function (a) { if (this.chart.polar) this.kdByAngle ? this.searchPoint = this.searchPointByAngle : this.kdDimensions = 2; a.apply(this) });
        b.toXY = function (a) { var b, c = this.chart, d = a.plotX; b = a.plotY; a.rectPlotX = d; a.rectPlotY = b; b = this.xAxis.postTranslate(a.plotX, this.yAxis.len - b); a.plotX = a.polarPlotX = b.x - c.plotLeft; a.plotY = a.polarPlotY = b.y - c.plotTop; this.kdByAngle ? (c = (d / Math.PI * 180 + this.xAxis.pane.options.startAngle) % 360, c < 0 && (c += 360), a.clientX = c) : a.clientX = a.plotX }; i.spline && w(i.spline.prototype, "getPointSpline", function (a, b, c, d) {
            var h, f, k, i, m, p, o; if (this.chart.polar) {
                h = c.plotX; f = c.plotY; a = b[d - 1]; k = b[d + 1]; this.connectEnds && (a || (a = b[b.length -
                2]), k || (k = b[1])); if (a && k) i = a.plotX, m = a.plotY, b = k.plotX, p = k.plotY, i = (1.5 * h + i) / 2.5, m = (1.5 * f + m) / 2.5, k = (1.5 * h + b) / 2.5, o = (1.5 * f + p) / 2.5, b = Math.sqrt(Math.pow(i - h, 2) + Math.pow(m - f, 2)), p = Math.sqrt(Math.pow(k - h, 2) + Math.pow(o - f, 2)), i = Math.atan2(m - f, i - h), m = Math.atan2(o - f, k - h), o = Math.PI / 2 + (i + m) / 2, Math.abs(i - o) > Math.PI / 2 && (o -= Math.PI), i = h + Math.cos(o) * b, m = f + Math.sin(o) * b, k = h + Math.cos(Math.PI + o) * p, o = f + Math.sin(Math.PI + o) * p, c.rightContX = k, c.rightContY = o; d ? (c = ["C", a.rightContX || a.plotX, a.rightContY || a.plotY, i || h, m ||
                f, h, f], a.rightContX = a.rightContY = null) : c = ["M", h, f]
            } else c = a.call(this, b, c, d); return c
        }); w(b, "translate", function (a) { var b = this.chart; a.call(this); if (b.polar && (this.kdByAngle = b.tooltip && b.tooltip.shared, !this.preventPostTranslate)) { a = this.points; for (b = a.length; b--;) this.toXY(a[b]) } }); w(b, "getGraphPath", function (a, b) {
            var c = this; if (this.chart.polar) {
                b = b || this.points; if (this.options.connectEnds !== !1 && b[0] && b[0].y !== null) this.connectEnds = !0, b.splice(b.length, 0, b[0]); t(b, function (a) {
                    a.polarPlotY === void 0 &&
                    c.toXY(a)
                })
            } return a.apply(this, [].slice.call(arguments, 1))
        }); w(b, "animate", a); if (i.column) d = i.column.prototype, d.polarArc = function (a, b, c, d) { var h = this.xAxis.center, f = this.yAxis.len; return this.chart.renderer.symbols.arc(h[0], h[1], f - b, null, { start: c, end: d, innerR: f - o(a, f) }) }, w(d, "animate", a), w(d, "translate", function (a) {
            var b = this.xAxis, c = b.startAngleRad, d, h, f; this.preventPostTranslate = !0; a.call(this); if (b.isRadial) {
                d = this.points; for (f = d.length; f--;) h = d[f], a = h.barX + c, h.shapeType = "path", h.shapeArgs = {
                    d: this.polarArc(h.yBottom,
                    h.plotY, a, a + h.pointWidth)
                }, this.toXY(h), h.tooltipPos = [h.plotX, h.plotY], h.ttBelow = h.plotY > b.center[1]
            }
        }), w(d, "alignDataLabel", function (a, c, d, i, h, f) { if (this.chart.polar) { a = c.rectPlotX / Math.PI * 180; if (i.align === null) i.align = a > 20 && a < 160 ? "left" : a > 200 && a < 340 ? "right" : "center"; if (i.verticalAlign === null) i.verticalAlign = a < 45 || a > 315 ? "bottom" : a > 135 && a < 225 ? "top" : "middle"; b.alignDataLabel.call(this, c, d, i, h, f) } else a.call(this, c, d, i, h, f) }); w(c, "getCoordinates", function (a, b) {
            var c = this.chart, d = { xAxis: [], yAxis: [] };
            c.polar ? t(c.axes, function (a) { var f = a.isXAxis, g = a.center, i = b.chartX - g[0] - c.plotLeft, g = b.chartY - g[1] - c.plotTop; d[f ? "xAxis" : "yAxis"].push({ axis: a, value: a.translate(f ? Math.PI - Math.atan2(i, g) : Math.sqrt(Math.pow(i, 2) + Math.pow(g, 2)), !0) }) }) : d = a.call(this, b); return d
        })
    })()
});