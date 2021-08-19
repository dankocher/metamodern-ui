Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$b = ".index-module_circleBtn__2lbnk {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: border-color 200ms ease-in-out, box-shadow 200ms ease-in-out;\n}\n.index-module_circleBtn__2lbnk svg > * {\n  transition: fill 200ms ease-in-out;\n}";
var styles$b = {"circleBtn":"index-module_circleBtn__2lbnk"};
styleInject(css_248z$b);

var reactIs$2 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2=60103,c$1=60106,d$1=60107,e$1=60108,f$1=60114,g$2=60109,h$1=60110,k$2=60112,l$1=60113,m$1=60120,n$1=60115,p$1=60116,q$2=60121,r$1=60122,u=60117,v$2=60129,w$2=60131;
if("function"===typeof Symbol&&Symbol.for){var x$2=Symbol.for;b$2=x$2("react.element");c$1=x$2("react.portal");d$1=x$2("react.fragment");e$1=x$2("react.strict_mode");f$1=x$2("react.profiler");g$2=x$2("react.provider");h$1=x$2("react.context");k$2=x$2("react.forward_ref");l$1=x$2("react.suspense");m$1=x$2("react.suspense_list");n$1=x$2("react.memo");p$1=x$2("react.lazy");q$2=x$2("react.block");r$1=x$2("react.server.block");u=x$2("react.fundamental");v$2=x$2("react.debug_trace_mode");w$2=x$2("react.legacy_hidden");}
function y$2(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b$2:switch(a=a.type,a){case d$1:case f$1:case e$1:case l$1:case m$1:return a;default:switch(a=a&&a.$$typeof,a){case h$1:case k$2:case p$1:case n$1:case g$2:return a;default:return t}}case c$1:return t}}}var z$2=g$2,A$2=b$2,B$1=k$2,C=d$1,D$1=p$1,E$1=n$1,F$1=c$1,G$1=f$1,H$1=e$1,I$1=l$1;reactIs_production_min$1.ContextConsumer=h$1;reactIs_production_min$1.ContextProvider=z$2;reactIs_production_min$1.Element=A$2;reactIs_production_min$1.ForwardRef=B$1;reactIs_production_min$1.Fragment=C;reactIs_production_min$1.Lazy=D$1;reactIs_production_min$1.Memo=E$1;reactIs_production_min$1.Portal=F$1;reactIs_production_min$1.Profiler=G$1;reactIs_production_min$1.StrictMode=H$1;
reactIs_production_min$1.Suspense=I$1;reactIs_production_min$1.isAsyncMode=function(){return !1};reactIs_production_min$1.isConcurrentMode=function(){return !1};reactIs_production_min$1.isContextConsumer=function(a){return y$2(a)===h$1};reactIs_production_min$1.isContextProvider=function(a){return y$2(a)===g$2};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b$2};reactIs_production_min$1.isForwardRef=function(a){return y$2(a)===k$2};reactIs_production_min$1.isFragment=function(a){return y$2(a)===d$1};reactIs_production_min$1.isLazy=function(a){return y$2(a)===p$1};reactIs_production_min$1.isMemo=function(a){return y$2(a)===n$1};
reactIs_production_min$1.isPortal=function(a){return y$2(a)===c$1};reactIs_production_min$1.isProfiler=function(a){return y$2(a)===f$1};reactIs_production_min$1.isStrictMode=function(a){return y$2(a)===e$1};reactIs_production_min$1.isSuspense=function(a){return y$2(a)===l$1};reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d$1||a===f$1||a===v$2||a===e$1||a===l$1||a===m$1||a===w$2||"object"===typeof a&&null!==a&&(a.$$typeof===p$1||a.$$typeof===n$1||a.$$typeof===g$2||a.$$typeof===h$1||a.$$typeof===k$2||a.$$typeof===u||a.$$typeof===q$2||a[0]===r$1)?!0:!1};
reactIs_production_min$1.typeOf=y$2;

var reactIs_development$1 = {};

