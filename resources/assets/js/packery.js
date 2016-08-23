


/*!
 * Packery PACKAGED v1.4.3
 * bin-packing layout library
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function (a) { function b() { } function c(a) { function c(b) { b.prototype.option || (b.prototype.option = function (b) { a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b)) }) } function e(b, c) { a.fn[b] = function (e) { if ("string" == typeof e) { for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) { var j = this[h], k = a.data(j, b); if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) { var l = k[e].apply(k, g); if (void 0 !== l) return l } else f("no such method '" + e + "' for " + b + " instance"); else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'") } return this } return this.each(function () { var d = a.data(this, b); d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)) }) } } if (a) { var f = "undefined" == typeof console ? b : function (a) { console.error(a) }; return a.bridget = function (a, b) { c(b), e(a, b) }, a.bridget } } var d = Array.prototype.slice; "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery) }(window), function (a) { function b(a) { return new RegExp("(^|\\s+)" + a + "(\\s+|$)") } function c(a, b) { var c = d(a, b) ? f : e; c(a, b) } var d, e, f; "classList" in document.documentElement ? (d = function (a, b) { return a.classList.contains(b) }, e = function (a, b) { a.classList.add(b) }, f = function (a, b) { a.classList.remove(b) }) : (d = function (a, c) { return b(c).test(a.className) }, e = function (a, b) { d(a, b) || (a.className = a.className + " " + b) }, f = function (a, c) { a.className = a.className.replace(b(c), " ") }); var g = { hasClass: d, addClass: e, removeClass: f, toggleClass: c, has: d, add: e, remove: f, toggle: c }; "function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? module.exports = g : a.classie = g }(window), function (a) { function b(a) { if (a) { if ("string" == typeof d[a]) return a; a = a.charAt(0).toUpperCase() + a.slice(1); for (var b, e = 0, f = c.length; f > e; e++) if (b = c[e] + a, "string" == typeof d[b]) return b } } var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style; "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () { return b }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b }(window), function (a, b) { function c(a) { var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b); return c && b } function d() { } function e() { for (var a = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, b = 0, c = h.length; c > b; b++) { var d = h[b]; a[d] = 0 } return a } function f(b) { function d() { if (!m) { m = !0; var d = a.getComputedStyle; if (j = function () { var a = d ? function (a) { return d(a, null) } : function (a) { return a.currentStyle }; return function (b) { var c = a(b); return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c } }(), k = b("boxSizing")) { var e = document.createElement("div"); e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box"; var f = document.body || document.documentElement; f.appendChild(e); var h = j(e); l = 200 === c(h.width), f.removeChild(e) } } } function f(a) { if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) { var b = j(a); if ("none" === b.display) return e(); var f = {}; f.width = a.offsetWidth, f.height = a.offsetHeight; for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) { var o = h[m], p = b[o]; p = i(a, p); var q = parseFloat(p); f[o] = isNaN(q) ? 0 : q } var r = f.paddingLeft + f.paddingRight, s = f.paddingTop + f.paddingBottom, t = f.marginLeft + f.marginRight, u = f.marginTop + f.marginBottom, v = f.borderLeftWidth + f.borderRightWidth, w = f.borderTopWidth + f.borderBottomWidth, x = g && l, y = c(b.width); y !== !1 && (f.width = y + (x ? 0 : r + v)); var z = c(b.height); return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f } } function i(b, c) { if (a.getComputedStyle || -1 === c.indexOf("%")) return c; var d = b.style, e = d.left, f = b.runtimeStyle, g = f && f.left; return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c } var j, k, l, m = !1; return f } var g = "undefined" == typeof console ? d : function (a) { console.error(a) }, h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]; "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty) }(window), function (a) { function b(b) { var c = a.event; return c.target = c.target || c.srcElement || b, c } var c = document.documentElement, d = function () { }; c.addEventListener ? d = function (a, b, c) { a.addEventListener(b, c, !1) } : c.attachEvent && (d = function (a, c, d) { a[c + d] = d.handleEvent ? function () { var c = b(a); d.handleEvent.call(d, c) } : function () { var c = b(a); d.call(a, c) }, a.attachEvent("on" + c, a[c + d]) }); var e = function () { }; c.removeEventListener ? e = function (a, b, c) { a.removeEventListener(b, c, !1) } : c.detachEvent && (e = function (a, b, c) { a.detachEvent("on" + b, a[b + c]); try { delete a[b + c] } catch (d) { a[b + c] = void 0 } }); var f = { bind: d, unbind: e }; "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f }(window), function () { function a() { } function b(a, b) { for (var c = a.length; c--;) if (a[c].listener === b) return c; return -1 } function c(a) { return function () { return this[a].apply(this, arguments) } } var d = a.prototype, e = this, f = e.EventEmitter; d.getListeners = function (a) { var b, c, d = this._getEvents(); if (a instanceof RegExp) { b = {}; for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]) } else b = d[a] || (d[a] = []); return b }, d.flattenListeners = function (a) { var b, c = []; for (b = 0; b < a.length; b += 1) c.push(a[b].listener); return c }, d.getListenersAsObject = function (a) { var b, c = this.getListeners(a); return c instanceof Array && (b = {}, b[a] = c), b || c }, d.addListener = function (a, c) { var d, e = this.getListenersAsObject(a), f = "object" == typeof c; for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : { listener: c, once: !1 }); return this }, d.on = c("addListener"), d.addOnceListener = function (a, b) { return this.addListener(a, { listener: b, once: !0 }) }, d.once = c("addOnceListener"), d.defineEvent = function (a) { return this.getListeners(a), this }, d.defineEvents = function (a) { for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]); return this }, d.removeListener = function (a, c) { var d, e, f = this.getListenersAsObject(a); for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1)); return this }, d.off = c("removeListener"), d.addListeners = function (a, b) { return this.manipulateListeners(!1, a, b) }, d.removeListeners = function (a, b) { return this.manipulateListeners(!0, a, b) }, d.manipulateListeners = function (a, b, c) { var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners; if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;) f.call(this, b, c[d]); else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e)); return this }, d.removeEvent = function (a) { var b, c = typeof a, d = this._getEvents(); if ("string" === c) delete d[a]; else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]; else delete this._events; return this }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) { var c, d, e, f, g = this.getListenersAsObject(a); for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener); return this }, d.trigger = c("emitEvent"), d.emit = function (a) { var b = Array.prototype.slice.call(arguments, 1); return this.emitEvent(a, b) }, d.setOnceReturnValue = function (a) { return this._onceReturnValue = a, this }, d._getOnceReturnValue = function () { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, d._getEvents = function () { return this._events || (this._events = {}) }, a.noConflict = function () { return e.EventEmitter = f, a }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () { return a }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a }.call(this), function (a) { function b(a) { "function" == typeof a && (b.isReady ? a() : g.push(a)) } function c(a) { var c = "readystatechange" === a.type && "complete" !== f.readyState; b.isReady || c || d() } function d() { b.isReady = !0; for (var a = 0, c = g.length; c > a; a++) { var d = g[a]; d() } } function e(e) { return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b } var f = a.document, g = []; b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie) }(window), function (a) { function b(a, b) { return a[g](b) } function c(a) { if (!a.parentNode) { var b = document.createDocumentFragment(); b.appendChild(a) } } function d(a, b) { c(a); for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++) if (d[e] === a) return !0; return !1 } function e(a, d) { return c(a), b(a, d) } var f, g = function () { if (a.matches) return "matches"; if (a.matchesSelector) return "matchesSelector"; for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) { var e = b[c], f = e + "MatchesSelector"; if (a[f]) return f } }(); if (g) { var h = document.createElement("div"), i = b(h, "div"); f = i ? b : e } else f = d; "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () { return f }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f }(Element.prototype), function (a, b) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) { return b(a, c, d) }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector) }(window, function (a, b, c) { var d = {}; d.extend = function (a, b) { for (var c in b) a[c] = b[c]; return a }, d.modulo = function (a, b) { return (a % b + b) % b }; var e = Object.prototype.toString; d.isArray = function (a) { return "[object Array]" == e.call(a) }, d.makeArray = function (a) { var b = []; if (d.isArray(a)) b = a; else if (a && "number" == typeof a.length) for (var c = 0, e = a.length; e > c; c++) b.push(a[c]); else b.push(a); return b }, d.indexOf = Array.prototype.indexOf ? function (a, b) { return a.indexOf(b) } : function (a, b) { for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c; return -1 }, d.removeFrom = function (a, b) { var c = d.indexOf(a, b); -1 != c && a.splice(c, 1) }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) { return a instanceof HTMLElement } : function (a) { return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName }, d.setText = function () { function a(a, c) { b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c } var b; return a }(), d.getParent = function (a, b) { for (; a != document.body;) if (a = a.parentNode, c(a, b)) return a }, d.getQueryElement = function (a) { return "string" == typeof a ? document.querySelector(a) : a }, d.handleEvent = function (a) { var b = "on" + a.type; this[b] && this[b](a) }, d.filterFindElements = function (a, b) { a = d.makeArray(a); for (var e = [], f = 0, g = a.length; g > f; f++) { var h = a[f]; if (d.isElement(h)) if (b) { c(h, b) && e.push(h); for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j]) } else e.push(h) } return e }, d.debounceMethod = function (a, b, c) { var d = a.prototype[b], e = b + "Timeout"; a.prototype[b] = function () { var a = this[e]; a && clearTimeout(a); var b = arguments, f = this; this[e] = setTimeout(function () { d.apply(f, b), delete f[e] }, c || 100) } }, d.toDashed = function (a) { return a.replace(/(.)([A-Z])/g, function (a, b, c) { return b + "-" + c }).toLowerCase() }; var f = a.console; return d.htmlInit = function (c, e) { b(function () { for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) { var k, l = g[i], m = l.getAttribute(h); try { k = m && JSON.parse(m) } catch (n) { f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n); continue } var o = new c(l, k), p = a.jQuery; p && p.data(l, e, o) } }) }, d }), function (a, b) { "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) { return b(a, c, d, e, f) }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils)) }(window, function (a, b, c, d, e) { function f(a) { for (var b in a) return !1; return b = null, !0 } function g(a, b) { a && (this.element = a, this.layout = b, this.position = { x: 0, y: 0 }, this._create()) } function h(a) { return a.replace(/([A-Z])/g, function (a) { return "-" + a.toLowerCase() }) } var i = a.getComputedStyle, j = i ? function (a) { return i(a, null) } : function (a) { return a.currentStyle }, k = d("transition"), l = d("transform"), m = k && l, n = !!d("perspective"), o = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[k], p = ["transform", "transition", "transitionDuration", "transitionProperty"], q = function () { for (var a = {}, b = 0, c = p.length; c > b; b++) { var e = p[b], f = d(e); f && f !== e && (a[e] = f) } return a }(); e.extend(g.prototype, b.prototype), g.prototype._create = function () { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, g.prototype.handleEvent = function (a) { var b = "on" + a.type; this[b] && this[b](a) }, g.prototype.getSize = function () { this.size = c(this.element) }, g.prototype.css = function (a) { var b = this.element.style; for (var c in a) { var d = q[c] || c; b[d] = a[c] } }, g.prototype.getPosition = function () { var a = j(this.element), b = this.layout.options, c = b.isOriginLeft, d = b.isOriginTop, e = a[c ? "left" : "right"], f = a[d ? "top" : "bottom"], g = this.layout.size, h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10), i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10); h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i }, g.prototype.layoutPosition = function () { var a = this.layout.size, b = this.layout.options, c = {}, d = b.isOriginLeft ? "paddingLeft" : "paddingRight", e = b.isOriginLeft ? "left" : "right", f = b.isOriginLeft ? "right" : "left", g = this.position.x + a[d]; c[e] = this.getXValue(g), c[f] = ""; var h = b.isOriginTop ? "paddingTop" : "paddingBottom", i = b.isOriginTop ? "top" : "bottom", j = b.isOriginTop ? "bottom" : "top", k = this.position.y + a[h]; c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this]) }, g.prototype.getXValue = function (a) { var b = this.layout.options; return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px" }, g.prototype.getYValue = function (a) { var b = this.layout.options; return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px" }, g.prototype._transitionTo = function (a, b) { this.getPosition(); var c = this.position.x, d = this.position.y, e = parseInt(a, 10), f = parseInt(b, 10), g = e === this.position.x && f === this.position.y; if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition(); var h = a - c, i = b - d, j = {}; j.transform = this.getTranslate(h, i), this.transition({ to: j, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, g.prototype.getTranslate = function (a, b) { var c = this.layout.options; return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)" }, g.prototype.goTo = function (a, b) { this.setPosition(a, b), this.layoutPosition() }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) { this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10) }, g.prototype._nonTransition = function (a) { this.css(a.to), a.isCleaning && this._removeStyles(a.to); for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this) }, g.prototype._transition = function (a) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a); var b = this._transn; for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c]; for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0); if (a.from) { this.css(a.from); var d = this.element.offsetHeight; d = null } this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0 }; var r = "opacity," + h(q.transform || "transform"); g.prototype.enableTransition = function () { this.isTransitioning || (this.css({ transitionProperty: r, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(o, this, !1)) }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) { this.ontransitionend(a) }, g.prototype.onotransitionend = function (a) { this.ontransitionend(a) }; var s = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" }; g.prototype.ontransitionend = function (a) { if (a.target === this.element) { var b = this._transn, c = s[a.propertyName] || a.propertyName; if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) { var d = b.onEnd[c]; d.call(this), delete b.onEnd[c] } this.emitEvent("transitionEnd", [this]) } }, g.prototype.disableTransition = function () { this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1 }, g.prototype._removeStyles = function (a) { var b = {}; for (var c in a) b[c] = ""; this.css(b) }; var t = { transitionProperty: "", transitionDuration: "" }; return g.prototype.removeTransitionStyles = function () { this.css(t) }, g.prototype.removeElem = function () { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, g.prototype.remove = function () { if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem(); var a = this; this.once("transitionEnd", function () { a.removeElem() }), this.hide() }, g.prototype.reveal = function () { delete this.isHidden, this.css({ display: "" }); var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("visibleStyle"); b[c] = this.onRevealTransitionEnd, this.transition({ from: a.hiddenStyle, to: a.visibleStyle, isCleaning: !0, onTransitionEnd: b }) }, g.prototype.onRevealTransitionEnd = function () { this.isHidden || this.emitEvent("reveal") }, g.prototype.getHideRevealTransitionEndProperty = function (a) { var b = this.layout.options[a]; if (b.opacity) return "opacity"; for (var c in b) return c }, g.prototype.hide = function () { this.isHidden = !0, this.css({ display: "" }); var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("hiddenStyle"); b[c] = this.onHideTransitionEnd, this.transition({ from: a.visibleStyle, to: a.hiddenStyle, isCleaning: !0, onTransitionEnd: b }) }, g.prototype.onHideTransitionEnd = function () { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, g.prototype.destroy = function () { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, g }), function (a, b) { "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) { return b(a, c, d, e, f, g) }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item) }(window, function (a, b, c, d, e, f) { function g(a, b) { var c = e.getQueryElement(a); if (!c) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a))); this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b); var d = ++k; this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout() } var h = a.console, i = a.jQuery, j = function () { }, k = 0, l = {}; return g.namespace = "outlayer", g.Item = f, g.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) { e.extend(this.options, a) }, g.prototype._create = function () { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, g.prototype.reloadItems = function () { this.items = this._itemize(this.element.children) }, g.prototype._itemize = function (a) { for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) { var g = b[e], h = new c(g, this); d.push(h) } return d }, g.prototype._filterFindItemElements = function (a) { return e.filterFindElements(a, this.options.itemSelector) }, g.prototype.getItemElements = function () { for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element); return a }, g.prototype.layout = function () { this._resetLayout(), this._manageStamps(); var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; this.layoutItems(this.items, a), this._isLayoutInited = !0 }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () { this.getSize() }, g.prototype.getSize = function () { this.size = d(this.element) }, g.prototype._getMeasurement = function (a, b) { var c, f = this.options[a]; f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0 }, g.prototype.layoutItems = function (a, b) { a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout() }, g.prototype._getItemsForLayout = function (a) { for (var b = [], c = 0, d = a.length; d > c; c++) { var e = a[c]; e.isIgnored || b.push(e) } return b }, g.prototype._layoutItems = function (a, b) { if (this._emitCompleteOnItems("layout", a), a && a.length) { for (var c = [], d = 0, e = a.length; e > d; d++) { var f = a[d], g = this._getItemLayoutPosition(f); g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g) } this._processLayoutQueue(c) } }, g.prototype._getItemLayoutPosition = function () { return { x: 0, y: 0 } }, g.prototype._processLayoutQueue = function (a) { for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; this._positionItem(d.item, d.x, d.y, d.isInstant) } }, g.prototype._positionItem = function (a, b, c, d) { d ? a.goTo(b, c) : a.moveTo(b, c) }, g.prototype._postLayout = function () { this.resizeContainer() }, g.prototype.resizeContainer = function () { if (this.options.isResizingContainer) { var a = this._getContainerSize(); a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1)) } }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) { if (void 0 !== a) { var c = this.size; c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px" } }, g.prototype._emitCompleteOnItems = function (a, b) { function c() { e.dispatchEvent(a + "Complete", null, [b]) } function d() { g++, g === f && c() } var e = this, f = b.length; if (!b || !f) return void c(); for (var g = 0, h = 0, i = b.length; i > h; h++) { var j = b[h]; j.once(a, d) } }, g.prototype.dispatchEvent = function (a, b, c) { var d = b ? [b].concat(c) : c; if (this.emitEvent(a, d), i) if (this.$element = this.$element || i(this.element), b) { var e = i.Event(b); e.type = a, this.$element.trigger(e, c) } else this.$element.trigger(a, c) }, g.prototype.ignore = function (a) { var b = this.getItem(a); b && (b.isIgnored = !0) }, g.prototype.unignore = function (a) { var b = this.getItem(a); b && delete b.isIgnored }, g.prototype.stamp = function (a) { if (a = this._find(a)) { this.stamps = this.stamps.concat(a); for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; this.ignore(d) } } }, g.prototype.unstamp = function (a) { if (a = this._find(a)) for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; e.removeFrom(this.stamps, d), this.unignore(d) } }, g.prototype._find = function (a) { return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0 }, g.prototype._manageStamps = function () { if (this.stamps && this.stamps.length) { this._getBoundingRect(); for (var a = 0, b = this.stamps.length; b > a; a++) { var c = this.stamps[a]; this._manageStamp(c) } } }, g.prototype._getBoundingRect = function () { var a = this.element.getBoundingClientRect(), b = this.size; this._boundingRect = { left: a.left + b.paddingLeft + b.borderLeftWidth, top: a.top + b.paddingTop + b.borderTopWidth, right: a.right - (b.paddingRight + b.borderRightWidth), bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth) } }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) { var b = a.getBoundingClientRect(), c = this._boundingRect, e = d(a), f = { left: b.left - c.left - e.marginLeft, top: b.top - c.top - e.marginTop, right: c.right - b.right - e.marginRight, bottom: c.bottom - b.bottom - e.marginBottom }; return f }, g.prototype.handleEvent = function (a) { var b = "on" + a.type; this[b] && this[b](a) }, g.prototype.bindResize = function () { this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0) }, g.prototype.unbindResize = function () { this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1 }, g.prototype.onresize = function () { function a() { b.resize(), delete b.resizeTimeout } this.resizeTimeout && clearTimeout(this.resizeTimeout); var b = this; this.resizeTimeout = setTimeout(a, 100) }, g.prototype.resize = function () { this.isResizeBound && this.needsResizeLayout() && this.layout() }, g.prototype.needsResizeLayout = function () { var a = d(this.element), b = this.size && a; return b && a.innerWidth !== this.size.innerWidth }, g.prototype.addItems = function (a) { var b = this._itemize(a); return b.length && (this.items = this.items.concat(b)), b }, g.prototype.appended = function (a) { var b = this.addItems(a); b.length && (this.layoutItems(b, !0), this.reveal(b)) }, g.prototype.prepended = function (a) { var b = this._itemize(a); if (b.length) { var c = this.items.slice(0); this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c) } }, g.prototype.reveal = function (a) { this._emitCompleteOnItems("reveal", a); for (var b = a && a.length, c = 0; b && b > c; c++) { var d = a[c]; d.reveal() } }, g.prototype.hide = function (a) { this._emitCompleteOnItems("hide", a); for (var b = a && a.length, c = 0; b && b > c; c++) { var d = a[c]; d.hide() } }, g.prototype.revealItemElements = function (a) { var b = this.getItems(a); this.reveal(b) }, g.prototype.hideItemElements = function (a) { var b = this.getItems(a); this.hide(b) }, g.prototype.getItem = function (a) { for (var b = 0, c = this.items.length; c > b; b++) { var d = this.items[b]; if (d.element === a) return d } }, g.prototype.getItems = function (a) { a = e.makeArray(a); for (var b = [], c = 0, d = a.length; d > c; c++) { var f = a[c], g = this.getItem(f); g && b.push(g) } return b }, g.prototype.remove = function (a) { var b = this.getItems(a); if (this._emitCompleteOnItems("remove", b), b && b.length) for (var c = 0, d = b.length; d > c; c++) { var f = b[c]; f.remove(), e.removeFrom(this.items, f) } }, g.prototype.destroy = function () { var a = this.element.style; a.height = "", a.position = "", a.width = ""; for (var b = 0, c = this.items.length; c > b; b++) { var d = this.items[b]; d.destroy() } this.unbindResize(); var e = this.element.outlayerGUID; delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace) }, g.data = function (a) { a = e.getQueryElement(a); var b = a && a.outlayerGUID; return b && l[b] }, g.create = function (a, b) { function c() { g.apply(this, arguments) } return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () { f.apply(this, arguments) }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c }, g.Item = f, g }), function (a, b) { "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof exports ? module.exports = b() : (a.Packery = a.Packery || {}, a.Packery.Rect = b()) }(window, function () { function a(b) { for (var c in a.defaults) this[c] = a.defaults[c]; for (c in b) this[c] = b[c] } var b = window.Packery = function () { }; return b.Rect = a, a.defaults = { x: 0, y: 0, width: 0, height: 0 }, a.prototype.contains = function (a) { var b = a.width || 0, c = a.height || 0; return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c }, a.prototype.overlaps = function (a) { var b = this.x + this.width, c = this.y + this.height, d = a.x + a.width, e = a.y + a.height; return this.x < d && b > a.x && this.y < e && c > a.y }, a.prototype.getMaximalFreeRects = function (b) { if (!this.overlaps(b)) return !1; var c, d = [], e = this.x + this.width, f = this.y + this.height, g = b.x + b.width, h = b.y + b.height; return this.y < b.y && (c = new a({ x: this.x, y: this.y, width: this.width, height: b.y - this.y }), d.push(c)), e > g && (c = new a({ x: g, y: this.y, width: e - g, height: this.height }), d.push(c)), f > h && (c = new a({ x: this.x, y: h, width: this.width, height: f - h }), d.push(c)), this.x < b.x && (c = new a({ x: this.x, y: this.y, width: b.x - this.x, height: this.height }), d.push(c)), d }, a.prototype.canFit = function (a) { return this.width >= a.width && this.height >= a.height }, a }), function (a, b) { if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b); else if ("object" == typeof exports) module.exports = b(require("./rect")); else { var c = a.Packery = a.Packery || {}; c.Packer = b(c.Rect) } }(window, function (a) { function b(a, b, c) { this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset() } b.prototype.reset = function () { this.spaces = [], this.newSpaces = []; var b = new a({ x: 0, y: 0, width: this.width, height: this.height }); this.spaces.push(b), this.sorter = c[this.sortDirection] || c.downwardLeftToRight }, b.prototype.pack = function (a) { for (var b = 0, c = this.spaces.length; c > b; b++) { var d = this.spaces[b]; if (d.canFit(a)) { this.placeInSpace(a, d); break } } }, b.prototype.placeInSpace = function (a, b) { a.x = b.x, a.y = b.y, this.placed(a) }, b.prototype.placed = function (a) { for (var b = [], c = 0, d = this.spaces.length; d > c; c++) { var e = this.spaces[c], f = e.getMaximalFreeRects(a); f ? b.push.apply(b, f) : b.push(e) } this.spaces = b, this.mergeSortSpaces() }, b.prototype.mergeSortSpaces = function () { b.mergeRects(this.spaces), this.spaces.sort(this.sorter) }, b.prototype.addSpace = function (a) { this.spaces.push(a), this.mergeSortSpaces() }, b.mergeRects = function (a) { for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; if (d) { var e = a.slice(0); e.splice(b, 1); for (var f = 0, g = 0, h = e.length; h > g; g++) { var i = e[g], j = b > g ? 0 : 1; d.contains(i) && (a.splice(g + j - f, 1), f++) } } } return a }; var c = { downwardLeftToRight: function (a, b) { return a.y - b.y || a.x - b.x }, rightwardTopToBottom: function (a, b) { return a.x - b.x || a.y - b.y } }; return b }), function (a, b) { "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : "object" == typeof exports ? module.exports = b(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect) }(window, function (a, b, c) { var d = a("transform"), e = function () { b.Item.apply(this, arguments) }; e.prototype = new b.Item; var f = e.prototype._create; return e.prototype._create = function () { f.call(this), this.rect = new c, this.placeRect = new c }, e.prototype.dragStart = function () { this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1 }, e.prototype.dragMove = function (a, b) { this.didDrag = !0; var c = this.layout.size; a -= c.paddingLeft, b -= c.paddingTop, this.positionPlaceRect(a, b) }, e.prototype.dragStop = function () { this.getPosition(); var a = this.position.x != this.placeRect.x, b = this.position.y != this.placeRect.y; this.needsPositioning = a || b, this.didDrag = !1 }, e.prototype.positionPlaceRect = function (a, b, c) { this.placeRect.x = this.getPlaceRectCoord(a, !0), this.placeRect.y = this.getPlaceRectCoord(b, !1, c) }, e.prototype.getPlaceRectCoord = function (a, b, c) { var d = b ? "Width" : "Height", e = this.size["outer" + d], f = this.layout[b ? "columnWidth" : "rowHeight"], g = this.layout.size["inner" + d]; b || (g = Math.max(g, this.layout.maxY), this.layout.rowHeight || (g -= this.layout.gutter)); var h; if (f) { f += this.layout.gutter, g += b ? this.layout.gutter : 0, a = Math.round(a / f); var i; i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil"; var j = Math[i](g / f); j -= Math.ceil(e / f), h = j } else h = g - e; return a = c ? a : Math.min(a, h), a *= f || 1, Math.max(0, a) }, e.prototype.copyPlaceRectPosition = function () { this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y }, e.prototype.removeElem = function () { this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this]) }, e }), function (a, b) {
    "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], b) : "object" == typeof exports ? module.exports = b(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item);
}(window, function (a, b, c, d, e, f) { function g(a, b) { return a.position.y - b.position.y || a.position.x - b.position.x } function h(a, b) { return a.position.x - b.position.x || a.position.y - b.position.y } d.prototype.canFit = function (a) { return this.width >= a.width - 1 && this.height >= a.height - 1 }; var i = c.create("packery"); return i.Item = f, i.prototype._create = function () { c.prototype._create.call(this), this.packer = new e, this.stamp(this.options.stamped); var a = this; this.handleDraggabilly = { dragStart: function () { a.itemDragStart(this.element) }, dragMove: function () { a.itemDragMove(this.element, this.position.x, this.position.y) }, dragEnd: function () { a.itemDragEnd(this.element) } }, this.handleUIDraggable = { start: function (b, c) { c && a.itemDragStart(b.currentTarget) }, drag: function (b, c) { c && a.itemDragMove(b.currentTarget, c.position.left, c.position.top) }, stop: function (b, c) { c && a.itemDragEnd(b.currentTarget) } } }, i.prototype._resetLayout = function () { this.getSize(), this._getMeasurements(); var a = this.packer; this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY, a.height = this.size.innerHeight + this.gutter, a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter, a.height = Number.POSITIVE_INFINITY, a.sortDirection = "downwardLeftToRight"), a.reset(), this.maxY = 0, this.maxX = 0 }, i.prototype._getMeasurements = function () { this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width") }, i.prototype._getItemLayoutPosition = function (a) { return this._packItem(a), a.rect }, i.prototype._packItem = function (a) { this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect) }, i.prototype._setMaxXY = function (a) { this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY) }, i.prototype._setRectSize = function (a, c) { var d = b(a), e = d.outerWidth, f = d.outerHeight; (e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height) }, i.prototype._applyGridGutter = function (a, b) { if (!b) return a + this.gutter; b += this.gutter; var c = a % b, d = c && 1 > c ? "round" : "ceil"; return a = Math[d](a / b) * b }, i.prototype._getContainerSize = function () { return this.options.isHorizontal ? { width: this.maxX - this.gutter } : { height: this.maxY - this.gutter } }, i.prototype._manageStamp = function (a) { var b, c = this.getItem(a); if (c && c.isPlacing) b = c.placeRect; else { var e = this._getElementOffset(a); b = new d({ x: this.options.isOriginLeft ? e.left : e.right, y: this.options.isOriginTop ? e.top : e.bottom }) } this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b) }, i.prototype.sortItemsByPosition = function () { var a = this.options.isHorizontal ? h : g; this.items.sort(a) }, i.prototype.fit = function (a, b, c) { var d = this.getItem(a); d && (this._getMeasurements(), this.stamp(d.element), d.getSize(), d.isPlacing = !0, b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, d.positionPlaceRect(b, c, !0), this._bindFitEvents(d), d.moveTo(d.placeRect.x, d.placeRect.y), this.layout(), this.unstamp(d.element), this.sortItemsByPosition(), d.isPlacing = !1, d.copyPlaceRectPosition()) }, i.prototype._bindFitEvents = function (a) { function b() { d++, 2 == d && c.dispatchEvent("fitComplete", null, [a]) } var c = this, d = 0; a.on("layout", function () { return b(), !0 }), this.on("layoutComplete", function () { return b(), !0 }) }, i.prototype.resize = function () { var a = b(this.element), c = this.size && a, d = this.options.isHorizontal ? "innerHeight" : "innerWidth"; c && a[d] == this.size[d] || this.layout() }, i.prototype.itemDragStart = function (a) { this.stamp(a); var b = this.getItem(a); b && b.dragStart() }, i.prototype.itemDragMove = function (a, b, c) { function d() { f.layout(), delete f.dragTimeout } var e = this.getItem(a); e && e.dragMove(b, c); var f = this; this.clearDragTimeout(), this.dragTimeout = setTimeout(d, 40) }, i.prototype.clearDragTimeout = function () { this.dragTimeout && clearTimeout(this.dragTimeout) }, i.prototype.itemDragEnd = function (b) { var c, d = this.getItem(b); if (d && (c = d.didDrag, d.dragStop()), !d || !c && !d.needsPositioning) return void this.unstamp(b); a.add(d.element, "is-positioning-post-drag"); var e = this._getDragEndLayoutComplete(b, d); d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout() }, i.prototype._getDragEndLayoutComplete = function (b, c) { var d = c && c.needsPositioning, e = 0, f = d ? 2 : 1, g = this; return function () { return e++, e != f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), c.isPlacing = !1, c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.dispatchEvent("dragItemPositioned", null, [c]), !0) } }, i.prototype.bindDraggabillyEvents = function (a) { a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd) }, i.prototype.bindUIDraggableEvents = function (a) { a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop) }, i.Rect = d, i.Packer = e, i });


/*!
 * Draggabilly PACKAGED v2.1.0
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.0
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {

    /* globals define: false, module: false, require: false */

    if (typeof define == 'function' && define.amd) {
        // AMD
        define('jquery-bridget/jquery-bridget', ['jquery'], function (jQuery) {
            factory(window, jQuery);
        });
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
          window,
          require('jquery')
        );
    } else {
        // browser global
        window.jQueryBridget = factory(
          window,
          window.jQuery
        );
    }

}(window, function factory(window, jQuery) {


    // ----- utils ----- //

    var arraySlice = Array.prototype.slice;

    // helper function for logging errors
    // $.error breaks jQuery chaining
    var console = window.console;
    var logError = typeof console == 'undefined' ? function () { } :
      function (message) {
          console.error(message);
      };

    // ----- jQueryBridget ----- //

    function jQueryBridget(namespace, PluginClass, $) {
        $ = $ || jQuery || window.jQuery;
        if (!$) {
            return;
        }

        // add option method -> $().plugin('option', {...})
        if (!PluginClass.prototype.option) {
            // option setter
            PluginClass.prototype.option = function (opts) {
                // bail out if not an object
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            };
        }

        // make jQuery plugin
        $.fn[namespace] = function (arg0 /*, arg1 */) {
            if (typeof arg0 == 'string') {
                // method call $().plugin( 'methodName', { options } )
                // shift arguments by 1
                var args = arraySlice.call(arguments, 1);
                return methodCall(this, arg0, args);
            }
            // just $().plugin({ options })
            plainCall(this, arg0);
            return this;
        };

        // $().plugin('methodName')
        function methodCall($elems, methodName, args) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

            $elems.each(function (i, elem) {
                // get instance
                var instance = $.data(elem, namespace);
                if (!instance) {
                    logError(namespace + ' not initialized. Cannot call methods, i.e. ' +
                      pluginMethodStr);
                    return;
                }

                var method = instance[methodName];
                if (!method || methodName.charAt(0) == '_') {
                    logError(pluginMethodStr + ' is not a valid method');
                    return;
                }

                // apply method, get return value
                var value = method.apply(instance, args);
                // set return value if value is returned, use only first value
                returnValue = returnValue === undefined ? value : returnValue;
            });

            return returnValue !== undefined ? returnValue : $elems;
        }

        function plainCall($elems, options) {
            $elems.each(function (i, elem) {
                var instance = $.data(elem, namespace);
                if (instance) {
                    // set options & init
                    instance.option(options);
                    instance._init();
                } else {
                    // initialize new instance
                    instance = new PluginClass(elem, options);
                    $.data(elem, namespace, instance);
                }
            });
        }

        updateJQuery($);

    }

    // ----- updateJQuery ----- //

    // set $.bridget for v1 backwards compatibility
    function updateJQuery($) {
        if (!$ || ($ && $.bridget)) {
            return;
        }
        $.bridget = jQueryBridget;
    }

    updateJQuery(jQuery || window.jQuery);

    // -----  ----- //

    return jQueryBridget;

}));

