﻿/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a, b) {
	function cy(a) {
		return f.isWindow(a) ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: !1
	}
	function cu(a) {
		if (!cj[a]) {
			var b = c.body,
			d = f("<" + a + ">").appendTo(b),
			e = d.css("display");
			d.remove();
			if (e === "none" || e === "") {
				ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0),
				b.appendChild(ck);
				if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document,
				cl.write((f.support.boxModel ? "<!doctype html>": "") + "<html><body>"),
				cl.close();
				d = cl.createElement(a),
				cl.body.appendChild(d),
				e = f.css(d, "display"),
				b.removeChild(ck)
			}
			cj[a] = e
		}
		return cj[a]
	}
	function ct(a, b) {
		var c = {};
		f.each(cp.concat.apply([], cp.slice(0, b)),
		function() {
			c[this] = a
		});
		return c
	}
	function cs() {
		cq = b
	}
	function cr() {
		setTimeout(cs, 0);
		return cq = f.now()
	}
	function ci() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch(b) {}
	}
	function ch() {
		try {
			return new a.XMLHttpRequest
		} catch(b) {}
	}
	function cb(a, c) {
		a.dataFilter && (c = a.dataFilter(c, a.dataType));
		var d = a.dataTypes,
		e = {},
		g, h, i = d.length,
		j, k = d[0],
		l,
		m,
		n,
		o,
		p;
		for (g = 1; g < i; g++) {
			if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
			l = k,
			k = d[g];
			if (k === "*") k = l;
			else if (l !== "*" && l !== k) {
				m = l + " " + k,
				n = e[m] || e["* " + k];
				if (!n) {
					p = b;
					for (o in e) {
						j = o.split(" ");
						if (j[0] === l || j[0] === "*") {
							p = e[j[1] + " " + k];
							if (p) {
								o = e[o],
								o === !0 ? n = p: p === !0 && (n = o);
								break
							}
						}
					}
				} ! n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
				n !== !0 && (c = n ? n(c) : p(o(c)))
			}
		}
		return c
	}
	function ca(a, c, d) {
		var e = a.contents,
		f = a.dataTypes,
		g = a.responseFields,
		h, i, j, k;
		for (i in g) i in d && (c[g[i]] = d[i]);
		while (f[0] === "*") f.shift(),
		h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
		if (h) for (i in e) if (e[i] && e[i].test(h)) {
			f.unshift(i);
			break
		}
		if (f[0] in d) j = f[0];
		else {
			for (i in d) {
				if (!f[0] || a.converters[i + " " + f[0]]) {
					j = i;
					break
				}
				k || (k = i)
			}
			j = j || k
		}
		if (j) {
			j !== f[0] && f.unshift(j);
			return d[j]
		}
	}
	function b_(a, b, c, d) {
		if (f.isArray(b)) f.each(b,
		function(b, e) {
			c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b: "") + "]", e, c, d)
		});
		else if (!c && f.type(b) === "object") for (var e in b) b_(a + "[" + e + "]", b[e], c, d);
		else d(a, b)
	}
	function b$(a, c) {
		var d, e, g = f.ajaxSettings.flatOptions || {};
		for (d in c) c[d] !== b && ((g[d] ? a: e || (e = {}))[d] = c[d]);
		e && f.extend(!0, a, e)
	}
	function bZ(a, c, d, e, f, g) {
		f = f || c.dataTypes[0],
		g = g || {},
		g[f] = !0;
		var h = a[f],
		i = 0,
		j = h ? h.length: 0,
		k = a === bS,
		l;
		for (; i < j && (k || !l); i++) l = h[i](c, d, e),
		typeof l == "string" && (!k || g[l] ? l = b: (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g))); (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
		return l
	}
	function bY(a) {
		return function(b, c) {
			typeof b != "string" && (c = b, b = "*");
			if (f.isFunction(c)) {
				var d = b.toLowerCase().split(bO),
				e = 0,
				g = d.length,
				h,
				i,
				j;
				for (; e < g; e++) h = d[e],
				j = /^\+/.test(h),
				j && (h = h.substr(1) || "*"),
				i = a[h] = a[h] || [],
				i[j ? "unshift": "push"](c)
			}
		}
	}
	function bB(a, b, c) {
		var d = b === "width" ? a.offsetWidth: a.offsetHeight,
		e = b === "width" ? 1 : 0,
		g = 4;
		if (d > 0) {
			if (c !== "border") for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0),
			c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
			return d + "px"
		}
		d = by(a, b);
		if (d < 0 || d == null) d = a.style[b];
		if (bt.test(d)) return d;
		d = parseFloat(d) || 0;
		if (c) for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0,
		c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0),
		c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
		return d + "px"
	}
	function bo(a) {
		var b = c.createElement("div");
		bh.appendChild(b),
		b.innerHTML = a.outerHTML;
		return b.firstChild
	}
	function bn(a) {
		var b = (a.nodeName || "").toLowerCase();
		b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
	}
	function bm(a) {
		if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
	}
	function bl(a) {
		return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
	}
	function bk(a, b) {
		var c;
		b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML: c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected: c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue: c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
	}
	function bj(a, b) {
		if (b.nodeType === 1 && !!f.hasData(a)) {
			var c, d, e, g = f._data(a),
			h = f._data(b, g),
			i = g.events;
			if (i) {
				delete h.handle,
				h.events = {};
				for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
			}
			h.data && (h.data = f.extend({},
			h.data))
		}
	}
	function bi(a, b) {
		return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function U(a) {
		var b = V.split("|"),
		c = a.createDocumentFragment();
		if (c.createElement) while (b.length) c.createElement(b.pop());
		return c
	}
	function T(a, b, c) {
		b = b || 0;
		if (f.isFunction(b)) return f.grep(a,
		function(a, d) {
			var e = !!b.call(a, d, a);
			return e === c
		});
		if (b.nodeType) return f.grep(a,
		function(a, d) {
			return a === b === c
		});
		if (typeof b == "string") {
			var d = f.grep(a,
			function(a) {
				return a.nodeType === 1
			});
			if (O.test(b)) return f.filter(b, d, !c);
			b = f.filter(b, d)
		}
		return f.grep(a,
		function(a, d) {
			return f.inArray(a, b) >= 0 === c
		})
	}
	function S(a) {
		return ! a || !a.parentNode || a.parentNode.nodeType === 11
	}
	function K() {
		return ! 0
	}
	function J() {
		return ! 1
	}
	function n(a, b, c) {
		var d = b + "defer",
		e = b + "queue",
		g = b + "mark",
		h = f._data(a, d);
		h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() { ! f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
		},
		0)
	}
	function m(a) {
		for (var b in a) {
			if (b === "data" && f.isEmptyObject(a[b])) continue;
			if (b !== "toJSON") return ! 1
		}
		return ! 0
	}
	function l(a, c, d) {
		if (d === b && a.nodeType === 1) {
			var e = "data-" + c.replace(k, "-$1").toLowerCase();
			d = a.getAttribute(e);
			if (typeof d == "string") {
				try {
					d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null: f.isNumeric(d) ? +d: j.test(d) ? f.parseJSON(d) : d
				} catch(g) {}
				f.data(a, c, d)
			} else d = b
		}
		return d
	}
	function h(a) {
		var b = g[a] = {},
		c,
		d;
		a = a.split(/\s+/);
		for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
		return b
	}
	var c = a.document,
	d = a.navigator,
	e = a.location,
	f = function() {
		function J() {
			if (!e.isReady) {
				try {
					c.documentElement.doScroll("left")
				} catch(a) {
					setTimeout(J, 1);
					return
				}
				e.ready()
			}
		}
		var e = function(a, b) {
			return new e.fn.init(a, b, h)
		},
		f = a.jQuery,
		g = a.$,
		h,
		i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		j = /\S/,
		k = /^\s+/,
		l = /\s+$/,
		m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
		n = /^[\],:{}\s]*$/,
		o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
		p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		q = /(?:^|:|,)(?:\s*\[)+/g,
		r = /(webkit)[ \/]([\w.]+)/,
		s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
		t = /(msie) ([\w.]+)/,
		u = /(mozilla)(?:.*? rv:([\w.]+))?/,
		v = /-([a-z]|[0-9])/ig,
		w = /^-ms-/,
		x = function(a, b) {
			return (b + "").toUpperCase()
		},
		y = d.userAgent,
		z,
		A,
		B,
		C = Object.prototype.toString,
		D = Object.prototype.hasOwnProperty,
		E = Array.prototype.push,
		F = Array.prototype.slice,
		G = String.prototype.trim,
		H = Array.prototype.indexOf,
		I = {};
		e.fn = e.prototype = {
			constructor: e,
			init: function(a, d, f) {
				var g, h, j, k;
				if (!a) return this;
				if (a.nodeType) {
					this.context = this[0] = a,
					this.length = 1;
					return this
				}
				if (a === "body" && !d && c.body) {
					this.context = c,
					this[0] = c.body,
					this.selector = a,
					this.length = 1;
					return this
				}
				if (typeof a == "string") {
					a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
					if (g && (g[1] || !d)) {
						if (g[1]) {
							d = d instanceof e ? d[0] : d,
							k = d ? d.ownerDocument || d: c,
							j = m.exec(a),
							j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
							return e.merge(this, a)
						}
						h = c.getElementById(g[2]);
						if (h && h.parentNode) {
							if (h.id !== g[2]) return f.find(a);
							this.length = 1,
							this[0] = h
						}
						this.context = c,
						this.selector = a;
						return this
					}
					return ! d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
				}
				if (e.isFunction(a)) return f.ready(a);
				a.selector !== b && (this.selector = a.selector, this.context = a.context);
				return e.makeArray(a, this)
			},
			selector: "",
			jquery: "1.7.2",
			length: 0,
			size: function() {
				return this.length
			},
			toArray: function() {
				return F.call(this, 0)
			},
			get: function(a) {
				return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
			},
			pushStack: function(a, b, c) {
				var d = this.constructor();
				e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
				d.prevObject = this,
				d.context = this.context,
				b === "find" ? d.selector = this.selector + (this.selector ? " ": "") + c: b && (d.selector = this.selector + "." + b + "(" + c + ")");
				return d
			},
			each: function(a, b) {
				return e.each(this, a, b)
			},
			ready: function(a) {
				e.bindReady(),
				A.add(a);
				return this
			},
			eq: function(a) {
				a = +a;
				return a === -1 ? this.slice(a) : this.slice(a, a + 1)
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq( - 1)
			},
			slice: function() {
				return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
			},
			map: function(a) {
				return this.pushStack(e.map(this,
				function(b, c) {
					return a.call(b, c, b)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: E,
			sort: [].sort,
			splice: [].splice
		},
		e.fn.init.prototype = e.fn,
		e.extend = e.fn.extend = function() {
			var a, c, d, f, g, h, i = arguments[0] || {},
			j = 1,
			k = arguments.length,
			l = !1;
			typeof i == "boolean" && (l = i, i = arguments[1] || {},
			j = 2),
			typeof i != "object" && !e.isFunction(i) && (i = {}),
			k === j && (i = this, --j);
			for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
				d = i[c],
				f = a[c];
				if (i === f) continue;
				l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d: []) : h = d && e.isPlainObject(d) ? d: {},
				i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
			}
			return i
		},
		e.extend({
			noConflict: function(b) {
				a.$ === e && (a.$ = g),
				b && a.jQuery === e && (a.jQuery = f);
				return e
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(a) {
				a ? e.readyWait++:e.ready(!0)
			},
			ready: function(a) {
				if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
					if (!c.body) return setTimeout(e.ready, 1);
					e.isReady = !0;
					if (a !== !0 && --e.readyWait > 0) return;
					A.fireWith(c, [e]),
					e.fn.trigger && e(c).trigger("ready").off("ready")
				}
			},
			bindReady: function() {
				if (!A) {
					A = e.Callbacks("once memory");
					if (c.readyState === "complete") return setTimeout(e.ready, 1);
					if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1),
					a.addEventListener("load", e.ready, !1);
					else if (c.attachEvent) {
						c.attachEvent("onreadystatechange", B),
						a.attachEvent("onload", e.ready);
						var b = !1;
						try {
							b = a.frameElement == null
						} catch(d) {}
						c.documentElement.doScroll && b && J()
					}
				}
			},
			isFunction: function(a) {
				return e.type(a) === "function"
			},
			isArray: Array.isArray ||
			function(a) {
				return e.type(a) === "array"
			},
			isWindow: function(a) {
				return a != null && a == a.window
			},
			isNumeric: function(a) {
				return ! isNaN(parseFloat(a)) && isFinite(a)
			},
			type: function(a) {
				return a == null ? String(a) : I[C.call(a)] || "object"
			},
			isPlainObject: function(a) {
				if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return ! 1;
				try {
					if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
				} catch(c) {
					return ! 1
				}
				var d;
				for (d in a);
				return d === b || D.call(a, d)
			},
			isEmptyObject: function(a) {
				for (var b in a) return ! 1;
				return ! 0
			},
			error: function(a) {
				throw new Error(a)
			},
			parseJSON: function(b) {
				if (typeof b != "string" || !b) return null;
				b = e.trim(b);
				if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
				if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
				e.error("Invalid JSON: " + b)
			},
			parseXML: function(c) {
				if (typeof c != "string" || !c) return null;
				var d, f;
				try {
					a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
				} catch(g) {
					d = b
				} (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
				return d
			},
			noop: function() {},
			globalEval: function(b) {
				b && j.test(b) && (a.execScript ||
				function(b) {
					a.eval.call(a, b)
				})(b)
			},
			camelCase: function(a) {
				return a.replace(w, "ms-").replace(v, x)
			},
			nodeName: function(a, b) {
				return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
			},
			each: function(a, c, d) {
				var f, g = 0,
				h = a.length,
				i = h === b || e.isFunction(a);
				if (d) {
					if (i) {
						for (f in a) if (c.apply(a[f], d) === !1) break
					} else for (; g < h;) if (c.apply(a[g++], d) === !1) break
				} else if (i) {
					for (f in a) if (c.call(a[f], f, a[f]) === !1) break
				} else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
				return a
			},
			trim: G ?
			function(a) {
				return a == null ? "": G.call(a)
			}: function(a) {
				return a == null ? "": (a + "").replace(k, "").replace(l, "")
			},
			makeArray: function(a, b) {
				var c = b || [];
				if (a != null) {
					var d = e.type(a);
					a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
				}
				return c
			},
			inArray: function(a, b, c) {
				var d;
				if (b) {
					if (H) return H.call(b, a, c);
					d = b.length,
					c = c ? c < 0 ? Math.max(0, d + c) : c: 0;
					for (; c < d; c++) if (c in b && b[c] === a) return c
				}
				return - 1
			},
			merge: function(a, c) {
				var d = a.length,
				e = 0;
				if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
				else while (c[e] !== b) a[d++] = c[e++];
				a.length = d;
				return a
			},
			grep: function(a, b, c) {
				var d = [],
				e;
				c = !!c;
				for (var f = 0,
				g = a.length; f < g; f++) e = !!b(a[f], f),
				c !== e && d.push(a[f]);
				return d
			},
			map: function(a, c, d) {
				var f, g, h = [],
				i = 0,
				j = a.length,
				k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
				if (k) for (; i < j; i++) f = c(a[i], i, d),
				f != null && (h[h.length] = f);
				else for (g in a) f = c(a[g], g, d),
				f != null && (h[h.length] = f);
				return h.concat.apply([], h)
			},
			guid: 1,
			proxy: function(a, c) {
				if (typeof c == "string") {
					var d = a[c];
					c = a,
					a = d
				}
				if (!e.isFunction(a)) return b;
				var f = F.call(arguments, 2),
				g = function() {
					return a.apply(c, f.concat(F.call(arguments)))
				};
				g.guid = a.guid = a.guid || g.guid || e.guid++;
				return g
			},
			access: function(a, c, d, f, g, h, i) {
				var j, k = d == null,
				l = 0,
				m = a.length;
				if (d && typeof d == "object") {
					for (l in d) e.access(a, c, l, d[l], 1, h, f);
					g = 1
				} else if (f !== b) {
					j = i === b && e.isFunction(f),
					k && (j ? (j = c, c = function(a, b, c) {
						return j.call(e(a), c)
					}) : (c.call(a, f), c = null));
					if (c) for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
					g = 1
				}
				return g ? a: k ? c.call(a) : m ? c(a[0], d) : h
			},
			now: function() {
				return (new Date).getTime()
			},
			uaMatch: function(a) {
				a = a.toLowerCase();
				var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
				return {
					browser: b[1] || "",
					version: b[2] || "0"
				}
			},
			sub: function() {
				function a(b, c) {
					return new a.fn.init(b, c)
				}
				e.extend(!0, a, this),
				a.superclass = this,
				a.fn = a.prototype = this(),
				a.fn.constructor = a,
				a.sub = this.sub,
				a.fn.init = function(d, f) {
					f && f instanceof e && !(f instanceof a) && (f = a(f));
					return e.fn.init.call(this, d, f, b)
				},
				a.fn.init.prototype = a.fn;
				var b = a(c);
				return a
			},
			browser: {}
		}),
		e.each("Boolean Number String Function Array Date RegExp Object".split(" "),
		function(a, b) {
			I["[object " + b + "]"] = b.toLowerCase()
		}),
		z = e.uaMatch(y),
		z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version),
		e.browser.webkit && (e.browser.safari = !0),
		j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/),
		h = e(c),
		c.addEventListener ? B = function() {
			c.removeEventListener("DOMContentLoaded", B, !1),
			e.ready()
		}: c.attachEvent && (B = function() {
			c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
		});
		return e
	} (),
	g = {};
	f.Callbacks = function(a) {
		a = a ? g[a] || h(a) : {};
		var c = [],
		d = [],
		e,
		i,
		j,
		k,
		l,
		m,
		n = function(b) {
			var d, e, g, h, i;
			for (d = 0, e = b.length; d < e; d++) g = b[d],
			h = f.type(g),
			h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
		},
		o = function(b, f) {
			f = f || [],
			e = !a.memory || [b, f],
			i = !0,
			j = !0,
			m = k || 0,
			k = 0,
			l = c.length;
			for (; c && m < l; m++) if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
				e = !0;
				break
			}
			j = !1,
			c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
		},
		p = {
			add: function() {
				if (c) {
					var a = c.length;
					n(arguments),
					j ? l = c.length: e && e !== !0 && (k = a, o(e[0], e[1]))
				}
				return this
			},
			remove: function() {
				if (c) {
					var b = arguments,
					d = 0,
					e = b.length;
					for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) {
						j && f <= l && (l--, f <= m && m--),
						c.splice(f--, 1);
						if (a.unique) break
					}
				}
				return this
			},
			has: function(a) {
				if (c) {
					var b = 0,
					d = c.length;
					for (; b < d; b++) if (a === c[b]) return ! 0
				}
				return ! 1
			},
			empty: function() {
				c = [];
				return this
			},
			disable: function() {
				c = d = e = b;
				return this
			},
			disabled: function() {
				return ! c
			},
			lock: function() {
				d = b,
				(!e || e === !0) && p.disable();
				return this
			},
			locked: function() {
				return ! d
			},
			fireWith: function(b, c) {
				d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
				return this
			},
			fire: function() {
				p.fireWith(this, arguments);
				return this
			},
			fired: function() {
				return !! i
			}
		};
		return p
	};
	var i = [].slice;
	f.extend({
		Deferred: function(a) {
			var b = f.Callbacks("once memory"),
			c = f.Callbacks("once memory"),
			d = f.Callbacks("memory"),
			e = "pending",
			g = {
				resolve: b,
				reject: c,
				notify: d
			},
			h = {
				done: b.add,
				fail: c.add,
				progress: d.add,
				state: function() {
					return e
				},
				isResolved: b.fired,
				isRejected: c.fired,
				then: function(a, b, c) {
					i.done(a).fail(b).progress(c);
					return this
				},
				always: function() {
					i.done.apply(i, arguments).fail.apply(i, arguments);
					return this
				},
				pipe: function(a, b, c) {
					return f.Deferred(function(d) {
						f.each({
							done: [a, "resolve"],
							fail: [b, "reject"],
							progress: [c, "notify"]
						},
						function(a, b) {
							var c = b[0],
							e = b[1],
							g;
							f.isFunction(c) ? i[a](function() {
								g = c.apply(this, arguments),
								g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d: this, [g])
							}) : i[a](d[e])
						})
					}).promise()
				},
				promise: function(a) {
					if (a == null) a = h;
					else for (var b in h) a[b] = h[b];
					return a
				}
			},
			i = h.promise({}),
			j;
			for (j in g) i[j] = g[j].fire,
			i[j + "With"] = g[j].fireWith;
			i.done(function() {
				e = "resolved"
			},
			c.disable, d.lock).fail(function() {
				e = "rejected"
			},
			b.disable, d.lock),
			a && a.call(i, i);
			return i
		},
		when: function(a) {
			function m(a) {
				return function(b) {
					e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,
					j.notifyWith(k, e)
				}
			}
			function l(a) {
				return function(c) {
					b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,
					--g || j.resolveWith(j, b)
				}
			}
			var b = i.call(arguments, 0),
			c = 0,
			d = b.length,
			e = Array(d),
			g = d,
			h = d,
			j = d <= 1 && a && f.isFunction(a.promise) ? a: f.Deferred(),
			k = j.promise();
			if (d > 1) {
				for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
				g || j.resolveWith(j, b)
			} else j !== a && j.resolveWith(j, d ? [a] : []);
			return k
		}
	}),
	f.support = function() {
		var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
		q = c.documentElement;
		p.setAttribute("className", "t"),
		p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
		d = p.getElementsByTagName("*"),
		e = p.getElementsByTagName("a")[0];
		if (!d || !d.length || !e) return {};
		g = c.createElement("select"),
		h = g.appendChild(c.createElement("option")),
		i = p.getElementsByTagName("input")[0],
		b = {
			leadingWhitespace: p.firstChild.nodeType === 3,
			tbody: !p.getElementsByTagName("tbody").length,
			htmlSerialize: !!p.getElementsByTagName("link").length,
			style: /top/.test(e.getAttribute("style")),
			hrefNormalized: e.getAttribute("href") === "/a",
			opacity: /^0.55/.test(e.style.opacity),
			cssFloat: !!e.style.cssFloat,
			checkOn: i.value === "on",
			optSelected: h.selected,
			getSetAttribute: p.className !== "t",
			enctype: !!c.createElement("form").enctype,
			html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			pixelMargin: !0
		},
		f.boxModel = b.boxModel = c.compatMode === "CSS1Compat",
		i.checked = !0,
		b.noCloneChecked = i.cloneNode(!0).checked,
		g.disabled = !0,
		b.optDisabled = !h.disabled;
		try {
			delete p.test
		} catch(r) {
			b.deleteExpando = !1
		} ! p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick",
		function() {
			b.noCloneEvent = !1
		}), p.cloneNode(!0).fireEvent("onclick")),
		i = c.createElement("input"),
		i.value = "t",
		i.setAttribute("type", "radio"),
		b.radioValue = i.value === "t",
		i.setAttribute("checked", "checked"),
		i.setAttribute("name", "t"),
		p.appendChild(i),
		j = c.createDocumentFragment(),
		j.appendChild(p.lastChild),
		b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked,
		b.appendChecked = i.checked,
		j.removeChild(i),
		j.appendChild(p);
		if (p.attachEvent) for (n in {
			submit: 1,
			change: 1,
			focusin: 1
		}) m = "on" + n,
		o = m in p,
		o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"),
		b[n + "Bubbles"] = o;
		j.removeChild(p),
		j = g = h = p = i = null,
		f(function() {
			var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0]; ! u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
				marginRight: 0
			}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
				doesNotAddBorder: g.offsetTop !== 5,
				doesAddBorderForTableAndCells: i.offsetTop === 5
			},
			g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
				marginTop: 0
			}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
		});
		return b
	} ();
	var j = /^(?:\{.*\}|\[.*\])$/,
	k = /([A-Z])/g;
	f.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a) {
			a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
			return !! a && !m(a)
		},
		data: function(a, c, d, e) {
			if ( !! f.acceptData(a)) {
				var g, h, i, j = f.expando,
				k = typeof c == "string",
				l = a.nodeType,
				m = l ? f.cache: a,
				n = l ? a[j] : a[j] && j,
				o = c === "events";
				if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
				n || (l ? a[j] = n = ++f.uuid: n = j),
				m[n] || (m[n] = {},
				l || (m[n].toJSON = f.noop));
				if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
				g = h = m[n],
				e || (h.data || (h.data = {}), h = h.data),
				d !== b && (h[f.camelCase(c)] = d);
				if (o && !h[c]) return g.events;
				k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
				return i
			}
		},
		removeData: function(a, b, c) {
			if ( !! f.acceptData(a)) {
				var d, e, g, h = f.expando,
				i = a.nodeType,
				j = i ? f.cache: a,
				k = i ? a[h] : h;
				if (!j[k]) return;
				if (b) {
					d = c ? j[k] : j[k].data;
					if (d) {
						f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
						for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
						if (! (c ? m: f.isEmptyObject)(d)) return
					}
				}
				if (!c) {
					delete j[k].data;
					if (!m(j[k])) return
				}
				f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
				i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
			}
		},
		_data: function(a, b, c) {
			return f.data(a, b, c, !0)
		},
		acceptData: function(a) {
			if (a.nodeName) {
				var b = f.noData[a.nodeName.toLowerCase()];
				if (b) return b !== !0 && a.getAttribute("classid") === b
			}
			return ! 0
		}
	}),
	f.fn.extend({
		data: function(a, c) {
			var d, e, g, h, i, j = this[0],
			k = 0,
			m = null;
			if (a === b) {
				if (this.length) {
					m = f.data(j);
					if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
						g = j.attributes;
						for (i = g.length; k < i; k++) h = g[k].name,
						h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
						f._data(j, "parsedAttrs", !0)
					}
				}
				return m
			}
			if (typeof a == "object") return this.each(function() {
				f.data(this, a)
			});
			d = a.split(".", 2),
			d[1] = d[1] ? "." + d[1] : "",
			e = d[1] + "!";
			return f.access(this,
			function(c) {
				if (c === b) {
					m = this.triggerHandler("getData" + e, [d[0]]),
					m === b && j && (m = f.data(j, a), m = l(j, a, m));
					return m === b && d[1] ? this.data(d[0]) : m
				}
				d[1] = c,
				this.each(function() {
					var b = f(this);
					b.triggerHandler("setData" + e, d),
					f.data(this, a, c),
					b.triggerHandler("changeData" + e, d)
				})
			},
			null, c, arguments.length > 1, null, !1)
		},
		removeData: function(a) {
			return this.each(function() {
				f.removeData(this, a)
			})
		}
	}),
	f.extend({
		_mark: function(a, b) {
			a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
		},
		_unmark: function(a, b, c) {
			a !== !0 && (c = b, b = a, a = !1);
			if (b) {
				c = c || "fx";
				var d = c + "mark",
				e = a ? 0 : (f._data(b, d) || 1) - 1;
				e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
			}
		},
		queue: function(a, b, c) {
			var d;
			if (a) {
				b = (b || "fx") + "queue",
				d = f._data(a, b),
				c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
				return d || []
			}
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = f.queue(a, b),
			d = c.shift(),
			e = {};
			d === "inprogress" && (d = c.shift()),
			d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a,
			function() {
				f.dequeue(a, b)
			},
			e)),
			c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
		}
	}),
	f.fn.extend({
		queue: function(a, c) {
			var d = 2;
			typeof a != "string" && (c = a, a = "fx", d--);
			if (arguments.length < d) return f.queue(this[0], a);
			return c === b ? this: this.each(function() {
				var b = f.queue(this, a, c);
				a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				f.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			a = f.fx ? f.fx.speeds[a] || a: a,
			b = b || "fx";
			return this.queue(b,
			function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, c) {
			function m() {--h || d.resolveWith(e, [e])
			}
			typeof a != "string" && (c = a, a = b),
			a = a || "fx";
			var d = f.Deferred(),
			e = this,
			g = e.length,
			h = 1,
			i = a + "defer",
			j = a + "queue",
			k = a + "mark",
			l;
			while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++,
			l.add(m);
			m();
			return d.promise(c)
		}
	});
	var o = /[\n\t\r]/g,
	p = /\s+/,
	q = /\r/g,
	r = /^(?:button|input)$/i,
	s = /^(?:button|input|object|select|textarea)$/i,
	t = /^a(?:rea)?$/i,
	u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	v = f.support.getSetAttribute,
	w, x, y;
	f.fn.extend({
		attr: function(a, b) {
			return f.access(this, f.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				f.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return f.access(this, f.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			a = f.propFix[a] || a;
			return this.each(function() {
				try {
					this[a] = b,
					delete this[a]
				} catch(c) {}
			})
		},
		addClass: function(a) {
			var b, c, d, e, g, h, i;
			if (f.isFunction(a)) return this.each(function(b) {
				f(this).addClass(a.call(this, b, this.className))
			});
			if (a && typeof a == "string") {
				b = a.split(p);
				for (c = 0, d = this.length; c < d; c++) {
					e = this[c];
					if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
					else {
						g = " " + e.className + " ";
						for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
						e.className = f.trim(g)
					}
				}
			}
			return this
		},
		removeClass: function(a) {
			var c, d, e, g, h, i, j;
			if (f.isFunction(a)) return this.each(function(b) {
				f(this).removeClass(a.call(this, b, this.className))
			});
			if (a && typeof a == "string" || a === b) {
				c = (a || "").split(p);
				for (d = 0, e = this.length; d < e; d++) {
					g = this[d];
					if (g.nodeType === 1 && g.className) if (a) {
						h = (" " + g.className + " ").replace(o, " ");
						for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
						g.className = f.trim(h)
					} else g.className = ""
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
			d = typeof b == "boolean";
			if (f.isFunction(a)) return this.each(function(c) {
				f(this).toggleClass(a.call(this, c, this.className, b), b)
			});
			return this.each(function() {
				if (c === "string") {
					var e, g = 0,
					h = f(this),
					i = b,
					j = a.split(p);
					while (e = j[g++]) i = d ? i: !h.hasClass(e),
					h[i ? "addClass": "removeClass"](e)
				} else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className),
				this.className = this.className || a === !1 ? "": f._data(this, "__className__") || ""
			})
		},
		hasClass: function(a) {
			var b = " " + a + " ",
			c = 0,
			d = this.length;
			for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return ! 0;
			return ! 1
		},
		val: function(a) {
			var c, d, e, g = this[0]; {
				if ( !! arguments.length) {
					e = f.isFunction(a);
					return this.each(function(d) {
						var g = f(this),
						h;
						if (this.nodeType === 1) {
							e ? h = a.call(this, d, g.val()) : h = a,
							h == null ? h = "": typeof h == "number" ? h += "": f.isArray(h) && (h = f.map(h,
							function(a) {
								return a == null ? "": a + ""
							})),
							c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
							if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
						}
					})
				}
				if (g) {
					c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
					if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
					d = g.value;
					return typeof d == "string" ? d.replace(q, "") : d == null ? "": d
				}
			}
		}
	}),
	f.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return ! b || b.specified ? a.value: a.text
				}
			},
			select: {
				get: function(a) {
					var b, c, d, e, g = a.selectedIndex,
					h = [],
					i = a.options,
					j = a.type === "select-one";
					if (g < 0) return null;
					c = j ? g: 0,
					d = j ? g + 1 : i.length;
					for (; c < d; c++) {
						e = i[c];
						if (e.selected && (f.support.optDisabled ? !e.disabled: e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
							b = f(e).val();
							if (j) return b;
							h.push(b)
						}
					}
					if (j && !h.length && i.length) return f(i[g]).val();
					return h
				},
				set: function(a, b) {
					var c = f.makeArray(b);
					f(a).find("option").each(function() {
						this.selected = f.inArray(f(this).val(), c) >= 0
					}),
					c.length || (a.selectedIndex = -1);
					return c
				}
			}
		},
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(a, c, d, e) {
			var g, h, i, j = a.nodeType;
			if ( !! a && j !== 3 && j !== 8 && j !== 2) {
				if (e && c in f.attrFn) return f(a)[c](d);
				if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
				i = j !== 1 || !f.isXMLDoc(a),
				i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x: w));
				if (d !== b) {
					if (d === null) {
						f.removeAttr(a, c);
						return
					}
					if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
					a.setAttribute(c, "" + d);
					return d
				}
				if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
				g = a.getAttribute(c);
				return g === null ? b: g
			}
		},
		removeAttr: function(a, b) {
			var c, d, e, g, h, i = 0;
			if (b && a.nodeType === 1) {
				d = b.toLowerCase().split(p),
				g = d.length;
				for (; i < g; i++) e = d[i],
				e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e: c), h && c in a && (a[c] = !1))
			}
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
					else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
						var c = a.value;
						a.setAttribute("type", b),
						c && (a.value = c);
						return b
					}
				}
			},
			value: {
				get: function(a, b) {
					if (w && f.nodeName(a, "button")) return w.get(a, b);
					return b in a ? a.value: null
				},
				set: function(a, b, c) {
					if (w && f.nodeName(a, "button")) return w.set(a, b, c);
					a.value = b
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(a, c, d) {
			var e, g, h, i = a.nodeType;
			if ( !! a && i !== 3 && i !== 8 && i !== 2) {
				h = i !== 1 || !f.isXMLDoc(a),
				h && (c = f.propFix[c] || c, g = f.propHooks[c]);
				return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e: a[c] = d: g && "get" in g && (e = g.get(a, c)) !== null ? e: a[c]
			}
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var c = a.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
				}
			}
		}
	}),
	f.attrHooks.tabindex = f.propHooks.tabIndex,
	x = {
		get: function(a, c) {
			var d, e = f.prop(a, c);
			return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
		},
		set: function(a, b, c) {
			var d;
			b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
			return c
		}
	},
	v || (y = {
		name: !0,
		id: !0,
		coords: !0
	},
	w = f.valHooks.button = {
		get: function(a, c) {
			var d;
			d = a.getAttributeNode(c);
			return d && (y[c] ? d.nodeValue !== "": d.specified) ? d.nodeValue: b
		},
		set: function(a, b, d) {
			var e = a.getAttributeNode(d);
			e || (e = c.createAttribute(d), a.setAttributeNode(e));
			return e.nodeValue = b + ""
		}
	},
	f.attrHooks.tabindex.set = w.set, f.each(["width", "height"],
	function(a, b) {
		f.attrHooks[b] = f.extend(f.attrHooks[b], {
			set: function(a, c) {
				if (c === "") {
					a.setAttribute(b, "auto");
					return c
				}
			}
		})
	}), f.attrHooks.contenteditable = {
		get: w.get,
		set: function(a, b, c) {
			b === "" && (b = "false"),
			w.set(a, b, c)
		}
	}),
	f.support.hrefNormalized || f.each(["href", "src", "width", "height"],
	function(a, c) {
		f.attrHooks[c] = f.extend(f.attrHooks[c], {
			get: function(a) {
				var d = a.getAttribute(c, 2);
				return d === null ? b: d
			}
		})
	}),
	f.support.style || (f.attrHooks.style = {
		get: function(a) {
			return a.style.cssText.toLowerCase() || b
		},
		set: function(a, b) {
			return a.style.cssText = "" + b
		}
	}),
	f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
		get: function(a) {
			var b = a.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
			return null
		}
	})),
	f.support.enctype || (f.propFix.enctype = "encoding"),
	f.support.checkOn || f.each(["radio", "checkbox"],
	function() {
		f.valHooks[this] = {
			get: function(a) {
				return a.getAttribute("value") === null ? "on": a.value
			}
		}
	}),
	f.each(["radio", "checkbox"],
	function() {
		f.valHooks[this] = f.extend(f.valHooks[this], {
			set: function(a, b) {
				if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
			}
		})
	});
	var z = /^(?:textarea|input|select)$/i,
	A = /^([^\.]*)?(?:\.(.+))?$/,
	B = /(?:^|\s)hover(\.\S+)?\b/,
	C = /^key/,
	D = /^(?:mouse|contextmenu)|click/,
	E = /^(?:focusinfocus|focusoutblur)$/,
	F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
	G = function(a) {
		var b = F.exec(a);
		b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
		return b
	},
	H = function(a, b) {
		var c = a.attributes || {};
		return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
	},
	I = function(a) {
		return f.event.special.hover ? a: a.replace(B, "mouseenter$1 mouseleave$1")
	};
	f.event = {
		add: function(a, c, d, e, g) {
			var h, i, j, k, l, m, n, o, p, q, r, s;
			if (! (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
				d.handler && (p = d, d = p.handler, g = p.selector),
				d.guid || (d.guid = f.guid++),
				j = h.events,
				j || (h.events = j = {}),
				i = h.handle,
				i || (h.handle = i = function(a) {
					return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
				},
				i.elem = a),
				c = f.trim(I(c)).split(" ");
				for (k = 0; k < c.length; k++) {
					l = A.exec(c[k]) || [],
					m = l[1],
					n = (l[2] || "").split(".").sort(),
					s = f.event.special[m] || {},
					m = (g ? s.delegateType: s.bindType) || m,
					s = f.event.special[m] || {},
					o = f.extend({
						type: m,
						origType: l[1],
						data: e,
						handler: d,
						guid: d.guid,
						selector: g,
						quick: g && G(g),
						namespace: n.join(".")
					},
					p),
					r = j[m];
					if (!r) {
						r = j[m] = [],
						r.delegateCount = 0;
						if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
					}
					s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
					g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
					f.event.global[m] = !0
				}
				a = null
			}
		},
		global: {},
		remove: function(a, b, c, d, e) {
			var g = f.hasData(a) && f._data(a),
			h,
			i,
			j,
			k,
			l,
			m,
			n,
			o,
			p,
			q,
			r,
			s;
			if ( !! g && !!(o = g.events)) {
				b = f.trim(I(b || "")).split(" ");
				for (h = 0; h < b.length; h++) {
					i = A.exec(b[h]) || [],
					j = k = i[1],
					l = i[2];
					if (!j) {
						for (j in o) f.event.remove(a, j + b[h], c, d, !0);
						continue
					}
					p = f.event.special[j] || {},
					j = (d ? p.delegateType: p.bindType) || j,
					r = o[j] || [],
					m = r.length,
					l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
					for (n = 0; n < r.length; n++) s = r[n],
					(e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
					r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
				}
				f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(c, d, e, g) {
			if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
				var h = c.type || c,
				i = [],
				j,
				k,
				l,
				m,
				n,
				o,
				p,
				q,
				r,
				s;
				if (E.test(h + f.event.triggered)) return;
				h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0),
				h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
				if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
				c = typeof c == "object" ? c[f.expando] ? c: new f.Event(h, c) : new f.Event(h),
				c.type = h,
				c.isTrigger = !0,
				c.exclusive = k,
				c.namespace = i.join("."),
				c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
				o = h.indexOf(":") < 0 ? "on" + h: "";
				if (!e) {
					j = f.cache;
					for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
					return
				}
				c.result = b,
				c.target || (c.target = e),
				d = d != null ? f.makeArray(d) : [],
				d.unshift(c),
				p = f.event.special[h] || {};
				if (p.trigger && p.trigger.apply(e, d) === !1) return;
				r = [[e, p.bindType || h]];
				if (!g && !p.noBubble && !f.isWindow(e)) {
					s = p.delegateType || h,
					m = E.test(s + h) ? e: e.parentNode,
					n = null;
					for (; m; m = m.parentNode) r.push([m, s]),
					n = m;
					n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
				}
				for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0],
				c.type = r[l][1],
				q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"),
				q && q.apply(m, d),
				q = o && m[o],
				q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
				c.type = h,
				!g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
				return c.result
			}
		},
		dispatch: function(c) {
			c = f.event.fix(c || a.event);
			var d = (f._data(this, "events") || {})[c.type] || [],
			e = d.delegateCount,
			g = [].slice.call(arguments, 0),
			h = !c.exclusive && !c.namespace,
			i = f.event.special[c.type] || {},
			j = [],
			k,
			l,
			m,
			n,
			o,
			p,
			q,
			r,
			s,
			t,
			u;
			g[0] = c,
			c.delegateTarget = this;
			if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
				if (e && (!c.button || c.type !== "click")) {
					n = f(this),
					n.context = this.ownerDocument || this;
					for (m = c.target; m != this; m = m.parentNode || this) if (m.disabled !== !0) {
						p = {},
						r = [],
						n[0] = m;
						for (k = 0; k < e; k++) s = d[k],
						t = s.selector,
						p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)),
						p[t] && r.push(s);
						r.length && j.push({
							elem: m,
							matches: r
						})
					}
				}
				d.length > e && j.push({
					elem: this,
					matches: d.slice(e)
				});
				for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
					q = j[k],
					c.currentTarget = q.elem;
					for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
						s = q.matches[l];
						if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data,
						c.handleObj = s,
						o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g),
						o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
					}
				}
				i.postDispatch && i.postDispatch.call(this, c);
				return c.result
			}
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				a.which == null && (a.which = b.charCode != null ? b.charCode: b.keyCode);
				return a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, d) {
				var e, f, g, h = d.button,
				i = d.fromElement;
				a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
				!a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement: i),
				!a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
				return a
			}
		},
		fix: function(a) {
			if (a[f.expando]) return a;
			var d, e, g = a,
			h = f.event.fixHooks[a.type] || {},
			i = h.props ? this.props.concat(h.props) : this.props;
			a = f.Event(g);
			for (d = i.length; d;) e = i[--d],
			a[e] = g[e];
			a.target || (a.target = g.srcElement || c),
			a.target.nodeType === 3 && (a.target = a.target.parentNode),
			a.metaKey === b && (a.metaKey = a.ctrlKey);
			return h.filter ? h.filter(a, g) : a
		},
		special: {
			ready: {
				setup: f.bindReady
			},
			load: {
				noBubble: !0
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function(a, b, c) {
					f.isWindow(this) && (this.onbeforeunload = c)
				},
				teardown: function(a, b) {
					this.onbeforeunload === b && (this.onbeforeunload = null)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var e = f.extend(new f.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
			e.isDefaultPrevented() && c.preventDefault()
		}
	},
	f.event.handle = f.event.dispatch,
	f.removeEvent = c.removeEventListener ?
	function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}: function(a, b, c) {
		a.detachEvent && a.detachEvent("on" + b, c)
	},
	f.Event = function(a, b) {
		if (! (this instanceof f.Event)) return new f.Event(a, b);
		a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K: J) : this.type = a,
		b && f.extend(this, b),
		this.timeStamp = a && a.timeStamp || f.now(),
		this[f.expando] = !0
	},
	f.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = K;
			var a = this.originalEvent; ! a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = K;
			var a = this.originalEvent; ! a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = K,
			this.stopPropagation()
		},
		isDefaultPrevented: J,
		isPropagationStopped: J,
		isImmediatePropagationStopped: J
	},
	f.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	},
	function(a, b) {
		f.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c = this,
				d = a.relatedTarget,
				e = a.handleObj,
				g = e.selector,
				h;
				if (!d || d !== c && !f.contains(c, d)) a.type = e.origType,
				h = e.handler.apply(this, arguments),
				a.type = b;
				return h
			}
		}
	}),
	f.support.submitBubbles || (f.event.special.submit = {
		setup: function() {
			if (f.nodeName(this, "form")) return ! 1;
			f.event.add(this, "click._submit keypress._submit",
			function(a) {
				var c = a.target,
				d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form: b;
				d && !d._submit_attached && (f.event.add(d, "submit._submit",
				function(a) {
					a._submit_bubble = !0
				}), d._submit_attached = !0)
			})
		},
		postDispatch: function(a) {
			a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
		},
		teardown: function() {
			if (f.nodeName(this, "form")) return ! 1;
			f.event.remove(this, "._submit")
		}
	}),
	f.support.changeBubbles || (f.event.special.change = {
		setup: function() {
			if (z.test(this.nodeName)) {
				if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change",
				function(a) {
					a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
				}),
				f.event.add(this, "click._change",
				function(a) {
					this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
				});
				return ! 1
			}
			f.event.add(this, "beforeactivate._change",
			function(a) {
				var b = a.target;
				z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change",
				function(a) {
					this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
				}), b._change_attached = !0)
			})
		},
		handle: function(a) {
			var b = a.target;
			if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			f.event.remove(this, "._change");
			return z.test(this.nodeName)
		}
	}),
	f.support.focusinBubbles || f.each({
		focus: "focusin",
		blur: "focusout"
	},
	function(a, b) {
		var d = 0,
		e = function(a) {
			f.event.simulate(b, a.target, f.event.fix(a), !0)
		};
		f.event.special[b] = {
			setup: function() {
				d++===0 && c.addEventListener(a, e, !0)
			},
			teardown: function() {--d === 0 && c.removeEventListener(a, e, !0)
			}
		}
	}),
	f.fn.extend({
		on: function(a, c, d, e, g) {
			var h, i;
			if (typeof a == "object") {
				typeof c != "string" && (d = d || c, c = b);
				for (i in a) this.on(i, c, d, a[i], g);
				return this
			}
			d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
			if (e === !1) e = J;
			else if (!e) return this;
			g === 1 && (h = e, e = function(a) {
				f().off(a);
				return h.apply(this, arguments)
			},
			e.guid = h.guid || (h.guid = f.guid++));
			return this.each(function() {
				f.event.add(this, a, e, d, c)
			})
		},
		one: function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function(a, c, d) {
			if (a && a.preventDefault && a.handleObj) {
				var e = a.handleObj;
				f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace: e.origType, e.selector, e.handler);
				return this
			}
			if (typeof a == "object") {
				for (var g in a) this.off(g, c, a[g]);
				return this
			}
			if (c === !1 || typeof c == "function") d = c,
			c = b;
			d === !1 && (d = J);
			return this.each(function() {
				f.event.remove(this, a, d, c)
			})
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		live: function(a, b, c) {
			f(this.context).on(a, this.selector, b, c);
			return this
		},
		die: function(a, b) {
			f(this.context).off(a, this.selector || "**", b);
			return this
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
		},
		trigger: function(a, b) {
			return this.each(function() {
				f.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) return f.event.trigger(a, b, this[0], !0)
		},
		toggle: function(a) {
			var b = arguments,
			c = a.guid || f.guid++,
			d = 0,
			e = function(c) {
				var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
				f._data(this, "lastToggle" + a.guid, e + 1),
				c.preventDefault();
				return b[e].apply(this, arguments) || !1
			};
			e.guid = c;
			while (d < b.length) b[d++].guid = c;
			return this.click(e)
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	}),
	f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
	function(a, b) {
		f.fn[b] = function(a, c) {
			c == null && (c = a, a = null);
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		},
		f.attrFn && (f.attrFn[b] = !0),
		C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
		D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
	}),
	function() {
		function x(a, b, c, e, f, g) {
			for (var h = 0,
			i = e.length; h < i; h++) {
				var j = e[h];
				if (j) {
					var k = !1;
					j = j[a];
					while (j) {
						if (j[d] === c) {
							k = e[j.sizset];
							break
						}
						if (j.nodeType === 1) {
							g || (j[d] = c, j.sizset = h);
							if (typeof b != "string") {
								if (j === b) {
									k = !0;
									break
								}
							} else if (m.filter(b, [j]).length > 0) {
								k = j;
								break
							}
						}
						j = j[a]
					}
					e[h] = k
				}
			}
		}
		function w(a, b, c, e, f, g) {
			for (var h = 0,
			i = e.length; h < i; h++) {
				var j = e[h];
				if (j) {
					var k = !1;
					j = j[a];
					while (j) {
						if (j[d] === c) {
							k = e[j.sizset];
							break
						}
						j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
						if (j.nodeName.toLowerCase() === b) {
							k = j;
							break
						}
						j = j[a]
					}
					e[h] = k
				}
			}
		}
		var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
		d = "sizcache" + (Math.random() + "").replace(".", ""),
		e = 0,
		g = Object.prototype.toString,
		h = !1,
		i = !0,
		j = /\\/g,
		k = /\r\n/g,
		l = /\W/; [0, 0].sort(function() {
			i = !1;
			return 0
		});
		var m = function(b, d, e, f) {
			e = e || [],
			d = d || c;
			var h = d;
			if (d.nodeType !== 1 && d.nodeType !== 9) return [];
			if (!b || typeof b != "string") return e;
			var i, j, k, l, n, q, r, t, u = !0,
			v = m.isXML(d),
			w = [],
			x = b;
			do {
				a.exec(""), i = a.exec(x);
				if (i) {
					x = i[3],
					w.push(i[1]);
					if (i[2]) {
						l = i[3];
						break
					}
				}
			} while ( i );
			if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
			else {
				j = o.relative[w[0]] ? [d] : m(w.shift(), d);
				while (w.length) b = w.shift(),
				o.relative[b] && (b += w.shift()),
				j = y(b, j, f)
			} else { ! f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
				if (d) {
					n = f ? {
						expr: w.pop(),
						set: s(f)
					}: m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode: d, v),
					j = n.expr ? m.filter(n.expr, n.set) : n.set,
					w.length > 0 ? k = s(j) : u = !1;
					while (w.length) q = w.pop(),
					r = q,
					o.relative[q] ? r = w.pop() : q = "",
					r == null && (r = d),
					o.relative[q](k, r, v)
				} else k = w = []
			}
			k || (k = j),
			k || m.error(q || b);
			if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k);
			else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
			else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
			else s(k, e);
			l && (m(l, h, e, f), m.uniqueSort(e));
			return e
		};
		m.uniqueSort = function(a) {
			if (u) {
				h = i,
				a.sort(u);
				if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
			}
			return a
		},
		m.matches = function(a, b) {
			return m(a, null, null, b)
		},
		m.matchesSelector = function(a, b) {
			return m(b, null, null, [a]).length > 0
		},
		m.find = function(a, b, c) {
			var d, e, f, g, h, i;
			if (!a) return [];
			for (e = 0, f = o.order.length; e < f; e++) {
				h = o.order[e];
				if (g = o.leftMatch[h].exec(a)) {
					i = g[1],
					g.splice(1, 1);
					if (i.substr(i.length - 1) !== "\\") {
						g[1] = (g[1] || "").replace(j, ""),
						d = o.find[h](g, b, c);
						if (d != null) {
							a = a.replace(o.match[h], "");
							break
						}
					}
				}
			}
			d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
			return {
				set: d,
				expr: a
			}
		},
		m.filter = function(a, c, d, e) {
			var f, g, h, i, j, k, l, n, p, q = a,
			r = [],
			s = c,
			t = c && c[0] && m.isXML(c[0]);
			while (a && c.length) {
				for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
					k = o.filter[h],
					l = f[1],
					g = !1,
					f.splice(1, 1);
					if (l.substr(l.length - 1) === "\\") continue;
					s === r && (r = []);
					if (o.preFilter[h]) {
						f = o.preFilter[h](f, s, d, r, e, t);
						if (!f) g = i = !0;
						else if (f === !0) continue
					}
					if (f) for (n = 0; (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
					if (i !== b) {
						d || (s = r),
						a = a.replace(o.match[h], "");
						if (!g) return [];
						break
					}
				}
				if (a === q) if (g == null) m.error(a);
				else break;
				q = a
			}
			return s
		},
		m.error = function(a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		};
		var n = m.getText = function(a) {
			var b, c, d = a.nodeType,
			e = "";
			if (d) {
				if (d === 1 || d === 9 || d === 11) {
					if (typeof a.textContent == "string") return a.textContent;
					if (typeof a.innerText == "string") return a.innerText.replace(k, "");
					for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
				} else if (d === 3 || d === 4) return a.nodeValue
			} else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
			return e
		},
		o = m.selectors = {
			order: ["ID", "NAME", "TAG"],
			match: {
				ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
				ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
				TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
				CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
				POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
				PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
			},
			leftMatch: {},
			attrMap: {
				"class": "className",
				"for": "htmlFor"
			},
			attrHandle: {
				href: function(a) {
					return a.getAttribute("href")
				},
				type: function(a) {
					return a.getAttribute("type")
				}
			},
			relative: {
				"+": function(a, b) {
					var c = typeof b == "string",
					d = c && !l.test(b),
					e = c && !d;
					d && (b = b.toLowerCase());
					for (var f = 0,
					g = a.length,
					h; f < g; f++) if (h = a[f]) {
						while ((h = h.previousSibling) && h.nodeType !== 1);
						a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
					}
					e && m.filter(b, a, !0)
				},
				">": function(a, b) {
					var c, d = typeof b == "string",
					e = 0,
					f = a.length;
					if (d && !l.test(b)) {
						b = b.toLowerCase();
						for (; e < f; e++) {
							c = a[e];
							if (c) {
								var g = c.parentNode;
								a[e] = g.nodeName.toLowerCase() === b ? g: !1
							}
						}
					} else {
						for (; e < f; e++) c = a[e],
						c && (a[e] = d ? c.parentNode: c.parentNode === b);
						d && m.filter(b, a, !0)
					}
				},
				"": function(a, b, c) {
					var d, f = e++,
					g = x;
					typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
					g("parentNode", b, f, a, d, c)
				},
				"~": function(a, b, c) {
					var d, f = e++,
					g = x;
					typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
					g("previousSibling", b, f, a, d, c)
				}
			},
			find: {
				ID: function(a, b, c) {
					if (typeof b.getElementById != "undefined" && !c) {
						var d = b.getElementById(a[1]);
						return d && d.parentNode ? [d] : []
					}
				},
				NAME: function(a, b) {
					if (typeof b.getElementsByName != "undefined") {
						var c = [],
						d = b.getElementsByName(a[1]);
						for (var e = 0,
						f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
						return c.length === 0 ? null: c
					}
				},
				TAG: function(a, b) {
					if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
				}
			},
			preFilter: {
				CLASS: function(a, b, c, d, e, f) {
					a = " " + a[1].replace(j, "") + " ";
					if (f) return a;
					for (var g = 0,
					h; (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
					return ! 1
				},
				ID: function(a) {
					return a[1].replace(j, "")
				},
				TAG: function(a, b) {
					return a[1].replace(j, "").toLowerCase()
				},
				CHILD: function(a) {
					if (a[1] === "nth") {
						a[2] || m.error(a[0]),
						a[2] = a[2].replace(/^\+|\s*/g, "");
						var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
						a[2] = b[1] + (b[2] || 1) - 0,
						a[3] = b[3] - 0
					} else a[2] && m.error(a[0]);
					a[0] = e++;
					return a
				},
				ATTR: function(a, b, c, d, e, f) {
					var g = a[1] = a[1].replace(j, ""); ! f && o.attrMap[g] && (a[1] = o.attrMap[g]),
					a[4] = (a[4] || a[5] || "").replace(j, ""),
					a[2] === "~=" && (a[4] = " " + a[4] + " ");
					return a
				},
				PSEUDO: function(b, c, d, e, f) {
					if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
					else {
						var g = m.filter(b[3], c, d, !0 ^ f);
						d || e.push.apply(e, g);
						return ! 1
					} else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return ! 0;
					return b
				},
				POS: function(a) {
					a.unshift(!0);
					return a
				}
			},
			filters: {
				enabled: function(a) {
					return a.disabled === !1 && a.type !== "hidden"
				},
				disabled: function(a) {
					return a.disabled === !0
				},
				checked: function(a) {
					return a.checked === !0
				},
				selected: function(a) {
					a.parentNode && a.parentNode.selectedIndex;
					return a.selected === !0
				},
				parent: function(a) {
					return !! a.firstChild
				},
				empty: function(a) {
					return ! a.firstChild
				},
				has: function(a, b, c) {
					return !! m(c[3], a).length
				},
				header: function(a) {
					return /h\d/i.test(a.nodeName)
				},
				text: function(a) {
					var b = a.getAttribute("type"),
					c = a.type;
					return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
				},
				radio: function(a) {
					return a.nodeName.toLowerCase() === "input" && "radio" === a.type
				},
				checkbox: function(a) {
					return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
				},
				file: function(a) {
					return a.nodeName.toLowerCase() === "input" && "file" === a.type
				},
				password: function(a) {
					return a.nodeName.toLowerCase() === "input" && "password" === a.type
				},
				submit: function(a) {
					var b = a.nodeName.toLowerCase();
					return (b === "input" || b === "button") && "submit" === a.type
				},
				image: function(a) {
					return a.nodeName.toLowerCase() === "input" && "image" === a.type
				},
				reset: function(a) {
					var b = a.nodeName.toLowerCase();
					return (b === "input" || b === "button") && "reset" === a.type
				},
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					return b === "input" && "button" === a.type || b === "button"
				},
				input: function(a) {
					return /input|select|textarea|button/i.test(a.nodeName)
				},
				focus: function(a) {
					return a === a.ownerDocument.activeElement
				}
			},
			setFilters: {
				first: function(a, b) {
					return b === 0
				},
				last: function(a, b, c, d) {
					return b === d.length - 1
				},
				even: function(a, b) {
					return b % 2 === 0
				},
				odd: function(a, b) {
					return b % 2 === 1
				},
				lt: function(a, b, c) {
					return b < c[3] - 0
				},
				gt: function(a, b, c) {
					return b > c[3] - 0
				},
				nth: function(a, b, c) {
					return c[3] - 0 === b
				},
				eq: function(a, b, c) {
					return c[3] - 0 === b
				}
			},
			filter: {
				PSEUDO: function(a, b, c, d) {
					var e = b[1],
					f = o.filters[e];
					if (f) return f(a, c, b, d);
					if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
					if (e === "not") {
						var g = b[3];
						for (var h = 0,
						i = g.length; h < i; h++) if (g[h] === a) return ! 1;
						return ! 0
					}
					m.error(e)
				},
				CHILD: function(a, b) {
					var c, e, f, g, h, i, j, k = b[1],
					l = a;
					switch (k) {
					case "only":
					case "first":
						while (l = l.previousSibling) if (l.nodeType === 1) return ! 1;
						if (k === "first") return ! 0;
						l = a;
					case "last":
						while (l = l.nextSibling) if (l.nodeType === 1) return ! 1;
						return ! 0;
					case "nth":
						c = b[2],
						e = b[3];
						if (c === 1 && e === 0) return ! 0;
						f = b[0],
						g = a.parentNode;
						if (g && (g[d] !== f || !a.nodeIndex)) {
							i = 0;
							for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
							g[d] = f
						}
						j = a.nodeIndex - e;
						return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
					}
				},
				ID: function(a, b) {
					return a.nodeType === 1 && a.getAttribute("id") === b
				},
				TAG: function(a, b) {
					return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
				},
				CLASS: function(a, b) {
					return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
				},
				ATTR: function(a, b) {
					var c = b[1],
					d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
					e = d + "",
					f = b[2],
					g = b[4];
					return d == null ? f === "!=": !f && m.attr ? d != null: f === "=" ? e === g: f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g: f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g: f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-": !1 : e && d !== !1
				},
				POS: function(a, b, c, d) {
					var e = b[2],
					f = o.setFilters[e];
					if (f) return f(a, c, b, d)
				}
			}
		},
		p = o.match.POS,
		q = function(a, b) {
			return "\\" + (b - 0 + 1)
		};
		for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
		o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
		o.match.globalPOS = p;
		var s = function(a, b) {
			a = Array.prototype.slice.call(a, 0);
			if (b) {
				b.push.apply(b, a);
				return b
			}
			return a
		};
		try {
			Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
		} catch(t) {
			s = function(a, b) {
				var c = 0,
				d = b || [];
				if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
				else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]);
				else for (; a[c]; c++) d.push(a[c]);
				return d
			}
		}
		var u, v;
		c.documentElement.compareDocumentPosition ? u = function(a, b) {
			if (a === b) {
				h = !0;
				return 0
			}
			if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
			return a.compareDocumentPosition(b) & 4 ? -1 : 1
		}: (u = function(a, b) {
			if (a === b) {
				h = !0;
				return 0
			}
			if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
			var c, d, e = [],
			f = [],
			g = a.parentNode,
			i = b.parentNode,
			j = g;
			if (g === i) return v(a, b);
			if (!g) return - 1;
			if (!i) return 1;
			while (j) e.unshift(j),
			j = j.parentNode;
			j = i;
			while (j) f.unshift(j),
			j = j.parentNode;
			c = e.length,
			d = f.length;
			for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
			return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
		},
		v = function(a, b, c) {
			if (a === b) return c;
			var d = a.nextSibling;
			while (d) {
				if (d === b) return - 1;
				d = d.nextSibling
			}
			return 1
		}),
		function() {
			var a = c.createElement("div"),
			d = "script" + (new Date).getTime(),
			e = c.documentElement;
			a.innerHTML = "<a name='" + d + "'/>",
			e.insertBefore(a, e.firstChild),
			c.getElementById(d) && (o.find.ID = function(a, c, d) {
				if (typeof c.getElementById != "undefined" && !d) {
					var e = c.getElementById(a[1]);
					return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b: []
				}
			},
			o.filter.ID = function(a, b) {
				var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
				return a.nodeType === 1 && c && c.nodeValue === b
			}),
			e.removeChild(a),
			e = a = null
		} (),
		function() {
			var a = c.createElement("div");
			a.appendChild(c.createComment("")),
			a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
				var c = b.getElementsByTagName(a[1]);
				if (a[1] === "*") {
					var d = [];
					for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
					c = d
				}
				return c
			}),
			a.innerHTML = "<a href='#'></a>",
			a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
				return a.getAttribute("href", 2)
			}),
			a = null
		} (),
		c.querySelectorAll &&
		function() {
			var a = m,
			b = c.createElement("div"),
			d = "__sizzle__";
			b.innerHTML = "<p class='TEST'></p>";
			if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
				m = function(b, e, f, g) {
					e = e || c;
					if (!g && !m.isXML(e)) {
						var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
						if (h && (e.nodeType === 1 || e.nodeType === 9)) {
							if (h[1]) return s(e.getElementsByTagName(b), f);
							if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
						}
						if (e.nodeType === 9) {
							if (b === "body" && e.body) return s([e.body], f);
							if (h && h[3]) {
								var i = e.getElementById(h[3]);
								if (!i || !i.parentNode) return s([], f);
								if (i.id === h[3]) return s([i], f)
							}
							try {
								return s(e.querySelectorAll(b), f)
							} catch(j) {}
						} else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
							var k = e,
							l = e.getAttribute("id"),
							n = l || d,
							p = e.parentNode,
							q = /^\s*[+~]/.test(b);
							l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),
							q && p && (e = e.parentNode);
							try {
								if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
							} catch(r) {} finally {
								l || k.removeAttribute("id")
							}
						}
					}
					return a(b, e, f, g)
				};
				for (var e in a) m[e] = a[e];
				b = null
			}
		} (),
		function() {
			var a = c.documentElement,
			b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
			if (b) {
				var d = !b.call(c.createElement("div"), "div"),
				e = !1;
				try {
					b.call(c.documentElement, "[test!='']:sizzle")
				} catch(f) {
					e = !0
				}
				m.matchesSelector = function(a, c) {
					c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!m.isXML(a)) try {
						if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
							var f = b.call(a, c);
							if (f || !d || a.document && a.document.nodeType !== 11) return f
						}
					} catch(g) {}
					return m(c, null, null, [a]).length > 0
				}
			}
		} (),
		function() {
			var a = c.createElement("div");
			a.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
				a.lastChild.className = "e";
				if (a.getElementsByClassName("e").length === 1) return;
				o.order.splice(1, 0, "CLASS"),
				o.find.CLASS = function(a, b, c) {
					if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
				},
				a = null
			}
		} (),
		c.documentElement.contains ? m.contains = function(a, b) {
			return a !== b && (a.contains ? a.contains(b) : !0)
		}: c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
			return !! (a.compareDocumentPosition(b) & 16)
		}: m.contains = function() {
			return ! 1
		},
		m.isXML = function(a) {
			var b = (a ? a.ownerDocument || a: 0).documentElement;
			return b ? b.nodeName !== "HTML": !1
		};
		var y = function(a, b, c) {
			var d, e = [],
			f = "",
			g = b.nodeType ? [b] : b;
			while (d = o.match.PSEUDO.exec(a)) f += d[0],
			a = a.replace(o.match.PSEUDO, "");
			a = o.relative[a] ? a + "*": a;
			for (var h = 0,
			i = g.length; h < i; h++) m(a, g[h], e, c);
			return m.filter(f, e)
		};
		m.attr = f.attr,
		m.selectors.attrMap = {},
		f.find = m,
		f.expr = m.selectors,
		f.expr[":"] = f.expr.filters,
		f.unique = m.uniqueSort,
		f.text = m.getText,
		f.isXMLDoc = m.isXML,
		f.contains = m.contains
	} ();
	var L = /Until$/,
	M = /^(?:parents|prevUntil|prevAll)/,
	N = /,/,
	O = /^.[^:#\[\.,]*$/,
	P = Array.prototype.slice,
	Q = f.expr.match.globalPOS,
	R = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	};
	f.fn.extend({
		find: function(a) {
			var b = this,
			c, d;
			if (typeof a != "string") return f(a).filter(function() {
				for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return ! 0
			});
			var e = this.pushStack("", "find", a),
			g,
			h,
			i;
			for (c = 0, d = this.length; c < d; c++) {
				g = e.length,
				f.find(a, this[c], e);
				if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) {
					e.splice(h--, 1);
					break
				}
			}
			return e
		},
		has: function(a) {
			var b = f(a);
			return this.filter(function() {
				for (var a = 0,
				c = b.length; a < c; a++) if (f.contains(this, b[a])) return ! 0
			})
		},
		not: function(a) {
			return this.pushStack(T(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(T(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !! a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			var c = [],
			d,
			e,
			g = this[0];
			if (f.isArray(a)) {
				var h = 1;
				while (g && g.ownerDocument && g !== b) {
					for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
						selector: a[d],
						elem: g,
						level: h
					});
					g = g.parentNode,
					h++
				}
				return c
			}
			var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
			for (d = 0, e = this.length; d < e; d++) {
				g = this[d];
				while (g) {
					if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
						c.push(g);
						break
					}
					g = g.parentNode;
					if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
				}
			}
			c = c.length > 1 ? f.unique(c) : c;
			return this.pushStack(c, "closest", a)
		},
		index: function(a) {
			if (!a) return this[0] && this[0].parentNode ? this.prevAll().length: -1;
			if (typeof a == "string") return f.inArray(this[0], f(a));
			return f.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(a, b) {
			var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
			d = f.merge(this.get(), c);
			return this.pushStack(S(c[0]) || S(d[0]) ? d: f.unique(d))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	}),
	f.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && b.nodeType !== 11 ? b: null
		},
		parents: function(a) {
			return f.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return f.dir(a, "parentNode", c)
		},
		next: function(a) {
			return f.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return f.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return f.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return f.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return f.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return f.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return f.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return f.sibling(a.firstChild)
		},
		contents: function(a) {
			return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: f.makeArray(a.childNodes)
		}
	},
	function(a, b) {
		f.fn[a] = function(c, d) {
			var e = f.map(this, b, c);
			L.test(a) || (d = c),
			d && typeof d == "string" && (e = f.filter(d, e)),
			e = this.length > 1 && !R[a] ? f.unique(e) : e,
			(this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
			return this.pushStack(e, a, P.call(arguments).join(","))
		}
	}),
	f.extend({
		filter: function(a, b, c) {
			c && (a = ":not(" + a + ")");
			return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
		},
		dir: function(a, c, d) {
			var e = [],
			g = a[c];
			while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g),
			g = g[c];
			return e
		},
		nth: function(a, b, c, d) {
			b = b || 1;
			var e = 0;
			for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
			return a
		},
		sibling: function(a, b) {
			var c = [];
			for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
			return c
		}
	});
	var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	W = / jQuery\d+="(?:\d+|null)"/g,
	X = /^\s+/,
	Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	Z = /<([\w:]+)/,
	$ = /<tbody/i,
	_ = /<|&#?\w+;/,
	ba = /<(?:script|style)/i,
	bb = /<(?:script|object|embed|option|style)/i,
	bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
	bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
	be = /\/(java|ecma)script/i,
	bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
	bg = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		area: [1, "<map>", "</map>"],
		_default: [0, "", ""]
	},
	bh = U(c);
	bg.optgroup = bg.option,
	bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
	bg.th = bg.td,
	f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
	f.fn.extend({
		text: function(a) {
			return f.access(this,
			function(a) {
				return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
			},
			null, a, arguments.length)
		},
		wrapAll: function(a) {
			if (f.isFunction(a)) return this.each(function(b) {
				f(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]),
				b.map(function() {
					var a = this;
					while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			if (f.isFunction(a)) return this.each(function(b) {
				f(this).wrapInner(a.call(this, b))
			});
			return this.each(function() {
				var b = f(this),
				c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = f.isFunction(a);
			return this.each(function(c) {
				f(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0,
			function(a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0,
			function(a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
			function(a) {
				this.parentNode.insertBefore(a, this)
			});
			if (arguments.length) {
				var a = f.clean(arguments);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
			function(a) {
				this.parentNode.insertBefore(a, this.nextSibling)
			});
			if (arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, f.clean(arguments));
				return a
			}
		},
		remove: function(a, b) {
			for (var c = 0,
			d; (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length) ! b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])),
			d.parentNode && d.parentNode.removeChild(d);
			return this
		},
		empty: function() {
			for (var a = 0,
			b; (b = this[a]) != null; a++) {
				b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
				while (b.firstChild) b.removeChild(b.firstChild)
			}
			return this
		},
		clone: function(a, b) {
			a = a == null ? !1 : a,
			b = b == null ? a: b;
			return this.map(function() {
				return f.clone(this, a, b)
			})
		},
		html: function(a) {
			return f.access(this,
			function(a) {
				var c = this[0] || {},
				d = 0,
				e = this.length;
				if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
				if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Y, "<$1></$2>");
					try {
						for (; d < e; d++) c = this[d] || {},
						c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
						c = 0
					} catch(g) {}
				}
				c && this.empty().append(a)
			},
			null, a, arguments.length)
		},
		replaceWith: function(a) {
			if (this[0] && this[0].parentNode) {
				if (f.isFunction(a)) return this.each(function(b) {
					var c = f(this),
					d = c.html();
					c.replaceWith(a.call(this, b, d))
				});
				typeof a != "string" && (a = f(a).detach());
				return this.each(function() {
					var b = this.nextSibling,
					c = this.parentNode;
					f(this).remove(),
					b ? f(b).before(a) : f(c).append(a)
				})
			}
			return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, c, d) {
			var e, g, h, i, j = a[0],
			k = [];
			if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function() {
				f(this).domManip(a, c, d, !0)
			});
			if (f.isFunction(j)) return this.each(function(e) {
				var g = f(this);
				a[0] = j.call(this, e, c ? g.html() : b),
				g.domManip(a, c, d)
			});
			if (this[0]) {
				i = j && j.parentNode,
				f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
					fragment: i
				}: e = f.buildFragment(a, this, k),
				h = e.fragment,
				h.childNodes.length === 1 ? g = h = h.firstChild: g = h.firstChild;
				if (g) {
					c = c && f.nodeName(g, "tr");
					for (var l = 0,
					m = this.length,
					n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
				}
				k.length && f.each(k,
				function(a, b) {
					b.src ? f.ajax({
						type: "GET",
						global: !1,
						url: b.src,
						async: !1,
						dataType: "script"
					}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")),
					b.parentNode && b.parentNode.removeChild(b)
				})
			}
			return this
		}
	}),
	f.buildFragment = function(a, b, d) {
		var e, g, h, i, j = a[0];
		b && b[0] && (i = b[0].ownerDocument || b[0]),
		i.createDocumentFragment || (i = c),
		a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)),
		e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)),
		g && (f.fragments[j] = h ? e: 1);
		return {
			fragment: e,
			cacheable: g
		}
	},
	f.fragments = {},
	f.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function(a, b) {
		f.fn[a] = function(c) {
			var d = [],
			e = f(c),
			g = this.length === 1 && this[0].parentNode;
			if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
				e[b](this[0]);
				return this
			}
			for (var h = 0,
			i = e.length; h < i; h++) {
				var j = (h > 0 ? this.clone(!0) : this).get();
				f(e[h])[b](j),
				d = d.concat(j)
			}
			return this.pushStack(d, a, e.selector)
		}
	}),
	f.extend({
		clone: function(a, b, c) {
			var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
			if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
				bk(a, h),
				d = bl(a),
				e = bl(h);
				for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
			}
			if (b) {
				bj(a, h);
				if (c) {
					d = bl(a),
					e = bl(h);
					for (g = 0; d[g]; ++g) bj(d[g], e[g])
				}
			}
			d = e = null;
			return h
		},
		clean: function(a, b, d, e) {
			var g, h, i, j = [];
			b = b || c,
			typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
			for (var k = 0,
			l; (l = a[k]) != null; k++) {
				typeof l == "number" && (l += "");
				if (!l) continue;
				if (typeof l == "string") if (!_.test(l)) l = b.createTextNode(l);
				else {
					l = l.replace(Y, "<$1></$2>");
					var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
					n = bg[m] || bg._default,
					o = n[0],
					p = b.createElement("div"),
					q = bh.childNodes,
					r;
					b === c ? bh.appendChild(p) : U(b).appendChild(p),
					p.innerHTML = n[1] + l + n[2];
					while (o--) p = p.lastChild;
					if (!f.support.tbody) {
						var s = $.test(l),
						t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes: n[1] === "<table>" && !s ? p.childNodes: [];
						for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
					} ! f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild),
					l = p.childNodes,
					p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
				}
				var u;
				if (!f.support.appendChecked) if (l[0] && typeof(u = l.length) == "number") for (i = 0; i < u; i++) bn(l[i]);
				else bn(l);
				l.nodeType ? j.push(l) : j = f.merge(j, l)
			}
			if (d) {
				g = function(a) {
					return ! a.type || be.test(a.type)
				};
				for (k = 0; j[k]; k++) {
					h = j[k];
					if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
					else {
						if (h.nodeType === 1) {
							var v = f.grep(h.getElementsByTagName("script"), g);
							j.splice.apply(j, [k + 1, 0].concat(v))
						}
						d.appendChild(h)
					}
				}
			}
			return j
		},
		cleanData: function(a) {
			var b, c, d = f.cache,
			e = f.event.special,
			g = f.support.deleteExpando;
			for (var h = 0,
			i; (i = a[h]) != null; h++) {
				if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
				c = i[f.expando];
				if (c) {
					b = d[c];
					if (b && b.events) {
						for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
						b.handle && (b.handle.elem = null)
					}
					g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
					delete d[c]
				}
			}
		}
	});
	var bp = /alpha\([^)]*\)/i,
	bq = /opacity=([^)]*)/,
	br = /([A-Z]|^ms)/g,
	bs = /^[\-+]?(?:\d*\.)?\d+$/i,
	bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
	bu = /^([\-+])=([\-+.\de]+)/,
	bv = /^margin/,
	bw = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	bx = ["Top", "Right", "Bottom", "Left"],
	by,
	bz,
	bA;
	f.fn.css = function(a, c) {
		return f.access(this,
		function(a, c, d) {
			return d !== b ? f.style(a, c, d) : f.css(a, c)
		},
		a, c, arguments.length > 1)
	},
	f.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = by(a, "opacity");
						return c === "" ? "1": c
					}
					return a.style.opacity
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": f.support.cssFloat ? "cssFloat": "styleFloat"
		},
		style: function(a, c, d, e) {
			if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
				var g, h, i = f.camelCase(c),
				j = a.style,
				k = f.cssHooks[i];
				c = f.cssProps[i] || i;
				if (d === b) {
					if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
					return j[c]
				}
				h = typeof d,
				h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
				if (d == null || h === "number" && isNaN(d)) return;
				h === "number" && !f.cssNumber[i] && (d += "px");
				if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
					j[c] = d
				} catch(l) {}
			}
		},
		css: function(a, c, d) {
			var e, g;
			c = f.camelCase(c),
			g = f.cssHooks[c],
			c = f.cssProps[c] || c,
			c === "cssFloat" && (c = "float");
			if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
			if (by) return by(a, c)
		},
		swap: function(a, b, c) {
			var d = {},
			e, f;
			for (f in b) d[f] = a.style[f],
			a.style[f] = b[f];
			e = c.call(a);
			for (f in b) a.style[f] = d[f];
			return e
		}
	}),
	f.curCSS = f.css,
	c.defaultView && c.defaultView.getComputedStyle && (bz = function(a, b) {
		var c, d, e, g, h = a.style;
		b = b.replace(br, "-$1").toLowerCase(),
		(d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))),
		!f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
		return c
	}),
	c.documentElement.currentStyle && (bA = function(a, b) {
		var c, d, e, f = a.currentStyle && a.currentStyle[b],
		g = a.style;
		f == null && g && (e = g[b]) && (f = e),
		bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em": f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
		return f === "" ? "auto": f
	}),
	by = bz || bA,
	f.each(["height", "width"],
	function(a, b) {
		f.cssHooks[b] = {
			get: function(a, c, d) {
				if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw,
				function() {
					return bB(a, b, d)
				})
			},
			set: function(a, b) {
				return bs.test(b) ? b + "px": b
			}
		}
	}),
	f.support.opacity || (f.cssHooks.opacity = {
		get: function(a, b) {
			return bq.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
		},
		set: function(a, b) {
			var c = a.style,
			d = a.currentStyle,
			e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")": "",
			g = d && d.filter || c.filter || "";
			c.zoom = 1;
			if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
				c.removeAttribute("filter");
				if (d && !d.filter) return
			}
			c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
		}
	}),
	f(function() {
		f.support.reliableMarginRight || (f.cssHooks.marginRight = {
			get: function(a, b) {
				return f.swap(a, {
					display: "inline-block"
				},
				function() {
					return b ? by(a, "margin-right") : a.style.marginRight
				})
			}
		})
	}),
	f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
		var b = a.offsetWidth,
		c = a.offsetHeight;
		return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
	},
	f.expr.filters.visible = function(a) {
		return ! f.expr.filters.hidden(a)
	}),
	f.each({
		margin: "",
		padding: "",
		border: "Width"
	},
	function(a, b) {
		f.cssHooks[a + b] = {
			expand: function(c) {
				var d, e = typeof c == "string" ? c.split(" ") : [c],
				f = {};
				for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
				return f
			}
		}
	});
	var bC = /%20/g,
	bD = /\[\]$/,
	bE = /\r?\n/g,
	bF = /#.*$/,
	bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	bJ = /^(?:GET|HEAD)$/,
	bK = /^\/\//,
	bL = /\?/,
	bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	bN = /^(?:select|textarea)/i,
	bO = /\s+/,
	bP = /([?&])_=[^&]*/,
	bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
	bR = f.fn.load,
	bS = {},
	bT = {},
	bU, bV, bW = ["*/"] + ["*"];
	try {
		bU = e.href
	} catch(bX) {
		bU = c.createElement("a"),
		bU.href = "",
		bU = bU.href
	}
	bV = bQ.exec(bU.toLowerCase()) || [],
	f.fn.extend({
		load: function(a, c, d) {
			if (typeof a != "string" && bR) return bR.apply(this, arguments);
			if (!this.length) return this;
			var e = a.indexOf(" ");
			if (e >= 0) {
				var g = a.slice(e, a.length);
				a = a.slice(0, e)
			}
			var h = "GET";
			c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
			var i = this;
			f.ajax({
				url: a,
				type: h,
				dataType: "html",
				data: c,
				complete: function(a, b, c) {
					c = a.responseText,
					a.isResolved() && (a.done(function(a) {
						c = a
					}), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)),
					d && i.each(d, [c, b, a])
				}
			});
			return this
		},
		serialize: function() {
			return f.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? f.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
			}).map(function(a, b) {
				var c = f(this).val();
				return c == null ? null: f.isArray(c) ? f.map(c,
				function(a, c) {
					return {
						name: b.name,
						value: a.replace(bE, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(bE, "\r\n")
				}
			}).get()
		}
	}),
	f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
	function(a, b) {
		f.fn[b] = function(a) {
			return this.on(b, a)
		}
	}),
	f.each(["get", "post"],
	function(a, c) {
		f[c] = function(a, d, e, g) {
			f.isFunction(d) && (g = g || e, e = d, d = b);
			return f.ajax({
				type: c,
				url: a,
				data: d,
				success: e,
				dataType: g
			})
		}
	}),
	f.extend({
		getScript: function(a, c) {
			return f.get(a, b, c, "script")
		},
		getJSON: function(a, b, c) {
			return f.get(a, b, c, "json")
		},
		ajaxSetup: function(a, b) {
			b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings),
			b$(a, b);
			return a
		},
		ajaxSettings: {
			url: bU,
			isLocal: bI.test(bV[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": bW
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": a.String,
				"text html": !0,
				"text json": f.parseJSON,
				"text xml": f.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: bY(bS),
		ajaxTransport: bY(bT),
		ajax: function(a, c) {
			function w(a, c, l, m) {
				if (s !== 2) {
					s = 2,
					q && clearTimeout(q),
					p = b,
					n = m || "",
					v.readyState = a > 0 ? 4 : 0;
					var o, r, u, w = c,
					x = l ? ca(d, v, l) : b,
					y,
					z;
					if (a >= 200 && a < 300 || a === 304) {
						if (d.ifModified) {
							if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
							if (z = v.getResponseHeader("Etag")) f.etag[k] = z
						}
						if (a === 304) w = "notmodified",
						o = !0;
						else try {
							r = cb(d, x),
							w = "success",
							o = !0
						} catch(A) {
							w = "parsererror",
							u = A
						}
					} else {
						u = w;
						if (!w || a) w = "error",
						a < 0 && (a = 0)
					}
					v.status = a,
					v.statusText = "" + (c || w),
					o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
					v.statusCode(j),
					j = b,
					t && g.trigger("ajax" + (o ? "Success": "Error"), [v, d, o ? r: u]),
					i.fireWith(e, [v, w]),
					t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
				}
			}
			typeof a == "object" && (c = a, a = b),
			c = c || {};
			var d = f.ajaxSetup({},
			c),
			e = d.context || d,
			g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
			h = f.Deferred(),
			i = f.Callbacks("once memory"),
			j = d.statusCode || {},
			k,
			l = {},
			m = {},
			n,
			o,
			p,
			q,
			r,
			s = 0,
			t,
			u,
			v = {
				readyState: 0,
				setRequestHeader: function(a, b) {
					if (!s) {
						var c = a.toLowerCase();
						a = m[c] = m[c] || a,
						l[a] = b
					}
					return this
				},
				getAllResponseHeaders: function() {
					return s === 2 ? n: null
				},
				getResponseHeader: function(a) {
					var c;
					if (s === 2) {
						if (!o) {
							o = {};
							while (c = bG.exec(n)) o[c[1].toLowerCase()] = c[2]
						}
						c = o[a.toLowerCase()]
					}
					return c === b ? null: c
				},
				overrideMimeType: function(a) {
					s || (d.mimeType = a);
					return this
				},
				abort: function(a) {
					a = a || "abort",
					p && p.abort(a),
					w(0, a);
					return this
				}
			};
			h.promise(v),
			v.success = v.done,
			v.error = v.fail,
			v.complete = i.add,
			v.statusCode = function(a) {
				if (a) {
					var b;
					if (s < 2) for (b in a) j[b] = [j[b], a[b]];
					else b = a[v.status],
					v.then(b, b)
				}
				return this
			},
			d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"),
			d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO),
			d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))),
			d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
			bZ(bS, d, c, v);
			if (s === 2) return ! 1;
			t = d.global,
			d.type = d.type.toUpperCase(),
			d.hasContent = !bJ.test(d.type),
			t && f.active++===0 && f.event.trigger("ajaxStart");
			if (!d.hasContent) {
				d.data && (d.url += (bL.test(d.url) ? "&": "?") + d.data, delete d.data),
				k = d.url;
				if (d.cache === !1) {
					var x = f.now(),
					y = d.url.replace(bP, "$1_=" + x);
					d.url = y + (y === d.url ? (bL.test(d.url) ? "&": "?") + "_=" + x: "")
				}
			} (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
			d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
			v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01": "") : d.accepts["*"]);
			for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
			if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
				v.abort();
				return ! 1
			}
			for (u in {
				success: 1,
				error: 1,
				complete: 1
			}) v[u](d[u]);
			p = bZ(bT, d, c, v);
			if (!p) w( - 1, "No Transport");
			else {
				v.readyState = 1,
				t && g.trigger("ajaxSend", [v, d]),
				d.async && d.timeout > 0 && (q = setTimeout(function() {
					v.abort("timeout")
				},
				d.timeout));
				try {
					s = 1,
					p.send(l, w)
				} catch(z) {
					if (s < 2) w( - 1, z);
					else throw z
				}
			}
			return v
		},
		param: function(a, c) {
			var d = [],
			e = function(a, b) {
				b = f.isFunction(b) ? b() : b,
				d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
			c === b && (c = f.ajaxSettings.traditional);
			if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a,
			function() {
				e(this.name, this.value)
			});
			else for (var g in a) b_(g, a[g], c, e);
			return d.join("&").replace(bC, "+")
		}
	}),
	f.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var cc = f.now(),
	cd = /(\=)\?(&|$)|\?\?/i;
	f.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return f.expando + "_" + cc++
		}
	}),
	f.ajaxPrefilter("json jsonp",
	function(b, c, d) {
		var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
		if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
			var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
			i = a[h],
			j = b.url,
			k = b.data,
			l = "$1" + h + "$2";
			b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&": "?") + b.jsonp + "=" + h))),
			b.url = j,
			b.data = k,
			a[h] = function(a) {
				g = [a]
			},
			d.always(function() {
				a[h] = i,
				g && f.isFunction(i) && a[h](g[0])
			}),
			b.converters["script json"] = function() {
				g || f.error(h + " was not called");
				return g[0]
			},
			b.dataTypes[0] = "json";
			return "script"
		}
	}),
	f.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				f.globalEval(a);
				return a
			}
		}
	}),
	f.ajaxPrefilter("script",
	function(a) {
		a.cache === b && (a.cache = !1),
		a.crossDomain && (a.type = "GET", a.global = !1)
	}),
	f.ajaxTransport("script",
	function(a) {
		if (a.crossDomain) {
			var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
			return {
				send: function(f, g) {
					d = c.createElement("script"),
					d.async = "async",
					a.scriptCharset && (d.charset = a.scriptCharset),
					d.src = a.url,
					d.onload = d.onreadystatechange = function(a, c) {
						if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null,
						e && d.parentNode && e.removeChild(d),
						d = b,
						c || g(200, "success")
					},
					e.insertBefore(d, e.firstChild)
				},
				abort: function() {
					d && d.onload(0, 1)
				}
			}
		}
	});
	var ce = a.ActiveXObject ?
	function() {
		for (var a in cg) cg[a](0, 1)
	}: !1,
	cf = 0,
	cg;
	f.ajaxSettings.xhr = a.ActiveXObject ?
	function() {
		return ! this.isLocal && ch() || ci()
	}: ch,
	function(a) {
		f.extend(f.support, {
			ajax: !!a,
			cors: !!a && "withCredentials" in a
		})
	} (f.ajaxSettings.xhr()),
	f.support.ajax && f.ajaxTransport(function(c) {
		if (!c.crossDomain || f.support.cors) {
			var d;
			return {
				send: function(e, g) {
					var h = c.xhr(),
					i,
					j;
					c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
					if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
					c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
					!c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (j in e) h.setRequestHeader(j, e[j])
					} catch(k) {}
					h.send(c.hasContent && c.data || null),
					d = function(a, e) {
						var j, k, l, m, n;
						try {
							if (d && (e || h.readyState === 4)) {
								d = b,
								i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
								if (e) h.readyState !== 4 && h.abort();
								else {
									j = h.status,
									l = h.getAllResponseHeaders(),
									m = {},
									n = h.responseXML,
									n && n.documentElement && (m.xml = n);
									try {
										m.text = h.responseText
									} catch(a) {}
									try {
										k = h.statusText
									} catch(o) {
										k = ""
									} ! j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
								}
							}
						} catch(p) {
							e || g( - 1, p)
						}
						m && g(j, k, m, l)
					},
					!c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {},
					f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
				},
				abort: function() {
					d && d(0, 1)
				}
			}
		}
	});
	var cj = {},
	ck, cl, cm = /^(?:toggle|show|hide)$/,
	cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	co, cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
	cq;
	f.fn.extend({
		show: function(a, b, c) {
			var d, e;
			if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
			for (var g = 0,
			h = this.length; g < h; g++) d = this[g],
			d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
			for (g = 0; g < h; g++) {
				d = this[g];
				if (d.style) {
					e = d.style.display;
					if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
				}
			}
			return this
		},
		hide: function(a, b, c) {
			if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
			var d, e, g = 0,
			h = this.length;
			for (; g < h; g++) d = this[g],
			d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
			for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
			return this
		},
		_toggle: f.fn.toggle,
		toggle: function(a, b, c) {
			var d = typeof a == "boolean";
			f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
				var b = d ? a: f(this).is(":hidden");
				f(this)[b ? "show": "hide"]()
			}) : this.animate(ct("toggle", 3), a, b, c);
			return this
		},
		fadeTo: function(a, b, c, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			},
			a, c, d)
		},
		animate: function(a, b, c, d) {
			function g() {
				e.queue === !1 && f._mark(this);
				var b = f.extend({},
				e),
				c = this.nodeType === 1,
				d = c && f(this).is(":hidden"),
				g,
				h,
				i,
				j,
				k,
				l,
				m,
				n,
				o,
				p,
				q;
				b.animatedProperties = {};
				for (i in a) {
					g = f.camelCase(i),
					i !== g && (a[g] = a[i], delete a[i]);
					if ((k = f.cssHooks[g]) && "expand" in k) {
						l = k.expand(a[g]),
						delete a[g];
						for (i in l) i in a || (a[i] = l[i])
					}
				}
				for (g in a) {
					h = a[g],
					f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
					if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
					c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block": this.style.zoom = 1))
				}
				b.overflow != null && (this.style.overflow = "hidden");
				for (i in a) j = new f.fx(this, b, i),
				h = a[i],
				cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show": "hide": 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide": "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "": "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
				return ! 0
			}
			var e = f.speed(b, c, d);
			if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
			a = f.extend({},
			a);
			return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
		},
		stop: function(a, c, d) {
			typeof a != "string" && (d = c, c = a, a = b),
			c && a !== !1 && this.queue(a || "fx", []);
			return this.each(function() {
				function h(a, b, c) {
					var e = b[c];
					f.removeData(a, c, !0),
					e.stop(d)
				}
				var b, c = !1,
				e = f.timers,
				g = f._data(this);
				d || f._unmark(!0, this);
				if (a == null) for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
				else g[b = a + ".run"] && g[b].stop && h(this, g, b);
				for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1)); (!d || !c) && f.dequeue(this, a)
			})
		}
	}),
	f.each({
		slideDown: ct("show", 1),
		slideUp: ct("hide", 1),
		slideToggle: ct("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	},
	function(a, b) {
		f.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}),
	f.extend({
		speed: function(a, b, c) {
			var d = a && typeof a == "object" ? f.extend({},
			a) : {
				complete: c || !c && b || f.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !f.isFunction(b) && b
			};
			d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration: d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
			if (d.queue == null || d.queue === !0) d.queue = "fx";
			d.old = d.complete,
			d.complete = function(a) {
				f.isFunction(d.old) && d.old.call(this),
				d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
			};
			return d
		},
		easing: {
			linear: function(a) {
				return a
			},
			swing: function(a) {
				return - Math.cos(a * Math.PI) / 2 + .5
			}
		},
		timers: [],
		fx: function(a, b, c) {
			this.options = b,
			this.elem = a,
			this.prop = c,
			b.orig = b.orig || {}
		}
	}),
	f.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this),
			(f.fx.step[this.prop] || f.fx.step._default)(this)
		},
		cur: function() {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
			var a, b = f.css(this.elem, this.prop);
			return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b: a
		},
		custom: function(a, c, d) {
			function h(a) {
				return e.step(a)
			}
			var e = this,
			g = f.fx;
			this.startTime = cq || cr(),
			this.end = c,
			this.now = this.start = a,
			this.pos = this.state = 0,
			this.unit = d || this.unit || (f.cssNumber[this.prop] ? "": "px"),
			h.queue = this.options.queue,
			h.elem = this.elem,
			h.saveState = function() {
				f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
			},
			h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
		},
		show: function() {
			var a = f._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
			this.options.show = !0,
			a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
			f(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),
			this.options.hide = !0,
			this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b, c, d, e = cq || cr(),
			g = !0,
			h = this.elem,
			i = this.options;
			if (a || e >= i.duration + this.startTime) {
				this.now = this.end,
				this.pos = this.state = 1,
				this.update(),
				i.animatedProperties[this.prop] = !0;
				for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
				if (g) {
					i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"],
					function(a, b) {
						h.style["overflow" + b] = i.overflow[a]
					}),
					i.hide && f(h).hide();
					if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]),
					f.removeData(h, "fxshow" + b, !0),
					f.removeData(h, "toggle" + b, !0);
					d = i.complete,
					d && (i.complete = !1, d.call(h))
				}
				return ! 1
			}
			i.duration == Infinity ? this.now = e: (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos),
			this.update();
			return ! 0
		}
	},
	f.extend(f.fx, {
		tick: function() {
			var a, b = f.timers,
			c = 0;
			for (; c < b.length; c++) a = b[c],
			!a() && b[c] === a && b.splice(c--, 1);
			b.length || f.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(co),
			co = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				f.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit: a.elem[a.prop] = a.now
			}
		}
	}),
	f.each(cp.concat.apply([], cp),
	function(a, b) {
		b.indexOf("margin") && (f.fx.step[b] = function(a) {
			f.style(a.elem, b, Math.max(0, a.now) + a.unit)
		})
	}),
	f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
		return f.grep(f.timers,
		function(b) {
			return a === b.elem
		}).length
	});
	var cv, cw = /^t(?:able|d|h)$/i,
	cx = /^(?:body|html)$/i;
	"getBoundingClientRect" in c.documentElement ? cv = function(a, b, c, d) {
		try {
			d = a.getBoundingClientRect()
		} catch(e) {}
		if (!d || !f.contains(c, a)) return d ? {
			top: d.top,
			left: d.left
		}: {
			top: 0,
			left: 0
		};
		var g = b.body,
		h = cy(b),
		i = c.clientTop || g.clientTop || 0,
		j = c.clientLeft || g.clientLeft || 0,
		k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
		l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
		m = d.top + k - i,
		n = d.left + l - j;
		return {
			top: m,
			left: n
		}
	}: cv = function(a, b, c) {
		var d, e = a.offsetParent,
		g = a,
		h = b.body,
		i = b.defaultView,
		j = i ? i.getComputedStyle(a, null) : a.currentStyle,
		k = a.offsetTop,
		l = a.offsetLeft;
		while ((a = a.parentNode) && a !== h && a !== c) {
			if (f.support.fixedPosition && j.position === "fixed") break;
			d = i ? i.getComputedStyle(a, null) : a.currentStyle,
			k -= a.scrollTop,
			l -= a.scrollLeft,
			a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent),
			f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0),
			j = d
		}
		if (j.position === "relative" || j.position === "static") k += h.offsetTop,
		l += h.offsetLeft;
		f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
		return {
			top: k,
			left: l
		}
	},
	f.fn.offset = function(a) {
		if (arguments.length) return a === b ? this: this.each(function(b) {
			f.offset.setOffset(this, a, b)
		});
		var c = this[0],
		d = c && c.ownerDocument;
		if (!d) return null;
		if (c === d.body) return f.offset.bodyOffset(c);
		return cv(c, d, d.documentElement)
	},
	f.offset = {
		bodyOffset: function(a) {
			var b = a.offsetTop,
			c = a.offsetLeft;
			f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
			return {
				top: b,
				left: c
			}
		},
		setOffset: function(a, b, c) {
			var d = f.css(a, "position");
			d === "static" && (a.style.position = "relative");
			var e = f(a),
			g = e.offset(),
			h = f.css(a, "top"),
			i = f.css(a, "left"),
			j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
			k = {},
			l = {},
			m,
			n;
			j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0),
			f.isFunction(b) && (b = b.call(a, c, g)),
			b.top != null && (k.top = b.top - g.top + m),
			b.left != null && (k.left = b.left - g.left + n),
			"using" in b ? b.using.call(a, k) : e.css(k)
		}
	},
	f.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var a = this[0],
			b = this.offsetParent(),
			c = this.offset(),
			d = cx.test(b[0].nodeName) ? {
				top: 0,
				left: 0
			}: b.offset();
			c.top -= parseFloat(f.css(a, "marginTop")) || 0,
			c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
			d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
			d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
			return {
				top: c.top - d.top,
				left: c.left - d.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || c.body;
				while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
				return a
			})
		}
	}),
	f.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	},
	function(a, c) {
		var d = /Y/.test(c);
		f.fn[a] = function(e) {
			return f.access(this,
			function(a, e, g) {
				var h = cy(a);
				if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
				h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g: f(h).scrollTop()) : a[e] = g
			},
			a, e, arguments.length, null)
		}
	}),
	f.each({
		Height: "height",
		Width: "width"
	},
	function(a, c) {
		var d = "client" + a,
		e = "scroll" + a,
		g = "offset" + a;
		f.fn["inner" + a] = function() {
			var a = this[0];
			return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
		},
		f.fn["outer" + a] = function(a) {
			var b = this[0];
			return b ? b.style ? parseFloat(f.css(b, c, a ? "margin": "border")) : this[c]() : null
		},
		f.fn[c] = function(a) {
			return f.access(this,
			function(a, c, h) {
				var i, j, k, l;
				if (f.isWindow(a)) {
					i = a.document,
					j = i.documentElement[d];
					return f.support.boxModel && j || i.body && i.body[d] || j
				}
				if (a.nodeType === 9) {
					i = a.documentElement;
					if (i[d] >= i[e]) return i[d];
					return Math.max(a.body[e], i[e], a.body[g], i[g])
				}
				if (h === b) {
					k = f.css(a, c),
					l = parseFloat(k);
					return f.isNumeric(l) ? l: k
				}
				f(a).css(c, h)
			},
			c, a, arguments.length, null)
		}
	}),
	a.jQuery = a.$ = f,
	typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [],
	function() {
		return f
	})
})(window);
/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects ||
function(a, b) {
	function c(b) {
		var c;
		return b && b.constructor == Array && b.length == 3 ? b: (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)] : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) ? [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) ? [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)] : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) ? [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)] : (c = /rgba\(0, 0, 0, 0\)/.exec(b)) ? e.transparent: e[a.trim(b).toLowerCase()]
	}
	function d(b, d) {
		var e;
		do {
			e = a.curCSS(b, d);
			if (e != "" && e != "transparent" || a.nodeName(b, "body")) break;
			d = "backgroundColor"
		} while ( b = b . parentNode );
		return c(e)
	}
	function h() {
		var a = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
		b = {},
		c,
		d;
		if (a && a.length && a[0] && a[a[0]]) {
			var e = a.length;
			while (e--) c = a[e],
			typeof a[c] == "string" && (d = c.replace(/\-(\w)/g,
			function(a, b) {
				return b.toUpperCase()
			}), b[d] = a[c])
		} else for (c in a) typeof a[c] == "string" && (b[c] = a[c]);
		return b
	}
	function i(b) {
		var c, d;
		for (c in b) d = b[c],
		(d == null || a.isFunction(d) || c in g || /scrollbar/.test(c) || !/color/i.test(c) && isNaN(parseFloat(d))) && delete b[c];
		return b
	}
	function j(a, b) {
		var c = {
			_: 0
		},
		d;
		for (d in b) a[d] != b[d] && (c[d] = b[d]);
		return c
	}
	function k(b, c, d, e) {
		typeof b == "object" && (e = c, d = null, c = b, b = c.effect),
		a.isFunction(c) && (e = c, d = null, c = {});
		if (typeof c == "number" || a.fx.speeds[c]) e = d,
		d = c,
		c = {};
		return a.isFunction(d) && (e = d, d = null),
		c = c || {},
		d = d || c.duration,
		d = a.fx.off ? 0 : typeof d == "number" ? d: d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default,
		e = e || c.complete,
		[b, c, d, e]
	}
	function l(b) {
		return ! b || typeof b == "number" || a.fx.speeds[b] ? !0 : typeof b == "string" && !a.effects[b] ? !0 : !1
	}
	a.effects = {},
	a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"],
	function(b, e) {
		a.fx.step[e] = function(a) {
			a.colorInit || (a.start = d(a.elem, e), a.end = c(a.end), a.colorInit = !0),
			a.elem.style[e] = "rgb(" + Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0) + ")"
		}
	});
	var e = {
		aqua: [0, 255, 255],
		azure: [240, 255, 255],
		beige: [245, 245, 220],
		black: [0, 0, 0],
		blue: [0, 0, 255],
		brown: [165, 42, 42],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgrey: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkviolet: [148, 0, 211],
		fuchsia: [255, 0, 255],
		gold: [255, 215, 0],
		green: [0, 128, 0],
		indigo: [75, 0, 130],
		khaki: [240, 230, 140],
		lightblue: [173, 216, 230],
		lightcyan: [224, 255, 255],
		lightgreen: [144, 238, 144],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		navy: [0, 0, 128],
		olive: [128, 128, 0],
		orange: [255, 165, 0],
		pink: [255, 192, 203],
		purple: [128, 0, 128],
		violet: [128, 0, 128],
		red: [255, 0, 0],
		silver: [192, 192, 192],
		white: [255, 255, 255],
		yellow: [255, 255, 0],
		transparent: [255, 255, 255]
	},
	f = ["add", "remove", "toggle"],
	g = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	};
	a.effects.animateClass = function(b, c, d, e) {
		return a.isFunction(d) && (e = d, d = null),
		this.queue(function() {
			var g = a(this),
			k = g.attr("style") || " ",
			l = i(h.call(this)),
			m,
			n = g.attr("class") || "";
			a.each(f,
			function(a, c) {
				b[c] && g[c + "Class"](b[c])
			}),
			m = i(h.call(this)),
			g.attr("class", n),
			g.animate(j(l, m), {
				queue: !1,
				duration: c,
				easing: d,
				complete: function() {
					a.each(f,
					function(a, c) {
						b[c] && g[c + "Class"](b[c])
					}),
					typeof g.attr("style") == "object" ? (g.attr("style").cssText = "", g.attr("style").cssText = k) : g.attr("style", k),
					e && e.apply(this, arguments),
					a.dequeue(this)
				}
			})
		})
	},
	a.fn.extend({
		_addClass: a.fn.addClass,
		addClass: function(b, c, d, e) {
			return c ? a.effects.animateClass.apply(this, [{
				add: b
			},
			c, d, e]) : this._addClass(b)
		},
		_removeClass: a.fn.removeClass,
		removeClass: function(b, c, d, e) {
			return c ? a.effects.animateClass.apply(this, [{
				remove: b
			},
			c, d, e]) : this._removeClass(b)
		},
		_toggleClass: a.fn.toggleClass,
		toggleClass: function(c, d, e, f, g) {
			return typeof d == "boolean" || d === b ? e ? a.effects.animateClass.apply(this, [d ? {
				add: c
			}: {
				remove: c
			},
			e, f, g]) : this._toggleClass(c, d) : a.effects.animateClass.apply(this, [{
				toggle: c
			},
			d, e, f])
		},
		switchClass: function(b, c, d, e, f) {
			return a.effects.animateClass.apply(this, [{
				add: c,
				remove: b
			},
			d, e, f])
		}
	}),
	a.extend(a.effects, {
		version: "1.8.21",
		save: function(a, b) {
			for (var c = 0; c < b.length; c++) b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]])
		},
		restore: function(a, b) {
			for (var c = 0; c < b.length; c++) b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c]))
		},
		setMode: function(a, b) {
			return b == "toggle" && (b = a.is(":hidden") ? "show": "hide"),
			b
		},
		getBaseline: function(a, b) {
			var c, d;
			switch (a[0]) {
			case "top":
				c = 0;
				break;
			case "middle":
				c = .5;
				break;
			case "bottom":
				c = 1;
				break;
			default:
				c = a[0] / b.height
			}
			switch (a[1]) {
			case "left":
				d = 0;
				break;
			case "center":
				d = .5;
				break;
			case "right":
				d = 1;
				break;
			default:
				d = a[1] / b.width
			}
			return {
				x: d,
				y: c
			}
		},
		createWrapper: function(b) {
			if (b.parent().is(".ui-effects-wrapper")) return b.parent();
			var c = {
				width: b.outerWidth(!0),
				height: b.outerHeight(!0),
				"float": b.css("float")
			},
			d = a("<div></div>").addClass("ui-effects-wrapper").css({
				fontSize: "100%",
				background: "transparent",
				border: "none",
				margin: 0,
				padding: 0
			}),
			e = document.activeElement;
			try {
				e.id
			} catch(f) {
				e = document.body
			}
			return b.wrap(d),
			(b[0] === e || a.contains(b[0], e)) && a(e).focus(),
			d = b.parent(),
			b.css("position") == "static" ? (d.css({
				position: "relative"
			}), b.css({
				position: "relative"
			})) : (a.extend(c, {
				position: b.css("position"),
				zIndex: b.css("z-index")
			}), a.each(["top", "left", "bottom", "right"],
			function(a, d) {
				c[d] = b.css(d),
				isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
			}), b.css({
				position: "relative",
				top: 0,
				left: 0,
				right: "auto",
				bottom: "auto"
			})),
			d.css(c).show()
		},
		removeWrapper: function(b) {
			var c, d = document.activeElement;
			return b.parent().is(".ui-effects-wrapper") ? (c = b.parent().replaceWith(b), (b[0] === d || a.contains(b[0], d)) && a(d).focus(), c) : b
		},
		setTransition: function(b, c, d, e) {
			return e = e || {},
			a.each(c,
			function(a, c) {
				var f = b.cssUnit(c);
				f[0] > 0 && (e[c] = f[0] * d + f[1])
			}),
			e
		}
	}),
	a.fn.extend({
		effect: function(b, c, d, e) {
			var f = k.apply(this, arguments),
			g = {
				options: f[1],
				duration: f[2],
				callback: f[3]
			},
			h = g.options.mode,
			i = a.effects[b];
			return a.fx.off || !i ? h ? this[h](g.duration, g.callback) : this.each(function() {
				g.callback && g.callback.call(this)
			}) : i.call(this, g)
		},
		_show: a.fn.show,
		show: function(a) {
			if (l(a)) return this._show.apply(this, arguments);
			var b = k.apply(this, arguments);
			return b[1].mode = "show",
			this.effect.apply(this, b)
		},
		_hide: a.fn.hide,
		hide: function(a) {
			if (l(a)) return this._hide.apply(this, arguments);
			var b = k.apply(this, arguments);
			return b[1].mode = "hide",
			this.effect.apply(this, b)
		},
		__toggle: a.fn.toggle,
		toggle: function(b) {
			if (l(b) || typeof b == "boolean" || a.isFunction(b)) return this.__toggle.apply(this, arguments);
			var c = k.apply(this, arguments);
			return c[1].mode = "toggle",
			this.effect.apply(this, c)
		},
		cssUnit: function(b) {
			var c = this.css(b),
			d = [];
			return a.each(["em", "px", "%", "pt"],
			function(a, b) {
				c.indexOf(b) > 0 && (d = [parseFloat(c), b])
			}),
			d
		}
	}),
	a.easing.jswing = a.easing.swing,
	a.extend(a.easing, {
		def: "easeOutQuad",
		swing: function(b, c, d, e, f) {
			return a.easing[a.easing.def](b, c, d, e, f)
		},
		easeInQuad: function(a, b, c, d, e) {
			return d * (b /= e) * b + c
		},
		easeOutQuad: function(a, b, c, d, e) {
			return - d * (b /= e) * (b - 2) + c
		},
		easeInOutQuad: function(a, b, c, d, e) {
			return (b /= e / 2) < 1 ? d / 2 * b * b + c: -d / 2 * (--b * (b - 2) - 1) + c
		},
		easeInCubic: function(a, b, c, d, e) {
			return d * (b /= e) * b * b + c
		},
		easeOutCubic: function(a, b, c, d, e) {
			return d * ((b = b / e - 1) * b * b + 1) + c
		},
		easeInOutCubic: function(a, b, c, d, e) {
			return (b /= e / 2) < 1 ? d / 2 * b * b * b + c: d / 2 * ((b -= 2) * b * b + 2) + c
		},
		easeInQuart: function(a, b, c, d, e) {
			return d * (b /= e) * b * b * b + c
		},
		easeOutQuart: function(a, b, c, d, e) {
			return - d * ((b = b / e - 1) * b * b * b - 1) + c
		},
		easeInOutQuart: function(a, b, c, d, e) {
			return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c: -d / 2 * ((b -= 2) * b * b * b - 2) + c
		},
		easeInQuint: function(a, b, c, d, e) {
			return d * (b /= e) * b * b * b * b + c
		},
		easeOutQuint: function(a, b, c, d, e) {
			return d * ((b = b / e - 1) * b * b * b * b + 1) + c
		},
		easeInOutQuint: function(a, b, c, d, e) {
			return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c: d / 2 * ((b -= 2) * b * b * b * b + 2) + c
		},
		easeInSine: function(a, b, c, d, e) {
			return - d * Math.cos(b / e * (Math.PI / 2)) + d + c
		},
		easeOutSine: function(a, b, c, d, e) {
			return d * Math.sin(b / e * (Math.PI / 2)) + c
		},
		easeInOutSine: function(a, b, c, d, e) {
			return - d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
		},
		easeInExpo: function(a, b, c, d, e) {
			return b == 0 ? c: d * Math.pow(2, 10 * (b / e - 1)) + c
		},
		easeOutExpo: function(a, b, c, d, e) {
			return b == e ? c + d: d * ( - Math.pow(2, -10 * b / e) + 1) + c
		},
		easeInOutExpo: function(a, b, c, d, e) {
			return b == 0 ? c: b == e ? c + d: (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c: d / 2 * ( - Math.pow(2, -10 * --b) + 2) + c
		},
		easeInCirc: function(a, b, c, d, e) {
			return - d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
		},
		easeOutCirc: function(a, b, c, d, e) {
			return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
		},
		easeInOutCirc: function(a, b, c, d, e) {
			return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c: d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
		},
		easeInElastic: function(a, b, c, d, e) {
			var f = 1.70158,
			g = 0,
			h = d;
			if (b == 0) return c;
			if ((b /= e) == 1) return c + d;
			g || (g = e * .3);
			if (h < Math.abs(d)) {
				h = d;
				var f = g / 4
			} else var f = g / (2 * Math.PI) * Math.asin(d / h);
			return - (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
		},
		easeOutElastic: function(a, b, c, d, e) {
			var f = 1.70158,
			g = 0,
			h = d;
			if (b == 0) return c;
			if ((b /= e) == 1) return c + d;
			g || (g = e * .3);
			if (h < Math.abs(d)) {
				h = d;
				var f = g / 4
			} else var f = g / (2 * Math.PI) * Math.asin(d / h);
			return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
		},
		easeInOutElastic: function(a, b, c, d, e) {
			var f = 1.70158,
			g = 0,
			h = d;
			if (b == 0) return c;
			if ((b /= e / 2) == 2) return c + d;
			g || (g = e * .3 * 1.5);
			if (h < Math.abs(d)) {
				h = d;
				var f = g / 4
			} else var f = g / (2 * Math.PI) * Math.asin(d / h);
			return b < 1 ? -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c: h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c
		},
		easeInBack: function(a, c, d, e, f, g) {
			return g == b && (g = 1.70158),
			e * (c /= f) * c * ((g + 1) * c - g) + d
		},
		easeOutBack: function(a, c, d, e, f, g) {
			return g == b && (g = 1.70158),
			e * ((c = c / f - 1) * c * ((g + 1) * c + g) + 1) + d
		},
		easeInOutBack: function(a, c, d, e, f, g) {
			return g == b && (g = 1.70158),
			(c /= f / 2) < 1 ? e / 2 * c * c * (((g *= 1.525) + 1) * c - g) + d: e / 2 * ((c -= 2) * c * (((g *= 1.525) + 1) * c + g) + 2) + d
		},
		easeInBounce: function(b, c, d, e, f) {
			return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d
		},
		easeOutBounce: function(a, b, c, d, e) {
			return (b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c: b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c: b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c: d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
		},
		easeInOutBounce: function(b, c, d, e, f) {
			return c < f / 2 ? a.easing.easeInBounce(b, c * 2, 0, e, f) * .5 + d: a.easing.easeOutBounce(b, c * 2 - f, 0, e, f) * .5 + e * .5 + d
		}
	})
} (jQuery);;
/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.shake.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) {
	a.effects.shake = function(b) {
		return this.queue(function() {
			var c = a(this),
			d = ["position", "top", "bottom", "left", "right"],
			e = a.effects.setMode(c, b.options.mode || "effect"),
			f = b.options.direction || "left",
			g = b.options.distance || 20,
			h = b.options.times || 3,
			i = b.duration || b.options.duration || 140;
			a.effects.save(c, d),
			c.show(),
			a.effects.createWrapper(c);
			var j = f == "up" || f == "down" ? "top": "left",
			k = f == "up" || f == "left" ? "pos": "neg",
			l = {},
			m = {},
			n = {};
			l[j] = (k == "pos" ? "-=": "+=") + g,
			m[j] = (k == "pos" ? "+=": "-=") + g * 2,
			n[j] = (k == "pos" ? "-=": "+=") + g * 2,
			c.animate(l, i, b.options.easing);
			for (var p = 1; p < h; p++) c.animate(m, i, b.options.easing).animate(n, i, b.options.easing);
			c.animate(m, i, b.options.easing).animate(l, i / 2, b.options.easing,
			function() {
				a.effects.restore(c, d),
				a.effects.removeWrapper(c),
				b.callback && b.callback.apply(this, arguments)
			}),
			c.queue("fx",
			function() {
				c.dequeue()
			}),
			c.dequeue()
		})
	}
})(jQuery);;﻿
/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 2.1.2
 */