/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  (function() {

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development$1.ContextConsumer = ContextConsumer;
reactIs_development$1.ContextProvider = ContextProvider;
reactIs_development$1.Element = Element;
reactIs_development$1.ForwardRef = ForwardRef;
reactIs_development$1.Fragment = Fragment;
reactIs_development$1.Lazy = Lazy;
reactIs_development$1.Memo = Memo;
reactIs_development$1.Portal = Portal;
reactIs_development$1.Profiler = Profiler;
reactIs_development$1.StrictMode = StrictMode;
reactIs_development$1.Suspense = Suspense;
reactIs_development$1.isAsyncMode = isAsyncMode;
reactIs_development$1.isConcurrentMode = isConcurrentMode;
reactIs_development$1.isContextConsumer = isContextConsumer;
reactIs_development$1.isContextProvider = isContextProvider;
reactIs_development$1.isElement = isElement;
reactIs_development$1.isForwardRef = isForwardRef;
reactIs_development$1.isFragment = isFragment;
reactIs_development$1.isLazy = isLazy;
reactIs_development$1.isMemo = isMemo;
reactIs_development$1.isPortal = isPortal;
reactIs_development$1.isProfiler = isProfiler;
reactIs_development$1.isStrictMode = isStrictMode;
reactIs_development$1.isSuspense = isSuspense;
reactIs_development$1.isValidElementType = isValidElementType;
reactIs_development$1.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$2.exports = reactIs_production_min$1;
} else {
  reactIs$2.exports = reactIs_development$1;
}

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c=b$1?Symbol.for("react.element"):60103,d=b$1?Symbol.for("react.portal"):60106,e=b$1?Symbol.for("react.fragment"):60107,f=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l=b$1?Symbol.for("react.async_mode"):60111,m=b$1?Symbol.for("react.concurrent_mode"):60111,n=b$1?Symbol.for("react.forward_ref"):60112,p=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r=b$1?Symbol.for("react.memo"):60115,t=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g$1:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A$1(a){return z$1(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k$1;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g$1;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A$1(a)||z$1(a)===l};reactIs_production_min.isConcurrentMode=A$1;reactIs_production_min.isContextConsumer=function(a){return z$1(a)===k$1};reactIs_production_min.isContextProvider=function(a){return z$1(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z$1(a)===n};reactIs_production_min.isFragment=function(a){return z$1(a)===e};reactIs_production_min.isLazy=function(a){return z$1(a)===t};
reactIs_production_min.isMemo=function(a){return z$1(a)===r};reactIs_production_min.isPortal=function(a){return z$1(a)===d};reactIs_production_min.isProfiler=function(a){return z$1(a)===g$1};reactIs_production_min.isStrictMode=function(a){return z$1(a)===f};reactIs_production_min.isSuspense=function(a){return z$1(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g$1||a===f||a===p||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$1)};reactIs_production_min.typeOf=z$1;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = reactIs_production_min;
} else {
  reactIs$1.exports = reactIs_development;
}

var reactIs = reactIs$1.exports;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function v(){return (v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var y=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs$2.exports.typeOf(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return "function"==typeof e}function b(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var _="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",A="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),O="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0;}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},B=function(e,t){T.set(e,t),x.set(t,e);},z="style["+_+'][data-styled-version="5.3.0"]',L=new RegExp("^"+_+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),G=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r);},F=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B(u,c),G(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(s);}}},Y=function(){return "undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(_))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(_,"active"),r.setAttribute("data-styled-version","5.3.0");var s=Y();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=A,J={isServer:!A,useCSSOMInjection:!I},Z=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=v({},J,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&A&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(z),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(_)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=M(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var c=_+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),X=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return (K(t%52)+n).replace(X,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!N(n))return !1}return !0}var re=te("5.3.0"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&ne(e),this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,Z.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var i=Ne(this.rules,e,t,n).join(""),s=Q(ee(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a);}o.push(s),this.staticRulesId=s;}else {for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=ee(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f;}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var v=n(l,"."+m,void 0,r);t.insertRules(r,m,v);}o.push(m);}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,se=[":","[",".","#"];function ae(e){var t,n,r,o,i=void 0===e?w:e,s=i.options,a=void 0===s?w:s,c=i.plugins,u=void 0===c?S:c,l=new stylis_min(a),d=[],p=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,i){return 0===r&&-1!==se.indexOf(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=React__default['default'].createContext();ce.Consumer;var le=React__default['default'].createContext(),de=(le.Consumer,new Z),he=ae();function pe(){return React.useContext(ce)||de}function fe(){return React.useContext(le)||he}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ye=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return "-"+e.toLowerCase()};function Ee(e){return ye.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=Ne(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(be(e))return "";if(N(e))return "."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return "production"!==process.env.NODE_ENV&&reactIs$2.exports.isElement(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!be(t[s])&&(g(t[s])?i.push.apply(i,e(t[s],s)):E(t[s])?i.push(Ee(s)+":",t[s],";"):i.push(Ee(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(y(S,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(y(e,n))}var Ce=/invalid hook call/i,Ae=new Set,Ie=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{React.useRef(),Ae.has(n)||(console.warn(n),Ae.add(n));}catch(e){Ce.test(e.message)&&Ae.delete(n);}}},Pe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Oe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Re=/(^-|-$)/g;function De(e){return e.replace(Oe,"-").replace(Re,"")}var je=function(e){return Q(te(e)>>>0)};function Te(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},ke=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ve(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t;}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(xe(s))for(var a in s)ke(a)&&Ve(e,s[a],a);}return e}var Be=React__default['default'].createContext();Be.Consumer;var Ge={};function Fe(e,t,n){var o=N(e),s=!Te(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":De(e);Ge[n]=(Ge[n]||0)+1;var r=n+"-"+je("5.3.0"+n+Ge[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,y=void 0===p?function(e){return Te(e)?"styled."+e:"Styled("+b(e)+")"}(e):p,g=t.displayName&&t.componentId?De(t.displayName)+"-"+t.componentId:t.componentId||h,_=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,C=t.shouldForwardProp;o&&e.shouldForwardProp&&(C=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var A,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,s=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!==process.env.NODE_ENV&&React.useDebugValue(h);var m=function(e,t,n){void 0===e&&(e=w);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in E(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t];})),[r,o]}(Pe(t,React.useContext(Be),a)||w,t,o),y=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),i=fe(),s=t?e.generateAndInjectStyles(w,o,i):e.generateAndInjectStyles(n,o,i);return "production"!==process.env.NODE_ENV&&React.useDebugValue(s),"production"!==process.env.NODE_ENV&&!t&&r&&r(s),s}(s,r,y,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),b=n,N=g.$as||t.$as||g.as||t.as||p,_=Te(N),C=g!==t?v({},t,{},g):t,A={};for(var I in C)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?A.as=C[I]:(d?d(I,index,N):!_||index(I))&&(A[I]=C[I]));return t.style&&g.style!==t.style&&(A.style=v({},t.style,{},g.style)),A.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),A.ref=b,React.createElement(N,A)}(A,e,t,P)};return O.displayName=y,(A=React__default['default'].forwardRef(O)).attrs=_,A.componentStyle=I,A.displayName=y,A.shouldForwardProp=C,A.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,A.styledComponentId=g,A.target=o?e.target:e,A.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(Te(e)?e:De(b(e)));return Fe(e,v({},o,{attrs:_,componentId:i}),n)},Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(Ie(y,g),A.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var i=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+i+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(y,g)),A.toString=function(){return "."+A.styledComponentId},s&&hoistNonReactStatics_cjs(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),A}var Ye=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!reactIs$2.exports.isValidElementType(r))return D(1,String(r));var i=function(){return t(r,o,_e.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,v({},o,{},n))},i.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Fe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Ye[e]=Ye(e);}));"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&process.env.NODE_ENV;var styled = Ye;

const colors = {
    transparent: "transparent",
    blue: "#017AFF",
    red50: "#FDF2F2",
    red100: "#F1A6A6",
    red200: "#DF3232",
    green: "#27AE60",
    accent1: "#FBC819",
    neutral0: "#ffffff",
    neutral50: "#fcfcfc",
    neutral100: "#fafafa",
    neutral200: "#f6f6f6",
    neutral300: "#dbdbdb",
    neutral600: "#9e9e9e",
    neutral700: "#616161",
    neutral800: "#424242",
    neutral900: "#212121",
};

var arrowIcon = (React__default['default'].createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("path", { d: "M10.8437 15.9999C10.6729 16.0005 10.5042 15.963 10.3499 15.8903C10.1956 15.8176 10.0597 15.7114 9.95214 15.5796L4.26002 8.66838C4.0919 8.46513 4 8.21018 4 7.94708C4 7.68397 4.0919 7.42903 4.26002 7.22578L9.97493 0.410348C10.1689 0.178378 10.4477 0.0324996 10.75 0.00480658C11.0522 -0.0228865 11.3531 0.0698737 11.5865 0.262681C11.82 0.455487 11.9667 0.732548 11.9946 1.03291C12.0225 1.33327 11.9291 1.63234 11.7351 1.86431L6.62599 7.95276L11.7352 14.137C11.875 14.3038 11.9637 14.5068 11.991 14.7221C12.0183 14.9374 11.983 15.156 11.8892 15.352C11.7954 15.548 11.6471 15.7131 11.4618 15.828C11.2765 15.9428 11.062 16.0025 10.8437 15.9999Z", fill: "#9E9E9E" })));

var Button$3 = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: ", ";\n\n    & svg {\n        & > * {\n            fill: ", ";\n        }\n    }\n\n    &:hover {\n        & svg {\n            & > * {\n                fill: ", ";\n            }\n        }\n\n        border-color: ", ";\n        box-shadow: ", ";\n    }\n"], ["\n    background-color: ", ";\n    border-color: ", ";\n\n    & svg {\n        & > * {\n            fill: ", ";\n        }\n    }\n\n    &:hover {\n        & svg {\n            & > * {\n                fill: ", ";\n            }\n        }\n\n        border-color: ", ";\n        box-shadow: ", ";\n    }\n"])), function (props) { return props.bgColor; }, function (props) { return props.borderColor[0]; }, function (props) { return props.defaultIconColor; }, function (props) { return props.hoverIconColor; }, function (props) { return props.borderColor[1]; }, function (props) { return props.shadowHover; });
var MetCircleBtn = function (_a) {
    var style = _a.style, _b = _a.className, className = _b === void 0 ? "" : _b, onClick = _a.onClick, _c = _a.bgColor, bgColor = _c === void 0 ? colors.neutral0 : _c, _d = _a.defaultIconColor, defaultIconColor = _d === void 0 ? colors.neutral600 : _d, _e = _a.hoverIconColor, hoverIconColor = _e === void 0 ? colors.neutral700 : _e, _f = _a.borderColor, borderColor = _f === void 0 ? [colors.neutral300, colors.neutral300 + "00"] : _f, _g = _a.shadowHover, shadowHover = _g === void 0 ? "0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1),0px 1px 8px rgba(0, 0, 0, 0.15)" : _g, _h = _a.icon, icon = _h === void 0 ? arrowIcon : _h;
    var onClickHandler = function (e) {
        if (onClick == null)
            return;
        onClick(e);
    };
    return (React__namespace.createElement(Button$3, { role: "button", style: style, onClick: onClickHandler, className: styles$b.circleBtn + " " + className, bgColor: bgColor, shadowHover: shadowHover, borderColor: [
            borderColor[0] || colors.neutral300,
            borderColor[0] || colors.neutral300 + "00",
        ], defaultIconColor: defaultIconColor, hoverIconColor: hoverIconColor }, icon));
};
var templateObject_1$b;

var css_248z$a = ".index-module_squareBtn__3kQMY {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 150ms ease;\n}\n.index-module_squareBtn__3kQMY svg > * {\n  transition: fill 150ms ease;\n}";
var styles$a = {"squareBtn":"index-module_squareBtn__3kQMY"};
styleInject(css_248z$a);

var smallCrossIcon = (React__default['default'].createElement("svg", { width: "8", height: "8", viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("rect", { x: "0.799561", y: "-0.000244141", width: "10.1826", height: "1.13139", rx: "0.565697", transform: "rotate(45 0.799561 -0.000244141)", fill: "white" }),
    React__default['default'].createElement("rect", { x: "8", y: "0.800064", width: "10.1826", height: "1.13139", rx: "0.565697", transform: "rotate(135 8 0.800064)", fill: "white" })));

var largeCrossIcon = (React__default['default'].createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("rect", { x: "1.3999", width: "17.8183", height: "1.97982", rx: "0.989908", transform: "rotate(45 1.3999 0)", fill: "#424242" }),
    React__default['default'].createElement("rect", { x: "14", y: "1.40027", width: "17.8183", height: "1.97982", rx: "0.989908", transform: "rotate(135 14 1.40027)", fill: "#424242" })));

var smallSize = "18px";
var largeSize = "30px";
var Button$2 = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n    height: ", ";\n    width: ", ";\n    background-color: ", ";\n\n    & svg {\n        & > * {\n            fill: ", ";\n        }\n    }\n\n    &:hover {\n        background-color: ", ";\n    }\n"], ["\n    height: ", ";\n    width: ", ";\n    background-color: ", ";\n\n    & svg {\n        & > * {\n            fill: ", ";\n        }\n    }\n\n    &:hover {\n        background-color: ", ";\n    }\n"])), function (props) { return (props.size === exports.SizeCircleIconBtn.SMALL ? smallSize : largeSize); }, function (props) { return (props.size === exports.SizeCircleIconBtn.SMALL ? smallSize : largeSize); }, function (props) { return props.bgColor; }, function (props) { return props.defaultIconColor; }, function (props) { return props.hoverColor; });
var MetCircleIconBtn = function (_a) {
    var styleIconBtn = _a.styleIconBtn, _b = _a.classNameIconBtn, classNameIconBtn = _b === void 0 ? "" : _b, onClick = _a.onClick, _c = _a.size, size = _c === void 0 ? exports.SizeCircleIconBtn.SMALL : _c, _d = _a.bgColor, bgColor = _d === void 0 ? size === exports.SizeCircleIconBtn.SMALL ? colors.neutral800 : colors.transparent : _d, _e = _a.defaultIconColor, defaultIconColor = _e === void 0 ? size === exports.SizeCircleIconBtn.SMALL ? colors.neutral0 : colors.neutral800 : _e, _f = _a.hoverColor, hoverColor = _f === void 0 ? size === exports.SizeCircleIconBtn.SMALL ? colors.neutral900 : colors.neutral200 : _f, _g = _a.icon, icon = _g === void 0 ? size === exports.SizeCircleIconBtn.SMALL ? smallCrossIcon : largeCrossIcon : _g;
    var onClickHandler = function (e) {
        if (onClick == null)
            return;
        onClick(e);
    };
    return (React__default['default'].createElement(Button$2, { role: "button", size: size, style: styleIconBtn, onClick: onClickHandler, className: styles$a.squareBtn + " " + classNameIconBtn, bgColor: bgColor, hoverColor: hoverColor, defaultIconColor: defaultIconColor }, icon));
};
var templateObject_1$a;

exports.SizeCircleIconBtn = void 0;
(function (SizeCircleIconBtn) {
    SizeCircleIconBtn[SizeCircleIconBtn["LAGER"] = 0] = "LAGER";
    SizeCircleIconBtn[SizeCircleIconBtn["SMALL"] = 1] = "SMALL";
})(exports.SizeCircleIconBtn || (exports.SizeCircleIconBtn = {}));

var css_248z$9 = ".index-module_container__5yhbA {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.index-module_container__info__2WOVT {\n  position: absolute;\n  top: -24px;\n  right: calc(-1 * 524px - 14.5px);\n  width: 524px;\n  padding: 24px 32px;\n  color: #616161;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 8px rgba(0, 0, 0, 0.15);\n}\n.index-module_container__info__2WOVT::before {\n  content: \"\";\n  position: absolute;\n  top: 23px;\n  left: -6px;\n  width: 16px;\n  height: 16px;\n  transform: rotateY(0deg) rotate(45deg);\n  border-radius: 2px;\n  background-color: #ffffff;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 8px rgba(0, 0, 0, 0.15);\n}\n.index-module_container__info__2WOVT::after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 0;\n  width: 24px;\n  height: 32px;\n  background-color: #ffffff;\n}";
var styles$9 = {"container":"index-module_container__5yhbA","container__info":"index-module_container__info__2WOVT"};
styleInject(css_248z$9);

var infoIcon = (React__default['default'].createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4.1001 4.1V9.5H5.9001V4.1H4.1001ZM4.1001 0.5V2.3H5.9001V0.5H4.1001Z", fill: "white" })));

var Container$5 = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n    background-color: ", ";\n"], ["\n    background-color: ", ";\n"])), function (props) { return props.bgColor; });
var MetPromptInfo = function (_a) {
    var style = _a.style, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.fontClass, fontClass = _c === void 0 ? "" : _c, isOpen = _a.isOpen, onClick = _a.onClick, value = _a.value, _d = _a.bgColor, bgColor = _d === void 0 ? colors.neutral800 : _d, defaultIconColor = _a.defaultIconColor, _e = _a.hoverColor, hoverColor = _e === void 0 ? colors.neutral900 : _e, _f = _a.icon, icon = _f === void 0 ? infoIcon : _f, styleIconBtn = _a.styleIconBtn, classNameIconBtn = _a.classNameIconBtn;
    var wrapperRef = React.useRef(null);
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            onClick(event);
        }
    }
    React.useEffect(function () {
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    return (React__default['default'].createElement(Container$5, { ref: wrapperRef, style: style, className: styles$9.container + " " + className + " " + fontClass },
        React__default['default'].createElement(MetCircleIconBtn, { styleIconBtn: styleIconBtn, classNameIconBtn: classNameIconBtn, onClick: onClick, size: exports.SizeCircleIconBtn.SMALL, bgColor: isOpen ? hoverColor : bgColor, defaultIconColor: defaultIconColor, hoverColor: hoverColor, icon: icon }),
        isOpen ? (React__default['default'].createElement("div", { className: styles$9.container__info }, value)) : null));
};
var templateObject_1$9;

var css_248z$8 = ".index-module_rectangleIconBtn__1Hq6O {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  width: 60px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 150ms ease;\n}\n\n.index-module_disabled__UpxTN {\n  border-color: #dbdbdb;\n  background-color: transparent;\n}\n.index-module_disabled__UpxTN svg > * {\n  fill: #dbdbdb;\n}\n\n.index-module_disabled__UpxTN {\n  border-color: #dbdbdb;\n  background-color: transparent;\n}\n.index-module_disabled__UpxTN svg > * {\n  fill: #dbdbdb;\n}";
var styles$8 = {"rectangleIconBtn":"index-module_rectangleIconBtn__1Hq6O","disabled":"index-module_disabled__UpxTN"};
styleInject(css_248z$8);

var plusIcon = (React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("rect", { x: "3", y: "11", width: "18", height: "2", rx: "1", fill: "white" }),
    React__default['default'].createElement("rect", { x: "13", y: "3", width: "18", height: "2", rx: "1", transform: "rotate(90 13 3)", fill: "white" })));

var classNames$4 = require("classnames");
var Button$1 = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n\n  &:not(.", ") {\n    \n  border-color: ", ";\n\n  background-color: ", ";\n\n  svg {\n    > * {\n      fill: ", ";\n    }\n  }\n\n\n  :hover:not(.", ") {\n    background-color: ", ";\n  }\n}\n"], ["\n\n  &:not(.", ") {\n    \n  border-color: ", ";\n\n  background-color: ", ";\n\n  svg {\n    > * {\n      fill: ", ";\n    }\n  }\n\n\n  :hover:not(.", ") {\n    background-color: ", ";\n  }\n}\n"])), styles$8.disabled, function (props) { return props.borderColor; }, function (props) { return props.bgColor; }, function (props) { return props.defaultIconColor; }, styles$8.disabled, function (props) { return props.hoverColor; });
var MetRectangleIconBtn = function (_a) {
    var _b;
    var style = _a.style, _c = _a.className, className = _c === void 0 ? "" : _c, onClick = _a.onClick, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.icon, icon = _e === void 0 ? plusIcon : _e, _f = _a.type, type = _f === void 0 ? TypesRectangleIconBtn.PRIMARY : _f, _g = _a.borderColor, borderColor = _g === void 0 ? type === TypesRectangleIconBtn.SECONDARY
        ? colors.neutral300
        : colors.transparent : _g, _h = _a.bgColor, bgColor = _h === void 0 ? type === TypesRectangleIconBtn.PRIMARY ? colors.neutral800 : colors.transparent : _h, _j = _a.defaultIconColor, defaultIconColor = _j === void 0 ? type === TypesRectangleIconBtn.PRIMARY
        ? colors.neutral0
        : colors.neutral800 : _j, _k = _a.hoverColor, hoverColor = _k === void 0 ? type === TypesRectangleIconBtn.PRIMARY ? colors.neutral900 : colors.neutral100 : _k;
    var onClickHandler = function (event) {
        if (onClick == null || isDisabled)
            return;
        onClick(event);
    };
    var stateStyle = classNames$4(styles$8.rectangleIconBtn + " " + className, (_b = {},
        _b[styles$8.disabled] = isDisabled,
        _b));
    return (React__default['default'].createElement(Button$1, { role: "button", style: style, onClick: onClickHandler, type: type, className: stateStyle, borderColor: borderColor, bgColor: bgColor, hoverColor: hoverColor, defaultIconColor: defaultIconColor }, icon));
};
var templateObject_1$8;

var TypesRectangleIconBtn;
(function (TypesRectangleIconBtn) {
    TypesRectangleIconBtn[TypesRectangleIconBtn["PRIMARY"] = 0] = "PRIMARY";
    TypesRectangleIconBtn[TypesRectangleIconBtn["SECONDARY"] = 1] = "SECONDARY";
    TypesRectangleIconBtn[TypesRectangleIconBtn["GHOST"] = 2] = "GHOST";
})(TypesRectangleIconBtn || (TypesRectangleIconBtn = {}));

var css_248z$7 = ".index-module_container__3H2xe {\n  width: 100%;\n  position: relative;\n}\n.index-module_container__title__1Y1VS {\n  width: 100%;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.index-module_container__field__23ssE {\n  width: 100%;\n  min-height: 46px;\n  position: relative;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: border-radius 150ms ease;\n}\n.index-module_container__field__23ssE > div {\n  min-height: inherit;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 14px;\n  padding-right: 14px;\n}\n.index-module_container__field__23ssE > div span {\n  margin-right: 16px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.index-module_container__field__23ssE > div svg {\n  min-width: 16px;\n  transition: transform 150ms ease;\n}\n.index-module_container__field__23ssE > div svg > * {\n  fill: #212121;\n}\n.index-module_container__field__23ssE ul {\n  width: calc(100% + 1px * 2);\n  position: absolute;\n  left: -1px;\n  top: 46px;\n  margin: 0;\n  padding: 0;\n  border-width: 1px 1px 1px;\n  border-style: solid;\n  border-radius: 0 0 4px 4px;\n  list-style-type: none;\n  background-color: white;\n  opacity: 0;\n  z-index: 99;\n  transition: opacity 150ms ease;\n}\n.index-module_container__field__23ssE ul li {\n  display: flex;\n  padding-left: 14px;\n  padding-right: 14px;\n  transition: background-color 150ms ease;\n}\n.index-module_container__field__23ssE ul li span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.index-module_container__field__23ssE ul > :last-child {\n  border-radius: 0 0 4px 4px;\n}\n.index-module_container__field__23ssE .index-module_selected__1-D-N {\n  margin: 0;\n}\n.index-module_container__field__23ssE .index-module_selected__1-D-N span {\n  color: #424242;\n}\n\n.index-module_disabled__1V6zi > div {\n  border-color: #dbdbdb;\n}\n.index-module_disabled__1V6zi span {\n  color: #dbdbdb;\n}\n.index-module_disabled__1V6zi > div svg > * {\n  fill: #dbdbdb;\n}\n\n.index-module_open__17E4k > div {\n  border-radius: 4px 4px 0 0;\n}\n.index-module_open__17E4k > div svg {\n  transform: rotate(180deg);\n}\n.index-module_open__17E4k ul {\n  opacity: 100%;\n}";
var styles$7 = {"container":"index-module_container__3H2xe","container__title":"index-module_container__title__1Y1VS","container__field":"index-module_container__field__23ssE","selected":"index-module_selected__1-D-N","disabled":"index-module_disabled__1V6zi","open":"index-module_open__17E4k"};
styleInject(css_248z$7);

var arrowDownIcon = (React__default['default'].createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("path", { d: "M12.9596 6.76519C12.96 6.87085 12.9366 6.97525 12.8914 7.07072C12.8461 7.16618 12.78 7.25029 12.698 7.31686L8.39588 10.8391C8.26936 10.9431 8.11066 11 7.94688 11C7.78311 11 7.62441 10.9431 7.49789 10.8391L3.25543 7.30275C3.11104 7.1827 3.02023 7.01019 3.00299 6.82317C2.98575 6.63615 3.04349 6.44994 3.16351 6.3055C3.28353 6.16107 3.45599 6.07024 3.64296 6.05299C3.82993 6.03575 4.01609 6.09351 4.16049 6.21356L7.95042 9.37505L11.8 6.21352C11.9038 6.12703 12.0302 6.07209 12.1642 6.0552C12.2982 6.03831 12.4343 6.06018 12.5563 6.11822C12.6783 6.17625 12.7811 6.26803 12.8526 6.38268C12.924 6.49734 12.9612 6.63008 12.9596 6.76519Z", fill: "#212121" })));