/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

(function (window, factory) {


    if (typeof define == 'function' && define.amd) {
        // AMD
        define('get-size/get-size', [], function () {
            return factory();
        });
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory();
    } else {
        // browser global
        window.getSize = factory();
    }

})(window, function factory() {


    // -------------------------- helpers -------------------------- //

    // get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num;
    }

    function noop() { }

    var logError = typeof console == 'undefined' ? noop :
      function (message) {
          console.error(message);
      };

    // -------------------------- measurements -------------------------- //

    var measurements = [
      'paddingLeft',
      'paddingRight',
      'paddingTop',
      'paddingBottom',
      'marginLeft',
      'marginRight',
      'marginTop',
      'marginBottom',
      'borderLeftWidth',
      'borderRightWidth',
      'borderTopWidth',
      'borderBottomWidth'
    ];

    var measurementsLength = measurements.length;

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }

    // -------------------------- getStyle -------------------------- //

    /**
     * getStyle, get style of element, check for Firefox bug
     * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
     */
    function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
            logError('Style returned ' + style +
              '. Are you running this code in a hidden iframe on Firefox? ' +
              'See http://bit.ly/getsizebug1');
        }
        return style;
    }

    // -------------------------- setup -------------------------- //

    var isSetup = false;

    var isBoxSizeOuter;

    /**
     * setup
     * check isBoxSizerOuter
     * do on first getSize() rather than on page load for Firefox bug
     */
    function setup() {
        // setup once
        if (isSetup) {
            return;
        }
        isSetup = true;

        // -------------------------- box sizing -------------------------- //

        /**
         * WebKit measures the outer-width on style.width on border-box elems
         * IE & Firefox<29 measures the inner-width
         */
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';

        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);

        getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize(style.width) == 200;
        body.removeChild(div);

    }

    // -------------------------- getSize -------------------------- //

    function getSize(elem) {
        setup();

        // use querySeletor if elem is string
        if (typeof elem == 'string') {
            elem = document.querySelector(elem);
        }

        // do not proceed on non-objects
        if (!elem || typeof elem != 'object' || !elem.nodeType) {
            return;
        }

        var style = getStyle(elem);

        // if hidden, everything is 0
        if (style.display == 'none') {
            return getZeroSize();
        }

        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;

        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

        // get all measurements
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            // any 'auto', 'medium' value will be 0
            size[measurement] = !isNaN(num) ? num : 0;
        }

        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;

        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
            size.width = styleWidth +
              // add padding and border unless it's already including it
              (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }

        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
            size.height = styleHeight +
              // add padding and border unless it's already including it
              (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }

        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);

        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;

        return size;
    }

    return getSize;

});