(function($) {

	$.fn.bgiframe = ($.browser.msie && /msie 6\.0/i.test(navigator.userAgent) ?
	function(s) {
		s = $.extend({
			top: 'auto',
			// auto == .currentStyle.borderTopWidth
			left: 'auto',
			// auto == .currentStyle.borderLeftWidth
			width: 'auto',
			// auto == offsetWidth
			height: 'auto',
			// auto == offsetHeight
			opacity: true,
			src: 'javascript:false;'
		},
		s);
		var html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + s.src + '"' + 'style="display:block;position:absolute;z-index:-1;' + (s.opacity !== false ? 'filter:Alpha(Opacity=\'0\');': '') + 'top:' + (s.top == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')': prop(s.top)) + ';' + 'left:' + (s.left == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')': prop(s.left)) + ';' + 'width:' + (s.width == 'auto' ? 'expression(this.parentNode.offsetWidth+\'px\')': prop(s.width)) + ';' + 'height:' + (s.height == 'auto' ? 'expression(this.parentNode.offsetHeight+\'px\')': prop(s.height)) + ';' + '"/>';
		return this.each(function() {
			if ($(this).children('iframe.bgiframe').length === 0) this.insertBefore(document.createElement(html), this.firstChild);
		});
	}: function() {
		return this;
	});

	// old alias
	$.fn.bgIframe = $.fn.bgiframe;

	function prop(n) {
		return n && n.constructor === Number ? n + 'px': n;
	}

})(jQuery);

