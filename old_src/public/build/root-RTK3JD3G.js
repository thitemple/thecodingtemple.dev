import {
  require_react_dom
} from "/build/_shared/chunk-H5ZE7JVG.js";
import {
  Footer,
  Nav
} from "/build/_shared/chunk-NIVO5WLF.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useActionData,
  useFetchers,
  useLocation,
  useMatches,
  useNavigate,
  useNavigation,
  useRevalidator
} from "/build/_shared/chunk-TX27HHCQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NRH5LTJ7.js";
import {
  createHotContext
} from "/build/_shared/chunk-K42DHKRC.js";
import "/build/_shared/chunk-K6PKGSTD.js";
import {
  require_react
} from "/build/_shared/chunk-O4OKU2LD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/.pnpm/remix-development-tools@1.1.1_@remix-run+react@1.19.0_@types+react-dom@18.2.7_@types+react@18_mvc3r346egk3mnk25deehqlxr4/node_modules/remix-development-tools/dist/index.mjs
var Je = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function Un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At = { exports: {} };
var We = {};
var mr;
function Gn() {
  return mr || (mr = 1, function() {
    var e = import_react.default, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, S = "@@iterator";
    function g(s) {
      if (s === null || typeof s != "object")
        return null;
      var v = y && s[y] || s[S];
      return typeof v == "function" ? v : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(s) {
      {
        for (var v = arguments.length, b = new Array(v > 1 ? v - 1 : 0), C = 1; C < v; C++)
          b[C - 1] = arguments[C];
        T("error", s, b);
      }
    }
    function T(s, v, b) {
      {
        var C = x.ReactDebugCurrentFrame, N = C.getStackAddendum();
        N !== "" && (v += "%s", b = b.concat([N]));
        var $ = b.map(function(O) {
          return String(O);
        });
        $.unshift("Warning: " + v), Function.prototype.apply.call(console[s], console, $);
      }
    }
    var P = false, Z = false, I = false, M = false, Y = false, K;
    K = Symbol.for("react.module.reference");
    function H(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === o || Y || s === a || s === l || s === f || M || s === h || P || Z || I || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === p || s.$$typeof === i || s.$$typeof === c || s.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === K || s.getModuleId !== void 0));
    }
    function Q(s, v, b) {
      var C = s.displayName;
      if (C)
        return C;
      var N = v.displayName || v.name || "";
      return N !== "" ? b + "(" + N + ")" : b;
    }
    function fe(s) {
      return s.displayName || "Context";
    }
    function U(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var v = s;
            return fe(v) + ".Consumer";
          case i:
            var b = s;
            return fe(b._context) + ".Provider";
          case d:
            return Q(s, s.render, "ForwardRef");
          case p:
            var C = s.displayName || null;
            return C !== null ? C : U(s.type) || "Memo";
          case m: {
            var N = s, $ = N._payload, O = N._init;
            try {
              return U(O($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, X = 0, se, Te, pe, Le, ve, Se, V;
    function er() {
    }
    er.__reactDisabledLog = true;
    function on() {
      {
        if (X === 0) {
          se = console.log, Te = console.info, pe = console.warn, Le = console.error, ve = console.group, Se = console.groupCollapsed, V = console.groupEnd;
          var s = {
            configurable: true,
            enumerable: true,
            value: er,
            writable: true
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        X++;
      }
    }
    function an() {
      {
        if (X--, X === 0) {
          var s = {
            configurable: true,
            enumerable: true,
            writable: true
          };
          Object.defineProperties(console, {
            log: J({}, s, {
              value: se
            }),
            info: J({}, s, {
              value: Te
            }),
            warn: J({}, s, {
              value: pe
            }),
            error: J({}, s, {
              value: Le
            }),
            group: J({}, s, {
              value: ve
            }),
            groupCollapsed: J({}, s, {
              value: Se
            }),
            groupEnd: J({}, s, {
              value: V
            })
          });
        }
        X < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ct = x.ReactCurrentDispatcher, _t;
    function Ke(s, v, b) {
      {
        if (_t === void 0)
          try {
            throw Error();
          } catch (N) {
            var C = N.stack.trim().match(/\n( *(at )?)/);
            _t = C && C[1] || "";
          }
        return `
` + _t + s;
      }
    }
    var wt = false, qe;
    {
      var sn = typeof WeakMap == "function" ? WeakMap : Map;
      qe = new sn();
    }
    function tr(s, v) {
      if (!s || wt)
        return "";
      {
        var b = qe.get(s);
        if (b !== void 0)
          return b;
      }
      var C;
      wt = true;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = Ct.current, Ct.current = null, on();
      try {
        if (v) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (le) {
              C = le;
            }
            Reflect.construct(s, [], O);
          } else {
            try {
              O.call();
            } catch (le) {
              C = le;
            }
            s.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (le) {
            C = le;
          }
          s();
        }
      } catch (le) {
        if (le && C && typeof le.stack == "string") {
          for (var w = le.stack.split(`
`), G = C.stack.split(`
`), L = w.length - 1, F = G.length - 1; L >= 1 && F >= 0 && w[L] !== G[F]; )
            F--;
          for (; L >= 1 && F >= 0; L--, F--)
            if (w[L] !== G[F]) {
              if (L !== 1 || F !== 1)
                do
                  if (L--, F--, F < 0 || w[L] !== G[F]) {
                    var ee = `
` + w[L].replace(" at new ", " at ");
                    return s.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", s.displayName)), typeof s == "function" && qe.set(s, ee), ee;
                  }
                while (L >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        wt = false, Ct.current = $, an(), Error.prepareStackTrace = N;
      }
      var Re = s ? s.displayName || s.name : "", vr = Re ? Ke(Re) : "";
      return typeof s == "function" && qe.set(s, vr), vr;
    }
    function ln(s, v, b) {
      return tr(s, false);
    }
    function cn(s) {
      var v = s.prototype;
      return !!(v && v.isReactComponent);
    }
    function Ze(s, v, b) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return tr(s, cn(s));
      if (typeof s == "string")
        return Ke(s);
      switch (s) {
        case l:
          return Ke("Suspense");
        case f:
          return Ke("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case d:
            return ln(s.render);
          case p:
            return Ze(s.type, v, b);
          case m: {
            var C = s, N = C._payload, $ = C._init;
            try {
              return Ze($(N), v, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, rr = {}, nr = x.ReactDebugCurrentFrame;
    function Xe(s) {
      if (s) {
        var v = s._owner, b = Ze(s.type, s._source, v ? v.type : null);
        nr.setExtraStackFrame(b);
      } else
        nr.setExtraStackFrame(null);
    }
    function dn(s, v, b, C, N) {
      {
        var $ = Function.call.bind(Qe);
        for (var O in s)
          if ($(s, O)) {
            var w = void 0;
            try {
              if (typeof s[O] != "function") {
                var G = Error((C || "React class") + ": " + b + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              w = s[O](v, O, C, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              w = L;
            }
            w && !(w instanceof Error) && (Xe(N), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", b, O, typeof w), Xe(null)), w instanceof Error && !(w.message in rr) && (rr[w.message] = true, Xe(N), E("Failed %s type: %s", b, w.message), Xe(null));
          }
      }
    }
    var un = Array.isArray;
    function Ot(s) {
      return un(s);
    }
    function fn(s) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, b = v && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return b;
      }
    }
    function pn(s) {
      try {
        return or(s), false;
      } catch {
        return true;
      }
    }
    function or(s) {
      return "" + s;
    }
    function ar(s) {
      if (pn(s))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fn(s)), or(s);
    }
    var De = x.ReactCurrentOwner, vn = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    }, ir, sr, Tt;
    Tt = {};
    function bn(s) {
      if (Qe.call(s, "ref")) {
        var v = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (v && v.isReactWarning)
          return false;
      }
      return s.ref !== void 0;
    }
    function mn(s) {
      if (Qe.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning)
          return false;
      }
      return s.key !== void 0;
    }
    function hn(s, v) {
      if (typeof s.ref == "string" && De.current && v && De.current.stateNode !== v) {
        var b = U(De.current.type);
        Tt[b] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(De.current.type), s.ref), Tt[b] = true);
      }
    }
    function gn(s, v) {
      {
        var b = function() {
          ir || (ir = true, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        b.isReactWarning = true, Object.defineProperty(s, "key", {
          get: b,
          configurable: true
        });
      }
    }
    function yn(s, v) {
      {
        var b = function() {
          sr || (sr = true, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        b.isReactWarning = true, Object.defineProperty(s, "ref", {
          get: b,
          configurable: true
        });
      }
    }
    var xn = function(s, v, b, C, N, $, O) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: v,
        ref: b,
        props: O,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      }), Object.defineProperty(w, "_self", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: C
      }), Object.defineProperty(w, "_source", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: N
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function En(s, v, b, C, N) {
      {
        var $, O = {}, w = null, G = null;
        b !== void 0 && (ar(b), w = "" + b), mn(v) && (ar(v.key), w = "" + v.key), bn(v) && (G = v.ref, hn(v, N));
        for ($ in v)
          Qe.call(v, $) && !vn.hasOwnProperty($) && (O[$] = v[$]);
        if (s && s.defaultProps) {
          var L = s.defaultProps;
          for ($ in L)
            O[$] === void 0 && (O[$] = L[$]);
        }
        if (w || G) {
          var F = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          w && gn(O, F), G && yn(O, F);
        }
        return xn(s, w, G, N, C, De.current, O);
      }
    }
    var Nt = x.ReactCurrentOwner, lr = x.ReactDebugCurrentFrame;
    function Ne(s) {
      if (s) {
        var v = s._owner, b = Ze(s.type, s._source, v ? v.type : null);
        lr.setExtraStackFrame(b);
      } else
        lr.setExtraStackFrame(null);
    }
    var Rt;
    Rt = false;
    function $t(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function cr() {
      {
        if (Nt.current) {
          var s = U(Nt.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Sn(s) {
      {
        if (s !== void 0) {
          var v = s.fileName.replace(/^.*[\\\/]/, ""), b = s.lineNumber;
          return `

Check your code at ` + v + ":" + b + ".";
        }
        return "";
      }
    }
    var dr = {};
    function Cn(s) {
      {
        var v = cr();
        if (!v) {
          var b = typeof s == "string" ? s : s.displayName || s.name;
          b && (v = `

Check the top-level render call using <` + b + ">.");
        }
        return v;
      }
    }
    function ur(s, v) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = true;
        var b = Cn(v);
        if (dr[b])
          return;
        dr[b] = true;
        var C = "";
        s && s._owner && s._owner !== Nt.current && (C = " It was passed a child from " + U(s._owner.type) + "."), Ne(s), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, C), Ne(null);
      }
    }
    function fr(s, v) {
      {
        if (typeof s != "object")
          return;
        if (Ot(s))
          for (var b = 0; b < s.length; b++) {
            var C = s[b];
            $t(C) && ur(C, v);
          }
        else if ($t(s))
          s._store && (s._store.validated = true);
        else if (s) {
          var N = g(s);
          if (typeof N == "function" && N !== s.entries)
            for (var $ = N.call(s), O; !(O = $.next()).done; )
              $t(O.value) && ur(O.value, v);
        }
      }
    }
    function _n(s) {
      {
        var v = s.type;
        if (v == null || typeof v == "string")
          return;
        var b;
        if (typeof v == "function")
          b = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === p))
          b = v.propTypes;
        else
          return;
        if (b) {
          var C = U(v);
          dn(b, s.props, "prop", C, s);
        } else if (v.PropTypes !== void 0 && !Rt) {
          Rt = true;
          var N = U(v);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wn(s) {
      {
        for (var v = Object.keys(s.props), b = 0; b < v.length; b++) {
          var C = v[b];
          if (C !== "children" && C !== "key") {
            Ne(s), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), Ne(null);
            break;
          }
        }
        s.ref !== null && (Ne(s), E("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    function pr(s, v, b, C, N, $) {
      {
        var O = H(s);
        if (!O) {
          var w = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Sn(N);
          G ? w += G : w += cr();
          var L;
          s === null ? L = "null" : Ot(s) ? L = "array" : s !== void 0 && s.$$typeof === t ? (L = "<" + (U(s.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : L = typeof s, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, w);
        }
        var F = En(s, v, b, N, $);
        if (F == null)
          return F;
        if (O) {
          var ee = v.children;
          if (ee !== void 0)
            if (C)
              if (Ot(ee)) {
                for (var Re = 0; Re < ee.length; Re++)
                  fr(ee[Re], s);
                Object.freeze && Object.freeze(ee);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(ee, s);
        }
        return s === n ? wn(F) : _n(F), F;
      }
    }
    function On(s, v, b) {
      return pr(s, v, b, true);
    }
    function Tn(s, v, b) {
      return pr(s, v, b, false);
    }
    var Nn = Tn, Rn = On;
    We.Fragment = n, We.jsx = Nn, We.jsxs = Rn;
  }()), We;
}
false ? At.exports = Vn() : At.exports = Gn();
var u = At.exports;
function kr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = kr(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function z() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = kr(e)) && (n && (n += " "), n += t);
  return n;
}
var Bn = ({ className: e, style: t }) => /* @__PURE__ */ u.jsxs(
  "svg",
  {
    style: t,
    className: e,
    width: "800",
    height: "800",
    viewBox: "0 0 800 800",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ u.jsx("rect", { width: "800", height: "800", fill: "#212121" }),
      /* @__PURE__ */ u.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M587.947 527.768C592.201 582.418 592.201 608.036 592.201 636H465.756C465.756 629.909 465.865 624.337 465.975 618.687C466.317 601.123 466.674 582.807 463.828 545.819C460.067 491.667 436.748 479.634 393.871 479.634H355.883H195V381.109H399.889C454.049 381.109 481.13 364.633 481.13 321.011C481.13 282.654 454.049 259.41 399.889 259.41H195V163H422.456C545.069 163 606 220.912 606 313.42C606 382.613 563.123 427.739 505.201 435.26C554.096 445.037 582.681 472.865 587.947 527.768Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ u.jsx(
        "path",
        {
          d: "M195 636V562.553H328.697C351.029 562.553 355.878 579.116 355.878 588.994V636H195Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ u.jsx(
        "path",
        {
          d: "M194.5 636V636.5H195H355.878H356.378V636V588.994C356.378 583.988 355.152 577.26 351.063 571.77C346.955 566.255 340.004 562.053 328.697 562.053H195H194.5V562.553V636Z",
          stroke: "white",
          strokeOpacity: "0.8"
        }
      )
    ]
  }
);
var Be = {
  timeline: [],
  settings: {
    routeWildcards: {},
    activeTab: "timeline",
    shouldConnectWithForge: false,
    port: 3003,
    height: 400
  }
};
var zn = (e = Be, { type: t, payload: r }) => {
  switch (t) {
    case "SET_TIMELINE_EVENT":
      return {
        ...e,
        timeline: [r, ...e.timeline]
      };
    case "SET_ACTIVE_TAB":
      return {
        ...e,
        settings: {
          ...e.settings,
          activeTab: r
        }
      };
    case "PURGE_TIMELINE":
      return {
        ...e,
        timeline: []
      };
    case "SET_IS_SUBMITTED":
      return {
        ...e,
        ...r,
        isSubmitted: true
      };
    case "SET_ROUTE_WILDCARDS":
      return {
        ...e,
        settings: {
          ...e.settings,
          routeWildcards: r
        }
      };
    case "SET_HEIGHT":
      return {
        ...e,
        settings: {
          ...e.settings,
          height: r
        }
      };
    case "SET_SHOULD_CONNECT_TO_FORGE":
      return {
        ...e,
        settings: {
          ...e.settings,
          shouldConnectWithForge: r
        }
      };
    default:
      return e;
  }
};
var Bt = (0, import_react.createContext)({ state: Be, dispatch: () => null });
Bt.displayName = "RDTContext";
var ot = "remixDevTools";
var Hn = ({ children: e, port: t }) => {
  const r = sessionStorage.getItem(ot), n = localStorage.getItem(ot), [a, o] = (0, import_react.useReducer)(zn, {
    ...Be,
    ...r ? JSON.parse(r) : {},
    settings: n ? { ...Be.settings, ...JSON.parse(n), port: t } : { ...Be.settings, port: t }
  }), i = (0, import_react.useMemo)(() => ({ state: a, dispatch: o }), [a, o]);
  return /* @__PURE__ */ u.jsx(Bt.Provider, { value: i, children: e });
};
var Jn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
var Yn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var we = (e, t) => {
  const r = (0, import_react.forwardRef)(
    ({ color: n = "currentColor", size: a = 24, strokeWidth: o = 2, absoluteStrokeWidth: i, children: c, ...d }, l) => (0, import_react.createElement)(
      "svg",
      {
        ref: l,
        ...Jn,
        width: a,
        height: a,
        stroke: n,
        strokeWidth: i ? Number(o) * 24 / Number(a) : o,
        className: `lucide lucide-${Yn(e)}`,
        ...d
      },
      [
        ...t.map(([f, p]) => (0, import_react.createElement)(f, p)),
        ...(Array.isArray(c) ? c : [c]) || []
      ]
    )
  );
  return r.displayName = `${e}`, r;
};
var Kn = we("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]
]);
var qn = we("ChevronDown", [
  ["polyline", { points: "6 9 12 15 18 9", key: "1do0m2" }]
]);
var Zn = we("CornerDownRight", [
  ["polyline", { points: "15 10 20 15 15 20", key: "1q7qjw" }],
  ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
]);
var Qn = we("GitMerge", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
]);
var Xn = we("History", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
var eo = we("Layers", [
  ["polygon", { points: "12 2 2 7 12 12 22 7 12 2", key: "1b0ttc" }],
  ["polyline", { points: "2 17 12 22 22 17", key: "imjtdl" }],
  ["polyline", { points: "2 12 12 17 22 12", key: "5dexcv" }]
]);
var to = we("Radio", [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
]);
var ro = function(t) {
  return typeof t == "boolean" || t instanceof Boolean;
};
var no = function(t) {
  return typeof t == "number" || t instanceof Number;
};
var oo = function(t) {
  return typeof t == "string" || t instanceof String;
};
var ao = function(t) {
  return Array.isArray(t);
};
var io = function(t) {
  return t instanceof Object && t !== null;
};
function so(e) {
  var t = (0, import_react.useState)(e()), r = t[0], n = t[1], a = function() {
    return n(function(i) {
      return !i;
    });
  };
  return [r, a, n];
}
var lo = "\u25BE";
var co = "\u25B8";
function hr(e, t) {
  return (e || "") + " " + (t || "");
}
function Ar(e) {
  var t = e.field, r = e.value, n = e.data, a = e.lastElement, o = e.openBracket, i = e.closeBracket, c = e.level, d = e.style, l = e.shouldInitiallyExpand, f = (0, import_react.useRef)(false), p = so(function() {
    return l(c, r, t);
  }), m = p[0], h = p[1], y = p[2];
  (0, import_react.useEffect)(function() {
    f.current ? y(l(c, r, t)) : f.current = true;
  }, [l]);
  var S = m ? lo : co, g = c + 1, x = n.length - 1, E = function(P) {
    P.key === " " && h();
  };
  return (0, import_react.createElement)("div", {
    className: d.basicChildStyle,
    role: "list"
  }, (0, import_react.createElement)("span", {
    className: hr(d.expander, d.pointer),
    role: "button",
    onClick: h,
    onKeyDown: E,
    tabIndex: 0
  }, S), t && (0, import_react.createElement)("span", {
    className: d.label
  }, t, ":"), (0, import_react.createElement)("span", {
    className: d.punctuation
  }, o), m ? (0, import_react.createElement)("div", null, n.map(function(T, P) {
    return (0, import_react.createElement)(Pr, {
      key: T[0] || P,
      field: T[0],
      value: T[1],
      style: d,
      lastElement: P === x,
      level: g,
      shouldInitiallyExpand: l
    });
  })) : (0, import_react.createElement)("span", {
    className: hr(d.punctuation, d.pointer),
    role: "button",
    tabIndex: 0,
    onClick: h,
    onKeyDown: E
  }, "..."), (0, import_react.createElement)("span", {
    className: d.punctuation
  }, i), !a && (0, import_react.createElement)("span", {
    className: d.punctuation
  }, ","));
}
function uo(e) {
  var t = e.field, r = e.value, n = e.style, a = e.lastElement, o = e.shouldInitiallyExpand, i = e.level;
  return Ar({
    field: t,
    value: r,
    lastElement: a || false,
    level: i,
    openBracket: "{",
    closeBracket: "}",
    style: n,
    shouldInitiallyExpand: o,
    data: Object.keys(r).map(function(c) {
      return [c, r[c]];
    })
  });
}
function fo(e) {
  var t = e.field, r = e.value, n = e.style, a = e.lastElement, o = e.level, i = e.shouldInitiallyExpand;
  return Ar({
    field: t,
    value: r,
    lastElement: a || false,
    level: o,
    openBracket: "[",
    closeBracket: "]",
    style: n,
    shouldInitiallyExpand: i,
    data: r.map(function(c) {
      return [void 0, c];
    })
  });
}
function po(e) {
  var t = e.field, r = e.value, n = e.style, a = e.lastElement, o = r, i = n.otherValue;
  return r === null ? (o = "null", i = n.nullValue) : r === void 0 ? (o = "undefined", i = n.undefinedValue) : oo(r) ? (o = '"' + r + '"', i = n.stringValue) : ro(r) ? (o = r ? "true" : "false", i = n.booleanValue) : no(r) ? (o = r.toString(), i = n.numberValue) : o = r.toString(), (0, import_react.createElement)("div", {
    className: n.basicChildStyle,
    role: "listitem"
  }, t && (0, import_react.createElement)("span", {
    className: n.label
  }, t, ":"), (0, import_react.createElement)("span", {
    className: i
  }, o), !a && (0, import_react.createElement)("span", {
    className: n.punctuation
  }, ","));
}
function Pr(e) {
  var t = e.value;
  return ao(t) ? (0, import_react.createElement)(fo, Object.assign({}, e)) : io(t) ? (0, import_react.createElement)(uo, Object.assign({}, e)) : (0, import_react.createElement)(po, Object.assign({}, e));
}
var k = { "container-base": "_GzYRV", "punctuation-base": "_3eOF8", "expander-base": "_f10Tu", pointer: "_1MFti", "container-light": "_2IvMF _GzYRV", "expander-light": "_16FAf _f10Tu", "basic-element-style": "_2bkNM", "label-light": "_1MGIk", "punctuation-light": "_3uHL6 _3eOF8", "value-null-light": "_2T6PJ", "value-undefined-light": "_1Gho6", "value-string-light": "_vGjyY", "value-number-light": "_1bQdo", "value-boolean-light": "_3zQKs", "value-other-light": "_1xvuR", "container-dark": "_11RoI _GzYRV", "expander-dark": "_3cpys _f10Tu", "label-dark": "_2bSDX", "punctuation-dark": "_gsbQL _3eOF8", "value-null-dark": "_LaAZe", "value-undefined-dark": "_GTKgm", "value-string-dark": "_Chy1W", "value-number-dark": "_2bveF", "value-boolean-dark": "_2vRm-", "value-other-dark": "_1prJR" };
var vo = {
  container: k["container-light"],
  basicChildStyle: k["basic-element-style"],
  label: k["label-light"],
  nullValue: k["value-null-light"],
  undefinedValue: k["value-undefined-light"],
  stringValue: k["value-string-light"],
  booleanValue: k["value-boolean-light"],
  numberValue: k["value-number-light"],
  otherValue: k["value-other-light"],
  expander: k["expander-light"],
  punctuation: k["punctuation-light"],
  pointer: k.pointer
};
var bo = {
  container: k["container-dark"],
  basicChildStyle: k["basic-element-style"],
  label: k["label-dark"],
  nullValue: k["value-null-dark"],
  undefinedValue: k["value-undefined-dark"],
  stringValue: k["value-string-dark"],
  booleanValue: k["value-boolean-dark"],
  numberValue: k["value-number-dark"],
  otherValue: k["value-other-dark"],
  expander: k["expander-dark"],
  punctuation: k["punctuation-dark"],
  pointer: k.pointer
};
var mo = function() {
  return true;
};
var ho = function(t) {
  var r = t.data, n = t.style, a = n === void 0 ? vo : n, o = t.shouldInitiallyExpand, i = o === void 0 ? mo : o;
  return (0, import_react.createElement)("div", {
    className: a.container
  }, (0, import_react.createElement)(Pr, {
    value: r,
    style: a,
    lastElement: true,
    level: 0,
    shouldInitiallyExpand: i
  }));
};
var ke = ({ data: e, levelsShown: t = 0 }) => /* @__PURE__ */ u.jsx(
  ho,
  {
    shouldInitiallyExpand: (r) => r < t,
    style: {
      ...bo,
      basicChildStyle: "rdt-ml-4",
      container: "-rdt-ml-4",
      punctuation: "rdt-mr-2 ",
      pointer: "rdt-mr-2 rdt-text-white rdt-text-lg",
      label: "rdt-mr-1 rdt-text-white/80",
      stringValue: "rdt-text-green-500",
      numberValue: "rdt-text-orange-500",
      nullValue: "rdt-text-blue-500",
      undefinedValue: "rdt-text-blue-500",
      booleanValue: "rdt-text-purple-500"
    },
    data: e
  }
);
var de = {};
var Pe = {};
var ue = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isEventSourceSupported = e.isReactNative = e.ReadyState = e.UNPARSABLE_JSON_OBJECT = e.DEFAULT_RECONNECT_INTERVAL_MS = e.DEFAULT_RECONNECT_LIMIT = e.SOCKET_IO_PING_CODE = e.SOCKET_IO_PATH = e.SOCKET_IO_PING_INTERVAL = e.DEFAULT_EVENT_SOURCE_OPTIONS = e.EMPTY_EVENT_HANDLERS = e.DEFAULT_OPTIONS = void 0;
  var t = 1, r = 1e3 * t;
  e.DEFAULT_OPTIONS = {}, e.EMPTY_EVENT_HANDLERS = {}, e.DEFAULT_EVENT_SOURCE_OPTIONS = {
    withCredentials: false,
    events: e.EMPTY_EVENT_HANDLERS
  }, e.SOCKET_IO_PING_INTERVAL = 25 * r, e.SOCKET_IO_PATH = "/socket.io/?EIO=3&transport=websocket", e.SOCKET_IO_PING_CODE = "2", e.DEFAULT_RECONNECT_LIMIT = 20, e.DEFAULT_RECONNECT_INTERVAL_MS = 5e3, e.UNPARSABLE_JSON_OBJECT = {}, function(a) {
    a[a.UNINSTANTIATED = -1] = "UNINSTANTIATED", a[a.CONNECTING = 0] = "CONNECTING", a[a.OPEN = 1] = "OPEN", a[a.CLOSING = 2] = "CLOSING", a[a.CLOSED = 3] = "CLOSED";
  }(e.ReadyState || (e.ReadyState = {}));
  var n = function() {
    try {
      return "EventSource" in globalThis;
    } catch {
      return false;
    }
  };
  e.isReactNative = typeof navigator < "u" && navigator.product === "ReactNative", e.isEventSourceSupported = !e.isReactNative && n();
})(ue);
var ft = {};
var pt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.resetWebSockets = e.sharedWebSockets = void 0, e.sharedWebSockets = {};
  var t = function(r) {
    if (r && e.sharedWebSockets.hasOwnProperty(r))
      delete e.sharedWebSockets[r];
    else
      for (var n in e.sharedWebSockets)
        e.sharedWebSockets.hasOwnProperty(n) && delete e.sharedWebSockets[n];
  };
  e.resetWebSockets = t;
})(pt);
var vt = {};
var ae = {};
Object.defineProperty(ae, "__esModule", { value: true });
ae.setUpSocketIOPing = ae.appendQueryParams = ae.parseSocketIOUrl = void 0;
var at = ue;
var go = function(e) {
  if (e) {
    var t = /^https|wss/.test(e), r = e.replace(/^(https?|wss?)(:\/\/)?/, ""), n = r.replace(/\/$/, ""), a = t ? "wss" : "ws";
    return "".concat(a, "://").concat(n).concat(at.SOCKET_IO_PATH);
  } else if (e === "") {
    var t = /^https/.test(window.location.protocol), a = t ? "wss" : "ws", o = window.location.port ? ":".concat(window.location.port) : "";
    return "".concat(a, "://").concat(window.location.hostname).concat(o).concat(at.SOCKET_IO_PATH);
  }
  return e;
};
ae.parseSocketIOUrl = go;
var yo = function(e, t) {
  t === void 0 && (t = {});
  var r = /\?([\w]+=[\w]+)/, n = r.test(e), a = "".concat(Object.entries(t).reduce(function(o, i) {
    var c = i[0], d = i[1];
    return o + "".concat(c, "=").concat(d, "&");
  }, "").slice(0, -1));
  return "".concat(e).concat(n ? "&" : "?").concat(a);
};
ae.appendQueryParams = yo;
var xo = function(e, t) {
  t === void 0 && (t = at.SOCKET_IO_PING_INTERVAL);
  var r = function() {
    return e(at.SOCKET_IO_PING_CODE);
  };
  return window.setInterval(r, t);
};
ae.setUpSocketIOPing = xo;
var ye = {};
var bt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.resetSubscribers = e.removeSubscriber = e.addSubscriber = e.hasSubscribers = e.getSubscribers = void 0;
  var t = {}, r = [], n = function(d) {
    return (0, e.hasSubscribers)(d) ? Array.from(t[d]) : r;
  };
  e.getSubscribers = n;
  var a = function(d) {
    var l;
    return ((l = t[d]) === null || l === void 0 ? void 0 : l.size) > 0;
  };
  e.hasSubscribers = a;
  var o = function(d, l) {
    t[d] = t[d] || /* @__PURE__ */ new Set(), t[d].add(l);
  };
  e.addSubscriber = o;
  var i = function(d, l) {
    t[d].delete(l);
  };
  e.removeSubscriber = i;
  var c = function(d) {
    if (d && t.hasOwnProperty(d))
      delete t[d];
    else
      for (var l in t)
        t.hasOwnProperty(l) && delete t[l];
  };
  e.resetSubscribers = c;
})(bt);
Object.defineProperty(ye, "__esModule", { value: true });
ye.resetGlobalState = ye.assertIsWebSocket = void 0;
var Eo = pt;
var So = bt;
function Co(e, t) {
  if (!t && !(e instanceof WebSocket))
    throw new Error("");
}
ye.assertIsWebSocket = Co;
function _o(e) {
  (0, So.resetSubscribers)(e), (0, Eo.resetWebSockets)(e);
}
ye.resetGlobalState = _o;
var it = A && A.__assign || function() {
  return it = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, it.apply(this, arguments);
};
Object.defineProperty(vt, "__esModule", { value: true });
vt.attachListeners = void 0;
var wo = ae;
var oe = ue;
var Oo = ye;
var To = function(e, t, r) {
  e.onmessage = function(n) {
    t.current.onMessage && t.current.onMessage(n), !(typeof t.current.filter == "function" && t.current.filter(n) !== true) && r(n);
  };
};
var No = function(e, t, r, n) {
  e.onopen = function(a) {
    t.current.onOpen && t.current.onOpen(a), n.current = 0, r(oe.ReadyState.OPEN);
  };
};
var Ro = function(e, t, r, n, a) {
  if (oe.isEventSourceSupported && e instanceof EventSource)
    return function() {
    };
  (0, Oo.assertIsWebSocket)(e, t.current.skipAssert);
  var o;
  return e.onclose = function(i) {
    var c;
    if (t.current.onClose && t.current.onClose(i), r(oe.ReadyState.CLOSED), t.current.shouldReconnect && t.current.shouldReconnect(i)) {
      var d = (c = t.current.reconnectAttempts) !== null && c !== void 0 ? c : oe.DEFAULT_RECONNECT_LIMIT;
      if (a.current < d) {
        var l = typeof t.current.reconnectInterval == "function" ? t.current.reconnectInterval(a.current) : t.current.reconnectInterval;
        o = window.setTimeout(function() {
          a.current++, n();
        }, l ?? oe.DEFAULT_RECONNECT_INTERVAL_MS);
      } else
        t.current.onReconnectStop && t.current.onReconnectStop(d), console.warn("Max reconnect attempts of ".concat(d, " exceeded"));
    }
  }, function() {
    return o && window.clearTimeout(o);
  };
};
var $o = function(e, t, r, n, a) {
  var o;
  return e.onerror = function(i) {
    var c;
    if (t.current.onError && t.current.onError(i), oe.isEventSourceSupported && e instanceof EventSource && (t.current.onClose && t.current.onClose(it(it({}, i), { code: 1006, reason: "An error occurred with the EventSource: ".concat(i), wasClean: false })), r(oe.ReadyState.CLOSED), e.close()), t.current.retryOnError)
      if (a.current < ((c = t.current.reconnectAttempts) !== null && c !== void 0 ? c : oe.DEFAULT_RECONNECT_LIMIT)) {
        var d = typeof t.current.reconnectInterval == "function" ? t.current.reconnectInterval(a.current) : t.current.reconnectInterval;
        o = window.setTimeout(function() {
          a.current++, n();
        }, d ?? oe.DEFAULT_RECONNECT_INTERVAL_MS);
      } else
        t.current.onReconnectStop && t.current.onReconnectStop(t.current.reconnectAttempts), console.warn("Max reconnect attempts of ".concat(t.current.reconnectAttempts, " exceeded"));
  }, function() {
    return o && window.clearTimeout(o);
  };
};
var jo = function(e, t, r, n, a, o) {
  var i = t.setLastMessage, c = t.setReadyState, d, l, f;
  return r.current.fromSocketIO && (d = (0, wo.setUpSocketIOPing)(o)), To(e, r, i), No(e, r, c, a), l = Ro(e, r, c, n, a), f = $o(e, r, c, n, a), function() {
    c(oe.ReadyState.CLOSING), l(), f(), e.close(), d && clearInterval(d);
  };
};
vt.attachListeners = jo;
var mt = {};
var st = A && A.__assign || function() {
  return st = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, st.apply(this, arguments);
};
Object.defineProperty(mt, "__esModule", { value: true });
mt.attachSharedListeners = void 0;
var Io = pt;
var _e = ue;
var ze = bt;
var ko = ae;
var Ao = function(e, t) {
  e.onmessage = function(r) {
    (0, ze.getSubscribers)(t).forEach(function(n) {
      n.optionsRef.current.onMessage && n.optionsRef.current.onMessage(r), !(typeof n.optionsRef.current.filter == "function" && n.optionsRef.current.filter(r) !== true) && n.setLastMessage(r);
    });
  };
};
var Po = function(e, t) {
  e.onopen = function(r) {
    (0, ze.getSubscribers)(t).forEach(function(n) {
      n.reconnectCount.current = 0, n.optionsRef.current.onOpen && n.optionsRef.current.onOpen(r), n.setReadyState(_e.ReadyState.OPEN);
    });
  };
};
var Mo = function(e, t) {
  e instanceof WebSocket && (e.onclose = function(r) {
    (0, ze.getSubscribers)(t).forEach(function(n) {
      n.optionsRef.current.onClose && n.optionsRef.current.onClose(r), n.setReadyState(_e.ReadyState.CLOSED);
    }), delete Io.sharedWebSockets[t], (0, ze.getSubscribers)(t).forEach(function(n) {
      var a;
      if (n.optionsRef.current.shouldReconnect && n.optionsRef.current.shouldReconnect(r)) {
        var o = (a = n.optionsRef.current.reconnectAttempts) !== null && a !== void 0 ? a : _e.DEFAULT_RECONNECT_LIMIT;
        if (n.reconnectCount.current < o) {
          var i = typeof n.optionsRef.current.reconnectInterval == "function" ? n.optionsRef.current.reconnectInterval(n.reconnectCount.current) : n.optionsRef.current.reconnectInterval;
          setTimeout(function() {
            n.reconnectCount.current++, n.reconnect.current();
          }, i ?? _e.DEFAULT_RECONNECT_INTERVAL_MS);
        } else
          n.optionsRef.current.onReconnectStop && n.optionsRef.current.onReconnectStop(n.optionsRef.current.reconnectAttempts), console.warn("Max reconnect attempts of ".concat(o, " exceeded"));
      }
    });
  });
};
var Lo = function(e, t) {
  e.onerror = function(r) {
    (0, ze.getSubscribers)(t).forEach(function(n) {
      n.optionsRef.current.onError && n.optionsRef.current.onError(r), _e.isEventSourceSupported && e instanceof EventSource && (n.optionsRef.current.onClose && n.optionsRef.current.onClose(st(st({}, r), { code: 1006, reason: "An error occurred with the EventSource: ".concat(r), wasClean: false })), n.setReadyState(_e.ReadyState.CLOSED));
    }), _e.isEventSourceSupported && e instanceof EventSource && e.close();
  };
};
var Do = function(e, t, r, n) {
  var a;
  return r.current.fromSocketIO && (a = (0, ko.setUpSocketIOPing)(n)), Ao(e, t), Mo(e, t), Po(e, t), Lo(e, t), function() {
    a && clearInterval(a);
  };
};
mt.attachSharedListeners = Do;
Object.defineProperty(ft, "__esModule", { value: true });
ft.createOrJoinSocket = void 0;
var ge = pt;
var Ge = ue;
var Fo = vt;
var Wo = mt;
var Pt = bt;
var Uo = function(e, t, r, n, a) {
  return function() {
    if ((0, Pt.removeSubscriber)(e, t), !(0, Pt.hasSubscribers)(e)) {
      try {
        var o = ge.sharedWebSockets[e];
        o instanceof WebSocket && (o.onclose = function(i) {
          r.current.onClose && r.current.onClose(i), n(Ge.ReadyState.CLOSED);
        }), o.close();
      } catch {
      }
      a && a(), delete ge.sharedWebSockets[e];
    }
  };
};
var Vo = function(e, t, r, n, a, o, i, c) {
  if (!Ge.isEventSourceSupported && n.current.eventSourceOptions)
    throw Ge.isReactNative ? new Error("EventSource is not supported in ReactNative") : new Error("EventSource is not supported");
  if (n.current.share) {
    var d = null;
    ge.sharedWebSockets[t] === void 0 ? (ge.sharedWebSockets[t] = n.current.eventSourceOptions ? new EventSource(t, n.current.eventSourceOptions) : new WebSocket(t, n.current.protocols), e.current = ge.sharedWebSockets[t], r(Ge.ReadyState.CONNECTING), d = (0, Wo.attachSharedListeners)(ge.sharedWebSockets[t], t, n, c)) : (e.current = ge.sharedWebSockets[t], r(ge.sharedWebSockets[t].readyState));
    var l = {
      setLastMessage: a,
      setReadyState: r,
      optionsRef: n,
      reconnectCount: i,
      reconnect: o
    };
    return (0, Pt.addSubscriber)(t, l), Uo(t, l, n, r, d);
  } else {
    if (e.current = n.current.eventSourceOptions ? new EventSource(t, n.current.eventSourceOptions) : new WebSocket(t, n.current.protocols), r(Ge.ReadyState.CONNECTING), !e.current)
      throw new Error("WebSocket failed to be created");
    return (0, Fo.attachListeners)(e.current, {
      setLastMessage: a,
      setReadyState: r
    }, n, o.current, i, c);
  }
};
ft.createOrJoinSocket = Vo;
var ht = {};
var Go = A && A.__awaiter || function(e, t, r, n) {
  function a(o) {
    return o instanceof r ? o : new r(function(i) {
      i(o);
    });
  }
  return new (r || (r = Promise))(function(o, i) {
    function c(f) {
      try {
        l(n.next(f));
      } catch (p) {
        i(p);
      }
    }
    function d(f) {
      try {
        l(n.throw(f));
      } catch (p) {
        i(p);
      }
    }
    function l(f) {
      f.done ? o(f.value) : a(f.value).then(c, d);
    }
    l((n = n.apply(e, t || [])).next());
  });
};
var Bo = A && A.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, a, o, i;
  return i = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function c(l) {
    return function(f) {
      return d([l, f]);
    };
  }
  function d(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, a && (o = l[0] & 2 ? a.return : l[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, l[1])).done)
          return o;
        switch (a = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: false };
          case 5:
            r.label++, a = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = l;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(l);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e, r);
      } catch (f) {
        l = [6, f], a = 0;
      } finally {
        n = o = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: true };
  }
};
Object.defineProperty(ht, "__esModule", { value: true });
ht.getUrl = void 0;
var gr = ae;
var zo = function(e, t) {
  return Go(void 0, void 0, void 0, function() {
    var r, n, a;
    return Bo(this, function(o) {
      switch (o.label) {
        case 0:
          return typeof e != "function" ? [3, 2] : [4, e()];
        case 1:
          return r = o.sent(), [3, 3];
        case 2:
          r = e, o.label = 3;
        case 3:
          return n = t.current.fromSocketIO ? (0, gr.parseSocketIOUrl)(r) : r, a = t.current.queryParams ? (0, gr.appendQueryParams)(n, t.current.queryParams) : n, [2, a];
      }
    });
  });
};
ht.getUrl = zo;
var Mr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.websocketWrapper = void 0;
  var t = function(r, n) {
    return new Proxy(r, {
      get: function(a, o) {
        var i = a[o];
        return o === "reconnect" ? n : typeof i == "function" ? (console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."), function() {
        }) : i;
      },
      set: function(a, o, i) {
        return /^on/.test(o) ? (console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."), false) : (a[o] = i, true);
      }
    });
  };
  e.websocketWrapper = t, e.default = e.websocketWrapper;
})(Mr);
var $e = A && A.__assign || function() {
  return $e = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, $e.apply(this, arguments);
};
var Ho = A && A.__awaiter || function(e, t, r, n) {
  function a(o) {
    return o instanceof r ? o : new r(function(i) {
      i(o);
    });
  }
  return new (r || (r = Promise))(function(o, i) {
    function c(f) {
      try {
        l(n.next(f));
      } catch (p) {
        i(p);
      }
    }
    function d(f) {
      try {
        l(n.throw(f));
      } catch (p) {
        i(p);
      }
    }
    function l(f) {
      f.done ? o(f.value) : a(f.value).then(c, d);
    }
    l((n = n.apply(e, t || [])).next());
  });
};
var Jo = A && A.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, a, o, i;
  return i = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function c(l) {
    return function(f) {
      return d([l, f]);
    };
  }
  function d(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, a && (o = l[0] & 2 ? a.return : l[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, l[1])).done)
          return o;
        switch (a = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: false };
          case 5:
            r.label++, a = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = l;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(l);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e, r);
      } catch (f) {
        l = [6, f], a = 0;
      } finally {
        n = o = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: true };
  }
};
var Yo = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Pe, "__esModule", { value: true });
Pe.useWebSocket = void 0;
var B = import_react.default;
var yr = import_react_dom.default;
var ce = ue;
var Ko = ft;
var qo = ht;
var Zo = Yo(Mr);
var xr = ye;
var Qo = function(e, t, r) {
  t === void 0 && (t = ce.DEFAULT_OPTIONS), r === void 0 && (r = true);
  var n = (0, B.useState)(null), a = n[0], o = n[1], i = (0, B.useState)({}), c = i[0], d = i[1], l = (0, B.useMemo)(function() {
    if (a)
      try {
        return JSON.parse(a.data);
      } catch {
        return ce.UNPARSABLE_JSON_OBJECT;
      }
    return null;
  }, [a]), f = (0, B.useRef)(null), p = (0, B.useRef)(null), m = (0, B.useRef)(function() {
  }), h = (0, B.useRef)(0), y = (0, B.useRef)([]), S = (0, B.useRef)(null), g = (0, B.useRef)(t);
  g.current = t;
  var x = f.current && c[f.current] !== void 0 ? c[f.current] : e !== null && r === true ? ce.ReadyState.CONNECTING : ce.ReadyState.UNINSTANTIATED, E = t.queryParams ? JSON.stringify(t.queryParams) : null, T = (0, B.useCallback)(function(I, M) {
    var Y;
    if (M === void 0 && (M = true), ce.isEventSourceSupported && p.current instanceof EventSource) {
      console.warn("Unable to send a message from an eventSource");
      return;
    }
    ((Y = p.current) === null || Y === void 0 ? void 0 : Y.readyState) === ce.ReadyState.OPEN ? ((0, xr.assertIsWebSocket)(p.current, g.current.skipAssert), p.current.send(I)) : M && y.current.push(I);
  }, []), P = (0, B.useCallback)(function(I, M) {
    M === void 0 && (M = true), T(JSON.stringify(I), M);
  }, [T]), Z = (0, B.useCallback)(function() {
    return g.current.share !== true || ce.isEventSourceSupported && p.current instanceof EventSource ? p.current : (S.current === null && p.current && ((0, xr.assertIsWebSocket)(p.current, g.current.skipAssert), S.current = (0, Zo.default)(p.current, m)), S.current);
  }, []);
  return (0, B.useEffect)(function() {
    if (e !== null && r === true) {
      var I, M = false, Y = true, K = function() {
        return Ho(void 0, void 0, void 0, function() {
          var H, Q, fe;
          return Jo(this, function(U) {
            switch (U.label) {
              case 0:
                return H = f, [4, (0, qo.getUrl)(e, g)];
              case 1:
                return H.current = U.sent(), Q = function(J) {
                  M || (0, yr.flushSync)(function() {
                    return o(J);
                  });
                }, fe = function(J) {
                  M || (0, yr.flushSync)(function() {
                    return d(function(X) {
                      var se;
                      return $e($e({}, X), f.current && (se = {}, se[f.current] = J, se));
                    });
                  });
                }, Y && (I = (0, Ko.createOrJoinSocket)(p, f.current, fe, g, Q, m, h, T)), [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      return m.current = function() {
        M || (S.current && (S.current = null), I == null || I(), K());
      }, K(), function() {
        M = true, Y = false, S.current && (S.current = null), I == null || I(), o(null);
      };
    } else
      (e === null || r === false) && (h.current = 0, d(function(H) {
        var Q;
        return $e($e({}, H), f.current && (Q = {}, Q[f.current] = ce.ReadyState.CLOSED, Q));
      }));
  }, [e, r, E, T]), (0, B.useEffect)(function() {
    x === ce.ReadyState.OPEN && y.current.splice(0).forEach(function(I) {
      T(I);
    });
  }, [x]), {
    sendMessage: T,
    sendJsonMessage: P,
    lastMessage: a,
    lastJsonMessage: l,
    readyState: x,
    getWebSocket: Z
  };
};
Pe.useWebSocket = Qo;
var gt = {};
var lt = A && A.__assign || function() {
  return lt = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, lt.apply(this, arguments);
};
Object.defineProperty(gt, "__esModule", { value: true });
gt.useSocketIO = void 0;
var Er = import_react.default;
var Xo = Pe;
var ea = ue;
var jt = {
  type: "empty",
  payload: null
};
var ta = function(e) {
  if (!e || !e.data)
    return jt;
  var t = e.data.match(/\[.*]/);
  if (!t)
    return jt;
  var r = JSON.parse(t);
  return !Array.isArray(r) || !r[1] ? jt : {
    type: r[0],
    payload: r[1]
  };
};
var ra = function(e, t, r) {
  t === void 0 && (t = ea.DEFAULT_OPTIONS), r === void 0 && (r = true);
  var n = (0, Er.useMemo)(function() {
    return lt(lt({}, t), { fromSocketIO: true });
  }, []), a = (0, Xo.useWebSocket)(e, n, r), o = a.sendMessage, i = a.sendJsonMessage, c = a.lastMessage, d = a.readyState, l = a.getWebSocket, f = (0, Er.useMemo)(function() {
    return ta(c);
  }, [c]);
  return {
    sendMessage: o,
    sendJsonMessage: i,
    lastMessage: f,
    lastJsonMessage: f,
    readyState: d,
    getWebSocket: l
  };
};
gt.useSocketIO = ra;
var yt = {};
var ct = A && A.__assign || function() {
  return ct = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ct.apply(this, arguments);
};
var na = A && A.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
Object.defineProperty(yt, "__esModule", { value: true });
yt.useEventSource = void 0;
var Sr = import_react.default;
var oa = Pe;
var Cr = ue;
var aa = function(e, t, r) {
  t === void 0 && (t = Cr.DEFAULT_EVENT_SOURCE_OPTIONS);
  var n = t.withCredentials, a = t.events, o = na(t, ["withCredentials", "events"]);
  r === void 0 && (r = true);
  var i = ct(ct({}, o), { eventSourceOptions: {
    withCredentials: n
  } }), c = (0, Sr.useRef)(Cr.EMPTY_EVENT_HANDLERS);
  a && (c.current = a);
  var d = (0, oa.useWebSocket)(e, i, r), l = d.lastMessage, f = d.readyState, p = d.getWebSocket;
  return (0, Sr.useEffect)(function() {
    l != null && l.type && Object.entries(c.current).forEach(function(m) {
      var h = m[0], y = m[1];
      h === l.type && y(l);
    });
  }, [l]), {
    lastEvent: l,
    readyState: f,
    getEventSource: p
  };
};
yt.useEventSource = aa;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.resetGlobalState = e.useEventSource = e.ReadyState = e.useSocketIO = e.default = void 0;
  var t = Pe;
  Object.defineProperty(e, "default", { enumerable: true, get: function() {
    return t.useWebSocket;
  } });
  var r = gt;
  Object.defineProperty(e, "useSocketIO", { enumerable: true, get: function() {
    return r.useSocketIO;
  } });
  var n = ue;
  Object.defineProperty(e, "ReadyState", { enumerable: true, get: function() {
    return n.ReadyState;
  } });
  var a = yt;
  Object.defineProperty(e, "useEventSource", { enumerable: true, get: function() {
    return a.useEventSource;
  } });
  var o = ye;
  Object.defineProperty(e, "resetGlobalState", { enumerable: true, get: function() {
    return o.resetGlobalState;
  } });
})(de);
var ia = /* @__PURE__ */ Un(de);
var Me = () => {
  const e = (0, import_react.useContext)(Bt);
  if (e === void 0)
    throw new Error("useRDTContext must be used within a RDTContextProvider");
  const { state: t, dispatch: r } = e, { timeline: n, settings: a } = t, { activeTab: o, shouldConnectWithForge: i, routeWildcards: c, port: d, height: l } = a;
  (0, import_react.useEffect)(() => {
    ({ ...t });
    const g = t.settings;
    localStorage.setItem(ot, JSON.stringify(g)), sessionStorage.setItem(ot, JSON.stringify(t));
  }, [t]);
  const f = (0, import_react.useCallback)(
    (g) => {
      r({ type: "SET_TIMELINE_EVENT", payload: g });
    },
    [r]
  ), p = (0, import_react.useCallback)(() => {
    r({ type: "PURGE_TIMELINE", payload: void 0 });
  }, [r]), m = (0, import_react.useCallback)(
    (g) => {
      r({ type: "SET_ACTIVE_TAB", payload: g });
    },
    [r]
  ), h = (0, import_react.useCallback)(
    (g) => {
      r({ type: "SET_ROUTE_WILDCARDS", payload: g });
    },
    [r]
  ), y = (0, import_react.useCallback)(
    (g) => {
      r({
        type: "SET_SHOULD_CONNECT_TO_FORGE",
        payload: g
      });
    },
    [r]
  ), S = (0, import_react.useCallback)(
    (g) => {
      r({
        type: "SET_HEIGHT",
        payload: g
      });
    },
    [r]
  );
  return {
    setTimelineEvent: f,
    setActiveTab: m,
    timeline: n,
    activeTab: o,
    clearTimeline: p,
    setShouldConnectWithForge: y,
    shouldConnectWithForge: i,
    routeWildcards: c,
    port: d,
    height: l,
    setHeight: S,
    setRouteWildcards: h
  };
};
var _r = 2;
var xt = (e) => {
  const { shouldConnectWithForge: t, setShouldConnectWithForge: r, port: n } = Me(), [a, o] = (0, import_react.useState)(0), i = {
    ...e,
    share: true,
    shouldReconnect: () => true,
    reconnectAttempts: _r,
    reconnectInterval: 0,
    onClose: (p) => {
      if (p.code === 1005) {
        r(false), o(0);
        return;
      }
      if (a < _r)
        return o(a + 1);
      r(false);
    }
  }, c = ia(
    `ws://localhost:${n}`,
    i,
    t
  ), d = {
    [de.ReadyState.CONNECTING]: "Connecting",
    [de.ReadyState.OPEN]: "Open",
    [de.ReadyState.CLOSING]: "Closing",
    [de.ReadyState.CLOSED]: "Closed",
    [de.ReadyState.UNINSTANTIATED]: "Uninstantiated"
  }[c.readyState], l = c.readyState === de.ReadyState.OPEN, f = c.readyState === de.ReadyState.CONNECTING;
  return { ...c, connectionStatus: d, isConnected: l, isConnecting: f };
};
var sa = {
  GREEN: "rdt-bg-green-500 rdt-text-white",
  BLUE: "rdt-bg-blue-500 rdt-text-white",
  TEAL: "rdt-bg-teal-400 rdt-text-white",
  RED: "rdt-bg-red-500 rdt-text-white",
  PURPLE: "rdt-bg-purple-500 rdt-text-white"
};
var je = ({ color: e, children: t, className: r }) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: z(
      "rdt-flex rdt-items-center rdt-rounded rdt-px-2.5 rdt-py-0.5 rdt-text-sm rdt-font-medium",
      r,
      sa[e]
    ),
    children: t
  }
);
var la = ({ onClick: e }) => /* @__PURE__ */ u.jsxs(
  "button",
  {
    onClick: e,
    className: z(
      "rdt-ml-1 rdt-mr-2 rdt-flex rdt-cursor-pointer rdt-items-center rdt-gap-1 rdt-rounded rdt-border rdt-border-[#1F9CF0] rdt-px-2.5 rdt-py-0.5 rdt-text-sm rdt-font-medium rdt-text-[#1F9CF0]"
    ),
    children: [
      /* @__PURE__ */ u.jsxs(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 100 100",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ u.jsx(
              "mask",
              {
                id: "mask0",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "100",
                height: "100",
                children: /* @__PURE__ */ u.jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z",
                    fill: "white"
                  }
                )
              }
            ),
            /* @__PURE__ */ u.jsxs("g", { mask: "url(#mask0)", children: [
              /* @__PURE__ */ u.jsx(
                "path",
                {
                  d: "M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z",
                  fill: "#0065A9"
                }
              ),
              /* @__PURE__ */ u.jsx("g", { filter: "url(#filter0_d)", children: /* @__PURE__ */ u.jsx(
                "path",
                {
                  d: "M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z",
                  fill: "#007ACC"
                }
              ) }),
              /* @__PURE__ */ u.jsx("g", { filter: "url(#filter1_d)", children: /* @__PURE__ */ u.jsx(
                "path",
                {
                  d: "M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z",
                  fill: "#1F9CF0"
                }
              ) }),
              /* @__PURE__ */ u.jsx("g", { style: { mixBlendMode: "overlay" }, opacity: "0.25", children: /* @__PURE__ */ u.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M70.8511 99.3171C72.4261 99.9306 74.2221 99.8913 75.8117 99.1264L96.4 89.2197C98.5634 88.1787 99.9392 85.9892 99.9392 83.5871V16.4133C99.9392 14.0112 98.5635 11.8217 96.4001 10.7807L75.8117 0.873695C73.7255 -0.13019 71.2838 0.115699 69.4527 1.44688C69.1912 1.63705 68.942 1.84937 68.7082 2.08335L29.2943 38.0414L12.1264 25.0096C10.5283 23.7964 8.29285 23.8959 6.80855 25.246L1.30225 30.2548C-0.513334 31.9064 -0.515415 34.7627 1.29775 36.4169L16.1863 50L1.29775 63.5832C-0.515415 65.2374 -0.513334 68.0937 1.30225 69.7452L6.80855 74.754C8.29285 76.1042 10.5283 76.2036 12.1264 74.9905L29.2943 61.9586L68.7082 97.9167C69.3317 98.5405 70.0638 99.0104 70.8511 99.3171ZM74.9544 27.2989L45.0483 50L74.9544 72.7012V27.2989Z",
                  fill: "url(#paint0_linear)"
                }
              ) })
            ] }),
            /* @__PURE__ */ u.jsxs("defs", { children: [
              /* @__PURE__ */ u.jsxs(
                "filter",
                {
                  id: "filter0_d",
                  x: "-8.39411",
                  y: "15.8291",
                  width: "116.727",
                  height: "92.2456",
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                  children: [
                    /* @__PURE__ */ u.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    /* @__PURE__ */ u.jsx(
                      "feColorMatrix",
                      {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      }
                    ),
                    /* @__PURE__ */ u.jsx("feOffset", {}),
                    /* @__PURE__ */ u.jsx("feGaussianBlur", { stdDeviation: "4.16667" }),
                    /* @__PURE__ */ u.jsx(
                      "feColorMatrix",
                      {
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "feBlend",
                      {
                        mode: "overlay",
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow"
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "feBlend",
                      {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow",
                        result: "shape"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ u.jsxs(
                "filter",
                {
                  id: "filter1_d",
                  x: "60.4167",
                  y: "-8.07558",
                  width: "47.9167",
                  height: "116.151",
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                  children: [
                    /* @__PURE__ */ u.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    /* @__PURE__ */ u.jsx(
                      "feColorMatrix",
                      {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      }
                    ),
                    /* @__PURE__ */ u.jsx("feOffset", {}),
                    /* @__PURE__ */ u.jsx("feGaussianBlur", { stdDeviation: "4.16667" }),
                    /* @__PURE__ */ u.jsx(
                      "feColorMatrix",
                      {
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "feBlend",
                      {
                        mode: "overlay",
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow"
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "feBlend",
                      {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow",
                        result: "shape"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ u.jsxs(
                "linearGradient",
                {
                  id: "paint0_linear",
                  x1: "49.9392",
                  y1: "0.257812",
                  x2: "49.9392",
                  y2: "99.7423",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    /* @__PURE__ */ u.jsx("stop", { stopColor: "white" }),
                    /* @__PURE__ */ u.jsx("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
                  ]
                }
              )
            ] })
          ]
        }
      ),
      " ",
      "Open in VS Code"
    ]
  }
);
var ca = (e) => {
  if (typeof e == "string")
    try {
      const t = JSON.parse(e);
      return delete t.remixDevTools, JSON.stringify(t, null, 2);
    } catch {
      return e;
    }
  return e != null && e.remixDevTools && delete e.remixDevTools, e;
};
var da = (e) => {
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return e;
};
var ua = () => {
  const e = useMatches(), t = (0, import_react.useMemo)(() => e.reverse(), [e]), { revalidate: r, state: n } = useRevalidator(), { isConnected: a, sendJsonMessage: o } = xt();
  return /* @__PURE__ */ u.jsxs("div", { className: "rdt-relative rdt-flex rdt-h-full rdt-flex-col rdt-overflow-y-auto rdt-p-6 rdt-px-6", children: [
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => r(),
        className: z(
          "rdt-absolute rdt-right-4 rdt-top-0 rdt-z-20 rdt-cursor-pointer rdt-rounded-lg rdt-bg-green-500 rdt-px-3 rdt-py-1 rdt-text-sm rdt-font-semibold rdt-text-white",
          n !== "idle" && "rdt-pointer-events-none rdt-opacity-50"
        ),
        children: n !== "idle" ? "Revalidating..." : "Revalidate"
      }
    ),
    /* @__PURE__ */ u.jsx(
      "ol",
      {
        className: z(
          "rdt-relative rdt-border-l rdt-border-gray-700",
          n === "loading" && "rdt-pointer-events-none rdt-opacity-50"
        ),
        children: t.map((i) => {
          var m, h, y, S;
          const c = ca(i.data), d = da(i.data), l = i.id === "root", f = i.id.split("/").pop(), p = ((m = f == null ? void 0 : f.split(".")) == null ? void 0 : m.length) === 1 && ((f == null ? void 0 : f.startsWith("_")) || (f == null ? void 0 : f.startsWith("__"))) && f !== "_index" && "index";
          return /* @__PURE__ */ u.jsxs("li", { className: "rdt-mb-8 rdt-ml-8", children: [
            /* @__PURE__ */ u.jsx("span", { className: "rdt-absolute -rdt-left-3 rdt-mt-2 rdt-flex rdt-h-6 rdt-w-6 rdt-items-center rdt-justify-center rdt-rounded-full rdt-bg-blue-900 rdt-ring-4 rdt-ring-blue-900  ", children: /* @__PURE__ */ u.jsx(Zn, {}) }),
            /* @__PURE__ */ u.jsxs("h3", { className: "-rdt-mt-3 rdt-mb-1 rdt-flex rdt-items-center rdt-gap-2 rdt-text-lg rdt-font-semibold rdt-text-white", children: [
              i.pathname,
              /* @__PURE__ */ u.jsx(je, { color: l ? "PURPLE" : p ? "BLUE" : "GREEN", children: l ? "ROOT" : p ? "LAYOUT" : "ROUTE" }),
              a && /* @__PURE__ */ u.jsx(
                la,
                {
                  onClick: () => o({
                    type: "open-vscode",
                    data: { route: i.id }
                  })
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-4", children: [
              /* @__PURE__ */ u.jsxs("time", { className: "rdt-mb-2 rdt-block rdt-text-sm rdt-font-normal rdt-leading-none rdt-text-gray-500  ", children: [
                "Route location: ",
                i.id
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "rdt-flex rdt-gap-16", children: [
                c && /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-4 rdt-max-w-md rdt-overflow-x-hidden rdt-text-base rdt-font-normal rdt-text-gray-400", children: [
                  "Route loader data:",
                  /* @__PURE__ */ u.jsx(ke, { data: c })
                ] }),
                i.params && Object.keys(i.params).length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-4 rdt-text-base rdt-font-normal  rdt-text-gray-400", children: [
                  "Route params:",
                  /* @__PURE__ */ u.jsx(ke, { data: i.params })
                ] }),
                i.handle && Object.keys(i.handle).length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-4 rdt-text-base rdt-font-normal  rdt-text-gray-400", children: [
                  "Route handle:",
                  /* @__PURE__ */ u.jsx(ke, { data: i.handle })
                ] }),
                ((y = (h = d == null ? void 0 : d.remixDevTools) == null ? void 0 : h.timers) == null ? void 0 : y.length) && /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-4 rdt-text-base rdt-font-normal  rdt-text-gray-400", children: [
                  /* @__PURE__ */ u.jsx("div", { className: "rdt-mb-1", children: "Registered timers for route:" }),
                  (S = d == null ? void 0 : d.remixDevTools) == null ? void 0 : S.timers.map(
                    (g) => /* @__PURE__ */ u.jsxs(
                      "div",
                      {
                        className: "rdt-flex rdt-justify-between rdt-gap-4 rdt-text-sm rdt-font-normal rdt-text-white",
                        children: [
                          /* @__PURE__ */ u.jsxs("div", { children: [
                            g.name,
                            " "
                          ] }),
                          /* @__PURE__ */ u.jsxs("div", { children: [
                            (g.duration / 1e3).toPrecision(2),
                            "s (",
                            g.duration,
                            "ms)"
                          ] })
                        ]
                      },
                      g.name
                    )
                  )
                ] })
              ] })
            ] })
          ] }, i.id);
        })
      }
    )
  ] });
};
var fa = (e, t) => {
  let r = t;
  const n = [];
  for (; r && (n.push(r.path), !(!r.parentId || !e[r.parentId])); )
    r = e[r.parentId];
  const a = n.reverse().filter(Boolean).join("/");
  return a === "" ? "/" : a;
};
function W() {
  return W = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, W.apply(this, arguments);
}
function zt(e, t = []) {
  let r = [];
  function n(o, i) {
    const c = /* @__PURE__ */ (0, import_react.createContext)(i), d = r.length;
    r = [
      ...r,
      i
    ];
    function l(p) {
      const { scope: m, children: h, ...y } = p, S = (m == null ? void 0 : m[e][d]) || c, g = (0, import_react.useMemo)(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ (0, import_react.createElement)(S.Provider, {
        value: g
      }, h);
    }
    function f(p, m) {
      const h = (m == null ? void 0 : m[e][d]) || c, y = (0, import_react.useContext)(h);
      if (y)
        return y;
      if (i !== void 0)
        return i;
      throw new Error(`\`${p}\` must be used within \`${o}\``);
    }
    return l.displayName = o + "Provider", [
      l,
      f
    ];
  }
  const a = () => {
    const o = r.map((i) => /* @__PURE__ */ (0, import_react.createContext)(i));
    return function(c) {
      const d = (c == null ? void 0 : c[e]) || o;
      return (0, import_react.useMemo)(
        () => ({
          [`__scope${e}`]: {
            ...c,
            [e]: d
          }
        }),
        [
          c,
          d
        ]
      );
    };
  };
  return a.scopeName = e, [
    n,
    pa(a, ...t)
  ];
}
function pa(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const n = e.map(
      (a) => ({
        useScope: a(),
        scopeName: a.scopeName
      })
    );
    return function(o) {
      const i = n.reduce((c, { useScope: d, scopeName: l }) => {
        const p = d(o)[`__scope${l}`];
        return {
          ...c,
          ...p
        };
      }, {});
      return (0, import_react.useMemo)(
        () => ({
          [`__scope${t.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return r.scopeName = t.scopeName, r;
}
function va(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Lr(...e) {
  return (t) => e.forEach(
    (r) => va(r, t)
  );
}
function He(...e) {
  return (0, import_react.useCallback)(Lr(...e), e);
}
var dt = /* @__PURE__ */ (0, import_react.forwardRef)((e, t) => {
  const { children: r, ...n } = e, a = import_react.Children.toArray(r), o = a.find(ma);
  if (o) {
    const i = o.props.children, c = a.map((d) => d === o ? import_react.Children.count(i) > 1 ? import_react.Children.only(null) : /* @__PURE__ */ (0, import_react.isValidElement)(i) ? i.props.children : null : d);
    return /* @__PURE__ */ (0, import_react.createElement)(Mt, W({}, n, {
      ref: t
    }), /* @__PURE__ */ (0, import_react.isValidElement)(i) ? /* @__PURE__ */ (0, import_react.cloneElement)(i, void 0, c) : null);
  }
  return /* @__PURE__ */ (0, import_react.createElement)(Mt, W({}, n, {
    ref: t
  }), r);
});
dt.displayName = "Slot";
var Mt = /* @__PURE__ */ (0, import_react.forwardRef)((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ (0, import_react.isValidElement)(r) ? /* @__PURE__ */ (0, import_react.cloneElement)(r, {
    ...ha(n, r.props),
    ref: t ? Lr(t, r.ref) : r.ref
  }) : import_react.Children.count(r) > 1 ? import_react.Children.only(null) : null;
});
Mt.displayName = "SlotClone";
var ba = ({ children: e }) => /* @__PURE__ */ (0, import_react.createElement)(import_react.Fragment, null, e);
function ma(e) {
  return /* @__PURE__ */ (0, import_react.isValidElement)(e) && e.type === ba;
}
function ha(e, t) {
  const r = {
    ...t
  };
  for (const n in t) {
    const a = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? a && o ? r[n] = (...c) => {
      o(...c), a(...c);
    } : a && (r[n] = a) : n === "style" ? r[n] = {
      ...a,
      ...o
    } : n === "className" && (r[n] = [
      a,
      o
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
function ga(e) {
  const t = e + "CollectionProvider", [r, n] = zt(t), [a, o] = r(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), i = (h) => {
    const { scope: y, children: S } = h, g = import_react.default.useRef(null), x = import_react.default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ import_react.default.createElement(a, {
      scope: y,
      itemMap: x,
      collectionRef: g
    }, S);
  }, c = e + "CollectionSlot", d = /* @__PURE__ */ import_react.default.forwardRef((h, y) => {
    const { scope: S, children: g } = h, x = o(c, S), E = He(y, x.collectionRef);
    return /* @__PURE__ */ import_react.default.createElement(dt, {
      ref: E
    }, g);
  }), l = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ import_react.default.forwardRef((h, y) => {
    const { scope: S, children: g, ...x } = h, E = import_react.default.useRef(null), T = He(y, E), P = o(l, S);
    return import_react.default.useEffect(() => (P.itemMap.set(E, {
      ref: E,
      ...x
    }), () => void P.itemMap.delete(E))), /* @__PURE__ */ import_react.default.createElement(dt, {
      [f]: "",
      ref: T
    }, g);
  });
  function m(h) {
    const y = o(e + "CollectionConsumer", h);
    return import_react.default.useCallback(() => {
      const g = y.collectionRef.current;
      if (!g)
        return [];
      const x = Array.from(g.querySelectorAll(`[${f}]`));
      return Array.from(y.itemMap.values()).sort(
        (P, Z) => x.indexOf(P.ref.current) - x.indexOf(Z.ref.current)
      );
    }, [
      y.collectionRef,
      y.itemMap
    ]);
  }
  return [
    {
      Provider: i,
      Slot: d,
      ItemSlot: p
    },
    m,
    n
  ];
}
function Dr(e, t, { checkForDefaultPrevented: r = true } = {}) {
  return function(a) {
    if (e == null || e(a), r === false || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function Fr(e) {
  const t = (0, import_react.useRef)(e);
  return (0, import_react.useEffect)(() => {
    t.current = e;
  }), (0, import_react.useMemo)(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
function Ht({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [n, a] = ya({
    defaultProp: t,
    onChange: r
  }), o = e !== void 0, i = o ? e : n, c = Fr(r), d = (0, import_react.useCallback)((l) => {
    if (o) {
      const p = typeof l == "function" ? l(e) : l;
      p !== e && c(p);
    } else
      a(l);
  }, [
    o,
    e,
    a,
    c
  ]);
  return [
    i,
    d
  ];
}
function ya({ defaultProp: e, onChange: t }) {
  const r = (0, import_react.useState)(e), [n] = r, a = (0, import_react.useRef)(n), o = Fr(t);
  return (0, import_react.useEffect)(() => {
    a.current !== n && (o(n), a.current = n);
  }, [
    n,
    a,
    o
  ]), r;
}
var xa = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Ye = xa.reduce((e, t) => {
  const r = /* @__PURE__ */ (0, import_react.forwardRef)((n, a) => {
    const { asChild: o, ...i } = n, c = o ? dt : t;
    return (0, import_react.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), /* @__PURE__ */ (0, import_react.createElement)(c, W({}, i, {
      ref: a
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {});
var ut = globalThis != null && globalThis.document ? import_react.useLayoutEffect : () => {
};
function Ea(e, t) {
  return (0, import_react.useReducer)((r, n) => {
    const a = t[r][n];
    return a ?? r;
  }, e);
}
var Wr = (e) => {
  const { present: t, children: r } = e, n = Sa(t), a = typeof r == "function" ? r({
    present: n.isPresent
  }) : import_react.Children.only(r), o = He(n.ref, a.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ (0, import_react.cloneElement)(a, {
    ref: o
  }) : null;
};
Wr.displayName = "Presence";
function Sa(e) {
  const [t, r] = (0, import_react.useState)(), n = (0, import_react.useRef)({}), a = (0, import_react.useRef)(e), o = (0, import_react.useRef)("none"), i = e ? "mounted" : "unmounted", [c, d] = Ea(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return (0, import_react.useEffect)(() => {
    const l = et(n.current);
    o.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), ut(() => {
    const l = n.current, f = a.current;
    if (f !== e) {
      const m = o.current, h = et(l);
      e ? d("MOUNT") : h === "none" || (l == null ? void 0 : l.display) === "none" ? d("UNMOUNT") : d(f && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [
    e,
    d
  ]), ut(() => {
    if (t) {
      const l = (p) => {
        const h = et(n.current).includes(p.animationName);
        p.target === t && h && (0, import_react_dom.flushSync)(
          () => d("ANIMATION_END")
        );
      }, f = (p) => {
        p.target === t && (o.current = et(n.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      d("ANIMATION_END");
  }, [
    t,
    d
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(c),
    ref: (0, import_react.useCallback)((l) => {
      l && (n.current = getComputedStyle(l)), r(l);
    }, [])
  };
}
function et(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
var Ca = Je["useId".toString()] || (() => {
});
var _a = 0;
function Ur(e) {
  const [t, r] = Je.useState(Ca());
  return ut(() => {
    e || r(
      (n) => n ?? String(_a++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
var Vr = "Collapsible";
var [wa, Gr] = zt(Vr);
var [Oa, Jt] = wa(Vr);
var Ta = /* @__PURE__ */ (0, import_react.forwardRef)((e, t) => {
  const { __scopeCollapsible: r, open: n, defaultOpen: a, disabled: o, onOpenChange: i, ...c } = e, [d = false, l] = Ht({
    prop: n,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ (0, import_react.createElement)(Oa, {
    scope: r,
    disabled: o,
    contentId: Ur(),
    open: d,
    onOpenToggle: (0, import_react.useCallback)(
      () => l(
        (f) => !f
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ (0, import_react.createElement)(Ye.div, W({
    "data-state": Yt(d),
    "data-disabled": o ? "" : void 0
  }, c, {
    ref: t
  })));
});
var Na = "CollapsibleTrigger";
var Ra = /* @__PURE__ */ (0, import_react.forwardRef)((e, t) => {
  const { __scopeCollapsible: r, ...n } = e, a = Jt(Na, r);
  return /* @__PURE__ */ (0, import_react.createElement)(Ye.button, W({
    type: "button",
    "aria-controls": a.contentId,
    "aria-expanded": a.open || false,
    "data-state": Yt(a.open),
    "data-disabled": a.disabled ? "" : void 0,
    disabled: a.disabled
  }, n, {
    ref: t,
    onClick: Dr(e.onClick, a.onOpenToggle)
  }));
});
var Br = "CollapsibleContent";
var $a = /* @__PURE__ */ (0, import_react.forwardRef)((e, t) => {
  const { forceMount: r, ...n } = e, a = Jt(Br, e.__scopeCollapsible);
  return /* @__PURE__ */ (0, import_react.createElement)(
    Wr,
    {
      present: r || a.open
    },
    ({ present: o }) => /* @__PURE__ */ (0, import_react.createElement)(ja, W({}, n, {
      ref: t,
      present: o
    }))
  );
});
var ja = /* @__PURE__ */ (0, import_react.forwardRef)((e, t) => {
  const { __scopeCollapsible: r, present: n, children: a, ...o } = e, i = Jt(Br, r), [c, d] = (0, import_react.useState)(n), l = (0, import_react.useRef)(null), f = He(t, l), p = (0, import_react.useRef)(0), m = p.current, h = (0, import_react.useRef)(0), y = h.current, S = i.open || c, g = (0, import_react.useRef)(S), x = (0, import_react.useRef)();
  return (0, import_react.useEffect)(() => {
    const E = requestAnimationFrame(
      () => g.current = false
    );
    return () => cancelAnimationFrame(E);
  }, []), ut(() => {
    const E = l.current;
    if (E) {
      x.current = x.current || {
        transitionDuration: E.style.transitionDuration,
        animationName: E.style.animationName
      }, E.style.transitionDuration = "0s", E.style.animationName = "none";
      const T = E.getBoundingClientRect();
      p.current = T.height, h.current = T.width, g.current || (E.style.transitionDuration = x.current.transitionDuration, E.style.animationName = x.current.animationName), d(n);
    }
  }, [
    i.open,
    n
  ]), /* @__PURE__ */ (0, import_react.createElement)(Ye.div, W({
    "data-state": Yt(i.open),
    "data-disabled": i.disabled ? "" : void 0,
    id: i.contentId,
    hidden: !S
  }, o, {
    ref: f,
    style: {
      ["--radix-collapsible-content-height"]: m ? `${m}px` : void 0,
      ["--radix-collapsible-content-width"]: y ? `${y}px` : void 0,
      ...e.style
    }
  }), S && a);
});
function Yt(e) {
  return e ? "open" : "closed";
}
var Ia = Ta;
var ka = Ra;
var Aa = $a;
var Pa = /* @__PURE__ */ (0, import_react.createContext)(void 0);
function Ma(e) {
  const t = (0, import_react.useContext)(Pa);
  return e || t || "ltr";
}
var Ee = "Accordion";
var La = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
var [Kt, Da, Fa] = ga(Ee);
var [Et, Hi] = zt(Ee, [
  Fa,
  Gr
]);
var qt = Gr();
var zr = /* @__PURE__ */ import_react.default.forwardRef((e, t) => {
  const { type: r, ...n } = e, a = n, o = n;
  return /* @__PURE__ */ import_react.default.createElement(Kt.Provider, {
    scope: e.__scopeAccordion
  }, r === "multiple" ? /* @__PURE__ */ import_react.default.createElement(Ga, W({}, o, {
    ref: t
  })) : /* @__PURE__ */ import_react.default.createElement(Va, W({}, a, {
    ref: t
  })));
});
zr.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
var [Hr, Wa] = Et(Ee);
var [Jr, Ua] = Et(Ee, {
  collapsible: false
});
var Va = /* @__PURE__ */ import_react.default.forwardRef((e, t) => {
  const { value: r, defaultValue: n, onValueChange: a = () => {
  }, collapsible: o = false, ...i } = e, [c, d] = Ht({
    prop: r,
    defaultProp: n,
    onChange: a
  });
  return /* @__PURE__ */ import_react.default.createElement(Hr, {
    scope: e.__scopeAccordion,
    value: c ? [
      c
    ] : [],
    onItemOpen: d,
    onItemClose: import_react.default.useCallback(
      () => o && d(""),
      [
        o,
        d
      ]
    )
  }, /* @__PURE__ */ import_react.default.createElement(Jr, {
    scope: e.__scopeAccordion,
    collapsible: o
  }, /* @__PURE__ */ import_react.default.createElement(Yr, W({}, i, {
    ref: t
  }))));
});
var Ga = /* @__PURE__ */ import_react.default.forwardRef((e, t) => {
  const { value: r, defaultValue: n, onValueChange: a = () => {
  }, ...o } = e, [i = [], c] = Ht({
    prop: r,
    defaultProp: n,
    onChange: a
  }), d = import_react.default.useCallback(
    (f) => c(
      (p = []) => [
        ...p,
        f
      ]
    ),
    [
      c
    ]
  ), l = import_react.default.useCallback(
    (f) => c(
      (p = []) => p.filter(
        (m) => m !== f
      )
    ),
    [
      c
    ]
  );
  return /* @__PURE__ */ import_react.default.createElement(Hr, {
    scope: e.__scopeAccordion,
    value: i,
    onItemOpen: d,
    onItemClose: l
  }, /* @__PURE__ */ import_react.default.createElement(Jr, {
    scope: e.__scopeAccordion,
    collapsible: true
  }, /* @__PURE__ */ import_react.default.createElement(Yr, W({}, o, {
    ref: t
  }))));
});
var [Ba, St] = Et(Ee);
var Yr = /* @__PURE__ */ import_react.default.forwardRef((e, t) => {
  const { __scopeAccordion: r, disabled: n, dir: a, orientation: o = "vertical", ...i } = e, c = import_react.default.useRef(null), d = He(c, t), l = Da(r), p = Ma(a) === "ltr", m = Dr(e.onKeyDown, (h) => {
    var y;
    if (!La.includes(h.key))
      return;
    const S = h.target, g = l().filter((K) => {
      var H;
      return !((H = K.ref.current) !== null && H !== void 0 && H.disabled);
    }), x = g.findIndex(
      (K) => K.ref.current === S
    ), E = g.length;
    if (x === -1)
      return;
    h.preventDefault();
    let T = x;
    const P = 0, Z = E - 1, I = () => {
      T = x + 1, T > Z && (T = P);
    }, M = () => {
      T = x - 1, T < P && (T = Z);
    };
    switch (h.key) {
      case "Home":
        T = P;
        break;
      case "End":
        T = Z;
        break;
      case "ArrowRight":
        o === "horizontal" && (p ? I() : M());
        break;
      case "ArrowDown":
        o === "vertical" && I();
        break;
      case "ArrowLeft":
        o === "horizontal" && (p ? M() : I());
        break;
      case "ArrowUp":
        o === "vertical" && M();
        break;
    }
    const Y = T % E;
    (y = g[Y].ref.current) === null || y === void 0 || y.focus();
  });
  return /* @__PURE__ */ import_react.default.createElement(Ba, {
    scope: r,
    disabled: n,
    direction: a,
    orientation: o
  }, /* @__PURE__ */ import_react.default.createElement(Kt.Slot, {
    scope: r
  }, /* @__PURE__ */ import_react.default.createElement(Ye.div, W({}, i, {
    "data-orientation": o,
    ref: d,
    onKeyDown: n ? void 0 : m
  }))));
});
var Lt = "AccordionItem";
var [za, Zt] = Et(Lt);
var Ha = /* @__PURE__ */ import_react.default.forwardRef((e, t) => {
  const { __scopeAccordion: r, value: n, ...a } = e, o = St(Lt, r), i = Wa(Lt, r), c = qt(r), d = Ur(), l = n && i.value.includes(n) || false, f = o.disabled || e.disabled;
  return /* @__PURE__ */ import_react.default.createElement(za, {
    scope: r,
    open: l,
    disabled: f,
    triggerId: d
  }, /* @__PURE__ */ import_react.default.createElement(Ia, W({
    "data-orientation": o.orientation,
    "data-state": Kr(l)
  }, c, a, {
    ref: t,
    disabled: f,
    open: l,
    onOpenChange: (p) => {
      p ? i.onItemOpen(n) : i.onItemClose(n);
    }
  })));
});
var Ja = "AccordionHeader";
var Ya = /* @__PURE__ */ import_react.default.forwardRef((e, t) => {
  const { __scopeAccordion: r, ...n } = e, a = St(Ee, r), o = Zt(Ja, r);
  return /* @__PURE__ */ import_react.default.createElement(Ye.h3, W({
    "data-orientation": a.orientation,
    "data-state": Kr(o.open),
    "data-disabled": o.disabled ? "" : void 0
  }, n, {
    ref: t
  }));
});
var wr = "AccordionTrigger";
var Ka = /* @__PURE__ */ import_react.default.forwardRef((e, t) => {
  const { __scopeAccordion: r, ...n } = e, a = St(Ee, r), o = Zt(wr, r), i = Ua(wr, r), c = qt(r);
  return /* @__PURE__ */ import_react.default.createElement(Kt.ItemSlot, {
    scope: r
  }, /* @__PURE__ */ import_react.default.createElement(ka, W({
    "aria-disabled": o.open && !i.collapsible || void 0,
    "data-orientation": a.orientation,
    id: o.triggerId
  }, c, n, {
    ref: t
  })));
});
var qa = "AccordionContent";
var Za = /* @__PURE__ */ import_react.default.forwardRef((e, t) => {
  const { __scopeAccordion: r, ...n } = e, a = St(Ee, r), o = Zt(qa, r), i = qt(r);
  return /* @__PURE__ */ import_react.default.createElement(Aa, W({
    role: "region",
    "aria-labelledby": o.triggerId,
    "data-orientation": a.orientation
  }, i, n, {
    ref: t,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function Kr(e) {
  return e ? "open" : "closed";
}
var Qa = zr;
var Xa = Ha;
var ei = Ya;
var qr = Ka;
var Zr = Za;
function ti() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = Qr(t)) && (n && (n += " "), n += r);
  return n;
}
function Qr(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = Qr(e[n])) && (r && (r += " "), r += t);
  return r;
}
var Qt = "-";
function ri(e) {
  var t = oi(e), r = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, a = n === void 0 ? {} : n;
  function o(c) {
    var d = c.split(Qt);
    return d[0] === "" && d.length !== 1 && d.shift(), Xr(d, t) || ni(c);
  }
  function i(c, d) {
    var l = r[c] || [];
    return d && a[c] ? [].concat(l, a[c]) : l;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: i
  };
}
function Xr(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], n = t.nextPart.get(r), a = n ? Xr(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var o = e.join(Qt);
    return (i = t.validators.find(function(c) {
      var d = c.validator;
      return d(o);
    })) == null ? void 0 : i.classGroupId;
  }
}
var Or = /^\[(.+)\]$/;
function ni(e) {
  if (Or.test(e)) {
    var t = Or.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function oi(e) {
  var t = e.theme, r = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = ii(Object.entries(e.classGroups), r);
  return a.forEach(function(o) {
    var i = o[0], c = o[1];
    Dt(c, n, i, t);
  }), n;
}
function Dt(e, t, r, n) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var o = a === "" ? t : Tr(t, a);
      o.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (ai(a)) {
        Dt(a(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(function(i) {
      var c = i[0], d = i[1];
      Dt(d, Tr(t, c), r, n);
    });
  });
}
function Tr(e, t) {
  var r = e;
  return t.split(Qt).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function ai(e) {
  return e.isThemeGetter;
}
function ii(e, t) {
  return t ? e.map(function(r) {
    var n = r[0], a = r[1], o = a.map(function(i) {
      return typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(c) {
        var d = c[0], l = c[1];
        return [t + d, l];
      })) : i;
    });
    return [n, o];
  }) : e;
}
function si(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function a(o, i) {
    r.set(o, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var c = r.get(i);
      if (c !== void 0)
        return c;
      if ((c = n.get(i)) !== void 0)
        return a(i, c), c;
    },
    set: function(i, c) {
      r.has(i) ? r.set(i, c) : a(i, c);
    }
  };
}
var en = "!";
function li(e) {
  var t = e.separator || ":", r = t.length === 1, n = t[0], a = t.length;
  return function(i) {
    for (var c = [], d = 0, l = 0, f, p = 0; p < i.length; p++) {
      var m = i[p];
      if (d === 0) {
        if (m === n && (r || i.slice(p, p + a) === t)) {
          c.push(i.slice(l, p)), l = p + a;
          continue;
        }
        if (m === "/") {
          f = p;
          continue;
        }
      }
      m === "[" ? d++ : m === "]" && d--;
    }
    var h = c.length === 0 ? i : i.substring(l), y = h.startsWith(en), S = y ? h.substring(1) : h, g = f && f > l ? f - l : void 0;
    return {
      modifiers: c,
      hasImportantModifier: y,
      baseClassName: S,
      maybePostfixModifierPosition: g
    };
  };
}
function ci(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(n) {
    var a = n[0] === "[";
    a ? (t.push.apply(t, r.sort().concat([n])), r = []) : r.push(n);
  }), t.push.apply(t, r.sort()), t;
}
function di(e) {
  return {
    cache: si(e.cacheSize),
    splitModifiers: li(e),
    ...ri(e)
  };
}
var ui = /\s+/;
function fi(e, t) {
  var r = t.splitModifiers, n = t.getClassGroupId, a = t.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return e.trim().split(ui).map(function(i) {
    var c = r(i), d = c.modifiers, l = c.hasImportantModifier, f = c.baseClassName, p = c.maybePostfixModifierPosition, m = n(p ? f.substring(0, p) : f), h = !!p;
    if (!m) {
      if (!p)
        return {
          isTailwindClass: false,
          originalClassName: i
        };
      if (m = n(f), !m)
        return {
          isTailwindClass: false,
          originalClassName: i
        };
      h = false;
    }
    var y = ci(d).join(":"), S = l ? y + en : y;
    return {
      isTailwindClass: true,
      modifierId: S,
      classGroupId: m,
      originalClassName: i,
      hasPostfixModifier: h
    };
  }).reverse().filter(function(i) {
    if (!i.isTailwindClass)
      return true;
    var c = i.modifierId, d = i.classGroupId, l = i.hasPostfixModifier, f = c + d;
    return o.has(f) ? false : (o.add(f), a(d, l).forEach(function(p) {
      return o.add(c + p);
    }), true);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function pi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, a, o, i = c;
  function c(l) {
    var f = t[0], p = t.slice(1), m = p.reduce(function(h, y) {
      return y(h);
    }, f());
    return n = di(m), a = n.cache.get, o = n.cache.set, i = d, d(l);
  }
  function d(l) {
    var f = a(l);
    if (f)
      return f;
    var p = fi(l, n);
    return o(l, p), p;
  }
  return function() {
    return i(ti.apply(null, arguments));
  };
}
function j(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = true, t;
}
var tn = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var vi = /^\d+\/\d+$/;
var bi = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var mi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var hi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/;
var gi = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function re(e) {
  return Ce(e) || bi.has(e) || vi.test(e) || he(e);
}
function he(e) {
  return Oe(e, "length", _i);
}
function yi(e) {
  return Oe(e, "size", rn);
}
function xi(e) {
  return Oe(e, "position", rn);
}
function Ei(e) {
  return Oe(e, "url", wi);
}
function tt(e) {
  return Oe(e, "number", Ce);
}
function Ce(e) {
  return !Number.isNaN(Number(e));
}
function Si(e) {
  return e.endsWith("%") && Ce(e.slice(0, -1));
}
function Ue(e) {
  return Nr(e) || Oe(e, "number", Nr);
}
function D(e) {
  return tn.test(e);
}
function Ve() {
  return true;
}
function be(e) {
  return mi.test(e);
}
function Ci(e) {
  return Oe(e, "", Oi);
}
function Oe(e, t, r) {
  var n = tn.exec(e);
  return n ? n[1] ? n[1] === t : r(n[2]) : false;
}
function _i(e) {
  return hi.test(e);
}
function rn() {
  return false;
}
function wi(e) {
  return e.startsWith("url(");
}
function Nr(e) {
  return Number.isInteger(Number(e));
}
function Oi(e) {
  return gi.test(e);
}
function Ti() {
  var e = j("colors"), t = j("spacing"), r = j("blur"), n = j("brightness"), a = j("borderColor"), o = j("borderRadius"), i = j("borderSpacing"), c = j("borderWidth"), d = j("contrast"), l = j("grayscale"), f = j("hueRotate"), p = j("invert"), m = j("gap"), h = j("gradientColorStops"), y = j("gradientColorStopPositions"), S = j("inset"), g = j("margin"), x = j("opacity"), E = j("padding"), T = j("saturate"), P = j("scale"), Z = j("sepia"), I = j("skew"), M = j("space"), Y = j("translate"), K = function() {
    return ["auto", "contain", "none"];
  }, H = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, Q = function() {
    return ["auto", t];
  }, fe = function() {
    return ["", re];
  }, U = function() {
    return ["auto", Ce, D];
  }, J = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, X = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, se = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Te = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, pe = function() {
    return ["", "0", D];
  }, Le = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ve = function() {
    return [Ce, tt];
  }, Se = function() {
    return [Ce, D];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Ve],
      spacing: [re],
      blur: ["none", "", be, he],
      brightness: ve(),
      borderColor: [e],
      borderRadius: ["none", "", "full", be, he],
      borderSpacing: [t],
      borderWidth: fe(),
      contrast: ve(),
      grayscale: pe(),
      hueRotate: Se(),
      invert: pe(),
      gap: [t],
      gradientColorStops: [e],
      gradientColorStopPositions: [Si, he],
      inset: Q(),
      margin: Q(),
      opacity: ve(),
      padding: [t],
      saturate: ve(),
      scale: ve(),
      sepia: pe(),
      skew: Se(),
      space: [t],
      translate: [t]
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", D]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [be]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Le()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Le()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(J(), [D])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: K()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": K()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": K()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Q()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", D]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: pe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: pe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ve]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: [Ue]
        }, D]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ve]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ue]
        }, D]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", D]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", D]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(Te())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(Te(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(Te(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [E]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [E]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [E]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [E]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [E]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [E]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [E]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [E]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [E]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [M]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [M]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", re]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [be]
        }, be, he]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", re]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", be, he]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", tt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ve]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", he]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ce, tt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", re]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", D]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", D]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(X(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", re]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", re]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: [t]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", he]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", D]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(J(), [xi])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", yi]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ei]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(X(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [c]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: X()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(X())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [re]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: fe()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [re]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", be, Ci]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ve]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": se()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", be, D]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [T]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Z]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [T]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Z]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", D]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Se()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", D]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Se()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", D]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [P]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [P]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [P]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ue, D]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Y]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Y]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [I]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [I]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", D]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": [t]
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": [t]
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": [t]
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": [t]
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": [t]
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": [t]
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": [t]
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": [t]
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": [t]
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": [t]
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": [t]
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": [t]
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": [t]
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": [t]
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": [t]
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": [t]
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": [t]
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": [t]
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", D]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [re, tt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var Ni = /* @__PURE__ */ pi(Ti);
function Xt(...e) {
  return Ni(z(e));
}
var Ri = Qa;
var Ft = Je.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Xa,
  {
    ref: r,
    className: Xt("rdt-border-b rdt-border-b-gray-500", e),
    ...t
  }
));
Ft.displayName = "AccordionItem";
var Wt = Je.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsx(ei, { className: "rdt-flex", children: /* @__PURE__ */ u.jsxs(
  qr,
  {
    ref: n,
    className: Xt(
      "rdt-flex rdt-flex-1 rdt-items-center rdt-justify-between rdt-py-2 rdt-text-sm rdt-font-medium rdt-transition-all [&[data-state=open]>svg]:rdt-rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(qn, { className: "rdt-text-muted-foreground rdt-h-4 rdt-w-4 rdt-shrink-0 rdt-transition-transform rdt-duration-200" })
    ]
  }
) }));
Wt.displayName = qr.displayName;
var Ut = Je.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  Zr,
  {
    ref: n,
    className: Xt(
      "rdt-data-[state=closed]:animate-accordion-up rdt-data-[state=open]:animate-accordion-down rdt-overflow-hidden rdt-text-sm",
      e
    ),
    ...r,
    children: /* @__PURE__ */ u.jsx("div", { className: "rdt-pt-0", children: t })
  }
));
Ut.displayName = Zr.displayName;
var nn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "input",
  {
    className: z(
      "rdt-w-full rdt-rounded rdt-border rdt-border-gray-400 rdt-bg-[#121212] rdt-px-2 rdt-py-1 rdt-text-sm",
      e
    ),
    ...t
  }
);
var me = ({
  onChange: e,
  id: t,
  children: r,
  value: n,
  ...a
}) => /* @__PURE__ */ u.jsxs("div", { className: "rdt-flex rdt-items-center rdt-gap-2 rdt-py-1", children: [
  /* @__PURE__ */ u.jsx(
    "input",
    {
      value: n ? "checked" : void 0,
      onChange: e,
      id: t,
      type: "checkbox",
      ...a
    }
  ),
  /* @__PURE__ */ u.jsx("label", { className: "rdt-text-md rdt-cursor-pointer", htmlFor: t, children: r })
] });
var Rr = {
  path: "",
  loader: false,
  action: false,
  headers: false,
  errorBoundary: false,
  revalidate: false,
  handler: false,
  meta: false,
  links: false
};
var $i = () => {
  const { sendJsonMessage: e } = xt({
    onMessage: (o) => {
      o.data.type === "route_added" && r(Rr);
    }
  }), [t, r] = (0, import_react.useState)(Rr), n = () => {
    const { path: o, ...i } = t;
    e({
      type: "add_route",
      path: o,
      options: i
    });
  }, a = (o) => {
    r({ ...t, ...o });
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-2 rdt-rounded-lg rdt-border rdt-border-gray-500/20 rdt-p-2", children: [
    /* @__PURE__ */ u.jsx("label", { className: "rdt-mb-2 rdt-block ", children: "Route path:" }),
    /* @__PURE__ */ u.jsx(
      nn,
      {
        onBlur: () => a({
          path: t.path.trim()
        }),
        onChange: (o) => a({ path: o.target.value }),
        className: "rdt-mb-1"
      }
    ),
    /* @__PURE__ */ u.jsx("span", { className: "rdt-mb-4 rdt-block rdt-text-gray-500", children: "This will be added to your routes folder under your entered name, exclude the extension" }),
    /* @__PURE__ */ u.jsx("label", { className: "rdt-mb-2 rdt-block", children: "Additional options:" }),
    /* @__PURE__ */ u.jsx(
      me,
      {
        value: t.loader,
        onChange: () => a({
          loader: !t.loader
        }),
        id: "loader",
        children: "Add a loader"
      }
    ),
    /* @__PURE__ */ u.jsx(
      me,
      {
        value: t.action,
        onChange: () => a({
          action: !t.action
        }),
        id: "action",
        children: "Add an action"
      }
    ),
    /* @__PURE__ */ u.jsx(
      me,
      {
        value: t.errorBoundary,
        onChange: () => a({
          errorBoundary: !t.errorBoundary
        }),
        id: "error-boundary",
        children: "Add an error boundary"
      }
    ),
    /* @__PURE__ */ u.jsx(
      me,
      {
        value: t.handler,
        onChange: () => a({
          handler: !t.handler
        }),
        id: "handle",
        children: "Add a handle"
      }
    ),
    /* @__PURE__ */ u.jsx(
      me,
      {
        value: t.meta,
        onChange: () => a({ meta: !t.meta }),
        id: "meta",
        children: "Add a meta export"
      }
    ),
    /* @__PURE__ */ u.jsx(
      me,
      {
        value: t.links,
        onChange: () => a({ links: !t.links }),
        id: "links",
        children: "Add a links export"
      }
    ),
    /* @__PURE__ */ u.jsx(
      me,
      {
        value: t.headers,
        onChange: () => a({
          headers: !t.headers
        }),
        id: "headers",
        children: "Add a headers export"
      }
    ),
    /* @__PURE__ */ u.jsx(
      me,
      {
        value: t.revalidate,
        onChange: () => a({
          revalidate: !t.revalidate
        }),
        id: "shouldRevalidate",
        children: "Add a shouldRevalidate export"
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: n,
        disabled: !t.path,
        className: z(
          "rdt-mr-2 rdt-mt-2 rdt-self-end rdt-rounded rdt-border rdt-border-gray-400 rdt-px-2 rdt-py-1 rdt-text-sm",
          !t.path && "rdt-opacity-50"
        ),
        children: "Add route"
      }
    )
  ] });
};
var ji = (e) => {
  const t = e.id.replace("routes/", ""), r = t.startsWith("_") && !t.split(".")[0].endsWith("index") && t.split(".").length === 1;
  return t.startsWith("__") || r;
};
var Ii = () => {
  const { routeWildcards: e, setRouteWildcards: t } = Me(), { isConnected: r } = xt(), [n] = (0, import_react.useState)(
    Object.values(window.__remixManifest.routes).map((o) => ({
      ...o,
      route: fa(window.__remixManifest.routes, o)
    })).filter((o) => !ji(o) && o.id !== "root")
  ), a = useNavigate();
  return /* @__PURE__ */ u.jsxs(
    Ri,
    {
      className: "rdt-h-full rdt-w-full rdt-overflow-y-auto rdt-pb-12 rdt-pr-4",
      type: "single",
      collapsible: true,
      children: [
        r && /* @__PURE__ */ u.jsxs(Ft, { value: "add-new", children: [
          /* @__PURE__ */ u.jsx(Wt, { children: "Add a new route to the project" }),
          /* @__PURE__ */ u.jsx(Ut, { children: /* @__PURE__ */ u.jsx($i, {}) })
        ] }),
        n == null ? void 0 : n.map((o) => {
          const i = o.route.includes(":"), c = e[o.id], d = o.route.split("/").map((f) => f.startsWith(":") && c != null && c[f] ? c == null ? void 0 : c[f] : f).join("/"), l = document.location.origin + (d === "/" ? d : "/" + d);
          return /* @__PURE__ */ u.jsxs(Ft, { value: o.id, children: [
            /* @__PURE__ */ u.jsx(Wt, { children: /* @__PURE__ */ u.jsxs("div", { className: "justify-center rdt-flex rdt-w-full rdt-items-center rdt-gap-2", children: [
              /* @__PURE__ */ u.jsx("span", { className: "rdt-text-gray-500", children: "Route:" }),
              " ",
              o.route,
              " ",
              /* @__PURE__ */ u.jsxs("span", { className: "rdt-ml-auto rdt-text-xs rdt-text-gray-500", children: [
                'Url: "',
                l,
                '"'
              ] }),
              /* @__PURE__ */ u.jsx(
                "div",
                {
                  title: l,
                  className: "rdt-mr-2 rdt-rounded rdt-border rdt-border-gray-400 rdt-px-2 rdt-py-1 rdt-text-sm",
                  onClick: (f) => {
                    f.preventDefault(), a(d);
                  },
                  children: "Open in browser"
                }
              )
            ] }) }),
            /* @__PURE__ */ u.jsxs(Ut, { children: [
              /* @__PURE__ */ u.jsxs("div", { className: "rdt-flex rdt-gap-2", children: [
                /* @__PURE__ */ u.jsx("span", { className: "rdt-text-gray-500", children: "Key:" }),
                o.id
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-4 rdt-mt-4 rdt-flex rdt-flex-col rdt-gap-2", children: [
                /* @__PURE__ */ u.jsx("span", { className: "rdt-text-gray-500", children: "Components contained in the route:" }),
                /* @__PURE__ */ u.jsxs("div", { className: "rdt-flex rdt-gap-2", children: [
                  /* @__PURE__ */ u.jsx(je, { color: o.hasLoader ? "GREEN" : "RED", children: "Loader" }),
                  /* @__PURE__ */ u.jsx(je, { color: o.hasAction ? "GREEN" : "RED", children: "Action" }),
                  /* @__PURE__ */ u.jsx(je, { color: o.hasErrorBoundary ? "GREEN" : "RED", children: "ErrorBoundary" })
                ] })
              ] }),
              i && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                /* @__PURE__ */ u.jsx("p", { className: "rdt-mb-2 rdt-text-gray-500", children: "Wildcard parameters:" }),
                /* @__PURE__ */ u.jsx("div", { className: "rdt-mb-4 rdt-grid rdt-w-full rdt-grid-cols-2 rdt-gap-2", children: o.route.split("/").filter((f) => f.startsWith(":")).map((f) => {
                  var p;
                  return /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: "rdt-flex rdt-w-full rdt-gap-2",
                      children: [
                        /* @__PURE__ */ u.jsx(je, { color: "BLUE", children: f }, f),
                        /* @__PURE__ */ u.jsx(
                          nn,
                          {
                            value: ((p = e[o.id]) == null ? void 0 : p[f]) || "",
                            onChange: (m) => t({
                              ...e,
                              [o.id]: {
                                ...e[o.id],
                                [f]: m.target.value
                              }
                            }),
                            placeholder: f
                          }
                        )
                      ]
                    },
                    f
                  );
                }) })
              ] })
            ] })
          ] }, o.id);
        })
      ]
    }
  );
};
var ki = {
  REDIRECT: "Normal Page navigation",
  FETCHER_REDIRECT: "Page navigation due to fetcher",
  ACTION_REDIRECT: "Page navigation due to action",
  FORM_SUBMISSION: "Form submission",
  FETCHER_SUBMIT: "Form submission from a fetcher",
  ACTION_RESPONSE: "Action response",
  FETCHER_RESPONSE: "Fetcher action response"
};
var Ai = (e) => /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-4", children: [
  /* @__PURE__ */ u.jsxs("time", { className: "rdt-mb-2 rdt-block rdt-text-sm rdt-font-normal rdt-leading-none  rdt-text-gray-500", children: [
    'Navigated to url: "',
    e.to + e.search,
    '"'
  ] }),
  /* @__PURE__ */ u.jsx("p", { className: "rdt-mb-4 rdt-text-base rdt-font-normal   rdt-text-gray-400", children: e.hash }),
  e.responseData && /* @__PURE__ */ u.jsxs("p", { className: "rdt-mb-4 rdt-text-base rdt-font-normal  rdt-text-gray-400", children: [
    "Data received:",
    /* @__PURE__ */ u.jsx(ke, { data: e.responseData })
  ] })
] });
var Pi = (e) => {
  const t = e.type === "ACTION_REDIRECT" ? `Redirect from "${e.to}" to "${e.from}"` : `Submission to url: "${e.to}"`, r = e.responseData;
  return r == null || delete r.remixDevTools, /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-4", children: [
    /* @__PURE__ */ u.jsxs("time", { className: "rdt-mb-2 rdt-block rdt-text-sm rdt-font-normal rdt-leading-none rdt-text-gray-500", children: [
      t,
      " | encType: ",
      e.encType
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "rdt-flex rdt-gap-8", children: [
      e.data && e.type !== "ACTION_RESPONSE" && /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-4 rdt-text-base rdt-font-normal   rdt-text-gray-400", children: [
        "Data sent:",
        /* @__PURE__ */ u.jsx(ke, { data: e.data })
      ] }),
      r && /* @__PURE__ */ u.jsxs("div", { className: "rdt-mb-4 rdt-text-base rdt-font-normal   rdt-text-gray-400", children: [
        "Server Response Data:",
        /* @__PURE__ */ u.jsx(ke, { data: r })
      ] })
    ] })
  ] });
};
var Mi = {
  GET: "GREEN",
  POST: "BLUE",
  PUT: "TEAL",
  DELETE: "RED",
  PATCH: "PURPLE"
};
var Li = () => {
  const { timeline: e, clearTimeline: t } = Me();
  return /* @__PURE__ */ u.jsxs("div", { className: "rdt-relative rdt-flex rdt-h-full  rdt-flex-col rdt-overflow-y-auto rdt-p-6 rdt-px-6", children: [
    e.length > 0 && /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t(),
        className: "rdt-absolute rdt-right-4 rdt-top-0 rdt-z-20 rdt-cursor-pointer rdt-rounded-lg rdt-bg-red-500 rdt-px-3 rdt-py-1 rdt-text-sm rdt-font-semibold rdt-text-white",
        children: "Clear Timeline"
      }
    ),
    /* @__PURE__ */ u.jsx("ol", { className: "rdt-relative", children: e.map((r) => /* @__PURE__ */ u.jsxs(
      "li",
      {
        className: "rdt-mb-2 rdt-ml-8 rdt-animate-fade-in-left",
        children: [
          /* @__PURE__ */ u.jsx("span", { className: "rdt-absolute -rdt-left-3 rdt-mt-2 rdt-flex rdt-h-6 rdt-w-6 rdt-animate-fade-in rdt-items-center rdt-justify-center rdt-rounded-full rdt-bg-blue-900 rdt-ring-4 rdt-ring-blue-900", children: /* @__PURE__ */ u.jsx(Kn, {}) }),
          /* @__PURE__ */ u.jsxs("h3", { className: "-rdt-mt-3 rdt-mb-1 rdt-flex rdt-items-center rdt-gap-2 rdt-text-lg rdt-font-semibold rdt-text-white", children: [
            ki[r.type],
            (r == null ? void 0 : r.method) && /* @__PURE__ */ u.jsx(je, { color: Mi[r.method], children: r.method })
          ] }),
          r.type === "REDIRECT" || r.type === "FETCHER_REDIRECT" ? /* @__PURE__ */ u.jsx(Ai, { ...r }) : /* @__PURE__ */ u.jsx(Pi, { ...r })
        ]
      },
      r.id
    )) })
  ] });
};
var It = 16;
var kt = [
  {
    name: "Active page",
    icon: /* @__PURE__ */ u.jsx(eo, { size: It }),
    id: "page",
    component: /* @__PURE__ */ u.jsx(ua, {}),
    requiresForge: false
  },
  {
    name: "Timeline",
    icon: /* @__PURE__ */ u.jsx(Xn, { size: It }),
    id: "timeline",
    component: /* @__PURE__ */ u.jsx(Li, {}),
    requiresForge: false
  },
  {
    name: "Routes",
    icon: /* @__PURE__ */ u.jsx(Qn, { size: It }),
    id: "routes",
    component: /* @__PURE__ */ u.jsx(Ii, {}),
    requiresForge: false
  }
  /*  {
    name: "Terminal",
    icon: <Terminal size={TAB_SIZE} />,
    id: "terminal",
    component: <TerminalTab />,
    requiresForge: true,
  },
  {
    name: "Server",
    icon: <Server size={TAB_SIZE} />,
    id: "server",
    component: <ServerTab />,
    requiresForge: true,
  }, */
];
var $r = (e) => {
  const t = e && e.entries ? Object.fromEntries(e.entries()) : void 0;
  return t && Object.keys(t).length > 0 ? t : void 0;
};
var Di = () => {
  const e = useNavigation(), t = useFetchers(), { setTimelineEvent: r } = Me(), n = useActionData();
  (0, import_react.useEffect)(() => {
    const { state: o, location: i, formAction: c, formData: d, formMethod: l, formEncType: f } = e;
    if (o === "idle")
      return;
    const { state: p, pathname: m, search: h, hash: y } = i, S = $r(d);
    if (o === "submitting")
      return r({
        type: "FORM_SUBMISSION",
        from: m,
        to: c,
        method: l,
        data: S,
        encType: f,
        id: (Math.random() * Date.now()).toString()
      });
    if (o === "loading")
      return c && d && l && (p != null && p._isRedirect) ? r({
        type: "ACTION_REDIRECT",
        from: m,
        to: c,
        method: l,
        data: S,
        encType: f,
        responseData: n,
        id: (Math.random() * Date.now()).toString()
      }) : r(c && d && l ? {
        type: "ACTION_RESPONSE",
        from: m,
        to: c,
        method: l,
        data: S,
        encType: f,
        responseData: n,
        id: (Math.random() * Date.now()).toString()
      } : {
        type: p != null && p._isFetchActionRedirect || p != null && p._isFetchLoaderRedirect ? "FETCHER_REDIRECT" : "REDIRECT",
        to: m,
        search: h,
        hash: y,
        method: "GET",
        id: (Math.random() * Date.now()).toString()
      });
  }, [e, n, r]);
  const a = (0, import_react.useRef)([]);
  (0, import_react.useEffect)(() => {
    if (e.state !== "idle")
      return;
    if (t.filter((i) => i.state !== "idle").length === 0 && a.current.length > 0) {
      a.current.map(
        ({ position: i, ...c }) => {
          var d;
          return r({
            ...c,
            responseData: (
              // If the fetcher is a GET request, the response data is stored in the fetcher, otherwise it's already set at this point
              c.method === "GET" ? (d = t[i]) == null ? void 0 : d.data : c.responseData
            ),
            id: (Math.random() * Date.now()).toString()
          });
        }
      ), a.current = [];
      return;
    }
    t.forEach((i, c) => {
      if (i.state === "idle")
        return;
      const { data: d, formAction: l, formData: f, formEncType: p, formMethod: m } = i;
      if (l && m) {
        const h = $r(f), y = {
          type: i.state === "loading" ? "FETCHER_RESPONSE" : "FETCHER_SUBMIT",
          to: l,
          method: m,
          data: h,
          encType: p,
          responseData: i.state === "submitting" ? void 0 : d,
          position: c
        };
        a.current.push(y);
      }
    });
  }, [t, e.state, r]);
};
var Fi = () => true;
var Wi = () => {
  const { height: e, setHeight: t } = Me(), [r, n] = (0, import_react.useState)(false), a = (0, import_react.useCallback)(() => {
    n(true);
  }, [n]), o = (0, import_react.useCallback)(() => {
    n(false);
  }, [n]), i = (0, import_react.useCallback)(
    (c) => {
      if (r) {
        const d = window.innerHeight - c.clientY;
        t(d);
      }
    },
    [r, t]
  );
  return (0, import_react.useEffect)(() => (document.addEventListener("mousemove", i), document.addEventListener("mouseup", o), () => {
    document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", o);
  }), [o, i]), { height: e, enableResize: a, disableResize: o, isResizing: r };
};
var Ui = ({ defaultOpen: e, position: t }) => {
  var r, n;
  const [a, o] = (0, import_react.useState)(e), { activeTab: i, setActiveTab: c, setShouldConnectWithForge: d, height: l } = Me(), { enableResize: f, disableResize: p, isResizing: m } = Wi();
  Di();
  const { isConnected: h, isConnecting: y } = xt(), S = (r = kt.find((x) => x.id === i)) === null || r === void 0 ? void 0 : r.component, g = t === "top-left" || t === "bottom-left" || t === "middle-left";
  return u.jsxs("div", { className: "remix-dev-tools", children: [u.jsx("div", { style: { zIndex: 9999 }, onClick: () => o(!a), className: z("rdt-fixed rdt-m-1.5 rdt-h-14 rdt-w-14 rdt-cursor-pointer rdt-rounded-full ", t === "bottom-right" && "rdt-bottom-0 rdt-right-0", t === "bottom-left" && "rdt-bottom-0 rdt-left-0", t === "top-right" && "rdt-right-0 rdt-top-0", t === "top-left" && "rdt-left-0 rdt-top-0", t === "middle-right" && "rdt-right-0 rdt-top-1/2 -rdt-translate-y-1/2", t === "middle-left" && "rdt-left-0 rdt-top-1/2 -rdt-translate-y-1/2"), children: u.jsx(Bn, { className: z("rdt-h-14 rdt-w-14 rdt-rounded-full rdt-transition-all rdt-duration-200", "rdt-hover:cursor-pointer rdt-hover:ring-2 rdt-ring-slate-600") }) }), u.jsxs("div", { style: { zIndex: 9998, height: l }, className: z("rdt-duration-600 rdt-fixed rdt-bottom-0 rdt-left-0 rdt-box-border rdt-flex rdt-w-screen rdt-resize-y rdt-flex-col rdt-overflow-auto rdt-bg-[#212121] rdt-text-white rdt-opacity-0 rdt-transition-all", a ? "rdt-opacity-100 rdt-drop-shadow-2xl" : "rdt-h-0", m ? "rdt-pointer-events-none" : "", m && "rdt-cursor-grabbing "), children: [u.jsx("div", { onMouseDown: f, onMouseUp: p, className: z("rdt-absolute rdt-h-1 rdt-w-full rdt-cursor-n-resize", m && "rdt-cursor-grabbing ") }), u.jsxs("div", { className: "rdt-flex rdt-h-8 rdt-w-full rdt-bg-gray-800", children: [kt.filter((x) => !(!h && x.requiresForge) && x.id !== "timeline").map((x) => u.jsxs("div", { onClick: () => c(x.id), className: z("rdt-flex rdt-cursor-pointer rdt-items-center rdt-gap-2 rdt-border-0 rdt-border-b rdt-border-r-2 rdt-border-solid rdt-border-b-[#212121] rdt-border-r-[#212121] rdt-px-4 rdt-font-sans rdt-transition-all rdt-duration-300", i !== x.id && "rdt-hover:opacity-50", i === x.id && "rdt-bg-[#212121]"), children: [x.icon, " ", x.name] }, x.id)), (!h || y) && u.jsxs("div", { onClick: () => d(true), className: z(y ? "rdt-pointer-events-none rdt-animate-pulse rdt-cursor-default" : "", "rdt-flex rdt-cursor-pointer rdt-items-center rdt-gap-2 rdt-border-0 rdt-border-b rdt-border-r-2 rdt-border-solid rdt-border-b-[#212121] rdt-border-r-[#212121] rdt-px-4 rdt-font-sans rdt-transition-all"), children: [u.jsx(to, { size: 16 }), y ? "Connecting to Forge..." : "Connect to Remix Forge"] })] }), u.jsxs("div", { className: "rdt-flex rdt-h-full rdt-w-full rdt-overflow-y-hidden", children: [u.jsx("div", { className: z("rdt-z-20 rdt-h-full rdt-w-full rdt-bg-[#212121] rdt-p-2", g ? "rdt-pl-16" : "rdt-pl-8"), children: S }), u.jsx("div", { className: "rdt-w-1 rdt-bg-gray-500/20" }), u.jsx("div", { className: z("rdt-z-10 rdt-h-full rdt-w-2/3 rdt-p-2", g ? "rdt-pl-16" : "rdt-pr-16"), children: (n = kt.find((x) => x.id === "timeline")) === null || n === void 0 ? void 0 : n.component })] })] })] });
};
var jr = true;
function Vi() {
  const [e, t] = (0, import_react.useState)(() => !jr);
  return (0, import_react.useEffect)(function() {
    jr = false, t(true);
  }, []), e;
}
var Ji = ({ port: e = 3003, defaultOpen: t = false, requireUrlFlag: r, position: n = "bottom-right" }) => {
  const a = Vi(), o = Fi(), i = useLocation().search;
  return !a || !o || r && !i.includes("rdt=true") ? null : u.jsx(Hn, { port: e, children: u.jsx(Ui, { position: n, defaultOpen: t }) });
};

// node_modules/.pnpm/remix-development-tools@1.1.1_@remix-run+react@1.19.0_@types+react-dom@18.2.7_@types+react@18_mvc3r346egk3mnk25deehqlxr4/node_modules/remix-development-tools/dist/stylesheet.css
var stylesheet_default = "/build/_assets/stylesheet-Y34AMAKQ.css";

// app/assets/css/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SVYTGVZ6.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [...stylesheet_default ? [{
  rel: "stylesheet",
  href: stylesheet_default
}] : [], {
  rel: "stylesheet",
  href: tailwind_default
}, {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/favicons/favicon-dark-32x32.png",
  media: "(prefers-color-scheme: dark)"
}, {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/favicons/favicon-light-16x16.png",
  media: "(prefers-color-scheme: light)"
}, {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/favicons/favicon-dark-16x16.png",
  media: "(prefers-color-scheme: dark)"
}, {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/favicons/favicon-light-32x32.png",
  media: "(prefers-color-scheme: light)"
}];
var meta = () => {
  return [{
    viewport: "width=device-width,initial-scale=1,viewport-fit=cover"
  }, {
    title: "The Coding Temple"
  }];
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 65,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: "h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-full bg-slate-100 dark:bg-zinc-900", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto min-h-full max-w-5xl flex-col bg-white py-6 dark:bg-violet-900 lg:flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 py-2 md:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ji, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 70,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
/*! Bundled license information:

remix-development-tools/dist/index.mjs:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

remix-development-tools/dist/index.mjs:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/root-RTK3JD3G.js.map