/**
 * EvEmitter v1.0.1
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module */
    if (typeof define == 'function' && define.amd) {
        // AMD - RequireJS
        define('ev-emitter/ev-emitter', factory);
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS - Browserify, Webpack
        module.exports = factory();
    } else {
        // Browser globals
        global.EvEmitter = factory();
    }

}(this, function () {



    function EvEmitter() { }

    var proto = EvEmitter.prototype;

    proto.on = function (eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        // set events hash
        var events = this._events = this._events || {};
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
        }

        return this;
    };

    proto.once = function (eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {};
        // set onceListeners array
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || [];
        // set flag
        onceListeners[listener] = true;

        return this;
    };

    proto.off = function (eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }

        return this;
    };

    proto.emitEvent = function (eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var i = 0;
        var listener = listeners[i];
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];

        while (listener) {
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
            // get next listener
            i += isOnce ? 0 : 1;
            listener = listeners[i];
        }

        return this;
    };

    return EvEmitter;

}));

/*!
 * Unipointer v2.1.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*global define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('unipointer/unipointer', [
          'ev-emitter/ev-emitter'
        ], function (EvEmitter) {
            return factory(window, EvEmitter);
        });
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
          window,
          require('ev-emitter')
        );
    } else {
        // browser global
        window.Unipointer = factory(
          window,
          window.EvEmitter
        );
    }

}(window, function factory(window, EvEmitter) {



    function noop() { }

    function Unipointer() { }

    // inherit EvEmitter
    var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);

    proto.bindStartEvent = function (elem) {
        this._bindStartEvent(elem, true);
    };

    proto.unbindStartEvent = function (elem) {
        this._bindStartEvent(elem, false);
    };

    /**
     * works as unbinder, as you can ._bindStart( false ) to unbind
     * @param {Boolean} isBind - will unbind if falsey
     */
    proto._bindStartEvent = function (elem, isBind) {
        // munge isBind, default to true
        isBind = isBind === undefined ? true : !!isBind;
        var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';

        if (window.navigator.pointerEnabled) {
            // W3C Pointer Events, IE11. See https://coderwall.com/p/mfreca
            elem[bindMethod]('pointerdown', this);
        } else if (window.navigator.msPointerEnabled) {
            // IE10 Pointer Events
            elem[bindMethod]('MSPointerDown', this);
        } else {
            // listen for both, for devices like Chrome Pixel
            elem[bindMethod]('mousedown', this);
            elem[bindMethod]('touchstart', this);
        }
    };

    // trigger handler methods for events
    proto.handleEvent = function (event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };

    // returns the touch that we're keeping track of
    proto.getTouch = function (touches) {
        for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            if (touch.identifier == this.pointerIdentifier) {
                return touch;
            }
        }
    };

    // ----- start event ----- //

    proto.onmousedown = function (event) {
        // dismiss clicks from right or middle buttons
        var button = event.button;
        if (button && (button !== 0 && button !== 1)) {
            return;
        }
        this._pointerDown(event, event);
    };

    proto.ontouchstart = function (event) {
        this._pointerDown(event, event.changedTouches[0]);
    };

    proto.onMSPointerDown =
    proto.onpointerdown = function (event) {
        this._pointerDown(event, event);
    };

    /**
     * pointer start
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto._pointerDown = function (event, pointer) {
        // dismiss other pointers
        if (this.isPointerDown) {
            return;
        }

        this.isPointerDown = true;
        // save pointer identifier to match up touch events
        this.pointerIdentifier = pointer.pointerId !== undefined ?
          // pointerId for pointer events, touch.indentifier for touch events
          pointer.pointerId : pointer.identifier;

        this.pointerDown(event, pointer);
    };

    proto.pointerDown = function (event, pointer) {
        this._bindPostStartEvents(event);
        this.emitEvent('pointerDown', [event, pointer]);
    };

    // hash of events to be bound after start event
    var postStartEvents = {
        mousedown: ['mousemove', 'mouseup'],
        touchstart: ['touchmove', 'touchend', 'touchcancel'],
        pointerdown: ['pointermove', 'pointerup', 'pointercancel'],
        MSPointerDown: ['MSPointerMove', 'MSPointerUp', 'MSPointerCancel']
    };

    proto._bindPostStartEvents = function (event) {
        if (!event) {
            return;
        }
        // get proper events to match start event
        var events = postStartEvents[event.type];
        // bind events to node
        events.forEach(function (eventName) {
            window.addEventListener(eventName, this);
        }, this);
        // save these arguments
        this._boundPointerEvents = events;
    };

    proto._unbindPostStartEvents = function () {
        // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
        if (!this._boundPointerEvents) {
            return;
        }
        this._boundPointerEvents.forEach(function (eventName) {
            window.removeEventListener(eventName, this);
        }, this);

        delete this._boundPointerEvents;
    };

    // ----- move event ----- //

    proto.onmousemove = function (event) {
        this._pointerMove(event, event);
    };

    proto.onMSPointerMove =
    proto.onpointermove = function (event) {
        if (event.pointerId == this.pointerIdentifier) {
            this._pointerMove(event, event);
        }
    };

    proto.ontouchmove = function (event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) {
            this._pointerMove(event, touch);
        }
    };

    /**
     * pointer move
     * @param {Event} event
     * @param {Event or Touch} pointer
     * @private
     */
    proto._pointerMove = function (event, pointer) {
        this.pointerMove(event, pointer);
    };

    // public
    proto.pointerMove = function (event, pointer) {
        this.emitEvent('pointerMove', [event, pointer]);
    };

    // ----- end event ----- //


    proto.onmouseup = function (event) {
        this._pointerUp(event, event);
    };

    proto.onMSPointerUp =
    proto.onpointerup = function (event) {
        if (event.pointerId == this.pointerIdentifier) {
            this._pointerUp(event, event);
        }
    };

    proto.ontouchend = function (event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) {
            this._pointerUp(event, touch);
        }
    };

    /**
     * pointer up
     * @param {Event} event
     * @param {Event or Touch} pointer
     * @private
     */
    proto._pointerUp = function (event, pointer) {
        this._pointerDone();
        this.pointerUp(event, pointer);
    };

    // public
    proto.pointerUp = function (event, pointer) {
        this.emitEvent('pointerUp', [event, pointer]);
    };

    // ----- pointer done ----- //

    // triggered on pointer up & pointer cancel
    proto._pointerDone = function () {
        // reset properties
        this.isPointerDown = false;
        delete this.pointerIdentifier;
        // remove events
        this._unbindPostStartEvents();
        this.pointerDone();
    };

    proto.pointerDone = noop;

    // ----- pointer cancel ----- //

    proto.onMSPointerCancel =
    proto.onpointercancel = function (event) {
        if (event.pointerId == this.pointerIdentifier) {
            this._pointerCancel(event, event);
        }
    };

    proto.ontouchcancel = function (event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) {
            this._pointerCancel(event, touch);
        }
    };

    /**
     * pointer cancel
     * @param {Event} event
     * @param {Event or Touch} pointer
     * @private
     */
    proto._pointerCancel = function (event, pointer) {
        this._pointerDone();
        this.pointerCancel(event, pointer);
    };

    // public
    proto.pointerCancel = function (event, pointer) {
        this.emitEvent('pointerCancel', [event, pointer]);
    };

    // -----  ----- //

    // utility function for getting x/y coords from event
    Unipointer.getPointerPoint = function (pointer) {
        return {
            x: pointer.pageX,
            y: pointer.pageY
        };
    };

    // -----  ----- //

    return Unipointer;

}));