/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

; (function(b) {
	var m, t, u, f, D, j, E, n, z, A, q = 0,
	e = {},
	o = [],
	p = 0,
	d = {},
	l = [],
	G = null,
	v = new Image,
	J = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
	W = /[^\.]\.(swf)\s*$/i,
	K,
	L = 1,
	y = 0,
	s = "",
	r,
	i,
	h = false,
	B = b.extend(b("<div/>")[0], {
		prop: 0
	}),
	M = b.browser.msie && b.browser.version < 7 && !window.XMLHttpRequest,
	N = function() {
		t.hide();
		v.onerror = v.onload = null;
		G && G.abort();
		m.empty()
	},
	O = function() {
		if (false === e.onError(o, q, e)) {
			t.hide();
			h = false
		} else {
			e.titleShow = false;
			e.width = "auto";
			e.height = "auto";
			m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
			F()
		}
	},
	I = function() {
		var a = o[q],
		c,
		g,
		k,
		C,
		P,
		w;
		N();
		e = b.extend({},
		b.fn.fancybox.defaults, typeof b(a).data("fancybox") == "undefined" ? e: b(a).data("fancybox"));
		w = e.onStart(o, q, e);
		if (w === false) h = false;
		else {
			if (typeof w == "object") e = b.extend(e, w);
			k = e.title || (a.nodeName ? b(a).attr("title") : a.title) || "";
			if (a.nodeName && !e.orig) e.orig = b(a).children("img:first").length ? b(a).children("img:first") : b(a);
			if (k === "" && e.orig && e.titleFromAlt) k = e.orig.attr("alt");
			c = e.href || (a.nodeName ? b(a).attr("href") : a.href) || null;
			if (/^(?:javascript)/i.test(c) || c == "#") c = null;
			if (e.type) {
				g = e.type;
				if (!c) c = e.content
			} else if (e.content) g = "html";
			else if (c) g = c.match(J) ? "image": c.match(W) ? "swf": b(a).hasClass("iframe") ? "iframe": c.indexOf("#") === 0 ? "inline": "ajax";
			if (g) {
				if (g == "inline") {
					a = c.substr(c.indexOf("#"));
					g = b(a).length > 0 ? "inline": "ajax"
				}
				e.type = g;
				e.href = c;
				e.title = k;
				if (e.autoDimensions) if (e.type == "html" || e.type == "inline" || e.type == "ajax") {
					e.width = "auto";
					e.height = "auto"
				} else e.autoDimensions = false;
				if (e.modal) {
					e.overlayShow = true;
					e.hideOnOverlayClick = false;
					e.hideOnContentClick = false;
					e.enableEscapeButton = false;
					e.showCloseButton = false
				}
				e.padding = parseInt(e.padding, 10);
				e.margin = parseInt(e.margin, 10);
				m.css("padding", e.padding + e.margin);
				b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",
				function() {
					b(this).replaceWith(j.children())
				});
				switch (g) {
				case "html":
					m.html(e.content);
					F();
					break;
				case "inline":
					if (b(a).parent().is("#fancybox-content") === true) {
						h = false;
						break
					}
					b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",
					function() {
						b(this).replaceWith(j.children())
					}).bind("fancybox-cancel",
					function() {
						b(this).replaceWith(m.children())
					});
					b(a).appendTo(m);
					F();
					break;
				case "image":
					h = false;
					b.fancybox.showActivity();
					v = new Image;
					v.onerror = function() {
						O()
					};
					v.onload = function() {
						h = true;
						v.onerror = v.onload = null;
						e.width = v.width;
						e.height = v.height;
						b("<img />").attr({
							id: "fancybox-img",
							src: v.src,
							alt: e.title
						}).appendTo(m);
						Q()
					};
					v.src = c;
					break;
				case "swf":
					e.scrolling = "no";
					C = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + e.width + '" height="' + e.height + '"><param name="movie" value="' + c + '"></param>';
					P = "";
					b.each(e.swf,
					function(x, H) {
						C += '<param name="' + x + '" value="' + H + '"></param>';
						P += " " + x + '="' + H + '"'
					});
					C += '<embed src="' + c + '" type="application/x-shockwave-flash" width="' + e.width + '" height="' + e.height + '"' + P + "></embed></object>";
					m.html(C);
					F();
					break;
				case "ajax":
					h = false;
					b.fancybox.showActivity();
					e.ajax.win = e.ajax.success;
					G = b.ajax(b.extend({},
					e.ajax, {
						url: c,
						data: e.ajax.data || {},
						error: function(x) {
							x.status > 0 && O()
						},
						success: function(x, H, R) {
							if ((typeof R == "object" ? R: G).status == 200) {
								if (typeof e.ajax.win == "function") {
									w = e.ajax.win(c, x, H, R);
									if (w === false) {
										t.hide();
										return
									} else if (typeof w == "string" || typeof w == "object") x = w
								}
								m.html(x);
								F()
							}
						}
					}));
					break;
				case "iframe":
					Q()
				}
			} else O()
		}
	},
	F = function() {
		var a = e.width,
		c = e.height;
		a = a.toString().indexOf("%") > -1 ? parseInt((b(window).width() - e.margin * 2) * parseFloat(a) / 100, 10) + "px": a == "auto" ? "auto": a + "px";
		c = c.toString().indexOf("%") > -1 ? parseInt((b(window).height() - e.margin * 2) * parseFloat(c) / 100, 10) + "px": c == "auto" ? "auto": c + "px";
		m.wrapInner('<div style="width:' + a + ";height:" + c + ";overflow: " + (e.scrolling == "auto" ? "auto": e.scrolling == "yes" ? "scroll": "hidden") + ';position:relative;"></div>');
		e.width = m.width();
		e.height = m.height();
		Q()
	},
	Q = function() {
		var a, c;
		t.hide();
		if (f.is(":visible") && false === d.onCleanup(l, p, d)) {
			b.event.trigger("fancybox-cancel");
			h = false
		} else {
			h = true;
			b(j.add(u)).unbind();
			b(window).unbind("resize.fb scroll.fb");
			b(document).unbind("keydown.fb");
			f.is(":visible") && d.titlePosition !== "outside" && f.css("height", f.height());
			l = o;
			p = q;
			d = e;
			if (d.overlayShow) {
				u.css({
					"background-color": d.overlayColor,
					opacity: d.overlayOpacity,
					cursor: d.hideOnOverlayClick ? "pointer": "auto",
					height: b(document).height()
				});
				if (!u.is(":visible")) {
					M && b("select:not(#fancybox-tmp select)").filter(function() {
						return this.style.visibility !== "hidden"
					}).css({
						visibility: "hidden"
					}).one("fancybox-cleanup",
					function() {
						this.style.visibility = "inherit"
					});
					u.show()
				}
			} else u.hide();
			i = X();
			s = d.title || "";
			y = 0;
			n.empty().removeAttr("style").removeClass();
			if (d.titleShow !== false) {
				if (b.isFunction(d.titleFormat)) a = d.titleFormat(s, l, p, d);
				else a = s && s.length ? d.titlePosition == "float" ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + s + '</td><td id="fancybox-title-float-right"></td></tr></table>': '<div id="fancybox-title-' + d.titlePosition + '">' + s + "</div>": false;
				s = a;
				if (! (!s || s === "")) {
					n.addClass("fancybox-title-" + d.titlePosition).html(s).appendTo("body").show();
					switch (d.titlePosition) {
					case "inside":
						n.css({
							width:
							i.width - d.padding * 2,
							marginLeft: d.padding,
							marginRight: d.padding
						});
						y = n.outerHeight(true);
						n.appendTo(D);
						i.height += y;
						break;
					case "over":
						n.css({
							marginLeft:
							d.padding,
							width: i.width - d.padding * 2,
							bottom: d.padding
						}).appendTo(D);
						break;
					case "float":
						n.css("left", parseInt((n.width() - i.width - 40) / 2, 10) * -1).appendTo(f);
						break;
					default:
						n.css({
							width:
							i.width - d.padding * 2,
							paddingLeft: d.padding,
							paddingRight: d.padding
						}).appendTo(f)
					}
				}
			}
			n.hide();
			if (f.is(":visible")) {
				b(E.add(z).add(A)).hide();
				a = f.position();
				r = {
					top: a.top,
					left: a.left,
					width: f.width(),
					height: f.height()
				};
				c = r.width == i.width && r.height == i.height;
				j.fadeTo(d.changeFade, 0.3,
				function() {
					var g = function() {
						j.html(m.contents()).fadeTo(d.changeFade, 1, S)
					};
					b.event.trigger("fancybox-change");
					j.empty().removeAttr("filter").css({
						"border-width": d.padding,
						width: i.width - d.padding * 2,
						height: e.autoDimensions ? "auto": i.height - y - d.padding * 2
					});
					if (c) g();
					else {
						B.prop = 0;
						b(B).animate({
							prop: 1
						},
						{
							duration: d.changeSpeed,
							easing: d.easingChange,
							step: T,
							complete: g
						})
					}
				})
			} else {
				f.removeAttr("style");
				j.css("border-width", d.padding);
				if (d.transitionIn == "elastic") {
					r = V();
					j.html(m.contents());
					f.show();
					if (d.opacity) i.opacity = 0;
					B.prop = 0;
					b(B).animate({
						prop: 1
					},
					{
						duration: d.speedIn,
						easing: d.easingIn,
						step: T,
						complete: S
					})
				} else {
					d.titlePosition == "inside" && y > 0 && n.show();
					j.css({
						width: i.width - d.padding * 2,
						height: e.autoDimensions ? "auto": i.height - y - d.padding * 2
					}).html(m.contents());
					f.css(i).fadeIn(d.transitionIn == "none" ? 0 : d.speedIn, S)
				}
			}
		}
	},
	Y = function() {
		if (d.enableEscapeButton || d.enableKeyboardNav) b(document).bind("keydown.fb",
		function(a) {
			if (a.keyCode == 27 && d.enableEscapeButton) {
				a.preventDefault();
				b.fancybox.close()
			} else if ((a.keyCode == 37 || a.keyCode == 39) && d.enableKeyboardNav && a.target.tagName !== "INPUT" && a.target.tagName !== "TEXTAREA" && a.target.tagName !== "SELECT") {
				a.preventDefault();
				b.fancybox[a.keyCode == 37 ? "prev": "next"]()
			}
		});
		if (d.showNavArrows) {
			if (d.cyclic && l.length > 1 || p !== 0) z.show();
			if (d.cyclic && l.length > 1 || p != l.length - 1) A.show()
		} else {
			z.hide();
			A.hide()
		}
	},
	S = function() {
		if (!b.support.opacity) {
			j.get(0).style.removeAttribute("filter");
			f.get(0).style.removeAttribute("filter")
		}
		e.autoDimensions && j.css("height", "auto");
		f.css("height", "auto");
		s && s.length && n.show();
		d.showCloseButton && E.show();
		Y();
		d.hideOnContentClick && j.bind("click", b.fancybox.close);
		d.hideOnOverlayClick && u.bind("click", b.fancybox.close);
		b(window).bind("resize.fb", b.fancybox.resize);
		d.centerOnScroll && b(window).bind("scroll.fb", b.fancybox.center);
		if (d.type == "iframe") b('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (b.browser.msie ? 'allowtransparency="true""': "") + ' scrolling="' + e.scrolling + '" src="' + d.href + '"></iframe>').appendTo(j);
		f.show();
		h = false;
		b.fancybox.center();
		d.onComplete(l, p, d);
		var a, c;
		if (l.length - 1 > p) {
			a = l[p + 1].href;
			if (typeof a !== "undefined" && a.match(J)) {
				c = new Image;
				c.src = a
			}
		}
		if (p > 0) {
			a = l[p - 1].href;
			if (typeof a !== "undefined" && a.match(J)) {
				c = new Image;
				c.src = a
			}
		}
	},
	T = function(a) {
		var c = {
			width: parseInt(r.width + (i.width - r.width) * a, 10),
			height: parseInt(r.height + (i.height - r.height) * a, 10),
			top: parseInt(r.top + (i.top - r.top) * a, 10),
			left: parseInt(r.left + (i.left - r.left) * a, 10)
		};
		if (typeof i.opacity !== "undefined") c.opacity = a < 0.5 ? 0.5 : a;
		f.css(c);
		j.css({
			width: c.width - d.padding * 2,
			height: c.height - y * a - d.padding * 2
		})
	},
	U = function() {
		return [b(window).width() - d.margin * 2, b(window).height() - d.margin * 2, b(document).scrollLeft() + d.margin, b(document).scrollTop() + d.margin]
	},
	X = function() {
		var a = U(),
		c = {},
		g = d.autoScale,
		k = d.padding * 2;
		c.width = d.width.toString().indexOf("%") > -1 ? parseInt(a[0] * parseFloat(d.width) / 100, 10) : d.width + k;
		c.height = d.height.toString().indexOf("%") > -1 ? parseInt(a[1] * parseFloat(d.height) / 100, 10) : d.height + k;
		if (g && (c.width > a[0] || c.height > a[1])) if (e.type == "image" || e.type == "swf") {
			g = d.width / d.height;
			if (c.width > a[0]) {
				c.width = a[0];
				c.height = parseInt((c.width - k) / g + k, 10)
			}
			if (c.height > a[1]) {
				c.height = a[1];
				c.width = parseInt((c.height - k) * g + k, 10)
			}
		} else {
			c.width = Math.min(c.width, a[0]);
			c.height = Math.min(c.height, a[1])
		}
		c.top = parseInt(Math.max(a[3] - 20, a[3] + (a[1] - c.height - 40) * 0.5), 10);
		c.left = parseInt(Math.max(a[2] - 20, a[2] + (a[0] - c.width - 40) * 0.5), 10);
		return c
	},
	V = function() {
		var a = e.orig ? b(e.orig) : false,
		c = {};
		if (a && a.length) {
			c = a.offset();
			c.top += parseInt(a.css("paddingTop"), 10) || 0;
			c.left += parseInt(a.css("paddingLeft"), 10) || 0;
			c.top += parseInt(a.css("border-top-width"), 10) || 0;
			c.left += parseInt(a.css("border-left-width"), 10) || 0;
			c.width = a.width();
			c.height = a.height();
			c = {
				width: c.width + d.padding * 2,
				height: c.height + d.padding * 2,
				top: c.top - d.padding - 20,
				left: c.left - d.padding - 20
			}
		} else {
			a = U();
			c = {
				width: d.padding * 2,
				height: d.padding * 2,
				top: parseInt(a[3] + a[1] * 0.5, 10),
				left: parseInt(a[2] + a[0] * 0.5, 10)
			}
		}
		return c
	},
	Z = function() {
		if (t.is(":visible")) {
			b("div", t).css("top", L * -40 + "px");
			L = (L + 1) % 12
		} else clearInterval(K)
	};
	b.fn.fancybox = function(a) {
		if (!b(this).length) return this;
		b(this).data("fancybox", b.extend({},
		a, b.metadata ? b(this).metadata() : {})).unbind("click.fb").bind("click.fb",
		function(c) {
			c.preventDefault();
			if (!h) {
				h = true;
				b(this).blur();
				o = [];
				q = 0;
				c = b(this).attr("rel") || "";
				if (!c || c == "" || c === "nofollow") o.push(this);
				else {
					o = b("a[rel=" + c + "], area[rel=" + c + "]");
					q = o.index(this)
				}
				I()
			}
		});
		return this
	};
	b.fancybox = function(a, c) {
		var g;
		if (!h) {
			h = true;
			g = typeof c !== "undefined" ? c: {};
			o = [];
			q = parseInt(g.index, 10) || 0;
			if (b.isArray(a)) {
				for (var k = 0,
				C = a.length; k < C; k++) if (typeof a[k] == "object") b(a[k]).data("fancybox", b.extend({},
				g, a[k]));
				else a[k] = b({}).data("fancybox", b.extend({
					content: a[k]
				},
				g));
				o = jQuery.merge(o, a)
			} else {
				if (typeof a == "object") b(a).data("fancybox", b.extend({},
				g, a));
				else a = b({}).data("fancybox", b.extend({
					content: a
				},
				g));
				o.push(a)
			}
			if (q > o.length || q < 0) q = 0;
			I()
		}
	};
	b.fancybox.showActivity = function() {
		clearInterval(K);
		t.show();
		K = setInterval(Z, 66)
	};
	b.fancybox.hideActivity = function() {
		t.hide()
	};
	b.fancybox.next = function() {
		return b.fancybox.pos(p + 1)
	};
	b.fancybox.prev = function() {
		return b.fancybox.pos(p - 1)
	};
	b.fancybox.pos = function(a) {
		if (!h) {
			a = parseInt(a);
			o = l;
			if (a > -1 && a < l.length) {
				q = a;
				I()
			} else if (d.cyclic && l.length > 1) {
				q = a >= l.length ? 0 : l.length - 1;
				I()
			}
		}
	};
	b.fancybox.cancel = function() {
		if (!h) {
			h = true;
			b.event.trigger("fancybox-cancel");
			N();
			e.onCancel(o, q, e);
			h = false
		}
	};
	b.fancybox.close = function() {
		function a() {
			u.fadeOut("fast");
			n.empty().hide();
			f.hide();
			b.event.trigger("fancybox-cleanup");
			j.empty();
			d.onClosed(l, p, d);
			l = e = [];
			p = q = 0;
			d = e = {};
			h = false
		}
		if (! (h || f.is(":hidden"))) {
			h = true;
			if (d && false === d.onCleanup(l, p, d)) h = false;
			else {
				N();
				b(E.add(z).add(A)).hide();
				b(j.add(u)).unbind();
				b(window).unbind("resize.fb scroll.fb");
				b(document).unbind("keydown.fb");
				j.find("iframe").attr("src", M && /^https/i.test(window.location.href || "") ? "javascript:void(false)": "about:blank");
				d.titlePosition !== "inside" && n.empty();
				f.stop();
				if (d.transitionOut == "elastic") {
					r = V();
					var c = f.position();
					i = {
						top: c.top,
						left: c.left,
						width: f.width(),
						height: f.height()
					};
					if (d.opacity) i.opacity = 1;
					n.empty().hide();
					B.prop = 1;
					b(B).animate({
						prop: 0
					},
					{
						duration: d.speedOut,
						easing: d.easingOut,
						step: T,
						complete: a
					})
				} else f.fadeOut(d.transitionOut == "none" ? 0 : d.speedOut, a)
			}
		}
	};
	b.fancybox.resize = function() {
		u.is(":visible") && u.css("height", b(document).height());
		b.fancybox.center(true)
	};
	b.fancybox.center = function(a) {
		var c, g;
		if (!h) {
			g = a === true ? 1 : 0;
			c = U(); ! g && (f.width() > c[0] || f.height() > c[1]) || f.stop().animate({
				top: parseInt(Math.max(c[3] - 20, c[3] + (c[1] - j.height() - 40) * 0.5 - d.padding)),
				left: parseInt(Math.max(c[2] - 20, c[2] + (c[0] - j.width() - 40) * 0.5 - d.padding))
			},
			typeof a == "number" ? a: 200)
		}
	};
	b.fancybox.init = function() {
		if (!b("#fancybox-wrap").length) {
			b("body").append(m = b('<div id="fancybox-tmp"></div>'), t = b('<div id="fancybox-loading"><div></div></div>'), u = b('<div id="fancybox-overlay"></div>'), f = b('<div id="fancybox-wrap"></div>'));
			D = b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
			D.append(j = b('<div id="fancybox-content"></div>'), E = b('<a id="fancybox-close"></a>'), n = b('<div id="fancybox-title"></div>'), z = b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), A = b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
			E.click(b.fancybox.close);
			t.click(b.fancybox.cancel);
			z.click(function(a) {
				a.preventDefault();
				b.fancybox.prev()
			});
			A.click(function(a) {
				a.preventDefault();
				b.fancybox.next()
			});
			b.fn.mousewheel && f.bind("mousewheel.fb",
			function(a, c) {
				if (h) a.preventDefault();
				else if (b(a.target).get(0).clientHeight == 0 || b(a.target).get(0).scrollHeight === b(a.target).get(0).clientHeight) {
					a.preventDefault();
					b.fancybox[c > 0 ? "prev": "next"]()
				}
			});
			b.support.opacity || f.addClass("fancybox-ie");
			if (M) {
				t.addClass("fancybox-ie6");
				f.addClass("fancybox-ie6");
				b('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)": "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)
			}
		}
	};
	b.fn.fancybox.defaults = {
		padding: 10,
		margin: 40,
		opacity: false,
		modal: false,
		cyclic: false,
		scrolling: "auto",
		width: 560,
		height: 340,
		autoScale: true,
		autoDimensions: true,
		centerOnScroll: false,
		ajax: {},
		swf: {
			wmode: "transparent"
		},
		hideOnOverlayClick: true,
		hideOnContentClick: false,
		overlayShow: true,
		overlayOpacity: 0.7,
		overlayColor: "#777",
		titleShow: true,
		titlePosition: "float",
		titleFormat: null,
		titleFromAlt: false,
		transitionIn: "fade",
		transitionOut: "fade",
		speedIn: 300,
		speedOut: 300,
		changeSpeed: 300,
		changeFade: "fast",
		easingIn: "swing",
		easingOut: "swing",
		showCloseButton: true,
		showNavArrows: true,
		enableEscapeButton: true,
		enableKeyboardNav: true,
		onStart: function() {},
		onCancel: function() {},
		onComplete: function() {},
		onCleanup: function() {},
		onClosed: function() {},
		onError: function() {}
	};
	b(document).ready(function() {
		b.fancybox.init()
	})
})(jQuery);

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b, c) {
	var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
	a;
	$.throttle = a = function(e, f, j, i) {
		var h, d = 0;
		if (typeof f !== "boolean") {
			i = j;
			j = f;
			f = c
		}
		function g() {
			var o = this,
			m = +new Date() - d,
			n = arguments;
			function l() {
				d = +new Date();
				j.apply(o, n)
			}
			function k() {
				h = c
			}
			if (i && !h) {
				l()
			}
			h && clearTimeout(h);
			if (i === c && m > e) {
				l()
			} else {
				if (f !== true) {
					h = setTimeout(i ? k: l, i === c ? e - m: e)
				}
			}
		}
		if ($.guid) {
			g.guid = j.guid = j.guid || $.guid++
		}
		return g
	};
	$.debounce = function(d, e, f) {
		return f === c ? a(d, e, false) : a(d, f, e !== false)
	}
})(this);