var classNames$3 = require("classnames");
var Container$4 = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  > div {\n    border-color: ", ";\n\n    > div {\n      span:not(.", " span) {\n        color: ", ";\n      }\n    }\n\n    .", " {\n      background-color: ", ";\n    }\n\n    ul {\n      border-color: ", ";\n\n      li:hover:not(.", ") {\n        background-color: ", ";\n      }\n    }\n  }\n"], ["\n  > div {\n    border-color: ", ";\n\n    > div {\n      span:not(.", " span) {\n        color: ", ";\n      }\n    }\n\n    .", " {\n      background-color: ", ";\n    }\n\n    ul {\n      border-color: ", ";\n\n      li:hover:not(.", ") {\n        background-color: ", ";\n      }\n    }\n  }\n"])), function (props) { return props.borderColor; }, styles$7.disabled, function (_a) {
    var placeholderColor = _a.placeholderColor, isSelected = _a.isSelected;
    return isSelected ? colors.neutral800 : placeholderColor;
}, styles$7.selected, function (props) { return props.selectedColor; }, function (props) { return props.borderColor; }, styles$7.selected, function (props) { return props.hoverColor; });
var MetSelect = function (_a) {
    var _b;
    var style = _a.style, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.selectorFontClass, selectorFontClass = _d === void 0 ? "" : _d, _e = _a.labelFontClass, labelFontClass = _e === void 0 ? "" : _e, _f = _a.icon, icon = _f === void 0 ? arrowDownIcon : _f, _g = _a.isHaveLabel, isHaveLabel = _g === void 0 ? true : _g, _h = _a.label, label = _h === void 0 ? "" : _h, placeholder = _a.placeholder, _j = _a.isDisabled, isDisabled = _j === void 0 ? false : _j, _k = _a.multiSelect, multiSelect = _k === void 0 ? false : _k, items = _a.items, _l = _a.defaultSelection, defaultSelection = _l === void 0 ? [] : _l, _m = _a.onChange, onChange = _m === void 0 ? function () { } : _m, _o = _a.borderColor, borderColor = _o === void 0 ? colors.neutral300 : _o, _p = _a.selectedColor, selectedColor = _p === void 0 ? colors.neutral200 : _p, _q = _a.hoverColor, hoverColor = _q === void 0 ? colors.neutral100 : _q, _r = _a.placeholderColor, placeholderColor = _r === void 0 ? colors.neutral600 : _r;
    var wrapperRef = React.useRef(null);
    var _s = React.useState(false), isOpen = _s[0], setIsOpen = _s[1];
    var _t = React.useState([]), selection = _t[0], setSelection = _t[1];
    React.useEffect(function () {
        setSelection(defaultSelection);
    }, []);
    React.useEffect(function () {
        if (isDisabled) {
            setIsOpen(false);
        }
    }, [isDisabled]);
    React.useEffect(function () {
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    var onToggle = function () {
        if (isDisabled)
            return;
        setIsOpen(!isOpen);
    };
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }
    function selctItem(item) {
        if (selection.some(function (current) { return current.id === item.id; })) {
            var selectionAfterRemoval = selection.filter(function (current) { return current.id !== item.id; });
            setSelection(selectionAfterRemoval);
            onChange(selectionAfterRemoval);
        }
        else {
            if (multiSelect) {
                setSelection(__spreadArray(__spreadArray([], selection), [item]));
                onChange(__spreadArray(__spreadArray([], selection), [item]));
            }
            else {
                setIsOpen(!isOpen);
                setSelection([item]);
                onChange([item]);
            }
        }
    }
    function getSelectedClass(item) {
        if (selection.some(function (current) { return current.id === item.id; })) {
            return styles$7.selected;
        }
        return;
    }
    function getInSelection() {
        if (selection.length === 0)
            return false;
        return selection.map(function (item) { return item.value; }).join(", ");
    }
    var stateStyle = classNames$3(styles$7.container + " " + className, (_b = {},
        _b[styles$7.disabled] = isDisabled,
        _b[styles$7.open] = isOpen,
        _b));
    return (React__default['default'].createElement(Container$4, { ref: wrapperRef, style: style, className: stateStyle, borderColor: borderColor, selectedColor: selectedColor, hoverColor: hoverColor, placeholderColor: placeholderColor, isSelected: selection.length !== 0, isOpen: isOpen },
        isHaveLabel ? (React__default['default'].createElement("label", { className: styles$7.container__title + " " + labelFontClass }, label)) : null,
        React__default['default'].createElement("div", { className: "" + styles$7.container__field },
            React__default['default'].createElement("div", { onClick: function () { return onToggle(); } },
                React__default['default'].createElement("span", { className: selectorFontClass }, getInSelection() || placeholder),
                icon),
            React__default['default'].createElement("ul", null, items.map(function (item) { return (React__default['default'].createElement("li", { key: item.id, onClick: function () { return selctItem(item); }, className: getSelectedClass(item) },
                React__default['default'].createElement("span", { className: selectorFontClass }, item.value))); })))));
};
var templateObject_1$7;

var css_248z$6 = ".index-module_squareBtn__18xyO {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  width: 32px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 150ms ease;\n}\n.index-module_squareBtn__18xyO svg > * {\n  transition: fill 150ms ease;\n}";
var styles$6 = {"squareBtn":"index-module_squareBtn__18xyO"};
styleInject(css_248z$6);

var trashIcon = (React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("path", { d: "M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z", fill: "#9E9E9E" })));