/*!
 * Unidragger v2.1.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

(function (window, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */

    if (typeof define == 'function' && define.amd) {
        // AMD
        define('unidragger/unidragger', [
          'unipointer/unipointer'
        ], function (Unipointer) {
            return factory(window, Unipointer);
        });
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
          window,
          require('unipointer')
        );
    } else {
        // browser global
        window.Unidragger = factory(
          window,
          window.Unipointer
        );
    }

}(window, function factory(window, Unipointer) {



    // -----  ----- //

    function noop() { }

    // -------------------------- Unidragger -------------------------- //

    function Unidragger() { }

    // inherit Unipointer & EvEmitter
    var proto = Unidragger.prototype = Object.create(Unipointer.prototype);

    // ----- bind start ----- //

    proto.bindHandles = function () {
        this._bindHandles(true);
    };

    proto.unbindHandles = function () {
        this._bindHandles(false);
    };

    var navigator = window.navigator;
    /**
     * works as unbinder, as you can .bindHandles( false ) to unbind
     * @param {Boolean} isBind - will unbind if falsey
     */
    proto._bindHandles = function (isBind) {
        // munge isBind, default to true
        isBind = isBind === undefined ? true : !!isBind;
        // extra bind logic
        var binderExtra;
        if (navigator.pointerEnabled) {
            binderExtra = function (handle) {
                // disable scrolling on the element
                handle.style.touchAction = isBind ? 'none' : '';
            };
        } else if (navigator.msPointerEnabled) {
            binderExtra = function (handle) {
                // disable scrolling on the element
                handle.style.msTouchAction = isBind ? 'none' : '';
            };
        } else {
            binderExtra = noop;
        }
        // bind each handle
        var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
        for (var i = 0; i < this.handles.length; i++) {
            var handle = this.handles[i];
            this._bindStartEvent(handle, isBind);
            binderExtra(handle);
            handle[bindMethod]('click', this);
        }
    };

    // ----- start event ----- //

    /**
     * pointer start
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerDown = function (event, pointer) {
        // dismiss range sliders
        if (event.target.nodeName == 'INPUT' && event.target.type == 'range') {
            // reset pointerDown logic
            this.isPointerDown = false;
            delete this.pointerIdentifier;
            return;
        }

        this._dragPointerDown(event, pointer);
        // kludge to blur focused inputs in dragger
        var focused = document.activeElement;
        if (focused && focused.blur) {
            focused.blur();
        }
        // bind move and end events
        this._bindPostStartEvents(event);
        this.emitEvent('pointerDown', [event, pointer]);
    };

    // base pointer down logic
    proto._dragPointerDown = function (event, pointer) {
        // track to see when dragging starts
        this.pointerDownPoint = Unipointer.getPointerPoint(pointer);

        var canPreventDefault = this.canPreventDefaultOnPointerDown(event, pointer);
        if (canPreventDefault) {
            event.preventDefault();
        }
    };

    // overwriteable method so Flickity can prevent for scrolling
    proto.canPreventDefaultOnPointerDown = function (event) {
        // prevent default, unless touchstart or <select>
        return event.target.nodeName != 'SELECT';
    };

    // ----- move event ----- //

    /**
     * drag move
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerMove = function (event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);
        this.emitEvent('pointerMove', [event, pointer, moveVector]);
        this._dragMove(event, pointer, moveVector);
    };

    // base pointer move logic
    proto._dragPointerMove = function (event, pointer) {
        var movePoint = Unipointer.getPointerPoint(pointer);
        var moveVector = {
            x: movePoint.x - this.pointerDownPoint.x,
            y: movePoint.y - this.pointerDownPoint.y
        };
        // start drag if pointer has moved far enough to start drag
        if (!this.isDragging && this.hasDragStarted(moveVector)) {
            this._dragStart(event, pointer);
        }
        return moveVector;
    };

    // condition if pointer has moved far enough to start drag
    proto.hasDragStarted = function (moveVector) {
        return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
    };


    // ----- end event ----- //

    /**
     * pointer up
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerUp = function (event, pointer) {
        this.emitEvent('pointerUp', [event, pointer]);
        this._dragPointerUp(event, pointer);
    };

    proto._dragPointerUp = function (event, pointer) {
        if (this.isDragging) {
            this._dragEnd(event, pointer);
        } else {
            // pointer didn't move enough for drag to start
            this._staticClick(event, pointer);
        }
    };

    // -------------------------- drag -------------------------- //

    // dragStart
    proto._dragStart = function (event, pointer) {
        this.isDragging = true;
        this.dragStartPoint = Unipointer.getPointerPoint(pointer);
        // prevent clicks
        this.isPreventingClicks = true;

        this.dragStart(event, pointer);
    };

    proto.dragStart = function (event, pointer) {
        this.emitEvent('dragStart', [event, pointer]);
    };

    // dragMove
    proto._dragMove = function (event, pointer, moveVector) {
        // do not drag if not dragging yet
        if (!this.isDragging) {
            return;
        }

        this.dragMove(event, pointer, moveVector);
    };

    proto.dragMove = function (event, pointer, moveVector) {
        event.preventDefault();
        this.emitEvent('dragMove', [event, pointer, moveVector]);
    };

    // dragEnd
    proto._dragEnd = function (event, pointer) {
        // set flags
        this.isDragging = false;
        // re-enable clicking async
        setTimeout(function () {
            delete this.isPreventingClicks;
        }.bind(this));

        this.dragEnd(event, pointer);
    };

    proto.dragEnd = function (event, pointer) {
        this.emitEvent('dragEnd', [event, pointer]);
    };

    // ----- onclick ----- //

    // handle all clicks and prevent clicks when dragging
    proto.onclick = function (event) {
        if (this.isPreventingClicks) {
            event.preventDefault();
        }
    };

    // ----- staticClick ----- //

    // triggered after pointer down & up with no/tiny movement
    proto._staticClick = function (event, pointer) {
        // ignore emulated mouse up clicks
        if (this.isIgnoringMouseUp && event.type == 'mouseup') {
            return;
        }

        // allow click in <input>s and <textarea>s
        var nodeName = event.target.nodeName;
        if (nodeName == 'INPUT' || nodeName == 'TEXTAREA') {
            event.target.focus();
        }
        this.staticClick(event, pointer);

        // set flag for emulated clicks 300ms after touchend
        if (event.type != 'mouseup') {
            this.isIgnoringMouseUp = true;
            // reset flag after 300ms
            setTimeout(function () {
                delete this.isIgnoringMouseUp;
            }.bind(this), 400);
        }
    };

    proto.staticClick = function (event, pointer) {
        this.emitEvent('staticClick', [event, pointer]);
    };

    // ----- utils ----- //

    Unidragger.getPointerPoint = Unipointer.getPointerPoint;

    // -----  ----- //

    return Unidragger;

}));

/*!
 * Draggabilly v2.1.0
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define([
            'get-size/get-size',
            'unidragger/unidragger'
        ],
          function (getSize, Unidragger) {
              return factory(window, getSize, Unidragger);
          });
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
          window,
          require('get-size'),
          require('unidragger')
        );
    } else {
        // browser global
        window.Draggabilly = factory(
          window,
          window.getSize,
          window.Unidragger
        );
    }

}(window, function factory(window, getSize, Unidragger) {



    // vars
    var document = window.document;

    function noop() { }

    // -------------------------- helpers -------------------------- //

    // extend objects
    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }

    function isElement(obj) {
        return obj instanceof HTMLElement;
    }

    // -------------------------- requestAnimationFrame -------------------------- //

    // get rAF, prefixed, if present
    var requestAnimationFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

    // fallback to setTimeout
    var lastTime = 0;
    if (!requestAnimationFrame) {
        requestAnimationFrame = function (callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = setTimeout(callback, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    // -------------------------- support -------------------------- //

    var docElem = document.documentElement;
    var transformProperty = typeof docElem.style.transform == 'string' ?
      'transform' : 'WebkitTransform';

    var jQuery = window.jQuery;

    // --------------------------  -------------------------- //

    function Draggabilly(element, options) {
        // querySelector if string
        this.element = typeof element == 'string' ?
          document.querySelector(element) : element;

        if (jQuery) {
            this.$element = jQuery(this.element);
        }

        // options
        this.options = extend({}, this.constructor.defaults);
        this.option(options);

        this._create();
    }

    // inherit Unidragger methods
    var proto = Draggabilly.prototype = Object.create(Unidragger.prototype);

    Draggabilly.defaults = {
    };

    /**
     * set options
     * @param {Object} opts
     */
    proto.option = function (opts) {
        extend(this.options, opts);
    };

    proto._create = function () {

        // properties
        this.position = {};
        this._getPosition();

        this.startPoint = { x: 0, y: 0 };
        this.dragPoint = { x: 0, y: 0 };

        this.startPosition = extend({}, this.position);

        // set relative positioning
        var style = getComputedStyle(this.element);
        if (style.position != 'relative' && style.position != 'absolute') {
            this.element.style.position = 'relative';
        }

        this.enable();
        this.setHandles();

    };

    /**
     * set this.handles and bind start events to 'em
     */
    proto.setHandles = function () {
        this.handles = this.options.handle ?
          this.element.querySelectorAll(this.options.handle) : [this.element];

        this.bindHandles();
    };

    /**
     * emits events via EvEmitter and jQuery events
     * @param {String} type - name of event
     * @param {Event} event - original event
     * @param {Array} args - extra arguments
     */
    proto.dispatchEvent = function (type, event, args) {
        var emitArgs = [event].concat(args);
        this.emitEvent(type, emitArgs);
        var jQuery = window.jQuery;
        // trigger jQuery event
        if (jQuery && this.$element) {
            if (event) {
                // create jQuery event
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else {
                // just trigger with type if no event available
                this.$element.trigger(type, args);
            }
        }
    };

    // -------------------------- position -------------------------- //

    // get x/y position from style
    Draggabilly.prototype._getPosition = function () {
        var style = getComputedStyle(this.element);
        var x = this._getPositionCoord(style.left, 'width');
        var y = this._getPositionCoord(style.top, 'height');
        // clean up 'auto' or other non-integer values
        this.position.x = isNaN(x) ? 0 : x;
        this.position.y = isNaN(y) ? 0 : y;

        this._addTransformPosition(style);
    };

    Draggabilly.prototype._getPositionCoord = function (styleSide, measure) {
        if (styleSide.indexOf('%') != -1) {
            // convert percent into pixel for Safari, #75
            var parentSize = getSize(this.element.parentNode);
            return (parseFloat(styleSide) / 100) * parentSize[measure];
        }

        return parseInt(styleSide, 10);
    };

    // add transform: translate( x, y ) to position
    proto._addTransformPosition = function (style) {
        var transform = style[transformProperty];
        // bail out if value is 'none'
        if (transform.indexOf('matrix') !== 0) {
            return;
        }
        // split matrix(1, 0, 0, 1, x, y)
        var matrixValues = transform.split(',');
        // translate X value is in 12th or 4th position
        var xIndex = transform.indexOf('matrix3d') === 0 ? 12 : 4;
        var translateX = parseInt(matrixValues[xIndex], 10);
        // translate Y value is in 13th or 5th position
        var translateY = parseInt(matrixValues[xIndex + 1], 10);
        this.position.x += translateX;
        this.position.y += translateY;
    };

    // -------------------------- events -------------------------- //

    /**
     * pointer start
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerDown = function (event, pointer) {
        this._dragPointerDown(event, pointer);
        // kludge to blur focused inputs in dragger
        var focused = document.activeElement;
        // do not blur body for IE10, metafizzy/flickity#117
        if (focused && focused.blur && focused != document.body) {
            focused.blur();
        }
        // bind move and end events
        this._bindPostStartEvents(event);
        this.element.classList.add('is-pointer-down');
        this.dispatchEvent('pointerDown', event, [pointer]);
    };

    /**
     * drag move
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerMove = function (event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);
        this.dispatchEvent('pointerMove', event, [pointer, moveVector]);
        this._dragMove(event, pointer, moveVector);
    };

    /**
     * drag start
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.dragStart = function (event, pointer) {
        if (!this.isEnabled) {
            return;
        }
        this._getPosition();
        this.measureContainment();
        // position _when_ drag began
        this.startPosition.x = this.position.x;
        this.startPosition.y = this.position.y;
        // reset left/top style
        this.setLeftTop();

        this.dragPoint.x = 0;
        this.dragPoint.y = 0;

        this.element.classList.add('is-dragging');
        this.dispatchEvent('dragStart', event, [pointer]);
        // start animation
        this.animate();
    };

    proto.measureContainment = function () {
        var containment = this.options.containment;
        if (!containment) {
            return;
        }

        // use element if element
        var container = isElement(containment) ? containment :
          // fallback to querySelector if string
          typeof containment == 'string' ? document.querySelector(containment) :
          // otherwise just `true`, use the parent
          this.element.parentNode;

        var elemSize = getSize(this.element);
        var containerSize = getSize(container);
        var elemRect = this.element.getBoundingClientRect();
        var containerRect = container.getBoundingClientRect();

        var borderSizeX = containerSize.borderLeftWidth + containerSize.borderRightWidth;
        var borderSizeY = containerSize.borderTopWidth + containerSize.borderBottomWidth;

        var position = this.relativeStartPosition = {
            x: elemRect.left - (containerRect.left + containerSize.borderLeftWidth),
            y: elemRect.top - (containerRect.top + containerSize.borderTopWidth)
        };

        this.containSize = {
            width: (containerSize.width - borderSizeX) - position.x - elemSize.width,
            height: (containerSize.height - borderSizeY) - position.y - elemSize.height
        };
    };

    // ----- move event ----- //

    /**
     * drag move
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.dragMove = function (event, pointer, moveVector) {
        if (!this.isEnabled) {
            return;
        }
        var dragX = moveVector.x;
        var dragY = moveVector.y;

        var grid = this.options.grid;
        var gridX = grid && grid[0];
        var gridY = grid && grid[1];

        dragX = applyGrid(dragX, gridX);
        dragY = applyGrid(dragY, gridY);

        dragX = this.containDrag('x', dragX, gridX);
        dragY = this.containDrag('y', dragY, gridY);

        // constrain to axis
        dragX = this.options.axis == 'y' ? 0 : dragX;
        dragY = this.options.axis == 'x' ? 0 : dragY;

        this.position.x = this.startPosition.x + dragX;
        this.position.y = this.startPosition.y + dragY;
        // set dragPoint properties
        this.dragPoint.x = dragX;
        this.dragPoint.y = dragY;

        this.dispatchEvent('dragMove', event, [pointer, moveVector]);
    };

    function applyGrid(value, grid, method) {
        method = method || 'round';
        return grid ? Math[method](value / grid) * grid : value;
    }

    proto.containDrag = function (axis, drag, grid) {
        if (!this.options.containment) {
            return drag;
        }
        var measure = axis == 'x' ? 'width' : 'height';

        var rel = this.relativeStartPosition[axis];
        var min = applyGrid(-rel, grid, 'ceil');
        var max = this.containSize[measure];
        max = applyGrid(max, grid, 'floor');
        return Math.min(max, Math.max(min, drag));
    };

    // ----- end event ----- //

    /**
     * pointer up
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerUp = function (event, pointer) {
        this.element.classList.remove('is-pointer-down');
        this.dispatchEvent('pointerUp', event, [pointer]);
        this._dragPointerUp(event, pointer);
    };

    /**
     * drag end
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.dragEnd = function (event, pointer) {
        if (!this.isEnabled) {
            return;
        }
        // use top left position when complete
        if (transformProperty) {
            this.element.style[transformProperty] = '';
            this.setLeftTop();
        }
        this.element.classList.remove('is-dragging');
        this.dispatchEvent('dragEnd', event, [pointer]);
    };

    // -------------------------- animation -------------------------- //

    proto.animate = function () {
        // only render and animate if dragging
        if (!this.isDragging) {
            return;
        }

        this.positionDrag();

        var _this = this;
        requestAnimationFrame(function animateFrame() {
            _this.animate();
        });

    };

    // left/top positioning
    proto.setLeftTop = function () {
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
    };

    proto.positionDrag = function () {
        this.element.style[transformProperty] = 'translate3d( ' + this.dragPoint.x +
          'px, ' + this.dragPoint.y + 'px, 0)';
    };

    // ----- staticClick ----- //

    proto.staticClick = function (event, pointer) {
        this.dispatchEvent('staticClick', event, [pointer]);
    };

    // ----- methods ----- //

    proto.enable = function () {
        this.isEnabled = true;
    };

    proto.disable = function () {
        this.isEnabled = false;
        if (this.isDragging) {
            this.dragEnd();
        }
    };

    proto.destroy = function () {
        this.disable();
        // reset styles
        this.element.style[transformProperty] = '';
        this.element.style.left = '';
        this.element.style.top = '';
        this.element.style.position = '';
        // unbind handles
        this.unbindHandles();
        // remove jQuery data
        if (this.$element) {
            this.$element.removeData('draggabilly');
        }
    };

    // ----- jQuery bridget ----- //

    // required for jQuery bridget
    proto._init = noop;

    if (jQuery && jQuery.bridget) {
        jQuery.bridget('draggabilly', Draggabilly);
    }

    // -----  ----- //

    return Draggabilly;

}));


/*!
 * angular-packery
 * http://github.com/sungard-labs/angular-packery
 * Version: 1.0.4
 * License: MIT
 */

'use strict';

(function () {

    var moduleDependencies = [
      'packeryTemplates'
    ];

    var moduleConfig = {
        columnWidth: '.packery-sizer',
        itemSelector: '.packery-object',
        rowHeight: '.packery-sizer',
        draggable: true,
        handle: '*',
        timeout: 2000,
        isAppended: true,
        acceptedAttributes: [
          'containerStyle',
          'columnWidth',
          'gutter',
          'isHorizontal',
          'isInitLayout',
          'isOriginLeft',
          'isOriginTop',
          'isResizeBound',
          'itemSelector',
          'rowHeight',
          'transitionDuration',
          'isAppended'
        ]
    };

    var packeryService = function ($rootScope, $q, $interval, $timeout, config) {
        var created = [],
            packeryObj;

        var uniqueId = function (obj, list) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id === obj) {
                    return false;
                }
            }
            return true;
        };

        return {
            Packery: function (hash, el, opts) {
                var deferred = $q.defer();

                el = el || undefined;
                opts = opts || {};

                if (uniqueId(hash, created) && el !== undefined) {
                    packeryObj = new Packery(el[0], opts);
                    created.push({
                        id: hash,
                        packery: packeryObj
                    });
                    el.data('Packery', packeryObj);
                    $rootScope.$emit('packeryInstantiated', packeryObj);
                    return packeryObj;
                } else {
                    var interval = $interval(function () {
                        if (packeryObj !== undefined) {
                            $interval.cancel(interval);
                            deferred.resolve(packeryObj);
                        }
                    }, config.timeout / 10);

                    $timeout(function () {
                        $interval.cancel(interval);
                        deferred.reject(false);
                    }, config.timeout);

                    return deferred.promise;
                }
            }
        };
    };

    var packeryController = function ($rootScope, config, service) {

        var self = this;

        self.packeryInstantiated = false;
        self.packeryDraggable = false;
        self.dragHandle = undefined;
        self.uniqueId = new Date().getTime();
        self.packery = {};

        this.bindDragEvents = function (el) {
            var handleSelector, handle, draggabilly;

            handleSelector = self.dragHandle;

            if (handleSelector === '*') {
                draggabilly = new Draggabilly(el[0]);
                handle = el;
            } else {
                draggabilly = new Draggabilly(el[0], {
                    handle: handleSelector
                });
                handle = el[0].querySelectorAll(handleSelector);
            }

            // Init Draggabilly events
            self.packery.bindDraggabillyEvents(draggabilly);

            // Bind animate events for touch
            angular.element(handle).on('mouseenter', function () {
                el.addClass('hovered');
            }).
            on('mouseleave', function () {
                el.removeClass('hovered');
            });
        };

        this.createAttrObj = function (scope) {
            var obj = {},
                attrs = config.acceptedAttributes;

            for (var i = 0; i < attrs.length; i++) {
                var attr = scope[attrs[i]];
                if (attr !== undefined) {

                    if (attr === 'null') { // check for 'null' values
                        obj[attrs[i]] = null;
                    } else if (isNaN(attr) === false) { // check for numeric values
                        obj[attrs[i]] = +scope[attrs[i]];
                    } else { // all other values should be strings
                        obj[attrs[i]] = scope[attrs[i]];
                    }
                }
            }

            return obj;
        };

        this.packObject = function (el) {
            var promise = service.Packery(self.uniqueId);

            promise.then(function () {
                var packeryEls = self.packery.getItemElements();

                if (packeryEls.indexOf(el[0]) === -1) {
                    if (self.packery.options.isAppended === 0) {
                        self.packery.prepended(el[0]);
                    } else {
                        self.packery.appended(el[0]);
                    }
                }

                if (self.packeryDraggable === true) {
                    self.bindDragEvents(el);
                }

                el.css('visibility', 'visible');
                $rootScope.$emit('packeryObjectPacked', el[0]);
            });
        };

        this.setDraggable = function (handle) {
            self.packeryDraggable = true;
            self.dragHandle = handle;
        };
    };

    var packeryDirective = function (config, service) {

        return {
            restrict: 'EAC',
            controller: 'PackeryController',
            transclude: true,
            replace: true,
            templateUrl: 'template/packery/packery.html',
            scope: {
                containerStyle: '=?', // Type: Object, null
                columnWidth: '@?', // Type: Number, Selector String
                gutter: '@?', // Type: Number, Selector String
                isHorizontal: '@?', // Type: Boolean
                isInitLayout: '@?', // Type: Boolean
                isOriginLeft: '@?', // Type: Boolean
                isOriginTop: '@?', // Type: Boolean
                isResizeBound: '@?', // Type: Boolean
                itemSelector: '@?', // Type: Selector String
                rowHeight: '@?', // Type: Number, Selector String
                transitionDuration: '@?', // Type: String
                isAppended: '@?', // Type: Boolean
                draggable: '@?', // Type: Boolean
                handle: '@?' // Type: Boolean

                // Let's come back to this one...
                // stamp: '@?',
            },
            link: function (scope, element, attrs, controller) {

                var packeryObj, packeryId, packery;

                // If empty, use defaults from config
                scope.columnWidth = scope.columnWidth || config.columnWidth;
                scope.itemSelector = scope.itemSelector || config.itemSelector;
                scope.rowHeight = scope.rowHeight || config.rowHeight;
                scope.draggable = scope.draggable || config.draggable;
                scope.handle = scope.handle || config.handle;

                // Quick fix so 'false' strings don't evaluate to true
                // @TODO: Check for attribute itself, not value of attribute
                if (scope.draggable === 'false') { scope.draggable = false; }
                if (scope.isHorizontal === 'false') { scope.isHorizontal = false; }
                if (scope.isInitLayout === 'false') { scope.isInitLayout = false; }
                if (scope.isOriginLeft === 'false') { scope.isOriginLeft = false; }
                if (scope.isOriginTop === 'false') { scope.isOriginTop = false; }
                if (scope.isResizeBound === 'false') { scope.isResizeBound = false; }
                if (scope.isAppended === 'false') { scope.isAppended = false; }

                // Creates JS Object for passing CSS styles into Packery
                if (scope.containerStyle && (typeof scope.containerStyle === 'object')) { scope.containerStyle = scope.containerStyle; }

                // Set global draggability
                if (scope.draggable) { controller.setDraggable(scope.handle); }

                // Create object for Packery instantiation
                packeryObj = controller.createAttrObj(scope);
                packeryId = controller.uniqueId;

                // Instantiate Packery and broadcast event
                packery = service.Packery(packeryId, element, packeryObj);
                if (packery instanceof Packery) {
                    controller.packeryInstantiated = true;
                    controller.packery = packery;
                }

            }
        };
    };

    var packeryObjectTemplateDirective = function () {
        return {
            restrict: 'EA',
            templateUrl: 'template/packery/packery-object.html',
            transclude: true,
            replace: true
        };
    };

    var packeryObjectDirective = function () {
        return {
            require: '^packery',
            restrict: 'C',
            link: function (scope, element, attrs, controller) {
                // Prevents a FOUC on dynamically added objects
                element.css('visibility', 'hidden');

                // Packs individual objects
                controller.packObject(element);
            }
        };
    };

    var packeryTemplates = function ($templateCache) {
        $templateCache
          .put('template/packery/packery.html', [
            '<div class="packery-wrapper">',
              '<div class="packery-sizer"></div>',
              '<div class="packery-container" ng-transclude></div>',
            '</div>'
          ].join(''));

        $templateCache
          .put('template/packery/packery-object.html',
            '<div class="packery-object" ng-transclude></div>'
          );
    };

    angular
      .module('angular-packery', moduleDependencies)
      .constant('packeryConfig', moduleConfig)
      .service('packeryService', ['$rootScope', '$q', '$interval', '$timeout', 'packeryConfig', packeryService])
      .controller('PackeryController', ['$rootScope', 'packeryConfig', 'packeryService', packeryController])
      .directive('packery', ['packeryConfig', 'packeryService', packeryDirective])
      .directive('packeryObject', [packeryObjectTemplateDirective])
      .directive('packeryObject', [packeryObjectDirective]);

    angular
      .module('packeryTemplates', []).run(['$templateCache', packeryTemplates]);

})();

