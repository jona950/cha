function _createForOfIteratorHelper(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
        if (Array.isArray(e) || (n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0,
                o = function() {};
            return {
                s: o,
                n: function() {
                    return r >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[r++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: o
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, a = !0,
        s = !1;
    return {
        s: function() {
            n = n.call(e)
        },
        n: function() {
            var e = n.next();
            return a = e.done, e
        },
        e: function(e) {
            s = !0, i = e
        },
        f: function() {
            try {
                a || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function _regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    _regeneratorRuntime = function() {
        return t
    };
    var e, t = {},
        n = Object.prototype,
        r = n.hasOwnProperty,
        o = Object.defineProperty || function(e, t, n) {
            e[t] = n.value
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        s = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag";

    function l(e, t, n) {
        return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), e[t]
    }
    try {
        l({}, "")
    } catch (e) {
        l = function(e, t, n) {
            return e[t] = n
        }
    }

    function u(e, t, n, r) {
        var i = t && t.prototype instanceof f ? t : f,
            a = Object.create(i.prototype),
            s = new I(r || []);
        return o(a, "_invoke", {
            value: O(e, n, s)
        }), a
    }

    function d(e, t, n) {
        try {
            return {
                type: "normal",
                arg: e.call(t, n)
            }
        } catch (e) {
            return {
                type: "throw",
                arg: e
            }
        }
    }
    t.wrap = u;
    var m = "suspendedStart",
        p = "executing",
        h = "completed",
        v = {};

    function f() {}

    function g() {}

    function b() {}
    var _ = {};
    l(_, a, (function() {
        return this
    }));
    var S = Object.getPrototypeOf,
        w = S && S(S(j([])));
    w && w !== n && r.call(w, a) && (_ = w);
    var y = b.prototype = f.prototype = Object.create(_);

    function C(e) {
        ["next", "throw", "return"].forEach((function(t) {
            l(e, t, (function(e) {
                return this._invoke(t, e)
            }))
        }))
    }

    function P(e, t) {
        function n(o, i, a, s) {
            var c = d(e[o], e, i);
            if ("throw" !== c.type) {
                var l = c.arg,
                    u = l.value;
                return u && "object" == typeof u && r.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                    n("next", e, a, s)
                }), (function(e) {
                    n("throw", e, a, s)
                })) : t.resolve(u).then((function(e) {
                    l.value = e, a(l)
                }), (function(e) {
                    return n("throw", e, a, s)
                }))
            }
            s(c.arg)
        }
        var i;
        o(this, "_invoke", {
            value: function(e, r) {
                function o() {
                    return new t((function(t, o) {
                        n(e, r, t, o)
                    }))
                }
                return i = i ? i.then(o, o) : o()
            }
        })
    }

    function O(t, n, r) {
        var o = m;
        return function(i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === h) {
                if ("throw" === i) throw a;
                return {
                    value: e,
                    done: !0
                }
            }
            for (r.method = i, r.arg = a;;) {
                var s = r.delegate;
                if (s) {
                    var c = k(s, r);
                    if (c) {
                        if (c === v) continue;
                        return c
                    }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                    if (o === m) throw o = h, r.arg;
                    r.dispatchException(r.arg)
                } else "return" === r.method && r.abrupt("return", r.arg);
                o = p;
                var l = d(t, n, r);
                if ("normal" === l.type) {
                    if (o = r.done ? h : "suspendedYield", l.arg === v) continue;
                    return {
                        value: l.arg,
                        done: r.done
                    }
                }
                "throw" === l.type && (o = h, r.method = "throw", r.arg = l.arg)
            }
        }
    }

    function k(t, n) {
        var r = n.method,
            o = t.iterator[r];
        if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, k(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
        var i = d(o, t.iterator, n.arg);
        if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, v;
        var a = i.arg;
        return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, v) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
    }

    function x(e) {
        var t = {
            tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
    }

    function E(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t
    }

    function I(e) {
        this.tryEntries = [{
            tryLoc: "root"
        }], e.forEach(x, this), this.reset(!0)
    }

    function j(t) {
        if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var o = -1,
                    i = function n() {
                        for (; ++o < t.length;)
                            if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                        return n.value = e, n.done = !0, n
                    };
                return i.next = i
            }
        }
        throw new TypeError(typeof t + " is not iterable")
    }
    return g.prototype = b, o(y, "constructor", {
        value: b,
        configurable: !0
    }), o(b, "constructor", {
        value: g,
        configurable: !0
    }), g.displayName = l(b, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
    }, t.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, l(e, c, "GeneratorFunction")), e.prototype = Object.create(y), e
    }, t.awrap = function(e) {
        return {
            __await: e
        }
    }, C(P.prototype), l(P.prototype, s, (function() {
        return this
    })), t.AsyncIterator = P, t.async = function(e, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new P(u(e, n, r, o), i);
        return t.isGeneratorFunction(n) ? a : a.next().then((function(e) {
            return e.done ? e.value : a.next()
        }))
    }, C(y), l(y, c, "Generator"), l(y, a, (function() {
        return this
    })), l(y, "toString", (function() {
        return "[object Generator]"
    })), t.keys = function(e) {
        var t = Object(e),
            n = [];
        for (var r in t) n.push(r);
        return n.reverse(),
            function e() {
                for (; n.length;) {
                    var r = n.pop();
                    if (r in t) return e.value = r, e.done = !1, e
                }
                return e.done = !0, e
            }
    }, t.values = j, I.prototype = {
        constructor: I,
        reset: function(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(E), !t)
                for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
        },
        stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
        },
        dispatchException: function(t) {
            if (this.done) throw t;
            var n = this;

            function o(r, o) {
                return s.type = "throw", s.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                    s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                    var c = r.call(a, "catchLoc"),
                        l = r.call(a, "finallyLoc");
                    if (c && l) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                    } else if (c) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                    } else {
                        if (!l) throw Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break
                }
            }
            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
        },
        complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
        },
        finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), v
            }
        },
        catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                        var o = r.arg;
                        E(n)
                    }
                    return o
                }
            }
            throw Error("illegal catch attempt")
        },
        delegateYield: function(t, n, r) {
            return this.delegate = {
                iterator: j(t),
                resultName: n,
                nextLoc: r
            }, "next" === this.method && (this.arg = e), v
        }
    }, t
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _toPropertyKey(r.key), r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function _toPropertyKey(e) {
    var t = _toPrimitive(e, "string");
    return "symbol" == typeof t ? t : t + ""
}