var Button = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n    background-color: ", ";\n\n    & svg {\n        & > * {\n            fill: ", ";\n        }\n    }\n\n    &:hover {\n        & svg {\n            & > * {\n                fill: ", ";\n            }\n        }\n\n        background-color: ", ";\n    }\n"], ["\n    background-color: ", ";\n\n    & svg {\n        & > * {\n            fill: ", ";\n        }\n    }\n\n    &:hover {\n        & svg {\n            & > * {\n                fill: ", ";\n            }\n        }\n\n        background-color: ", ";\n    }\n"])), function (props) { return props.bgColor; }, function (props) { return props.defaultIconColor; }, function (props) { return props.hoverIconColor; }, function (props) { return props.hoverColor; });
var MetSquareIconBtn = function (_a) {
    var style = _a.style, _b = _a.className, className = _b === void 0 ? "" : _b, onClick = _a.onClick, _c = _a.bgColor, bgColor = _c === void 0 ? colors.transparent : _c, _d = _a.defaultIconColor, defaultIconColor = _d === void 0 ? colors.neutral600 : _d, _e = _a.hoverIconColor, hoverIconColor = _e === void 0 ? colors.neutral700 : _e, _f = _a.hoverColor, hoverColor = _f === void 0 ? colors.neutral200 : _f, _g = _a.icon, icon = _g === void 0 ? trashIcon : _g;
    var onClickHandler = function (e) {
        if (onClick == null)
            return;
        onClick(e);
    };
    return (React__default['default'].createElement(Button, { role: "button", style: style, onMouseDown: onClickHandler, className: styles$6.squareBtn + " " + className, bgColor: bgColor, hoverColor: hoverColor, defaultIconColor: defaultIconColor, hoverIconColor: hoverIconColor }, icon));
};
var templateObject_1$6;