angular.module('angularResizable', [])
    .directive('resizable', function () {
        var toCall;
        function throttle(fun) {
            if (toCall === undefined) {
                toCall = fun;
                setTimeout(function () {
                    toCall();
                    toCall = undefined;
                }, 100);
            } else {
                toCall = fun;
            }
        }
        return {
            restrict: 'AE',
            scope: {
                rDirections: '=',
                rCenteredX: '=',
                rCenteredY: '=',
                rWidth: '=',
                rHeight: '=',
                rFlex: '=',
                rGrabber: '@',
                rDisabled: '@',
                rNoThrottle: '='
            },
            link: function (scope, element, attr) {
                var flexBasis = 'flexBasis' in document.documentElement.style ? 'flexBasis' :
                    'webkitFlexBasis' in document.documentElement.style ? 'webkitFlexBasis' :
                    'msFlexPreferredSize' in document.documentElement.style ? 'msFlexPreferredSize' : 'flexBasis';

                // register watchers on width and height attributes if they are set
                scope.$watch('rWidth', function (value) {
                    element[0].style[scope.rFlex ? flexBasis : 'width'] = scope.rWidth + 'px';
                });
                scope.$watch('rHeight', function (value) {
                    element[0].style[scope.rFlex ? flexBasis : 'height'] = scope.rHeight + 'px';
                });

                element.addClass('resizable');

                var style = window.getComputedStyle(element[0], null),
                    w,
                    h,
                    dir = scope.rDirections || ['right'],
                    vx = scope.rCenteredX ? 2 : 1, // if centered double velocity
                    vy = scope.rCenteredY ? 2 : 1, // if centered double velocity
                    inner = scope.rGrabber ? scope.rGrabber : '<span></span>',
                    start,
                    dragDir,
                    axis,
                    info = {};

                var updateInfo = function (e) {
                    info.width = false; info.height = false;
                    if (axis === 'x')
                        info.width = parseInt(element[0].style[scope.rFlex ? flexBasis : 'width']);
                    else
                        info.height = parseInt(element[0].style[scope.rFlex ? flexBasis : 'height']);
                    info.id = element[0].id;
                    info.evt = e;
                };

                var getClientX = function (e) {
                    return e.touches ? e.touches[0].clientX : e.clientX;
                };

                var getClientY = function (e) {
                    return e.touches ? e.touches[0].clientY : e.clientY;
                };

                var dragging = function (e) {
                    var prop, offset = axis === 'x' ? start - getClientX(e) : start - getClientY(e);
                    switch (dragDir) {
                        case 'top':
                            prop = scope.rFlex ? flexBasis : 'height';
                            element[0].style[prop] = h + (offset * vy) + 'px';
                            break;
                        case 'bottom':
                            prop = scope.rFlex ? flexBasis : 'height';
                            element[0].style[prop] = h - (offset * vy) + 'px';
                            break;
                        case 'right':
                            prop = scope.rFlex ? flexBasis : 'width';
                            element[0].style[prop] = w - (offset * vx) + 'px';
                            break;
                        case 'left':
                            prop = scope.rFlex ? flexBasis : 'width';
                            element[0].style[prop] = w + (offset * vx) + 'px';
                            break;
                    }
                    updateInfo(e);
                    function resizingEmit() {
                        scope.$emit('angular-resizable.resizing', info);
                    }
                    if (scope.rNoThrottle) {
                        resizingEmit();
                    } else {
                        throttle(resizingEmit);
                    }
                };
                var dragEnd = function (e) {
                    updateInfo();
                    scope.$emit('angular-resizable.resizeEnd', info);
                    scope.$apply();
                    document.removeEventListener('mouseup', dragEnd, false);
                    document.removeEventListener('mousemove', dragging, false);
                    document.removeEventListener('touchend', dragEnd, false);
                    document.removeEventListener('touchmove', dragging, false);
                    element.removeClass('no-transition');
                };
                var dragStart = function (e, direction) {
                    dragDir = direction;
                    axis = dragDir === 'left' || dragDir === 'right' ? 'x' : 'y';
                    start = axis === 'x' ? getClientX(e) : getClientY(e);
                    w = parseInt(style.getPropertyValue('width'));
                    h = parseInt(style.getPropertyValue('height'));

                    //prevent transition while dragging
                    element.addClass('no-transition');

                    document.addEventListener('mouseup', dragEnd, false);
                    document.addEventListener('mousemove', dragging, false);
                    document.addEventListener('touchend', dragEnd, false);
                    document.addEventListener('touchmove', dragging, false);

                    // Disable highlighting while dragging
                    if (e.stopPropagation) e.stopPropagation();
                    if (e.preventDefault) e.preventDefault();
                    e.cancelBubble = true;
                    e.returnValue = false;

                    updateInfo(e);
                    scope.$emit('angular-resizable.resizeStart', info);
                    scope.$apply();
                };

                dir.forEach(function (direction) {
                    var grabber = document.createElement('div');

                    // add class for styling purposes
                    grabber.setAttribute('class', 'rg-' + direction);
                    grabber.innerHTML = inner;
                    element[0].appendChild(grabber);
                    grabber.ondragstart = function () { return false; };

                    var down = function (e) {
                        var disabled = (scope.rDisabled === 'true');
                        if (!disabled && (e.which === 1 || e.touches)) {
                            // left mouse click or touch screen
                            dragStart(e, direction);
                        }
                    };
                    grabber.addEventListener('mousedown', down, false);
                    grabber.addEventListener('touchstart', down, false);
                });
            }
        };
    });