/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (MIT_LICENSE.txt)
 * and GPL Version 2 (GPL_LICENSE.txt) licenses.
 *
 * Version: 1.1.1
 * Requires jQuery 1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */
(function(a) {
	a.extend(a.fn, {
		livequery: function(e, d, c) {
			var b = this,
			f;
			if (a.isFunction(e)) {
				c = d,
				d = e,
				e = undefined
			}
			a.each(a.livequery.queries,
			function(g, h) {
				if (b.selector == h.selector && b.context == h.context && e == h.type && (!d || d.$lqguid == h.fn.$lqguid) && (!c || c.$lqguid == h.fn2.$lqguid)) {
					return (f = h) && false
				}
			});
			f = f || new a.livequery(this.selector, this.context, e, d, c);
			f.stopped = false;
			f.run();
			return this
		},
		expire: function(e, d, c) {
			var b = this;
			if (a.isFunction(e)) {
				c = d,
				d = e,
				e = undefined
			}
			a.each(a.livequery.queries,
			function(f, g) {
				if (b.selector == g.selector && b.context == g.context && (!e || e == g.type) && (!d || d.$lqguid == g.fn.$lqguid) && (!c || c.$lqguid == g.fn2.$lqguid) && !this.stopped) {
					a.livequery.stop(g.id)
				}
			});
			return this
		}
	});
	a.livequery = function(b, d, f, e, c) {
		this.selector = b;
		this.context = d;
		this.type = f;
		this.fn = e;
		this.fn2 = c;
		this.elements = [];
		this.stopped = false;
		this.id = a.livequery.queries.push(this) - 1;
		e.$lqguid = e.$lqguid || a.livequery.guid++;
		if (c) {
			c.$lqguid = c.$lqguid || a.livequery.guid++
		}
		return this
	};
	a.livequery.prototype = {
		stop: function() {
			var b = this;
			if (this.type) {
				this.elements.unbind(this.type, this.fn)
			} else {
				if (this.fn2) {
					this.elements.each(function(c, d) {
						b.fn2.apply(d)
					})
				}
			}
			this.elements = [];
			this.stopped = true
		},
		run: function() {
			if (this.stopped) {
				return
			}
			var d = this;
			var e = this.elements,
			c = a(this.selector, this.context),
			b = c.not(e);
			this.elements = c;
			if (this.type) {
				b.bind(this.type, this.fn);
				if (e.length > 0) {
					a.each(e,
					function(f, g) {
						if (a.inArray(g, c) < 0) {
							a.event.remove(g, d.type, d.fn)
						}
					})
				}
			} else {
				b.each(function() {
					d.fn.apply(this)
				});
				if (this.fn2 && e.length > 0) {
					a.each(e,
					function(f, g) {
						if (a.inArray(g, c) < 0) {
							d.fn2.apply(g)
						}
					})
				}
			}
		}
	};
	a.extend(a.livequery, {
		guid: 0,
		queries: [],
		queue: [],
		running: false,
		timeout: null,
		checkQueue: function() {
			if (a.livequery.running && a.livequery.queue.length) {
				var b = a.livequery.queue.length;
				while (b--) {
					a.livequery.queries[a.livequery.queue.shift()].run()
				}
			}
		},
		pause: function() {
			a.livequery.running = false
		},
		play: function() {
			a.livequery.running = true;
			a.livequery.run()
		},
		registerPlugin: function() {
			a.each(arguments,
			function(c, d) {
				if (!a.fn[d]) {
					return
				}
				var b = a.fn[d];
				a.fn[d] = function() {
					var e = b.apply(this, arguments);
					a.livequery.run();
					return e
				}
			})
		},
		run: function(b) {
			if (b != undefined) {
				if (a.inArray(b, a.livequery.queue) < 0) {
					a.livequery.queue.push(b)
				}
			} else {
				a.each(a.livequery.queries,
				function(c) {
					if (a.inArray(c, a.livequery.queue) < 0) {
						a.livequery.queue.push(c)
					}
				})
			}
			if (a.livequery.timeout) {
				clearTimeout(a.livequery.timeout)
			}
			a.livequery.timeout = setTimeout(a.livequery.checkQueue, 20)
		},
		stop: function(b) {
			if (b != undefined) {
				a.livequery.queries[b].stop()
			} else {
				a.each(a.livequery.queries,
				function(c) {
					a.livequery.queries[c].stop()
				})
			}
		}
	});
	a.livequery.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html");
	a(function() {
		a.livequery.play()
	})
})(jQuery);