var css_248z$5 = ".index-module_container__1_tim {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  width: 32px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 150ms ease;\n}\n.index-module_container__1_tim input[type=checkbox] {\n  display: none;\n}\n.index-module_container__1_tim svg > * {\n  transition: fill 150ms ease;\n}";
var styles$5 = {"container":"index-module_container__1_tim"};
styleInject(css_248z$5);

var uncheckedStarIcon = (React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("path", { d: "M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z", fill: "#9E9E9E" })));

var checkedStarIcon = (React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("path", { d: "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z", fill: "#FBC819" })));

var Label = styled.label(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n    background-color: ", ";\n  \n    &:hover {\n        background-color: ", ";\n    }\n\n    input[type=\"checkbox\"] {\n        &:hover:not(:checked) {\n            & + svg {\n                & > * {\n                    fill: ", ";\n                }\n            }\n        }\n    }\n"], ["\n    background-color: ", ";\n  \n    &:hover {\n        background-color: ", ";\n    }\n\n    input[type=\"checkbox\"] {\n        &:hover:not(:checked) {\n            & + svg {\n                & > * {\n                    fill: ", ";\n                }\n            }\n        }\n    }\n"])), function (props) { return props.bgColor; }, function (props) { return props.hoverColor; }, function (props) { return props.hoverIconColor; });
var MetSquareIconCheckbox = function (_a) {
    var style = _a.style, _b = _a.className, className = _b === void 0 ? "" : _b, isChecked = _a.isChecked, onChange = _a.onChange, _c = _a.bgColor, bgColor = _c === void 0 ? colors.transparent : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.hoverColor, hoverColor = _e === void 0 ? colors.neutral200 : _e, _f = _a.hoverIconColor, hoverIconColor = _f === void 0 ? colors.neutral700 : _f, _g = _a.checkedIcon, checkedIcon = _g === void 0 ? checkedStarIcon : _g, _h = _a.uncheckedIcon, uncheckedIcon = _h === void 0 ? uncheckedStarIcon : _h;
    var onChangeHandler = function (e) {
        if (onChange == null)
            return;
        onChange(e);
    };
    return (React__default['default'].createElement(Label, { style: style, className: styles$5.container + " " + className, hoverColor: hoverColor, bgColor: bgColor, hoverIconColor: hoverIconColor },
        React__default['default'].createElement("input", { type: "checkbox", checked: isChecked, onChange: onChangeHandler, disabled: isDisabled }),
        isChecked ? checkedIcon : uncheckedIcon));
};
var templateObject_1$5;

var css_248z$4 = ".index-module_container__GAu6- {\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-height: 40px;\n  max-width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n  padding: 8px 11px;\n  cursor: pointer;\n}\n.index-module_container__GAu6- span {\n  max-width: 100%;\n  white-space: nowrap !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.index-module_container__GAu6- i {\n  display: flex;\n  margin-right: 4px;\n}\n.index-module_container__GAu6- i svg {\n  align-self: center;\n}";
var styles$4 = {"container":"index-module_container__GAu6-"};
styleInject(css_248z$4);

var smCheckedStarIcon$1 = (React__default['default'].createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("path", { d: "M7.99992 11.5133L12.1199 14L11.0266 9.31333L14.6666 6.16L9.87325 5.75333L7.99992 1.33333L6.12659 5.75333L1.33325 6.16L4.97325 9.31333L3.87992 14L7.99992 11.5133Z", fill: "#FBC819" })));

var Container$3 = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n    border-color: ", ";\n\n    color: ", ";\n\n    &:hover {\n        color: ", ";\n\n        & svg {\n            & > * {\n                fill: ", ";\n            }\n        }\n    }\n\n    & svg {\n        & > * {\n            fill: ", ";\n        }\n    }\n"], ["\n    border-color: ", ";\n\n    color: ", ";\n\n    &:hover {\n        color: ", ";\n\n        & svg {\n            & > * {\n                fill: ", ";\n            }\n        }\n    }\n\n    & svg {\n        & > * {\n            fill: ", ";\n        }\n    }\n"])), function (_a) {
    var defaultColor = _a.defaultColor, isChoosed = _a.isChoosed, focusColor = _a.focusColor;
    return isChoosed ? focusColor : defaultColor;
}, function (_a) {
    var defaultColor = _a.defaultColor, focusColor = _a.focusColor, isChoosed = _a.isChoosed;
    return isChoosed ? focusColor : defaultColor;
}, function (_a) {
    var hoverColor = _a.hoverColor, focusColor = _a.focusColor, isChoosed = _a.isChoosed;
    return isChoosed ? focusColor : hoverColor;
}, function (_a) {
    var focusIconColor = _a.focusIconColor;
    return focusIconColor;
}, function (_a) {
    var defaultColor = _a.defaultColor, focusIconColor = _a.focusIconColor, isChoosed = _a.isChoosed;
    return isChoosed ? focusIconColor : defaultColor;
});
var MetTagButton = function (_a) {
    var style = _a.style, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.fontClass, fontClass = _c === void 0 ? "" : _c, _d = _a.defaultColor, defaultColor = _d === void 0 ? colors.neutral600 : _d, _e = _a.hoverColor, hoverColor = _e === void 0 ? colors.neutral700 : _e, _f = _a.focusColor, focusColor = _f === void 0 ? colors.blue : _f, _g = _a.focusIconColor, focusIconColor = _g === void 0 ? colors.accent1 : _g, _h = _a.isHasCheckbox, isHasCheckbox = _h === void 0 ? true : _h, _j = _a.checkedIcon, checkedIcon = _j === void 0 ? smCheckedStarIcon$1 : _j, onToggle = _a.onToggle, isChoosed = _a.isChoosed, value = _a.value;
    var onToggleHandler = function () {
        if (onToggle == null)
            return;
        onToggle();
    };
    return (React__default['default'].createElement(Container$3, { style: style, className: styles$4.container + " " + className, defaultColor: defaultColor, hoverColor: hoverColor, focusColor: focusColor, focusIconColor: focusIconColor, isChoosed: isChoosed, onClick: onToggleHandler },
        isHasCheckbox ? React__default['default'].createElement("i", null, checkedIcon) : null,
        React__default['default'].createElement("span", { className: fontClass }, value)));
};
var templateObject_1$4;

var css_248z$3 = ".index-module_container__3D_0m {\n  position: relative;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-height: 40px;\n  max-width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n  cursor: text;\n}\n.index-module_container__3D_0m:hover .index-module_container__close__2dWXH {\n  visibility: visible;\n}\n.index-module_container__close__2dWXH {\n  position: absolute;\n  right: -4px;\n  top: -6px;\n  height: 18px;\n  width: 18px;\n  visibility: hidden;\n}\n.index-module_container__checkbox__2ycj9 {\n  cursor: pointer;\n  padding: 9px 0 9px 9px;\n  margin-right: 2px;\n  cursor: pointer;\n}\n.index-module_container__checkbox__2ycj9:hover .index-module_container__checkbox__hover__289bH {\n  background-color: #f6f6f6;\n}\n.index-module_container__checkbox__hover__289bH {\n  display: grid;\n  place-items: center;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n}\n.index-module_container__content__1TTh9 {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(2px, 100%);\n  max-width: 100%;\n  padding: 8px 11px 8px 0;\n}\n.index-module_container__content__1TTh9 span {\n  grid-area: 1/1/2/2;\n  visibility: hidden;\n  max-width: 100%;\n  min-width: 2px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  overflow: hidden;\n  white-space: nowrap !important;\n}\n.index-module_container__content__1TTh9 input {\n  position: absolute;\n  grid-area: 1/1/2/2;\n  width: 100%;\n  padding: 0;\n  background-color: transparent;\n  border-style: none;\n  outline: none;\n}\n\n.index-module_unfocused__withoutCB__334KY .index-module_container__content__1TTh9 {\n  padding: 8px 11px 8px 11px;\n}\n\n.index-module_focused__withCB__3U52X {\n  border-width: 2px;\n}\n.index-module_focused__withCB__3U52X .index-module_container__close__2dWXH {\n  right: -5px;\n  top: -7px;\n}\n.index-module_focused__withCB__3U52X .index-module_container__checkbox__2ycj9 {\n  padding: 8px 0 8px calc(9px - 1px);\n}\n.index-module_focused__withCB__3U52X .index-module_container__content__1TTh9 {\n  padding: 7px calc(11px - 1px) 7px 0;\n  max-width: calc(100% - calc(29px - 1px));\n}\n\n.index-module_focused__withoutCB__3wBpf {\n  border-width: 2px;\n}\n.index-module_focused__withoutCB__3wBpf .index-module_container__close__2dWXH {\n  right: -5px;\n  top: -7px;\n}\n.index-module_focused__withoutCB__3wBpf .index-module_container__content__1TTh9 {\n  padding: 7px calc(11px - 1px) 7px calc(11px - 1px);\n  max-width: 100%;\n}";
var styles$3 = {"container":"index-module_container__3D_0m","container__close":"index-module_container__close__2dWXH","container__checkbox":"index-module_container__checkbox__2ycj9","container__checkbox__hover":"index-module_container__checkbox__hover__289bH","container__content":"index-module_container__content__1TTh9","unfocused__withoutCB":"index-module_unfocused__withoutCB__334KY","focused__withCB":"index-module_focused__withCB__3U52X","focused__withoutCB":"index-module_focused__withoutCB__3wBpf"};
styleInject(css_248z$3);