/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.10
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
!function (l, e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(l.jQuery) }(this, function (l) { "use strict"; function e(e) { if (t.webkit && !e) return { height: 0, width: 0 }; if (!t.data.outer) { var o = { border: "none", "box-sizing": "content-box", height: "200px", margin: "0", padding: "0", width: "200px" }; t.data.inner = l("<div>").css(l.extend({}, o)), t.data.outer = l("<div>").css(l.extend({ left: "-1000px", overflow: "scroll", position: "absolute", top: "-1000px" }, o)).append(t.data.inner).appendTo("body") } return t.data.outer.scrollLeft(1e3).scrollTop(1e3), { height: Math.ceil(t.data.outer.offset().top - t.data.inner.offset().top || 0), width: Math.ceil(t.data.outer.offset().left - t.data.inner.offset().left || 0) } } function o() { var l = e(!0); return !(l.height || l.width) } function s(l) { var e = l.originalEvent; return e.axis && e.axis === e.HORIZONTAL_AXIS ? !1 : e.wheelDeltaX ? !1 : !0 } var r = !1, t = { data: { index: 0, name: "scrollbar" }, macosx: /mac/i.test(navigator.platform), mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent), overlay: null, scroll: null, scrolls: [], webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent) }; t.scrolls.add = function (l) { this.remove(l).push(l) }, t.scrolls.remove = function (e) { for (; l.inArray(e, this) >= 0;) this.splice(l.inArray(e, this), 1); return this }; var i = { autoScrollSize: !0, autoUpdate: !0, debug: !1, disableBodyScroll: !1, duration: 200, ignoreMobile: !1, ignoreOverlay: !1, scrollStep: 30, showArrows: !1, stepScrolling: !0, scrollx: null, scrolly: null, onDestroy: null, onInit: null, onScroll: null, onUpdate: null }, n = function (s) { t.scroll || (t.overlay = o(), t.scroll = e(), a(), l(window).resize(function () { var l = !1; if (t.scroll && (t.scroll.height || t.scroll.width)) { var o = e(); (o.height !== t.scroll.height || o.width !== t.scroll.width) && (t.scroll = o, l = !0) } a(l) })), this.container = s, this.namespace = ".scrollbar_" + t.data.index++, this.options = l.extend({}, i, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, s.data(t.data.name, this), t.scrolls.add(this) }; n.prototype = { destroy: function () { if (this.wrapper) { this.container.removeData(t.data.name), t.scrolls.remove(this); var e = this.container.scrollLeft(), o = this.container.scrollTop(); this.container.insertBefore(this.wrapper).css({ height: "", margin: "", "max-height": "" }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(o), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace), this.wrapper.remove(), l(document).add("body").off(this.namespace), l.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container]) } }, init: function (e) { var o = this, r = this.container, i = this.containerWrapper || r, n = this.namespace, c = l.extend(this.options, e || {}), a = { x: this.scrollx, y: this.scrolly }, d = this.wrapper, h = { scrollLeft: r.scrollLeft(), scrollTop: r.scrollTop() }; if (t.mobile && c.ignoreMobile || t.overlay && c.ignoreOverlay || t.macosx && !t.webkit) return !1; if (d) i.css({ height: "auto", "margin-bottom": -1 * t.scroll.height + "px", "margin-right": -1 * t.scroll.width + "px", "max-height": "" }); else { if (this.wrapper = d = l("<div>").addClass("scroll-wrapper").addClass(r.attr("class")).css("position", "absolute" == r.css("position") ? "absolute" : "relative").insertBefore(r).append(r), r.is("textarea") && (this.containerWrapper = i = l("<div>").insertBefore(r).append(r), d.addClass("scroll-textarea")), i.addClass("scroll-content").css({ height: "auto", "margin-bottom": -1 * t.scroll.height + "px", "margin-right": -1 * t.scroll.width + "px", "max-height": "" }), r.on("scroll" + n, function (e) { l.isFunction(c.onScroll) && c.onScroll.call(o, { maxScroll: a.y.maxScrollOffset, scroll: r.scrollTop(), size: a.y.size, visible: a.y.visible }, { maxScroll: a.x.maxScrollOffset, scroll: r.scrollLeft(), size: a.x.size, visible: a.x.visible }), a.x.isVisible && a.x.scroll.bar.css("left", r.scrollLeft() * a.x.kx + "px"), a.y.isVisible && a.y.scroll.bar.css("top", r.scrollTop() * a.y.kx + "px") }), d.on("scroll" + n, function () { d.scrollTop(0).scrollLeft(0) }), c.disableBodyScroll) { var p = function (l) { s(l) ? a.y.isVisible && a.y.mousewheel(l) : a.x.isVisible && a.x.mousewheel(l) }; d.on("MozMousePixelScroll" + n, p), d.on("mousewheel" + n, p), t.mobile && d.on("touchstart" + n, function (e) { var o = e.originalEvent.touches && e.originalEvent.touches[0] || e, s = { pageX: o.pageX, pageY: o.pageY }, t = { left: r.scrollLeft(), top: r.scrollTop() }; l(document).on("touchmove" + n, function (l) { var e = l.originalEvent.targetTouches && l.originalEvent.targetTouches[0] || l; r.scrollLeft(t.left + s.pageX - e.pageX), r.scrollTop(t.top + s.pageY - e.pageY), l.preventDefault() }), l(document).on("touchend" + n, function () { l(document).off(n) }) }) } l.isFunction(c.onInit) && c.onInit.apply(this, [r]) } l.each(a, function (e, t) { var i = null, d = 1, h = "x" === e ? "scrollLeft" : "scrollTop", p = c.scrollStep, u = function () { var l = r[h](); r[h](l + p), 1 == d && l + p >= f && (l = r[h]()), -1 == d && f >= l + p && (l = r[h]()), r[h]() == l && i && i() }, f = 0; t.scroll || (t.scroll = o._getScroll(c["scroll" + e]).addClass("scroll-" + e), c.showArrows && t.scroll.addClass("scroll-element_arrows_visible"), t.mousewheel = function (l) { if (!t.isVisible || "x" === e && s(l)) return !0; if ("y" === e && !s(l)) return a.x.mousewheel(l), !0; var i = -1 * l.originalEvent.wheelDelta || l.originalEvent.detail, n = t.size - t.visible - t.offset; return (i > 0 && n > f || 0 > i && f > 0) && (f += i, 0 > f && (f = 0), f > n && (f = n), o.scrollTo = o.scrollTo || {}, o.scrollTo[h] = f, setTimeout(function () { o.scrollTo && (r.stop().animate(o.scrollTo, 240, "linear", function () { f = r[h]() }), o.scrollTo = null) }, 1)), l.preventDefault(), !1 }, t.scroll.on("MozMousePixelScroll" + n, t.mousewheel).on("mousewheel" + n, t.mousewheel).on("mouseenter" + n, function () { f = r[h]() }), t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + n, function (s) { if (1 != s.which) return !0; d = 1; var n = { eventOffset: s["x" === e ? "pageX" : "pageY"], maxScrollValue: t.size - t.visible - t.offset, scrollbarOffset: t.scroll.bar.offset()["x" === e ? "left" : "top"], scrollbarSize: t.scroll.bar["x" === e ? "outerWidth" : "outerHeight"]() }, a = 0, v = 0; return l(this).hasClass("scroll-arrow") ? (d = l(this).hasClass("scroll-arrow_more") ? 1 : -1, p = c.scrollStep * d, f = d > 0 ? n.maxScrollValue : 0) : (d = n.eventOffset > n.scrollbarOffset + n.scrollbarSize ? 1 : n.eventOffset < n.scrollbarOffset ? -1 : 0, p = Math.round(.75 * t.visible) * d, f = n.eventOffset - n.scrollbarOffset - (c.stepScrolling ? 1 == d ? n.scrollbarSize : 0 : Math.round(n.scrollbarSize / 2)), f = r[h]() + f / t.kx), o.scrollTo = o.scrollTo || {}, o.scrollTo[h] = c.stepScrolling ? r[h]() + p : f, c.stepScrolling && (i = function () { f = r[h](), clearInterval(v), clearTimeout(a), a = 0, v = 0 }, a = setTimeout(function () { v = setInterval(u, 40) }, c.duration + 100)), setTimeout(function () { o.scrollTo && (r.animate(o.scrollTo, c.duration), o.scrollTo = null) }, 1), o._handleMouseDown(i, s) }), t.scroll.bar.on("mousedown" + n, function (s) { if (1 != s.which) return !0; var i = s["x" === e ? "pageX" : "pageY"], c = r[h](); return t.scroll.addClass("scroll-draggable"), l(document).on("mousemove" + n, function (l) { var o = parseInt((l["x" === e ? "pageX" : "pageY"] - i) / t.kx, 10); r[h](c + o) }), o._handleMouseDown(function () { t.scroll.removeClass("scroll-draggable"), f = r[h]() }, s) })) }), l.each(a, function (l, e) { var o = "scroll-scroll" + l + "_visible", s = "x" == l ? a.y : a.x; e.scroll.removeClass(o), s.scroll.removeClass(o), i.removeClass(o) }), l.each(a, function (e, o) { l.extend(o, "x" == e ? { offset: parseInt(r.css("left"), 10) || 0, size: r.prop("scrollWidth"), visible: d.width() } : { offset: parseInt(r.css("top"), 10) || 0, size: r.prop("scrollHeight"), visible: d.height() }) }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), l.isFunction(c.onUpdate) && c.onUpdate.apply(this, [r]), l.each(a, function (l, e) { var o = "x" === l ? "left" : "top", s = "x" === l ? "outerWidth" : "outerHeight", t = "x" === l ? "width" : "height", i = parseInt(r.css(o), 10) || 0, n = e.size, a = e.visible + i, d = e.scroll.size[s]() + (parseInt(e.scroll.size.css(o), 10) || 0); c.autoScrollSize && (e.scrollbarSize = parseInt(d * a / n, 10), e.scroll.bar.css(t, e.scrollbarSize + "px")), e.scrollbarSize = e.scroll.bar[s](), e.kx = (d - e.scrollbarSize) / (n - a) || 1, e.maxScrollOffset = n - a }), r.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll") }, _getScroll: function (e) { var o = { advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""), simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("") }; return o[e] && (e = o[e]), e || (e = o.simple), e = "string" == typeof e ? l(e).appendTo(this.wrapper) : l(e), l.extend(e, { bar: e.find(".scroll-bar"), size: e.find(".scroll-element_size"), track: e.find(".scroll-element_track") }), e }, _handleMouseDown: function (e, o) { var s = this.namespace; return l(document).on("blur" + s, function () { l(document).add("body").off(s), e && e() }), l(document).on("dragstart" + s, function (l) { return l.preventDefault(), !1 }), l(document).on("mouseup" + s, function () { l(document).add("body").off(s), e && e() }), l("body").on("selectstart" + s, function (l) { return l.preventDefault(), !1 }), o && o.preventDefault(), !1 }, _updateScroll: function (e, o) { var s = this.container, r = this.containerWrapper || s, i = "scroll-scroll" + e + "_visible", n = "x" === e ? this.scrolly : this.scrollx, c = parseInt(this.container.css("x" === e ? "left" : "top"), 10) || 0, a = this.wrapper, d = o.size, h = o.visible + c; o.isVisible = d - h > 1, o.isVisible ? (o.scroll.addClass(i), n.scroll.addClass(i), r.addClass(i)) : (o.scroll.removeClass(i), n.scroll.removeClass(i), r.removeClass(i)), "y" === e && (s.is("textarea") || h > d ? r.css({ height: h + t.scroll.height + "px", "max-height": "none" }) : r.css({ "max-height": h + t.scroll.height + "px" })), (o.size != s.prop("scrollWidth") || n.size != s.prop("scrollHeight") || o.visible != a.width() || n.visible != a.height() || o.offset != (parseInt(s.css("left"), 10) || 0) || n.offset != (parseInt(s.css("top"), 10) || 0)) && (l.extend(this.scrollx, { offset: parseInt(s.css("left"), 10) || 0, size: s.prop("scrollWidth"), visible: a.width() }), l.extend(this.scrolly, { offset: parseInt(s.css("top"), 10) || 0, size: this.container.prop("scrollHeight"), visible: a.height() }), this._updateScroll("x" === e ? "y" : "x", n)) } }; var c = n; l.fn.scrollbar = function (e, o) { return "string" != typeof e && (o = e, e = "init"), "undefined" == typeof o && (o = []), l.isArray(o) || (o = [o]), this.not("body, .scroll-wrapper").each(function () { var s = l(this), r = s.data(t.data.name); (r || "init" === e) && (r || (r = new c(s)), r[e] && r[e].apply(r, o)) }), this }, l.fn.scrollbar.options = i; var a = function () { var l = 0, e = 0; return function (o) { var s, i, n, c, d, h, p; for (s = 0; s < t.scrolls.length; s++) c = t.scrolls[s], i = c.container, n = c.options, d = c.wrapper, h = c.scrollx, p = c.scrolly, (o || n.autoUpdate && d && d.is(":visible") && (i.prop("scrollWidth") != h.size || i.prop("scrollHeight") != p.size || d.width() != h.visible || d.height() != p.visible)) && (c.init(), n.debug && (window.console && console.log({ scrollHeight: i.prop("scrollHeight") + ":" + c.scrolly.size, scrollWidth: i.prop("scrollWidth") + ":" + c.scrollx.size, visibleHeight: d.height() + ":" + c.scrolly.visible, visibleWidth: d.width() + ":" + c.scrollx.visible }, !0), e++)); r && e > 10 ? (window.console && console.log("Scroll updates exceed 10"), a = function () { }) : (clearTimeout(l), l = setTimeout(a, 300)) } }(); window.angular && !function (l) { l.module("jQueryScrollbar", []).provider("jQueryScrollbar", function () { var e = i; return { setOptions: function (o) { l.extend(e, o) }, $get: function () { return { options: l.copy(e) } } } }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function (l, e) { return { restrict: "AC", link: function (o, s, r) { var t = e(r.jqueryScrollbar), i = t(o); s.scrollbar(i || l.options).on("$destroy", function () { s.scrollbar("destroy") }) } } }]) }(window.angular) });