/*
 * Poshy Tip jQuery plugin v1.1
 * http://vadikom.com/tools/poshy-tip-jquery-plugin-for-stylish-tooltips/
 * Copyright 2010-2011, Vasil Dinkov, http://vadikom.com/
 */

(function(e) {
	var a = [],
	d = /^url\(["']?([^"'\)]*)["']?\);?$/i,
	c = /\.png$/i,
	b = e.browser.msie && e.browser.version == 6;
	function f() {
		e.each(a,
		function() {
			this.refresh(true)
		})
	}
	e(window).resize(f);
	e.Poshytip = function(h, g) {
		this.$elm = e(h);
		this.opts = e.extend({},
		e.fn.poshytip.defaults, g);
		this.$tip = e(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join("")).appendTo(document.body);
		this.$arrow = this.$tip.find("div.tip-arrow");
		this.$inner = this.$tip.find("div.tip-inner");
		this.disabled = false;
		this.content = null;
		this.init()
	};
	e.Poshytip.prototype = {
		init: function() {
			a.push(this);
			var g = this.$elm.attr("title");
			this.$elm.data("title.poshytip", g !== undefined ? g: null).data("poshytip", this);
			if (this.opts.showOn != "none") {
				this.$elm.bind({
					"mouseenter.poshytip": e.proxy(this.mouseenter, this),
					"mouseleave.poshytip": e.proxy(this.mouseleave, this)
				});
				switch (this.opts.showOn) {
				case "hover":
					if (this.opts.alignTo == "cursor") {
						this.$elm.bind("mousemove.poshytip", e.proxy(this.mousemove, this))
					}
					if (this.opts.allowTipHover) {
						this.$tip.hover(e.proxy(this.clearTimeouts, this), e.proxy(this.mouseleave, this))
					}
					break;
				case "focus":
					this.$elm.bind({
						"focus.poshytip":
						e.proxy(this.show, this),
						"blur.poshytip": e.proxy(this.hide, this)
					});
					break
				}
			}
		},
		mouseenter: function(g) {
			if (this.disabled) {
				return true
			}
			this.$elm.attr("title", "");
			if (this.opts.showOn == "focus") {
				return true
			}
			this.clearTimeouts();
			this.showTimeout = setTimeout(e.proxy(this.show, this), this.opts.showTimeout)
		},
		mouseleave: function(g) {
			if (this.disabled || this.asyncAnimating && (this.$tip[0] === g.relatedTarget || jQuery.contains(this.$tip[0], g.relatedTarget))) {
				return true
			}
			var h = this.$elm.data("title.poshytip");
			if (h !== null) {
				this.$elm.attr("title", h)
			}
			if (this.opts.showOn == "focus") {
				return true
			}
			this.clearTimeouts();
			this.hideTimeout = setTimeout(e.proxy(this.hide, this), this.opts.hideTimeout)
		},
		mousemove: function(g) {
			if (this.disabled) {
				return true
			}
			this.eventX = g.pageX;
			this.eventY = g.pageY;
			if (this.opts.followCursor && this.$tip.data("active")) {
				this.calcPos();
				this.$tip.css({
					left: this.pos.l,
					top: this.pos.t
				});
				if (this.pos.arrow) {
					this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow
				}
			}
		},
		show: function() {
			if (this.disabled || this.$tip.data("active")) {
				return
			}
			this.reset();
			this.update();
			this.display();
			if (this.opts.timeOnScreen) {
				setTimeout(e.proxy(this.hide, this), this.opts.timeOnScreen)
			}
		},
		hide: function() {
			if (this.disabled || !this.$tip.data("active")) {
				return
			}
			this.display(true)
		},
		reset: function() {
			this.$tip.queue([]).detach().css("visibility", "hidden").data("active", false);
			this.$inner.find("*").poshytip("hide");
			if (this.opts.fade) {
				this.$tip.css("opacity", this.opacity)
			}
			this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left";
			this.asyncAnimating = false
		},
		update: function(j, k) {
			if (this.disabled) {
				return
			}
			var i = j !== undefined;
			if (i) {
				if (!k) {
					this.opts.content = j
				}
				if (!this.$tip.data("active")) {
					return
				}
			} else {
				j = this.opts.content
			}
			var h = this,
			g = typeof j == "function" ? j.call(this.$elm[0],
			function(l) {
				h.update(l)
			}) : j == "[title]" ? this.$elm.data("title.poshytip") : j;
			if (this.content !== g) {
				this.$inner.empty().append(g);
				this.content = g
			}
			this.refresh(i)
		},
		refresh: function(h) {
			if (this.disabled) {
				return
			}
			if (h) {
				if (!this.$tip.data("active")) {
					return
				}
				var k = {
					left: this.$tip.css("left"),
					top: this.$tip.css("top")
				}
			}
			this.$tip.css({
				left: 0,
				top: 0
			}).appendTo(document.body);
			if (this.opacity === undefined) {
				this.opacity = this.$tip.css("opacity")
			}
			var l = this.$tip.css("background-image").match(d),
			m = this.$arrow.css("background-image").match(d);
			if (l) {
				var i = c.test(l[1]);
				if (b && i) {
					this.$tip.css("background-image", "none");
					this.$inner.css({
						margin: 0,
						border: 0,
						padding: 0
					});
					l = i = false
				} else {
					this.$tip.prepend('<table border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({
						border: 0,
						padding: 0,
						"background-image": "none",
						"background-color": "transparent"
					}).find(".tip-bg-image").css("background-image", 'url("' + l[1] + '")').end().find("td").eq(3).append(this.$inner)
				}
				if (i && !e.support.opacity) {
					this.opts.fade = false
				}
			}
			if (m && !e.support.opacity) {
				if (b && c.test(m[1])) {
					m = false;
					this.$arrow.css("background-image", "none")
				}
				this.opts.fade = false
			}
			var o = this.$tip.find("table");
			if (b) {
				this.$tip[0].style.width = "";
				o.width("auto").find("td").eq(3).width("auto");
				var n = this.$tip.width(),
				j = parseInt(this.$tip.css("min-width")),
				g = parseInt(this.$tip.css("max-width"));
				if (!isNaN(j) && n < j) {
					n = j
				} else {
					if (!isNaN(g) && n > g) {
						n = g
					}
				}
				this.$tip.add(o).width(n).eq(0).find("td").eq(3).width("100%")
			} else {
				if (o[0]) {
					o.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find("td").eq(3).width("100%")
				}
			}
			this.tipOuterW = this.$tip.outerWidth();
			this.tipOuterH = this.$tip.outerHeight();
			this.calcPos();
			if (m && this.pos.arrow) {
				this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow;
				this.$arrow.css("visibility", "inherit")
			}
			if (h) {
				this.asyncAnimating = true;
				var p = this;
				this.$tip.css(k).animate({
					left: this.pos.l,
					top: this.pos.t
				},
				200,
				function() {
					p.asyncAnimating = false
				})
			} else {
				this.$tip.css({
					left: this.pos.l,
					top: this.pos.t
				})
			}
		},
		display: function(h) {
			var i = this.$tip.data("active");
			if (i && !h || !i && h) {
				return
			}
			this.$tip.stop();
			if ((this.opts.slide && this.pos.arrow || this.opts.fade) && (h && this.opts.hideAniDuration || !h && this.opts.showAniDuration)) {
				var m = {},
				l = {};
				if (this.opts.slide && this.pos.arrow) {
					var k, g;
					if (this.pos.arrow == "bottom" || this.pos.arrow == "top") {
						k = "top";
						g = "bottom"
					} else {
						k = "left";
						g = "right"
					}
					var j = parseInt(this.$tip.css(k));
					m[k] = j + (h ? 0 : (this.pos.arrow == g ? -this.opts.slideOffset: this.opts.slideOffset));
					l[k] = j + (h ? (this.pos.arrow == g ? this.opts.slideOffset: -this.opts.slideOffset) : 0) + "px"
				}
				if (this.opts.fade) {
					m.opacity = h ? this.$tip.css("opacity") : 0;
					l.opacity = h ? 0 : this.opacity
				}
				this.$tip.css(m).animate(l, this.opts[h ? "hideAniDuration": "showAniDuration"])
			}
			h ? this.$tip.queue(e.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit");
			this.$tip.data("active", !i)
		},
		disable: function() {
			this.reset();
			this.disabled = true
		},
		enable: function() {
			this.disabled = false
		},
		destroy: function() {
			this.reset();
			this.$tip.remove();
			delete this.$tip;
			this.content = null;
			this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip");
			a.splice(e.inArray(this, a), 1)
		},
		clearTimeouts: function() {
			if (this.showTimeout) {
				clearTimeout(this.showTimeout);
				this.showTimeout = 0
			}
			if (this.hideTimeout) {
				clearTimeout(this.hideTimeout);
				this.hideTimeout = 0
			}
		},
		calcPos: function() {
			var n = {
				l: 0,
				t: 0,
				arrow: ""
			},
			h = e(window),
			k = {
				l: h.scrollLeft(),
				t: h.scrollTop(),
				w: h.width(),
				h: h.height()
			},
			p,
			j,
			m,
			i,
			q,
			g;
			if (this.opts.alignTo == "cursor") {
				p = j = m = this.eventX;
				i = q = g = this.eventY
			} else {
				var o = this.$elm.offset(),
				l = {
					l: o.left,
					t: o.top,
					w: this.$elm.outerWidth(),
					h: this.$elm.outerHeight()
				};
				p = l.l + (this.opts.alignX != "inner-right" ? 0 : l.w);
				j = p + Math.floor(l.w / 2);
				m = p + (this.opts.alignX != "inner-left" ? l.w: 0);
				i = l.t + (this.opts.alignY != "inner-bottom" ? 0 : l.h);
				q = i + Math.floor(l.h / 2);
				g = i + (this.opts.alignY != "inner-top" ? l.h: 0)
			}
			switch (this.opts.alignX) {
			case "right":
			case "inner-left":
				n.l = m + this.opts.offsetX;
				if (n.l + this.tipOuterW > k.l + k.w) {
					n.l = k.l + k.w - this.tipOuterW
				}
				if (this.opts.alignX == "right" || this.opts.alignY == "center") {
					n.arrow = "left"
				}
				break;
			case "center":
				n.l = j - Math.floor(this.tipOuterW / 2);
				if (n.l + this.tipOuterW > k.l + k.w) {
					n.l = k.l + k.w - this.tipOuterW
				} else {
					if (n.l < k.l) {
						n.l = k.l
					}
				}
				break;
			default:
				n.l = p - this.tipOuterW - this.opts.offsetX;
				if (n.l < k.l) {
					n.l = k.l
				}
				if (this.opts.alignX == "left" || this.opts.alignY == "center") {
					n.arrow = "right"
				}
			}
			switch (this.opts.alignY) {
			case "bottom":
			case "inner-top":
				n.t = g + this.opts.offsetY;
				if (!n.arrow || this.opts.alignTo == "cursor") {
					n.arrow = "top"
				}
				if (n.t + this.tipOuterH > k.t + k.h) {
					n.t = i - this.tipOuterH - this.opts.offsetY;
					if (n.arrow == "top") {
						n.arrow = "bottom"
					}
				}
				break;
			case "center":
				n.t = q - Math.floor(this.tipOuterH / 2);
				if (n.t + this.tipOuterH > k.t + k.h) {
					n.t = k.t + k.h - this.tipOuterH
				} else {
					if (n.t < k.t) {
						n.t = k.t
					}
				}
				break;
			default:
				n.t = i - this.tipOuterH - this.opts.offsetY;
				if (!n.arrow || this.opts.alignTo == "cursor") {
					n.arrow = "bottom"
				}
				if (n.t < k.t) {
					n.t = g + this.opts.offsetY;
					if (n.arrow == "bottom") {
						n.arrow = "top"
					}
				}
			}
			this.pos = n
		}
	};
	e.fn.poshytip = function(h) {
		if (typeof h == "string") {
			var g = arguments,
			k = h;
			Array.prototype.shift.call(g);
			if (k == "destroy") {
				this.die("mouseenter.poshytip").die("focus.poshytip")
			}
			return this.each(function() {
				var l = e(this).data("poshytip");
				if (l && l[k]) {
					l[k].apply(l, g)
				}
			})
		}
		var i = e.extend({},
		e.fn.poshytip.defaults, h);
		if (!e("#poshytip-css-" + i.className)[0]) {
			e(['<style id="poshytip-css-', i.className, '" type="text/css">', "div.", i.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", i.className, " table, div.", i.className, " td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;}", "div.", i.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", i.bgImageFrameSize, "px;width:", i.bgImageFrameSize, "px;overflow:hidden;}", "div.", i.className, " td.tip-right{background-position:100% 0;}", "div.", i.className, " td.tip-bottom{background-position:100% 100%;}", "div.", i.className, " td.tip-left{background-position:0 100%;}", "div.", i.className, " div.tip-inner{background-position:-", i.bgImageFrameSize, "px -", i.bgImageFrameSize, "px;}", "div.", i.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"].join("")).appendTo("head")
		}
		if (i.liveEvents && i.showOn != "none") {
			var j = e.extend({},
			i, {
				liveEvents: false
			});
			switch (i.showOn) {
			case "hover":
				this.live("mouseenter.poshytip",
				function() {
					var l = e(this);
					if (!l.data("poshytip")) {
						l.poshytip(j).poshytip("mouseenter")
					}
				});
				break;
			case "focus":
				this.live("focus.poshytip",
				function() {
					var l = e(this);
					if (!l.data("poshytip")) {
						l.poshytip(j).poshytip("show")
					}
				});
				break
			}
			return this
		}
		return this.each(function() {
			new e.Poshytip(this, i)
		})
	};
	e.fn.poshytip.defaults = {
		content: "[title]",
		className: "tip-yellow",
		bgImageFrameSize: 10,
		showTimeout: 500,
		hideTimeout: 100,
		timeOnScreen: 0,
		showOn: "hover",
		liveEvents: false,
		alignTo: "cursor",
		alignX: "right",
		alignY: "top",
		offsetX: -22,
		offsetY: 18,
		allowTipHover: true,
		followCursor: false,
		fade: true,
		slide: true,
		slideOffset: 8,
		showAniDuration: 300,
		hideAniDuration: 300
	}
})(jQuery); (function(a) {
	a.fn.lightbox_me = function(b) {
		return this.each(function() {
			function j() {
				var b = e[0].style;
				c.destroyOnClose ? e.add(d).remove() : e.add(d).hide(),
				c.parentLightbox && c.parentLightbox.fadeIn(200),
				f.remove(),
				e.undelegate(c.closeSelector, "click"),
				a(window).unbind("reposition", l),
				a(window).unbind("reposition", m),
				a(window).unbind("scroll", m),
				a(window).unbind("keyup.lightbox_me"),
				g && b.removeExpression("top"),
				c.onClose()
			}
			function k(a) { (a.keyCode == 27 || a.DOM_VK_ESCAPE == 27 && a.which == 0) && c.closeEsc && j()
			}
			function l() {
				a(window).height() < a(document).height() ? (d.css({
					height: a(document).height() + "px"
				}), f.css({
					height: a(document).height() + "px"
				})) : (d.css({
					height: "100%"
				}), g && (a("html,body").css("height", "100%"), f.css("height", "100%")))
			}
			function m() {
				var b = e[0].style;
				e.css({
					left: "50%",
					marginLeft: e.outerWidth() / 2 * -1,
					zIndex: c.zIndex + 3
				});
				if (e.height() + 80 >= a(window).height() && (e.css("position") != "absolute" || g)) {
					var d = a(document).scrollTop() + 40;
					e.css({
						position: "absolute",
						top: d + "px",
						marginTop: 0
					}),
					g && b.removeExpression("top")
				} else if (e.height() + 80 < a(window).height()) if (g) {
					b.position = "absolute";
					if (c.centered) b.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
					b.marginTop = 0;
					else {
						var f = c.modalCSS && c.modalCSS.top ? parseInt(c.modalCSS.top) : 0;
						b.setExpression("top", "((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + f + ') + "px"')
					}
				} else c.centered ? e.css({
					position: "fixed",
					top: "50%",
					marginTop: e.outerHeight() / 2 * -1
				}) : e.css({
					position: "fixed"
				}).css(c.modalCSS)
			}
			var c = a.extend({},
			a.fn.lightbox_me.defaults, b),
			d = a(),
			e = a(this),
			f = a('<iframe id="foo" style="z-index: ' + (c.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),
			g = a.browser.msie && a.browser.version < 7;
			if (c.showOverlay) {
				var h = a(".js_lb_overlay:visible");
				h.length > 0 ? d = a('<div class="lb_overlay_clear js_lb_overlay"/>') : d = a('<div class="' + c.classPrefix + '_overlay js_lb_overlay"/>')
			}
			if (g) {
				var i = /^https/i.test(window.location.href || "") ? "javascript:false": "about:blank";
				f.attr("src", i),
				a("body").append(f)
			}
			a("body").append(e.hide()).append(d),
			c.showOverlay && (l(), d.css({
				position: "absolute",
				width: "100%",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: c.zIndex + 2,
				display: "none"
			}), d.hasClass("lb_overlay_clear") || d.css(c.overlayCSS)),
			c.showOverlay ? d.fadeIn(c.overlaySpeed,
			function() {
				m(),
				e[c.appearEffect](c.lightboxSpeed,
				function() {
					l(),
					m(),
					c.onLoad()
				})
			}) : (m(), e[c.appearEffect](c.lightboxSpeed,
			function() {
				c.onLoad()
			})),
			c.parentLightbox && c.parentLightbox.fadeOut(200),
			a(window).resize(l).resize(m).scroll(m),
			a(window).bind("keyup.lightbox_me", k),
			c.closeClick && d.click(function(a) {
				j(),
				a.preventDefault
			}),
			e.delegate(c.closeSelector, "click",
			function(a) {
				j(),
				a.preventDefault()
			}),
			e.bind("close", j),
			e.bind("reposition", m)
		})
	},
	a.fn.lightbox_me.defaults = {
		appearEffect: "fadeIn",
		appearEase: "",
		overlaySpeed: 250,
		lightboxSpeed: 300,
		closeSelector: ".close",
		closeClick: !0,
		closeEsc: !0,
		destroyOnClose: !1,
		showOverlay: !0,
		parentLightbox: !1,
		onLoad: function() {},
		onClose: function() {},
		classPrefix: "lb",
		zIndex: 999,
		centered: !1,
		modalCSS: {
			top: "40px"
		},
		overlayCSS: {
			background: "black",
			opacity: .3
		}
	}
})(jQuery);
function buffer(a, b, c) {
	var d;
	return function() {
		if (d) return;
		d = setTimeout(function() {
			a.call(this),
			d = undefined
		},
		b)
	}
}
function AddBookmar() {
	var a = "http://www.qiushibaike.com",
	b = "糗事百科";
	if (window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(b, a, "");
	else if (window.opera && window.print) {
		var c = document.createElement("a");
		c.setAttribute("href", a),
		c.setAttribute("title", b),
		c.setAttribute("rel", "sidebar"),
		c.click()
	} else if (window.external) try {
		window.external.AddFavorite(a, b)
	} catch(c) {} else alert("收藏方式:请在菜单中选择书签将本站加入,方便以后查看(快捷键:CTRL+D)")
}
function shareToSina(a) {
	var b = screen,
	c = document,
	d = encodeURIComponent,
	e = $("#article" + a),
	f = $(".permlink", "#qiushi_counts_" + a).attr("href"),
	g = "http://v.t.sina.com.cn/share/share.php?",
	h = ["url=", d(f), "&title=", d("糗事" + a), "&appkey=2924220432"].join(""),
	e = function() {
		window.open(g + h, "mb", ["toolbar=0,status=0,resizable=1,width=620,height=450,left=", (b.width - 620) / 2, ",top=", (b.height - 450) / 2].join("")) || (f = g + h)
	};
	/Firefox/.test(navigator.userAgent) ? setTimeout(e, 0) : e()
}
function showAnimation(a, b) {
	var c = $("#" + a),
	d = c.offset(),
	e = $('<div id="vote-ani" class="' + (b > 0 ? "pos": "neg") + '" style="font-size:10px;z-index:1000">' + (b > 0 ? "+1": "-1") + "</div>");
	e.appendTo("body"),
	d.top += 7,
	d.left += 30,
	b < 0 && (d.left += 5),
	e.offset(d).css("display", "block").animate({
		"font-size": "64px",
		opacity: 0,
		left: "-=40px"
	},
	350, "linear",
	function() {
		e.remove()
	})
}
function SelfXY() {
	var a, b;
	return self.pageYOffset || self.pageXOffset ? (a = self.pageYOffset, b = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop || document.documentElement.scrollLeft ? (a = document.documentElement.scrollTop, b = document.documentElement.scrollLeft) : document.body && (a = document.body.scrollTop, b = document.body.scrollLeft),
	arrayPageScroll = new Array(b + event.clientX, a + event.clientY),
	arrayPageScroll
}
function SpeedTester() {
	this.displayControlId = "divSpeed",
	this.goodColor = "#33CC33",
	this.averageColor = "#3300FF",
	this.badColor = "#FF0033",
	this.goodMessage = "仅用{0}秒就载入了整个页面，您的网络真棒",
	this.averageMessage = "载入整个页面用了{0}秒，您的网络马马虎虎",
	this.badMessage = "居然用了{0}秒才把整个页面载入进来，实在是抱歉",
	this.goodSpeed = 1e4,
	this.averageSpeed = 5e4,
	this.badSpeed = 1e5,
	this.beginTest = function() {
		this.startTime = new Date,
		window.onload = function() {
			var a = document.getElementById(SpeedTester.displayControlId);
			if (!a) return;
			SpeedTester.endTime = new Date;
			var b = SpeedTester.endTime - SpeedTester.startTime;
			b <= SpeedTester.goodSpeed ? (a.style.backgroundColor = SpeedTester.goodColor, a.title = SpeedTester.goodMessage.replace("{0}", b / 1e3)) : b <= SpeedTester.averageSpeed ? (a.style.backgroundColor = SpeedTester.averageColor, a.title = SpeedTester.averageMessage.replace("{0}", b / 1e3)) : (a.style.backgroundColor = SpeedTester.badColor, a.title = SpeedTester.badMessage.replace("{0}", b / 1e3))
		}
	}
}
function addBookmark(a, b) {
	if (window.sidebar) window.sidebar.addPanel(a, b, "");
	else if (document.all) window.external.AddFavorite(b, a);
	else if (window.opera && window.print) return ! 0;
	return ! 1
}
function watch(a) {
	$("#favorite-" + a).children("a").attr("href", "/articles/remove_favorite/" + a).html("取消围观").removeClass("star").addClass("stared")
}
function unwatch(a) {
	$("#favorite-" + a).children("a").attr("href", "/articles/add_favorite/" + a).html("围观").removeClass("stared").addClass("star")
}
function open_form(a) {
	$("#quickform-" + a).show(),
	$("#reply-" + a).hide()
}
function close_form(a) {
	$("#quickform-" + a).hide(),
	$("#reply-" + a).show()
}
function reply(a) {
	var b = $("#quickform-" + a);
	return $.ajax({
		type: "POST",
		url: b.attr("action"),
		data: b.serialize(),
		success: function() {
			$("#comment-" + a)
		}
	}),
	close_form(a),
	!1
}
function hidevotelink(a, b, c, d) {
	var e, f;
	typeof c == "undefined" ? e = parseInt($("#up-" + a).text()) : e = c,
	typeof d == "undefined" ? f = parseInt($("#dn-" + a).text()) : f = d,
	$("#up-" + a).html(e),
	$("#dn-" + a).html(f),
	b == "up" ? $("#vote-up-" + a).find("a").addClass("voted") : $("#vote-dn-" + a).find("a").addClass("voted"),
	$("#vote-up-" + a).find("a").addClass("disable"),
	$("#vote-dn-" + a).find("a").addClass("disable")
}
function vote2(a, b) {
	if ($("#up-" + a).hasClass("disable") || $("#dn-" + a).hasClass("disable")) return;
	if (currentUser) {
		var c = parseInt($("#up-" + a).text()),
		d = parseInt($("#dn-" + a).text()),
		e = b > 0 ? "up": "dn";
		showAnimation("vote-" + e + "-" + a, b),
		$.getJSON("http://www.qiushibaike.com/new3/vote/" + mkvotestr(a, currentUser.id, b)),
		b > 0 ? c++:d--,
		hidevotelink(a, e, c, d),
		VoteHistory.voteState(a, b)
	} else showLoginForm(),
	$(document).bind("after_logged_in",
	function() {
		vote2(a, b)
	})
}
function getCurUsr(a) {
	a && a.user ? currentUser = a.user: currentUser = null,
	vote2m(curId, curV)
}
function mkvotestr(a, b, c) {
	return c > 0 ? _Base64.encode(a + "+" + b) : _Base64.encode(a + "-" + b)
}
function vote2m(a, b) {
	if (!currentUser) $.readCookie("auth_token") ? (curId = a, curV = b, $.getJSON("/session.js?" + (new Date).getTime(), getCurUsr)) : window.location.href = "/login";
	else {
		var c = parseInt($("#pos-score-" + a).text()),
		d = parseInt($("#neg-score-" + a).text()),
		e = b > 0 ? "up": "dn";
		showAnimation(e + "-" + a, b),
		b > 0 ? c++:d--,
		hidevotelink(a, c, d),
		$.get("/new3/vote/=" + mkvotestr(a, currentUser.id, b))
	}
}
function clear_warning(a) {
	var b = $(this);
	b.focus(),
	$.trim(b.val()) == COMMENT_WARNING && (b.val(""), b.removeClass("original")),
	b.blur(function() {
		var a = $(this);
		$.trim(a.val()) == "" && (a.val(COMMENT_WARNING), a.addClass("original"))
	})
}
function postComment() {
	var a = $(this),
	b = this.form,
	c = $(b),
	d = $.trim(c.find(".comment_input").val());
	return d == "" || d == COMMENT_WARNING ? !1 : ($.post(b.action, c.serialize(),
	function(b) {
		a.val("发表评论").attr("disabled", !1),
		c.find(".comment_input").val("").height("50px");
		var d = $("#r" + c.attr("data-article_id"));
		d.size() > 0 ? d.append(b) : $(b).insertBefore(c)
	}), this.value = "正在发表", this.disabled = !0, !1)
}
function article_comments_path(a) {
	return "/comment/" + a
}
function showall(a) {
	$(".hide", "#qiushi_comments_" + a).toggle()
}
function loadScores() {
	var a = [];
	$(".article").each(function(b, c) {
		var d = parseInt($(c).attr("id").replace("article", "")); ! isNaN(d) && d > 0 && a.push(d)
	});
	if (a.length == 0) return;
	$.getJSON("/scores", {
		ids: a.join(" ")
	},
	function(a, b) {
		$.each(a,
		function(a, b) {
			var c = b.score;
			$("#pos-score-" + a).text(c.pos),
			$("#neg-score-" + a).text(c.neg),
			b.rated && hidevotelink(a, c.pos, c.neg),
			typeof b.watched != "undefined" && (b.watched ? watch(a) : unwatch(a)),
			c.public_comments_count == 0 ? $("#c-" + a).text("暂无评论") : $("#c-" + a).text(c.public_comments_count + "条评论")
		})
	})
}
function comment_vote(a, b) {
	var c = $("#comment-" + a + " .score");
	c.text(parseInt(c.text()) + b),
	$("#comment-score-" + a + " a").css("visibility", "hidden");
	if ("jStore" in jQuery) {
		if (jQuery.jStore.CurrentEngine.get("c" + a)) return;
		jQuery.jStore.CurrentEngine.set("c" + a, !0)
	}
	$.post("/comments/" + a + (b > 0 ? "/up": "/dn"))
}
function replyComment(a, b, c) {
	var d = $("form", "#qiushi_comments_" + b),
	e = $("#comment-" + a);
	$("input[name=comment[parent_id]]", d).val(a);
	var f = $("textarea", d),
	g = f.val();
	nv = "回复" + c + "L:" + (g == COMMENT_WARNING ? "": g),
	f.val(nv),
	$.scrollTo(d, 1e3),
	f.focus(),
	f.setCursorPosition(nv.length)
}
function gotofloor(a, b) {
	var c = $("#comment-" + a),
	d = c.siblings(".floor-" + b);
	d.size() > 0 && $.scrollTo(d, 1e3)
}
function floorLink() {
	$(".comment-block").each(function(a, b) {
		b = $(b),
		lz = $(this.parentNode.parentNode.parentNode).find(".author>a"),
		lx = b.find(".userlogin>a"),
		lz.length > 0 && lx.length > 0 && lx[0].href == lz[0].href && b.find(".userlogin").attr("class", "userlogin hostname");
		var c = b.find(".body"),
		d = c.html(),
		e = parseInt(b.attr("id").replace("comment-", ""));
		d = d.replace(/(\d+)(f|F|L|l|楼)/g,
		function(a, b) {
			return $.browser.msie ? setTimeout("createFloorLink(" + e + ", " + b + ")", 200) : setTimeout(createFloorLink, 200, e, b),
			"<a href='#comment-" + e + "' id='fl-" + e + "-" + b + "'>" + a + "</a>"
		}),
		c.html(d)
	})
}
function article_comments_path(a) {
	return "/comment/" + a
}
function loadComments(a) {
	var b = $(this),
	c = /\d+/.exec(b.attr("id"));
	if (!c) return;
	c = c[0];
	var d = $("#qiushi_comments_" + c);
	if (d.size() == 0) {
		var e = b.html();
		b.text("..."),
		$.get(article_comments_path(c), null,
		function(a) {
			$("#qiushi_counts_" + c).after(a).toggleClass("qiushi_counts_afterclick"),
			$("#l" + c).height($("#r" + c).height()),
			d.show(),
			b.html(e).trigger("loaded"),
			typeof decrypt == "function" && b.ready(decrypt),
			b.ready(floorLink)
		})
	} else d.toggle(),
	$("#qiushi_counts_" + c).toggleClass("qiushi_counts_afterclick");
	b.blur(),
	a.preventDefault()
}
function showall(a) {
	$(".hide", "#qiushi_comments_" + a).toggle()
}
function closeComments(a) {
	var b = $(this),
	c = /\d+/.exec(b.attr("id"));
	c = c[0],
	$("#qiushi_comments_" + c).toggle(),
	window.location.hash = "#qiushi_counts_" + c
}
function dbclose(a) {
	$(this).toggle();
	var b = $(this),
	c = /\d+/.exec(b.attr("id"));
	c = c[0],
	window.location.hash = "#qiushi_counts_" + c
}
function tagRepl() {
	var a = 0;
	$(".untagged").each(function(b) {
		$(this).toggleClass("untagged"),
		qiushiMap[$(this).attr("id")] ? $(this).hide() : (qiushiMap[$(this).attr("id")] = 1, a++)
	})
}
function showMore() {
	$("#loadingBar").show(),
	$("#loadError").hide(),
	$.ajax({
		type: "GET",
		url: "/" + theme + "/5/page/" + qiushiOff+++"?more",
		dataType: "html",
		success: function(a) {
			$(".qiushiData").append(a),
			$("#loadingBar").hide(),
			tagRepl() <= 0 && $("#loadError").show()
		},
		error: function(a, b, c) {
			qiushiOff--,
			$("#loadingBar").hide(),
			$("#loadError").show()
		}
	})
}
function truncTitle(a) {
	var b = 0,
	c = 0,
	d = a.replace(/[ \-=\n]+/g, " ");
	return d.substring(0, 20)
}
function shareQiushi() {
	var a = $(this),
	b = /\d+/.exec(a.attr("id"));
	b = b[0];
	var c = $("#qiushi_tag_" + b + " div.content"),
	d = $("#qiushi_tag_" + b + " div.thumb img"),
	e = truncTitle(c.text()),
	f = {
		msg: e,
		title: "糗事百科",
		pic: d ? "": d.attr("src"),
		desc: c.text(),
		param: ""
	};
	qplus.system.shareApp(f),
	alert(e)
}
function showLogin() {
	$.browser.msie ? document.styleSheets[0].addRule(".login", "display:block !important") : document.styleSheets[0].insertRule(".login{display:block !important;}", 0),
	showLogout("none")
}
function showSuggest() {
	$.browser.msie ? document.styleSheets[0].addRule(".suggest-form", "display:inline !important") : document.styleSheets[0].insertRule(".suggest-form{display:inline !important;}", 0)
}
function showLogout(a) {
	a = a || "inherited",
	$.browser.msie ? document.styleSheets[0].addRule(".logout", "display:" + a + " !important") : document.styleSheets[0].insertRule(".logout {display:" + a + " !important;}", 0)
}
function loadLoginCookie() {
	var user_id = $.readCookie("_qqq_user_id"),
	user = $.readCookie("_qqq_user");
	if (user_id && user) try {
		return user = '{"unread_messages_count": 0, "user": {"login": "' + _Base64.decode(user) + '"}}',
		user = eval("(" + user + ")"),
		user_id && (user.user.id = parseInt(user_id)),
		loadLogin(user),
		user
	} catch(e) {}
	return $.readCookie("_qqq_auth_token") || $.readCookie("_qqq_session") ? $.getJSON("/session.js?" + (new Date).getTime(), loadLogin) : "{}"
}
function loadLogin(a) {
	a && a.user ? (currentUser = a.user, $(".username").text(currentUser.login), showLogout("none"), a.unread_messages_count > 0 ? ($("#unread_messages_count").text(a.unread_messages_count), document.title = "您收到" + a.unread_messages_count + "个小纸条 | " + document.title, $("#unread_messages_count").css("display", "")) : $("#unread_messages_count").hide(), a.unread_notifications_count && a.unread_notifications_count > 0 && $("#unread_notifications_count").text(a.unread_notifications_count), showLogin(), VoteHistory.updateArticleStates(), queryNewMessage()) : (currentUser = null, showLogout())
}
function showLoginForm() {
	$("#login-form").lightbox_me({
		centered: !0,
		onLoad: function() {
			$("#login").focus()
		}
	})
}
function showSuggestForm() {
	$("#suggest-form").lightbox_me({
		centered: !0,
		onLoad: function() {
			$("#suggest-text").focus()
		}
	})
}
function startQueryNewMessage() {
	$(document).ready(function() {
		setInterval("queryNewMessage()", 3e5)
	})
}
function queryNewMessage() {
	currentUser && $.ajax({
		type: "GET",
		url: "/new4/messages?query_new_msg=" + Math.floor(Math.random() * 316661),
		dataType: "text",
		success: function(a) {
			newmsg = parseInt(a),
			newmsg && newmsg > 0 && ($("#unread_messages_count").text(newmsg), reg_result = msg_regexp.exec(document.title), reg_result ? document.title = document.title.replace(reg_result, "您收到" + newmsg + "个小纸条") : document.title = "您收到" + newmsg + "个小纸条 | " + document.title, $("#unread_messages_count").css("display", ""))
		}
	})
} (function() {
	function e() {
		var d = document.body.scrollTop || document.documentElement.scrollTop;
		d > b ? (a.className = "div1 div2", c && (a.style.top = d - b + "px")) : a.className = "div1"
	}
	var a = document.getElementById("float");
	if (a == undefined) return ! 1;
	var b = 0,
	c, d = a;
	while (d) b += d.offsetTop,
	d = d.offsetParent;
	c = window.ActiveXObject && !window.XMLHttpRequest;
	if (!c || !0) window.onscroll = buffer(e, 150, this)
})();
var VoteHistory = {
	_Historys: null,
	_IsValid: null,
	voteState: function(a, b) {
		if (!this.isValid()) return 0;
		if (b == null) return this._Historys[a];
		this._Historys[a] = b,
		this.saveHistory()
	},
	isValid: function() {
		return this._IsValid == null && (this._IsValid = window.localStorage ? !0 : !1),
		this._IsValid
	},
	readHistory: function() {
		this._Historys = window.localStorage.getItem("vote_history"),
		this._Historys = JSON.parse(this._Historys),
		this._Historys == null && (this._Historys = {})
	},
	saveHistory: function() {
		if (this._Historys == null) return;
		var a = 500,
		b = function(a) {
			var b = [];
			for (var c in a) b.push(c);
			return b
		},
		c = b(this._Historys);
		if (c.length > a) {
			var d = c.length - a;
			for (i = 0; i < d; i++) delete this._Historys[c[i]]
		}
		var e = JSON.stringify(this._Historys);
		window.localStorage.setItem("vote_history", e)
	},
	_init: function() {
		this.isValid() && this.readHistory()
	},
	updateArticleStates: function() {
		if (!this.isValid()) return;
		articles = [],
		$.each($("div[id^=qiushi_counts_]"),
		function() {
			articles.push( + this.id.replace("qiushi_counts_", ""))
		}),
		$.each(articles,
		function(a) {
			var b = articles[a],
			c = VoteHistory.voteState(b);
			if (c != undefined) {
				var d = parseInt($("#up-" + b).text()),
				e = parseInt($("#dn-" + b).text()),
				f = c > 0 ? "up": "dn";
				c > 0 ? d++:e--,
				hidevotelink(b, f, d, e)
			}
		})
	}
};
VoteHistory._init(),
function(a) {
	a.setCookie = function(a, b, c) {
		if (typeof a == "undefined" || typeof b == "undefined") return ! 1;
		var d = a + "=" + encodeURIComponent(b);
		c.domain && (d += "; domain=" + c.domain),
		c.path && (d += "; path=" + c.path);
		if (c.duration) {
			var e = new Date;
			e.setTime(e.getTime() + c.duration * 24 * 60 * 60 * 1e3),
			d += "; expires=" + e.toGMTString()
		}
		return c.secure && (d += "; secure"),
		document.cookie = d
	},
	a.delCookie = function(b) {
		return a.setCookie(b, "", {
			duration: -1
		})
	},
	a.readCookie = function(a) {
		var b = document.cookie.match("(?:^|;)\\s*" + a.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1") + "=([^;]*)");
		return b ? decodeURIComponent(b[1]) : null
	},
	a.CooQueryVersion = "v 2.0"
} (jQuery),
new
function(a) {
	a.fn.setCursorPosition = function(b) {
		if (a(this).get(0).setSelectionRange) a(this).get(0).setSelectionRange(b, b);
		else if (a(this).get(0).createTextRange) {
			var c = a(this).get(0).createTextRange();
			c.collapse(!0),
			c.moveEnd("character", b),
			c.moveStart("character", b),
			c.select()
		}
	}
} (jQuery);
var l = window.location.href,
currentUser, _Base64 = {
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	_utf8_encode: function(a) {
		a = a.replace(/\r\n/g, "\n");
		var b = "";
		for (var c = 0; c < a.length; c++) {
			var d = a.charCodeAt(c);
			d < 128 ? b += String.fromCharCode(d) : d > 127 && d < 2048 ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(d & 63 | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(d & 63 | 128))
		}
		return b
	},
	_utf8_decode: function(a) {
		var b = [],
		c = 0,
		d = a.length,
		e = 0,
		f = 0,
		g = 0,
		h = 0;
		while (c < d) e = a.charCodeAt(c),
		e < 128 ? (b.push(String.fromCharCode(e)), c++) : e > 191 && e < 224 ? (g = a.charCodeAt(c + 1), b.push(String.fromCharCode((e & 31) << 6 | g & 63)), c += 2) : (g = a.charCodeAt(c + 1), h = a.charCodeAt(c + 2), b.push(String.fromCharCode((e & 15) << 12 | (g & 63) << 6 | h & 63)), c += 3);
		return b.join("")
	},
	encode: function(a) {
		var b = "",
		c, d, e, f, g, h, i, j = 0;
		a = _Base64._utf8_encode(a);
		while (j < a.length) c = a.charCodeAt(j++),
		d = a.charCodeAt(j++),
		e = a.charCodeAt(j++),
		f = c >> 2,
		g = (c & 3) << 4 | d >> 4,
		h = (d & 15) << 2 | e >> 6,
		i = e & 63,
		isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64),
		b = b + this._keyStr.charAt(f) + this._keyStr.charAt(g) + this._keyStr.charAt(h) + this._keyStr.charAt(i);
		return b
	},
	decode: function(a) {
		var b = [],
		c,
		d,
		e,
		f,
		g,
		h,
		i,
		j = 0;
		a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		var k = a.length;
		while (j < k) f = this._keyStr.indexOf(a.charAt(j++)),
		g = this._keyStr.indexOf(a.charAt(j++)),
		h = this._keyStr.indexOf(a.charAt(j++)),
		i = this._keyStr.indexOf(a.charAt(j++)),
		c = f << 2 | g >> 4,
		d = (g & 15) << 4 | h >> 2,
		e = (h & 3) << 6 | i,
		b.push(String.fromCharCode(c)),
		h != 64 && b.push(String.fromCharCode(d)),
		i != 64 && b.push(String.fromCharCode(e));
		return this._utf8_decode(b.join(""))
	}
};
SpeedTester = new SpeedTester,
SpeedTester.beginTest(),
$(function() {
	$(".favorite-button").click(function() {
		return $(this).children("a").attr("href") != "/login" ? ((new $(this)).load($(this).children("a").attr("href")), !1) : !0
	}),
	$("input.numeric").keydown(function(a) {
		var b = a.keyCode;
		return b > 47 && b < 58 || b == 8 || b == 46 || b == 13 || b >= 96 && b <= 105 ? !0 : (a.returnValue = !1, !1)
	})
});
var voteQueue = [],
curId,
curV,
COMMENT_WARNING = "请不要发表与本内容无关的评论，您有了账号就是有身份的人了，我们可认识您。";
$(function() {
	$("#comment_submit").live("click", postComment),
	$(".comment_input").live("click", clear_warning).live("mouseover", clear_warning);
	var a = window.location.hash;
	a.indexOf("#c-") === 0 && $(a).click()
}),
$(document).keypress(function(a) {
	if (a.ctrlKey && a.which == 13 || a.which == 10) {
		var b = a.target;
		if (b.form) {
			var c = $(b.form).find("input.comment_submit");
			postComment.call(c[0])
		}
	}
}),
$(loadScores),
$(function() {
	$(".comment").live("mouseenter",
	function() {
		$(this).addClass("hover"),
		currentUser && ($(this).children(".reply").css("visibility", "visible"), $(this).children(".report").css("display", "inline"))
	}).live("mouseleave",
	function() {
		$(this).removeClass("hover"),
		$(this).children(".reply").css("visibility", "hidden"),
		$(this).children(".report").css("display", "none")
	})
});
var createFloorLink = function(a, b) {
	$("#fl-" + a + "-" + b).click(function(a) {
		var b = $(this).attr("id").split("-");
		gotofloor(parseInt(b[1]), parseInt(b[2])),
		a.preventDefault()
	}).poshytip({
		className: "tip-twitter",
		alignX: "center",
		showTimeout: 1,
		allowTipHover: !1,
		fade: !1,
		slide: !1,
		content: function() {
			var c = $("#comment-" + a).parents("div").contents(".floor-" + b).html();
			return c
		}
	})
},
qiushiMap = {},
qiushiOff = 2,
theme = "hot",
bMore = !0;
$(function() {
	$("a.qiushi_comments").live("click", loadComments),
	$("a.more").click(showMore),
	$("a.closebtn").live("click", closeComments),
	$("div.comments-close").live("click", closeComments),
	$("a.sharebtn").live("click", shareQiushi),
	$("div#loadError").live("click", showMore),
	$("div.block").hover(function() {
		$(this).find("li.uptip span").fadeIn(300)
	},
	function() {
		$(this).find("li.uptip span").fadeOut(300)
	})
}),
$(document).ready(function() {
	$("a").bind("focus",
	function() {
		this.blur && this.blur()
	});
	var a = /\/(\w+)/.exec(document.URL);
	a && (theme = a[1])
});
var showReport;
$(function() {
	showReport = function(a) {
		var b = $("#comment-" + a + " .report"),
		c = b.offset(),
		d = $("#comment-" + a);
		c.top += b.height(),
		c.left += b.width(),
		$("#report-form").trigger("close"),
		d.addClass("highlight"),
		$("#report-form input[name=comment_id]").val(a),
		$("#report-form").css("display", "block").offset(c)
	},
	$("#report-form").bind("close",
	function() {
		$(this).css("display", "none"),
		$(".highlight").removeClass("highlight")
	}),
	$("#report-form form").submit(function() {
		var a = this.comment_id.value,
		b = this.action = "/new4/comments/report",
		c = $(this);
		return submit_button = $("button[type=submit]", this).attr("disabled", "disabled"),
		$.post(b, c.serialize(),
		function() {
			submit_button.removeAttr("disabled"),
			$("#report-form").trigger("close"),
			$("#report-form").find("input[type=radio]").prop("checked", !1)
		}),
		submit_button.removeAttr("disabled"),
		$("#report-form").trigger("close"),
		$("#report-form").find("input[type=radio]").prop("checked", !1),
		!1
	}),
	$("#close-form").click(function(a) {
		a.preventDefault(),
		$("#report-form").trigger("close")
	})
}),
$(loadLoginCookie);
var msg_regexp = new RegExp("您收到\\d+个小纸条");
$(startQueryNewMessage),
$(function() {
	$(".need-login").click(function(a) {
		a.preventDefault(),
		showLoginForm()
	}),
	$("#login-form button[type=submit]").click(function(a) {
		a.preventDefault();
		var b = $(this),
		/*c = $(this.form).find("input#login").val(),
		d = $(this.form).find("input#password").val();*/
		c = $("input#login").val(),
		d = $("input#password").val();
		//alert(d.length);
		//return false;
		if(c.length == 0 || d.length == 0){return false;}
		//alert("1");
		//alert($(this).val());
		//alert($(this.form));
		$(this).html("正在登录...");$("#userlogin").submit();
		//alert("2");
		//alert(c.length == 0 || d.length == 0 ? !1 : (this.disabled = !0, this.value = "正在登录", $(this.form).submit(), !1));
		//return c.length == 0 || d.length == 0 ? !1 : (this.disabled = !0, this.value = "正在登录...", $(this.form).submit(), !1)
	}),
	$("#suggest-form button[type=submit]").click(function(a) {
		return a.preventDefault(),
		this.disabled = !0,
		this.value = "正在提交...",
		$(this.form).submit(),
		!1
	}),
	$("#suggest-form form").submit(function(a) {
		a.preventDefault();
		var b = $(this);
		return $.post("/new4/suggest", b.serialize(),
		function(a) {
			$("#suggest-form").trigger("close"),
			$("button[type=submit]", b).attr("disabled", "").val("提交建议"),
			$("#suggest-text")[0].value = "",
			$("#suggest-form button[type=submit]").attr("disabled", !1)
		},
		"json"),
		!1
	})/*,
	$("#login-form form").submit(function(a) {
		a.preventDefault();
		var b = $(this);
		return $.post("/session.js", b.serialize(),
		function(a) {
			$("button[type=submit]", b).attr("disabled", "").val("登录"),
			$("#login-form button[type=submit]").attr("disabled", !1),
			"error" in a ? (b.children("#error").text(a.error), b.find(".inputbox input").addClass("error"), $("#login-form").effect("shake", {
				times: 3,
				distance: 10
			},
			100)) : ($.browser.msie ? document.styleSheets[0].removeRule(".logout") : document.styleSheets[0].cssRules[0].selectorText == ".logout" && document.styleSheets[0].deleteRule(0), loadLogin(a), $("#login-form").trigger("close"), $(document).trigger("after_logged_in"))
		},
		"json"),
		!1
	})*/
});
function showimg(a) {
	index = a,
	$(".imgnum span").removeClass("onselect").eq(index - 1).addClass("onselect"),
	$("#banner_img li").hide().stop(!0, !0).eq(index - 1).fadeIn("slow"),
	index = index + 1 > 4 ? 1 : index + 1,
	showimgtime = setTimeout("showimg(" + index + ")", 4e3)
}
var showimgtime = "";
$(function() {
	showimg(1),
	$(".imgnum span").hover(function() {
		clearTimeout(showimgtime);
		var a = $(this).text();
		$(".imgnum span").removeClass("onselect").eq(a - 1).addClass("onselect"),
		$("#banner_img li").hide().stop(!0, !0).eq(a - 1).fadeIn("slow")
	},
	function() {
		index = $(this).text() > 3 ? 1 : parseInt($(this).text()) + 1,
		showimgtime = setTimeout("showimg(" + index + ")", 4e3)
	})
}),
$(function() {
	$("#tip-message").poshytip({
		className: "tip-twitter",
		alignTo: "target",
		alignX: "center",
		alignY: "bottom",
		allowTipHover: !1,
		fade: !1,
		slide: !1
	}),
	$("#tip-code").poshytip({
		className: "tip-twitter",
		alignTo: "target",
		alignX: "center",
		alignY: "bottom",
		allowTipHover: !1,
		fade: !1,
		slide: !1
	})
});