var smCheckedStarIcon = (React__default['default'].createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("path", { d: "M14.6666 6.16L9.87325 5.74667L7.99992 1.33333L6.12659 5.75333L1.33325 6.16L4.97325 9.31333L3.87992 14L7.99992 11.5133L12.1199 14L11.0333 9.31333L14.6666 6.16ZM7.99992 10.2667L5.49325 11.78L6.15992 8.92667L3.94659 7.00667L6.86659 6.75333L7.99992 4.06667L9.13992 6.76L12.0599 7.01333L9.84659 8.93333L10.5133 11.7867L7.99992 10.2667Z", fill: "#DBDBDB" })));

var classNames$2 = require("classnames");
var Container$2 = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n    border-color: ", ";\n\n    input {\n        color: ", ";\n    }\n\n    &:hover {\n        input {\n            color: ", ";\n        }\n    }\n\n    .", ":hover {\n        .", " {\n            background-color: ", ";\n        }\n    }\n"], ["\n    border-color: ", ";\n\n    input {\n        color: ", ";\n    }\n\n    &:hover {\n        input {\n            color: ", ";\n        }\n    }\n\n    .", ":hover {\n        .", " {\n            background-color: ", ";\n        }\n    }\n"])), function (_a) {
    var isFocused = _a.isFocused, defaultColor = _a.defaultColor, focusColor = _a.focusColor;
    return isFocused ? focusColor : defaultColor;
}, function (_a) {
    var isFocused = _a.isFocused, defaultColor = _a.defaultColor, hoverFontColor = _a.hoverFontColor;
    return isFocused ? hoverFontColor : defaultColor;
}, function (_a) {
    var hoverFontColor = _a.hoverFontColor;
    return hoverFontColor;
}, styles$3.container__checkbox, styles$3.container__checkbox__hover, function (_a) {
    var hoverCheckboxColor = _a.hoverCheckboxColor;
    return hoverCheckboxColor;
});
var MetTagInput = function (_a) {
    var _b;
    var style = _a.style, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.fontClass, fontClass = _d === void 0 ? "" : _d, _e = _a.hoverFontColor, hoverFontColor = _e === void 0 ? colors.neutral700 : _e, _f = _a.hoverCheckboxColor, hoverCheckboxColor = _f === void 0 ? colors.neutral200 : _f, _g = _a.defaultColor, defaultColor = _g === void 0 ? colors.neutral600 : _g, _h = _a.focusColor, focusColor = _h === void 0 ? colors.blue : _h, _j = _a.checkedIcon, checkedIcon = _j === void 0 ? smCheckedStarIcon$1 : _j, _k = _a.uncheckedIcon, uncheckedIcon = _k === void 0 ? smCheckedStarIcon : _k, onChange = _a.onChange, onBlur = _a.onBlur, _l = _a.isHasCheckbox, isHasCheckbox = _l === void 0 ? true : _l, onToggle = _a.onToggle, isChecked = _a.isChecked, value = _a.value, innerRef = _a.innerRef, onClick = _a.onClick, icon = _a.icon, bgColor = _a.bgColor, defaultIconColor = _a.defaultIconColor, hoverColor = _a.hoverColor, styleIconBtn = _a.styleIconBtn, classNameIconBtn = _a.classNameIconBtn;
    var _m = React.useState(false), isFocused = _m[0], setIsFocused = _m[1];
    var toggle = function () {
        if (onToggle == null)
            return;
        onToggle();
    };
    var onBlurHandler = function (event) {
        setIsFocused(false);
        if (onBlur == null)
            return;
        onBlur(event);
    };
    var openInput = function (e) {
        if (e.target.lastElementChild == null)
            return;
        e.target.lastElementChild.select();
    };
    var focusHandel = function (e) {
        setIsFocused(true);
        e.target.select();
        console.log('Test commit');
    };
    var stateStyle = classNames$2(styles$3.container, (_b = {},
        _b[styles$3.focused__withCB] = isFocused && isHasCheckbox,
        _b[styles$3.focused__withoutCB] = isFocused && !isHasCheckbox,
        _b[styles$3.unfocused__withoutCB] = !isFocused && !isHasCheckbox,
        _b));
    return (React__default['default'].createElement(Container$2, { style: style, className: stateStyle + " " + className, hoverFontColor: hoverFontColor, defaultColor: defaultColor, hoverCheckboxColor: hoverCheckboxColor, focusColor: focusColor, isFocused: isFocused },
        isHasCheckbox ? (React__default['default'].createElement("div", { className: styles$3.container__checkbox, onClick: toggle },
            React__default['default'].createElement("div", { className: styles$3.container__checkbox__hover }, isChecked ? checkedIcon : uncheckedIcon))) : null,
        React__default['default'].createElement("div", { className: styles$3.container__content, onClick: openInput },
            React__default['default'].createElement("span", { className: fontClass }, value),
            React__default['default'].createElement("input", { ref: innerRef, onFocus: focusHandel, className: fontClass, value: value, onChange: onChange, onBlur: onBlurHandler })),
        React__default['default'].createElement("div", { className: styles$3.container__close },
            React__default['default'].createElement(MetCircleIconBtn, { styleIconBtn: styleIconBtn, classNameIconBtn: classNameIconBtn, onClick: onClick, size: exports.SizeCircleIconBtn.SMALL, icon: icon, bgColor: bgColor, defaultIconColor: defaultIconColor, hoverColor: hoverColor }))));
};
var templateObject_1$3;

exports.TextFieldState = void 0;
(function (TextFieldState) {
    TextFieldState[TextFieldState["ERROR"] = 0] = "ERROR";
    TextFieldState[TextFieldState["SUCCESS"] = 1] = "SUCCESS";
    TextFieldState[TextFieldState["DEFAULT"] = 2] = "DEFAULT";
})(exports.TextFieldState || (exports.TextFieldState = {}));

var css_248z$2 = ".index-module_container__1jb_t {\n  position: relative;\n  width: 100%;\n}\n.index-module_container__title__HWlYc {\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 4px;\n  color: #424242;\n}\n.index-module_container_message__1pZ2t {\n  width: 100%;\n  position: absolute;\n  bottom: -4px;\n  transform: translateY(100%);\n  display: flex;\n}\n.index-module_container_message__1pZ2t svg {\n  margin-right: 4px;\n}\n.index-module_container_message__1pZ2t span {\n  width: 100%;\n}\n\n.index-module_inputContainer__1Sgvl {\n  position: relative;\n}\n.index-module_inputContainer__outline__3oaOU {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 4px;\n  z-index: 10;\n  background-color: transparent;\n}\n.index-module_inputContainer__1Sgvl input {\n  position: relative;\n  outline: none !important;\n  border: 0;\n  padding: 14px;\n  width: 100%;\n  color: #424242;\n  z-index: 20;\n  background-color: transparent;\n}\n.index-module_inputContainer__1Sgvl input:focus + div {\n  border-width: 2px;\n}\n.index-module_inputContainer__1Sgvl input:disabled {\n  color: #dbdbdb;\n}\n.index-module_inputContainer__1Sgvl input:disabled + div {\n  border-color: #f6f6f6;\n  background-color: #ffffff;\n}\n.index-module_inputContainer__1Sgvl .index-module_error__3bFhi + div,\n.index-module_inputContainer__1Sgvl .index-module_success__macF9 + div {\n  border-width: 2px;\n}\n.index-module_inputContainer__1Sgvl .index-module_errorMessage__3xTR1,\n.index-module_inputContainer__1Sgvl .index-module_successMessage__5KCgq {\n  padding: 0;\n}";
var styles$2 = {"container":"index-module_container__1jb_t","container__title":"index-module_container__title__HWlYc","container_message":"index-module_container_message__1pZ2t","inputContainer":"index-module_inputContainer__1Sgvl","inputContainer__outline":"index-module_inputContainer__outline__3oaOU","error":"index-module_error__3bFhi","success":"index-module_success__macF9","errorMessage":"index-module_errorMessage__3xTR1","successMessage":"index-module_successMessage__5KCgq"};
styleInject(css_248z$2);