function _toPrimitive(e, t) {
    if ("object" != typeof e || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != typeof r) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
}(window.webpackJsonp = window.webpackJsonp || []).push([
    [153], {
        xDM3: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "PasswordRecoverModule", (function() {
                return ae
            }));
            var r = n("ofXK"),
                o = n("tyNb"),
                i = n("mrSG"),
                a = n("c88U"),
                s = n("nYR2"),
                c = n("1ALi"),
                l = n("vHNA"),
                u = n("fXoL"),
                d = n("vw5I"),
                m = n("L+hq"),
                p = n("MZ6S"),
                h = n("ZF+8"),
                v = n("G+2J"),
                f = n("EbGI"),
                g = n("TEn/"),
                b = n("XJip");

            function _(e, t) {
                if (1 & e) {
                    var n = u["\u0275\u0275getCurrentView"]();
                    u["\u0275\u0275elementStart"](0, "div", 10), u["\u0275\u0275elementStart"](1, "ion-label"), u["\u0275\u0275text"](2, "Si no reconoces el correo, no podr\xe1s continuar."), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](3, "ion-label", 11), u["\u0275\u0275listener"]("click", (function() {
                        return u["\u0275\u0275restoreView"](n), u["\u0275\u0275nextContext"](2).goToHome()
                    })), u["\u0275\u0275text"](4, "Ir al inicio"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"]()
                }
            }

            function S(e, t) {
                if (1 & e) {
                    var n = u["\u0275\u0275getCurrentView"]();
                    u["\u0275\u0275elementContainerStart"](0), u["\u0275\u0275elementStart"](1, "div", 5), u["\u0275\u0275element"](2, "ion-img", 6), u["\u0275\u0275elementStart"](3, "ion-label", 7), u["\u0275\u0275text"](4, "Si no llega, revisa tu bandeja de spam"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](5, "ion-label", 8), u["\u0275\u0275listener"]("click", (function() {
                        return u["\u0275\u0275restoreView"](n), u["\u0275\u0275nextContext"]().onClickFooterLabel()
                    })), u["\u0275\u0275text"](6, "Cambiar de correo electr\xf3nico"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275template"](7, _, 5, 0, "div", 9), u["\u0275\u0275elementContainerEnd"]()
                }
                if (2 & e) {
                    var r = u["\u0275\u0275nextContext"]();
                    u["\u0275\u0275advance"](7), u["\u0275\u0275property"]("ngIf", !r.passworsRecoverState.state.hasMobileLines && !r.showJsonParameter)
                }
            }

            function w(e, t) {
                if (1 & e) {
                    var n = u["\u0275\u0275getCurrentView"]();
                    u["\u0275\u0275elementContainerStart"](0), u["\u0275\u0275elementStart"](1, "div", 12), u["\u0275\u0275elementStart"](2, "ion-label", 13), u["\u0275\u0275text"](3), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](4, "ion-label", 14), u["\u0275\u0275listener"]("click", (function() {
                        return u["\u0275\u0275restoreView"](n), u["\u0275\u0275nextContext"]().redirectToWhatsapp()
                    })), u["\u0275\u0275text"](5), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementContainerEnd"]()
                }
                if (2 & e) {
                    var r = u["\u0275\u0275nextContext"]();
                    u["\u0275\u0275advance"](3), u["\u0275\u0275textInterpolate"](r.jsonParameter.title), u["\u0275\u0275advance"](2), u["\u0275\u0275textInterpolate"](r.jsonParameter.footer)
                }
            }
            var y, C = ((y = function() {
                    return _createClass((function e(t, n, r, o, i, a, s) {
                        var c;
                        _classCallCheck(this, e), this.router = t, this.passworsRecoverState = n, this.authHttpService = r, this.authToBeService = o, this.externalServiceSpinner = i, this.firebaseAnalyticsService = a, this.deeplinkService = s, this.jsonParameter = {
                            body: "",
                            footer: "",
                            title: "",
                            status: 0
                        }, this.showJsonParameter = !1, this.titleSmsVerification = "phone" === this.passworsRecoverState.state.infoUser.type ? "Ingresa el c\xf3digo que enviamos a tu celular" : "Ingresa el c\xf3digo que enviamos a tu correo", this.typeService = ["3", "4", "5"].includes(null === (c = this.passworsRecoverState.state.infoUser) || void 0 === c ? void 0 : c.flagOriginLine) ? "Hogar" : "Movil", this.registerValues = {
                            document: {
                                documentNumber: this.passworsRecoverState.state.documentNumber,
                                documentType: this.passworsRecoverState.state.documentType
                            },
                            phoneOrMail: this.passworsRecoverState.state.infoUser.value,
                            flagOriginLine: this.passworsRecoverState.state.infoUser.flagOriginLine
                        }
                    }), [{
                        key: "ngOnInit",
                        value: function() {
                            this.setFirebaseDimensions("phone" === this.passworsRecoverState.state.infoUser.type ? "cambio_clave_p1_codigo_sms_view" : "cambio_clave_p1_codigo_mail_view", this.defaultDimensions), this.getJsonParameter(), this.passworsRecoverState.state.shouldSendOtp && this.sendOTPCode()
                        }
                    }, {
                        key: "onClickBackButton",
                        value: function() {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function e() {
                                return _regeneratorRuntime().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.passworsRecoverState.toPasswordFlowStep(""), !this.passworsRecoverState.state.hasMobileLines) {
                                                e.next = 5;
                                                break
                                            }
                                            this.router.navigate(["auth-tobe/password-recover/flow/step-1"], {
                                                replaceUrl: !0
                                            }), e.next = 9;
                                            break;
                                        case 5:
                                            return e.next = 7, this.authToBeService.setStepsAndValues({
                                                resumeToStep: {
                                                    stepLogin: "step-2-login-password"
                                                },
                                                flow: "login",
                                                deleteOnExit: !0,
                                                access: "owner"
                                            }, null, "owner");
                                        case 7:
                                            localStorage.setItem("returnToLoginPassword", "true"), this.router.navigate([a.a.login + "/login/owner"], {
                                                replaceUrl: !0
                                            });
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })))
                        }
                    }, {
                        key: "goToHome",
                        value: function() {
                            this.router.navigate(["auth-tobe/on-boarding"], {
                                replaceUrl: !0
                            })
                        }
                    }, {
                        key: "getJsonParameter",
                        value: function() {
                            var e, t;
                            t = this.passworsRecoverState.state.hasMobileLines ? ["3", "4", "5"].includes(null === (e = this.passworsRecoverState.state.infoUser) || void 0 === e ? void 0 : e.flagOriginLine) ? Object(c.e)("SCREEN_UNRECONIZED_NUMBER_CHANGE_MAILORPASSWORD") : null : Object(c.e)("SCREEN_UNRECONIZED_MAIL_CHANGE_MAILORPASSWORD"), this.jsonParameter = null === t ? this.jsonParameter : t.value, this.showJsonParameter = null !== t && 1 === this.jsonParameter.status
                        }
                    }, {
                        key: "sendOTPCode",
                        value: function() {
                            var e = this;
                            this.externalServiceSpinner.showExternalSpinner$({
                                text: "Estamos verificando"
                            }), this.authHttpService.generateCodeOtp({
                                userId: this.passworsRecoverState.state.documentNumber,
                                mobilephoneormail: this.passworsRecoverState.state.infoUser.value,
                                flagPIU: "0",
                                typeMessage: Object(c.g)("password-recover", this.passworsRecoverState.state.infoUser.type, this.passworsRecoverState.state.infoUser.flagOriginLine),
                                typeLine: "mail" === this.passworsRecoverState.state.infoUser.type ? "0" : Object(c.h)(this.passworsRecoverState.state.infoUser.flagOriginLine)
                            }).pipe(Object(s.a)((function() {
                                e.externalServiceSpinner.hideExternalSpinner$()
                            }))).subscribe((function(e) {}), (function(t) {
                                return Object(i.a)(e, void 0, void 0, _regeneratorRuntime().mark((function e() {
                                    return _regeneratorRuntime().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, this.passworsRecoverState.setState(Object.assign(Object.assign({}, this.passworsRecoverState.state), {
                                                    originError: "enviar_codigo_otp_cambio_clave",
                                                    descriptionError: "MSGO-" + t.status
                                                }));
                                            case 2:
                                                this.router.navigate(["auth-tobe/password-recover/error"], {
                                                    replaceUrl: !0,
                                                    queryParams: {
                                                        redirect_url: "auth-tobe/on-boarding"
                                                    }
                                                });
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))
                            }))
                        }
                    }, {
                        key: "onClickFooterLabel",
                        value: function() {
                            var e = "phone" === this.passworsRecoverState.state.infoUser.type ? "cambio_clave_p1_codigo_sms_verificar_click" : "cambio_clave_p1_cod_mail_cambiar_click",
                                t = this.authToBeService.getAttempsAvailables(l.a.CHANGE_EMAIL_RECOVER_PASSWORD);
                            this.setFirebaseDimensions(e, this.defaultDimensions), 0 === t ? this.authToBeService.isBlockedByEmail(l.a.CHANGE_EMAIL_RECOVER_PASSWORD) ? this.router.navigate(["auth-tobe/password-recover/blocked"], {
                                queryParams: {
                                    lastCaptchaFlow: "input-email"
                                },
                                replaceUrl: !0
                            }) : (this.authToBeService.removeAttemptsEmail(l.a.CHANGE_EMAIL_RECOVER_PASSWORD), this.router.navigate(["auth-tobe/mail-recover/step-1"], {
                                replaceUrl: !0
                            })) : t <= 3 ? this.router.navigate(["auth-tobe/password-recover/captcha"], {
                                queryParams: {
                                    origin: "input-email"
                                },
                                replaceUrl: !0
                            }) : this.router.navigate(["auth-tobe/mail-recover/step-1"], {
                                replaceUrl: !0
                            })
                        }
                    }, {
                        key: "verifyCode",
                        value: function(e) {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function t() {
                                var n, r, o;
                                return _regeneratorRuntime().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            t.t0 = e.status, t.next = 100 === t.t0 ? 3 : 101 === t.t0 ? 5 : 200 === t.t0 ? 7 : 201 === t.t0 ? 9 : 202 === t.t0 ? 15 : 400 === t.t0 ? 17 : 19;
                                            break;
                                        case 3:
                                            return this.router.navigate(["auth-tobe/password-recover/captcha"], {
                                                replaceUrl: !0
                                            }), t.abrupt("break", 22);
                                        case 5:
                                            return this.router.navigate(["auth-tobe/password-recover/blocked"], {
                                                replaceUrl: !0
                                            }), t.abrupt("break", 22);
                                        case 7:
                                            return this.setFirebaseDimensions("phone" === this.passworsRecoverState.state.infoUser.type ? "cambio_clave_p1_codigo_sms_check_ok" : "cambio_clave_p1_codigo_correo_check_ok", this.defaultDimensions), this.authToBeService.removeAllStorageAttempts(), this.router.navigate(["auth-tobe/password-recover/flow/step-3"], {
                                                replaceUrl: !0
                                            }), t.abrupt("break", 22);
                                        case 9:
                                            return n = this.passworsRecoverState.state.infoUser.type, this.setFirebaseDimensions("phone" === n ? "cambio_clave_codigo_incorrecto_sms_error" : "cambio_clave_codigo_incorrecto_mail_error", this.defaultDimensions), r = Number(JSON.parse(localStorage.getItem("phone" === n ? "SmsBlockingTimecambio_clave" : "EmailBlockingTimecambio_clave"))), o = "", 3 === r && (o = "phone" === n ? "cambio_clave_sms_2_intentos_msj" : "cambio_clave_mail_2_intentos_msj", this.setFirebaseDimensions(o, this.defaultDimensions)), 4 === r && (o = "phone" === n ? "cambio_clave_sms_1_intento_msj" : "cambio_clave_mail_1_intento_msj", this.setFirebaseDimensions(o, this.defaultDimensions)), t.abrupt("break", 22);
                                        case 15:
                                            return this.setFirebaseDimensions("phone" === this.passworsRecoverState.state.infoUser.type ? "cambio_clave_caduco_error" : "cambio_clave_codigo_mail_caduco_error", this.defaultDimensions), t.abrupt("break", 22);
                                        case 17:
                                            return this.setFirebaseDimensions("phone" === this.passworsRecoverState.state.infoUser.type ? "cambio_clave_p1_codigo_sms_reenviar_click" : "cambio_clave_p1_codigo_mail_reenviar_click", this.defaultDimensions), t.abrupt("break", 22);
                                        case 19:
                                            return t.next = 21, this.passworsRecoverState.setState(Object.assign(Object.assign({}, this.passworsRecoverState.state), {
                                                originError: e.origen + "cambio_clave",
                                                descriptionError: e.codigo_error
                                            }));
                                        case 21:
                                            this.router.navigate(["auth-tobe/password-recover/error"], {
                                                replaceUrl: !0,
                                                queryParams: {
                                                    redirect_url: "auth-tobe/on-boarding"
                                                }
                                            });
                                        case 22:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }, {
                        key: "redirectToWhatsapp",
                        value: function() {
                            var e = {
                                hora: Object(c.d)(),
                                documento: this.passworsRecoverState.state.documentNumber,
                                tipo_documento: this.passworsRecoverState.state.documentType
                            };
                            "phone" === this.passworsRecoverState.state.infoUser.type ? (e = Object.assign(Object.assign({}, e), {
                                numero_cliente: this.passworsRecoverState.state.infoUser.value
                            }), this.setFirebaseDimensions("cambio_clave_p1_codigo_sms_ayuda", e)) : (e = Object.assign(Object.assign({}, e), {
                                numero_cliente: this.passworsRecoverState.state.phoneNumber || "",
                                correo: this.passworsRecoverState.state.currentEmail
                            }), this.setFirebaseDimensions("cambio_clave_p1_codigo_correo_ayuda", e)), this.deeplinkService.redirectGeneral(this.jsonParameter.url)
                        }
                    }, {
                        key: "defaultDimensions",
                        get: function() {
                            var e;
                            return {
                                hora: Object(c.d)(),
                                documento: this.passworsRecoverState.state.documentNumber,
                                tipo_documento: this.passworsRecoverState.state.documentType,
                                numero_cliente: this.passworsRecoverState.state.phoneNumber || "",
                                tipo_numero: "3" == (null === (e = this.passworsRecoverState.state.infoUser) || void 0 === e ? void 0 : e.flagOriginLine) ? "contacto" : "titular",
                                correo: this.passworsRecoverState.state.currentEmail || ""
                            }
                        }
                    }, {
                        key: "setFirebaseDimensions",
                        value: function(e, t) {
                            this.firebaseAnalyticsService.logGenericFirebaseEvent(e, t)
                        }
                    }])
                }()).\u0275fac = function(e) {
                    return new(e || y)(u["\u0275\u0275directiveInject"](o.i), u["\u0275\u0275directiveInject"](d.a), u["\u0275\u0275directiveInject"](m.a), u["\u0275\u0275directiveInject"](p.a), u["\u0275\u0275directiveInject"](h.a), u["\u0275\u0275directiveInject"](v.a), u["\u0275\u0275directiveInject"](f.a))
                }, y.\u0275cmp = u["\u0275\u0275defineComponent"]({
                    type: y,
                    selectors: [
                        ["app-password-recover-step2"]
                    ],
                    decls: 8,
                    vars: 7,
                    consts: [
                        ["collapse", "fade", 1, "ion-no-border"],
                        ["src", "/assets/icon/auth-tobe/arrow-header-black.svg", 3, "click"],
                        [1, "main-content"],
                        [3, "shouldTagSuccessEvents", "dataUser", "title", "description", "typeService", "onCodeValidationEmmitter"],
                        [4, "ngIf"],
                        [1, "disclaimer"],
                        ["src", "/assets/icon/auth-tobe/Exclamation.svg", 1, "logo-exclamation"],
                        [1, "disclaimer-text"],
                        [1, "link-go-to-mail-recover", 3, "click"],
                        ["class", "warning-mail-dont-know", 4, "ngIf"],
                        [1, "warning-mail-dont-know"],
                        [1, "link-to-home", 3, "click"],
                        [1, "redirect-to-whatsapp"],
                        [1, "title"],
                        [1, "footer", 3, "click"]
                    ],
                    template: function(e, t) {
                        1 & e && (u["\u0275\u0275elementStart"](0, "ion-header", 0), u["\u0275\u0275elementStart"](1, "ion-toolbar"), u["\u0275\u0275elementStart"](2, "ion-title"), u["\u0275\u0275elementStart"](3, "ion-img", 1), u["\u0275\u0275listener"]("click", (function() {
                            return t.onClickBackButton()
                        })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](4, "section", 2), u["\u0275\u0275elementStart"](5, "app-input-sms-code", 3), u["\u0275\u0275listener"]("onCodeValidationEmmitter", (function(e) {
                            return t.verifyCode(e)
                        })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275template"](6, S, 8, 1, "ng-container", 4), u["\u0275\u0275template"](7, w, 6, 2, "ng-container", 4), u["\u0275\u0275elementEnd"]()), 2 & e && (u["\u0275\u0275advance"](5), u["\u0275\u0275property"]("shouldTagSuccessEvents", !1)("dataUser", t.registerValues)("title", t.titleSmsVerification)("description", t.passworsRecoverState.state.infoUser.value)("typeService", t.typeService), u["\u0275\u0275advance"](1), u["\u0275\u0275property"]("ngIf", "mail" === t.passworsRecoverState.state.infoUser.type), u["\u0275\u0275advance"](1), u["\u0275\u0275property"]("ngIf", t.showJsonParameter))
                    },
                    directives: [g.IonHeader, g.IonToolbar, g.IonTitle, g.IonImg, b.a, r.NgIf, g.IonLabel],
                    styles: ["[_nghost-%COMP%]{width:100vw;height:100vh;background:linear-gradient(180deg,#fff 10.94%,#f5f5f5 51.56%,#fff 90.1%);display:flex;flex-direction:column;align-items:center;justify-content:center}[_nghost-%COMP%]   ion-img[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:1rem}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .link-go-to-mail-recover[_ngcontent-%COMP%]{color:#019df4;font-weight:400;font-size:1rem;text-align:center;text-decoration:underline}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:4px;gap:.5rem}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .logo-exclamation[_ngcontent-%COMP%]{width:1rem;height:1rem}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .disclaimer-text[_ngcontent-%COMP%]{color:#50535a;text-align:center;font-family:Telefonica;font-size:.875rem;font-style:normal;font-weight:400;line-height:1.25rem}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .warning-mail-dont-know[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin:22px 16px 0;border:1px solid #eee;border-radius:8px;padding:16px;background-color:#e6f5fd;font-size:14px}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .warning-mail-dont-know[_ngcontent-%COMP%]   .link-to-home[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#019df4;text-decoration:underline}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .redirect-to-whatsapp[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:16px}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .redirect-to-whatsapp[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#50535a;font-weight:700}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .redirect-to-whatsapp[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;color:#019df4}"]
                }), y),
                P = n("VYYF"),
                O = n("byBy");

            function k(e, t) {
                if (1 & e) {
                    var n = u["\u0275\u0275getCurrentView"]();
                    u["\u0275\u0275elementContainerStart"](0), u["\u0275\u0275elementStart"](1, "div", 6), u["\u0275\u0275elementStart"](2, "ion-label", 7), u["\u0275\u0275text"](3), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](4, "ion-label", 8), u["\u0275\u0275listener"]("click", (function() {
                        return u["\u0275\u0275restoreView"](n), u["\u0275\u0275nextContext"]().redirectToWhatsapp()
                    })), u["\u0275\u0275text"](5), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementContainerEnd"]()
                }
                if (2 & e) {
                    var r = u["\u0275\u0275nextContext"]();
                    u["\u0275\u0275advance"](3), u["\u0275\u0275textInterpolate"](r.jsonParameter.title), u["\u0275\u0275advance"](2), u["\u0275\u0275textInterpolate"](r.jsonParameter.footer)
                }
            }
            var x, E, I = ((x = function() {
                    return _createClass((function e(t, n, r, o, i, a) {
                        _classCallCheck(this, e), this.statusBar = t, this.router = n, this.statePasswordService = r, this.authToBeService = o, this.firebaseAnalyticsService = i, this.deeplinkService = a, this.products = this.statePasswordService.state.listOptions, this.disabledBackButton = !1, this.jsonParameter = {
                            body: "",
                            footer: "",
                            title: "",
                            status: 0
                        }, this.registerValues = {
                            document: {
                                documentNumber: this.statePasswordService.state.documentNumber,
                                documentType: this.statePasswordService.state.documentType
                            },
                            phoneNumber: this.statePasswordService.state.phoneNumber,
                            email: this.statePasswordService.state.currentEmail
                        }
                    }), [{
                        key: "ngOnInit",
                        value: function() {
                            this.initDefaults(), this.setFirebaseDimensions("cambio_clave_p1_1_seleccionar_view", this.defaultDimensions);
                            var e = Object(c.e)("SCREEN_UNRECONIZED_NUMBER_LIST_NUMBERS_PASSWORDRECOVER");
                            this.jsonParameter = e && e.value
                        }
                    }, {
                        key: "initDefaults",
                        value: function() {
                            this.statusBar.styleDefault(), this.statusBar.backgroundColorByHexString("#FFFFFF")
                        }
                    }, {
                        key: "returnLogin",
                        value: function() {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function e() {
                                return _regeneratorRuntime().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = this.disabledBackButton, e.t0) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, this.authToBeService.setStepsAndValues({
                                                resumeToStep: {
                                                    stepLogin: "step-2-login-password"
                                                },
                                                flow: "login",
                                                deleteOnExit: !0,
                                                access: "owner"
                                            }, null, "owner");
                                        case 4:
                                            localStorage.setItem("returnToLoginPassword", "true"), this.router.navigate([a.a.login + "/login/owner"], {
                                                replaceUrl: !0,
                                                queryParams: {
                                                    stepOrigin: "2"
                                                }
                                            });
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })))
                        }
                    }, {
                        key: "onItemSelected",
                        value: function(e) {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function t() {
                                var n;
                                return _regeneratorRuntime().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (200 !== e.status) {
                                                t.next = 8;
                                                break
                                            }
                                            return n = {
                                                documento: this.statePasswordService.state.documentNumber,
                                                tipo_documento: this.statePasswordService.state.documentType,
                                                tipo_numero: ["3", "4", "5"].includes(e.response.flagOriginLine) ? "contacto" : "titular"
                                            }, n = Object.assign(Object.assign({}, n), "phone" === e.response.type ? {
                                                numero_cliente: e.response.value || ""
                                            } : {
                                                correo: e.response.value || ""
                                            }), this.setFirebaseDimensions("phone" === e.response.type ? "cambio_clave_p1_1_con_movil_click" : "cambio_clave_p1_1_con_mail_click", n), t.next = 6, this.statePasswordService.setState(Object.assign(Object.assign({}, this.statePasswordService.state), {
                                                infoUser: {
                                                    type: e.response.type,
                                                    label: e.response.label,
                                                    value: e.response.value,
                                                    flagOriginLine: e.response.flagOriginLine
                                                },
                                                currentEmail: e.response.value,
                                                shouldSendOtp: !1
                                            }));
                                        case 6:
                                            t.next = 10;
                                            break;
                                        case 8:
                                            return t.next = 10, this.statePasswordService.setState(Object.assign(Object.assign({}, this.statePasswordService.state), {
                                                originError: e.origen + "_cambio_clave",
                                                descriptionError: e.codigo_error
                                            }));
                                        case 10:
                                            200 === e.status ? this.router.navigate(["auth-tobe/password-recover/flow/step-2"], {
                                                replaceUrl: !0
                                            }) : this.router.navigate(["auth-tobe/password-recover/error"], {
                                                replaceUrl: !0,
                                                queryParams: {
                                                    redirect_url: "auth-tobe/on-boarding"
                                                }
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }, {
                        key: "backButtonAction",
                        value: function(e) {
                            this.disabledBackButton = e
                        }
                    }, {
                        key: "redirectToWhatsapp",
                        value: function() {
                            this.setFirebaseDimensions("cambio_clave_p1_1_ayuda_click", {
                                documento: this.statePasswordService.state.documentNumber,
                                tipo_documento: this.statePasswordService.state.documentType,
                                numero_cliente: this.statePasswordService.state.phoneNumber || ""
                            }), this.deeplinkService.redirectGeneral(this.jsonParameter.url)
                        }
                    }, {
                        key: "defaultDimensions",
                        get: function() {
                            var e;
                            return {
                                documento: this.statePasswordService.state.documentNumber,
                                tipo_documento: this.statePasswordService.state.documentType,
                                numero_cliente: this.statePasswordService.state.phoneNumber || "",
                                tipo_numero: ["3", "4", "5"].includes(null === (e = this.statePasswordService.state.infoUser) || void 0 === e ? void 0 : e.flagOriginLine) ? "contacto" : "titular",
                                correo: this.statePasswordService.state.currentEmail || ""
                            }
                        }
                    }, {
                        key: "setFirebaseDimensions",
                        value: function(e, t) {
                            this.firebaseAnalyticsService.logGenericFirebaseEvent(e, t)
                        }
                    }])
                }()).\u0275fac = function(e) {
                    return new(e || x)(u["\u0275\u0275directiveInject"](P.a), u["\u0275\u0275directiveInject"](o.i), u["\u0275\u0275directiveInject"](d.a), u["\u0275\u0275directiveInject"](p.a), u["\u0275\u0275directiveInject"](v.a), u["\u0275\u0275directiveInject"](f.a))
                }, x.\u0275cmp = u["\u0275\u0275defineComponent"]({
                    type: x,
                    selectors: [
                        ["app-password-recover-step1"]
                    ],
                    decls: 7,
                    vars: 4,
                    consts: [
                        ["collapse", "fade", 1, "ion-no-border"],
                        [3, "click"],
                        ["src", "/assets/icon/auth-tobe/arrow-header-black.svg"],
                        [1, "main-content"],
                        ["title", "Te enviaremos un c\xf3digo de seguridad", 3, "options", "dataUser", "subTitle", "getSelectItemOptionsVerification", "backButtonAction"],
                        [4, "ngIf"],
                        [1, "redirect-to-whatsapp"],
                        [1, "title"],
                        [1, "footer", 3, "click"]
                    ],
                    template: function(e, t) {
                        1 & e && (u["\u0275\u0275elementStart"](0, "ion-header", 0), u["\u0275\u0275elementStart"](1, "ion-toolbar"), u["\u0275\u0275elementStart"](2, "ion-title", 1), u["\u0275\u0275listener"]("click", (function() {
                            return t.returnLogin()
                        })), u["\u0275\u0275element"](3, "ion-img", 2), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](4, "section", 3), u["\u0275\u0275elementStart"](5, "app-list-options-send-code-security", 4), u["\u0275\u0275listener"]("getSelectItemOptionsVerification", (function(e) {
                            return t.onItemSelected(e)
                        }))("backButtonAction", (function(e) {
                            return t.backButtonAction(e)
                        })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275template"](6, k, 6, 2, "ng-container", 5), u["\u0275\u0275elementEnd"]()), 2 & e && (u["\u0275\u0275advance"](5), u["\u0275\u0275property"]("options", t.products)("dataUser", t.registerValues)("subTitle", "<b>Elige la opci\xf3n</b> por la cual deseas recibir el c\xf3digo de seguridad"), u["\u0275\u0275advance"](1), u["\u0275\u0275property"]("ngIf", 1 === t.jsonParameter.status))
                    },
                    directives: [g.IonHeader, g.IonToolbar, g.IonTitle, g.IonImg, O.a, r.NgIf, g.IonLabel],
                    styles: ["[_nghost-%COMP%]{width:100vw;height:100vh;background:linear-gradient(180deg,#fff 10.94%,#f5f5f5 51.56%,#fff 90.1%);display:flex;flex-direction:column;align-items:center;justify-content:center}[_nghost-%COMP%]   ion-img[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .redirect-to-whatsapp[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:16px}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .redirect-to-whatsapp[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#50535a;font-weight:700}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .redirect-to-whatsapp[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;color:#019df4}"]
                }), x),
                j = n("UAS2"),
                M = ((E = function() {
                    return _createClass((function e(t, n, r) {
                        _classCallCheck(this, e), this.router = t, this.recoverStateService = n, this.firebaseAnalyticsService = r, this.registerValues = {
                            document: {
                                documentNumber: this.recoverStateService.state.documentNumber,
                                documentType: this.recoverStateService.state.documentType
                            },
                            phoneNumber: this.recoverStateService.state.phoneNumber,
                            email: this.recoverStateService.state.currentEmail
                        }
                    }), [{
                        key: "ngOnInit",
                        value: function() {
                            this.setFirebaseDimensions("cambio_clave_p2_clave_view", this.defaultDimensions)
                        }
                    }, {
                        key: "onPasswordCompleted",
                        value: function(e) {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function t() {
                                return _regeneratorRuntime().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.t0 = e, !t.t0) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.next = 4, this.recoverStateService.setState(Object.assign(Object.assign({}, this.recoverStateService.state), {
                                                currentPassword: e
                                            }));
                                        case 4:
                                            this.router.navigate(["auth-tobe/password-recover/flow/step-4"], {
                                                replaceUrl: !0
                                            });
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }, {
                        key: "defaultDimensions",
                        get: function() {
                            return {
                                documento: this.recoverStateService.state.documentNumber,
                                tipo_documento: this.recoverStateService.state.documentType,
                                numero_cliente: this.recoverStateService.state.phoneNumber || "",
                                correo: this.recoverStateService.state.currentEmail || ""
                            }
                        }
                    }, {
                        key: "setFirebaseDimensions",
                        value: function(e, t) {
                            this.firebaseAnalyticsService.logGenericFirebaseEvent(e, t)
                        }
                    }])
                }()).\u0275fac = function(e) {
                    return new(e || E)(u["\u0275\u0275directiveInject"](o.i), u["\u0275\u0275directiveInject"](d.a), u["\u0275\u0275directiveInject"](v.a))
                }, E.\u0275cmp = u["\u0275\u0275defineComponent"]({
                    type: E,
                    selectors: [
                        ["app-password-recover-step3"]
                    ],
                    decls: 5,
                    vars: 2,
                    consts: [
                        ["collapse", "fade", 1, "ion-no-border"],
                        [1, "main-content"],
                        ["title", "Crea tu contrase\xf1a de 6 d\xedgitos", 3, "dataUser", "flowIncome", "sendValuesPassword"]
                    ],
                    template: function(e, t) {
                        1 & e && (u["\u0275\u0275elementStart"](0, "ion-header", 0), u["\u0275\u0275elementStart"](1, "ion-toolbar"), u["\u0275\u0275element"](2, "ion-title"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](3, "section", 1), u["\u0275\u0275elementStart"](4, "app-input-password", 2), u["\u0275\u0275listener"]("sendValuesPassword", (function(e) {
                            return t.onPasswordCompleted(e)
                        })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"]()), 2 & e && (u["\u0275\u0275advance"](4), u["\u0275\u0275property"]("dataUser", t.registerValues)("flowIncome", "register_password"))
                    },
                    directives: [g.IonHeader, g.IonToolbar, g.IonTitle, j.a],
                    styles: ["[_nghost-%COMP%]{width:100vw;height:100vh;background:linear-gradient(180deg,#fff 10.94%,#f5f5f5 51.56%,#fff 90.1%);display:flex;flex-direction:column;align-items:center;justify-content:center}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:1rem}"]
                }), E),
                R = n("x56D"),
                N = n("3reb");

            function A(e, t) {
                if (1 & e) {
                    var n = u["\u0275\u0275getCurrentView"]();
                    u["\u0275\u0275elementStart"](0, "section", 4), u["\u0275\u0275elementStart"](1, "app-input-password", 5), u["\u0275\u0275listener"]("sendValuesPassword", (function(e) {
                        return u["\u0275\u0275restoreView"](n), u["\u0275\u0275nextContext"]().onPasswordCompleted(e)
                    }))("changePasswordConfirmError", (function(e) {
                        return u["\u0275\u0275restoreView"](n), u["\u0275\u0275nextContext"]().onChangePasswordConfirmError(e)
                    })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"]()
                }
                if (2 & e) {
                    var r = u["\u0275\u0275nextContext"]();
                    u["\u0275\u0275advance"](1), u["\u0275\u0275property"]("flowIncome", "register_password")("dataUser", r.registerValues)("isLoading", r.isLoadingPassword)("passwordConfirmError", r.hasPasswordError)
                }
            }
            var U = function(e, t) {
                return {
                    "bullet-empty-circle": e,
                    "bullet-full-circle": t
                }
            };

            function T(e, t) {
                if (1 & e && u["\u0275\u0275element"](0, "div", 20), 2 & e) {
                    var n = t.$implicit;
                    u["\u0275\u0275property"]("ngClass", u["\u0275\u0275pureFunction2"](1, U, !n.isFilled, n.isFilled))
                }
            }

            function D(e, t) {
                if (1 & e) {
                    var n = u["\u0275\u0275getCurrentView"]();
                    u["\u0275\u0275elementStart"](0, "div", 6), u["\u0275\u0275elementStart"](1, "section", 7), u["\u0275\u0275elementStart"](2, "section"), u["\u0275\u0275elementStart"](3, "div", 8), u["\u0275\u0275element"](4, "ion-img", 9), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](5, "div", 10), u["\u0275\u0275elementStart"](6, "label", 11), u["\u0275\u0275text"](7, "Repite tu contrase\xf1a"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](8, "section", 12), u["\u0275\u0275elementStart"](9, "div", 8), u["\u0275\u0275elementStart"](10, "div", 8), u["\u0275\u0275template"](11, T, 1, 4, "div", 13), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](12, "div"), u["\u0275\u0275element"](13, "ion-img", 14), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](14, "section"), u["\u0275\u0275elementStart"](15, "div", 15), u["\u0275\u0275elementStart"](16, "ion-label", 11), u["\u0275\u0275text"](17, "Ups!"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](18, "ion-label", 16), u["\u0275\u0275text"](19, "Llegaste al l\xedmite de intentos, la contrase\xf1a que creaste no coincide, mejor "), u["\u0275\u0275elementStart"](20, "span"), u["\u0275\u0275text"](21, "crea una nueva contrase\xf1a."), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](22, "section", 17), u["\u0275\u0275elementStart"](23, "div", 18), u["\u0275\u0275elementStart"](24, "ion-button", 19), u["\u0275\u0275listener"]("click", (function() {
                        return u["\u0275\u0275restoreView"](n), u["\u0275\u0275nextContext"]().returnPasswordCreate()
                    })), u["\u0275\u0275text"](25, "Crear contrase\xf1a "), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"]()
                }
                if (2 & e) {
                    var r = u["\u0275\u0275nextContext"]();
                    u["\u0275\u0275advance"](11), u["\u0275\u0275property"]("ngForOf", r.bullets)
                }
            }
            var L, F, B, V, G, H, q, W, J, $ = ((B = function() {
                    return _createClass((function e(t, n, r, o, i, a) {
                        _classCallCheck(this, e), this.router = t, this.recoverStateService = n, this.recoverFlowHttpService = r, this.firebaseAnalyticsService = o, this.authToBeServiceValidation = i, this.authLoginNative2BeService = a, this.hasPasswordError = !1, this.isLoadingPassword = !1, this.counterErrors = 0, this.registerValues = {
                            document: {
                                documentNumber: this.recoverStateService.state.documentNumber,
                                documentType: this.recoverStateService.state.documentType
                            },
                            phoneNumber: this.recoverStateService.state.phoneNumber,
                            email: this.recoverStateService.state.currentEmail
                        }, this.bullets = [{
                            isFilled: !1
                        }, {
                            isFilled: !1
                        }, {
                            isFilled: !1
                        }, {
                            isFilled: !1
                        }, {
                            isFilled: !1
                        }, {
                            isFilled: !1
                        }]
                    }), [{
                        key: "ngOnInit",
                        value: function() {
                            this.setFirebaseDimensions("cambio_clave_p3_repetir_clave_view", this.defaultDimensions)
                        }
                    }, {
                        key: "onClickBackButton",
                        value: function() {
                            this.router.navigate(["auth-tobe/password-recover/flow/step-3"], {
                                replaceUrl: !0
                            })
                        }
                    }, {
                        key: "onPasswordCompleted",
                        value: function(e) {
                            var t = this;
                            e && (this.recoverStateService.currentPassword !== e ? (this.hasPasswordError = !0, this.counterErrors++, 3 === this.counterErrors && this.setFirebaseDimensions("cambio_clave_ups_incorrecta_error", this.defaultDimensions), this.setFirebaseDimensions("cambio_clave_clave_incorrecta_error", this.defaultDimensions)) : (this.isLoadingPassword = !0, this.hasPasswordError = !1, this.recoverFlowHttpService.changePassword({
                                userId: this.recoverStateService.state.documentNumber,
                                documentNumber: this.recoverStateService.state.documentNumber,
                                documentType: this.recoverStateService.state.documentType,
                                newpassword: e
                            }).subscribe((function(e) {
                                return Object(i.a)(t, void 0, void 0, _regeneratorRuntime().mark((function t() {
                                    var n;
                                    return _regeneratorRuntime().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, n = window.performance.now(), this.isLoadingPassword = !1, t.next = 5, this.authLoginNative2BeService.secureStorage.set("jwt_login_tobe", e.jwt);
                                            case 5:
                                                return this.authToBeServiceValidation.removeAllStorageAttempts(), t.next = 8, this.authLoginNative2BeService.decodeJWTAndSetInfoUser();
                                            case 8:
                                                this.setFirebaseDimensions("cambio_clave_loading_final_view", Object.assign(Object.assign({}, this.defaultDimensions), {
                                                    tiempo_carga: window.performance.now() - n
                                                })), t.next = 16;
                                                break;
                                            case 11:
                                                return t.prev = 11, t.t0 = t.catch(0), t.next = 15, this.recoverStateService.setState(Object.assign(Object.assign({}, this.recoverStateService.state), {
                                                    originError: "setjwt_cambio_clave",
                                                    descriptionError: "setjwt"
                                                }));
                                            case 15:
                                                this.router.navigate(["auth-tobe/password-recover/error"], {
                                                    replaceUrl: !0,
                                                    queryParams: {
                                                        redirect_url: "auth-tobe/on-boarding"
                                                    }
                                                });
                                            case 16:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this, [
                                        [0, 11]
                                    ])
                                })))
                            }), (function(e) {
                                return Object(i.a)(t, void 0, void 0, _regeneratorRuntime().mark((function t() {
                                    return _regeneratorRuntime().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, this.recoverStateService.setState(Object.assign(Object.assign({}, this.recoverStateService.state), {
                                                    originError: "changePassword_cambio_clave",
                                                    descriptionError: "MSCP-" + e.status
                                                }));
                                            case 2:
                                                this.router.navigate(["auth-tobe/password-recover/error"], {
                                                    replaceUrl: !0,
                                                    queryParams: {
                                                        redirect_url: "auth-tobe/on-boarding"
                                                    }
                                                });
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this)
                                })))
                            }))))
                        }
                    }, {
                        key: "onChangePasswordConfirmError",
                        value: function(e) {
                            this.hasPasswordError = e
                        }
                    }, {
                        key: "returnPasswordCreate",
                        value: function() {
                            this.setFirebaseDimensions("cambio_clave_ups_nueva_clave_click", this.defaultDimensions), this.router.navigate(["auth-tobe/password-recover/flow/step-3"], {
                                replaceUrl: !0
                            })
                        }
                    }, {
                        key: "defaultDimensions",
                        get: function() {
                            return {
                                hora: Object(c.d)(),
                                documento: this.recoverStateService.state.documentNumber,
                                tipo_documento: this.recoverStateService.state.documentType,
                                numero_cliente: this.recoverStateService.state.phoneNumber || "",
                                correo: this.recoverStateService.state.currentEmail || ""
                            }
                        }
                    }, {
                        key: "setFirebaseDimensions",
                        value: function(e, t) {
                            this.firebaseAnalyticsService.logGenericFirebaseEvent(e, t)
                        }
                    }])
                }()).\u0275fac = function(e) {
                    return new(e || B)(u["\u0275\u0275directiveInject"](o.i), u["\u0275\u0275directiveInject"](d.a), u["\u0275\u0275directiveInject"](R.a), u["\u0275\u0275directiveInject"](v.a), u["\u0275\u0275directiveInject"](p.a), u["\u0275\u0275directiveInject"](N.a))
                }, B.\u0275cmp = u["\u0275\u0275defineComponent"]({
                    type: B,
                    selectors: [
                        ["app-password-recover-step4"]
                    ],
                    decls: 6,
                    vars: 2,
                    consts: [
                        ["collapse", "fade", 1, "ion-no-border"],
                        ["src", "/assets/icon/auth-tobe/arrow-header-black.svg", 3, "click"],
                        ["class", "main-content", 4, "ngIf"],
                        ["style", "flex: 1;", 4, "ngIf"],
                        [1, "main-content"],
                        ["title", "Repite tu contrase\xf1a", 3, "flowIncome", "dataUser", "isLoading", "passwordConfirmError", "sendValuesPassword", "changePasswordConfirmError"],
                        [2, "flex", "1"],
                        ["id", "section-animated", 1, "animate__animated", 2, "height", "156px"],
                        [1, "focused-content"],
                        ["src", "/assets/img/auth-tobe/contrasena.svg", 1, "img-pass-w"],
                        [1, "message-login", "space-title-1"],
                        [1, "title"],
                        [1, "bullets-content-section"],
                        ["class", "bullet-circle", 3, "ngClass", 4, "ngFor", "ngForOf"],
                        ["src", "/assets/icon/auth-tobe/hide-password.svg", 1, "img-wh"],
                        [1, "message-login", "tdp-mt-60"],
                        [1, "description"],
                        [1, "content-buttom", "tdp-mt-32"],
                        [1, "btn-login-accept-container"],
                        ["expand", "block", 1, "btn-accept", "btn-background-blue", "tdp-mb", "animate__animated", "animate__pulse", 3, "click"],
                        [1, "bullet-circle", 3, "ngClass"]
                    ],
                    template: function(e, t) {
                        1 & e && (u["\u0275\u0275elementStart"](0, "ion-header", 0), u["\u0275\u0275elementStart"](1, "ion-toolbar"), u["\u0275\u0275elementStart"](2, "ion-title"), u["\u0275\u0275elementStart"](3, "ion-img", 1), u["\u0275\u0275listener"]("click", (function() {
                            return t.onClickBackButton()
                        })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275template"](4, A, 2, 4, "section", 2), u["\u0275\u0275template"](5, D, 26, 1, "div", 3)), 2 & e && (u["\u0275\u0275advance"](4), u["\u0275\u0275property"]("ngIf", 3 !== t.counterErrors), u["\u0275\u0275advance"](1), u["\u0275\u0275property"]("ngIf", 3 === t.counterErrors))
                    },
                    directives: [g.IonHeader, g.IonToolbar, g.IonTitle, g.IonImg, r.NgIf, j.a, r.NgForOf, g.IonLabel, g.IonButton, r.NgClass],
                    styles: ["[_nghost-%COMP%]{width:100vw;height:100vh;background:linear-gradient(180deg,#fff 10.94%,#f5f5f5 51.56%,#fff 90.1%);display:flex;flex-direction:column;align-items:center;justify-content:center}[_nghost-%COMP%]   ion-img[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:1rem;position:relative}[_nghost-%COMP%]   .bullets-content-section[_ngcontent-%COMP%]{margin-top:32px}[_nghost-%COMP%]   .bullets-content-section[_ngcontent-%COMP%]   .bullet-circle[_ngcontent-%COMP%]{width:16px;height:16px;border-radius:50%;margin:0 8px}[_nghost-%COMP%]   .bullets-content-section[_ngcontent-%COMP%]   .bullet-empty-circle[_ngcontent-%COMP%]{border:2px solid #d3d4d3}[_nghost-%COMP%]   .bullets-content-section[_ngcontent-%COMP%]   .bullet-full-circle[_ngcontent-%COMP%]{border:2px solid #019df4;background:#019df4}[_nghost-%COMP%]   .bullets-content-section[_ngcontent-%COMP%]   .bullet-full-circle-error[_ngcontent-%COMP%]{border:2px solid #ff374a!important;background:#ff374a!important}[_nghost-%COMP%]   .img-pass-w[_ngcontent-%COMP%]{width:64px;height:auto!important}[_nghost-%COMP%]   .img-wh[_ngcontent-%COMP%]{width:20px;position:absolute;margin-left:10px;margin-top:-2px}[_nghost-%COMP%]   .tdp-mt-32[_ngcontent-%COMP%]{margin-top:32px}[_nghost-%COMP%]   .tdp-mt-60[_ngcontent-%COMP%]{margin-top:60px}"]
                }), B),
                Z = ((F = function() {
                    return _createClass((function e(t, n, r, o) {
                        _classCallCheck(this, e), this.router = t, this.route = n, this.firebaseAnalyticsService = r, this.recoverStateService = o, this.redirectUrl = ""
                    }), [{
                        key: "ngOnInit",
                        value: function() {
                            this.redirectUrl = this.route.snapshot.queryParams.redirect_url, this.setFirebaseDimensions("cambio_clave_error_inesperado_view", this.defaultDimensions)
                        }
                    }, {
                        key: "tryAgain",
                        value: function() {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function e() {
                                return _regeneratorRuntime().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.setFirebaseDimensions("cambio_clave_error_inesperado_volver_click", this.defaultDimensions), e.next = 3, this.recoverStateService.setState(null);
                                        case 3:
                                            this.router.navigate(["auth-tobe/on-boarding"], {
                                                replaceUrl: !0
                                            });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })))
                        }
                    }, {
                        key: "defaultDimensions",
                        get: function() {
                            return {
                                documento: this.recoverStateService.state.documentNumber,
                                tipo_documento: this.recoverStateService.state.documentType,
                                numero_cliente: this.recoverStateService.state.phoneNumber || "",
                                error_origen: this.recoverStateService.state.originError || ""
                            }
                        }
                    }, {
                        key: "setFirebaseDimensions",
                        value: function(e, t) {
                            this.firebaseAnalyticsService.logGenericFirebaseEvent(e, t)
                        }
                    }])
                }()).\u0275fac = function(e) {
                    return new(e || F)(u["\u0275\u0275directiveInject"](o.i), u["\u0275\u0275directiveInject"](o.a), u["\u0275\u0275directiveInject"](v.a), u["\u0275\u0275directiveInject"](d.a))
                }, F.\u0275cmp = u["\u0275\u0275defineComponent"]({
                    type: F,
                    selectors: [
                        ["app-password-recover-general-error"]
                    ],
                    decls: 18,
                    vars: 1,
                    consts: [
                        [1, "main-content"],
                        [1, "content-height"],
                        [1, "focused-content", "tdp-mt"],
                        ["src", "/assets/icon/svg/error_2.png", 1, "img-pass"],
                        [1, "message-login"],
                        [1, "title"],
                        [1, "description"],
                        [1, "btn-login-accept-container", "content-button-footer"],
                        ["expand", "block", 1, "btn-accept", "btn-background-blue", "tdp-mb", 3, "click"]
                    ],
                    template: function(e, t) {
                        1 & e && (u["\u0275\u0275elementStart"](0, "ion-content"), u["\u0275\u0275elementStart"](1, "section", 0), u["\u0275\u0275elementStart"](2, "section", 1), u["\u0275\u0275elementStart"](3, "div", 2), u["\u0275\u0275element"](4, "ion-img", 3), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](5, "div", 4), u["\u0275\u0275elementStart"](6, "ion-label", 5), u["\u0275\u0275text"](7, "\xa1Oh no, algo sucedi\xf3!"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](8, "ion-label", 6), u["\u0275\u0275text"](9, "Int\xe9ntalo nuevamente "), u["\u0275\u0275elementStart"](10, "span"), u["\u0275\u0275text"](11, "en 5 minutos"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](12, "ion-label", 6), u["\u0275\u0275text"](13), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](14, "section"), u["\u0275\u0275elementStart"](15, "div", 7), u["\u0275\u0275elementStart"](16, "ion-button", 8), u["\u0275\u0275listener"]("click", (function() {
                            return t.tryAgain()
                        })), u["\u0275\u0275text"](17, " Volver al inicio "), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"]()), 2 & e && (u["\u0275\u0275advance"](13), u["\u0275\u0275textInterpolate1"]("C\xf3digo de error: ", t.recoverStateService.state.descriptionError, ""))
                    },
                    directives: [g.IonContent, g.IonImg, g.IonLabel, g.IonButton],
                    styles: [".header__back[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}.main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:1rem}.main-content[_ngcontent-%COMP%]   .content-height[_ngcontent-%COMP%]{margin-top:72px}"]
                }), F),
                Y = ((L = function() {
                    return _createClass((function e(t, n, r, o, i, a, s) {
                        _classCallCheck(this, e), this.externalSpinnerService = t, this.router = n, this.activatedRoute = r, this.statePasswordService = o, this.authHttpService = i, this.firebaseAnalyticsService = a, this.authService = s, this.typeAccess = ""
                    }), [{
                        key: "ngOnInit",
                        value: function() {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function e() {
                                return _regeneratorRuntime().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.typeAccess = this.activatedRoute.snapshot.queryParams.typeAccess, e.next = 3, this.statePasswordService.setState(Object.assign(Object.assign({}, this.statePasswordService.state), {
                                                typeAccess: this.typeAccess
                                            }));
                                        case 3:
                                            this.processChangePassword(), this.getAndSetJsonParameterIntoStorage();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })))
                        }
                    }, {
                        key: "processChangePassword",
                        value: function() {
                            var e = this,
                                t = window.performance.now(),
                                n = this.statePasswordService.state;
                            n.toPasswordStep && "" !== n.toPasswordStep ? this.router.navigate(["auth-tobe/password-recover/flow/" + n.toPasswordStep], {
                                replaceUrl: !0
                            }) : (this.externalSpinnerService.showExternalSpinner$({
                                text: "Estamos verificando"
                            }), this.authHttpService.validateUser({
                                documentNumber: n.documentNumber,
                                documentType: n.documentType,
                                mailUser: " ",
                                validationType: "3"
                            }).pipe(Object(s.a)((function() {
                                e.setFirebaseEvent(t), e.externalSpinnerService.hideExternalSpinner$()
                            }))).subscribe((function(t) {
                                "200" === t.responseCode && (e.authService.removeAttemptsWithoutProducts(), e.handleValidationSuccess(t))
                            }), (function(t) {
                                e.handleValidationError(t)
                            })))
                        }
                    }, {
                        key: "getAndSetJsonParameterIntoStorage",
                        value: function() {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function e() {
                                var t;
                                return _regeneratorRuntime().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.authHttpService.getJsonGeneralParameter("maintenance/general-parameter.json").toPromise();
                                        case 3:
                                            t = e.sent, localStorage.setItem("getJsonGeneralParameter", JSON.stringify(t)), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), localStorage.setItem("getJsonGeneralParameter", null);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })))
                        }
                    }, {
                        key: "handleValidationSuccess",
                        value: function(e) {
                            var t, n, r = e.product.filter((function(e) {
                                var t, n = e.productType,
                                    r = e.mobileNumber;
                                return "mobile" === n && 9 === (null === (t = parseInt(void 0 === r ? null : r).toString()) || void 0 === t ? void 0 : t.length)
                            }));
                            if (r.length > 0) this.setStateAndRedirect(e, r);
                            else {
                                var o = e.product.filter((function(e) {
                                        var t, n, r = e.productType,
                                            o = e.mobileNumber,
                                            i = void 0 === o ? null : o;
                                        return "mobilenc" === r && 9 === (null === (t = parseInt(i).toString()) || void 0 === t ? void 0 : t.length) && (null === (n = parseInt(i).toString()) || void 0 === n ? void 0 : n.startsWith("9"))
                                    })),
                                    i = [];
                                if ((null === (t = e.phoneNumber) || void 0 === t ? void 0 : t.trim()) && 9 === (null === (n = parseInt(e.phoneNumber).toString()) || void 0 === n ? void 0 : n.length) && parseInt(e.phoneNumber).toString().startsWith("9")) {
                                    var a = o.find((function(t) {
                                        return t.mobileNumber === (null == e ? void 0 : e.phoneNumber)
                                    }));
                                    i = this.objectsWithDifferentMobilenumber([{
                                        mobileNumber: e.phoneNumber,
                                        flagOriginLine: a ? a.flagOriginLine : "3",
                                        productType: "mobilenc",
                                        status: "active"
                                    }].concat(_toConsumableArray(o)))
                                } else i = this.objectsWithDifferentMobilenumber(_toConsumableArray(o));
                                this.setStateAndRedirect(e, i)
                            }
                        }
                    }, {
                        key: "handleValidationError",
                        value: function(e) {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function t() {
                                return _regeneratorRuntime().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (404 != e.status || "204" != e.error.responseCode) {
                                                t.next = 4;
                                                break
                                            }
                                            this.router.navigate(["auth-tobe/password-recover/stopper-no-migrados"], {
                                                replaceUrl: !0
                                            }), t.next = 11;
                                            break;
                                        case 4:
                                            if (400 !== e.status || "203" != e.error.responseCode) {
                                                t.next = 8;
                                                break
                                            }
                                            this.handleAttemptsStopperWithoutProducts(), t.next = 11;
                                            break;
                                        case 8:
                                            return t.next = 10, this.statePasswordService.setState(Object.assign(Object.assign({}, this.statePasswordService.state), {
                                                originError: "validateUser_cambio_clave",
                                                descriptionError: "MSVU-" + e.status
                                            }));
                                        case 10:
                                            this.router.navigate(["auth-tobe/password-recover/error"], {
                                                replaceUrl: !0,
                                                queryParams: {
                                                    redirect_url: "auth-tobe/on-boarding"
                                                }
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }, {
                        key: "handleAttemptsStopperWithoutProducts",
                        value: function() {
                            this.authService.validateAccessAttemptsWithoutProducts(), 0 === this.authService.getAttempsAvailablesWithoutProduct() ? this.authService.isBlockedByStopperWithoutProducts() ? this.router.navigate(["auth-tobe/password-recover/blocked"], {
                                queryParams: {
                                    lastCaptchaFlow: "stopper-without-products"
                                },
                                replaceUrl: !0
                            }) : (this.authService.removeAttemptsWithoutProducts(), this.router.navigate(["auth-tobe/password-recover/stopper-without-product"], {
                                replaceUrl: !0
                            })) : this.router.navigate(["auth-tobe/password-recover/stopper-without-product"], {
                                replaceUrl: !0
                            })
                        }
                    }, {
                        key: "objectsWithDifferentMobilenumber",
                        value: function(e) {
                            var t, n = [],
                                r = _createForOfIteratorHelper(e);
                            try {
                                var o = function() {
                                    var e = t.value;
                                    n.some((function(t) {
                                        return t.mobileNumber === e.mobileNumber
                                    })) || (n = [].concat(_toConsumableArray(n), [e]))
                                };
                                for (r.s(); !(t = r.n()).done;) o()
                            } catch (i) {
                                r.e(i)
                            } finally {
                                r.f()
                            }
                            return n.sort((function(e, t) {
                                return parseInt(t.flagOriginLine) - parseInt(e.flagOriginLine)
                            })), n
                        }
                    }, {
                        key: "setStateAndRedirect",
                        value: function(e, t) {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function n() {
                                var r, o = this;
                                return _regeneratorRuntime().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (0 !== t.length) {
                                                n.next = 6;
                                                break
                                            }
                                            return n.next = 3, this.statePasswordService.setState(Object.assign(Object.assign({}, this.statePasswordService.state), {
                                                toPasswordStep: void 0,
                                                phoneNumber: e.phoneNumber,
                                                shouldSendOtp: !0,
                                                currentEmail: e.mailUser,
                                                infoUser: {
                                                    label: this.hideValues(!0, e.mailUser),
                                                    value: e.mailUser,
                                                    type: "mail"
                                                },
                                                listOptions: [],
                                                hasMobileLines: !1
                                            }));
                                        case 3:
                                            this.router.navigate(["auth-tobe/password-recover/flow/step-2"], {
                                                replaceUrl: !0
                                            }), n.next = 10;
                                            break;
                                        case 6:
                                            return r = t.map((function(e) {
                                                return {
                                                    label: o.hideValues(!1, e.mobileNumber),
                                                    value: e.mobileNumber,
                                                    type: "phone",
                                                    flagOriginLine: e.flagOriginLine
                                                }
                                            })), n.next = 9, this.statePasswordService.setState(Object.assign(Object.assign({}, this.statePasswordService.state), {
                                                toPasswordStep: void 0,
                                                phoneNumber: e.phoneNumber,
                                                shouldSendOtp: !1,
                                                currentEmail: e.mailUser,
                                                listOptions: [].concat(_toConsumableArray(r), [{
                                                    label: this.hideValues(!0, e.mailUser),
                                                    value: e.mailUser,
                                                    type: "mail"
                                                }]),
                                                hasMobileLines: !0
                                            }));
                                        case 9:
                                            this.router.navigate(["auth-tobe/password-recover/flow/step-1"], {
                                                replaceUrl: !0
                                            });
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, this)
                            })))
                        }
                    }, {
                        key: "setFirebaseEvent",
                        value: function(e) {
                            var t = window.performance.now() - e;
                            this.firebaseAnalyticsService.logGenericFirebaseEvent("cambio_clave_loading_p1_view", {
                                tiempo_carga: t,
                                documento: this.statePasswordService.state.documentNumber,
                                tipo_documento: this.statePasswordService.state.documentType,
                                numero_cliente: this.statePasswordService.state.phoneNumber || ""
                            })
                        }
                    }, {
                        key: "hideValues",
                        value: function(e, t) {
                            var n = e ? t : t;
                            return e ? n : n
                        }
                    }])
                }()).\u0275fac = function(e) {
                    return new(e || L)(u["\u0275\u0275directiveInject"](h.a), u["\u0275\u0275directiveInject"](o.i), u["\u0275\u0275directiveInject"](o.a), u["\u0275\u0275directiveInject"](d.a), u["\u0275\u0275directiveInject"](m.a), u["\u0275\u0275directiveInject"](v.a), u["\u0275\u0275directiveInject"](p.a))
                }, L.\u0275cmp = u["\u0275\u0275defineComponent"]({
                    type: L,
                    selectors: [
                        ["app-password-recover"]
                    ],
                    decls: 2,
                    vars: 0,
                    template: function(e, t) {
                        1 & e && (u["\u0275\u0275elementStart"](0, "ion-content"), u["\u0275\u0275element"](1, "ion-router-outlet"), u["\u0275\u0275elementEnd"]())
                    },
                    directives: [g.IonContent, g.IonRouterOutlet],
                    styles: [""]
                }), L),
                z = n("33++"),
                K = ((V = function() {
                    return _createClass((function e(t, n, r) {
                        _classCallCheck(this, e), this.activatedRoute = t, this.firebaseAnalyticsService = n, this.passworsRecoverState = r, this.viewDescription = !1, this.lastCaptchaFlow = ""
                    }), [{
                        key: "ngOnInit",
                        value: function() {
                            var e = this;
                            this.activatedRoute.queryParams.subscribe((function(t) {
                                e.lastCaptchaFlow = t.lastCaptchaFlow
                            })), "input-email" === this.lastCaptchaFlow ? this.setBlockedByMailAttempsDimensions() : "stopper-without-products" === this.lastCaptchaFlow || this.setFirebaseDimensions("phone" === this.passworsRecoverState.state.infoUser.type ? "cambio_clave_bloqueo_p2_view" : "cambio_clave_bloqueo_p2_mail_view", this.defaultDimensions), this.viewDescription = !!this.activatedRoute.snapshot.queryParams.viewDescription
                        }
                    }, {
                        key: "handleStartClick",
                        value: function(e) {
                            e && this.passworsRecoverState.state && this.passworsRecoverState.state.infoUser && this.setFirebaseDimensions("phone" === this.passworsRecoverState.state.infoUser.type ? "cambio_clave_bloqueo_inicio_click" : "cambio_clave_bloqueo_mail_inicio_click", this.defaultDimensions)
                        }
                    }, {
                        key: "setBlockedByMailAttempsDimensions",
                        value: function() {
                            var e = {
                                hora: Object(c.d)(),
                                documento: this.passworsRecoverState.state.documentNumber,
                                tipo_documento: this.passworsRecoverState.state.documentType
                            };
                            this.setFirebaseDimensions("cambioo_correo_error_bloqueo", e)
                        }
                    }, {
                        key: "defaultDimensions",
                        get: function() {
                            return {
                                documento: this.passworsRecoverState.state.documentNumber,
                                tipo_documento: this.passworsRecoverState.state.documentType,
                                numero_cliente: this.passworsRecoverState.state.phoneNumber || "",
                                tipo_login: "titular"
                            }
                        }
                    }, {
                        key: "setFirebaseDimensions",
                        value: function(e, t) {
                            this.firebaseAnalyticsService.logGenericFirebaseEvent(e, t)
                        }
                    }])
                }()).\u0275fac = function(e) {
                    return new(e || V)(u["\u0275\u0275directiveInject"](o.a), u["\u0275\u0275directiveInject"](v.a), u["\u0275\u0275directiveInject"](d.a))
                }, V.\u0275cmp = u["\u0275\u0275defineComponent"]({
                    type: V,
                    selectors: [
                        ["app-password-recover-blocked"]
                    ],
                    decls: 3,
                    vars: 2,
                    consts: [
                        [1, "main-content"],
                        [3, "viewDescription", "title", "onStartClick"]
                    ],
                    template: function(e, t) {
                        1 & e && (u["\u0275\u0275elementStart"](0, "ion-content"), u["\u0275\u0275elementStart"](1, "section", 0), u["\u0275\u0275elementStart"](2, "app-lock-screen-error", 1), u["\u0275\u0275listener"]("onStartClick", (function(e) {
                            return t.handleStartClick(e)
                        })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"]()), 2 & e && (u["\u0275\u0275advance"](2), u["\u0275\u0275property"]("viewDescription", !1)("title", "M\xe1ximo de intentos permitidos"))
                    },
                    directives: [g.IonContent, z.a],
                    styles: [".header__back[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}.main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:1rem}.main-content[_ngcontent-%COMP%]   .content-height[_ngcontent-%COMP%]{margin-top:72px;min-height:calc(100vh - 194px)}"]
                }), V),
                X = n("joPf"),
                Q = ((H = function() {
                    return _createClass((function e(t, n, r, o) {
                        _classCallCheck(this, e), this.router = t, this.passwordRecoverState = n, this.firebaseAnalyticsService = r, this.activatedRoute = o, this.origin = "", this.registerValues = {
                            document: {
                                documentNumber: this.passwordRecoverState.state.documentNumber,
                                documentType: this.passwordRecoverState.state.documentType
                            },
                            phoneNumber: this.passwordRecoverState.state.phoneNumber
                        }
                    }), [{
                        key: "ngOnInit",
                        value: function() {
                            var e = this;
                            this.activatedRoute.queryParams.subscribe((function(t) {
                                e.origin = t.origin
                            }))
                        }
                    }, {
                        key: "validateCaptchaAndRedirect",
                        value: function(e) {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function t() {
                                return _regeneratorRuntime().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (200 !== e.status) {
                                                t.next = 13;
                                                break
                                            }
                                            t.t0 = this.origin, t.next = "stopper-without-products" === t.t0 ? 4 : "input-email" === t.t0 ? 6 : 8;
                                            break;
                                        case 4:
                                            return this.router.navigate(["/auth-tobe/login/owner"], {
                                                queryParams: {
                                                    stepOrigin: 1
                                                },
                                                replaceUrl: !0
                                            }), t.abrupt("break", 11);
                                        case 6:
                                            return this.router.navigate(["auth-tobe/mail-recover/step-1"], {
                                                replaceUrl: !0
                                            }), t.abrupt("break", 11);
                                        case 8:
                                            return t.next = 10, this.passwordRecoverState.setState(Object.assign(Object.assign({}, this.passwordRecoverState.state), {
                                                toPasswordStep: "step-2",
                                                shouldSendOtp: !1
                                            }));
                                        case 10:
                                            this.router.navigate(["auth-tobe/password-recover/flow"], {
                                                replaceUrl: !0
                                            });
                                        case 11:
                                            t.next = 14;
                                            break;
                                        case 13:
                                            400 === e.status ? (this.router.navigate(["auth-tobe/password-recover/blocked"], {
                                                replaceUrl: !0
                                            }), this.setFirebaseDimensions("cambio_clave_captcha_error", this.defaultDimensions)) : this.router.navigate(["auth-tobe/password-recover/error"], {
                                                replaceUrl: !0,
                                                queryParams: {
                                                    redirect_url: "auth-tobe/on-boarding"
                                                }
                                            });
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }, {
                        key: "handleBack",
                        value: function() {
                            return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function e() {
                                return _regeneratorRuntime().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            "stopper-without-products" === this.origin ? this.router.navigate(["auth-tobe/password-recover/stopper-without-product"], {
                                                replaceUrl: !0
                                            }) : (this.passwordRecoverState.setState(Object.assign(Object.assign({}, this.passwordRecoverState.state), this.passwordRecoverState.state && this.passwordRecoverState.state.infoUser ? {
                                                shouldSendOtp: !1,
                                                toPasswordStep: "step-2"
                                            } : {
                                                toPasswordStep: "step-1"
                                            })), this.router.navigate(["auth-tobe/password-recover/flow"], {
                                                replaceUrl: !0
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })))
                        }
                    }, {
                        key: "defaultDimensions",
                        get: function() {
                            return {
                                documento: this.passwordRecoverState.state.documentNumber,
                                numero_cliente: this.passwordRecoverState.state.phoneNumber || ""
                            }
                        }
                    }, {
                        key: "setFirebaseDimensions",
                        value: function(e, t) {
                            this.firebaseAnalyticsService.logGenericFirebaseEvent(e, t)
                        }
                    }])
                }()).\u0275fac = function(e) {
                    return new(e || H)(u["\u0275\u0275directiveInject"](o.i), u["\u0275\u0275directiveInject"](d.a), u["\u0275\u0275directiveInject"](v.a), u["\u0275\u0275directiveInject"](o.a))
                }, H.\u0275cmp = u["\u0275\u0275defineComponent"]({
                    type: H,
                    selectors: [
                        ["app-password-recover-captcha"]
                    ],
                    decls: 7,
                    vars: 1,
                    consts: [
                        ["collapse", "fade", 1, "ion-no-border"],
                        ["src", "/assets/icon/auth-tobe/arrow-header-black.svg", 1, "header__back", 3, "click"],
                        [1, "main-content"],
                        [3, "dataUser", "sendValidateCodeCaptcha"]
                    ],
                    template: function(e, t) {
                        1 & e && (u["\u0275\u0275elementStart"](0, "ion-header", 0), u["\u0275\u0275elementStart"](1, "ion-toolbar"), u["\u0275\u0275elementStart"](2, "ion-title"), u["\u0275\u0275elementStart"](3, "ion-img", 1), u["\u0275\u0275listener"]("click", (function() {
                            return t.handleBack()
                        })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](4, "ion-content"), u["\u0275\u0275elementStart"](5, "section", 2), u["\u0275\u0275elementStart"](6, "app-captcha-validation", 3), u["\u0275\u0275listener"]("sendValidateCodeCaptcha", (function(e) {
                            return t.validateCaptchaAndRedirect(e)
                        })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"]()), 2 & e && (u["\u0275\u0275advance"](6), u["\u0275\u0275property"]("dataUser", t.registerValues))
                    },
                    directives: [g.IonHeader, g.IonToolbar, g.IonTitle, g.IonImg, g.IonContent, X.a],
                    styles: [".header__back[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}.main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:1rem}.main-content[_ngcontent-%COMP%]   .content-height[_ngcontent-%COMP%]{margin-top:72px;min-height:calc(100vh - 194px)}"]
                }), H),
                ee = ((G = function() {
                    return _createClass((function e(t) {
                        _classCallCheck(this, e), this.router = t
                    }), [{
                        key: "ngOnInit",
                        value: function() {}
                    }, {
                        key: "toHome",
                        value: function() {
                            this.router.navigate(["auth-tobe/on-boarding"], {
                                replaceUrl: !0
                            })
                        }
                    }])
                }()).\u0275fac = function(e) {
                    return new(e || G)(u["\u0275\u0275directiveInject"](o.i))
                }, G.\u0275cmp = u["\u0275\u0275defineComponent"]({
                    type: G,
                    selectors: [
                        ["app-password-recover-stopper-no-migrados"]
                    ],
                    decls: 24,
                    vars: 0,
                    consts: [
                        ["collapse", "fade", 1, "ion-no-border"],
                        ["src", "/assets/icon/auth-tobe/arrow-header-black.svg", 1, "header__back", 3, "click"],
                        [1, "main-content"],
                        [1, "content-height"],
                        [1, "focused-content", "tdp-mt"],
                        ["src", "/assets/auth-tobe/stopper_ups.svg", 1, "img-pass"],
                        [1, "message-login"],
                        [1, "title"],
                        [1, "description"],
                        [1, "btn-login-accept-container", "content-button-footer"],
                        ["expand", "block", 1, "btn-accept", "btn-background-blue", "tdp-mb", 3, "click"]
                    ],
                    template: function(e, t) {
                        1 & e && (u["\u0275\u0275elementStart"](0, "ion-header", 0), u["\u0275\u0275elementStart"](1, "ion-toolbar"), u["\u0275\u0275elementStart"](2, "ion-title"), u["\u0275\u0275elementStart"](3, "ion-img", 1), u["\u0275\u0275listener"]("click", (function() {
                            return t.toHome()
                        })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](4, "ion-content"), u["\u0275\u0275elementStart"](5, "section", 2), u["\u0275\u0275elementStart"](6, "section", 3), u["\u0275\u0275elementStart"](7, "div", 4), u["\u0275\u0275element"](8, "ion-img", 5), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](9, "div", 6), u["\u0275\u0275elementStart"](10, "ion-label", 7), u["\u0275\u0275text"](11, "Ups!"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](12, "ion-label", 8), u["\u0275\u0275text"](13, "Estamos trabajando para mejorar la app."), u["\u0275\u0275element"](14, "br"), u["\u0275\u0275element"](15, "br"), u["\u0275\u0275text"](16, "Por el momento no puedes cambiar tu contrase\xf1a."), u["\u0275\u0275element"](17, "br"), u["\u0275\u0275element"](18, "br"), u["\u0275\u0275text"](19, "Ingresa con tu contrase\xf1a actual o regresa en unos d\xedas para cambiarla."), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](20, "section"), u["\u0275\u0275elementStart"](21, "div", 9), u["\u0275\u0275elementStart"](22, "ion-button", 10), u["\u0275\u0275listener"]("click", (function() {
                            return t.toHome()
                        })), u["\u0275\u0275text"](23, " Volver al inicio "), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"]())
                    },
                    directives: [g.IonHeader, g.IonToolbar, g.IonTitle, g.IonImg, g.IonContent, g.IonLabel, g.IonButton],
                    styles: [".header__back[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}.main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:1rem}.main-content[_ngcontent-%COMP%]   .content-height[_ngcontent-%COMP%]{margin-top:72px;min-height:calc(100vh - 194px)}"]
                }), G),
                te = n("m/P+"),
                ne = [{
                    path: "error",
                    component: Z
                }, {
                    path: "blocked",
                    component: K
                }, {
                    path: "captcha",
                    component: Q
                }, {
                    path: "stopper-no-migrados",
                    component: ee
                }, {
                    path: "stopper-without-product",
                    component: (q = function() {
                        return _createClass((function e(t, n, r, o, i) {
                            _classCallCheck(this, e), this.router = t, this.passwordRecoverState = n, this.inAppBrow = r, this.authService = o, this.firebaseAnalyticsService = i
                        }), [{
                            key: "ngOnInit",
                            value: function() {
                                this.state = this.passwordRecoverState.state, this.setFirebaseDimensions("cambio_clave_stopper_sin_productos", Object.assign(Object.assign({}, this.defaultDimensions), {
                                    tipo_login: "titular"
                                }))
                            }
                        }, {
                            key: "goBack",
                            value: function() {
                                return Object(i.a)(this, void 0, void 0, _regeneratorRuntime().mark((function e() {
                                    return _regeneratorRuntime().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                this.router.navigate(["auth-tobe/login/owner"], {
                                                    queryParams: {
                                                        stepOrigin: 1
                                                    },
                                                    replaceUrl: !0
                                                });
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))
                            }
                        }, {
                            key: "redirectToCorporativeLink",
                            value: function() {
                                this.setFirebaseDimensions("cambio_clave_stopper_ngresa_click", this.defaultDimensions), this.inAppBrow.create("https://onelink.to/mvb2b", "_blank")
                            }
                        }, {
                            key: "goToInsertDocument",
                            value: function() {
                                this.setFirebaseDimensions("cambio_clave_stopper__corregir_click", this.defaultDimensions), this.authService.getAttempsAvailablesWithoutProduct() <= 3 ? this.router.navigate(["/auth-tobe/password-recover/captcha"], {
                                    queryParams: {
                                        origin: "stopper-without-products"
                                    },
                                    replaceUrl: !0
                                }) : this.router.navigate(["auth-tobe/login/owner"], {
                                    queryParams: {
                                        stepOrigin: 1
                                    },
                                    replaceUrl: !0
                                })
                            }
                        }, {
                            key: "defaultDimensions",
                            get: function() {
                                return {
                                    documento: this.passwordRecoverState.state.documentNumber,
                                    numero_cliente: this.passwordRecoverState.state.phoneNumber || ""
                                }
                            }
                        }, {
                            key: "setFirebaseDimensions",
                            value: function(e, t) {
                                this.firebaseAnalyticsService.logGenericFirebaseEvent(e, t)
                            }
                        }])
                    }(), q.\u0275fac = function(e) {
                        return new(e || q)(u["\u0275\u0275directiveInject"](o.i), u["\u0275\u0275directiveInject"](d.a), u["\u0275\u0275directiveInject"](te.a), u["\u0275\u0275directiveInject"](p.a), u["\u0275\u0275directiveInject"](v.a))
                    }, q.\u0275cmp = u["\u0275\u0275defineComponent"]({
                        type: q,
                        selectors: [
                            ["app-password-recover-stopper-without-products"]
                        ],
                        decls: 27,
                        vars: 2,
                        consts: [
                            ["collapse", "fade", 1, "ion-no-border"],
                            ["src", "/assets/icon/auth-tobe/arrow-header-black.svg", 1, "header__back", 3, "click"],
                            [1, "main-content"],
                            [1, "content-height"],
                            [1, "focused-content", "tdp-mt"],
                            ["src", "/assets/icon/auth-tobe/stopper-without-product.svg", 1, "img-pass"],
                            [1, "message-login"],
                            [1, "title"],
                            [1, "description"],
                            [1, "redirect-to-corporative"],
                            [1, "footer", 3, "click"],
                            [1, "btn-login-accept-container", "content-button-footer"],
                            ["expand", "block", 1, "btn-accept", "btn-background-blue", "tdp-mb", 3, "click"]
                        ],
                        template: function(e, t) {
                            1 & e && (u["\u0275\u0275elementStart"](0, "ion-header", 0), u["\u0275\u0275elementStart"](1, "ion-toolbar"), u["\u0275\u0275elementStart"](2, "ion-title"), u["\u0275\u0275elementStart"](3, "ion-img", 1), u["\u0275\u0275listener"]("click", (function() {
                                return t.goToInsertDocument()
                            })), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](4, "ion-content"), u["\u0275\u0275elementStart"](5, "section", 2), u["\u0275\u0275elementStart"](6, "section", 3), u["\u0275\u0275elementStart"](7, "div", 4), u["\u0275\u0275element"](8, "ion-img", 5), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](9, "div", 6), u["\u0275\u0275elementStart"](10, "ion-label", 7), u["\u0275\u0275text"](11, "Ups!"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](12, "ion-label", 8), u["\u0275\u0275text"](13, " No encontramos ning\xfan producto "), u["\u0275\u0275element"](14, "br"), u["\u0275\u0275text"](15, " registrado con el "), u["\u0275\u0275elementStart"](16, "span"), u["\u0275\u0275text"](17), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](18, "div", 9), u["\u0275\u0275elementStart"](19, "ion-label", 7), u["\u0275\u0275text"](20, "\xbfTu l\xednea es corporativa?"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](21, "ion-label", 10), u["\u0275\u0275listener"]("click", (function() {
                                return t.redirectToCorporativeLink()
                            })), u["\u0275\u0275text"](22, "Ingresa aqu\xed"), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementStart"](23, "section"), u["\u0275\u0275elementStart"](24, "div", 11), u["\u0275\u0275elementStart"](25, "ion-button", 12), u["\u0275\u0275listener"]("click", (function() {
                                return t.goToInsertDocument()
                            })), u["\u0275\u0275text"](26, " Corregir el documento "), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"](), u["\u0275\u0275elementEnd"]()), 2 & e && (u["\u0275\u0275advance"](17), u["\u0275\u0275textInterpolate2"]("", t.state.documentType, ": ", t.state.documentNumber, ""))
                        },
                        directives: [g.IonHeader, g.IonToolbar, g.IonTitle, g.IonImg, g.IonContent, g.IonLabel, g.IonButton],
                        styles: [".header__back[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}.main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:1rem}.main-content[_ngcontent-%COMP%]   .content-height[_ngcontent-%COMP%]{margin-top:72px;min-height:calc(100vh - 194px)}.main-content[_ngcontent-%COMP%]   .redirect-to-corporative[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:32px;line-height:24px}.main-content[_ngcontent-%COMP%]   .redirect-to-corporative[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--ion-color-primary-font)}.main-content[_ngcontent-%COMP%]   .redirect-to-corporative[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;color:#019df4}"]
                    }), q)
                }, {
                    path: "flow",
                    component: Y,
                    children: [{
                        path: "step-1",
                        component: I
                    }, {
                        path: "step-2",
                        component: C
                    }, {
                        path: "step-3",
                        component: M
                    }, {
                        path: "step-4",
                        component: $
                    }]
                }],
                re = ((W = _createClass((function e() {
                    _classCallCheck(this, e)
                }))).\u0275mod = u["\u0275\u0275defineNgModule"]({
                    type: W
                }), W.\u0275inj = u["\u0275\u0275defineInjector"]({
                    factory: function(e) {
                        return new(e || W)
                    },
                    imports: [
                        [o.m.forChild(ne)], o.m
                    ]
                }), W),
                oe = n("3Pt+"),
                ie = n("j1ZV"),
                ae = ((J = _createClass((function e() {
                    _classCallCheck(this, e)
                }))).\u0275mod = u["\u0275\u0275defineNgModule"]({
                    type: J
                }), J.\u0275inj = u["\u0275\u0275defineInjector"]({
                    factory: function(e) {
                        return new(e || J)
                    },
                    providers: [R.a],
                    imports: [
                        [r.CommonModule, oe.FormsModule, g.IonicModule, ie.a, re]
                    ]
                }), J)
        }
    }
]);