var errorIcon = (React__default['default'].createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.43213 14.5679C4.92078 16.0567 6.89612 16.875 9 16.875C11.1039 16.875 13.0825 16.0567 14.5679 14.5679C16.0565 13.079 16.875 11.1041 16.875 9C16.875 6.89591 16.0565 4.91789 14.5679 3.43213C13.0825 1.94328 11.1039 1.125 9 1.125C6.89612 1.125 4.91748 1.94328 3.43213 3.43213C1.94348 4.91789 1.125 6.89591 1.125 9C1.125 11.1041 1.94348 13.0821 3.43213 14.5679ZM8.01562 5.0625C8.01562 4.51799 8.45508 4.07812 9 4.07812C9.54492 4.07812 9.98438 4.51799 9.98438 5.0625V9.98438C9.98438 10.5289 9.54492 10.9688 9 10.9688C8.45508 10.9688 8.01562 10.5289 8.01562 9.98438V5.0625ZM9.98438 12.9375C9.98438 12.393 9.54492 11.9531 9 11.9531C8.45508 11.9531 8.01562 12.393 8.01562 12.9375C8.01562 13.482 8.45508 13.9219 9 13.9219C9.54492 13.9219 9.98438 13.482 9.98438 12.9375Z", fill: "#FF403C" })));

var successIcon = (React__default['default'].createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0174 5.42272C14.3425 7.34834 10.8811 11.2687 9.74751 12.5899C9.56602 12.7991 9.29839 12.9344 9 12.9344C8.7293 12.9344 8.4832 12.8237 8.30479 12.6453C6.91128 11.2518 6.74517 11.0856 5.35166 9.69214C5.17324 9.51372 5.0625 9.26763 5.0625 8.99692C5.0625 8.45244 5.50239 8.01255 6.04688 8.01255C6.31758 8.01255 6.56367 8.12329 6.74209 8.30171C7.83721 9.39683 8.17559 9.73521 8.94463 10.5042C10.39 8.81848 13.586 5.22391 14.8661 3.74658C13.4242 2.13765 11.3305 1.125 9 1.125C4.65075 1.125 1.125 4.65075 1.125 9C1.125 13.3492 4.65075 16.875 9 16.875C13.3492 16.875 16.875 13.3492 16.875 9C16.875 7.71191 16.5657 6.49615 16.0174 5.42272Z", fill: "#27AE60" })));

var classNames$1 = require("classnames");
var Container$1 = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    input {\n        &:focus:not(.", ", .", ") + div {\n            border-color: ", ";\n        }\n\n        &:hover:not(:focus, :disabled, .", ", .", ")\n            + div {\n            border-color: ", ";\n        }\n\n        & + div {\n            border-color: ", ";\n        }\n    }\n\n    .", " {\n        & + div {\n            border-color: ", ";\n        }\n    }\n\n    .", " {\n        color: ", ";\n\n        & svg {\n            & > * {\n                fill: ", ";\n            }\n        }\n    }\n\n    .", " {\n        & + div {\n            border-color: ", ";\n        }\n    }\n\n    .", " {\n        span {\n            color: ", ";\n        }\n\n        & svg {\n            & > * {\n                fill: ", ";\n            }\n        }\n    }\n"], ["\n    input {\n        &:focus:not(.", ", .", ") + div {\n            border-color: ", ";\n        }\n\n        &:hover:not(:focus, :disabled, .", ", .", ")\n            + div {\n            border-color: ", ";\n        }\n\n        & + div {\n            border-color: ", ";\n        }\n    }\n\n    .", " {\n        & + div {\n            border-color: ", ";\n        }\n    }\n\n    .", " {\n        color: ", ";\n\n        & svg {\n            & > * {\n                fill: ", ";\n            }\n        }\n    }\n\n    .", " {\n        & + div {\n            border-color: ", ";\n        }\n    }\n\n    .", " {\n        span {\n            color: ", ";\n        }\n\n        & svg {\n            & > * {\n                fill: ", ";\n            }\n        }\n    }\n"])), styles$2.error, styles$2.success, function (props) { return props.focusColor; }, styles$2.error, styles$2.success, function (props) { return props.hoverColor; }, function (props) { return props.defaultColor; }, styles$2.error, function (props) { return props.errorColor; }, styles$2.errorMessage, function (props) { return props.errorColor; }, function (props) { return props.errorColor; }, styles$2.success, function (props) { return props.successColor; }, styles$2.successMessage, function (props) { return props.successColor; }, function (props) { return props.successColor; });
var MetTextField = function (_a) {
    var _b, _c;
    var style = _a.style, _d = _a.className, className = _d === void 0 ? "" : _d, _e = _a.inputFontClass, inputFontClass = _e === void 0 ? "" : _e, _f = _a.labelFontClass, labelFontClass = _f === void 0 ? "" : _f, _g = _a.errorFontClass, errorFontClass = _g === void 0 ? "" : _g, innerRef = _a.innerRef, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, isTextField = _a.isTextField, _h = _a.label, label = _h === void 0 ? "" : _h, placeholder = _a.placeholder, _j = _a.isDisabled, isDisabled = _j === void 0 ? false : _j, _k = _a.state, state = _k === void 0 ? exports.TextFieldState.DEFAULT : _k, _l = _a.errorIcon, errorIcon$1 = _l === void 0 ? errorIcon : _l, _m = _a.successIcon, successIcon$1 = _m === void 0 ? successIcon : _m, errorMessage = _a.errorMessage, successMessage = _a.successMessage, _o = _a.defaultColor, defaultColor = _o === void 0 ? colors.neutral300 : _o, _p = _a.hoverColor, hoverColor = _p === void 0 ? colors.neutral600 : _p, _q = _a.focusColor, focusColor = _q === void 0 ? colors.blue : _q, _r = _a.errorColor, errorColor = _r === void 0 ? colors.red200 : _r, _s = _a.successColor, successColor = _s === void 0 ? colors.green : _s;
    var getMessage = function (state, isTextField) {
        if (!isTextField || isDisabled)
            return;
        switch (state) {
            case exports.TextFieldState.ERROR:
                return (React__default['default'].createElement("div", { className: containerMessage },
                    errorIcon$1,
                    React__default['default'].createElement("span", { className: errorFontClass }, errorMessage)));
            case exports.TextFieldState.SUCCESS:
                return (React__default['default'].createElement("div", { className: containerMessage },
                    successIcon$1,
                    React__default['default'].createElement("span", { className: errorFontClass }, successMessage)));
        }
    };
    var stateStyle = classNames$1((_b = {},
        _b[styles$2.error] = state === exports.TextFieldState.ERROR,
        _b[styles$2.success] = state === exports.TextFieldState.SUCCESS,
        _b));
    var containerMessage = classNames$1(styles$2.container_message, (_c = {},
        _c[styles$2.errorMessage] = state === exports.TextFieldState.ERROR,
        _c[styles$2.successMessage] = state === exports.TextFieldState.SUCCESS,
        _c));
    return (React__default['default'].createElement(Container$1, { className: styles$2.container + " " + className, defaultColor: defaultColor, hoverColor: hoverColor, focusColor: focusColor, errorColor: errorColor, successColor: successColor, containerMessage: containerMessage },
        isTextField ? (React__default['default'].createElement("label", { className: styles$2.container__title + " " + labelFontClass }, label)) : null,
        React__default['default'].createElement("div", { className: styles$2.inputContainer },
            React__default['default'].createElement("input", { ref: innerRef, style: style, className: stateStyle + " " + inputFontClass, value: value, onChange: onChange, onBlur: onBlur, placeholder: placeholder, disabled: isDisabled }),
            React__default['default'].createElement("div", { className: styles$2.inputContainer__outline })),
        getMessage(state, isTextField)));
};
var templateObject_1$2;

var css_248z$1 = ".index-module_container__2MMkA {\n  position: relative;\n  width: 100%;\n}\n.index-module_container__outline__1c3fb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 4px;\n  z-index: 10;\n  background-color: transparent;\n}\n.index-module_container__2MMkA textarea {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  outline: none !important;\n  resize: none;\n  border: 0;\n  padding: 14px;\n  background-color: transparent;\n  color: #424242;\n  vertical-align: top;\n  z-index: 20;\n  scrollbar-width: thin;\n}\n.index-module_container__2MMkA textarea:focus + div {\n  border-width: 2px;\n}\n.index-module_container__2MMkA textarea:disabled {\n  color: #dbdbdb;\n}\n.index-module_container__2MMkA textarea:disabled + div {\n  border-color: #f6f6f6;\n  background-color: #ffffff;\n}\n.index-module_container__2MMkA textarea::-webkit-scrollbar {\n  width: 12px;\n  background: transparent;\n}\n.index-module_container__2MMkA textarea::-webkit-scrollbar-thumb {\n  height: 45%;\n  background: #616161;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n}\n.index-module_container__2MMkA textarea::-webkit-scrollbar-thumb:hover {\n  background: #212121;\n  background-clip: padding-box;\n}\n.index-module_container__2MMkA .index-module_error__knoNQ + div,\n.index-module_container__2MMkA .index-module_success__29jfn + div {\n  border-width: 2px;\n}";
var styles$1 = {"container":"index-module_container__2MMkA","container__outline":"index-module_container__outline__1c3fb","error":"index-module_error__knoNQ","success":"index-module_success__29jfn"};
styleInject(css_248z$1);

var classNames = require("classnames");
var Container = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    textarea {\n        & + div {\n            border-color: ", ";\n        }\n\n        &:focus:not(.", ", .", ") + div {\n            border-color: ", ";\n        }\n\n        &:hover:not(:focus, :disabled, .", ", .", ")\n            + div {\n            border-color: ", ";\n        }\n    }\n\n    .", " {\n        & + div {\n            border-color: ", ";\n        }\n    }\n\n    .", " {\n        & + div {\n            border-color: ", ";\n        }\n    }\n"], ["\n    textarea {\n        & + div {\n            border-color: ", ";\n        }\n\n        &:focus:not(.", ", .", ") + div {\n            border-color: ", ";\n        }\n\n        &:hover:not(:focus, :disabled, .", ", .", ")\n            + div {\n            border-color: ", ";\n        }\n    }\n\n    .", " {\n        & + div {\n            border-color: ", ";\n        }\n    }\n\n    .", " {\n        & + div {\n            border-color: ", ";\n        }\n    }\n"])), function (props) { return props.defaultColor; }, styles$1.error, styles$1.success, function (props) { return props.focusColor; }, styles$1.error, styles$1.success, function (props) { return props.hoverColor; }, styles$1.error, function (props) { return props.errorColor; }, styles$1.success, function (props) { return props.successColor; });
var MetTextArea = function (_a) {
    var _b;
    _a.style; var _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.inputFontClass, inputFontClass = _d === void 0 ? "" : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, onBlur = _a.onBlur, _f = _a.isDisabled, isDisabled = _f === void 0 ? false : _f, _g = _a.defaultValue, defaultValue = _g === void 0 ? "" : _g, value = _a.value, _h = _a.rowsMins, rowsMins = _h === void 0 ? 1 : _h, rowsMax = _a.rowsMax, _j = _a.state, state = _j === void 0 ? exports.TextFieldState.DEFAULT : _j, _k = _a.defaultColor, defaultColor = _k === void 0 ? colors.neutral300 : _k, _l = _a.hoverColor, hoverColor = _l === void 0 ? colors.neutral600 : _l, _m = _a.focusColor, focusColor = _m === void 0 ? colors.blue : _m, _o = _a.errorColor, errorColor = _o === void 0 ? colors.red200 : _o, _p = _a.successColor, successColor = _p === void 0 ? colors.green : _p, args = __rest(_a, ["style", "className", "inputFontClass", "onChange", "onBlur", "isDisabled", "defaultValue", "value", "rowsMins", "rowsMax", "state", "defaultColor", "hoverColor", "focusColor", "errorColor", "successColor"]);
    var textAreaRef = React.useRef(null);
    var _q = React.useState("auto"), textAreaHeight = _q[0], setTextAreaHeight = _q[1];
    var _r = React.useState(false), isSizeFixed = _r[0], setIsSizeFixed = _r[1];
    React.useEffect(function () {
        if (defaultValue === value)
            return;
        setTextAreaHeight("auto");
    }, [defaultValue]);
    React.useEffect(function () {
        var node = textAreaRef.current;
        var scrollHeight = node.scrollHeight;
        var nodeStyle = window.getComputedStyle(node);
        // get padding of textAret in numbers
        var padding = parseInt(nodeStyle.getPropertyValue("padding").replace("px", ""));
        // get lineHeight of textAret in numbers
        var lineHeight = parseInt(nodeStyle.getPropertyValue("line-height").replace("px", ""));
        // if maxRow >= rows
        if (!isNaN(lineHeight) &&
            rowsMax != null &&
            (scrollHeight - padding * 2) / lineHeight >= rowsMax) {
            setIsSizeFixed(true);
            setTextAreaHeight(padding * 2 + lineHeight * rowsMax + "px");
        }
        else {
            setIsSizeFixed(false);
            setTextAreaHeight(scrollHeight + "px");
        }
    }, [value]);
    var onChangeHandler = function (event) {
        setTextAreaHeight("auto");
        onChange(event);
    };
    var stateStyle = classNames((_b = {},
        _b[styles$1.error] = state === exports.TextFieldState.ERROR,
        _b[styles$1.success] = state === exports.TextFieldState.SUCCESS,
        _b));
    return (React__default['default'].createElement(Container, { className: styles$1.container + " " + className, defaultColor: defaultColor, hoverColor: hoverColor, focusColor: focusColor, errorColor: errorColor, successColor: successColor, style: {
            height: textAreaHeight,
        } },
        React__default['default'].createElement("textarea", __assign({}, args, { ref: textAreaRef, rows: rowsMins, style: {
                overflow: isSizeFixed ? "overlay" : "hidden",
            }, value: value, disabled: isDisabled, className: stateStyle + " " + inputFontClass, onChange: onChangeHandler, onBlur: onBlur })),
        React__default['default'].createElement("div", { className: styles$1.container__outline })));
};
var templateObject_1$1;

var css_248z = ".index-module_toggleSwitch__b1whR {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 12px;\n}\n.index-module_toggleSwitch__b1whR:hover .index-module_switch__jlk3m::before {\n  opacity: 0.25;\n}\n.index-module_toggleSwitch__b1whR input[type=checkbox] {\n  display: none;\n}\n.index-module_toggleSwitch__b1whR input[type=checkbox]:checked + .index-module_switch__jlk3m::after {\n  transform: translateX(100%);\n}\n.index-module_toggleSwitch__b1whR input[type=checkbox]:checked + .index-module_switch__jlk3m::before {\n  transform: translateX(30%);\n}\n.index-module_toggleSwitch__b1whR input[type=checkbox]:disabled + .index-module_switch__jlk3m {\n  background-color: #dbdbdb !important;\n}\n.index-module_toggleSwitch__b1whR input[type=checkbox]:disabled + .index-module_switch__jlk3m::before {\n  opacity: 0 !important;\n}\n.index-module_toggleSwitch__b1whR input[type=checkbox]:disabled + .index-module_switch__jlk3m::after {\n  background-color: #9e9e9e !important;\n}\n.index-module_toggleSwitch__b1whR .index-module_switch__jlk3m {\n  position: absolute;\n  cursor: pointer;\n  border-radius: 10px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.index-module_toggleSwitch__b1whR .index-module_switch__jlk3m::after {\n  position: absolute;\n  content: \"\";\n  top: calc(50% - 16px / 2);\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  transition: background-color 150ms ease, transform 150ms ease;\n}\n.index-module_toggleSwitch__b1whR .index-module_switch__jlk3m::before {\n  opacity: 0;\n  position: absolute;\n  content: \"\";\n  transform: translateX(-7px);\n  top: calc(50% - 30px / 2);\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  transition: opacity 150ms ease, transform 150ms ease;\n}";
var styles = {"toggleSwitch":"index-module_toggleSwitch__b1whR","switch":"index-module_switch__jlk3m"};
styleInject(css_248z);

var Span = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &::after {\n        background-color: ", ";\n        box-shadow: ", ";\n    }\n    &::before {\n        background-color: ", ";\n    }\n"], ["\n    &::after {\n        background-color: ", ";\n        box-shadow: ", ";\n    }\n    &::before {\n        background-color: ", ";\n    }\n"])), function (props) { return props.thumbOffColor; }, function (props) { return props.shadow; }, function (props) { return props.hoverColor; });
var Input = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n&:checked {\n  & + .", "::after { \n    background-color: ", ";\n  }\n"], ["\n&:checked {\n  & + .", "::after { \n    background-color: ", ";\n  }\n"])), styles.switch, function (props) { return props.thumbOnColor; });
var MetToggle = function (_a) {
    var style = _a.style, _b = _a.className, className = _b === void 0 ? "" : _b, isChecked = _a.isChecked, onChange = _a.onChange, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.trackColor, trackColor = _d === void 0 ? colors.neutral600 : _d, _e = _a.thumbOffColor, thumbOffColor = _e === void 0 ? colors.neutral50 : _e, _f = _a.thumbOnColor, thumbOnColor = _f === void 0 ? colors.neutral900 : _f, _g = _a.hoverColor, hoverColor = _g === void 0 ? colors.neutral800 : _g, _h = _a.shadow, shadow = _h === void 0 ? "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.2)" : _h;
    var onChangeHandler = function (event) {
        if (onChange == null)
            return;
        onChange(event);
    };
    return (React__default['default'].createElement("label", { style: style, className: styles.toggleSwitch + " " + className },
        React__default['default'].createElement(Input, { type: "checkbox", checked: isChecked, onChange: onChangeHandler, disabled: isDisabled, thumbOnColor: thumbOnColor }),
        React__default['default'].createElement(Span, { shadow: shadow, thumbOffColor: thumbOffColor, hoverColor: hoverColor, className: styles.switch, style: { backgroundColor: trackColor } })));
};
var templateObject_1, templateObject_2;

exports.MetCircleBtn = MetCircleBtn;
exports.MetCircleIconBtn = MetCircleIconBtn;
exports.MetPromptInfo = MetPromptInfo;
exports.MetRectangleIconBtn = MetRectangleIconBtn;
exports.MetSelect = MetSelect;
exports.MetSquareIconBtn = MetSquareIconBtn;
exports.MetSquareIconCheckbox = MetSquareIconCheckbox;
exports.MetTagButton = MetTagButton;
exports.MetTagInput = MetTagInput;
exports.MetTextArea = MetTextArea;
exports.MetTextField = MetTextField;
exports.MetToggle = MetToggle;
//# sourceMappingURL=index.js.map
