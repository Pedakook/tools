var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// react-shim.js
import React from "react";
var init_react_shim = __esm({
  "react-shim.js"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/is-buffer@2.0.5/node_modules/is-buffer/index.js
var require_is_buffer = __commonJS({
  "../../node_modules/.pnpm/is-buffer@2.0.5/node_modules/is-buffer/index.js"(exports, module) {
    init_react_shim();
    module.exports = function isBuffer2(obj) {
      return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
  }
});

// ../../node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js
var require_extend = __commonJS({
  "../../node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js"(exports, module) {
    "use strict";
    init_react_shim();
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject2 = function isPlainObject3(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key2;
      for (key2 in obj) {
      }
      return typeof key2 === "undefined" || hasOwn.call(obj, key2);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module.exports = function extend2() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject2(src) ? src : {};
                }
                setProperty(target, { name, newValue: extend2(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// src/index.ts
init_react_shim();

// src/entry/index.tsx
init_react_shim();
import {
  createRef,
  useCallback as useCallback18,
  useImperativeHandle,
  useRef as useRef16,
  useState as useState11
} from "react";
import { createRoot } from "react-dom/client";

// ../react/src/entry/index.tsx
init_react_shim();
import throttle3 from "lodash.throttle";
import { useCallback as useCallback17, useRef as useRef15 } from "react";
import { Editor as Editor62, Transforms as Transforms48 } from "slate";
import { ReactEditor as ReactEditor19, Slate as Slate2 } from "slate-react";

// ../react/src/convert/index.ts
init_react_shim();

// ../react/src/convert/parse/index.ts
init_react_shim();

// ../../node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-extension-gfm@2.0.3/node_modules/micromark-extension-gfm/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-util-combine-extensions@1.1.0/node_modules/micromark-util-combine-extensions/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-util-chunked@1.1.0/node_modules/micromark-util-chunked/index.js
init_react_shim();
function splice(list2, start, remove, items) {
  const end = list2.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    list2.splice(...parameters);
  } else {
    if (remove)
      list2.splice(start, remove);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      list2.splice(...parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list2, items) {
  if (list2.length > 0) {
    splice(list2, list2.length, 0, items);
    return list2;
  }
  return items;
}

// ../../node_modules/.pnpm/micromark-util-combine-extensions@1.1.0/node_modules/micromark-util-combine-extensions/index.js
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all2 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all2, extensions[index2]);
  }
  return all2;
}
function syntaxExtension(all2, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty.call(all2, hook) ? all2[hook] : void 0;
    const left = maybe || (all2[hook] = {});
    const right = extension2[hook];
    let code2;
    if (right) {
      for (code2 in right) {
        if (!hasOwnProperty.call(left, code2))
          left[code2] = [];
        const value = right[code2];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code2],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}
function constructs(existing, list2) {
  let index2 = -1;
  const before = [];
  while (++index2 < list2.length) {
    ;
    (list2[index2].add === "after" ? existing : before).push(list2[index2]);
  }
  splice(existing, 0, 0, before);
}

// ../../node_modules/.pnpm/micromark-extension-gfm-autolink-literal@1.0.5/node_modules/micromark-extension-gfm-autolink-literal/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-extension-gfm-autolink-literal@1.0.5/node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-util-character@1.2.0/node_modules/micromark-util-character/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-util-character@1.2.0/node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
init_react_shim();
var unicodePunctuationRegex = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

// ../../node_modules/.pnpm/micromark-util-character@1.2.0/node_modules/micromark-util-character/index.js
var asciiAlpha = regexCheck(/[A-Za-z]/);
var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code2) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code2 !== null && (code2 < 32 || code2 === 127)
  );
}
var asciiDigit = regexCheck(/\d/);
var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code2) {
  return code2 !== null && code2 < -2;
}
function markdownLineEndingOrSpace(code2) {
  return code2 !== null && (code2 < 0 || code2 === 32);
}
function markdownSpace(code2) {
  return code2 === -2 || code2 === -1 || code2 === 32;
}
var unicodePunctuation = regexCheck(unicodePunctuationRegex);
var unicodeWhitespace = regexCheck(/\s/);
function regexCheck(regex) {
  return check;
  function check(code2) {
    return code2 !== null && regex.test(String.fromCharCode(code2));
  }
}

// ../../node_modules/.pnpm/micromark-extension-gfm-autolink-literal@1.0.5/node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var wwwPrefix = {
  tokenize: tokenizeWwwPrefix,
  partial: true
};
var domain = {
  tokenize: tokenizeDomain,
  partial: true
};
var path = {
  tokenize: tokenizePath,
  partial: true
};
var trail = {
  tokenize: tokenizeTrail,
  partial: true
};
var emailDomainDotTrail = {
  tokenize: tokenizeEmailDomainDotTrail,
  partial: true
};
var wwwAutolink = {
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
};
var protocolAutolink = {
  tokenize: tokenizeProtocolAutolink,
  previous: previousProtocol
};
var emailAutolink = {
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
};
var text = {};
var gfmAutolinkLiteral = {
  text
};
var code = 48;
while (code < 123) {
  text[code] = emailAutolink;
  code++;
  if (code === 58)
    code = 65;
  else if (code === 91)
    code = 97;
}
text[43] = emailAutolink;
text[45] = emailAutolink;
text[46] = emailAutolink;
text[95] = emailAutolink;
text[72] = [emailAutolink, protocolAutolink];
text[104] = [emailAutolink, protocolAutolink];
text[87] = [emailAutolink, wwwAutolink];
text[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok2, nok) {
  const self = this;
  let dot;
  let data2;
  return start;
  function start(code2) {
    if (!gfmAtext(code2) || !previousEmail.call(self, self.previous) || previousUnbalanced(self.events)) {
      return nok(code2);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkEmail");
    return atext(code2);
  }
  function atext(code2) {
    if (gfmAtext(code2)) {
      effects.consume(code2);
      return atext;
    }
    if (code2 === 64) {
      effects.consume(code2);
      return emailDomain;
    }
    return nok(code2);
  }
  function emailDomain(code2) {
    if (code2 === 46) {
      return effects.check(
        emailDomainDotTrail,
        emailDomainAfter,
        emailDomainDot
      )(code2);
    }
    if (code2 === 45 || code2 === 95 || asciiAlphanumeric(code2)) {
      data2 = true;
      effects.consume(code2);
      return emailDomain;
    }
    return emailDomainAfter(code2);
  }
  function emailDomainDot(code2) {
    effects.consume(code2);
    dot = true;
    return emailDomain;
  }
  function emailDomainAfter(code2) {
    if (data2 && dot && asciiAlpha(self.previous)) {
      effects.exit("literalAutolinkEmail");
      effects.exit("literalAutolink");
      return ok2(code2);
    }
    return nok(code2);
  }
}
function tokenizeWwwAutolink(effects, ok2, nok) {
  const self = this;
  return wwwStart;
  function wwwStart(code2) {
    if (code2 !== 87 && code2 !== 119 || !previousWww.call(self, self.previous) || previousUnbalanced(self.events)) {
      return nok(code2);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkWww");
    return effects.check(
      wwwPrefix,
      effects.attempt(domain, effects.attempt(path, wwwAfter), nok),
      nok
    )(code2);
  }
  function wwwAfter(code2) {
    effects.exit("literalAutolinkWww");
    effects.exit("literalAutolink");
    return ok2(code2);
  }
}
function tokenizeProtocolAutolink(effects, ok2, nok) {
  const self = this;
  let buffer2 = "";
  let seen = false;
  return protocolStart;
  function protocolStart(code2) {
    if ((code2 === 72 || code2 === 104) && previousProtocol.call(self, self.previous) && !previousUnbalanced(self.events)) {
      effects.enter("literalAutolink");
      effects.enter("literalAutolinkHttp");
      buffer2 += String.fromCodePoint(code2);
      effects.consume(code2);
      return protocolPrefixInside;
    }
    return nok(code2);
  }
  function protocolPrefixInside(code2) {
    if (asciiAlpha(code2) && buffer2.length < 5) {
      buffer2 += String.fromCodePoint(code2);
      effects.consume(code2);
      return protocolPrefixInside;
    }
    if (code2 === 58) {
      const protocol = buffer2.toLowerCase();
      if (protocol === "http" || protocol === "https") {
        effects.consume(code2);
        return protocolSlashesInside;
      }
    }
    return nok(code2);
  }
  function protocolSlashesInside(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      if (seen) {
        return afterProtocol;
      }
      seen = true;
      return protocolSlashesInside;
    }
    return nok(code2);
  }
  function afterProtocol(code2) {
    return code2 === null || asciiControl(code2) || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2) || unicodePunctuation(code2) ? nok(code2) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code2);
  }
  function protocolAfter(code2) {
    effects.exit("literalAutolinkHttp");
    effects.exit("literalAutolink");
    return ok2(code2);
  }
}
function tokenizeWwwPrefix(effects, ok2, nok) {
  let size = 0;
  return wwwPrefixInside;
  function wwwPrefixInside(code2) {
    if ((code2 === 87 || code2 === 119) && size < 3) {
      size++;
      effects.consume(code2);
      return wwwPrefixInside;
    }
    if (code2 === 46 && size === 3) {
      effects.consume(code2);
      return wwwPrefixAfter;
    }
    return nok(code2);
  }
  function wwwPrefixAfter(code2) {
    return code2 === null ? nok(code2) : ok2(code2);
  }
}
function tokenizeDomain(effects, ok2, nok) {
  let underscoreInLastSegment;
  let underscoreInLastLastSegment;
  let seen;
  return domainInside;
  function domainInside(code2) {
    if (code2 === 46 || code2 === 95) {
      return effects.check(trail, domainAfter, domainAtPunctuation)(code2);
    }
    if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2) || code2 !== 45 && unicodePunctuation(code2)) {
      return domainAfter(code2);
    }
    seen = true;
    effects.consume(code2);
    return domainInside;
  }
  function domainAtPunctuation(code2) {
    if (code2 === 95) {
      underscoreInLastSegment = true;
    } else {
      underscoreInLastLastSegment = underscoreInLastSegment;
      underscoreInLastSegment = void 0;
    }
    effects.consume(code2);
    return domainInside;
  }
  function domainAfter(code2) {
    if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
      return nok(code2);
    }
    return ok2(code2);
  }
}
function tokenizePath(effects, ok2) {
  let sizeOpen = 0;
  let sizeClose = 0;
  return pathInside;
  function pathInside(code2) {
    if (code2 === 40) {
      sizeOpen++;
      effects.consume(code2);
      return pathInside;
    }
    if (code2 === 41 && sizeClose < sizeOpen) {
      return pathAtPunctuation(code2);
    }
    if (code2 === 33 || code2 === 34 || code2 === 38 || code2 === 39 || code2 === 41 || code2 === 42 || code2 === 44 || code2 === 46 || code2 === 58 || code2 === 59 || code2 === 60 || code2 === 63 || code2 === 93 || code2 === 95 || code2 === 126) {
      return effects.check(trail, ok2, pathAtPunctuation)(code2);
    }
    if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      return ok2(code2);
    }
    effects.consume(code2);
    return pathInside;
  }
  function pathAtPunctuation(code2) {
    if (code2 === 41) {
      sizeClose++;
    }
    effects.consume(code2);
    return pathInside;
  }
}
function tokenizeTrail(effects, ok2, nok) {
  return trail2;
  function trail2(code2) {
    if (code2 === 33 || code2 === 34 || code2 === 39 || code2 === 41 || code2 === 42 || code2 === 44 || code2 === 46 || code2 === 58 || code2 === 59 || code2 === 63 || code2 === 95 || code2 === 126) {
      effects.consume(code2);
      return trail2;
    }
    if (code2 === 38) {
      effects.consume(code2);
      return trailCharRefStart;
    }
    if (code2 === 93) {
      effects.consume(code2);
      return trailBracketAfter;
    }
    if (
      // `<` is an end.
      code2 === 60 || // So is whitespace.
      code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)
    ) {
      return ok2(code2);
    }
    return nok(code2);
  }
  function trailBracketAfter(code2) {
    if (code2 === null || code2 === 40 || code2 === 91 || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      return ok2(code2);
    }
    return trail2(code2);
  }
  function trailCharRefStart(code2) {
    return asciiAlpha(code2) ? trailCharRefInside(code2) : nok(code2);
  }
  function trailCharRefInside(code2) {
    if (code2 === 59) {
      effects.consume(code2);
      return trail2;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return trailCharRefInside;
    }
    return nok(code2);
  }
}
function tokenizeEmailDomainDotTrail(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.consume(code2);
    return after;
  }
  function after(code2) {
    return asciiAlphanumeric(code2) ? nok(code2) : ok2(code2);
  }
}
function previousWww(code2) {
  return code2 === null || code2 === 40 || code2 === 42 || code2 === 95 || code2 === 91 || code2 === 93 || code2 === 126 || markdownLineEndingOrSpace(code2);
}
function previousProtocol(code2) {
  return !asciiAlpha(code2);
}
function previousEmail(code2) {
  return !(code2 === 47 || gfmAtext(code2));
}
function gfmAtext(code2) {
  return code2 === 43 || code2 === 45 || code2 === 46 || code2 === 95 || asciiAlphanumeric(code2);
}
function previousUnbalanced(events) {
  let index2 = events.length;
  let result = false;
  while (index2--) {
    const token = events[index2][1];
    if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
      result = true;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}

// ../../node_modules/.pnpm/micromark-extension-gfm-footnote@1.1.2/node_modules/micromark-extension-gfm-footnote/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-extension-gfm-footnote@1.1.2/node_modules/micromark-extension-gfm-footnote/lib/syntax.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/attention.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-util-classify-character@1.1.0/node_modules/micromark-util-classify-character/index.js
init_react_shim();
function classifyCharacter(code2) {
  if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
    return 1;
  }
  if (unicodePunctuation(code2)) {
    return 2;
  }
}

// ../../node_modules/.pnpm/micromark-util-resolve-all@1.1.0/node_modules/micromark-util-resolve-all/index.js
init_react_shim();
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/attention.js
var attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1;
  let open;
  let group;
  let text4;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index2][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index2][1].start),
            end
          };
          text4 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index2][1].start)
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index2][1].start = Object.assign({}, closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ["enter", events[open][1], context],
              ["exit", events[open][1], context]
            ]);
          }
          nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text4, context]
          ]);
          nextEvents = push(
            nextEvents,
            resolveAll(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index2),
              context
            )
          );
          nextEvents = push(nextEvents, [
            ["exit", text4, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context]
            ]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok2) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous3 = this.previous;
  const before = classifyCharacter(previous3);
  let marker;
  return start;
  function start(code2) {
    marker = code2;
    effects.enter("attentionSequence");
    return inside(code2);
  }
  function inside(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return inside;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter(code2);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code2);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous3);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok2(code2);
  }
}
function movePoint(point3, offset) {
  point3.column += offset;
  point3.offset += offset;
  point3._bufferIndex += offset;
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/autolink.js
init_react_shim();
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok2, nok) {
  let size = 0;
  return start;
  function start(code2) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code2);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return schemeOrEmailAtext;
    }
    return emailAtext(code2);
  }
  function schemeOrEmailAtext(code2) {
    if (code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) {
      size = 1;
      return schemeInsideOrEmailAtext(code2);
    }
    return emailAtext(code2);
  }
  function schemeInsideOrEmailAtext(code2) {
    if (code2 === 58) {
      effects.consume(code2);
      size = 0;
      return urlInside;
    }
    if ((code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) && size++ < 32) {
      effects.consume(code2);
      return schemeInsideOrEmailAtext;
    }
    size = 0;
    return emailAtext(code2);
  }
  function urlInside(code2) {
    if (code2 === 62) {
      effects.exit("autolinkProtocol");
      effects.enter("autolinkMarker");
      effects.consume(code2);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok2;
    }
    if (code2 === null || code2 === 32 || code2 === 60 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return urlInside;
  }
  function emailAtext(code2) {
    if (code2 === 64) {
      effects.consume(code2);
      return emailAtSignOrDot;
    }
    if (asciiAtext(code2)) {
      effects.consume(code2);
      return emailAtext;
    }
    return nok(code2);
  }
  function emailAtSignOrDot(code2) {
    return asciiAlphanumeric(code2) ? emailLabel(code2) : nok(code2);
  }
  function emailLabel(code2) {
    if (code2 === 46) {
      effects.consume(code2);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code2 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      effects.enter("autolinkMarker");
      effects.consume(code2);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok2;
    }
    return emailValue(code2);
  }
  function emailValue(code2) {
    if ((code2 === 45 || asciiAlphanumeric(code2)) && size++ < 63) {
      const next = code2 === 45 ? emailValue : emailLabel;
      effects.consume(code2);
      return next;
    }
    return nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/blank-line.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-factory-space@1.1.0/node_modules/micromark-factory-space/index.js
init_react_shim();
function factorySpace(effects, ok2, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code2) {
    if (markdownSpace(code2)) {
      effects.enter(type);
      return prefix(code2);
    }
    return ok2(code2);
  }
  function prefix(code2) {
    if (markdownSpace(code2) && size++ < limit) {
      effects.consume(code2);
      return prefix;
    }
    effects.exit(type);
    return ok2(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/blank-line.js
var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
function tokenizeBlankLine(effects, ok2, nok) {
  return start;
  function start(code2) {
    return markdownSpace(code2) ? factorySpace(effects, after, "linePrefix")(code2) : after(code2);
  }
  function after(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/block-quote.js
init_react_shim();
var blockQuote = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    if (code2 === 62) {
      const state = self.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code2);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    if (markdownSpace(code2)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code2);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok2;
    }
    effects.exit("blockQuotePrefix");
    return ok2(code2);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  const self = this;
  return contStart;
  function contStart(code2) {
    if (markdownSpace(code2)) {
      return factorySpace(
        effects,
        contBefore,
        "linePrefix",
        self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(code2);
    }
    return contBefore(code2);
  }
  function contBefore(code2) {
    return effects.attempt(blockQuote, ok2, nok)(code2);
  }
}
function exit(effects) {
  effects.exit("blockQuote");
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/character-escape.js
init_react_shim();
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code2);
    effects.exit("escapeMarker");
    return inside;
  }
  function inside(code2) {
    if (asciiPunctuation(code2)) {
      effects.enter("characterEscapeValue");
      effects.consume(code2);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok2;
    }
    return nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/character-reference.js
init_react_shim();

// ../../node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js
init_react_shim();

// ../../node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js
init_react_shim();
var characterEntities = {
  AElig: "\xC6",
  AMP: "&",
  Aacute: "\xC1",
  Abreve: "\u0102",
  Acirc: "\xC2",
  Acy: "\u0410",
  Afr: "\u{1D504}",
  Agrave: "\xC0",
  Alpha: "\u0391",
  Amacr: "\u0100",
  And: "\u2A53",
  Aogon: "\u0104",
  Aopf: "\u{1D538}",
  ApplyFunction: "\u2061",
  Aring: "\xC5",
  Ascr: "\u{1D49C}",
  Assign: "\u2254",
  Atilde: "\xC3",
  Auml: "\xC4",
  Backslash: "\u2216",
  Barv: "\u2AE7",
  Barwed: "\u2306",
  Bcy: "\u0411",
  Because: "\u2235",
  Bernoullis: "\u212C",
  Beta: "\u0392",
  Bfr: "\u{1D505}",
  Bopf: "\u{1D539}",
  Breve: "\u02D8",
  Bscr: "\u212C",
  Bumpeq: "\u224E",
  CHcy: "\u0427",
  COPY: "\xA9",
  Cacute: "\u0106",
  Cap: "\u22D2",
  CapitalDifferentialD: "\u2145",
  Cayleys: "\u212D",
  Ccaron: "\u010C",
  Ccedil: "\xC7",
  Ccirc: "\u0108",
  Cconint: "\u2230",
  Cdot: "\u010A",
  Cedilla: "\xB8",
  CenterDot: "\xB7",
  Cfr: "\u212D",
  Chi: "\u03A7",
  CircleDot: "\u2299",
  CircleMinus: "\u2296",
  CirclePlus: "\u2295",
  CircleTimes: "\u2297",
  ClockwiseContourIntegral: "\u2232",
  CloseCurlyDoubleQuote: "\u201D",
  CloseCurlyQuote: "\u2019",
  Colon: "\u2237",
  Colone: "\u2A74",
  Congruent: "\u2261",
  Conint: "\u222F",
  ContourIntegral: "\u222E",
  Copf: "\u2102",
  Coproduct: "\u2210",
  CounterClockwiseContourIntegral: "\u2233",
  Cross: "\u2A2F",
  Cscr: "\u{1D49E}",
  Cup: "\u22D3",
  CupCap: "\u224D",
  DD: "\u2145",
  DDotrahd: "\u2911",
  DJcy: "\u0402",
  DScy: "\u0405",
  DZcy: "\u040F",
  Dagger: "\u2021",
  Darr: "\u21A1",
  Dashv: "\u2AE4",
  Dcaron: "\u010E",
  Dcy: "\u0414",
  Del: "\u2207",
  Delta: "\u0394",
  Dfr: "\u{1D507}",
  DiacriticalAcute: "\xB4",
  DiacriticalDot: "\u02D9",
  DiacriticalDoubleAcute: "\u02DD",
  DiacriticalGrave: "`",
  DiacriticalTilde: "\u02DC",
  Diamond: "\u22C4",
  DifferentialD: "\u2146",
  Dopf: "\u{1D53B}",
  Dot: "\xA8",
  DotDot: "\u20DC",
  DotEqual: "\u2250",
  DoubleContourIntegral: "\u222F",
  DoubleDot: "\xA8",
  DoubleDownArrow: "\u21D3",
  DoubleLeftArrow: "\u21D0",
  DoubleLeftRightArrow: "\u21D4",
  DoubleLeftTee: "\u2AE4",
  DoubleLongLeftArrow: "\u27F8",
  DoubleLongLeftRightArrow: "\u27FA",
  DoubleLongRightArrow: "\u27F9",
  DoubleRightArrow: "\u21D2",
  DoubleRightTee: "\u22A8",
  DoubleUpArrow: "\u21D1",
  DoubleUpDownArrow: "\u21D5",
  DoubleVerticalBar: "\u2225",
  DownArrow: "\u2193",
  DownArrowBar: "\u2913",
  DownArrowUpArrow: "\u21F5",
  DownBreve: "\u0311",
  DownLeftRightVector: "\u2950",
  DownLeftTeeVector: "\u295E",
  DownLeftVector: "\u21BD",
  DownLeftVectorBar: "\u2956",
  DownRightTeeVector: "\u295F",
  DownRightVector: "\u21C1",
  DownRightVectorBar: "\u2957",
  DownTee: "\u22A4",
  DownTeeArrow: "\u21A7",
  Downarrow: "\u21D3",
  Dscr: "\u{1D49F}",
  Dstrok: "\u0110",
  ENG: "\u014A",
  ETH: "\xD0",
  Eacute: "\xC9",
  Ecaron: "\u011A",
  Ecirc: "\xCA",
  Ecy: "\u042D",
  Edot: "\u0116",
  Efr: "\u{1D508}",
  Egrave: "\xC8",
  Element: "\u2208",
  Emacr: "\u0112",
  EmptySmallSquare: "\u25FB",
  EmptyVerySmallSquare: "\u25AB",
  Eogon: "\u0118",
  Eopf: "\u{1D53C}",
  Epsilon: "\u0395",
  Equal: "\u2A75",
  EqualTilde: "\u2242",
  Equilibrium: "\u21CC",
  Escr: "\u2130",
  Esim: "\u2A73",
  Eta: "\u0397",
  Euml: "\xCB",
  Exists: "\u2203",
  ExponentialE: "\u2147",
  Fcy: "\u0424",
  Ffr: "\u{1D509}",
  FilledSmallSquare: "\u25FC",
  FilledVerySmallSquare: "\u25AA",
  Fopf: "\u{1D53D}",
  ForAll: "\u2200",
  Fouriertrf: "\u2131",
  Fscr: "\u2131",
  GJcy: "\u0403",
  GT: ">",
  Gamma: "\u0393",
  Gammad: "\u03DC",
  Gbreve: "\u011E",
  Gcedil: "\u0122",
  Gcirc: "\u011C",
  Gcy: "\u0413",
  Gdot: "\u0120",
  Gfr: "\u{1D50A}",
  Gg: "\u22D9",
  Gopf: "\u{1D53E}",
  GreaterEqual: "\u2265",
  GreaterEqualLess: "\u22DB",
  GreaterFullEqual: "\u2267",
  GreaterGreater: "\u2AA2",
  GreaterLess: "\u2277",
  GreaterSlantEqual: "\u2A7E",
  GreaterTilde: "\u2273",
  Gscr: "\u{1D4A2}",
  Gt: "\u226B",
  HARDcy: "\u042A",
  Hacek: "\u02C7",
  Hat: "^",
  Hcirc: "\u0124",
  Hfr: "\u210C",
  HilbertSpace: "\u210B",
  Hopf: "\u210D",
  HorizontalLine: "\u2500",
  Hscr: "\u210B",
  Hstrok: "\u0126",
  HumpDownHump: "\u224E",
  HumpEqual: "\u224F",
  IEcy: "\u0415",
  IJlig: "\u0132",
  IOcy: "\u0401",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Icy: "\u0418",
  Idot: "\u0130",
  Ifr: "\u2111",
  Igrave: "\xCC",
  Im: "\u2111",
  Imacr: "\u012A",
  ImaginaryI: "\u2148",
  Implies: "\u21D2",
  Int: "\u222C",
  Integral: "\u222B",
  Intersection: "\u22C2",
  InvisibleComma: "\u2063",
  InvisibleTimes: "\u2062",
  Iogon: "\u012E",
  Iopf: "\u{1D540}",
  Iota: "\u0399",
  Iscr: "\u2110",
  Itilde: "\u0128",
  Iukcy: "\u0406",
  Iuml: "\xCF",
  Jcirc: "\u0134",
  Jcy: "\u0419",
  Jfr: "\u{1D50D}",
  Jopf: "\u{1D541}",
  Jscr: "\u{1D4A5}",
  Jsercy: "\u0408",
  Jukcy: "\u0404",
  KHcy: "\u0425",
  KJcy: "\u040C",
  Kappa: "\u039A",
  Kcedil: "\u0136",
  Kcy: "\u041A",
  Kfr: "\u{1D50E}",
  Kopf: "\u{1D542}",
  Kscr: "\u{1D4A6}",
  LJcy: "\u0409",
  LT: "<",
  Lacute: "\u0139",
  Lambda: "\u039B",
  Lang: "\u27EA",
  Laplacetrf: "\u2112",
  Larr: "\u219E",
  Lcaron: "\u013D",
  Lcedil: "\u013B",
  Lcy: "\u041B",
  LeftAngleBracket: "\u27E8",
  LeftArrow: "\u2190",
  LeftArrowBar: "\u21E4",
  LeftArrowRightArrow: "\u21C6",
  LeftCeiling: "\u2308",
  LeftDoubleBracket: "\u27E6",
  LeftDownTeeVector: "\u2961",
  LeftDownVector: "\u21C3",
  LeftDownVectorBar: "\u2959",
  LeftFloor: "\u230A",
  LeftRightArrow: "\u2194",
  LeftRightVector: "\u294E",
  LeftTee: "\u22A3",
  LeftTeeArrow: "\u21A4",
  LeftTeeVector: "\u295A",
  LeftTriangle: "\u22B2",
  LeftTriangleBar: "\u29CF",
  LeftTriangleEqual: "\u22B4",
  LeftUpDownVector: "\u2951",
  LeftUpTeeVector: "\u2960",
  LeftUpVector: "\u21BF",
  LeftUpVectorBar: "\u2958",
  LeftVector: "\u21BC",
  LeftVectorBar: "\u2952",
  Leftarrow: "\u21D0",
  Leftrightarrow: "\u21D4",
  LessEqualGreater: "\u22DA",
  LessFullEqual: "\u2266",
  LessGreater: "\u2276",
  LessLess: "\u2AA1",
  LessSlantEqual: "\u2A7D",
  LessTilde: "\u2272",
  Lfr: "\u{1D50F}",
  Ll: "\u22D8",
  Lleftarrow: "\u21DA",
  Lmidot: "\u013F",
  LongLeftArrow: "\u27F5",
  LongLeftRightArrow: "\u27F7",
  LongRightArrow: "\u27F6",
  Longleftarrow: "\u27F8",
  Longleftrightarrow: "\u27FA",
  Longrightarrow: "\u27F9",
  Lopf: "\u{1D543}",
  LowerLeftArrow: "\u2199",
  LowerRightArrow: "\u2198",
  Lscr: "\u2112",
  Lsh: "\u21B0",
  Lstrok: "\u0141",
  Lt: "\u226A",
  Map: "\u2905",
  Mcy: "\u041C",
  MediumSpace: "\u205F",
  Mellintrf: "\u2133",
  Mfr: "\u{1D510}",
  MinusPlus: "\u2213",
  Mopf: "\u{1D544}",
  Mscr: "\u2133",
  Mu: "\u039C",
  NJcy: "\u040A",
  Nacute: "\u0143",
  Ncaron: "\u0147",
  Ncedil: "\u0145",
  Ncy: "\u041D",
  NegativeMediumSpace: "\u200B",
  NegativeThickSpace: "\u200B",
  NegativeThinSpace: "\u200B",
  NegativeVeryThinSpace: "\u200B",
  NestedGreaterGreater: "\u226B",
  NestedLessLess: "\u226A",
  NewLine: "\n",
  Nfr: "\u{1D511}",
  NoBreak: "\u2060",
  NonBreakingSpace: "\xA0",
  Nopf: "\u2115",
  Not: "\u2AEC",
  NotCongruent: "\u2262",
  NotCupCap: "\u226D",
  NotDoubleVerticalBar: "\u2226",
  NotElement: "\u2209",
  NotEqual: "\u2260",
  NotEqualTilde: "\u2242\u0338",
  NotExists: "\u2204",
  NotGreater: "\u226F",
  NotGreaterEqual: "\u2271",
  NotGreaterFullEqual: "\u2267\u0338",
  NotGreaterGreater: "\u226B\u0338",
  NotGreaterLess: "\u2279",
  NotGreaterSlantEqual: "\u2A7E\u0338",
  NotGreaterTilde: "\u2275",
  NotHumpDownHump: "\u224E\u0338",
  NotHumpEqual: "\u224F\u0338",
  NotLeftTriangle: "\u22EA",
  NotLeftTriangleBar: "\u29CF\u0338",
  NotLeftTriangleEqual: "\u22EC",
  NotLess: "\u226E",
  NotLessEqual: "\u2270",
  NotLessGreater: "\u2278",
  NotLessLess: "\u226A\u0338",
  NotLessSlantEqual: "\u2A7D\u0338",
  NotLessTilde: "\u2274",
  NotNestedGreaterGreater: "\u2AA2\u0338",
  NotNestedLessLess: "\u2AA1\u0338",
  NotPrecedes: "\u2280",
  NotPrecedesEqual: "\u2AAF\u0338",
  NotPrecedesSlantEqual: "\u22E0",
  NotReverseElement: "\u220C",
  NotRightTriangle: "\u22EB",
  NotRightTriangleBar: "\u29D0\u0338",
  NotRightTriangleEqual: "\u22ED",
  NotSquareSubset: "\u228F\u0338",
  NotSquareSubsetEqual: "\u22E2",
  NotSquareSuperset: "\u2290\u0338",
  NotSquareSupersetEqual: "\u22E3",
  NotSubset: "\u2282\u20D2",
  NotSubsetEqual: "\u2288",
  NotSucceeds: "\u2281",
  NotSucceedsEqual: "\u2AB0\u0338",
  NotSucceedsSlantEqual: "\u22E1",
  NotSucceedsTilde: "\u227F\u0338",
  NotSuperset: "\u2283\u20D2",
  NotSupersetEqual: "\u2289",
  NotTilde: "\u2241",
  NotTildeEqual: "\u2244",
  NotTildeFullEqual: "\u2247",
  NotTildeTilde: "\u2249",
  NotVerticalBar: "\u2224",
  Nscr: "\u{1D4A9}",
  Ntilde: "\xD1",
  Nu: "\u039D",
  OElig: "\u0152",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Ocy: "\u041E",
  Odblac: "\u0150",
  Ofr: "\u{1D512}",
  Ograve: "\xD2",
  Omacr: "\u014C",
  Omega: "\u03A9",
  Omicron: "\u039F",
  Oopf: "\u{1D546}",
  OpenCurlyDoubleQuote: "\u201C",
  OpenCurlyQuote: "\u2018",
  Or: "\u2A54",
  Oscr: "\u{1D4AA}",
  Oslash: "\xD8",
  Otilde: "\xD5",
  Otimes: "\u2A37",
  Ouml: "\xD6",
  OverBar: "\u203E",
  OverBrace: "\u23DE",
  OverBracket: "\u23B4",
  OverParenthesis: "\u23DC",
  PartialD: "\u2202",
  Pcy: "\u041F",
  Pfr: "\u{1D513}",
  Phi: "\u03A6",
  Pi: "\u03A0",
  PlusMinus: "\xB1",
  Poincareplane: "\u210C",
  Popf: "\u2119",
  Pr: "\u2ABB",
  Precedes: "\u227A",
  PrecedesEqual: "\u2AAF",
  PrecedesSlantEqual: "\u227C",
  PrecedesTilde: "\u227E",
  Prime: "\u2033",
  Product: "\u220F",
  Proportion: "\u2237",
  Proportional: "\u221D",
  Pscr: "\u{1D4AB}",
  Psi: "\u03A8",
  QUOT: '"',
  Qfr: "\u{1D514}",
  Qopf: "\u211A",
  Qscr: "\u{1D4AC}",
  RBarr: "\u2910",
  REG: "\xAE",
  Racute: "\u0154",
  Rang: "\u27EB",
  Rarr: "\u21A0",
  Rarrtl: "\u2916",
  Rcaron: "\u0158",
  Rcedil: "\u0156",
  Rcy: "\u0420",
  Re: "\u211C",
  ReverseElement: "\u220B",
  ReverseEquilibrium: "\u21CB",
  ReverseUpEquilibrium: "\u296F",
  Rfr: "\u211C",
  Rho: "\u03A1",
  RightAngleBracket: "\u27E9",
  RightArrow: "\u2192",
  RightArrowBar: "\u21E5",
  RightArrowLeftArrow: "\u21C4",
  RightCeiling: "\u2309",
  RightDoubleBracket: "\u27E7",
  RightDownTeeVector: "\u295D",
  RightDownVector: "\u21C2",
  RightDownVectorBar: "\u2955",
  RightFloor: "\u230B",
  RightTee: "\u22A2",
  RightTeeArrow: "\u21A6",
  RightTeeVector: "\u295B",
  RightTriangle: "\u22B3",
  RightTriangleBar: "\u29D0",
  RightTriangleEqual: "\u22B5",
  RightUpDownVector: "\u294F",
  RightUpTeeVector: "\u295C",
  RightUpVector: "\u21BE",
  RightUpVectorBar: "\u2954",
  RightVector: "\u21C0",
  RightVectorBar: "\u2953",
  Rightarrow: "\u21D2",
  Ropf: "\u211D",
  RoundImplies: "\u2970",
  Rrightarrow: "\u21DB",
  Rscr: "\u211B",
  Rsh: "\u21B1",
  RuleDelayed: "\u29F4",
  SHCHcy: "\u0429",
  SHcy: "\u0428",
  SOFTcy: "\u042C",
  Sacute: "\u015A",
  Sc: "\u2ABC",
  Scaron: "\u0160",
  Scedil: "\u015E",
  Scirc: "\u015C",
  Scy: "\u0421",
  Sfr: "\u{1D516}",
  ShortDownArrow: "\u2193",
  ShortLeftArrow: "\u2190",
  ShortRightArrow: "\u2192",
  ShortUpArrow: "\u2191",
  Sigma: "\u03A3",
  SmallCircle: "\u2218",
  Sopf: "\u{1D54A}",
  Sqrt: "\u221A",
  Square: "\u25A1",
  SquareIntersection: "\u2293",
  SquareSubset: "\u228F",
  SquareSubsetEqual: "\u2291",
  SquareSuperset: "\u2290",
  SquareSupersetEqual: "\u2292",
  SquareUnion: "\u2294",
  Sscr: "\u{1D4AE}",
  Star: "\u22C6",
  Sub: "\u22D0",
  Subset: "\u22D0",
  SubsetEqual: "\u2286",
  Succeeds: "\u227B",
  SucceedsEqual: "\u2AB0",
  SucceedsSlantEqual: "\u227D",
  SucceedsTilde: "\u227F",
  SuchThat: "\u220B",
  Sum: "\u2211",
  Sup: "\u22D1",
  Superset: "\u2283",
  SupersetEqual: "\u2287",
  Supset: "\u22D1",
  THORN: "\xDE",
  TRADE: "\u2122",
  TSHcy: "\u040B",
  TScy: "\u0426",
  Tab: "	",
  Tau: "\u03A4",
  Tcaron: "\u0164",
  Tcedil: "\u0162",
  Tcy: "\u0422",
  Tfr: "\u{1D517}",
  Therefore: "\u2234",
  Theta: "\u0398",
  ThickSpace: "\u205F\u200A",
  ThinSpace: "\u2009",
  Tilde: "\u223C",
  TildeEqual: "\u2243",
  TildeFullEqual: "\u2245",
  TildeTilde: "\u2248",
  Topf: "\u{1D54B}",
  TripleDot: "\u20DB",
  Tscr: "\u{1D4AF}",
  Tstrok: "\u0166",
  Uacute: "\xDA",
  Uarr: "\u219F",
  Uarrocir: "\u2949",
  Ubrcy: "\u040E",
  Ubreve: "\u016C",
  Ucirc: "\xDB",
  Ucy: "\u0423",
  Udblac: "\u0170",
  Ufr: "\u{1D518}",
  Ugrave: "\xD9",
  Umacr: "\u016A",
  UnderBar: "_",
  UnderBrace: "\u23DF",
  UnderBracket: "\u23B5",
  UnderParenthesis: "\u23DD",
  Union: "\u22C3",
  UnionPlus: "\u228E",
  Uogon: "\u0172",
  Uopf: "\u{1D54C}",
  UpArrow: "\u2191",
  UpArrowBar: "\u2912",
  UpArrowDownArrow: "\u21C5",
  UpDownArrow: "\u2195",
  UpEquilibrium: "\u296E",
  UpTee: "\u22A5",
  UpTeeArrow: "\u21A5",
  Uparrow: "\u21D1",
  Updownarrow: "\u21D5",
  UpperLeftArrow: "\u2196",
  UpperRightArrow: "\u2197",
  Upsi: "\u03D2",
  Upsilon: "\u03A5",
  Uring: "\u016E",
  Uscr: "\u{1D4B0}",
  Utilde: "\u0168",
  Uuml: "\xDC",
  VDash: "\u22AB",
  Vbar: "\u2AEB",
  Vcy: "\u0412",
  Vdash: "\u22A9",
  Vdashl: "\u2AE6",
  Vee: "\u22C1",
  Verbar: "\u2016",
  Vert: "\u2016",
  VerticalBar: "\u2223",
  VerticalLine: "|",
  VerticalSeparator: "\u2758",
  VerticalTilde: "\u2240",
  VeryThinSpace: "\u200A",
  Vfr: "\u{1D519}",
  Vopf: "\u{1D54D}",
  Vscr: "\u{1D4B1}",
  Vvdash: "\u22AA",
  Wcirc: "\u0174",
  Wedge: "\u22C0",
  Wfr: "\u{1D51A}",
  Wopf: "\u{1D54E}",
  Wscr: "\u{1D4B2}",
  Xfr: "\u{1D51B}",
  Xi: "\u039E",
  Xopf: "\u{1D54F}",
  Xscr: "\u{1D4B3}",
  YAcy: "\u042F",
  YIcy: "\u0407",
  YUcy: "\u042E",
  Yacute: "\xDD",
  Ycirc: "\u0176",
  Ycy: "\u042B",
  Yfr: "\u{1D51C}",
  Yopf: "\u{1D550}",
  Yscr: "\u{1D4B4}",
  Yuml: "\u0178",
  ZHcy: "\u0416",
  Zacute: "\u0179",
  Zcaron: "\u017D",
  Zcy: "\u0417",
  Zdot: "\u017B",
  ZeroWidthSpace: "\u200B",
  Zeta: "\u0396",
  Zfr: "\u2128",
  Zopf: "\u2124",
  Zscr: "\u{1D4B5}",
  aacute: "\xE1",
  abreve: "\u0103",
  ac: "\u223E",
  acE: "\u223E\u0333",
  acd: "\u223F",
  acirc: "\xE2",
  acute: "\xB4",
  acy: "\u0430",
  aelig: "\xE6",
  af: "\u2061",
  afr: "\u{1D51E}",
  agrave: "\xE0",
  alefsym: "\u2135",
  aleph: "\u2135",
  alpha: "\u03B1",
  amacr: "\u0101",
  amalg: "\u2A3F",
  amp: "&",
  and: "\u2227",
  andand: "\u2A55",
  andd: "\u2A5C",
  andslope: "\u2A58",
  andv: "\u2A5A",
  ang: "\u2220",
  ange: "\u29A4",
  angle: "\u2220",
  angmsd: "\u2221",
  angmsdaa: "\u29A8",
  angmsdab: "\u29A9",
  angmsdac: "\u29AA",
  angmsdad: "\u29AB",
  angmsdae: "\u29AC",
  angmsdaf: "\u29AD",
  angmsdag: "\u29AE",
  angmsdah: "\u29AF",
  angrt: "\u221F",
  angrtvb: "\u22BE",
  angrtvbd: "\u299D",
  angsph: "\u2222",
  angst: "\xC5",
  angzarr: "\u237C",
  aogon: "\u0105",
  aopf: "\u{1D552}",
  ap: "\u2248",
  apE: "\u2A70",
  apacir: "\u2A6F",
  ape: "\u224A",
  apid: "\u224B",
  apos: "'",
  approx: "\u2248",
  approxeq: "\u224A",
  aring: "\xE5",
  ascr: "\u{1D4B6}",
  ast: "*",
  asymp: "\u2248",
  asympeq: "\u224D",
  atilde: "\xE3",
  auml: "\xE4",
  awconint: "\u2233",
  awint: "\u2A11",
  bNot: "\u2AED",
  backcong: "\u224C",
  backepsilon: "\u03F6",
  backprime: "\u2035",
  backsim: "\u223D",
  backsimeq: "\u22CD",
  barvee: "\u22BD",
  barwed: "\u2305",
  barwedge: "\u2305",
  bbrk: "\u23B5",
  bbrktbrk: "\u23B6",
  bcong: "\u224C",
  bcy: "\u0431",
  bdquo: "\u201E",
  becaus: "\u2235",
  because: "\u2235",
  bemptyv: "\u29B0",
  bepsi: "\u03F6",
  bernou: "\u212C",
  beta: "\u03B2",
  beth: "\u2136",
  between: "\u226C",
  bfr: "\u{1D51F}",
  bigcap: "\u22C2",
  bigcirc: "\u25EF",
  bigcup: "\u22C3",
  bigodot: "\u2A00",
  bigoplus: "\u2A01",
  bigotimes: "\u2A02",
  bigsqcup: "\u2A06",
  bigstar: "\u2605",
  bigtriangledown: "\u25BD",
  bigtriangleup: "\u25B3",
  biguplus: "\u2A04",
  bigvee: "\u22C1",
  bigwedge: "\u22C0",
  bkarow: "\u290D",
  blacklozenge: "\u29EB",
  blacksquare: "\u25AA",
  blacktriangle: "\u25B4",
  blacktriangledown: "\u25BE",
  blacktriangleleft: "\u25C2",
  blacktriangleright: "\u25B8",
  blank: "\u2423",
  blk12: "\u2592",
  blk14: "\u2591",
  blk34: "\u2593",
  block: "\u2588",
  bne: "=\u20E5",
  bnequiv: "\u2261\u20E5",
  bnot: "\u2310",
  bopf: "\u{1D553}",
  bot: "\u22A5",
  bottom: "\u22A5",
  bowtie: "\u22C8",
  boxDL: "\u2557",
  boxDR: "\u2554",
  boxDl: "\u2556",
  boxDr: "\u2553",
  boxH: "\u2550",
  boxHD: "\u2566",
  boxHU: "\u2569",
  boxHd: "\u2564",
  boxHu: "\u2567",
  boxUL: "\u255D",
  boxUR: "\u255A",
  boxUl: "\u255C",
  boxUr: "\u2559",
  boxV: "\u2551",
  boxVH: "\u256C",
  boxVL: "\u2563",
  boxVR: "\u2560",
  boxVh: "\u256B",
  boxVl: "\u2562",
  boxVr: "\u255F",
  boxbox: "\u29C9",
  boxdL: "\u2555",
  boxdR: "\u2552",
  boxdl: "\u2510",
  boxdr: "\u250C",
  boxh: "\u2500",
  boxhD: "\u2565",
  boxhU: "\u2568",
  boxhd: "\u252C",
  boxhu: "\u2534",
  boxminus: "\u229F",
  boxplus: "\u229E",
  boxtimes: "\u22A0",
  boxuL: "\u255B",
  boxuR: "\u2558",
  boxul: "\u2518",
  boxur: "\u2514",
  boxv: "\u2502",
  boxvH: "\u256A",
  boxvL: "\u2561",
  boxvR: "\u255E",
  boxvh: "\u253C",
  boxvl: "\u2524",
  boxvr: "\u251C",
  bprime: "\u2035",
  breve: "\u02D8",
  brvbar: "\xA6",
  bscr: "\u{1D4B7}",
  bsemi: "\u204F",
  bsim: "\u223D",
  bsime: "\u22CD",
  bsol: "\\",
  bsolb: "\u29C5",
  bsolhsub: "\u27C8",
  bull: "\u2022",
  bullet: "\u2022",
  bump: "\u224E",
  bumpE: "\u2AAE",
  bumpe: "\u224F",
  bumpeq: "\u224F",
  cacute: "\u0107",
  cap: "\u2229",
  capand: "\u2A44",
  capbrcup: "\u2A49",
  capcap: "\u2A4B",
  capcup: "\u2A47",
  capdot: "\u2A40",
  caps: "\u2229\uFE00",
  caret: "\u2041",
  caron: "\u02C7",
  ccaps: "\u2A4D",
  ccaron: "\u010D",
  ccedil: "\xE7",
  ccirc: "\u0109",
  ccups: "\u2A4C",
  ccupssm: "\u2A50",
  cdot: "\u010B",
  cedil: "\xB8",
  cemptyv: "\u29B2",
  cent: "\xA2",
  centerdot: "\xB7",
  cfr: "\u{1D520}",
  chcy: "\u0447",
  check: "\u2713",
  checkmark: "\u2713",
  chi: "\u03C7",
  cir: "\u25CB",
  cirE: "\u29C3",
  circ: "\u02C6",
  circeq: "\u2257",
  circlearrowleft: "\u21BA",
  circlearrowright: "\u21BB",
  circledR: "\xAE",
  circledS: "\u24C8",
  circledast: "\u229B",
  circledcirc: "\u229A",
  circleddash: "\u229D",
  cire: "\u2257",
  cirfnint: "\u2A10",
  cirmid: "\u2AEF",
  cirscir: "\u29C2",
  clubs: "\u2663",
  clubsuit: "\u2663",
  colon: ":",
  colone: "\u2254",
  coloneq: "\u2254",
  comma: ",",
  commat: "@",
  comp: "\u2201",
  compfn: "\u2218",
  complement: "\u2201",
  complexes: "\u2102",
  cong: "\u2245",
  congdot: "\u2A6D",
  conint: "\u222E",
  copf: "\u{1D554}",
  coprod: "\u2210",
  copy: "\xA9",
  copysr: "\u2117",
  crarr: "\u21B5",
  cross: "\u2717",
  cscr: "\u{1D4B8}",
  csub: "\u2ACF",
  csube: "\u2AD1",
  csup: "\u2AD0",
  csupe: "\u2AD2",
  ctdot: "\u22EF",
  cudarrl: "\u2938",
  cudarrr: "\u2935",
  cuepr: "\u22DE",
  cuesc: "\u22DF",
  cularr: "\u21B6",
  cularrp: "\u293D",
  cup: "\u222A",
  cupbrcap: "\u2A48",
  cupcap: "\u2A46",
  cupcup: "\u2A4A",
  cupdot: "\u228D",
  cupor: "\u2A45",
  cups: "\u222A\uFE00",
  curarr: "\u21B7",
  curarrm: "\u293C",
  curlyeqprec: "\u22DE",
  curlyeqsucc: "\u22DF",
  curlyvee: "\u22CE",
  curlywedge: "\u22CF",
  curren: "\xA4",
  curvearrowleft: "\u21B6",
  curvearrowright: "\u21B7",
  cuvee: "\u22CE",
  cuwed: "\u22CF",
  cwconint: "\u2232",
  cwint: "\u2231",
  cylcty: "\u232D",
  dArr: "\u21D3",
  dHar: "\u2965",
  dagger: "\u2020",
  daleth: "\u2138",
  darr: "\u2193",
  dash: "\u2010",
  dashv: "\u22A3",
  dbkarow: "\u290F",
  dblac: "\u02DD",
  dcaron: "\u010F",
  dcy: "\u0434",
  dd: "\u2146",
  ddagger: "\u2021",
  ddarr: "\u21CA",
  ddotseq: "\u2A77",
  deg: "\xB0",
  delta: "\u03B4",
  demptyv: "\u29B1",
  dfisht: "\u297F",
  dfr: "\u{1D521}",
  dharl: "\u21C3",
  dharr: "\u21C2",
  diam: "\u22C4",
  diamond: "\u22C4",
  diamondsuit: "\u2666",
  diams: "\u2666",
  die: "\xA8",
  digamma: "\u03DD",
  disin: "\u22F2",
  div: "\xF7",
  divide: "\xF7",
  divideontimes: "\u22C7",
  divonx: "\u22C7",
  djcy: "\u0452",
  dlcorn: "\u231E",
  dlcrop: "\u230D",
  dollar: "$",
  dopf: "\u{1D555}",
  dot: "\u02D9",
  doteq: "\u2250",
  doteqdot: "\u2251",
  dotminus: "\u2238",
  dotplus: "\u2214",
  dotsquare: "\u22A1",
  doublebarwedge: "\u2306",
  downarrow: "\u2193",
  downdownarrows: "\u21CA",
  downharpoonleft: "\u21C3",
  downharpoonright: "\u21C2",
  drbkarow: "\u2910",
  drcorn: "\u231F",
  drcrop: "\u230C",
  dscr: "\u{1D4B9}",
  dscy: "\u0455",
  dsol: "\u29F6",
  dstrok: "\u0111",
  dtdot: "\u22F1",
  dtri: "\u25BF",
  dtrif: "\u25BE",
  duarr: "\u21F5",
  duhar: "\u296F",
  dwangle: "\u29A6",
  dzcy: "\u045F",
  dzigrarr: "\u27FF",
  eDDot: "\u2A77",
  eDot: "\u2251",
  eacute: "\xE9",
  easter: "\u2A6E",
  ecaron: "\u011B",
  ecir: "\u2256",
  ecirc: "\xEA",
  ecolon: "\u2255",
  ecy: "\u044D",
  edot: "\u0117",
  ee: "\u2147",
  efDot: "\u2252",
  efr: "\u{1D522}",
  eg: "\u2A9A",
  egrave: "\xE8",
  egs: "\u2A96",
  egsdot: "\u2A98",
  el: "\u2A99",
  elinters: "\u23E7",
  ell: "\u2113",
  els: "\u2A95",
  elsdot: "\u2A97",
  emacr: "\u0113",
  empty: "\u2205",
  emptyset: "\u2205",
  emptyv: "\u2205",
  emsp13: "\u2004",
  emsp14: "\u2005",
  emsp: "\u2003",
  eng: "\u014B",
  ensp: "\u2002",
  eogon: "\u0119",
  eopf: "\u{1D556}",
  epar: "\u22D5",
  eparsl: "\u29E3",
  eplus: "\u2A71",
  epsi: "\u03B5",
  epsilon: "\u03B5",
  epsiv: "\u03F5",
  eqcirc: "\u2256",
  eqcolon: "\u2255",
  eqsim: "\u2242",
  eqslantgtr: "\u2A96",
  eqslantless: "\u2A95",
  equals: "=",
  equest: "\u225F",
  equiv: "\u2261",
  equivDD: "\u2A78",
  eqvparsl: "\u29E5",
  erDot: "\u2253",
  erarr: "\u2971",
  escr: "\u212F",
  esdot: "\u2250",
  esim: "\u2242",
  eta: "\u03B7",
  eth: "\xF0",
  euml: "\xEB",
  euro: "\u20AC",
  excl: "!",
  exist: "\u2203",
  expectation: "\u2130",
  exponentiale: "\u2147",
  fallingdotseq: "\u2252",
  fcy: "\u0444",
  female: "\u2640",
  ffilig: "\uFB03",
  fflig: "\uFB00",
  ffllig: "\uFB04",
  ffr: "\u{1D523}",
  filig: "\uFB01",
  fjlig: "fj",
  flat: "\u266D",
  fllig: "\uFB02",
  fltns: "\u25B1",
  fnof: "\u0192",
  fopf: "\u{1D557}",
  forall: "\u2200",
  fork: "\u22D4",
  forkv: "\u2AD9",
  fpartint: "\u2A0D",
  frac12: "\xBD",
  frac13: "\u2153",
  frac14: "\xBC",
  frac15: "\u2155",
  frac16: "\u2159",
  frac18: "\u215B",
  frac23: "\u2154",
  frac25: "\u2156",
  frac34: "\xBE",
  frac35: "\u2157",
  frac38: "\u215C",
  frac45: "\u2158",
  frac56: "\u215A",
  frac58: "\u215D",
  frac78: "\u215E",
  frasl: "\u2044",
  frown: "\u2322",
  fscr: "\u{1D4BB}",
  gE: "\u2267",
  gEl: "\u2A8C",
  gacute: "\u01F5",
  gamma: "\u03B3",
  gammad: "\u03DD",
  gap: "\u2A86",
  gbreve: "\u011F",
  gcirc: "\u011D",
  gcy: "\u0433",
  gdot: "\u0121",
  ge: "\u2265",
  gel: "\u22DB",
  geq: "\u2265",
  geqq: "\u2267",
  geqslant: "\u2A7E",
  ges: "\u2A7E",
  gescc: "\u2AA9",
  gesdot: "\u2A80",
  gesdoto: "\u2A82",
  gesdotol: "\u2A84",
  gesl: "\u22DB\uFE00",
  gesles: "\u2A94",
  gfr: "\u{1D524}",
  gg: "\u226B",
  ggg: "\u22D9",
  gimel: "\u2137",
  gjcy: "\u0453",
  gl: "\u2277",
  glE: "\u2A92",
  gla: "\u2AA5",
  glj: "\u2AA4",
  gnE: "\u2269",
  gnap: "\u2A8A",
  gnapprox: "\u2A8A",
  gne: "\u2A88",
  gneq: "\u2A88",
  gneqq: "\u2269",
  gnsim: "\u22E7",
  gopf: "\u{1D558}",
  grave: "`",
  gscr: "\u210A",
  gsim: "\u2273",
  gsime: "\u2A8E",
  gsiml: "\u2A90",
  gt: ">",
  gtcc: "\u2AA7",
  gtcir: "\u2A7A",
  gtdot: "\u22D7",
  gtlPar: "\u2995",
  gtquest: "\u2A7C",
  gtrapprox: "\u2A86",
  gtrarr: "\u2978",
  gtrdot: "\u22D7",
  gtreqless: "\u22DB",
  gtreqqless: "\u2A8C",
  gtrless: "\u2277",
  gtrsim: "\u2273",
  gvertneqq: "\u2269\uFE00",
  gvnE: "\u2269\uFE00",
  hArr: "\u21D4",
  hairsp: "\u200A",
  half: "\xBD",
  hamilt: "\u210B",
  hardcy: "\u044A",
  harr: "\u2194",
  harrcir: "\u2948",
  harrw: "\u21AD",
  hbar: "\u210F",
  hcirc: "\u0125",
  hearts: "\u2665",
  heartsuit: "\u2665",
  hellip: "\u2026",
  hercon: "\u22B9",
  hfr: "\u{1D525}",
  hksearow: "\u2925",
  hkswarow: "\u2926",
  hoarr: "\u21FF",
  homtht: "\u223B",
  hookleftarrow: "\u21A9",
  hookrightarrow: "\u21AA",
  hopf: "\u{1D559}",
  horbar: "\u2015",
  hscr: "\u{1D4BD}",
  hslash: "\u210F",
  hstrok: "\u0127",
  hybull: "\u2043",
  hyphen: "\u2010",
  iacute: "\xED",
  ic: "\u2063",
  icirc: "\xEE",
  icy: "\u0438",
  iecy: "\u0435",
  iexcl: "\xA1",
  iff: "\u21D4",
  ifr: "\u{1D526}",
  igrave: "\xEC",
  ii: "\u2148",
  iiiint: "\u2A0C",
  iiint: "\u222D",
  iinfin: "\u29DC",
  iiota: "\u2129",
  ijlig: "\u0133",
  imacr: "\u012B",
  image: "\u2111",
  imagline: "\u2110",
  imagpart: "\u2111",
  imath: "\u0131",
  imof: "\u22B7",
  imped: "\u01B5",
  in: "\u2208",
  incare: "\u2105",
  infin: "\u221E",
  infintie: "\u29DD",
  inodot: "\u0131",
  int: "\u222B",
  intcal: "\u22BA",
  integers: "\u2124",
  intercal: "\u22BA",
  intlarhk: "\u2A17",
  intprod: "\u2A3C",
  iocy: "\u0451",
  iogon: "\u012F",
  iopf: "\u{1D55A}",
  iota: "\u03B9",
  iprod: "\u2A3C",
  iquest: "\xBF",
  iscr: "\u{1D4BE}",
  isin: "\u2208",
  isinE: "\u22F9",
  isindot: "\u22F5",
  isins: "\u22F4",
  isinsv: "\u22F3",
  isinv: "\u2208",
  it: "\u2062",
  itilde: "\u0129",
  iukcy: "\u0456",
  iuml: "\xEF",
  jcirc: "\u0135",
  jcy: "\u0439",
  jfr: "\u{1D527}",
  jmath: "\u0237",
  jopf: "\u{1D55B}",
  jscr: "\u{1D4BF}",
  jsercy: "\u0458",
  jukcy: "\u0454",
  kappa: "\u03BA",
  kappav: "\u03F0",
  kcedil: "\u0137",
  kcy: "\u043A",
  kfr: "\u{1D528}",
  kgreen: "\u0138",
  khcy: "\u0445",
  kjcy: "\u045C",
  kopf: "\u{1D55C}",
  kscr: "\u{1D4C0}",
  lAarr: "\u21DA",
  lArr: "\u21D0",
  lAtail: "\u291B",
  lBarr: "\u290E",
  lE: "\u2266",
  lEg: "\u2A8B",
  lHar: "\u2962",
  lacute: "\u013A",
  laemptyv: "\u29B4",
  lagran: "\u2112",
  lambda: "\u03BB",
  lang: "\u27E8",
  langd: "\u2991",
  langle: "\u27E8",
  lap: "\u2A85",
  laquo: "\xAB",
  larr: "\u2190",
  larrb: "\u21E4",
  larrbfs: "\u291F",
  larrfs: "\u291D",
  larrhk: "\u21A9",
  larrlp: "\u21AB",
  larrpl: "\u2939",
  larrsim: "\u2973",
  larrtl: "\u21A2",
  lat: "\u2AAB",
  latail: "\u2919",
  late: "\u2AAD",
  lates: "\u2AAD\uFE00",
  lbarr: "\u290C",
  lbbrk: "\u2772",
  lbrace: "{",
  lbrack: "[",
  lbrke: "\u298B",
  lbrksld: "\u298F",
  lbrkslu: "\u298D",
  lcaron: "\u013E",
  lcedil: "\u013C",
  lceil: "\u2308",
  lcub: "{",
  lcy: "\u043B",
  ldca: "\u2936",
  ldquo: "\u201C",
  ldquor: "\u201E",
  ldrdhar: "\u2967",
  ldrushar: "\u294B",
  ldsh: "\u21B2",
  le: "\u2264",
  leftarrow: "\u2190",
  leftarrowtail: "\u21A2",
  leftharpoondown: "\u21BD",
  leftharpoonup: "\u21BC",
  leftleftarrows: "\u21C7",
  leftrightarrow: "\u2194",
  leftrightarrows: "\u21C6",
  leftrightharpoons: "\u21CB",
  leftrightsquigarrow: "\u21AD",
  leftthreetimes: "\u22CB",
  leg: "\u22DA",
  leq: "\u2264",
  leqq: "\u2266",
  leqslant: "\u2A7D",
  les: "\u2A7D",
  lescc: "\u2AA8",
  lesdot: "\u2A7F",
  lesdoto: "\u2A81",
  lesdotor: "\u2A83",
  lesg: "\u22DA\uFE00",
  lesges: "\u2A93",
  lessapprox: "\u2A85",
  lessdot: "\u22D6",
  lesseqgtr: "\u22DA",
  lesseqqgtr: "\u2A8B",
  lessgtr: "\u2276",
  lesssim: "\u2272",
  lfisht: "\u297C",
  lfloor: "\u230A",
  lfr: "\u{1D529}",
  lg: "\u2276",
  lgE: "\u2A91",
  lhard: "\u21BD",
  lharu: "\u21BC",
  lharul: "\u296A",
  lhblk: "\u2584",
  ljcy: "\u0459",
  ll: "\u226A",
  llarr: "\u21C7",
  llcorner: "\u231E",
  llhard: "\u296B",
  lltri: "\u25FA",
  lmidot: "\u0140",
  lmoust: "\u23B0",
  lmoustache: "\u23B0",
  lnE: "\u2268",
  lnap: "\u2A89",
  lnapprox: "\u2A89",
  lne: "\u2A87",
  lneq: "\u2A87",
  lneqq: "\u2268",
  lnsim: "\u22E6",
  loang: "\u27EC",
  loarr: "\u21FD",
  lobrk: "\u27E6",
  longleftarrow: "\u27F5",
  longleftrightarrow: "\u27F7",
  longmapsto: "\u27FC",
  longrightarrow: "\u27F6",
  looparrowleft: "\u21AB",
  looparrowright: "\u21AC",
  lopar: "\u2985",
  lopf: "\u{1D55D}",
  loplus: "\u2A2D",
  lotimes: "\u2A34",
  lowast: "\u2217",
  lowbar: "_",
  loz: "\u25CA",
  lozenge: "\u25CA",
  lozf: "\u29EB",
  lpar: "(",
  lparlt: "\u2993",
  lrarr: "\u21C6",
  lrcorner: "\u231F",
  lrhar: "\u21CB",
  lrhard: "\u296D",
  lrm: "\u200E",
  lrtri: "\u22BF",
  lsaquo: "\u2039",
  lscr: "\u{1D4C1}",
  lsh: "\u21B0",
  lsim: "\u2272",
  lsime: "\u2A8D",
  lsimg: "\u2A8F",
  lsqb: "[",
  lsquo: "\u2018",
  lsquor: "\u201A",
  lstrok: "\u0142",
  lt: "<",
  ltcc: "\u2AA6",
  ltcir: "\u2A79",
  ltdot: "\u22D6",
  lthree: "\u22CB",
  ltimes: "\u22C9",
  ltlarr: "\u2976",
  ltquest: "\u2A7B",
  ltrPar: "\u2996",
  ltri: "\u25C3",
  ltrie: "\u22B4",
  ltrif: "\u25C2",
  lurdshar: "\u294A",
  luruhar: "\u2966",
  lvertneqq: "\u2268\uFE00",
  lvnE: "\u2268\uFE00",
  mDDot: "\u223A",
  macr: "\xAF",
  male: "\u2642",
  malt: "\u2720",
  maltese: "\u2720",
  map: "\u21A6",
  mapsto: "\u21A6",
  mapstodown: "\u21A7",
  mapstoleft: "\u21A4",
  mapstoup: "\u21A5",
  marker: "\u25AE",
  mcomma: "\u2A29",
  mcy: "\u043C",
  mdash: "\u2014",
  measuredangle: "\u2221",
  mfr: "\u{1D52A}",
  mho: "\u2127",
  micro: "\xB5",
  mid: "\u2223",
  midast: "*",
  midcir: "\u2AF0",
  middot: "\xB7",
  minus: "\u2212",
  minusb: "\u229F",
  minusd: "\u2238",
  minusdu: "\u2A2A",
  mlcp: "\u2ADB",
  mldr: "\u2026",
  mnplus: "\u2213",
  models: "\u22A7",
  mopf: "\u{1D55E}",
  mp: "\u2213",
  mscr: "\u{1D4C2}",
  mstpos: "\u223E",
  mu: "\u03BC",
  multimap: "\u22B8",
  mumap: "\u22B8",
  nGg: "\u22D9\u0338",
  nGt: "\u226B\u20D2",
  nGtv: "\u226B\u0338",
  nLeftarrow: "\u21CD",
  nLeftrightarrow: "\u21CE",
  nLl: "\u22D8\u0338",
  nLt: "\u226A\u20D2",
  nLtv: "\u226A\u0338",
  nRightarrow: "\u21CF",
  nVDash: "\u22AF",
  nVdash: "\u22AE",
  nabla: "\u2207",
  nacute: "\u0144",
  nang: "\u2220\u20D2",
  nap: "\u2249",
  napE: "\u2A70\u0338",
  napid: "\u224B\u0338",
  napos: "\u0149",
  napprox: "\u2249",
  natur: "\u266E",
  natural: "\u266E",
  naturals: "\u2115",
  nbsp: "\xA0",
  nbump: "\u224E\u0338",
  nbumpe: "\u224F\u0338",
  ncap: "\u2A43",
  ncaron: "\u0148",
  ncedil: "\u0146",
  ncong: "\u2247",
  ncongdot: "\u2A6D\u0338",
  ncup: "\u2A42",
  ncy: "\u043D",
  ndash: "\u2013",
  ne: "\u2260",
  neArr: "\u21D7",
  nearhk: "\u2924",
  nearr: "\u2197",
  nearrow: "\u2197",
  nedot: "\u2250\u0338",
  nequiv: "\u2262",
  nesear: "\u2928",
  nesim: "\u2242\u0338",
  nexist: "\u2204",
  nexists: "\u2204",
  nfr: "\u{1D52B}",
  ngE: "\u2267\u0338",
  nge: "\u2271",
  ngeq: "\u2271",
  ngeqq: "\u2267\u0338",
  ngeqslant: "\u2A7E\u0338",
  nges: "\u2A7E\u0338",
  ngsim: "\u2275",
  ngt: "\u226F",
  ngtr: "\u226F",
  nhArr: "\u21CE",
  nharr: "\u21AE",
  nhpar: "\u2AF2",
  ni: "\u220B",
  nis: "\u22FC",
  nisd: "\u22FA",
  niv: "\u220B",
  njcy: "\u045A",
  nlArr: "\u21CD",
  nlE: "\u2266\u0338",
  nlarr: "\u219A",
  nldr: "\u2025",
  nle: "\u2270",
  nleftarrow: "\u219A",
  nleftrightarrow: "\u21AE",
  nleq: "\u2270",
  nleqq: "\u2266\u0338",
  nleqslant: "\u2A7D\u0338",
  nles: "\u2A7D\u0338",
  nless: "\u226E",
  nlsim: "\u2274",
  nlt: "\u226E",
  nltri: "\u22EA",
  nltrie: "\u22EC",
  nmid: "\u2224",
  nopf: "\u{1D55F}",
  not: "\xAC",
  notin: "\u2209",
  notinE: "\u22F9\u0338",
  notindot: "\u22F5\u0338",
  notinva: "\u2209",
  notinvb: "\u22F7",
  notinvc: "\u22F6",
  notni: "\u220C",
  notniva: "\u220C",
  notnivb: "\u22FE",
  notnivc: "\u22FD",
  npar: "\u2226",
  nparallel: "\u2226",
  nparsl: "\u2AFD\u20E5",
  npart: "\u2202\u0338",
  npolint: "\u2A14",
  npr: "\u2280",
  nprcue: "\u22E0",
  npre: "\u2AAF\u0338",
  nprec: "\u2280",
  npreceq: "\u2AAF\u0338",
  nrArr: "\u21CF",
  nrarr: "\u219B",
  nrarrc: "\u2933\u0338",
  nrarrw: "\u219D\u0338",
  nrightarrow: "\u219B",
  nrtri: "\u22EB",
  nrtrie: "\u22ED",
  nsc: "\u2281",
  nsccue: "\u22E1",
  nsce: "\u2AB0\u0338",
  nscr: "\u{1D4C3}",
  nshortmid: "\u2224",
  nshortparallel: "\u2226",
  nsim: "\u2241",
  nsime: "\u2244",
  nsimeq: "\u2244",
  nsmid: "\u2224",
  nspar: "\u2226",
  nsqsube: "\u22E2",
  nsqsupe: "\u22E3",
  nsub: "\u2284",
  nsubE: "\u2AC5\u0338",
  nsube: "\u2288",
  nsubset: "\u2282\u20D2",
  nsubseteq: "\u2288",
  nsubseteqq: "\u2AC5\u0338",
  nsucc: "\u2281",
  nsucceq: "\u2AB0\u0338",
  nsup: "\u2285",
  nsupE: "\u2AC6\u0338",
  nsupe: "\u2289",
  nsupset: "\u2283\u20D2",
  nsupseteq: "\u2289",
  nsupseteqq: "\u2AC6\u0338",
  ntgl: "\u2279",
  ntilde: "\xF1",
  ntlg: "\u2278",
  ntriangleleft: "\u22EA",
  ntrianglelefteq: "\u22EC",
  ntriangleright: "\u22EB",
  ntrianglerighteq: "\u22ED",
  nu: "\u03BD",
  num: "#",
  numero: "\u2116",
  numsp: "\u2007",
  nvDash: "\u22AD",
  nvHarr: "\u2904",
  nvap: "\u224D\u20D2",
  nvdash: "\u22AC",
  nvge: "\u2265\u20D2",
  nvgt: ">\u20D2",
  nvinfin: "\u29DE",
  nvlArr: "\u2902",
  nvle: "\u2264\u20D2",
  nvlt: "<\u20D2",
  nvltrie: "\u22B4\u20D2",
  nvrArr: "\u2903",
  nvrtrie: "\u22B5\u20D2",
  nvsim: "\u223C\u20D2",
  nwArr: "\u21D6",
  nwarhk: "\u2923",
  nwarr: "\u2196",
  nwarrow: "\u2196",
  nwnear: "\u2927",
  oS: "\u24C8",
  oacute: "\xF3",
  oast: "\u229B",
  ocir: "\u229A",
  ocirc: "\xF4",
  ocy: "\u043E",
  odash: "\u229D",
  odblac: "\u0151",
  odiv: "\u2A38",
  odot: "\u2299",
  odsold: "\u29BC",
  oelig: "\u0153",
  ofcir: "\u29BF",
  ofr: "\u{1D52C}",
  ogon: "\u02DB",
  ograve: "\xF2",
  ogt: "\u29C1",
  ohbar: "\u29B5",
  ohm: "\u03A9",
  oint: "\u222E",
  olarr: "\u21BA",
  olcir: "\u29BE",
  olcross: "\u29BB",
  oline: "\u203E",
  olt: "\u29C0",
  omacr: "\u014D",
  omega: "\u03C9",
  omicron: "\u03BF",
  omid: "\u29B6",
  ominus: "\u2296",
  oopf: "\u{1D560}",
  opar: "\u29B7",
  operp: "\u29B9",
  oplus: "\u2295",
  or: "\u2228",
  orarr: "\u21BB",
  ord: "\u2A5D",
  order: "\u2134",
  orderof: "\u2134",
  ordf: "\xAA",
  ordm: "\xBA",
  origof: "\u22B6",
  oror: "\u2A56",
  orslope: "\u2A57",
  orv: "\u2A5B",
  oscr: "\u2134",
  oslash: "\xF8",
  osol: "\u2298",
  otilde: "\xF5",
  otimes: "\u2297",
  otimesas: "\u2A36",
  ouml: "\xF6",
  ovbar: "\u233D",
  par: "\u2225",
  para: "\xB6",
  parallel: "\u2225",
  parsim: "\u2AF3",
  parsl: "\u2AFD",
  part: "\u2202",
  pcy: "\u043F",
  percnt: "%",
  period: ".",
  permil: "\u2030",
  perp: "\u22A5",
  pertenk: "\u2031",
  pfr: "\u{1D52D}",
  phi: "\u03C6",
  phiv: "\u03D5",
  phmmat: "\u2133",
  phone: "\u260E",
  pi: "\u03C0",
  pitchfork: "\u22D4",
  piv: "\u03D6",
  planck: "\u210F",
  planckh: "\u210E",
  plankv: "\u210F",
  plus: "+",
  plusacir: "\u2A23",
  plusb: "\u229E",
  pluscir: "\u2A22",
  plusdo: "\u2214",
  plusdu: "\u2A25",
  pluse: "\u2A72",
  plusmn: "\xB1",
  plussim: "\u2A26",
  plustwo: "\u2A27",
  pm: "\xB1",
  pointint: "\u2A15",
  popf: "\u{1D561}",
  pound: "\xA3",
  pr: "\u227A",
  prE: "\u2AB3",
  prap: "\u2AB7",
  prcue: "\u227C",
  pre: "\u2AAF",
  prec: "\u227A",
  precapprox: "\u2AB7",
  preccurlyeq: "\u227C",
  preceq: "\u2AAF",
  precnapprox: "\u2AB9",
  precneqq: "\u2AB5",
  precnsim: "\u22E8",
  precsim: "\u227E",
  prime: "\u2032",
  primes: "\u2119",
  prnE: "\u2AB5",
  prnap: "\u2AB9",
  prnsim: "\u22E8",
  prod: "\u220F",
  profalar: "\u232E",
  profline: "\u2312",
  profsurf: "\u2313",
  prop: "\u221D",
  propto: "\u221D",
  prsim: "\u227E",
  prurel: "\u22B0",
  pscr: "\u{1D4C5}",
  psi: "\u03C8",
  puncsp: "\u2008",
  qfr: "\u{1D52E}",
  qint: "\u2A0C",
  qopf: "\u{1D562}",
  qprime: "\u2057",
  qscr: "\u{1D4C6}",
  quaternions: "\u210D",
  quatint: "\u2A16",
  quest: "?",
  questeq: "\u225F",
  quot: '"',
  rAarr: "\u21DB",
  rArr: "\u21D2",
  rAtail: "\u291C",
  rBarr: "\u290F",
  rHar: "\u2964",
  race: "\u223D\u0331",
  racute: "\u0155",
  radic: "\u221A",
  raemptyv: "\u29B3",
  rang: "\u27E9",
  rangd: "\u2992",
  range: "\u29A5",
  rangle: "\u27E9",
  raquo: "\xBB",
  rarr: "\u2192",
  rarrap: "\u2975",
  rarrb: "\u21E5",
  rarrbfs: "\u2920",
  rarrc: "\u2933",
  rarrfs: "\u291E",
  rarrhk: "\u21AA",
  rarrlp: "\u21AC",
  rarrpl: "\u2945",
  rarrsim: "\u2974",
  rarrtl: "\u21A3",
  rarrw: "\u219D",
  ratail: "\u291A",
  ratio: "\u2236",
  rationals: "\u211A",
  rbarr: "\u290D",
  rbbrk: "\u2773",
  rbrace: "}",
  rbrack: "]",
  rbrke: "\u298C",
  rbrksld: "\u298E",
  rbrkslu: "\u2990",
  rcaron: "\u0159",
  rcedil: "\u0157",
  rceil: "\u2309",
  rcub: "}",
  rcy: "\u0440",
  rdca: "\u2937",
  rdldhar: "\u2969",
  rdquo: "\u201D",
  rdquor: "\u201D",
  rdsh: "\u21B3",
  real: "\u211C",
  realine: "\u211B",
  realpart: "\u211C",
  reals: "\u211D",
  rect: "\u25AD",
  reg: "\xAE",
  rfisht: "\u297D",
  rfloor: "\u230B",
  rfr: "\u{1D52F}",
  rhard: "\u21C1",
  rharu: "\u21C0",
  rharul: "\u296C",
  rho: "\u03C1",
  rhov: "\u03F1",
  rightarrow: "\u2192",
  rightarrowtail: "\u21A3",
  rightharpoondown: "\u21C1",
  rightharpoonup: "\u21C0",
  rightleftarrows: "\u21C4",
  rightleftharpoons: "\u21CC",
  rightrightarrows: "\u21C9",
  rightsquigarrow: "\u219D",
  rightthreetimes: "\u22CC",
  ring: "\u02DA",
  risingdotseq: "\u2253",
  rlarr: "\u21C4",
  rlhar: "\u21CC",
  rlm: "\u200F",
  rmoust: "\u23B1",
  rmoustache: "\u23B1",
  rnmid: "\u2AEE",
  roang: "\u27ED",
  roarr: "\u21FE",
  robrk: "\u27E7",
  ropar: "\u2986",
  ropf: "\u{1D563}",
  roplus: "\u2A2E",
  rotimes: "\u2A35",
  rpar: ")",
  rpargt: "\u2994",
  rppolint: "\u2A12",
  rrarr: "\u21C9",
  rsaquo: "\u203A",
  rscr: "\u{1D4C7}",
  rsh: "\u21B1",
  rsqb: "]",
  rsquo: "\u2019",
  rsquor: "\u2019",
  rthree: "\u22CC",
  rtimes: "\u22CA",
  rtri: "\u25B9",
  rtrie: "\u22B5",
  rtrif: "\u25B8",
  rtriltri: "\u29CE",
  ruluhar: "\u2968",
  rx: "\u211E",
  sacute: "\u015B",
  sbquo: "\u201A",
  sc: "\u227B",
  scE: "\u2AB4",
  scap: "\u2AB8",
  scaron: "\u0161",
  sccue: "\u227D",
  sce: "\u2AB0",
  scedil: "\u015F",
  scirc: "\u015D",
  scnE: "\u2AB6",
  scnap: "\u2ABA",
  scnsim: "\u22E9",
  scpolint: "\u2A13",
  scsim: "\u227F",
  scy: "\u0441",
  sdot: "\u22C5",
  sdotb: "\u22A1",
  sdote: "\u2A66",
  seArr: "\u21D8",
  searhk: "\u2925",
  searr: "\u2198",
  searrow: "\u2198",
  sect: "\xA7",
  semi: ";",
  seswar: "\u2929",
  setminus: "\u2216",
  setmn: "\u2216",
  sext: "\u2736",
  sfr: "\u{1D530}",
  sfrown: "\u2322",
  sharp: "\u266F",
  shchcy: "\u0449",
  shcy: "\u0448",
  shortmid: "\u2223",
  shortparallel: "\u2225",
  shy: "\xAD",
  sigma: "\u03C3",
  sigmaf: "\u03C2",
  sigmav: "\u03C2",
  sim: "\u223C",
  simdot: "\u2A6A",
  sime: "\u2243",
  simeq: "\u2243",
  simg: "\u2A9E",
  simgE: "\u2AA0",
  siml: "\u2A9D",
  simlE: "\u2A9F",
  simne: "\u2246",
  simplus: "\u2A24",
  simrarr: "\u2972",
  slarr: "\u2190",
  smallsetminus: "\u2216",
  smashp: "\u2A33",
  smeparsl: "\u29E4",
  smid: "\u2223",
  smile: "\u2323",
  smt: "\u2AAA",
  smte: "\u2AAC",
  smtes: "\u2AAC\uFE00",
  softcy: "\u044C",
  sol: "/",
  solb: "\u29C4",
  solbar: "\u233F",
  sopf: "\u{1D564}",
  spades: "\u2660",
  spadesuit: "\u2660",
  spar: "\u2225",
  sqcap: "\u2293",
  sqcaps: "\u2293\uFE00",
  sqcup: "\u2294",
  sqcups: "\u2294\uFE00",
  sqsub: "\u228F",
  sqsube: "\u2291",
  sqsubset: "\u228F",
  sqsubseteq: "\u2291",
  sqsup: "\u2290",
  sqsupe: "\u2292",
  sqsupset: "\u2290",
  sqsupseteq: "\u2292",
  squ: "\u25A1",
  square: "\u25A1",
  squarf: "\u25AA",
  squf: "\u25AA",
  srarr: "\u2192",
  sscr: "\u{1D4C8}",
  ssetmn: "\u2216",
  ssmile: "\u2323",
  sstarf: "\u22C6",
  star: "\u2606",
  starf: "\u2605",
  straightepsilon: "\u03F5",
  straightphi: "\u03D5",
  strns: "\xAF",
  sub: "\u2282",
  subE: "\u2AC5",
  subdot: "\u2ABD",
  sube: "\u2286",
  subedot: "\u2AC3",
  submult: "\u2AC1",
  subnE: "\u2ACB",
  subne: "\u228A",
  subplus: "\u2ABF",
  subrarr: "\u2979",
  subset: "\u2282",
  subseteq: "\u2286",
  subseteqq: "\u2AC5",
  subsetneq: "\u228A",
  subsetneqq: "\u2ACB",
  subsim: "\u2AC7",
  subsub: "\u2AD5",
  subsup: "\u2AD3",
  succ: "\u227B",
  succapprox: "\u2AB8",
  succcurlyeq: "\u227D",
  succeq: "\u2AB0",
  succnapprox: "\u2ABA",
  succneqq: "\u2AB6",
  succnsim: "\u22E9",
  succsim: "\u227F",
  sum: "\u2211",
  sung: "\u266A",
  sup1: "\xB9",
  sup2: "\xB2",
  sup3: "\xB3",
  sup: "\u2283",
  supE: "\u2AC6",
  supdot: "\u2ABE",
  supdsub: "\u2AD8",
  supe: "\u2287",
  supedot: "\u2AC4",
  suphsol: "\u27C9",
  suphsub: "\u2AD7",
  suplarr: "\u297B",
  supmult: "\u2AC2",
  supnE: "\u2ACC",
  supne: "\u228B",
  supplus: "\u2AC0",
  supset: "\u2283",
  supseteq: "\u2287",
  supseteqq: "\u2AC6",
  supsetneq: "\u228B",
  supsetneqq: "\u2ACC",
  supsim: "\u2AC8",
  supsub: "\u2AD4",
  supsup: "\u2AD6",
  swArr: "\u21D9",
  swarhk: "\u2926",
  swarr: "\u2199",
  swarrow: "\u2199",
  swnwar: "\u292A",
  szlig: "\xDF",
  target: "\u2316",
  tau: "\u03C4",
  tbrk: "\u23B4",
  tcaron: "\u0165",
  tcedil: "\u0163",
  tcy: "\u0442",
  tdot: "\u20DB",
  telrec: "\u2315",
  tfr: "\u{1D531}",
  there4: "\u2234",
  therefore: "\u2234",
  theta: "\u03B8",
  thetasym: "\u03D1",
  thetav: "\u03D1",
  thickapprox: "\u2248",
  thicksim: "\u223C",
  thinsp: "\u2009",
  thkap: "\u2248",
  thksim: "\u223C",
  thorn: "\xFE",
  tilde: "\u02DC",
  times: "\xD7",
  timesb: "\u22A0",
  timesbar: "\u2A31",
  timesd: "\u2A30",
  tint: "\u222D",
  toea: "\u2928",
  top: "\u22A4",
  topbot: "\u2336",
  topcir: "\u2AF1",
  topf: "\u{1D565}",
  topfork: "\u2ADA",
  tosa: "\u2929",
  tprime: "\u2034",
  trade: "\u2122",
  triangle: "\u25B5",
  triangledown: "\u25BF",
  triangleleft: "\u25C3",
  trianglelefteq: "\u22B4",
  triangleq: "\u225C",
  triangleright: "\u25B9",
  trianglerighteq: "\u22B5",
  tridot: "\u25EC",
  trie: "\u225C",
  triminus: "\u2A3A",
  triplus: "\u2A39",
  trisb: "\u29CD",
  tritime: "\u2A3B",
  trpezium: "\u23E2",
  tscr: "\u{1D4C9}",
  tscy: "\u0446",
  tshcy: "\u045B",
  tstrok: "\u0167",
  twixt: "\u226C",
  twoheadleftarrow: "\u219E",
  twoheadrightarrow: "\u21A0",
  uArr: "\u21D1",
  uHar: "\u2963",
  uacute: "\xFA",
  uarr: "\u2191",
  ubrcy: "\u045E",
  ubreve: "\u016D",
  ucirc: "\xFB",
  ucy: "\u0443",
  udarr: "\u21C5",
  udblac: "\u0171",
  udhar: "\u296E",
  ufisht: "\u297E",
  ufr: "\u{1D532}",
  ugrave: "\xF9",
  uharl: "\u21BF",
  uharr: "\u21BE",
  uhblk: "\u2580",
  ulcorn: "\u231C",
  ulcorner: "\u231C",
  ulcrop: "\u230F",
  ultri: "\u25F8",
  umacr: "\u016B",
  uml: "\xA8",
  uogon: "\u0173",
  uopf: "\u{1D566}",
  uparrow: "\u2191",
  updownarrow: "\u2195",
  upharpoonleft: "\u21BF",
  upharpoonright: "\u21BE",
  uplus: "\u228E",
  upsi: "\u03C5",
  upsih: "\u03D2",
  upsilon: "\u03C5",
  upuparrows: "\u21C8",
  urcorn: "\u231D",
  urcorner: "\u231D",
  urcrop: "\u230E",
  uring: "\u016F",
  urtri: "\u25F9",
  uscr: "\u{1D4CA}",
  utdot: "\u22F0",
  utilde: "\u0169",
  utri: "\u25B5",
  utrif: "\u25B4",
  uuarr: "\u21C8",
  uuml: "\xFC",
  uwangle: "\u29A7",
  vArr: "\u21D5",
  vBar: "\u2AE8",
  vBarv: "\u2AE9",
  vDash: "\u22A8",
  vangrt: "\u299C",
  varepsilon: "\u03F5",
  varkappa: "\u03F0",
  varnothing: "\u2205",
  varphi: "\u03D5",
  varpi: "\u03D6",
  varpropto: "\u221D",
  varr: "\u2195",
  varrho: "\u03F1",
  varsigma: "\u03C2",
  varsubsetneq: "\u228A\uFE00",
  varsubsetneqq: "\u2ACB\uFE00",
  varsupsetneq: "\u228B\uFE00",
  varsupsetneqq: "\u2ACC\uFE00",
  vartheta: "\u03D1",
  vartriangleleft: "\u22B2",
  vartriangleright: "\u22B3",
  vcy: "\u0432",
  vdash: "\u22A2",
  vee: "\u2228",
  veebar: "\u22BB",
  veeeq: "\u225A",
  vellip: "\u22EE",
  verbar: "|",
  vert: "|",
  vfr: "\u{1D533}",
  vltri: "\u22B2",
  vnsub: "\u2282\u20D2",
  vnsup: "\u2283\u20D2",
  vopf: "\u{1D567}",
  vprop: "\u221D",
  vrtri: "\u22B3",
  vscr: "\u{1D4CB}",
  vsubnE: "\u2ACB\uFE00",
  vsubne: "\u228A\uFE00",
  vsupnE: "\u2ACC\uFE00",
  vsupne: "\u228B\uFE00",
  vzigzag: "\u299A",
  wcirc: "\u0175",
  wedbar: "\u2A5F",
  wedge: "\u2227",
  wedgeq: "\u2259",
  weierp: "\u2118",
  wfr: "\u{1D534}",
  wopf: "\u{1D568}",
  wp: "\u2118",
  wr: "\u2240",
  wreath: "\u2240",
  wscr: "\u{1D4CC}",
  xcap: "\u22C2",
  xcirc: "\u25EF",
  xcup: "\u22C3",
  xdtri: "\u25BD",
  xfr: "\u{1D535}",
  xhArr: "\u27FA",
  xharr: "\u27F7",
  xi: "\u03BE",
  xlArr: "\u27F8",
  xlarr: "\u27F5",
  xmap: "\u27FC",
  xnis: "\u22FB",
  xodot: "\u2A00",
  xopf: "\u{1D569}",
  xoplus: "\u2A01",
  xotime: "\u2A02",
  xrArr: "\u27F9",
  xrarr: "\u27F6",
  xscr: "\u{1D4CD}",
  xsqcup: "\u2A06",
  xuplus: "\u2A04",
  xutri: "\u25B3",
  xvee: "\u22C1",
  xwedge: "\u22C0",
  yacute: "\xFD",
  yacy: "\u044F",
  ycirc: "\u0177",
  ycy: "\u044B",
  yen: "\xA5",
  yfr: "\u{1D536}",
  yicy: "\u0457",
  yopf: "\u{1D56A}",
  yscr: "\u{1D4CE}",
  yucy: "\u044E",
  yuml: "\xFF",
  zacute: "\u017A",
  zcaron: "\u017E",
  zcy: "\u0437",
  zdot: "\u017C",
  zeetrf: "\u2128",
  zeta: "\u03B6",
  zfr: "\u{1D537}",
  zhcy: "\u0436",
  zigrarr: "\u21DD",
  zopf: "\u{1D56B}",
  zscr: "\u{1D4CF}",
  zwj: "\u200D",
  zwnj: "\u200C"
};

// ../../node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js
var own = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
  return own.call(characterEntities, value) ? characterEntities[value] : false;
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/character-reference.js
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok2, nok) {
  const self = this;
  let size = 0;
  let max;
  let test;
  return start;
  function start(code2) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code2);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code2);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric;
    return value(code2);
  }
  function numeric(code2) {
    if (code2 === 88 || code2 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code2);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit;
    return value(code2);
  }
  function value(code2) {
    if (code2 === 59 && size) {
      const token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
        return nok(code2);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code2);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok2;
    }
    if (test(code2) && size++ < max) {
      effects.consume(code2);
      return value;
    }
    return nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/code-fenced.js
init_react_shim();
var nonLazyContinuation = {
  tokenize: tokenizeNonLazyContinuation,
  partial: true
};
var codeFenced = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: true
};
function tokenizeCodeFenced(effects, ok2, nok) {
  const self = this;
  const closeStart = {
    tokenize: tokenizeCloseStart,
    partial: true
  };
  let initialPrefix = 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code2) {
    return beforeSequenceOpen(code2);
  }
  function beforeSequenceOpen(code2) {
    const tail = self.events[self.events.length - 1];
    initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    marker = code2;
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    return sequenceOpen(code2);
  }
  function sequenceOpen(code2) {
    if (code2 === marker) {
      sizeOpen++;
      effects.consume(code2);
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code2);
    }
    effects.exit("codeFencedFenceSequence");
    return markdownSpace(code2) ? factorySpace(effects, infoBefore, "whitespace")(code2) : infoBefore(code2);
  }
  function infoBefore(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFencedFence");
      return self.interrupt ? ok2(code2) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code2);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code2);
  }
  function info(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return infoBefore(code2);
    }
    if (markdownSpace(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, metaBefore, "whitespace")(code2);
    }
    if (code2 === 96 && code2 === marker) {
      return nok(code2);
    }
    effects.consume(code2);
    return info;
  }
  function metaBefore(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return infoBefore(code2);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code2);
  }
  function meta(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return infoBefore(code2);
    }
    if (code2 === 96 && code2 === marker) {
      return nok(code2);
    }
    effects.consume(code2);
    return meta;
  }
  function atNonLazyBreak(code2) {
    return effects.attempt(closeStart, after, contentBefore)(code2);
  }
  function contentBefore(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return contentStart;
  }
  function contentStart(code2) {
    return initialPrefix > 0 && markdownSpace(code2) ? factorySpace(
      effects,
      beforeContentChunk,
      "linePrefix",
      initialPrefix + 1
    )(code2) : beforeContentChunk(code2);
  }
  function beforeContentChunk(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code2);
    }
    effects.enter("codeFlowValue");
    return contentChunk(code2);
  }
  function contentChunk(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFlowValue");
      return beforeContentChunk(code2);
    }
    effects.consume(code2);
    return contentChunk;
  }
  function after(code2) {
    effects.exit("codeFenced");
    return ok2(code2);
  }
  function tokenizeCloseStart(effects2, ok3, nok2) {
    let size = 0;
    return startBefore;
    function startBefore(code2) {
      effects2.enter("lineEnding");
      effects2.consume(code2);
      effects2.exit("lineEnding");
      return start2;
    }
    function start2(code2) {
      effects2.enter("codeFencedFence");
      return markdownSpace(code2) ? factorySpace(
        effects2,
        beforeSequenceClose,
        "linePrefix",
        self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(code2) : beforeSequenceClose(code2);
    }
    function beforeSequenceClose(code2) {
      if (code2 === marker) {
        effects2.enter("codeFencedFenceSequence");
        return sequenceClose(code2);
      }
      return nok2(code2);
    }
    function sequenceClose(code2) {
      if (code2 === marker) {
        size++;
        effects2.consume(code2);
        return sequenceClose;
      }
      if (size >= sizeOpen) {
        effects2.exit("codeFencedFenceSequence");
        return markdownSpace(code2) ? factorySpace(effects2, sequenceCloseAfter, "whitespace")(code2) : sequenceCloseAfter(code2);
      }
      return nok2(code2);
    }
    function sequenceCloseAfter(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects2.exit("codeFencedFence");
        return ok3(code2);
      }
      return nok2(code2);
    }
  }
}
function tokenizeNonLazyContinuation(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code2) {
    return self.parser.lazy[self.now().line] ? nok(code2) : ok2(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/code-indented.js
init_react_shim();
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
var furtherStart = {
  tokenize: tokenizeFurtherStart,
  partial: true
};
function tokenizeCodeIndented(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code2) : nok(code2);
  }
  function atBreak(code2) {
    if (code2 === null) {
      return after(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt(furtherStart, atBreak, after)(code2);
    }
    effects.enter("codeFlowValue");
    return inside(code2);
  }
  function inside(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFlowValue");
      return atBreak(code2);
    }
    effects.consume(code2);
    return inside;
  }
  function after(code2) {
    effects.exit("codeIndented");
    return ok2(code2);
  }
}
function tokenizeFurtherStart(effects, ok2, nok) {
  const self = this;
  return furtherStart2;
  function furtherStart2(code2) {
    if (self.parser.lazy[self.now().line]) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return furtherStart2;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok2(code2) : markdownLineEnding(code2) ? furtherStart2(code2) : nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/code-text.js
init_react_shim();
var codeText = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code2) {
  return code2 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  const self = this;
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code2) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return sequenceOpen(code2);
  }
  function sequenceOpen(code2) {
    if (code2 === 96) {
      effects.consume(code2);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeTextSequence");
    return between2(code2);
  }
  function between2(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 32) {
      effects.enter("space");
      effects.consume(code2);
      effects.exit("space");
      return between2;
    }
    if (code2 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return sequenceClose(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return between2;
    }
    effects.enter("codeTextData");
    return data2(code2);
  }
  function data2(code2) {
    if (code2 === null || code2 === 32 || code2 === 96 || markdownLineEnding(code2)) {
      effects.exit("codeTextData");
      return between2(code2);
    }
    effects.consume(code2);
    return data2;
  }
  function sequenceClose(code2) {
    if (code2 === 96) {
      effects.consume(code2);
      size++;
      return sequenceClose;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok2(code2);
    }
    token.type = "codeTextData";
    return data2(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/content.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-util-subtokenize@1.1.0/node_modules/micromark-util-subtokenize/index.js
init_react_shim();
function subtokenize(events) {
  const jumps = {};
  let index2 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events[index2];
    if (index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events[lineIndex][1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = Object.assign({}, events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        splice(events, lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous3;
  let index2 = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events[++startPosition][1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous3) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous3 = current;
    current = current.next;
  }
  current = token;
  while (++index2 < childEvents.length) {
    if (
      // Find a void token that includes a break.
      childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line
    ) {
      start = index2 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index2 = breaks.length;
  while (index2--) {
    const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
    const start2 = startPositions.pop();
    jumps.unshift([start2, start2 + slice.length - 1]);
    splice(events, start2, 2, slice);
  }
  index2 = -1;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/content.js
var content = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok2) {
  let previous3;
  return chunkStart;
  function chunkStart(code2) {
    effects.enter("content");
    previous3 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return chunkInside(code2);
  }
  function chunkInside(code2) {
    if (code2 === null) {
      return contentEnd(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.check(
        continuationConstruct,
        contentContinue,
        contentEnd
      )(code2);
    }
    effects.consume(code2);
    return chunkInside;
  }
  function contentEnd(code2) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok2(code2);
  }
  function contentContinue(code2) {
    effects.consume(code2);
    effects.exit("chunkContent");
    previous3.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous3
    });
    previous3 = previous3.next;
    return chunkInside;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  const self = this;
  return startLookahead;
  function startLookahead(code2) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return nok(code2);
    }
    const tail = self.events[self.events.length - 1];
    if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok2(code2);
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok2)(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/definition.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-factory-destination@1.1.0/node_modules/micromark-factory-destination/index.js
init_react_shim();
function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code2) {
    if (code2 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code2);
      effects.exit(literalMarkerType);
      return enclosedBefore;
    }
    if (code2 === null || code2 === 32 || code2 === 41 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return raw(code2);
  }
  function enclosedBefore(code2) {
    if (code2 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code2);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return enclosed(code2);
  }
  function enclosed(code2) {
    if (code2 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return enclosedBefore(code2);
    }
    if (code2 === null || code2 === 60 || markdownLineEnding(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? enclosedEscape : enclosed;
  }
  function enclosedEscape(code2) {
    if (code2 === 60 || code2 === 62 || code2 === 92) {
      effects.consume(code2);
      return enclosed;
    }
    return enclosed(code2);
  }
  function raw(code2) {
    if (!balance && (code2 === null || code2 === 41 || markdownLineEndingOrSpace(code2))) {
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok2(code2);
    }
    if (balance < limit && code2 === 40) {
      effects.consume(code2);
      balance++;
      return raw;
    }
    if (code2 === 41) {
      effects.consume(code2);
      balance--;
      return raw;
    }
    if (code2 === null || code2 === 32 || code2 === 40 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? rawEscape : raw;
  }
  function rawEscape(code2) {
    if (code2 === 40 || code2 === 41 || code2 === 92) {
      effects.consume(code2);
      return raw;
    }
    return raw(code2);
  }
}

// ../../node_modules/.pnpm/micromark-factory-label@1.1.0/node_modules/micromark-factory-label/index.js
init_react_shim();
function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  let seen;
  return start;
  function start(code2) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code2);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code2) {
    if (size > 999 || code2 === null || code2 === 91 || code2 === 93 && !seen || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    code2 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return labelInside(code2);
  }
  function labelInside(code2) {
    if (code2 === null || code2 === 91 || code2 === 93 || markdownLineEnding(code2) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code2);
    }
    effects.consume(code2);
    if (!seen)
      seen = !markdownSpace(code2);
    return code2 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return labelInside;
    }
    return labelInside(code2);
  }
}

// ../../node_modules/.pnpm/micromark-factory-title@1.1.0/node_modules/micromark-factory-title/index.js
init_react_shim();
function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code2) {
    if (code2 === 34 || code2 === 39 || code2 === 40) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      marker = code2 === 40 ? 41 : code2;
      return begin;
    }
    return nok(code2);
  }
  function begin(code2) {
    if (code2 === marker) {
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    return atBreak(code2);
  }
  function atBreak(code2) {
    if (code2 === marker) {
      effects.exit(stringType);
      return begin(marker);
    }
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, atBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return inside(code2);
  }
  function inside(code2) {
    if (code2 === marker || code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      return atBreak(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? escape : inside;
  }
  function escape(code2) {
    if (code2 === marker || code2 === 92) {
      effects.consume(code2);
      return inside;
    }
    return inside(code2);
  }
}

// ../../node_modules/.pnpm/micromark-factory-whitespace@1.1.0/node_modules/micromark-factory-whitespace/index.js
init_react_shim();
function factoryWhitespace(effects, ok2) {
  let seen;
  return start;
  function start(code2) {
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code2)) {
      return factorySpace(
        effects,
        start,
        seen ? "linePrefix" : "lineSuffix"
      )(code2);
    }
    return ok2(code2);
  }
}

// ../../node_modules/.pnpm/micromark-util-normalize-identifier@1.1.0/node_modules/micromark-util-normalize-identifier/index.js
init_react_shim();
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/definition.js
var definition = {
  name: "definition",
  tokenize: tokenizeDefinition
};
var titleBefore = {
  tokenize: tokenizeTitleBefore,
  partial: true
};
function tokenizeDefinition(effects, ok2, nok) {
  const self = this;
  let identifier;
  return start;
  function start(code2) {
    effects.enter("definition");
    return before(code2);
  }
  function before(code2) {
    return factoryLabel.call(
      self,
      effects,
      labelAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(code2);
  }
  function labelAfter(code2) {
    identifier = normalizeIdentifier(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    );
    if (code2 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code2);
      effects.exit("definitionMarker");
      return markerAfter;
    }
    return nok(code2);
  }
  function markerAfter(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, destinationBefore)(code2) : destinationBefore(code2);
  }
  function destinationBefore(code2) {
    return factoryDestination(
      effects,
      destinationAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(code2);
  }
  function destinationAfter(code2) {
    return effects.attempt(titleBefore, after, after)(code2);
  }
  function after(code2) {
    return markdownSpace(code2) ? factorySpace(effects, afterWhitespace, "whitespace")(code2) : afterWhitespace(code2);
  }
  function afterWhitespace(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("definition");
      self.parser.defined.push(identifier);
      return ok2(code2);
    }
    return nok(code2);
  }
}
function tokenizeTitleBefore(effects, ok2, nok) {
  return titleBefore2;
  function titleBefore2(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, beforeMarker)(code2) : nok(code2);
  }
  function beforeMarker(code2) {
    return factoryTitle(
      effects,
      titleAfter,
      nok,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(code2);
  }
  function titleAfter(code2) {
    return markdownSpace(code2) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code2) : titleAfterOptionalWhitespace(code2);
  }
  function titleAfterOptionalWhitespace(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
init_react_shim();
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("hardBreakEscape");
    effects.consume(code2);
    return after;
  }
  function after(code2) {
    if (markdownLineEnding(code2)) {
      effects.exit("hardBreakEscape");
      return ok2(code2);
    }
    return nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/heading-atx.js
init_react_shim();
var headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content3;
  let text4;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content3 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text4 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [
      ["enter", content3, context],
      ["enter", text4, context],
      ["exit", text4, context],
      ["exit", content3, context]
    ]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  let size = 0;
  return start;
  function start(code2) {
    effects.enter("atxHeading");
    return before(code2);
  }
  function before(code2) {
    effects.enter("atxHeadingSequence");
    return sequenceOpen(code2);
  }
  function sequenceOpen(code2) {
    if (code2 === 35 && size++ < 6) {
      effects.consume(code2);
      return sequenceOpen;
    }
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      effects.exit("atxHeadingSequence");
      return atBreak(code2);
    }
    return nok(code2);
  }
  function atBreak(code2) {
    if (code2 === 35) {
      effects.enter("atxHeadingSequence");
      return sequenceFurther(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("atxHeading");
      return ok2(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, atBreak, "whitespace")(code2);
    }
    effects.enter("atxHeadingText");
    return data2(code2);
  }
  function sequenceFurther(code2) {
    if (code2 === 35) {
      effects.consume(code2);
      return sequenceFurther;
    }
    effects.exit("atxHeadingSequence");
    return atBreak(code2);
  }
  function data2(code2) {
    if (code2 === null || code2 === 35 || markdownLineEndingOrSpace(code2)) {
      effects.exit("atxHeadingText");
      return atBreak(code2);
    }
    effects.consume(code2);
    return data2;
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/html-flow.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-util-html-tag-name@1.2.0/node_modules/micromark-util-html-tag-name/index.js
init_react_shim();
var htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var htmlRawNames = ["pre", "script", "style", "textarea"];

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/html-flow.js
var htmlFlow = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
var blankLineBefore = {
  tokenize: tokenizeBlankLineBefore,
  partial: true
};
var nonLazyContinuationStart = {
  tokenize: tokenizeNonLazyContinuationStart,
  partial: true
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  const self = this;
  let marker;
  let closingTag;
  let buffer2;
  let index2;
  let markerB;
  return start;
  function start(code2) {
    return before(code2);
  }
  function before(code2) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (code2 === 33) {
      effects.consume(code2);
      return declarationOpen;
    }
    if (code2 === 47) {
      effects.consume(code2);
      closingTag = true;
      return tagCloseStart;
    }
    if (code2 === 63) {
      effects.consume(code2);
      marker = 3;
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      buffer2 = String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function declarationOpen(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      marker = 2;
      return commentOpenInside;
    }
    if (code2 === 91) {
      effects.consume(code2);
      marker = 5;
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      marker = 4;
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code2);
  }
  function commentOpenInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code2);
  }
  function cdataOpenInside(code2) {
    const value = "CDATA[";
    if (code2 === value.charCodeAt(index2++)) {
      effects.consume(code2);
      if (index2 === value.length) {
        return self.interrupt ? ok2 : continuation;
      }
      return cdataOpenInside;
    }
    return nok(code2);
  }
  function tagCloseStart(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      buffer2 = String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function tagName(code2) {
    if (code2 === null || code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      const slash = code2 === 47;
      const name = buffer2.toLowerCase();
      if (!slash && !closingTag && htmlRawNames.includes(name)) {
        marker = 1;
        return self.interrupt ? ok2(code2) : continuation(code2);
      }
      if (htmlBlockNames.includes(buffer2.toLowerCase())) {
        marker = 6;
        if (slash) {
          effects.consume(code2);
          return basicSelfClosing;
        }
        return self.interrupt ? ok2(code2) : continuation(code2);
      }
      marker = 7;
      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code2) : closingTag ? completeClosingTagAfter(code2) : completeAttributeNameBefore(code2);
    }
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      buffer2 += String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function basicSelfClosing(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return self.interrupt ? ok2 : continuation;
    }
    return nok(code2);
  }
  function completeClosingTagAfter(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeClosingTagAfter;
    }
    return completeEnd(code2);
  }
  function completeAttributeNameBefore(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return completeEnd;
    }
    if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
      effects.consume(code2);
      return completeAttributeName;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeNameBefore;
    }
    return completeEnd(code2);
  }
  function completeAttributeName(code2) {
    if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code2);
  }
  function completeAttributeNameAfter(code2) {
    if (code2 === 61) {
      effects.consume(code2);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code2);
  }
  function completeAttributeValueBefore(code2) {
    if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 34 || code2 === 39) {
      effects.consume(code2);
      markerB = code2;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeValueBefore;
    }
    return completeAttributeValueUnquoted(code2);
  }
  function completeAttributeValueQuoted(code2) {
    if (code2 === markerB) {
      effects.consume(code2);
      markerB = null;
      return completeAttributeValueQuotedAfter;
    }
    if (code2 === null || markdownLineEnding(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code2) {
    if (code2 === null || code2 === 34 || code2 === 39 || code2 === 47 || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96 || markdownLineEndingOrSpace(code2)) {
      return completeAttributeNameAfter(code2);
    }
    effects.consume(code2);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code2) {
    if (code2 === 47 || code2 === 62 || markdownSpace(code2)) {
      return completeAttributeNameBefore(code2);
    }
    return nok(code2);
  }
  function completeEnd(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return completeAfter;
    }
    return nok(code2);
  }
  function completeAfter(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return continuation(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAfter;
    }
    return nok(code2);
  }
  function continuation(code2) {
    if (code2 === 45 && marker === 2) {
      effects.consume(code2);
      return continuationCommentInside;
    }
    if (code2 === 60 && marker === 1) {
      effects.consume(code2);
      return continuationRawTagOpen;
    }
    if (code2 === 62 && marker === 4) {
      effects.consume(code2);
      return continuationClose;
    }
    if (code2 === 63 && marker === 3) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    if (code2 === 93 && marker === 5) {
      effects.consume(code2);
      return continuationCdataInside;
    }
    if (markdownLineEnding(code2) && (marker === 6 || marker === 7)) {
      effects.exit("htmlFlowData");
      return effects.check(
        blankLineBefore,
        continuationAfter,
        continuationStart
      )(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("htmlFlowData");
      return continuationStart(code2);
    }
    effects.consume(code2);
    return continuation;
  }
  function continuationStart(code2) {
    return effects.check(
      nonLazyContinuationStart,
      continuationStartNonLazy,
      continuationAfter
    )(code2);
  }
  function continuationStartNonLazy(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return continuationBefore;
  }
  function continuationBefore(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return continuationStart(code2);
    }
    effects.enter("htmlFlowData");
    return continuation(code2);
  }
  function continuationCommentInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationRawTagOpen(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      buffer2 = "";
      return continuationRawEndTag;
    }
    return continuation(code2);
  }
  function continuationRawEndTag(code2) {
    if (code2 === 62) {
      const name = buffer2.toLowerCase();
      if (htmlRawNames.includes(name)) {
        effects.consume(code2);
        return continuationClose;
      }
      return continuation(code2);
    }
    if (asciiAlpha(code2) && buffer2.length < 8) {
      effects.consume(code2);
      buffer2 += String.fromCharCode(code2);
      return continuationRawEndTag;
    }
    return continuation(code2);
  }
  function continuationCdataInside(code2) {
    if (code2 === 93) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationDeclarationInside(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return continuationClose;
    }
    if (code2 === 45 && marker === 2) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationClose(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("htmlFlowData");
      return continuationAfter(code2);
    }
    effects.consume(code2);
    return continuationClose;
  }
  function continuationAfter(code2) {
    effects.exit("htmlFlow");
    return ok2(code2);
  }
}
function tokenizeNonLazyContinuationStart(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return self.parser.lazy[self.now().line] ? nok(code2) : ok2(code2);
  }
}
function tokenizeBlankLineBefore(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return effects.attempt(blankLine, ok2, nok);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/html-text.js
init_react_shim();
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  const self = this;
  let marker;
  let index2;
  let returnState;
  return start;
  function start(code2) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (code2 === 33) {
      effects.consume(code2);
      return declarationOpen;
    }
    if (code2 === 47) {
      effects.consume(code2);
      return tagCloseStart;
    }
    if (code2 === 63) {
      effects.consume(code2);
      return instruction;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return tagOpen;
    }
    return nok(code2);
  }
  function declarationOpen(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentOpenInside;
    }
    if (code2 === 91) {
      effects.consume(code2);
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return declaration;
    }
    return nok(code2);
  }
  function commentOpenInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentEnd;
    }
    return nok(code2);
  }
  function comment(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 45) {
      effects.consume(code2);
      return commentClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = comment;
      return lineEndingBefore(code2);
    }
    effects.consume(code2);
    return comment;
  }
  function commentClose(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentEnd;
    }
    return comment(code2);
  }
  function commentEnd(code2) {
    return code2 === 62 ? end(code2) : code2 === 45 ? commentClose(code2) : comment(code2);
  }
  function cdataOpenInside(code2) {
    const value = "CDATA[";
    if (code2 === value.charCodeAt(index2++)) {
      effects.consume(code2);
      return index2 === value.length ? cdata : cdataOpenInside;
    }
    return nok(code2);
  }
  function cdata(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.consume(code2);
      return cdataClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = cdata;
      return lineEndingBefore(code2);
    }
    effects.consume(code2);
    return cdata;
  }
  function cdataClose(code2) {
    if (code2 === 93) {
      effects.consume(code2);
      return cdataEnd;
    }
    return cdata(code2);
  }
  function cdataEnd(code2) {
    if (code2 === 62) {
      return end(code2);
    }
    if (code2 === 93) {
      effects.consume(code2);
      return cdataEnd;
    }
    return cdata(code2);
  }
  function declaration(code2) {
    if (code2 === null || code2 === 62) {
      return end(code2);
    }
    if (markdownLineEnding(code2)) {
      returnState = declaration;
      return lineEndingBefore(code2);
    }
    effects.consume(code2);
    return declaration;
  }
  function instruction(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 63) {
      effects.consume(code2);
      return instructionClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = instruction;
      return lineEndingBefore(code2);
    }
    effects.consume(code2);
    return instruction;
  }
  function instructionClose(code2) {
    return code2 === 62 ? end(code2) : instruction(code2);
  }
  function tagCloseStart(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return tagClose;
    }
    return nok(code2);
  }
  function tagClose(code2) {
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagClose;
    }
    return tagCloseBetween(code2);
  }
  function tagCloseBetween(code2) {
    if (markdownLineEnding(code2)) {
      returnState = tagCloseBetween;
      return lineEndingBefore(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagCloseBetween;
    }
    return end(code2);
  }
  function tagOpen(code2) {
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagOpen;
    }
    if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    return nok(code2);
  }
  function tagOpenBetween(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return end;
    }
    if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
      effects.consume(code2);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenBetween;
      return lineEndingBefore(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenBetween;
    }
    return end(code2);
  }
  function tagOpenAttributeName(code2) {
    if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code2);
  }
  function tagOpenAttributeNameAfter(code2) {
    if (code2 === 61) {
      effects.consume(code2);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeNameAfter;
      return lineEndingBefore(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code2);
  }
  function tagOpenAttributeValueBefore(code2) {
    if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 34 || code2 === 39) {
      effects.consume(code2);
      marker = code2;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeValueBefore;
      return lineEndingBefore(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code2);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      marker = void 0;
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeValueQuoted;
      return lineEndingBefore(code2);
    }
    effects.consume(code2);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueUnquoted(code2) {
    if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    effects.consume(code2);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuotedAfter(code2) {
    if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    return nok(code2);
  }
  function end(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok2;
    }
    return nok(code2);
  }
  function lineEndingBefore(code2) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return lineEndingAfter;
  }
  function lineEndingAfter(code2) {
    return markdownSpace(code2) ? factorySpace(
      effects,
      lineEndingAfterPrefix,
      "linePrefix",
      self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(code2) : lineEndingAfterPrefix(code2);
  }
  function lineEndingAfterPrefix(code2) {
    effects.enter("htmlTextData");
    return returnState(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/label-end.js
init_react_shim();
var labelEnd = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
var resourceConstruct = {
  tokenize: tokenizeResource
};
var referenceFullConstruct = {
  tokenize: tokenizeReferenceFull
};
var referenceCollapsedConstruct = {
  tokenize: tokenizeReferenceCollapsed
};
function resolveAllLabelEnd(events) {
  let index2 = -1;
  while (++index2 < events.length) {
    const token = events[index2][1];
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2);
      token.type = "data";
      index2++;
    }
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index2--) {
    token = events[index2][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index2;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index2;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text4 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ["enter", group, context],
    ["enter", label, context]
  ];
  media = push(media, events.slice(open + 1, open + offset + 3));
  media = push(media, [["enter", text4, context]]);
  media = push(
    media,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  );
  media = push(media, [
    ["exit", text4, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  let labelStart;
  let defined2;
  while (index2--) {
    if ((self.events[index2][1].type === "labelImage" || self.events[index2][1].type === "labelLink") && !self.events[index2][1]._balanced) {
      labelStart = self.events[index2][1];
      break;
    }
  }
  return start;
  function start(code2) {
    if (!labelStart) {
      return nok(code2);
    }
    if (labelStart._inactive) {
      return labelEndNok(code2);
    }
    defined2 = self.parser.defined.includes(
      normalizeIdentifier(
        self.sliceSerialize({
          start: labelStart.end,
          end: self.now()
        })
      )
    );
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code2);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return after;
  }
  function after(code2) {
    if (code2 === 40) {
      return effects.attempt(
        resourceConstruct,
        labelEndOk,
        defined2 ? labelEndOk : labelEndNok
      )(code2);
    }
    if (code2 === 91) {
      return effects.attempt(
        referenceFullConstruct,
        labelEndOk,
        defined2 ? referenceNotFull : labelEndNok
      )(code2);
    }
    return defined2 ? labelEndOk(code2) : labelEndNok(code2);
  }
  function referenceNotFull(code2) {
    return effects.attempt(
      referenceCollapsedConstruct,
      labelEndOk,
      labelEndNok
    )(code2);
  }
  function labelEndOk(code2) {
    return ok2(code2);
  }
  function labelEndNok(code2) {
    labelStart._balanced = true;
    return nok(code2);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return resourceStart;
  function resourceStart(code2) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code2);
    effects.exit("resourceMarker");
    return resourceBefore;
  }
  function resourceBefore(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, resourceOpen)(code2) : resourceOpen(code2);
  }
  function resourceOpen(code2) {
    if (code2 === 41) {
      return resourceEnd(code2);
    }
    return factoryDestination(
      effects,
      resourceDestinationAfter,
      resourceDestinationMissing,
      "resourceDestination",
      "resourceDestinationLiteral",
      "resourceDestinationLiteralMarker",
      "resourceDestinationRaw",
      "resourceDestinationString",
      32
    )(code2);
  }
  function resourceDestinationAfter(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, resourceBetween)(code2) : resourceEnd(code2);
  }
  function resourceDestinationMissing(code2) {
    return nok(code2);
  }
  function resourceBetween(code2) {
    if (code2 === 34 || code2 === 39 || code2 === 40) {
      return factoryTitle(
        effects,
        resourceTitleAfter,
        nok,
        "resourceTitle",
        "resourceTitleMarker",
        "resourceTitleString"
      )(code2);
    }
    return resourceEnd(code2);
  }
  function resourceTitleAfter(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, resourceEnd)(code2) : resourceEnd(code2);
  }
  function resourceEnd(code2) {
    if (code2 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code2);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok2;
    }
    return nok(code2);
  }
}
function tokenizeReferenceFull(effects, ok2, nok) {
  const self = this;
  return referenceFull;
  function referenceFull(code2) {
    return factoryLabel.call(
      self,
      effects,
      referenceFullAfter,
      referenceFullMissing,
      "reference",
      "referenceMarker",
      "referenceString"
    )(code2);
  }
  function referenceFullAfter(code2) {
    return self.parser.defined.includes(
      normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    ) ? ok2(code2) : nok(code2);
  }
  function referenceFullMissing(code2) {
    return nok(code2);
  }
}
function tokenizeReferenceCollapsed(effects, ok2, nok) {
  return referenceCollapsedStart;
  function referenceCollapsedStart(code2) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code2);
    effects.exit("referenceMarker");
    return referenceCollapsedOpen;
  }
  function referenceCollapsedOpen(code2) {
    if (code2 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code2);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok2;
    }
    return nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/label-start-image.js
init_react_shim();
var labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code2);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 91) {
      effects.enter("labelMarker");
      effects.consume(code2);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code2) : ok2(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/label-start-link.js
init_react_shim();
var labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code2);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code2) : ok2(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/line-ending.js
init_react_shim();
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, ok2, "linePrefix");
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/list.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/thematic-break.js
init_react_shim();
var thematicBreak = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok2, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code2) {
    effects.enter("thematicBreak");
    return before(code2);
  }
  function before(code2) {
    marker = code2;
    return atBreak(code2);
  }
  function atBreak(code2) {
    if (code2 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code2);
    }
    if (size >= 3 && (code2 === null || markdownLineEnding(code2))) {
      effects.exit("thematicBreak");
      return ok2(code2);
    }
    return nok(code2);
  }
  function sequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return markdownSpace(code2) ? factorySpace(effects, atBreak, "whitespace")(code2) : atBreak(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/list.js
var list = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
var indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};
function tokenizeListStart(effects, ok2, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code2) {
    const kind = self.containerState.type || (code2 === 42 || code2 === 43 || code2 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code2 === self.containerState.marker : asciiDigit(code2)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code2 === 42 || code2 === 45 ? effects.check(thematicBreak, nok, atMarker)(code2) : atMarker(code2);
      }
      if (!self.interrupt || code2 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code2);
      }
    }
    return nok(code2);
  }
  function inside(code2) {
    if (asciiDigit(code2) && ++size < 10) {
      effects.consume(code2);
      return inside;
    }
    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code2 === self.containerState.marker : code2 === 41 || code2 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code2);
    }
    return nok(code2);
  }
  function atMarker(code2) {
    effects.enter("listItemMarker");
    effects.consume(code2);
    effects.exit("listItemMarker");
    self.containerState.marker = self.containerState.marker || code2;
    return effects.check(
      blankLine,
      // Can’t be empty when interrupting.
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    );
  }
  function onBlank(code2) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code2);
  }
  function otherPrefix(code2) {
    if (markdownSpace(code2)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code2);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code2);
  }
  function endOfPrefix(code2) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok2(code2);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  const self = this;
  self.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code2) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
    return factorySpace(
      effects,
      ok2,
      "listItemIndent",
      self.containerState.size + 1
    )(code2);
  }
  function notBlank(code2) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code2)) {
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code2);
    }
    self.containerState.furtherBlankLines = void 0;
    self.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code2);
  }
  function notInCurrentItem(code2) {
    self.containerState._closeFlow = true;
    self.interrupt = void 0;
    return factorySpace(
      effects,
      effects.attempt(list, ok2, nok),
      "linePrefix",
      self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(code2);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  const self = this;
  return factorySpace(
    effects,
    afterPrefix,
    "listItemIndent",
    self.containerState.size + 1
  );
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok2(code2) : nok(code2);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  const self = this;
  return factorySpace(
    effects,
    afterPrefix,
    "listItemPrefixWhitespace",
    self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace(code2) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code2) : nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-core-commonmark@1.1.0/node_modules/micromark-core-commonmark/lib/setext-underline.js
init_react_shim();
var setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length;
  let content3;
  let text4;
  let definition2;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content3 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text4 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition2 && events[index2][1].type === "definition") {
        definition2 = index2;
      }
    }
  }
  const heading = {
    type: "setextHeading",
    start: Object.assign({}, events[text4][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  events[text4][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text4, 0, ["enter", heading, context]);
    events.splice(definition2 + 1, 0, ["exit", events[content3][1], context]);
    events[content3][1].end = Object.assign({}, events[definition2][1].end);
  } else {
    events[content3][1] = heading;
  }
  events.push(["exit", heading, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  const self = this;
  let marker;
  return start;
  function start(code2) {
    let index2 = self.events.length;
    let paragraph;
    while (index2--) {
      if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
        paragraph = self.events[index2][1].type === "paragraph";
        break;
      }
    }
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter("setextHeadingLine");
      marker = code2;
      return before(code2);
    }
    return nok(code2);
  }
  function before(code2) {
    effects.enter("setextHeadingLineSequence");
    return inside(code2);
  }
  function inside(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return inside;
    }
    effects.exit("setextHeadingLineSequence");
    return markdownSpace(code2) ? factorySpace(effects, after, "lineSuffix")(code2) : after(code2);
  }
  function after(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("setextHeadingLine");
      return ok2(code2);
    }
    return nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-extension-gfm-footnote@1.1.2/node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var indent = {
  tokenize: tokenizeIndent2,
  partial: true
};
function gfmFootnote() {
  return {
    document: {
      [91]: {
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        add: "after",
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  const defined2 = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let labelStart;
  while (index2--) {
    const token = self.events[index2][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }
    if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
      break;
    }
  }
  return start;
  function start(code2) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code2);
    }
    const id = normalizeIdentifier(
      self.sliceSerialize({
        start: labelStart.end,
        end: self.now()
      })
    );
    if (id.codePointAt(0) !== 94 || !defined2.includes(id.slice(1))) {
      return nok(code2);
    }
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteCallLabelMarker");
    return ok2(code2);
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index2 = events.length;
  let labelStart;
  while (index2--) {
    if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
      labelStart = events[index2][1];
      break;
    }
  }
  events[index2 + 1][1].type = "data";
  events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
  const call = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, events[index2 + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const marker = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, events[index2 + 3][1].end),
    end: Object.assign({}, events[index2 + 3][1].end)
  };
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  const string3 = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  const chunk = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, string3.start),
    end: Object.assign({}, string3.end)
  };
  const replacement = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    events[index2 + 1],
    events[index2 + 2],
    ["enter", call, context],
    // The `[`
    events[index2 + 3],
    events[index2 + 4],
    // The `^`.
    ["enter", marker, context],
    ["exit", marker, context],
    // Everything in between.
    ["enter", string3, context],
    ["enter", chunk, context],
    ["exit", chunk, context],
    ["exit", string3, context],
    // The ending (`]`, properly parsed and labelled).
    events[events.length - 2],
    events[events.length - 1],
    ["exit", call, context]
  ];
  events.splice(index2, events.length - index2 + 1, ...replacement);
  return events;
}
function tokenizeGfmFootnoteCall(effects, ok2, nok) {
  const self = this;
  const defined2 = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let size = 0;
  let data2;
  return start;
  function start(code2) {
    effects.enter("gfmFootnoteCall");
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteCallLabelMarker");
    return callStart;
  }
  function callStart(code2) {
    if (code2 !== 94)
      return nok(code2);
    effects.enter("gfmFootnoteCallMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteCallMarker");
    effects.enter("gfmFootnoteCallString");
    effects.enter("chunkString").contentType = "string";
    return callData;
  }
  function callData(code2) {
    if (
      // Too long.
      size > 999 || // Closing brace with nothing.
      code2 === 93 && !data2 || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      code2 === null || code2 === 91 || markdownLineEndingOrSpace(code2)
    ) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.exit("chunkString");
      const token = effects.exit("gfmFootnoteCallString");
      if (!defined2.includes(normalizeIdentifier(self.sliceSerialize(token)))) {
        return nok(code2);
      }
      effects.enter("gfmFootnoteCallLabelMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteCallLabelMarker");
      effects.exit("gfmFootnoteCall");
      return ok2;
    }
    if (!markdownLineEndingOrSpace(code2)) {
      data2 = true;
    }
    size++;
    effects.consume(code2);
    return code2 === 92 ? callEscape : callData;
  }
  function callEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return callData;
    }
    return callData(code2);
  }
}
function tokenizeDefinitionStart(effects, ok2, nok) {
  const self = this;
  const defined2 = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let identifier;
  let size = 0;
  let data2;
  return start;
  function start(code2) {
    effects.enter("gfmFootnoteDefinition")._container = true;
    effects.enter("gfmFootnoteDefinitionLabel");
    effects.enter("gfmFootnoteDefinitionLabelMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteDefinitionLabelMarker");
    return labelAtMarker;
  }
  function labelAtMarker(code2) {
    if (code2 === 94) {
      effects.enter("gfmFootnoteDefinitionMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteDefinitionMarker");
      effects.enter("gfmFootnoteDefinitionLabelString");
      effects.enter("chunkString").contentType = "string";
      return labelInside;
    }
    return nok(code2);
  }
  function labelInside(code2) {
    if (
      // Too long.
      size > 999 || // Closing brace with nothing.
      code2 === 93 && !data2 || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      code2 === null || code2 === 91 || markdownLineEndingOrSpace(code2)
    ) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.exit("chunkString");
      const token = effects.exit("gfmFootnoteDefinitionLabelString");
      identifier = normalizeIdentifier(self.sliceSerialize(token));
      effects.enter("gfmFootnoteDefinitionLabelMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteDefinitionLabelMarker");
      effects.exit("gfmFootnoteDefinitionLabel");
      return labelAfter;
    }
    if (!markdownLineEndingOrSpace(code2)) {
      data2 = true;
    }
    size++;
    effects.consume(code2);
    return code2 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return labelInside;
    }
    return labelInside(code2);
  }
  function labelAfter(code2) {
    if (code2 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code2);
      effects.exit("definitionMarker");
      if (!defined2.includes(identifier)) {
        defined2.push(identifier);
      }
      return factorySpace(
        effects,
        whitespaceAfter,
        "gfmFootnoteDefinitionWhitespace"
      );
    }
    return nok(code2);
  }
  function whitespaceAfter(code2) {
    return ok2(code2);
  }
}
function tokenizeDefinitionContinuation(effects, ok2, nok) {
  return effects.check(blankLine, ok2, effects.attempt(indent, ok2, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent2(effects, ok2, nok) {
  const self = this;
  return factorySpace(
    effects,
    afterPrefix,
    "gfmFootnoteDefinitionIndent",
    4 + 1
  );
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok2(code2) : nok(code2);
  }
}

// ../../node_modules/.pnpm/micromark-extension-gfm-strikethrough@1.0.7/node_modules/micromark-extension-gfm-strikethrough/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-extension-gfm-strikethrough@1.0.7/node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
init_react_shim();
function gfmStrikethrough(options) {
  const options_ = options || {};
  let single = options_.singleTilde;
  const tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
        let open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && // If the sizes are the same:
          events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index2][1].type = "strikethroughSequence";
            events[open][1].type = "strikethroughSequence";
            const strikethrough = {
              type: "strikethrough",
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index2][1].end)
            };
            const text4 = {
              type: "strikethroughText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            };
            const nextEvents = [
              ["enter", strikethrough, context],
              ["enter", events[open][1], context],
              ["exit", events[open][1], context],
              ["enter", text4, context]
            ];
            const insideSpan2 = context.parser.constructs.insideSpan.null;
            if (insideSpan2) {
              splice(
                nextEvents,
                nextEvents.length,
                0,
                resolveAll(insideSpan2, events.slice(open + 1, index2), context)
              );
            }
            splice(nextEvents, nextEvents.length, 0, [
              ["exit", text4, context],
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context],
              ["exit", strikethrough, context]
            ]);
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "strikethroughSequenceTemporary") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeStrikethrough(effects, ok2, nok) {
    const previous3 = this.previous;
    const events = this.events;
    let size = 0;
    return start;
    function start(code2) {
      if (previous3 === 126 && events[events.length - 1][1].type !== "characterEscape") {
        return nok(code2);
      }
      effects.enter("strikethroughSequenceTemporary");
      return more(code2);
    }
    function more(code2) {
      const before = classifyCharacter(previous3);
      if (code2 === 126) {
        if (size > 1)
          return nok(code2);
        effects.consume(code2);
        size++;
        return more;
      }
      if (size < 2 && !single)
        return nok(code2);
      const token = effects.exit("strikethroughSequenceTemporary");
      const after = classifyCharacter(code2);
      token._open = !after || after === 2 && Boolean(before);
      token._close = !before || before === 2 && Boolean(after);
      return ok2(code2);
    }
  }
}

// ../../node_modules/.pnpm/micromark-extension-gfm-table@1.0.7/node_modules/micromark-extension-gfm-table/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-extension-gfm-table@1.0.7/node_modules/micromark-extension-gfm-table/lib/syntax.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-extension-gfm-table@1.0.7/node_modules/micromark-extension-gfm-table/lib/edit-map.js
init_react_shim();
var EditMap = class {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {void}
   */
  add(index2, remove, add) {
    addImpl(this, index2, remove, add);
  }
  // To do: not used here.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {void}
  //  */
  // addBefore(index, remove, add) {
  //   addImpl(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {void}
   */
  consume(events) {
    this.map.sort((a, b) => a[0] - b[0]);
    if (this.map.length === 0) {
      return;
    }
    let index2 = this.map.length;
    const vecs = [];
    while (index2 > 0) {
      index2 -= 1;
      vecs.push(events.slice(this.map[index2][0] + this.map[index2][1]));
      vecs.push(this.map[index2][2]);
      events.length = this.map[index2][0];
    }
    vecs.push([...events]);
    events.length = 0;
    let slice = vecs.pop();
    while (slice) {
      events.push(...slice);
      slice = vecs.pop();
    }
    this.map.length = 0;
  }
};
function addImpl(editMap, at, remove, add) {
  let index2 = 0;
  if (remove === 0 && add.length === 0) {
    return;
  }
  while (index2 < editMap.map.length) {
    if (editMap.map[index2][0] === at) {
      editMap.map[index2][1] += remove;
      editMap.map[index2][2].push(...add);
      return;
    }
    index2 += 1;
  }
  editMap.map.push([at, remove, add]);
}

// ../../node_modules/.pnpm/micromark-extension-gfm-table@1.0.7/node_modules/micromark-extension-gfm-table/lib/infer.js
init_react_shim();
function gfmTableAlign(events, index2) {
  let inDelimiterRow = false;
  const align = [];
  while (index2 < events.length) {
    const event = events[index2];
    if (inDelimiterRow) {
      if (event[0] === "enter") {
        if (event[1].type === "tableContent") {
          align.push(
            events[index2 + 1][1].type === "tableDelimiterMarker" ? "left" : "none"
          );
        }
      } else if (event[1].type === "tableContent") {
        if (events[index2 - 1][1].type === "tableDelimiterMarker") {
          const alignIndex = align.length - 1;
          align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
        }
      } else if (event[1].type === "tableDelimiterRow") {
        break;
      }
    } else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") {
      inDelimiterRow = true;
    }
    index2 += 1;
  }
  return align;
}

// ../../node_modules/.pnpm/micromark-extension-gfm-table@1.0.7/node_modules/micromark-extension-gfm-table/lib/syntax.js
var gfmTable = {
  flow: {
    null: {
      tokenize: tokenizeTable,
      resolveAll: resolveTable
    }
  }
};
function tokenizeTable(effects, ok2, nok) {
  const self = this;
  let size = 0;
  let sizeB = 0;
  let seen;
  return start;
  function start(code2) {
    let index2 = self.events.length - 1;
    while (index2 > -1) {
      const type = self.events[index2][1].type;
      if (type === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      type === "linePrefix")
        index2--;
      else
        break;
    }
    const tail = index2 > -1 ? self.events[index2][1].type : null;
    const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
    if (next === bodyRowStart && self.parser.lazy[self.now().line]) {
      return nok(code2);
    }
    return next(code2);
  }
  function headRowBefore(code2) {
    effects.enter("tableHead");
    effects.enter("tableRow");
    return headRowStart(code2);
  }
  function headRowStart(code2) {
    if (code2 === 124) {
      return headRowBreak(code2);
    }
    seen = true;
    sizeB += 1;
    return headRowBreak(code2);
  }
  function headRowBreak(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      if (sizeB > 1) {
        sizeB = 0;
        self.interrupt = true;
        effects.exit("tableRow");
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return headDelimiterStart;
      }
      return nok(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, headRowBreak, "whitespace")(code2);
    }
    sizeB += 1;
    if (seen) {
      seen = false;
      size += 1;
    }
    if (code2 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code2);
      effects.exit("tableCellDivider");
      seen = true;
      return headRowBreak;
    }
    effects.enter("data");
    return headRowData(code2);
  }
  function headRowData(code2) {
    if (code2 === null || code2 === 124 || markdownLineEndingOrSpace(code2)) {
      effects.exit("data");
      return headRowBreak(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? headRowEscape : headRowData;
  }
  function headRowEscape(code2) {
    if (code2 === 92 || code2 === 124) {
      effects.consume(code2);
      return headRowData;
    }
    return headRowData(code2);
  }
  function headDelimiterStart(code2) {
    self.interrupt = false;
    if (self.parser.lazy[self.now().line]) {
      return nok(code2);
    }
    effects.enter("tableDelimiterRow");
    seen = false;
    if (markdownSpace(code2)) {
      return factorySpace(
        effects,
        headDelimiterBefore,
        "linePrefix",
        self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(code2);
    }
    return headDelimiterBefore(code2);
  }
  function headDelimiterBefore(code2) {
    if (code2 === 45 || code2 === 58) {
      return headDelimiterValueBefore(code2);
    }
    if (code2 === 124) {
      seen = true;
      effects.enter("tableCellDivider");
      effects.consume(code2);
      effects.exit("tableCellDivider");
      return headDelimiterCellBefore;
    }
    return headDelimiterNok(code2);
  }
  function headDelimiterCellBefore(code2) {
    if (markdownSpace(code2)) {
      return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code2);
    }
    return headDelimiterValueBefore(code2);
  }
  function headDelimiterValueBefore(code2) {
    if (code2 === 58) {
      sizeB += 1;
      seen = true;
      effects.enter("tableDelimiterMarker");
      effects.consume(code2);
      effects.exit("tableDelimiterMarker");
      return headDelimiterLeftAlignmentAfter;
    }
    if (code2 === 45) {
      sizeB += 1;
      return headDelimiterLeftAlignmentAfter(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      return headDelimiterCellAfter(code2);
    }
    return headDelimiterNok(code2);
  }
  function headDelimiterLeftAlignmentAfter(code2) {
    if (code2 === 45) {
      effects.enter("tableDelimiterFiller");
      return headDelimiterFiller(code2);
    }
    return headDelimiterNok(code2);
  }
  function headDelimiterFiller(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return headDelimiterFiller;
    }
    if (code2 === 58) {
      seen = true;
      effects.exit("tableDelimiterFiller");
      effects.enter("tableDelimiterMarker");
      effects.consume(code2);
      effects.exit("tableDelimiterMarker");
      return headDelimiterRightAlignmentAfter;
    }
    effects.exit("tableDelimiterFiller");
    return headDelimiterRightAlignmentAfter(code2);
  }
  function headDelimiterRightAlignmentAfter(code2) {
    if (markdownSpace(code2)) {
      return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code2);
    }
    return headDelimiterCellAfter(code2);
  }
  function headDelimiterCellAfter(code2) {
    if (code2 === 124) {
      return headDelimiterBefore(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      if (!seen || size !== sizeB) {
        return headDelimiterNok(code2);
      }
      effects.exit("tableDelimiterRow");
      effects.exit("tableHead");
      return ok2(code2);
    }
    return headDelimiterNok(code2);
  }
  function headDelimiterNok(code2) {
    return nok(code2);
  }
  function bodyRowStart(code2) {
    effects.enter("tableRow");
    return bodyRowBreak(code2);
  }
  function bodyRowBreak(code2) {
    if (code2 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code2);
      effects.exit("tableCellDivider");
      return bodyRowBreak;
    }
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("tableRow");
      return ok2(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, bodyRowBreak, "whitespace")(code2);
    }
    effects.enter("data");
    return bodyRowData(code2);
  }
  function bodyRowData(code2) {
    if (code2 === null || code2 === 124 || markdownLineEndingOrSpace(code2)) {
      effects.exit("data");
      return bodyRowBreak(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? bodyRowEscape : bodyRowData;
  }
  function bodyRowEscape(code2) {
    if (code2 === 92 || code2 === 124) {
      effects.consume(code2);
      return bodyRowData;
    }
    return bodyRowData(code2);
  }
}
function resolveTable(events, context) {
  let index2 = -1;
  let inFirstCellAwaitingPipe = true;
  let rowKind = 0;
  let lastCell = [0, 0, 0, 0];
  let cell = [0, 0, 0, 0];
  let afterHeadAwaitingFirstBodyRow = false;
  let lastTableEnd = 0;
  let currentTable;
  let currentBody;
  let currentCell;
  const map2 = new EditMap();
  while (++index2 < events.length) {
    const event = events[index2];
    const token = event[1];
    if (event[0] === "enter") {
      if (token.type === "tableHead") {
        afterHeadAwaitingFirstBodyRow = false;
        if (lastTableEnd !== 0) {
          flushTableEnd(map2, context, lastTableEnd, currentTable, currentBody);
          currentBody = void 0;
          lastTableEnd = 0;
        }
        currentTable = {
          type: "table",
          start: Object.assign({}, token.start),
          // Note: correct end is set later.
          end: Object.assign({}, token.end)
        };
        map2.add(index2, 0, [["enter", currentTable, context]]);
      } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
        inFirstCellAwaitingPipe = true;
        currentCell = void 0;
        lastCell = [0, 0, 0, 0];
        cell = [0, index2 + 1, 0, 0];
        if (afterHeadAwaitingFirstBodyRow) {
          afterHeadAwaitingFirstBodyRow = false;
          currentBody = {
            type: "tableBody",
            start: Object.assign({}, token.start),
            // Note: correct end is set later.
            end: Object.assign({}, token.end)
          };
          map2.add(index2, 0, [["enter", currentBody, context]]);
        }
        rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
      } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
        inFirstCellAwaitingPipe = false;
        if (cell[2] === 0) {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(
              map2,
              context,
              lastCell,
              rowKind,
              void 0,
              currentCell
            );
            lastCell = [0, 0, 0, 0];
          }
          cell[2] = index2;
        }
      } else if (token.type === "tableCellDivider") {
        if (inFirstCellAwaitingPipe) {
          inFirstCellAwaitingPipe = false;
        } else {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(
              map2,
              context,
              lastCell,
              rowKind,
              void 0,
              currentCell
            );
          }
          lastCell = cell;
          cell = [lastCell[1], index2, 0, 0];
        }
      }
    } else if (token.type === "tableHead") {
      afterHeadAwaitingFirstBodyRow = true;
      lastTableEnd = index2;
    } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
      lastTableEnd = index2;
      if (lastCell[1] !== 0) {
        cell[0] = cell[1];
        currentCell = flushCell(
          map2,
          context,
          lastCell,
          rowKind,
          index2,
          currentCell
        );
      } else if (cell[1] !== 0) {
        currentCell = flushCell(map2, context, cell, rowKind, index2, currentCell);
      }
      rowKind = 0;
    } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
      cell[3] = index2;
    }
  }
  if (lastTableEnd !== 0) {
    flushTableEnd(map2, context, lastTableEnd, currentTable, currentBody);
  }
  map2.consume(context.events);
  index2 = -1;
  while (++index2 < context.events.length) {
    const event = context.events[index2];
    if (event[0] === "enter" && event[1].type === "table") {
      event[1]._align = gfmTableAlign(context.events, index2);
    }
  }
  return events;
}
function flushCell(map2, context, range, rowKind, rowEnd, previousCell) {
  const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
  const valueName = "tableContent";
  if (range[0] !== 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
    map2.add(range[0], 0, [["exit", previousCell, context]]);
  }
  const now = getPoint(context.events, range[1]);
  previousCell = {
    type: groupName,
    start: Object.assign({}, now),
    // Note: correct end is set later.
    end: Object.assign({}, now)
  };
  map2.add(range[1], 0, [["enter", previousCell, context]]);
  if (range[2] !== 0) {
    const relatedStart = getPoint(context.events, range[2]);
    const relatedEnd = getPoint(context.events, range[3]);
    const valueToken = {
      type: valueName,
      start: Object.assign({}, relatedStart),
      end: Object.assign({}, relatedEnd)
    };
    map2.add(range[2], 0, [["enter", valueToken, context]]);
    if (rowKind !== 2) {
      const start = context.events[range[2]];
      const end = context.events[range[3]];
      start[1].end = Object.assign({}, end[1].end);
      start[1].type = "chunkText";
      start[1].contentType = "text";
      if (range[3] > range[2] + 1) {
        const a = range[2] + 1;
        const b = range[3] - range[2] - 1;
        map2.add(a, b, []);
      }
    }
    map2.add(range[3] + 1, 0, [["exit", valueToken, context]]);
  }
  if (rowEnd !== void 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
    map2.add(rowEnd, 0, [["exit", previousCell, context]]);
    previousCell = void 0;
  }
  return previousCell;
}
function flushTableEnd(map2, context, index2, table, tableBody) {
  const exits = [];
  const related = getPoint(context.events, index2);
  if (tableBody) {
    tableBody.end = Object.assign({}, related);
    exits.push(["exit", tableBody, context]);
  }
  table.end = Object.assign({}, related);
  exits.push(["exit", table, context]);
  map2.add(index2 + 1, 0, exits);
}
function getPoint(events, index2) {
  const event = events[index2];
  const side = event[0] === "enter" ? "start" : "end";
  return event[1][side];
}

// ../../node_modules/.pnpm/micromark-extension-gfm-task-list-item@1.0.5/node_modules/micromark-extension-gfm-task-list-item/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-extension-gfm-task-list-item@1.0.5/node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
init_react_shim();
var tasklistCheck = {
  tokenize: tokenizeTasklistCheck
};
var gfmTaskListItem = {
  text: {
    [91]: tasklistCheck
  }
};
function tokenizeTasklistCheck(effects, ok2, nok) {
  const self = this;
  return open;
  function open(code2) {
    if (
      // Exit if there’s stuff before.
      self.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !self._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code2);
    }
    effects.enter("taskListCheck");
    effects.enter("taskListCheckMarker");
    effects.consume(code2);
    effects.exit("taskListCheckMarker");
    return inside;
  }
  function inside(code2) {
    if (markdownLineEndingOrSpace(code2)) {
      effects.enter("taskListCheckValueUnchecked");
      effects.consume(code2);
      effects.exit("taskListCheckValueUnchecked");
      return close;
    }
    if (code2 === 88 || code2 === 120) {
      effects.enter("taskListCheckValueChecked");
      effects.consume(code2);
      effects.exit("taskListCheckValueChecked");
      return close;
    }
    return nok(code2);
  }
  function close(code2) {
    if (code2 === 93) {
      effects.enter("taskListCheckMarker");
      effects.consume(code2);
      effects.exit("taskListCheckMarker");
      effects.exit("taskListCheck");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    if (markdownLineEnding(code2)) {
      return ok2(code2);
    }
    if (markdownSpace(code2)) {
      return effects.check(
        {
          tokenize: spaceThenNonSpace
        },
        ok2,
        nok
      )(code2);
    }
    return nok(code2);
  }
}
function spaceThenNonSpace(effects, ok2, nok) {
  return factorySpace(effects, after, "whitespace");
  function after(code2) {
    return code2 === null ? nok(code2) : ok2(code2);
  }
}

// ../../node_modules/.pnpm/micromark-extension-gfm@2.0.3/node_modules/micromark-extension-gfm/index.js
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral,
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable,
    gfmTaskListItem
  ]);
}

// ../../node_modules/.pnpm/mdast-util-gfm@2.0.2/node_modules/mdast-util-gfm/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-gfm@2.0.2/node_modules/mdast-util-gfm/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-gfm-autolink-literal@1.0.3/node_modules/mdast-util-gfm-autolink-literal/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-gfm-autolink-literal@1.0.3/node_modules/mdast-util-gfm-autolink-literal/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js
init_react_shim();
function ccount(value, character) {
  const source = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count = 0;
  let index2 = source.indexOf(character);
  while (index2 !== -1) {
    count++;
    index2 = source.indexOf(character, index2 + character.length);
  }
  return count;
}

// ../../node_modules/.pnpm/mdast-util-find-and-replace@2.2.2/node_modules/mdast-util-find-and-replace/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-find-and-replace@2.2.2/node_modules/mdast-util-find-and-replace/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/escape-string-regexp@5.0.0/node_modules/escape-string-regexp/index.js
init_react_shim();
function escapeStringRegexp(string3) {
  if (typeof string3 !== "string") {
    throw new TypeError("Expected a string");
  }
  return string3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// ../../node_modules/.pnpm/unist-util-visit-parents@5.1.3/node_modules/unist-util-visit-parents/index.js
init_react_shim();

// ../../node_modules/.pnpm/unist-util-visit-parents@5.1.3/node_modules/unist-util-visit-parents/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/unist-util-is@5.2.1/node_modules/unist-util-is/index.js
init_react_shim();

// ../../node_modules/.pnpm/unist-util-is@5.2.1/node_modules/unist-util-is/lib/index.js
init_react_shim();
var convert = (
  /**
   * @type {(
   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {AssertAnything}
   */
  function(test) {
    if (test === void 0 || test === null) {
      return ok;
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check) {
  return castFactory(all2);
  function all2(node2) {
    let key2;
    for (key2 in check) {
      if (node2[key2] !== check[key2])
        return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node2) {
    return node2 && node2.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(node2, ...parameters) {
    return Boolean(
      node2 && typeof node2 === "object" && "type" in node2 && // @ts-expect-error: fine.
      Boolean(check.call(this, node2, ...parameters))
    );
  }
}
function ok() {
  return true;
}

// ../../node_modules/.pnpm/unist-util-visit-parents@5.1.3/node_modules/unist-util-visit-parents/lib/color.js
init_react_shim();
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// ../../node_modules/.pnpm/unist-util-visit-parents@5.1.3/node_modules/unist-util-visit-parents/lib/index.js
var CONTINUE = true;
var EXIT = false;
var SKIP = "skip";
var visitParents = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor<Node>} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
      reverse = visitor;
      visitor = test;
      test = null;
    }
    const is2 = convert(test);
    const step = reverse ? -1 : 1;
    factory(tree, void 0, [])();
    function factory(node2, index2, parents) {
      const value = node2 && typeof node2 === "object" ? node2 : {};
      if (typeof value.type === "string") {
        const name = (
          // `hast`
          typeof value.tagName === "string" ? value.tagName : (
            // `xast`
            typeof value.name === "string" ? value.name : void 0
          )
        );
        Object.defineProperty(visit2, "name", {
          value: "node (" + color(node2.type + (name ? "<" + name + ">" : "")) + ")"
        });
      }
      return visit2;
      function visit2() {
        let result = [];
        let subresult;
        let offset;
        let grandparents;
        if (!test || is2(node2, index2, parents[parents.length - 1] || null)) {
          result = toResult(visitor(node2, parents));
          if (result[0] === EXIT) {
            return result;
          }
        }
        if (node2.children && result[0] !== SKIP) {
          offset = (reverse ? node2.children.length : -1) + step;
          grandparents = parents.concat(node2);
          while (offset > -1 && offset < node2.children.length) {
            subresult = factory(node2.children[offset], offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
        return result;
      }
    }
  }
);
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return [value];
}

// ../../node_modules/.pnpm/mdast-util-find-and-replace@2.2.2/node_modules/mdast-util-find-and-replace/lib/index.js
var own2 = {}.hasOwnProperty;
var findAndReplace = (
  /**
   * @type {(
   *   (<Tree extends Node>(tree: Tree, find: Find, replace?: Replace | null | undefined, options?: Options | null | undefined) => Tree) &
   *   (<Tree extends Node>(tree: Tree, schema: FindAndReplaceSchema | FindAndReplaceList, options?: Options | null | undefined) => Tree)
   * )}
   **/
  /**
   * @template {Node} Tree
   * @param {Tree} tree
   * @param {Find | FindAndReplaceSchema | FindAndReplaceList} find
   * @param {Replace | Options | null | undefined} [replace]
   * @param {Options | null | undefined} [options]
   * @returns {Tree}
   */
  function(tree, find, replace2, options) {
    let settings;
    let schema;
    if (typeof find === "string" || find instanceof RegExp) {
      schema = [[find, replace2]];
      settings = options;
    } else {
      schema = find;
      settings = replace2;
    }
    if (!settings) {
      settings = {};
    }
    const ignored = convert(settings.ignore || []);
    const pairs = toPairs(schema);
    let pairIndex = -1;
    while (++pairIndex < pairs.length) {
      visitParents(tree, "text", visitor);
    }
    return tree;
    function visitor(node2, parents) {
      let index2 = -1;
      let grandparent;
      while (++index2 < parents.length) {
        const parent = parents[index2];
        if (ignored(
          parent,
          // @ts-expect-error: TS doesn’t understand but it’s perfect.
          grandparent ? grandparent.children.indexOf(parent) : void 0,
          grandparent
        )) {
          return;
        }
        grandparent = parent;
      }
      if (grandparent) {
        return handler(node2, parents);
      }
    }
    function handler(node2, parents) {
      const parent = parents[parents.length - 1];
      const find2 = pairs[pairIndex][0];
      const replace3 = pairs[pairIndex][1];
      let start = 0;
      const index2 = parent.children.indexOf(node2);
      let change = false;
      let nodes = [];
      find2.lastIndex = 0;
      let match = find2.exec(node2.value);
      while (match) {
        const position2 = match.index;
        const matchObject = {
          index: match.index,
          input: match.input,
          // @ts-expect-error: stack is fine.
          stack: [...parents, node2]
        };
        let value = replace3(...match, matchObject);
        if (typeof value === "string") {
          value = value.length > 0 ? { type: "text", value } : void 0;
        }
        if (value !== false) {
          if (start !== position2) {
            nodes.push({
              type: "text",
              value: node2.value.slice(start, position2)
            });
          }
          if (Array.isArray(value)) {
            nodes.push(...value);
          } else if (value) {
            nodes.push(value);
          }
          start = position2 + match[0].length;
          change = true;
        }
        if (!find2.global) {
          break;
        }
        match = find2.exec(node2.value);
      }
      if (change) {
        if (start < node2.value.length) {
          nodes.push({ type: "text", value: node2.value.slice(start) });
        }
        parent.children.splice(index2, 1, ...nodes);
      } else {
        nodes = [node2];
      }
      return index2 + nodes.length;
    }
  }
);
function toPairs(schema) {
  const result = [];
  if (typeof schema !== "object") {
    throw new TypeError("Expected array or object as schema");
  }
  if (Array.isArray(schema)) {
    let index2 = -1;
    while (++index2 < schema.length) {
      result.push([
        toExpression(schema[index2][0]),
        toFunction(schema[index2][1])
      ]);
    }
  } else {
    let key2;
    for (key2 in schema) {
      if (own2.call(schema, key2)) {
        result.push([toExpression(key2), toFunction(schema[key2])]);
      }
    }
  }
  return result;
}
function toExpression(find) {
  return typeof find === "string" ? new RegExp(escapeStringRegexp(find), "g") : find;
}
function toFunction(replace2) {
  return typeof replace2 === "function" ? replace2 : () => replace2;
}

// ../../node_modules/.pnpm/mdast-util-gfm-autolink-literal@1.0.3/node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var inConstruct = "phrasing";
var notInConstruct = ["autolink", "link", "image", "label"];
var gfmAutolinkLiteralFromMarkdown = {
  transforms: [transformGfmAutolinkLiterals],
  enter: {
    literalAutolink: enterLiteralAutolink,
    literalAutolinkEmail: enterLiteralAutolinkValue,
    literalAutolinkHttp: enterLiteralAutolinkValue,
    literalAutolinkWww: enterLiteralAutolinkValue
  },
  exit: {
    literalAutolink: exitLiteralAutolink,
    literalAutolinkEmail: exitLiteralAutolinkEmail,
    literalAutolinkHttp: exitLiteralAutolinkHttp,
    literalAutolinkWww: exitLiteralAutolinkWww
  }
};
var gfmAutolinkLiteralToMarkdown = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct,
      notInConstruct
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct,
      notInConstruct
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct, notInConstruct }
  ]
};
function enterLiteralAutolink(token) {
  this.enter({ type: "link", title: null, url: "", children: [] }, token);
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node2 = (
    /** @type {Link} */
    this.stack[this.stack.length - 1]
  );
  node2.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function findUrl(_, protocol, domain2, path2, match) {
  let prefix = "";
  if (!previous2(match)) {
    return false;
  }
  if (/^w/i.test(protocol)) {
    domain2 = protocol + domain2;
    protocol = "";
    prefix = "http://";
  }
  if (!isCorrectDomain(domain2)) {
    return false;
  }
  const parts = splitUrl(domain2 + path2);
  if (!parts[0])
    return false;
  const result = {
    type: "link",
    title: null,
    url: prefix + protocol + parts[0],
    children: [{ type: "text", value: protocol + parts[0] }]
  };
  if (parts[1]) {
    return [result, { type: "text", value: parts[1] }];
  }
  return result;
}
function findEmail(_, atext, label, match) {
  if (
    // Not an expected previous character.
    !previous2(match, true) || // Label ends in not allowed character.
    /[-\d_]$/.test(label)
  ) {
    return false;
  }
  return {
    type: "link",
    title: null,
    url: "mailto:" + atext + "@" + label,
    children: [{ type: "text", value: atext + "@" + label }]
  };
}
function isCorrectDomain(domain2) {
  const parts = domain2.split(".");
  if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
    return false;
  }
  return true;
}
function splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
  if (!trailExec) {
    return [url, void 0];
  }
  url = url.slice(0, trailExec.index);
  let trail2 = trailExec[0];
  let closingParenIndex = trail2.indexOf(")");
  const openingParens = ccount(url, "(");
  let closingParens = ccount(url, ")");
  while (closingParenIndex !== -1 && openingParens > closingParens) {
    url += trail2.slice(0, closingParenIndex + 1);
    trail2 = trail2.slice(closingParenIndex + 1);
    closingParenIndex = trail2.indexOf(")");
    closingParens++;
  }
  return [url, trail2];
}
function previous2(match, email) {
  const code2 = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code2) || unicodePunctuation(code2)) && (!email || code2 !== 47);
}

// ../../node_modules/.pnpm/mdast-util-gfm-footnote@1.0.2/node_modules/mdast-util-gfm-footnote/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-gfm-footnote@1.0.2/node_modules/mdast-util-gfm-footnote/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/association.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-util-decode-string@1.1.0/node_modules/micromark-util-decode-string/index.js
init_react_shim();

// ../../node_modules/.pnpm/micromark-util-decode-numeric-character-reference@1.1.0/node_modules/micromark-util-decode-numeric-character-reference/index.js
init_react_shim();
function decodeNumericCharacterReference(value, base2) {
  const code2 = Number.parseInt(value, base2);
  if (
    // C0 except for HT, LF, FF, CR, space.
    code2 < 9 || code2 === 11 || code2 > 13 && code2 < 32 || // Control character (DEL) of C0, and C1 controls.
    code2 > 126 && code2 < 160 || // Lone high surrogates and low surrogates.
    code2 > 55295 && code2 < 57344 || // Noncharacters.
    code2 > 64975 && code2 < 65008 || (code2 & 65535) === 65535 || (code2 & 65535) === 65534 || // Out of range
    code2 > 1114111
  ) {
    return "\uFFFD";
  }
  return String.fromCharCode(code2);
}

// ../../node_modules/.pnpm/micromark-util-decode-string@1.1.0/node_modules/micromark-util-decode-string/index.js
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/association.js
function association(node2) {
  if (node2.label || !node2.identifier) {
    return node2.label || "";
  }
  return decodeString(node2.identifier);
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/container-flow.js
init_react_shim();
function containerFlow(parent, state, info) {
  const indexStack = state.indexStack;
  const children = parent.children || [];
  const tracker = state.createTracker(info);
  const results = [];
  let index2 = -1;
  indexStack.push(-1);
  while (++index2 < children.length) {
    const child = children[index2];
    indexStack[indexStack.length - 1] = index2;
    results.push(
      tracker.move(
        state.handle(child, parent, state, {
          before: "\n",
          after: "\n",
          ...tracker.current()
        })
      )
    );
    if (child.type !== "list") {
      state.bulletLastUsed = void 0;
    }
    if (index2 < children.length - 1) {
      results.push(
        tracker.move(between(child, children[index2 + 1], parent, state))
      );
    }
  }
  indexStack.pop();
  return results.join("");
}
function between(left, right, parent, state) {
  let index2 = state.join.length;
  while (index2--) {
    const result = state.join[index2](left, right, parent, state);
    if (result === true || result === 1) {
      break;
    }
    if (typeof result === "number") {
      return "\n".repeat(1 + result);
    }
    if (result === false) {
      return "\n\n<!---->\n\n";
    }
  }
  return "\n\n";
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
init_react_shim();
var eol = /\r?\n|\r/g;
function indentLines(value, map2) {
  const result = [];
  let start = 0;
  let line = 0;
  let match;
  while (match = eol.exec(value)) {
    one2(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }
  one2(value.slice(start));
  return result.join("");
  function one2(value2) {
    result.push(map2(value2, line, !value2));
  }
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/safe.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
init_react_shim();
function patternCompile(pattern) {
  if (!pattern._compiled) {
    const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
    pattern._compiled = new RegExp(
      (before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""),
      "g"
    );
  }
  return pattern._compiled;
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
init_react_shim();
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list2, none) {
  if (typeof list2 === "string") {
    list2 = [list2];
  }
  if (!list2 || list2.length === 0) {
    return none;
  }
  let index2 = -1;
  while (++index2 < list2.length) {
    if (stack.includes(list2[index2])) {
      return true;
    }
  }
  return false;
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/safe.js
function safe(state, input, config) {
  const value = (config.before || "") + (input || "") + (config.after || "");
  const positions = [];
  const result = [];
  const infos = {};
  let index2 = -1;
  while (++index2 < state.unsafe.length) {
    const pattern = state.unsafe[index2];
    if (!patternInScope(state.stack, pattern)) {
      continue;
    }
    const expression = patternCompile(pattern);
    let match;
    while (match = expression.exec(value)) {
      const before = "before" in pattern || Boolean(pattern.atBreak);
      const after = "after" in pattern;
      const position2 = match.index + (before ? match[1].length : 0);
      if (positions.includes(position2)) {
        if (infos[position2].before && !before) {
          infos[position2].before = false;
        }
        if (infos[position2].after && !after) {
          infos[position2].after = false;
        }
      } else {
        positions.push(position2);
        infos[position2] = { before, after };
      }
    }
  }
  positions.sort(numerical);
  let start = config.before ? config.before.length : 0;
  const end = value.length - (config.after ? config.after.length : 0);
  index2 = -1;
  while (++index2 < positions.length) {
    const position2 = positions[index2];
    if (position2 < start || position2 >= end) {
      continue;
    }
    if (position2 + 1 < end && positions[index2 + 1] === position2 + 1 && infos[position2].after && !infos[position2 + 1].before && !infos[position2 + 1].after || positions[index2 - 1] === position2 - 1 && infos[position2].before && !infos[position2 - 1].before && !infos[position2 - 1].after) {
      continue;
    }
    if (start !== position2) {
      result.push(escapeBackslashes(value.slice(start, position2), "\\"));
    }
    start = position2;
    if (/[!-/:-@[-`{-~]/.test(value.charAt(position2)) && (!config.encode || !config.encode.includes(value.charAt(position2)))) {
      result.push("\\");
    } else {
      result.push(
        "&#x" + value.charCodeAt(position2).toString(16).toUpperCase() + ";"
      );
      start++;
    }
  }
  result.push(escapeBackslashes(value.slice(start, end), config.after));
  return result.join("");
}
function numerical(a, b) {
  return a - b;
}
function escapeBackslashes(value, after) {
  const expression = /\\(?=[!-/:-@[-`{-~])/g;
  const positions = [];
  const results = [];
  const whole = value + after;
  let index2 = -1;
  let start = 0;
  let match;
  while (match = expression.exec(whole)) {
    positions.push(match.index);
  }
  while (++index2 < positions.length) {
    if (start !== positions[index2]) {
      results.push(value.slice(start, positions[index2]));
    }
    results.push("\\");
    start = positions[index2];
  }
  results.push(value.slice(start));
  return results.join("");
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/track.js
init_react_shim();
function track(config) {
  const options = config || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(input) {
    const value = input || "";
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}

// ../../node_modules/.pnpm/mdast-util-gfm-footnote@1.0.2/node_modules/mdast-util-gfm-footnote/lib/index.js
footnoteReference.peek = footnoteReferencePeek;
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteDefinition: enterFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteCallString: enterFootnoteCallString
    },
    exit: {
      gfmFootnoteDefinition: exitFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteCallString: exitFootnoteCallString
    }
  };
}
function gfmFootnoteToMarkdown() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition, footnoteReference }
  };
}
function enterFootnoteDefinition(token) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    token
  );
}
function enterFootnoteDefinitionLabelString() {
  this.buffer();
}
function exitFootnoteDefinitionLabelString(token) {
  const label = this.resume();
  const node2 = (
    /** @type {FootnoteDefinition} */
    this.stack[this.stack.length - 1]
  );
  node2.label = label;
  node2.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
}
function exitFootnoteDefinition(token) {
  this.exit(token);
}
function enterFootnoteCall(token) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
}
function enterFootnoteCallString() {
  this.buffer();
}
function exitFootnoteCallString(token) {
  const label = this.resume();
  const node2 = (
    /** @type {FootnoteDefinition} */
    this.stack[this.stack.length - 1]
  );
  node2.label = label;
  node2.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
}
function exitFootnoteCall(token) {
  this.exit(token);
}
function footnoteReference(node2, _, context, safeOptions) {
  const tracker = track(safeOptions);
  let value = tracker.move("[^");
  const exit3 = context.enter("footnoteReference");
  const subexit = context.enter("reference");
  value += tracker.move(
    safe(context, association(node2), {
      ...tracker.current(),
      before: value,
      after: "]"
    })
  );
  subexit();
  exit3();
  value += tracker.move("]");
  return value;
}
function footnoteReferencePeek() {
  return "[";
}
function footnoteDefinition(node2, _, context, safeOptions) {
  const tracker = track(safeOptions);
  let value = tracker.move("[^");
  const exit3 = context.enter("footnoteDefinition");
  const subexit = context.enter("label");
  value += tracker.move(
    safe(context, association(node2), {
      ...tracker.current(),
      before: value,
      after: "]"
    })
  );
  subexit();
  value += tracker.move(
    "]:" + (node2.children && node2.children.length > 0 ? " " : "")
  );
  tracker.shift(4);
  value += tracker.move(
    indentLines(containerFlow(node2, context, tracker.current()), map)
  );
  exit3();
  return value;
}
function map(line, index2, blank) {
  if (index2 === 0) {
    return line;
  }
  return (blank ? "" : "    ") + line;
}

// ../../node_modules/.pnpm/mdast-util-gfm-strikethrough@1.0.3/node_modules/mdast-util-gfm-strikethrough/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-gfm-strikethrough@1.0.3/node_modules/mdast-util-gfm-strikethrough/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
init_react_shim();
function containerPhrasing(parent, state, info) {
  const indexStack = state.indexStack;
  const children = parent.children || [];
  const results = [];
  let index2 = -1;
  let before = info.before;
  indexStack.push(-1);
  let tracker = state.createTracker(info);
  while (++index2 < children.length) {
    const child = children[index2];
    let after;
    indexStack[indexStack.length - 1] = index2;
    if (index2 + 1 < children.length) {
      let handle = state.handle.handlers[children[index2 + 1].type];
      if (handle && handle.peek)
        handle = handle.peek;
      after = handle ? handle(children[index2 + 1], parent, state, {
        before: "",
        after: "",
        ...tracker.current()
      }).charAt(0) : "";
    } else {
      after = info.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(
        /(\r?\n|\r)$/,
        " "
      );
      before = " ";
      tracker = state.createTracker(info);
      tracker.move(results.join(""));
    }
    results.push(
      tracker.move(
        state.handle(child, parent, state, {
          ...tracker.current(),
          before,
          after
        })
      )
    );
    before = results[results.length - 1].slice(-1);
  }
  indexStack.pop();
  return results.join("");
}

// ../../node_modules/.pnpm/mdast-util-gfm-strikethrough@1.0.3/node_modules/mdast-util-gfm-strikethrough/lib/index.js
var constructsWithoutStrikethrough = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
handleDelete.peek = peekDelete;
var gfmStrikethroughFromMarkdown = {
  canContainEols: ["delete"],
  enter: { strikethrough: enterStrikethrough },
  exit: { strikethrough: exitStrikethrough }
};
var gfmStrikethroughToMarkdown = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: constructsWithoutStrikethrough
    }
  ],
  handlers: { delete: handleDelete }
};
function enterStrikethrough(token) {
  this.enter({ type: "delete", children: [] }, token);
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node2, _, context, safeOptions) {
  const tracker = track(safeOptions);
  const exit3 = context.enter("strikethrough");
  let value = tracker.move("~~");
  value += containerPhrasing(node2, context, {
    ...tracker.current(),
    before: value,
    after: "~"
  });
  value += tracker.move("~~");
  exit3();
  return value;
}
function peekDelete() {
  return "~";
}

// ../../node_modules/.pnpm/mdast-util-gfm-table@1.0.7/node_modules/mdast-util-gfm-table/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-gfm-table@1.0.7/node_modules/mdast-util-gfm-table/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
init_react_shim();
inlineCode.peek = inlineCodePeek;
function inlineCode(node2, _, state) {
  let value = node2.value || "";
  let sequence = "`";
  let index2 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index2 < state.unsafe.length) {
    const pattern = state.unsafe[index2];
    const expression = patternCompile(pattern);
    let match;
    if (!pattern.atBreak)
      continue;
    while (match = expression.exec(value)) {
      let position2 = match.index;
      if (value.charCodeAt(position2) === 10 && value.charCodeAt(position2 - 1) === 13) {
        position2--;
      }
      value = value.slice(0, position2) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}

// ../../node_modules/.pnpm/markdown-table@3.0.3/node_modules/markdown-table/index.js
init_react_shim();
function markdownTable(table, options = {}) {
  const align = (options.align || []).concat();
  const stringLength = options.stringLength || defaultStringLength;
  const alignments = [];
  const cellMatrix = [];
  const sizeMatrix = [];
  const longestCellByColumn = [];
  let mostCellsPerRow = 0;
  let rowIndex = -1;
  while (++rowIndex < table.length) {
    const row2 = [];
    const sizes2 = [];
    let columnIndex2 = -1;
    if (table[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table[rowIndex].length;
    }
    while (++columnIndex2 < table[rowIndex].length) {
      const cell = serialize(table[rowIndex][columnIndex2]);
      if (options.alignDelimiters !== false) {
        const size = stringLength(cell);
        sizes2[columnIndex2] = size;
        if (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) {
          longestCellByColumn[columnIndex2] = size;
        }
      }
      row2.push(cell);
    }
    cellMatrix[rowIndex] = row2;
    sizeMatrix[rowIndex] = sizes2;
  }
  let columnIndex = -1;
  if (typeof align === "object" && "length" in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = toAlignment(align[columnIndex]);
    }
  } else {
    const code2 = toAlignment(align);
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code2;
    }
  }
  columnIndex = -1;
  const row = [];
  const sizes = [];
  while (++columnIndex < mostCellsPerRow) {
    const code2 = alignments[columnIndex];
    let before = "";
    let after = "";
    if (code2 === 99) {
      before = ":";
      after = ":";
    } else if (code2 === 108) {
      before = ":";
    } else if (code2 === 114) {
      after = ":";
    }
    let size = options.alignDelimiters === false ? 1 : Math.max(
      1,
      longestCellByColumn[columnIndex] - before.length - after.length
    );
    const cell = before + "-".repeat(size) + after;
    if (options.alignDelimiters !== false) {
      size = before.length + size + after.length;
      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }
      sizes[columnIndex] = size;
    }
    row[columnIndex] = cell;
  }
  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);
  rowIndex = -1;
  const lines = [];
  while (++rowIndex < cellMatrix.length) {
    const row2 = cellMatrix[rowIndex];
    const sizes2 = sizeMatrix[rowIndex];
    columnIndex = -1;
    const line = [];
    while (++columnIndex < mostCellsPerRow) {
      const cell = row2[columnIndex] || "";
      let before = "";
      let after = "";
      if (options.alignDelimiters !== false) {
        const size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0);
        const code2 = alignments[columnIndex];
        if (code2 === 114) {
          before = " ".repeat(size);
        } else if (code2 === 99) {
          if (size % 2) {
            before = " ".repeat(size / 2 + 0.5);
            after = " ".repeat(size / 2 - 0.5);
          } else {
            before = " ".repeat(size / 2);
            after = before;
          }
        } else {
          after = " ".repeat(size);
        }
      }
      if (options.delimiterStart !== false && !columnIndex) {
        line.push("|");
      }
      if (options.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(options.alignDelimiters === false && cell === "") && (options.delimiterStart !== false || columnIndex)) {
        line.push(" ");
      }
      if (options.alignDelimiters !== false) {
        line.push(before);
      }
      line.push(cell);
      if (options.alignDelimiters !== false) {
        line.push(after);
      }
      if (options.padding !== false) {
        line.push(" ");
      }
      if (options.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
        line.push("|");
      }
    }
    lines.push(
      options.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join("")
    );
  }
  return lines.join("\n");
}
function serialize(value) {
  return value === null || value === void 0 ? "" : String(value);
}
function defaultStringLength(value) {
  return value.length;
}
function toAlignment(value) {
  const code2 = typeof value === "string" ? value.codePointAt(0) : 0;
  return code2 === 67 || code2 === 99 ? 99 : code2 === 76 || code2 === 108 ? 108 : code2 === 82 || code2 === 114 ? 114 : 0;
}

// ../../node_modules/.pnpm/mdast-util-gfm-table@1.0.7/node_modules/mdast-util-gfm-table/lib/index.js
var gfmTableFromMarkdown = {
  enter: {
    table: enterTable,
    tableData: enterCell,
    tableHeader: enterCell,
    tableRow: enterRow
  },
  exit: {
    codeText: exitCodeText,
    table: exitTable,
    tableData: exit2,
    tableHeader: exit2,
    tableRow: exit2
  }
};
function enterTable(token) {
  const align = token._align;
  this.enter(
    {
      type: "table",
      align: align.map((d) => d === "none" ? null : d),
      children: []
    },
    token
  );
  this.setData("inTable", true);
}
function exitTable(token) {
  this.exit(token);
  this.setData("inTable");
}
function enterRow(token) {
  this.enter({ type: "tableRow", children: [] }, token);
}
function exit2(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter({ type: "tableCell", children: [] }, token);
}
function exitCodeText(token) {
  let value = this.resume();
  if (this.getData("inTable")) {
    value = value.replace(/\\([\\|])/g, replace);
  }
  const node2 = (
    /** @type {InlineCode} */
    this.stack[this.stack.length - 1]
  );
  node2.value = value;
  this.exit(token);
}
function replace($0, $1) {
  return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: "\n", inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: true, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: true, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: true, character: "-", after: "[:|-]" }
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  };
  function handleTable(node2, _, context, safeOptions) {
    return serializeData(
      handleTableAsData(node2, context, safeOptions),
      node2.align
    );
  }
  function handleTableRow(node2, _, context, safeOptions) {
    const row = handleTableRowAsData(node2, context, safeOptions);
    const value = serializeData([row]);
    return value.slice(0, value.indexOf("\n"));
  }
  function handleTableCell(node2, _, context, safeOptions) {
    const exit3 = context.enter("tableCell");
    const subexit = context.enter("phrasing");
    const value = containerPhrasing(node2, context, {
      ...safeOptions,
      before: around,
      after: around
    });
    subexit();
    exit3();
    return value;
  }
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength
    });
  }
  function handleTableAsData(node2, context, safeOptions) {
    const children = node2.children;
    let index2 = -1;
    const result = [];
    const subexit = context.enter("table");
    while (++index2 < children.length) {
      result[index2] = handleTableRowAsData(
        children[index2],
        context,
        safeOptions
      );
    }
    subexit();
    return result;
  }
  function handleTableRowAsData(node2, context, safeOptions) {
    const children = node2.children;
    let index2 = -1;
    const result = [];
    const subexit = context.enter("tableRow");
    while (++index2 < children.length) {
      result[index2] = handleTableCell(
        children[index2],
        node2,
        context,
        safeOptions
      );
    }
    subexit();
    return result;
  }
  function inlineCodeWithTable(node2, parent, context) {
    let value = inlineCode(node2, parent, context);
    if (context.stack.includes("tableCell")) {
      value = value.replace(/\|/g, "\\$&");
    }
    return value;
  }
}

// ../../node_modules/.pnpm/mdast-util-gfm-task-list-item@1.0.2/node_modules/mdast-util-gfm-task-list-item/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-gfm-task-list-item@1.0.2/node_modules/mdast-util-gfm-task-list-item/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/handle/list-item.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
init_react_shim();
function checkBullet(state) {
  const marker = state.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  }
  return marker;
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
init_react_shim();
function checkListItemIndent(state) {
  const style = state.options.listItemIndent || "tab";
  if (style === 1 || style === "1") {
    return "one";
  }
  if (style !== "tab" && style !== "one" && style !== "mixed") {
    throw new Error(
      "Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  }
  return style;
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@1.5.0/node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem(node2, parent, state, info) {
  const listItemIndent = checkListItemIndent(state);
  let bullet = state.bulletCurrent || checkBullet(state);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node2)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node2.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = state.createTracker(info);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit3 = state.enter("listItem");
  const value = state.indentLines(
    state.containerFlow(node2, tracker.current()),
    map2
  );
  exit3();
  return value;
  function map2(line, index2, blank) {
    if (index2) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}

// ../../node_modules/.pnpm/mdast-util-gfm-task-list-item@1.0.2/node_modules/mdast-util-gfm-task-list-item/lib/index.js
var gfmTaskListItemFromMarkdown = {
  exit: {
    taskListCheckValueChecked: exitCheck,
    taskListCheckValueUnchecked: exitCheck,
    paragraph: exitParagraphWithTaskListItem
  }
};
var gfmTaskListItemToMarkdown = {
  unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
  handlers: { listItem: listItemWithTaskListItem }
};
function exitCheck(token) {
  const node2 = (
    /** @type {ListItem} */
    this.stack[this.stack.length - 2]
  );
  node2.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
  const parent = (
    /** @type {Parents} */
    this.stack[this.stack.length - 2]
  );
  if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
    const node2 = (
      /** @type {Paragraph} */
      this.stack[this.stack.length - 1]
    );
    const head = node2.children[0];
    if (head && head.type === "text") {
      const siblings = parent.children;
      let index2 = -1;
      let firstParaghraph;
      while (++index2 < siblings.length) {
        const sibling = siblings[index2];
        if (sibling.type === "paragraph") {
          firstParaghraph = sibling;
          break;
        }
      }
      if (firstParaghraph === node2) {
        head.value = head.value.slice(1);
        if (head.value.length === 0) {
          node2.children.shift();
        } else if (node2.position && head.position && typeof head.position.start.offset === "number") {
          head.position.start.column++;
          head.position.start.offset++;
          node2.position.start = Object.assign({}, head.position.start);
        }
      }
    }
  }
  this.exit(token);
}
function listItemWithTaskListItem(node2, parent, context, safeOptions) {
  const head = node2.children[0];
  const checkable = typeof node2.checked === "boolean" && head && head.type === "paragraph";
  const checkbox = "[" + (node2.checked ? "x" : " ") + "] ";
  const tracker = track(safeOptions);
  if (checkable) {
    tracker.move(checkbox);
  }
  let value = listItem(node2, parent, context, {
    ...safeOptions,
    ...tracker.current()
  });
  if (checkable) {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }
  return value;
  function check($0) {
    return $0 + checkbox;
  }
}

// ../../node_modules/.pnpm/mdast-util-gfm@2.0.2/node_modules/mdast-util-gfm/lib/index.js
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown,
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown,
    gfmTableFromMarkdown,
    gfmTaskListItemFromMarkdown
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown,
      gfmFootnoteToMarkdown(),
      gfmStrikethroughToMarkdown,
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown
    ]
  };
}

// ../../node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js
function remarkGfm(options = {}) {
  const data2 = this.data();
  add("micromarkExtensions", gfm(options));
  add("fromMarkdownExtensions", gfmFromMarkdown());
  add("toMarkdownExtensions", gfmToMarkdown(options));
  function add(field, value) {
    const list2 = (
      /** @type {unknown[]} */
      // Other extensions
      /* c8 ignore next 2 */
      data2[field] ? data2[field] : data2[field] = []
    );
    list2.push(value);
  }
}

// ../../node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js
init_react_shim();

// ../../node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-from-markdown@1.3.1/node_modules/mdast-util-from-markdown/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-from-markdown@1.3.1/node_modules/mdast-util-from-markdown/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-to-string@3.2.0/node_modules/mdast-util-to-string/index.js
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-to-string@3.2.0/node_modules/mdast-util-to-string/lib/index.js
init_react_shim();
var emptyOptions = {};
function toString(value, options) {
  const settings = options || emptyOptions;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one(value, includeImageAlt, includeHtml);
}
function one(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all(values, includeImageAlt, includeHtml) {
  const result = [];
  let index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one(values[index2], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node(value) {
  return Boolean(value && typeof value === "object");
}

// ../../node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/parse.js
init_react_shim();

// ../../node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/initialize/content.js
init_react_shim();
var content2 = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  );
  let previous3;
  return contentStart;
  function afterContentStartConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code2) {
    effects.enter("paragraph");
    return lineStart(code2);
  }
  function lineStart(code2) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous3
    });
    if (previous3) {
      previous3.next = token;
    }
    previous3 = token;
    return data2(code2);
  }
  function data2(code2) {
    if (code2 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code2);
      return;
    }
    if (markdownLineEnding(code2)) {
      effects.consume(code2);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code2);
    return data2;
  }
}

// ../../node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/initialize/document.js
init_react_shim();
var document2 = {
  tokenize: initializeDocument
};
var containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code2) {
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(
        item[0].continuation,
        documentContinue,
        checkNewContainers
      )(code2);
    }
    return checkNewContainers(code2);
  }
  function documentContinue(code2) {
    continued++;
    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point3;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          point3 = self.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      while (index2 < self.events.length) {
        self.events[index2][1].end = Object.assign({}, point3);
        index2++;
      }
      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      );
      self.events.length = index2;
      return checkNewContainers(code2);
    }
    return start(code2);
  }
  function checkNewContainers(code2) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code2);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code2);
      }
      self.interrupt = Boolean(
        childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
      );
    }
    self.containerState = {};
    return effects.check(
      containerConstruct,
      thereIsANewContainer,
      thereIsNoNewContainer
    )(code2);
  }
  function thereIsANewContainer(code2) {
    if (childFlow)
      closeFlow();
    exitContainers(continued);
    return documentContinued(code2);
  }
  function thereIsNoNewContainer(code2) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code2);
  }
  function documentContinued(code2) {
    self.containerState = {};
    return effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code2);
  }
  function containerContinue(code2) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]);
    return documentContinued(code2);
  }
  function flowStart(code2) {
    if (code2 === null) {
      if (childFlow)
        closeFlow();
      exitContainers(0);
      effects.consume(code2);
      return;
    }
    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code2);
  }
  function flowContinue(code2) {
    if (code2 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code2);
      return;
    }
    if (markdownLineEnding(code2)) {
      effects.consume(code2);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self.interrupt = void 0;
      return start;
    }
    effects.consume(code2);
    return flowContinue;
  }
  function writeToChild(token, eof) {
    const stream = self.sliceStream(token);
    if (eof)
      stream.push(null);
    token.previous = childToken;
    if (childToken)
      childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      while (index2--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index2][1].start.offset < lineStartOffset && // …and either is not ended yet…
          (!childFlow.events[index2][1].end || // …or ends after it.
          childFlow.events[index2][1].end.offset > lineStartOffset)
        ) {
          return;
        }
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point3;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point3 = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index2 = indexBeforeExits;
      while (index2 < self.events.length) {
        self.events[index2][1].end = Object.assign({}, point3);
        index2++;
      }
      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      );
      self.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    while (index2-- > size) {
      const entry = stack[index2];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok2, nok),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}

// ../../node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/initialize/flow.js
init_react_shim();
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(
    // Try to parse a blank line.
    blankLine,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content, afterConstruct)
        ),
        "linePrefix"
      )
    )
  );
  return initial;
  function atBlankEnding(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code2);
    effects.exit("lineEndingBlank");
    self.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    self.currentConstruct = void 0;
    return initial;
  }
}

// ../../node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/initialize/text.js
init_react_shim();
var resolver = {
  resolveAll: createResolver()
};
var string = initializeFactory("string");
var text2 = initializeFactory("text");
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === "text" ? resolveAllLineSuffixes : void 0
    )
  };
  function initializeText(effects) {
    const self = this;
    const constructs2 = this.parser.constructs[field];
    const text4 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code2) {
      return atBreak(code2) ? text4(code2) : notText(code2);
    }
    function notText(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("data");
      effects.consume(code2);
      return data2;
    }
    function data2(code2) {
      if (atBreak(code2)) {
        effects.exit("data");
        return text4(code2);
      }
      effects.consume(code2);
      return data2;
    }
    function atBreak(code2) {
      if (code2 === null) {
        return true;
      }
      const list2 = constructs2[code2];
      let index2 = -1;
      if (list2) {
        while (++index2 < list2.length) {
          const item = list2[index2];
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1;
    let enter;
    while (++index2 <= events.length) {
      if (enter === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data2 = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data2);
      let index2 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index2--) {
        const chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) {
        } else {
          index2++;
          break;
        }
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data2.end.line,
            column: data2.end.column - size,
            offset: data2.end.offset - size,
            _index: data2.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data2.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data2.end)
        };
        data2.end = Object.assign({}, token.start);
        if (data2.start.offset === data2.end.offset) {
          Object.assign(data2, token);
        } else {
          events.splice(
            eventIndex,
            0,
            ["enter", token, context],
            ["exit", token, context]
          );
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}

// ../../node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/create-tokenizer.js
init_react_shim();
function createTokenizer(parser2, initialize, from) {
  let point3 = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  let consumed = true;
  const effects = {
    consume,
    enter,
    exit: exit3,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: parser2,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  let expectedCode;
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    const { line, column, offset, _index, _bufferIndex } = point3;
    return {
      line,
      column,
      offset,
      _index,
      _bufferIndex
    };
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point3._index < chunks.length) {
      const chunk = chunks[point3._index];
      if (typeof chunk === "string") {
        chunkIndex = point3._index;
        if (point3._bufferIndex < 0) {
          point3._bufferIndex = 0;
        }
        while (point3._index === chunkIndex && point3._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point3._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code2) {
    consumed = void 0;
    expectedCode = code2;
    state = state(code2);
  }
  function consume(code2) {
    if (markdownLineEnding(code2)) {
      point3.line++;
      point3.column = 1;
      point3.offset += code2 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code2 !== -1) {
      point3.column++;
      point3.offset++;
    }
    if (point3._bufferIndex < 0) {
      point3._index++;
    } else {
      point3._bufferIndex++;
      if (point3._bufferIndex === chunks[point3._index].length) {
        point3._bufferIndex = -1;
        point3._index++;
      }
    }
    context.previous = code2;
    consumed = true;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit3(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? (
        // @ts-expect-error Looks like a construct.
        handleListOfConstructs([constructs2])
      ) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map2) {
        return start;
        function start(code2) {
          const def = code2 !== null && map2[code2];
          const all2 = code2 !== null && map2.null;
          const list2 = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all2) ? all2 : all2 ? [all2] : []
          ];
          return handleListOfConstructs(list2)(code2);
        }
      }
      function handleListOfConstructs(list2) {
        listOfConstructs = list2;
        constructIndex = 0;
        if (list2.length === 0) {
          return bogusState;
        }
        return handleConstruct(list2[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code2) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok(code2);
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok2,
            nok
          )(code2);
        }
      }
      function ok2(code2) {
        consumed = true;
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code2) {
        consumed = true;
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point3 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point3.line in columnStart && point3.column < 2) {
      point3.column = columnStart[point3.line];
      point3.offset += columnStart[point3.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      const head = view[0];
      if (typeof head === "string") {
        view[0] = head.slice(startBufferIndex);
      } else {
        view.shift();
      }
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1;
  const result = [];
  let atTab;
  while (++index2 < chunks.length) {
    const chunk = chunks[index2];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

// ../../node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document3,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text3
});
init_react_shim();
var document3 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
};
var contentInitial = {
  [91]: definition
};
var flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
var flow2 = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
};
var string2 = {
  [38]: characterReference,
  [92]: characterEscape
};
var text3 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
var insideSpan = {
  null: [attention, resolver]
};
var attentionMarkers = {
  null: [42, 95]
};
var disable = {
  null: []
};

// ../../node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/parse.js
function parse(options) {
  const settings = options || {};
  const constructs2 = (
    /** @type {FullNormalizedExtension} */
    combineExtensions([constructs_exports, ...settings.extensions || []])
  );
  const parser2 = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create2(content2),
    document: create2(document2),
    flow: create2(flow),
    string: create2(string),
    text: create2(text2)
  };
  return parser2;
  function create2(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser2, initial, from);
    }
  }
}

// ../../node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/preprocess.js
init_react_shim();
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer2 = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code2;
    value = buffer2 + value.toString(encoding);
    startPosition = 0;
    buffer2 = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code2 = value.charCodeAt(endPosition);
      if (!match) {
        buffer2 = value.slice(startPosition);
        break;
      }
      if (code2 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code2) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next)
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn)
        chunks.push(-5);
      if (buffer2)
        chunks.push(buffer2);
      chunks.push(null);
    }
    return chunks;
  }
}

// ../../node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/postprocess.js
init_react_shim();
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}

// ../../node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/index.js
init_react_shim();

// ../../node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/lib/index.js
init_react_shim();
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point(value);
  }
  return "";
}
function point(point3) {
  return index(point3 && point3.line) + ":" + index(point3 && point3.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}

// ../../node_modules/.pnpm/mdast-util-from-markdown@1.3.1/node_modules/mdast-util-from-markdown/lib/index.js
var own3 = {}.hasOwnProperty;
var fromMarkdown = (
  /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options | null | undefined) => Root) &
   *   ((value: Value, options?: Options | null | undefined) => Root)
   * )}
   */
  /**
   * @param {Value} value
   * @param {Encoding | Options | null | undefined} [encoding]
   * @param {Options | null | undefined} [options]
   * @returns {Root}
   */
  function(value, encoding, options) {
    if (typeof encoding !== "string") {
      options = encoding;
      encoding = void 0;
    }
    return compiler(options)(
      postprocess(
        parse(options).document().write(preprocess()(value, encoding, true))
      )
    );
  }
);
function compiler(options) {
  const config = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: opener(link),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer2,
      codeFencedFenceMeta: buffer2,
      codeIndented: opener(codeFlow, buffer2),
      codeText: opener(codeText2, buffer2),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer2,
      definitionLabelString: buffer2,
      definitionTitleString: buffer2,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer2),
      htmlFlowData: onenterdata,
      htmlText: opener(html, buffer2),
      htmlTextData: onenterdata,
      image: opener(image),
      label: buffer2,
      link: opener(link),
      listItem: opener(listItem2),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list2, onenterlistordered),
      listUnordered: opener(list2),
      paragraph: opener(paragraph),
      reference: onenterreference,
      referenceString: buffer2,
      resourceDestinationString: buffer2,
      resourceTitleString: buffer2,
      setextHeading: opener(heading),
      strong: opener(strong),
      thematicBreak: opener(thematicBreak2)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  };
  configure(config, (options || {}).mdastExtensions || []);
  const data2 = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const context = {
      stack: [tree],
      tokenStack: [],
      config,
      enter,
      exit: exit3,
      buffer: buffer2,
      resume,
      setData,
      getData
    };
    const listStack = [];
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler = config[events[index2][0]];
      if (own3.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index2][2].sliceSerialize
            },
            context
          ),
          events[index2][1]
        );
      }
    }
    if (context.tokenStack.length > 0) {
      const tail = context.tokenStack[context.tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point2(
        events.length > 0 ? events[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: point2(
        events.length > 0 ? events[events.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem3;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
        if (event[0] === "enter") {
          containerBalance++;
        } else {
          containerBalance--;
        }
        atMarker = void 0;
      } else if (event[1].type === "lineEndingBlank") {
        if (event[0] === "enter") {
          if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
            firstBlankLineIndex = index2;
          }
          atMarker = void 0;
        }
      } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
      } else {
        atMarker = void 0;
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem3) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
            } else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem3._spread = true;
          }
          listItem3.end = Object.assign(
            {},
            lineIndex ? events[lineIndex][1].start : event[1].end
          );
          events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          listItem3 = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          events.splice(index2, 0, ["enter", listItem3, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function setData(key2, value) {
    data2[key2] = value;
  }
  function getData(key2) {
    return data2[key2];
  }
  function opener(create2, and) {
    return open;
    function open(token) {
      enter.call(this, create2(token), token);
      if (and)
        and.call(this, token);
    }
  }
  function buffer2() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node2, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node2);
    this.stack.push(node2);
    this.tokenStack.push([token, errorHandler]);
    node2.position = {
      start: point2(token.start)
    };
    return node2;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and)
        and.call(this, token);
      exit3.call(this, token);
    }
  }
  function exit3(token, onExitError) {
    const node2 = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node2.position.end = point2(token.end);
    return node2;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", true);
  }
  function onenterlistitemvalue(token) {
    if (getData("expectingFirstListItemValue")) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      setData("expectingFirstListItemValue");
    }
  }
  function onexitcodefencedfenceinfo() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.lang = data3;
  }
  function onexitcodefencedfencemeta() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.meta = data3;
  }
  function onexitcodefencedfence() {
    if (getData("flowCodeInside"))
      return;
    this.buffer();
    setData("flowCodeInside", true);
  }
  function onexitcodefenced() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data3.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    setData("flowCodeInside");
  }
  function onexitcodeindented() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data3.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data3;
  }
  function onexitdefinitiondestinationstring() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data3;
  }
  function onexitatxheadingsequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    if (!node2.depth) {
      const depth = this.sliceSerialize(token).length;
      node2.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    setData("setextHeadingSlurpLineEnding", true);
  }
  function onexitsetextheadinglinesequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    node2.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    setData("setextHeadingSlurpLineEnding");
  }
  function onenterdata(token) {
    const node2 = this.stack[this.stack.length - 1];
    let tail = node2.children[node2.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text4();
      tail.position = {
        start: point2(token.start)
      };
      node2.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point2(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (getData("atHardBreak")) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point2(token.end);
      setData("atHardBreak");
      return;
    }
    if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    setData("atHardBreak", true);
  }
  function onexithtmlflow() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data3;
  }
  function onexithtmltext() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data3;
  }
  function onexitcodetext() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data3;
  }
  function onexitlink() {
    const node2 = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      const referenceType = getData("referenceType") || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    setData("referenceType");
  }
  function onexitimage() {
    const node2 = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      const referenceType = getData("referenceType") || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    setData("referenceType");
  }
  function onexitlabeltext(token) {
    const string3 = this.sliceSerialize(token);
    const ancestor = this.stack[this.stack.length - 2];
    ancestor.label = decodeString(string3);
    ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    setData("inReference", true);
    if (node2.type === "link") {
      const children = fragment.children;
      node2.children = children;
    } else {
      node2.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data3;
  }
  function onexitresourcetitlestring() {
    const data3 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data3;
  }
  function onexitresource() {
    setData("inReference");
  }
  function onenterreference() {
    setData("referenceType", "collapsed");
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
    setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token) {
    setData("characterReferenceType", token.type);
  }
  function onexitcharacterreferencevalue(token) {
    const data3 = this.sliceSerialize(token);
    const type = getData("characterReferenceType");
    let value;
    if (type) {
      value = decodeNumericCharacterReference(
        data3,
        type === "characterReferenceMarkerNumeric" ? 10 : 16
      );
      setData("characterReferenceType");
    } else {
      const result = decodeNamedCharacterReference(data3);
      value = result;
    }
    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function hardBreak() {
    return {
      type: "break"
    };
  }
  function html() {
    return {
      type: "html",
      value: ""
    };
  }
  function image() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list2(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem2(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong() {
    return {
      type: "strong",
      children: []
    };
  }
  function text4() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak2() {
    return {
      type: "thematicBreak"
    };
  }
}
function point2(d) {
  return {
    line: d.line,
    column: d.column,
    offset: d.offset
  };
}
function configure(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
}
function extension(combined, extension2) {
  let key2;
  for (key2 in extension2) {
    if (own3.call(extension2, key2)) {
      if (key2 === "canContainEols") {
        const right = extension2[key2];
        if (right) {
          combined[key2].push(...right);
        }
      } else if (key2 === "transforms") {
        const right = extension2[key2];
        if (right) {
          combined[key2].push(...right);
        }
      } else if (key2 === "enter" || key2 === "exit") {
        const right = extension2[key2];
        if (right) {
          Object.assign(combined[key2], right);
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

// ../../node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/lib/index.js
function remarkParse(options) {
  const parser2 = (doc) => {
    const settings = (
      /** @type {Options} */
      this.data("settings")
    );
    return fromMarkdown(
      doc,
      Object.assign({}, settings, options, {
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  };
  Object.assign(this, { Parser: parser2 });
}

// ../../node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js
var remark_parse_default = remarkParse;

// ../../node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js
init_react_shim();

// ../../node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js
init_react_shim();

// ../../node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js
init_react_shim();
function bail(error) {
  if (error) {
    throw error;
  }
}

// ../../node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js
var import_is_buffer2 = __toESM(require_is_buffer(), 1);
var import_extend = __toESM(require_extend(), 1);

// ../../node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
init_react_shim();
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

// ../../node_modules/.pnpm/trough@2.1.0/node_modules/trough/index.js
init_react_shim();
function trough() {
  const fns = [];
  const pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError(
        "Expected `middelware` to be a function, not " + middelware
      );
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = (
        /** @type {Error} */
        error
      );
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}

// ../../node_modules/.pnpm/vfile@5.3.7/node_modules/vfile/index.js
init_react_shim();

// ../../node_modules/.pnpm/vfile@5.3.7/node_modules/vfile/lib/index.js
init_react_shim();
var import_is_buffer = __toESM(require_is_buffer(), 1);

// ../../node_modules/.pnpm/vfile-message@3.1.4/node_modules/vfile-message/index.js
init_react_shim();

// ../../node_modules/.pnpm/vfile-message@3.1.4/node_modules/vfile-message/lib/index.js
init_react_shim();
var VFileMessage = class extends Error {
  /**
   * Create a message for `reason` at `place` from `origin`.
   *
   * When an error is passed in as `reason`, the `stack` is copied.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   *
   *   > 👉 **Note**: you should use markdown.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // To do: next major: expose `undefined` everywhere instead of `null`.
  constructor(reason, place, origin) {
    const parts = [null, null];
    let position2 = {
      // @ts-expect-error: we always follows the structure of `position`.
      start: { line: null, column: null },
      // @ts-expect-error: "
      end: { line: null, column: null }
    };
    super();
    if (typeof place === "string") {
      origin = place;
      place = void 0;
    }
    if (typeof origin === "string") {
      const index2 = origin.indexOf(":");
      if (index2 === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index2);
        parts[1] = origin.slice(index2 + 1);
      }
    }
    if (place) {
      if ("type" in place || "position" in place) {
        if (place.position) {
          position2 = place.position;
        }
      } else if ("start" in place || "end" in place) {
        position2 = place;
      } else if ("line" in place || "column" in place) {
        position2.start = place;
      }
    }
    this.name = stringifyPosition(place) || "1:1";
    this.message = typeof reason === "object" ? reason.message : reason;
    this.stack = "";
    if (typeof reason === "object" && reason.stack) {
      this.stack = reason.stack;
    }
    this.reason = this.message;
    this.fatal;
    this.line = position2.start.line;
    this.column = position2.start.column;
    this.position = position2;
    this.source = parts[0];
    this.ruleId = parts[1];
    this.file;
    this.actual;
    this.expected;
    this.url;
    this.note;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;

// ../../node_modules/.pnpm/vfile@5.3.7/node_modules/vfile/lib/minpath.js
init_react_shim();
import { default as default2 } from "path";

// ../../node_modules/.pnpm/vfile@5.3.7/node_modules/vfile/lib/minproc.js
init_react_shim();
import { default as default3 } from "process";

// ../../node_modules/.pnpm/vfile@5.3.7/node_modules/vfile/lib/minurl.js
init_react_shim();
import { fileURLToPath } from "url";

// ../../node_modules/.pnpm/vfile@5.3.7/node_modules/vfile/lib/minurl.shared.js
init_react_shim();
function isUrl(fileUrlOrPath) {
  return fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && // @ts-expect-error: indexable.
  fileUrlOrPath.href && // @ts-expect-error: indexable.
  fileUrlOrPath.origin;
}

// ../../node_modules/.pnpm/vfile@5.3.7/node_modules/vfile/lib/index.js
var order = ["history", "path", "basename", "stem", "extname", "dirname"];
var VFile = class {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Buffer` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (typeof value === "string" || buffer(value)) {
      options = { value };
    } else if (isUrl(value)) {
      options = { path: value };
    } else {
      options = value;
    }
    this.data = {};
    this.messages = [];
    this.history = [];
    this.cwd = default3.cwd();
    this.value;
    this.stored;
    this.result;
    this.map;
    let index2 = -1;
    while (++index2 < order.length) {
      const prop2 = order[index2];
      if (prop2 in options && options[prop2] !== void 0 && options[prop2] !== null) {
        this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2];
      }
    }
    let prop;
    for (prop in options) {
      if (!order.includes(prop)) {
        this[prop] = options[prop];
      }
    }
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {string | URL} path
   */
  set path(path2) {
    if (isUrl(path2)) {
      path2 = fileURLToPath(path2);
    }
    assertNonEmpty(path2, "path");
    if (this.path !== path2) {
      this.history.push(path2);
    }
  }
  /**
   * Get the parent path (example: `'~'`).
   */
  get dirname() {
    return typeof this.path === "string" ? default2.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   */
  set dirname(dirname) {
    assertPath(this.basename, "dirname");
    this.path = default2.join(dirname || "", this.basename);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   */
  get basename() {
    return typeof this.path === "string" ? default2.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */
  set basename(basename) {
    assertNonEmpty(basename, "basename");
    assertPart(basename, "basename");
    this.path = default2.join(this.dirname || "", basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   */
  get extname() {
    return typeof this.path === "string" ? default2.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   */
  set extname(extname) {
    assertPart(extname, "extname");
    assertPath(this.dirname, "extname");
    if (extname) {
      if (extname.charCodeAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = default2.join(this.dirname, this.stem + (extname || ""));
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   */
  get stem() {
    return typeof this.path === "string" ? default2.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = default2.join(this.dirname || "", stem + (this.extname || ""));
  }
  /**
   * Serialize the file.
   *
   * @param {BufferEncoding | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Buffer`
   *   (default: `'utf8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(encoding) {
    return (this.value || "").toString(encoding || void 0);
  }
  /**
   * Create a warning message associated with the file.
   *
   * Its `fatal` is set to `false` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(reason, place, origin) {
    const message = new VFileMessage(reason, place, origin);
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  /**
   * Create an info message associated with the file.
   *
   * Its `fatal` is set to `null` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = null;
    return message;
  }
  /**
   * Create a fatal error associated with the file.
   *
   * Its `fatal` is set to `true` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * > 👉 **Note**: a fatal error means that a file is no longer processable.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Message.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = true;
    throw message;
  }
};
function assertPart(part, name) {
  if (part && part.includes(default2.sep)) {
    throw new Error(
      "`" + name + "` cannot be a path: did not expect `" + default2.sep + "`"
    );
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath(path2, name) {
  if (!path2) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}
function buffer(value) {
  return (0, import_is_buffer.default)(value);
}

// ../../node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js
var unified = base().freeze();
var own4 = {}.hasOwnProperty;
function base() {
  const transformers = trough();
  const attachers = [];
  let namespace = {};
  let frozen;
  let freezeIndex = -1;
  processor.data = data2;
  processor.Parser = void 0;
  processor.Compiler = void 0;
  processor.freeze = freeze;
  processor.attachers = attachers;
  processor.use = use;
  processor.parse = parse3;
  processor.stringify = stringify;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process;
  processor.processSync = processSync;
  return processor;
  function processor() {
    const destination = base();
    let index2 = -1;
    while (++index2 < attachers.length) {
      destination.use(...attachers[index2]);
    }
    destination.data((0, import_extend.default)(true, {}, namespace));
    return destination;
  }
  function data2(key2, value) {
    if (typeof key2 === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", frozen);
        namespace[key2] = value;
        return processor;
      }
      return own4.call(namespace, key2) && namespace[key2] || null;
    }
    if (key2) {
      assertUnfrozen("data", frozen);
      namespace = key2;
      return processor;
    }
    return namespace;
  }
  function freeze() {
    if (frozen) {
      return processor;
    }
    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(processor, ...options);
      if (typeof transformer === "function") {
        transformers.use(transformer);
      }
    }
    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;
    return processor;
  }
  function use(value, ...options) {
    let settings;
    assertUnfrozen("use", frozen);
    if (value === null || value === void 0) {
    } else if (typeof value === "function") {
      addPlugin(value, ...options);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }
    return processor;
    function add(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }
    function addList(plugins2) {
      let index2 = -1;
      if (plugins2 === null || plugins2 === void 0) {
      } else if (Array.isArray(plugins2)) {
        while (++index2 < plugins2.length) {
          const thing = plugins2[index2];
          add(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins2 + "`");
      }
    }
    function addPlugin(plugin, value2) {
      let index2 = -1;
      let entry;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entry = attachers[index2];
          break;
        }
      }
      if (entry) {
        if (isPlainObject(entry[1]) && isPlainObject(value2)) {
          value2 = (0, import_extend.default)(true, entry[1], value2);
        }
        entry[1] = value2;
      } else {
        attachers.push([...arguments]);
      }
    }
  }
  function parse3(doc) {
    processor.freeze();
    const file = vfile(doc);
    const Parser = processor.Parser;
    assertParser("parse", Parser);
    if (newable(Parser, "parse")) {
      return new Parser(String(file), file).parse();
    }
    return Parser(String(file), file);
  }
  function stringify(node2, doc) {
    processor.freeze();
    const file = vfile(doc);
    const Compiler = processor.Compiler;
    assertCompiler("stringify", Compiler);
    assertNode(node2);
    if (newable(Compiler, "compile")) {
      return new Compiler(node2, file).compile();
    }
    return Compiler(node2, file);
  }
  function run(node2, doc, callback) {
    assertNode(node2);
    processor.freeze();
    if (!callback && typeof doc === "function") {
      callback = doc;
      doc = void 0;
    }
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node2, vfile(doc), done);
      function done(error, tree, file) {
        tree = tree || node2;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          callback(null, tree, file);
        }
      }
    }
  }
  function runSync(node2, file) {
    let result;
    let complete;
    processor.run(node2, file, done);
    assertDone("runSync", "run", complete);
    return result;
    function done(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }
  function process(doc, callback) {
    processor.freeze();
    assertParser("process", processor.Parser);
    assertCompiler("process", processor.Compiler);
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      const file = vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2) {
          done(error);
        } else {
          const result = processor.stringify(tree, file2);
          if (result === void 0 || result === null) {
          } else if (looksLikeAVFileValue(result)) {
            file2.value = result;
          } else {
            file2.result = result;
          }
          done(error, file2);
        }
      });
      function done(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          callback(null, file2);
        }
      }
    }
  }
  function processSync(doc) {
    let complete;
    processor.freeze();
    assertParser("processSync", processor.Parser);
    assertCompiler("processSync", processor.Compiler);
    const file = vfile(doc);
    processor.process(file, done);
    assertDone("processSync", "process", complete);
    return file;
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}
function newable(value, name) {
  return typeof value === "function" && // Prototypes do exist.
  // type-coverage:ignore-next-line
  value.prototype && // A function with keys in its prototype is probably a constructor.
  // Classes’ prototype methods are not enumerable, so we check if some value
  // exists in the prototype.
  // type-coverage:ignore-next-line
  (keys(value.prototype) || name in value.prototype);
}
function keys(value) {
  let key2;
  for (key2 in value) {
    if (own4.call(value, key2)) {
      return true;
    }
  }
  return false;
}
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      "Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
  }
}
function assertNode(node2) {
  if (!isPlainObject(node2) || typeof node2.type !== "string") {
    throw new TypeError("Expected node, got `" + node2 + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      "`" + name + "` finished async. Use `" + asyncName + "` instead"
    );
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(
    value && typeof value === "object" && "message" in value && "messages" in value
  );
}
function looksLikeAVFileValue(value) {
  return typeof value === "string" || (0, import_is_buffer2.default)(value);
}

// ../react/src/convert/parse/parse-content.ts
init_react_shim();

// ../react/src/convert/utils.ts
init_react_shim();
function assert(pass, message) {
  if (!pass)
    throw new Error(`${message}`);
}
function assertElementType(element, type) {
  if (element.type !== type)
    throw new Error(
      `Expected element to be of type ${JSON.stringify(
        element
      )} but is ${JSON.stringify(element, null, 2)}`
    );
}
function assertUnreachable(x) {
  throw new Error(
    `Didn't expect to get here with value ${JSON.stringify(x, null, 2)}`
  );
}

// ../react/src/convert/parse/parse-blockquote.ts
init_react_shim();
function parseBlockquote(content3) {
  return [{ type: "block-quote", children: parseContents(content3.children) }];
}

// ../react/src/convert/parse/parse-code-block.ts
init_react_shim();
function parseCodeBlock(content3) {
  const codeLines = content3.value.split("\n");
  return [
    {
      type: "code-block",
      language: content3.lang || "text",
      children: codeLines.map((codeLine) => ({
        type: "code-block-line",
        children: [{ text: codeLine }]
      }))
    }
  ];
}

// ../react/src/convert/parse/parse-footnote-definition.ts
init_react_shim();
function parseFootnoteDefinition(footnote) {
  return [
    {
      type: "block-quote",
      children: [
        /**
         * Insert an initial paragraph with the footnote identifier in square
         * brackets.
         */
        { type: "paragraph", children: [{ text: `[${footnote.identifier}]` }] },
        /**
         * The rest of the children are parsed as is and supports the full range
         * of element types like headings, lists and nested block quotes.
         */
        ...parseContents(footnote.children)
      ]
    }
  ];
}

// ../react/src/convert/parse/parse-heading.ts
init_react_shim();

// ../react/src/convert/parse/parse-phrasing-content/parse-phrasing-content.ts
init_react_shim();

// ../react/src/convert/parse/parse-phrasing-content/normalize-segments.ts
init_react_shim();
import { Text as SlateText3 } from "slate";

// ../react/src/convert/parse/parse-phrasing-content/normalize-segment.ts
init_react_shim();
import { Text as SlateText2 } from "slate";

// ../react/src/convert/serialize/serialize-line/utils/index.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-line/utils/is-utils.ts
init_react_shim();
import * as Slate from "slate";
function isText(segment) {
  return Slate.Text.isText(segment);
}
function isElement(segment) {
  return Slate.Element.isElement(segment);
}
function isPlainSpace(segment) {
  return Slate.Text.isText(segment) && !!segment.text.match(/^\s+$/) && !segment.code;
}

// ../react/src/convert/serialize/serialize-line/utils/mark-utils/index.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-line/utils/mark-utils/mark-convert-utils.ts
init_react_shim();
var MARK_KEY_TO_TOKEN = {
  bold: "**",
  italic: "_",
  // ins: "++",
  strike: "~~",
  sup: "^",
  sub: "~",
  /**
   * IMPORTANT!
   *
   * We noop `code` here.
   *
   * We accept the `code` mark so as not to throw an error if it is found. We do
   * this because we handle `code` text specially because of the way it needs to
   * be escaped.
   *
   * This is handled in the `serializeLine` code.
   */
  code: ""
};
function convertMarkToSymbol(mark) {
  if (mark in MARK_KEY_TO_TOKEN)
    return MARK_KEY_TO_TOKEN[mark];
  throw new Error(
    `Could not find mark ${JSON.stringify(mark)} in MARK_KEY_TO_TOKEN lookup`
  );
}
function convertMarksToSymbolsExceptCode(marks) {
  return marks.map(convertMarkToSymbol).join("");
}

// ../react/src/convert/serialize/serialize-line/utils/mark-utils/mark-get-utils.ts
init_react_shim();
import { Text as SlateText } from "slate";
function getMarksFromText(text4) {
  const { text: _, ...marks } = text4;
  return Object.keys(marks);
}
function getMarksFromSegment(segment) {
  if (SlateText.isText(segment)) {
    if (isPlainSpace(segment)) {
      throw new Error(
        `You probably didn't mean to do this. We should only be getting marks from segments that are not plain space segments.`
      );
    }
    return getMarksFromText(segment);
  } else if (segment.type === "anchor") {
    return getCommonAnchorMarks(segment.children);
  } else {
    throw new Error(`Unhandled type ${segment.type}`);
  }
}
function getCommonAnchorMarks(segments) {
  let commonMarks;
  for (const segment of segments) {
    if (!isText(segment)) {
      if (segment.type === "image-inline")
        continue;
      throw new Error(
        `Expected every segment in an anchor to be a Text segment`
      );
    }
    if (isPlainSpace(segment))
      continue;
    const currentMarks = getMarksFromText(segment);
    if (commonMarks === void 0) {
      commonMarks = currentMarks;
      continue;
    }
    commonMarks = commonMarks.filter(
      (commonMark) => currentMarks.includes(commonMark)
    );
  }
  if (commonMarks === void 0)
    throw new Error(
      `No text segments were found as children in this anchor which should not be possible`
    );
  return commonMarks;
}

// ../react/src/convert/serialize/serialize-line/utils/mark-utils/mark-order-utils.ts
init_react_shim();
var ORDERED_MARK_KEYS = [
  "bold",
  "italic",
  "underline",
  "strike",
  "sup",
  "sub",
  "code"
];
function sortMarks(marks) {
  return marks.slice().sort((a, b) => ORDERED_MARK_KEYS.indexOf(a) - ORDERED_MARK_KEYS.indexOf(b));
}

// ../react/src/convert/serialize/serialize-line/utils/text-utils.ts
init_react_shim();
var ESCAPES = [
  "\\",
  // escape
  "`",
  // code
  "*",
  // bold/italic/hr
  "_",
  // bold/italic/hr
  "[",
  // link/list
  "]",
  // link/list
  "(",
  // link
  ")",
  // link
  "#",
  // headings
  "+",
  // list
  "-",
  // hr/list
  ".",
  // numbered list
  "!",
  // image
  "|",
  // table
  "^",
  // sup
  "~",
  // sub/strikethrough
  "<",
  // link/html
  ">",
  // link/html
  /**
   * Includes all the characters in the list of Backslash escapes in the example
   * for GitHub Flavored Markdown.
   *
   * https://github.github.com/gfm/#backslash-escapes
   */
  "{",
  "}",
  "=",
  ":",
  ";",
  "$",
  "%",
  "&",
  "?",
  '"',
  "'",
  ",",
  "\\",
  "/",
  "@"
];
var ESCAPES_REGEXP = new RegExp(
  `(${ESCAPES.map((symbol) => `\\${symbol}`).join("|")})`,
  "g"
);
function escapeText(s) {
  return s.replace(ESCAPES_REGEXP, (s2) => `\\${s2}`);
}

// ../react/src/convert/parse/parse-phrasing-content/normalize-segment.ts
function areMarksEqual(a, b) {
  const marksA = getMarksFromText(a);
  const marksB = getMarksFromText(b);
  return marksA.length == marksB.length && marksA.every((v) => marksB.includes(v));
}
function normalizeSegment(segment, mutablePrevSegment) {
  const segmentIsText = SlateText2.isText(segment);
  const prevSegmentIsText = SlateText2.isText(mutablePrevSegment);
  if (mutablePrevSegment && !prevSegmentIsText && !segmentIsText) {
    return [{ text: "" }, segment];
  }
  if (!segmentIsText)
    return [segment];
  if (mutablePrevSegment === void 0 || !prevSegmentIsText)
    return [segment];
  const marksEqual = areMarksEqual(mutablePrevSegment, segment);
  if (marksEqual) {
    mutablePrevSegment.text = [mutablePrevSegment.text, segment.text].join("");
    return [];
  }
  return [segment];
}

// ../react/src/convert/parse/parse-phrasing-content/normalize-segments.ts
function normalizeSegments(segments) {
  const nextSegments = [];
  for (let i = 0; i < segments.length; i++) {
    const mutablePrevSegment = nextSegments[nextSegments.length - 1];
    nextSegments.push(...normalizeSegment(segments[i], mutablePrevSegment));
  }
  if (nextSegments.length === 0)
    nextSegments.push({ text: "" });
  if (!SlateText3.isText(nextSegments[0]))
    nextSegments.unshift({ text: "" });
  if (!SlateText3.isText(nextSegments[nextSegments.length - 1]))
    nextSegments.push({ text: "" });
  return nextSegments;
}

// ../react/src/convert/parse/parse-phrasing-content/parse-inline-image/index.ts
init_react_shim();

// ../react/src/convert/parse/parse-phrasing-content/parse-inline-image/image-parsers.ts
init_react_shim();

// ../react/src/convert/parse/parse-phrasing-content/parse-inline-image/parse-generic-image.ts
init_react_shim();
function parseGenericImage(image) {
  return {
    url: image.url,
    title: image.title || void 0,
    alt: image.alt || void 0
  };
}

// ../react/src/convert/parse/parse-phrasing-content/parse-inline-image/parse-portive-image.ts
init_react_shim();

// ../react/src/convert/parseUrl.ts
init_react_shim();
var URL_REGEX = /^(\/[^?#]*)(?:\?([^#]*))?(#.*)?$/;
function parseUrl(url) {
  try {
    const urlData = new URL(url);
    return {
      origin: urlData.origin,
      hostname: urlData.hostname,
      pathname: urlData.pathname,
      searchParams: urlData.searchParams,
      hash: urlData.hash
    };
  } catch (error) {
    const matchdata = url.match(URL_REGEX);
    if (matchdata === null)
      throw new Error(`Invalid format should not happen: ${url}`);
    const [_, pathname, searchParams, hash] = [...matchdata];
    return {
      origin: "",
      hostname: "",
      pathname: pathname || "",
      searchParams: new URLSearchParams(searchParams),
      hash: hash || ""
    };
  }
}

// ../react/src/convert/parse/parse-phrasing-content/parse-inline-image/parse-utils.ts
init_react_shim();
function parseSize(s) {
  if (typeof s !== "string")
    return null;
  const sizeMatch = s.match(/^(\d+)x(\d+)$/);
  if (sizeMatch === null)
    return null;
  return {
    width: parseInt(sizeMatch[1]),
    height: parseInt(sizeMatch[2])
  };
}

// ../react/src/convert/parse/parse-phrasing-content/parse-inline-image/parse-portive-image.ts
function parsePortiveImage(image) {
  const url = parseUrl(image.url);
  if (!url.hostname.match(/[.]portive[.]com$/i))
    return;
  const sizeParam = url.searchParams.get("size");
  if (sizeParam === null)
    return;
  const size = parseSize(sizeParam);
  if (size === null)
    return;
  const srcSizeMatch = url.pathname.match(/[-][-](\d+)x(\d+)[.][a-zA-Z]+$/);
  if (srcSizeMatch === null)
    return;
  return {
    url: `${url.origin}${url.pathname}`,
    title: image.title || void 0,
    alt: image.alt || void 0,
    width: size.width,
    height: size.height,
    srcWidth: parseInt(srcSizeMatch[1]),
    srcHeight: parseInt(srcSizeMatch[2])
  };
}

// ../react/src/convert/parse/parse-phrasing-content/parse-inline-image/parse-uncommon-mark-image.ts
init_react_shim();
function parseUncommonMarkImage(image) {
  const url = parseUrl(image.url);
  if (url.hash.length === 0)
    return;
  const params = new URLSearchParams(url.hash.slice(1));
  const size = parseSize(params.get("size"));
  const srcSize = parseSize(params.get("srcSize"));
  if (!size || !srcSize)
    return;
  return {
    url: `${url.origin}${url.pathname}`,
    title: image.title || void 0,
    alt: image.alt || void 0,
    width: size.width,
    height: size.height,
    srcWidth: srcSize.width,
    srcHeight: srcSize.height
  };
}

// ../react/src/convert/parse/parse-phrasing-content/parse-inline-image/image-parsers.ts
var imageParsers = [
  parsePortiveImage,
  parseUncommonMarkImage,
  parseGenericImage
];

// ../react/src/convert/parse/parse-phrasing-content/parse-inline-image/index.ts
function parseInlineImage(image) {
  for (const imageParser of imageParsers) {
    const imageData = imageParser(image);
    if (!imageData)
      continue;
    return [
      {
        type: "image-inline",
        ...imageData,
        children: [{ text: "" }]
      }
    ];
  }
  throw new Error(`Shouldn't get here because last parser always returns data`);
}

// ../react/src/convert/parse/parse-phrasing-content/parse-phrasing-content.ts
function parsePhrasingContents(phrasingContents, marks = {}) {
  const segments = [];
  for (const phrasingContent of phrasingContents) {
    segments.push(...parsePhrasingContent(phrasingContent, marks));
  }
  const nextInlines = normalizeSegments(segments);
  return nextInlines;
}
function parsePhrasingContent(phrasingContent, marks = {}) {
  switch (phrasingContent.type) {
    case "delete":
      return parsePhrasingContents(phrasingContent.children, {
        ...marks,
        strike: true
      });
    case "emphasis":
      return parsePhrasingContents(phrasingContent.children, {
        ...marks,
        italic: true
      });
    case "footnoteReference":
      return [{ text: `[${phrasingContent.identifier}]` }];
    case "html":
      return [{ text: phrasingContent.value, code: true }];
    case "image":
      return parseInlineImage(phrasingContent);
    case "inlineCode": {
      return [{ text: phrasingContent.value, ...marks, code: true }];
    }
    case "link":
      return [
        {
          type: "anchor",
          href: phrasingContent.url,
          title: (
            /**
             * Ensure that `title` is undefined if it's null.
             */
            phrasingContent.title == null ? void 0 : phrasingContent.title
          ),
          children: parsePhrasingContents(phrasingContent.children, marks)
        }
      ];
    case "strong":
      return parsePhrasingContents(phrasingContent.children, {
        ...marks,
        bold: true
      });
    case "text":
      return [{ text: phrasingContent.value, ...marks }];
    case "linkReference":
    case "imageReference":
      throw new Error(
        `linkReference and imageReference should be converted to link and image through our transformInlineLinks function`
      );
    case "break":
      return [{ text: "\n" }];
    case "footnote":
      throw new Error("footnote is not supported yet");
  }
  assertUnreachable(phrasingContent);
}

// ../react/src/convert/parse/parse-heading.ts
function parseHeading(content3) {
  return [
    {
      type: "heading",
      level: content3.depth,
      children: parsePhrasingContents(content3.children)
    }
  ];
}

// ../react/src/convert/parse/parse-html.ts
init_react_shim();
function parseHTML(content3) {
  return [
    {
      type: "code-block",
      language: "html",
      children: content3.value.split("\n").map((line) => ({
        type: "code-block-line",
        children: [{ text: line }]
      }))
    }
  ];
}

// ../react/src/convert/parse/parse-list/index.ts
init_react_shim();

// ../react/src/convert/parse/parse-list/parse-list.ts
init_react_shim();

// ../react/src/convert/parse/parse-list/parse-list-item.ts
init_react_shim();

// ../react/src/convert/parse/parse-list/parse-list-item-child.ts
init_react_shim();
function parseListItemChild(child, {
  depth,
  ordered,
  checked
}) {
  switch (child.type) {
    case "paragraph":
      if (checked === true || checked === false) {
        return [
          {
            type: "task-list-item",
            depth,
            checked,
            children: parsePhrasingContents(child.children)
          }
        ];
      } else if (ordered) {
        return [
          {
            type: "ordered-list-item",
            depth,
            children: parsePhrasingContents(child.children)
          }
        ];
      } else {
        return [
          {
            type: "unordered-list-item",
            depth,
            children: parsePhrasingContents(child.children)
          }
        ];
      }
    case "list":
      return parseList(child, depth + 1);
    default:
      return parseContent(child);
  }
}

// ../react/src/convert/parse/parse-list/parse-list-item.ts
function parseListItem(listItem2, options) {
  const elements = [];
  for (const child of listItem2.children) {
    elements.push(
      ...parseListItemChild(child, { ...options, checked: listItem2.checked })
    );
  }
  return elements;
}

// ../react/src/convert/parse/parse-list/parse-list.ts
function parseList(list2, depth = 0) {
  const elements = [];
  for (const listItem2 of list2.children) {
    elements.push(
      ...parseListItem(listItem2, { depth, ordered: !!list2.ordered })
    );
  }
  return elements;
}

// ../react/src/convert/parse/parse-paragraph.ts
init_react_shim();
function isImageBlock(segments) {
  if (segments.length !== 3)
    return false;
  if (!("text" in segments[0]) || segments[0].text !== "")
    return false;
  if (!("text" in segments[2]) || segments[2].text !== "")
    return false;
  if (!("type" in segments[1]) || segments[1].type !== "image-inline")
    return false;
  return true;
}
var NBSP = "\xA0";
function isSingleNBSP(segments) {
  if (segments.length !== 1)
    return false;
  if (!("text" in segments[0]) || segments[0].text !== NBSP)
    return false;
  return true;
}
function parseParagraph(content3) {
  const segments = parsePhrasingContents(content3.children);
  if (isImageBlock(segments)) {
    const imageSegment = segments[1];
    const imageBlockElement = {
      ...imageSegment,
      type: "image-block"
    };
    return [imageBlockElement];
  }
  if (isSingleNBSP(segments)) {
    return [
      {
        type: "paragraph",
        children: [{ text: "" }]
      }
    ];
  }
  return [
    {
      type: "paragraph",
      children: segments
    }
  ];
}

// ../react/src/convert/parse/parse-table.ts
init_react_shim();
function parseTable(table) {
  if (table.align == null)
    throw new Error(`Expected an array of AlignType for table.align`);
  return [
    {
      type: "table",
      columns: table.align.map((align) => ({
        align: align || "left"
      })),
      children: table.children.map(parseTableRow)
    }
  ];
}
function parseTableRow(row) {
  if (row.type !== "tableRow")
    throw new Error(`Expected a tableRow`);
  return { type: "table-row", children: row.children.map(parseTableCell) };
}
function parseTableCell(cell) {
  if (cell.type !== "tableCell")
    throw new Error(`Expected a tableCell`);
  return {
    type: "table-cell",
    children: [
      {
        type: "table-content",
        children: parsePhrasingContents(cell.children)
      }
    ]
  };
}

// ../react/src/convert/parse/parse-thematic-break.ts
init_react_shim();
function parseThematicBreak() {
  return [
    {
      type: "horizontal-rule",
      children: [{ text: "" }]
    }
  ];
}

// ../react/src/convert/parse/parse-content.ts
function parseContents(contents) {
  const elements = [];
  for (const content3 of contents) {
    elements.push(...parseContent(content3));
  }
  return elements;
}
function parseContent(content3) {
  switch (content3.type) {
    case "blockquote":
      return parseBlockquote(content3);
    case "code":
      return parseCodeBlock(content3);
    case "definition":
      throw new Error(`The type "definition" should not exist. See comments`);
    case "footnoteDefinition":
      return parseFootnoteDefinition(content3);
    case "heading":
      return parseHeading(content3);
    case "html":
      return parseHTML(content3);
    case "list":
      return parseList(content3);
    case "paragraph":
      return parseParagraph(content3);
    case "table":
      return parseTable(content3);
    case "thematicBreak":
      return parseThematicBreak();
    case "yaml":
      return [];
  }
  assertUnreachable(content3);
}

// ../react/src/convert/parse/transform-inline-links.ts
init_react_shim();

// ../../node_modules/.pnpm/mdast-util-definitions@5.1.1/node_modules/mdast-util-definitions/index.js
init_react_shim();

// ../../node_modules/.pnpm/unist-util-visit@4.1.2/node_modules/unist-util-visit/index.js
init_react_shim();

// ../../node_modules/.pnpm/unist-util-visit@4.1.2/node_modules/unist-util-visit/lib/index.js
init_react_shim();
var visit = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
      reverse = visitor;
      visitor = test;
      test = null;
    }
    visitParents(tree, test, overload, reverse);
    function overload(node2, parents) {
      const parent = parents[parents.length - 1];
      return visitor(
        node2,
        parent ? parent.children.indexOf(node2) : null,
        parent
      );
    }
  }
);

// ../../node_modules/.pnpm/mdast-util-definitions@5.1.1/node_modules/mdast-util-definitions/index.js
var own5 = {}.hasOwnProperty;
function definitions(node2) {
  const cache = /* @__PURE__ */ Object.create(null);
  if (!node2 || !node2.type) {
    throw new Error("mdast-util-definitions expected node");
  }
  visit(node2, "definition", (definition3) => {
    const id = clean(definition3.identifier);
    if (id && !own5.call(cache, id)) {
      cache[id] = definition3;
    }
  });
  return definition2;
  function definition2(identifier) {
    const id = clean(identifier);
    return id && own5.call(cache, id) ? cache[id] : null;
  }
}
function clean(value) {
  return String(value || "").toUpperCase();
}

// ../react/src/convert/parse/transform-inline-links.ts
function transformInlineLinks(tree) {
  const definition2 = definitions(tree);
  visit(tree, (n, index2, p) => {
    const node2 = n;
    const parent = p;
    if (node2.type === "definition" && parent !== null && typeof index2 === "number") {
      parent.children.splice(index2, 1);
      return [SKIP, index2];
    }
    if (node2.type === "imageReference" || node2.type === "linkReference") {
      const identifier = "identifier" in node2 && typeof node2.identifier === "string" ? node2.identifier : "";
      const def = definition2(identifier);
      if (def && parent !== null && typeof index2 === "number") {
        const replacement = node2.type === "imageReference" ? { type: "image", url: def.url, title: def.title, alt: node2.alt } : {
          type: "link",
          url: def.url,
          title: def.title,
          children: node2.children
        };
        parent.children[index2] = replacement;
        return [SKIP, index2];
      }
    }
  });
}

// ../react/src/convert/parse/index.ts
var parser = unified().use(remark_parse_default).use(remarkGfm);
function parseToAst(markdown) {
  const ast = parser.parse(markdown);
  transformInlineLinks(ast);
  return ast;
}
function parse2(markdown) {
  const ast = parseToAst(markdown);
  if (ast.children.length === 0) {
    return [{ type: "paragraph", children: [{ text: "" }] }];
  }
  return parseContents(ast.children);
}

// ../react/src/convert/serialize/index.ts
init_react_shim();

// ../react/src/convert/serialize/normalize/normalizeElementListDepths.ts
init_react_shim();
function isListItemElement(element) {
  return element.type === "ordered-list-item" || element.type === "unordered-list-item" || element.type === "task-list-item";
}
function normalizeElementListDepths(elements) {
  const normalizedElements = [];
  let previousDepth = -1;
  for (const element of elements) {
    if (!isListItemElement(element)) {
      normalizedElements.push(element);
      previousDepth = -1;
      continue;
    }
    const nextDepth = element.depth > previousDepth + 1 ? previousDepth + 1 : element.depth;
    normalizedElements.push({ ...element, depth: nextDepth });
    previousDepth = nextDepth;
  }
  return normalizedElements;
}

// ../react/src/convert/serialize/serialize-elements.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-element.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-code-block/index.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-code-block/serialize-code-line.ts
init_react_shim();
function serializeCodeLine(codeLine) {
  if (codeLine.type !== "code-block-line")
    throw new Error(
      `Expected all children of code-block to be a codeline but is ${JSON.stringify(
        codeLine,
        null,
        2
      )}`
    );
  return codeLine.children.map((segment) => segment.text).join("");
}

// ../react/src/convert/serialize/serialize-code-block/index.ts
function serializeCodeBlock(codeBlock) {
  const lines = [];
  let backticks = 3;
  for (const codeLine of codeBlock.children) {
    const lineOfCode = serializeCodeLine(codeLine);
    const match = lineOfCode.match(/^([`]+)/);
    if (match)
      backticks = Math.max(backticks, match[1].length + 1);
    lines.push(lineOfCode);
  }
  lines.unshift(`${"`".repeat(backticks)}${codeBlock.language}`);
  lines.push(`${"`".repeat(backticks)}`);
  return `${lines.join("\n")}

`;
}

// ../react/src/convert/serialize/serialize-image-block/index.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-image-shared/index.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-image-shared/serialize-generic-image-url.ts
init_react_shim();
function serializeGenericImageUrl(image) {
  return image.url;
}

// ../react/src/convert/serialize/serialize-image-shared/serialize-portive-image-url.ts
init_react_shim();
function serializePortiveImageUrl(image) {
  if (image.url.startsWith("$"))
    return "";
  const { hostname } = parseUrl(image.url);
  if (hostname.match(/[.]portive[.]com$/i) && image.width && image.height)
    return `${image.url}?size=${image.width}x${image.height}`;
}

// ../react/src/convert/serialize/serialize-image-shared/serialize-uncommonmark-image-url.ts
init_react_shim();
function serializeUncommonmarkImageUrl(image) {
  if (image.width && image.height && image.srcWidth && image.srcHeight)
    return `${image.url}#srcSize=${image.srcWidth}x${image.srcHeight}&size=${image.width}x${image.height}`;
}

// ../react/src/convert/serialize/serialize-image-shared/index.ts
var urlSerializers = [
  serializePortiveImageUrl,
  serializeUncommonmarkImageUrl,
  serializeGenericImageUrl
];
function serializeImageShared(image) {
  for (const urlSerializer of urlSerializers) {
    const url = urlSerializer(image);
    if (typeof url === "string") {
      if (url === "")
        return "";
      return `![${image.alt}](${url}${typeof image.title === "string" ? ` "${image.title}"` : ""})`;
    }
  }
  throw new Error(`Shouldn't get here`);
}

// ../react/src/convert/serialize/serialize-image-block/index.ts
function serializeImageBlock(element) {
  return serializeImageShared(element);
}

// ../react/src/convert/serialize/serialize-line/index.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-line/serialize-line.ts
init_react_shim();
import { Element as SlateElement, Text as SlateText5 } from "slate";

// ../react/src/convert/serialize/serialize-line/diff-marks/index.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-line/diff-marks/find-marks-to-add.ts
init_react_shim();
function findMarksToAdd(orderedMarks, targetMarks) {
  const marksWeNeedToAdd = targetMarks.filter(
    (mark) => !orderedMarks.includes(mark)
  );
  const orderedMarksToAdd = sortMarks(marksWeNeedToAdd);
  return { orderedMarksToAdd };
}

// ../react/src/convert/serialize/serialize-line/diff-marks/find-marks-to-remove.ts
init_react_shim();
function findMarksToRemove(orderedMarks, targetMarks) {
  const nextOrderedMarks = [...orderedMarks];
  const marksWeNeedToRemove = orderedMarks.filter(
    (mark) => !targetMarks.includes(mark)
  );
  const orderedMarksToRemove = [];
  for (let i = 0; i < orderedMarks.length; i++) {
    if (marksWeNeedToRemove.length === 0)
      break;
    const markToRemove = nextOrderedMarks.pop();
    if (markToRemove === void 0) {
      throw new Error(
        `This shouldn't happen unless we made a mistake in the algorithm`
      );
    }
    orderedMarksToRemove.push(markToRemove);
    const index2 = marksWeNeedToRemove.indexOf(markToRemove);
    if (index2 !== -1) {
      marksWeNeedToRemove.splice(index2, 1);
    }
  }
  return { orderedMarksToRemove, nextOrderedMarks };
}

// ../react/src/convert/serialize/serialize-line/diff-marks/index.ts
function diffMarks(orderedMarks, targetMarks) {
  const { orderedMarksToRemove, nextOrderedMarks } = findMarksToRemove(
    orderedMarks,
    targetMarks
  );
  const { orderedMarksToAdd } = findMarksToAdd(nextOrderedMarks, targetMarks);
  return {
    remove: orderedMarksToRemove,
    add: orderedMarksToAdd,
    nextOrderedMarks: [...nextOrderedMarks, ...orderedMarksToAdd]
  };
}

// ../react/src/convert/serialize/serialize-line/normalize-line/index.ts
init_react_shim();
import { Element as Element2 } from "slate";

// ../react/src/convert/serialize/serialize-line/normalize-line/normalize-nodes.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-line/normalize-line/run-normalizers-on-node.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-line/normalize-line/normalizers/index.ts
init_react_shim();

// ../react/src/convert/serialize/serialize-line/normalize-line/normalizers/merge-adjacent-spaces.ts
init_react_shim();
function mergeAdjacentSpaces({
  node: node2,
  nextNode,
  nodes,
  index: index2
}) {
  if (!isText(node2) || !isPlainSpace(node2) || node2.code)
    return false;
  if (!isText(nextNode) || !isPlainSpace(nextNode) || node2.code)
    return false;
  nodes.splice(index2, 2, { text: `${node2.text}${nextNode.text}` });
  return true;
}

// ../react/src/convert/serialize/serialize-line/normalize-line/normalizers/move-spaces-out-of-anchors.ts
init_react_shim();
function moveSpacesAtStartOfAnchor({
  node: node2,
  nodes,
  prevNode,
  index: index2
}) {
  if (!isElement(node2))
    return false;
  if (node2.type !== "anchor")
    return false;
  node2;
  const firstChild = node2.children[0];
  if (isText(firstChild) && isPlainSpace(firstChild)) {
    node2.children.splice(0, 1);
    if (isText(prevNode) && isPlainSpace(prevNode)) {
      prevNode.text = `${prevNode.text}${firstChild.text}`;
    } else {
      nodes.splice(index2, 0, { text: firstChild.text });
    }
    return true;
  }
  return false;
}
function moveSpacesAtEndOfAnchor({
  node: node2,
  nodes,
  nextNode,
  index: index2
}) {
  if (!isElement(node2))
    return false;
  if (node2.type !== "anchor")
    return false;
  node2;
  const lastChild = node2.children[node2.children.length - 1];
  if (isText(lastChild) && isPlainSpace(lastChild)) {
    node2.children.splice(node2.children.length - 1, 1);
    if (isText(nextNode) && isPlainSpace(nextNode)) {
      nextNode.text = `${lastChild.text}${nextNode.text}`;
    } else {
      nodes.splice(index2 + 1, 0, { text: lastChild.text });
    }
    return true;
  }
  return false;
}

// ../react/src/convert/serialize/serialize-line/normalize-line/normalizers/must-have-one-text-child.ts
init_react_shim();
function mustHaveOneTextChild({ node: node2 }) {
  if (!isElement(node2))
    return false;
  if (node2.type !== "line")
    return false;
  if (node2.children.length > 0)
    return false;
  node2.children.push({ text: "" });
  return true;
}

// ../react/src/convert/serialize/serialize-line/normalize-line/normalizers/slice-spaces-at-node-boundaries.ts
init_react_shim();
function sliceSpacesAtNodeBoundaries({
  node: node2,
  nodes,
  index: index2
}) {
  if (!isText(node2))
    return false;
  if (isPlainSpace(node2))
    return false;
  if (node2.code)
    return false;
  const match = node2.text.match(/^(\s*)(.*?)(\s*)$/);
  if (!match)
    return false;
  if (match[1].length === 0 && match[3].length === 0)
    return false;
  const nextSegments = [
    { text: match[1] },
    { ...node2, text: match[2] },
    { text: match[3] }
  ].filter((text4) => text4.text !== "");
  nodes.splice(index2, 1, ...nextSegments);
  return true;
}

// ../react/src/convert/serialize/serialize-line/normalize-line/normalizers/trim-spaces-at-end-of-line.ts
init_react_shim();
function trimSpaceAtEndOfLine({
  index: index2,
  nodes,
  node: node2,
  parent
}) {
  if (index2 !== nodes.length - 1)
    return false;
  if (nodes.length <= 1)
    return false;
  if (!isText(node2))
    return false;
  if (!isPlainSpace(node2))
    return false;
  if (parent && isElement(parent) && parent.type === "line") {
    nodes.splice(nodes.length - 1, 1);
    return true;
  }
  return false;
}

// ../react/src/convert/serialize/serialize-line/normalize-line/normalizers/trim-spaces-at-start-of-line.ts
init_react_shim();
function trimSpaceAtStartOfLine({
  index: index2,
  nodes,
  node: node2,
  parent
}) {
  if (index2 !== 0)
    return false;
  if (nodes.length === 0)
    return false;
  if (!isText(node2))
    return false;
  if (!isPlainSpace(node2))
    return false;
  if (parent && isElement(parent) && parent.type === "line") {
    nodes.splice(0, 1);
    return true;
  }
  return false;
}

// ../react/src/convert/serialize/serialize-line/normalize-line/normalizers/index.ts
var normalizers = [
  sliceSpacesAtNodeBoundaries,
  moveSpacesAtStartOfAnchor,
  moveSpacesAtEndOfAnchor,
  mergeAdjacentSpaces,
  trimSpaceAtStartOfLine,
  trimSpaceAtEndOfLine,
  mustHaveOneTextChild
];

// ../react/src/convert/serialize/serialize-line/normalize-line/run-normalizers-on-node.ts
function runNormalizersOnNode(normalizeOptions) {
  for (const normalizer of normalizers) {
    const isHandled = normalizer(normalizeOptions);
    if (isHandled) {
      return true;
    }
  }
  return false;
}

// ../react/src/convert/serialize/serialize-line/normalize-line/normalize-nodes.ts
var MAX_RERUNS = 72;
function normalizeNodes(nodes, parent) {
  let isAnyUpdated = false;
  let isUpdated;
  let runs = 0;
  const maxReruns = (nodes.length + 1) * MAX_RERUNS;
  do {
    isUpdated = false;
    runs = runs + 1;
    if (runs > maxReruns)
      throw new Error(
        `There have been ${runs} normalization passes (72x the number of nodes at this level). This likely indicates a bug in the code.`
      );
    segmentLoop:
      for (let i = 0; i < nodes.length; i++) {
        const node2 = nodes[i];
        if (isElement(node2)) {
          const isChildrenUpdated = normalizeNodes(
            node2.children,
            node2
          );
          if (isChildrenUpdated) {
            isUpdated = true;
            isAnyUpdated = true;
            break segmentLoop;
          }
        }
        const prevNode = nodes[i - 1];
        const nextNode = nodes[i + 1];
        const options = {
          parent,
          node: node2,
          prevNode,
          nextNode,
          index: i,
          nodes
        };
        if (runNormalizersOnNode(options)) {
          isUpdated = true;
          isAnyUpdated = true;
          break segmentLoop;
        }
      }
  } while (isUpdated);
  return isAnyUpdated;
}

// ../react/src/convert/serialize/serialize-line/normalize-line/index.ts
var duplicateSegments = (segments) => {
  return segments.map((segment) => {
    if (Element2.isElement(segment) && segment.type === "anchor") {
      return {
        ...segment,
        children: duplicateSegments(segment.children)
      };
    } else {
      return segment;
    }
  });
};
function normalizeLine(segments) {
  const line = {
    type: "line",
    children: duplicateSegments(segments)
  };
  normalizeNodes([line], void 0);
  return line.children;
}

// ../react/src/convert/serialize/serialize-line/segment/serialize-segment.ts
init_react_shim();
import { Text as SlateText4 } from "slate";

// ../react/src/convert/serialize/serialize-line/segment/serialize-code-text.ts
init_react_shim();
function serializeCodeText(text4) {
  let max = 0;
  for (const match of text4.text.matchAll(/[`]+/g)) {
    max = Math.max(max, match[0].length);
  }
  if (max === 0)
    return `\`${text4.text.replace(/[`]/g, "\\`")}\``;
  return `${"`".repeat(max + 1)} ${text4.text} ${"`".repeat(max + 1)}`;
}

// ../react/src/convert/serialize/serialize-line/segment/serialize-anchor.ts
init_react_shim();
function escapeTitle(title) {
  return title.replace(/"/g, '\\"');
}
function serializeAnchor(anchor) {
  const commonAnchorMarks = getCommonAnchorMarks(anchor.children);
  if (anchor.href.startsWith("$"))
    return serializeLine(
      anchor.children,
      commonAnchorMarks,
      commonAnchorMarks
    );
  if (typeof anchor.title === "string" && anchor.title.length > 0) {
    return (
      /**
       * TODO: Handle anchor children more elegantly in serializeAnchor.
       *
       * We type cast `children` as `Segment` here because the children of an
       * `anchor` is limited to be Inline types. There are two things to do
       * related to this though:
       *
       * - [ ] consider fixing the `anchor` type to actually limit the
       *   children as expected.
       * - [ ] consider expanding the definition of `Segment` to include
       *   inline images as that is an acceptable inline value which is
       *   currently not defined as part of Segment.
       */
      `[${serializeLine(
        anchor.children,
        commonAnchorMarks,
        commonAnchorMarks
      )}](${anchor.href} "${escapeTitle(anchor.title)}")`
    );
  } else {
    return (
      /**
       * TODO: Handle anchor children more elegantly in serializeAnchor.
       *
       * We type cast `children` as `Segment` here because the children of an
       * `anchor` is limited to be Inline types. There are two things to do
       * related to this though:
       *
       * - [ ] consider fixing the `anchor` type to actually limit the
       *   children as expected.
       * - [ ] consider expanding the definition of `Segment` to include
       *   inline images as that is an acceptable inline value which is
       *   currently not defined as part of Segment.
       */
      `[${serializeLine(
        anchor.children,
        commonAnchorMarks,
        commonAnchorMarks
      )}](${anchor.href})`
    );
  }
}

// ../react/src/convert/serialize/serialize-line/segment/serialize-non-code-text.ts
init_react_shim();
function serializeNonCodeText(text4) {
  return escapeText(text4.text);
}

// ../react/src/convert/serialize/serialize-line/segment/serialize-segment.ts
function serializeSegment(segment) {
  if (SlateText4.isText(segment)) {
    if (segment.code)
      return serializeCodeText(segment);
    return serializeNonCodeText(segment);
  }
  switch (segment.type) {
    case "anchor": {
      return serializeAnchor(segment);
    }
    case "image-inline":
      return serializeImageShared(segment);
    default:
      assertUnreachable(segment);
  }
}

// ../react/src/convert/serialize/serialize-line/serialize-line.ts
function serializeLine(inputSegments, leadingMarks = [], trailingMarks = []) {
  const segments = normalizeLine(inputSegments);
  const substrings = [];
  let leadingDiff = diffMarks(leadingMarks, getMarksFromSegment(segments[0]));
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (SlateText5.isText(segment) && isPlainSpace(segment)) {
      substrings.push(segment.text);
      continue;
    }
    substrings.push(convertMarksToSymbolsExceptCode(leadingDiff.add));
    substrings.push(serializeSegment(segment));
    const nextMarks = getNextMarks(segments, i, trailingMarks);
    const trailingDiff = diffMarks(leadingDiff.nextOrderedMarks, nextMarks);
    substrings.push(convertMarksToSymbolsExceptCode(trailingDiff.remove));
    leadingDiff = trailingDiff;
  }
  return substrings.join("");
}
function getNextMarks(segments, index2, trailingMarks) {
  for (let i = index2 + 1; i < segments.length; i++) {
    const segment = segments[i];
    if (isPlainSpace(segment))
      continue;
    if (SlateElement.isElement(segment) && segment.type === "image-inline")
      continue;
    return getMarksFromSegment(segment);
  }
  return trailingMarks;
}

// ../react/src/convert/serialize/serialize-table/index.ts
init_react_shim();
function serializeTable(element) {
  const lines = [];
  lines.push(serializeTableRow(element.children[0]));
  lines.push(serializeColumns(element.columns));
  element.children.slice(1).forEach((row) => {
    lines.push(serializeTableRow(row));
  });
  return `${lines.join("\n")}

`;
}
function serializeColumns(columns) {
  const isAllLeft = columns.every((column) => column.align === "left");
  if (isAllLeft) {
    return `|${columns.map(() => "---").join("|")}|`;
  }
  return `|${columns.map((column) => serializeAlign(column.align)).join("|")}|`;
}
function serializeAlign(align) {
  switch (align) {
    case "left":
      return ":---";
    case "center":
      return ":---:";
    case "right":
      return "---:";
  }
}
function serializeTableRow(element) {
  assertElementType(element, "table-row");
  return `|${element.children.map(serializeTableCell).join("|")}|`;
}
function serializeTableCell(element) {
  assertElementType(element, "table-cell");
  assert(
    element.children.length === 1,
    `Expected table-cell to have one child but is ${JSON.stringify(
      element.children
    )}`
  );
  return element.children.map(serializeTableContent).join();
}
function serializeTableContent(element) {
  assertElementType(element, "table-content");
  return serializeLine(element.children);
}

// ../react/src/convert/serialize/serialize-element.ts
var LIST_INDENT_SIZE = 4;
function serializeElement(element, orders) {
  switch (element.type) {
    case "anchor":
      return `[${serializeLine(element.children)}](${element.href})`;
    case "block-quote": {
      const lines = serializeElements(element.children);
      return `${lines.split("\n").map((line) => `> ${line}`.trim()).join("\n")}

`;
    }
    case "code-block":
      return serializeCodeBlock(element);
    case "code-block-line":
      throw new Error(
        `code-block-line should only be present as child of code-block`
      );
    case "heading":
      return `${"#".repeat(element.level)} ${serializeLine(
        element.children
      )}

`;
    case "horizontal-rule":
      return "---\n\n";
    case "paragraph":
      return `${serializeLine(element.children)}

`;
    case "table":
      return serializeTable(element);
    case "table-row":
    case "table-cell":
    case "table-content":
      throw new Error(
        `Table elements should only be present as children of table which should be handled by serializeTable. Got ${element.type} may indicate an error in normalization.`
      );
    case "unordered-list-item": {
      const indent3 = " ".repeat(element.depth * LIST_INDENT_SIZE);
      return `${indent3}- ${serializeLine(element.children)}

`;
    }
    case "ordered-list-item": {
      const indent3 = " ".repeat(element.depth * LIST_INDENT_SIZE);
      return `${indent3}${orders[element.depth]}. ${serializeLine(
        element.children
      )}

`;
    }
    case "task-list-item": {
      const indent3 = " ".repeat(element.depth * LIST_INDENT_SIZE);
      let line = serializeLine(element.children);
      if (line.trim() === "") {
        line = "&#32;";
      }
      return `${indent3}- [${element.checked ? "x" : " "}] ${line}

`;
    }
    case "image-block":
      return serializeImageBlock(element);
    case "image-inline":
      throw new Error(
        `This shouldn't happen because inlines are handled in serializeSegment`
      );
  }
  assertUnreachable(element);
}

// ../react/src/convert/serialize/serialize-elements.ts
function serializeElements(elements) {
  const segments = [];
  let orders = [];
  for (const element of elements) {
    if (element.type === "ordered-list-item") {
      orders[element.depth] = (orders[element.depth] || 0) + 1;
      orders = orders.slice(0, element.depth + 1);
    } else if (element.type === "unordered-list-item" || element.type === "task-list-item") {
      orders = orders.slice(0, element.depth);
    } else {
      orders = [];
    }
    segments.push(serializeElement(element, orders));
  }
  const joined = segments.join("");
  if (joined.trim() === "")
    return "";
  return replaceConsecutiveNewlines(replaceLeadingNewlines(joined)).trim();
}
function replaceLeadingNewlines(input) {
  return input.replace(/^\n\n/g, "&nbsp;\n\n");
}
function replaceConsecutiveNewlines(input) {
  return input.replace(/(\n{4,})/g, (match) => {
    const newlineCount = match.length;
    const count = Math.floor((newlineCount - 2) / 2);
    return "\n\n" + Array(count).fill("&nbsp;").join("\n\n") + "\n\n";
  });
}

// ../react/src/convert/serialize/index.ts
function serialize2(elements) {
  const normalizedElements = normalizeElementListDepths(elements);
  return serializeElements(normalizedElements);
}

// ../react/src/entry/SinkEditable.tsx
init_react_shim();

// ../react/src/sink/index.ts
init_react_shim();

// ../react/src/sink/create-plugin/index.ts
init_react_shim();
var createPlugin = (fn) => {
  return { fn };
};

// ../react/src/sink/create-sink/index.tsx
init_react_shim();

// ../react/src/sink/editable/index.tsx
init_react_shim();
import { useEffect, useMemo } from "react";
import { Editor } from "slate";
import { useSlateStatic } from "slate-react";

// ../react/src/sink/editable/create-decorate.ts
init_react_shim();

// ../react/src/sink/editable/utils.ts
init_react_shim();
function defined(value) {
  return !!value;
}

// ../react/src/sink/editable/create-decorate.ts
function createDecorate(originalFn, plugins2) {
  const fns = plugins2.map((plugin) => plugin.editableProps?.decorate).filter(defined);
  return function(entry) {
    const ranges = [];
    for (const fn of fns) {
      const resultRanges = fn(entry);
      ranges.push(...resultRanges);
    }
    if (originalFn)
      ranges.push(...originalFn(entry));
    return ranges;
  };
}

// ../react/src/sink/editable/create-editable.tsx
init_react_shim();
import { Editable } from "slate-react";
import { jsx } from "react/jsx-runtime";
function createEditable(plugins2) {
  const fns = plugins2.map((plugin) => plugin.renderEditable).filter(defined);
  let CurrentRenderEditable = (props) => /* @__PURE__ */ jsx(Editable, { ...props });
  for (const fn of fns) {
    const PrevRenderEditable = CurrentRenderEditable;
    CurrentRenderEditable = (props) => {
      return fn({
        attributes: props,
        Editable: PrevRenderEditable
      });
    };
  }
  return CurrentRenderEditable;
}

// ../react/src/sink/editable/create-handler.ts
init_react_shim();
function extractEditableFns(plugins2, key2) {
  const fns = [];
  for (const plugin of plugins2) {
    const maybeFn = plugin.editableProps?.[key2];
    if (maybeFn)
      fns.push(maybeFn);
  }
  return fns;
}
function createHandlerFn(fns, originalFn) {
  return function(event) {
    for (const fn of fns) {
      if (fn(event))
        return;
    }
    originalFn?.(event);
  };
}
var createOnKeyDown = (originalFn, plugins2) => {
  const fns = extractEditableFns(plugins2, "onKeyDown");
  return createHandlerFn(fns, originalFn);
};
var createOnKeyUp = (originalFn, plugins2) => {
  const fns = extractEditableFns(plugins2, "onKeyUp");
  return createHandlerFn(fns, originalFn);
};
var createOnPaste = (originalFn, plugins2) => {
  const fns = extractEditableFns(plugins2, "onPaste");
  return createHandlerFn(fns, originalFn);
};
var createOnDrop = (originalFn, plugins2) => {
  const fns = extractEditableFns(plugins2, "onDrop");
  return createHandlerFn(fns, originalFn);
};

// ../react/src/sink/editable/create-render-element.ts
init_react_shim();
function createRenderElement(originalFn, plugins2) {
  const fns = plugins2.map((plugin) => plugin.editableProps?.renderElement).filter(defined);
  return function renderElement5(renderElementProps) {
    for (const fn of fns) {
      const result = fn(renderElementProps);
      if (result)
        return result;
    }
    if (originalFn === void 0) {
      throw new Error(
        `Element with type ${renderElementProps.element.type} not handled. Note that renderElement is not defined on SinkEditable so this is only the result of checking the Sink Plugins.`
      );
    }
    return originalFn(renderElementProps);
  };
}

// ../react/src/sink/editable/create-render-leaf.ts
init_react_shim();
import { cloneElement } from "react";
function createRenderLeaf(originalFn, plugins2) {
  if (originalFn === void 0) {
    throw new Error(`renderLeaf was not defined on SinkEditable`);
  }
  const fns = plugins2.map((plugin) => plugin.editableProps?.renderLeaf).filter(defined).reverse();
  return function(renderLeafProps) {
    let value = originalFn({
      ...renderLeafProps,
      /**
       * We override this because `attributes` should only appear on the
       * uppermost leaf element if there are several nested ones and it's
       * possible that this won't be the uppermost leaf.
       *
       * We add attributes back on at the very end so no need to worry if
       * we omit it here.
       */
      attributes: {}
    });
    for (const fn of fns) {
      const possibleValue = fn({
        ...renderLeafProps,
        children: value
      });
      if (possibleValue) {
        value = possibleValue;
      }
    }
    value = cloneElement(value, renderLeafProps.attributes);
    return value;
  };
}

// ../react/src/sink/editable/create-render-placeholder.tsx
init_react_shim();
function createRenderPlaceholder(originalFn, plugins2) {
  if (originalFn)
    return originalFn;
  const fns = plugins2.map((plugin) => plugin.editableProps?.renderPlaceholder).filter(defined);
  if (fns.length === 0)
    return void 0;
  return function(renderPlaceholderProps) {
    if (fns.length > 1) {
      throw new Error(
        `Only one plugin can define renderPlaceholder but there are ${fns.length}`
      );
    }
    const fn = fns[0];
    if (fn == null)
      throw new Error(`Expected fn to be defined`);
    return fn(renderPlaceholderProps);
  };
}

// ../react/src/sink/editable/styles.tsx
init_react_shim();
import styled from "@emotion/styled";
var SinkReset = styled("div")`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  box-sizing: border-box;
`;

// ../react/src/sink/editable/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function SinkEditable(originalProps) {
  const editor = useSlateStatic();
  useEffect(() => {
    Editor.normalize(editor, { force: true });
  }, []);
  const { plugins: plugins2 } = editor.sink;
  const nextProps = useMemo(
    () => ({
      ...originalProps,
      decorate: createDecorate(originalProps.decorate, plugins2),
      renderElement: createRenderElement(originalProps.renderElement, plugins2),
      renderLeaf: createRenderLeaf(originalProps.renderLeaf, plugins2),
      renderPlaceholder: createRenderPlaceholder(
        originalProps.renderPlaceholder,
        plugins2
      ),
      /**
       * NOTE: We skip `onKeyUp` as it is deprecated. If somebody needs it in new
       * code, we can add it back in.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
       */
      onKeyDown: createOnKeyDown(originalProps.onKeyDown, plugins2),
      onKeyUp: createOnKeyUp(originalProps.onKeyUp, plugins2),
      onPaste: createOnPaste(originalProps.onPaste, plugins2),
      onDrop: createOnDrop(originalProps.onDrop, plugins2)
    }),
    Object.values(originalProps)
  );
  const NextEditable = useMemo(() => createEditable(plugins2), [plugins2]);
  return /* @__PURE__ */ jsx2(NextEditable, { ...nextProps });
}

// ../react/src/sink/editor/index.ts
init_react_shim();

// ../react/src/sink/editor/create-boolean-action.ts
init_react_shim();
function createBooleanAction(editor, actionKey, plugins2) {
  const originalAction = editor[actionKey];
  const actionPlugins = plugins2.filter((plugin) => plugin.editor?.[actionKey]);
  return function nextBooleanAction(node2) {
    for (const plugin of actionPlugins) {
      const result = plugin.editor?.[actionKey]?.(node2);
      if (typeof result === "boolean")
        return result;
    }
    return originalAction(node2);
  };
}

// ../react/src/sink/editor/create-void-action.ts
init_react_shim();
function createVoidAction(editor, actionKey, plugins2) {
  const originalAction = editor[actionKey];
  const actionPlugins = plugins2.filter((plugin) => plugin.editor?.[actionKey]);
  return function nextVoidAction(...args) {
    let isHandled = false;
    const afterHandledCallbacks = [];
    for (const plugin of actionPlugins) {
      const response = plugin.editor?.[actionKey]?.(...args);
      if (typeof response === "function") {
        afterHandledCallbacks.push(response);
      } else if (response === true) {
        isHandled = true;
        break;
      }
    }
    if (!isHandled) {
      originalAction(...args);
    }
    afterHandledCallbacks.forEach((callback) => callback());
  };
}

// ../react/src/sink/editor/index.ts
function createWithSink(pluginFns) {
  return (originalEditor, options) => {
    const editor = originalEditor;
    const plugins2 = pluginFns.map(
      (plugin) => plugin(editor, options, { createPolicy: (x) => x })
    );
    editor.sink = { plugins: plugins2 };
    editor.isMaster = "isMaster" in editor ? editor.isMaster : () => false;
    editor.isSlave = "isSlave" in editor ? editor.isSlave : () => false;
    editor.isStandalone = "isStandalone" in editor ? editor.isStandalone : () => false;
    Object.assign(editor, {
      /**
       * void
       */
      normalizeNode: createVoidAction(editor, "normalizeNode", plugins2),
      deleteBackward: createVoidAction(editor, "deleteBackward", plugins2),
      deleteForward: createVoidAction(editor, "deleteForward", plugins2),
      deleteFragment: createVoidAction(editor, "deleteFragment", plugins2),
      insertBreak: createVoidAction(editor, "insertBreak", plugins2),
      insertFragment: createVoidAction(editor, "insertFragment", plugins2),
      insertNode: createVoidAction(editor, "insertNode", plugins2),
      insertText: createVoidAction(editor, "insertText", plugins2),
      /**
       * boolean
       */
      isInline: createBooleanAction(editor, "isInline", plugins2),
      isVoid: createBooleanAction(editor, "isVoid", plugins2),
      isMaster: createBooleanAction(editor, "isMaster", plugins2),
      isSlave: createBooleanAction(editor, "isSlave", plugins2),
      isStandalone: createBooleanAction(editor, "isStandalone", plugins2)
    });
    return editor;
  };
}

// ../react/src/sink/create-sink/index.tsx
var createSink = (pluginFunctions) => {
  const fns = pluginFunctions.map((plugin) => plugin.fn);
  const withSink2 = createWithSink(fns);
  const returnValue = { withSink: withSink2, SinkEditable };
  return returnValue;
};

// ../react/src/sink/is-debug.ts
init_react_shim();
var isDebug = false;

// ../react/src/sink/types/index.ts
init_react_shim();

// ../react/src/sink/types/constrained/constrained-render-element-props.ts
init_react_shim();

// ../react/src/sink/types/constrained/constrained-render-leaf-props.ts
init_react_shim();

// ../react/src/sink/types/plugin/index.ts
init_react_shim();

// ../react/src/sink/types/plugin/ExtractCustomTypes.ts
init_react_shim();

// ../react/src/sink/types/plugin/merge-plugin-custom-types.ts
init_react_shim();

// ../react/src/sink/types/plugin/plugin.ts
init_react_shim();

// ../react/src/sink/types/plugin/plugin-custom-types.ts
init_react_shim();

// ../react/src/sink/types/plugin/plugin-custom-types-for-create.ts
init_react_shim();

// ../react/src/sink/types/plugin/plugin-function.ts
init_react_shim();

// ../react/src/sink/types/plugin/plugin-policy.ts
init_react_shim();

// ../react/src/sink/types/plugin/schema-types.ts
init_react_shim();

// ../react/src/sink/types/plugin/VoidActionReturn.ts
init_react_shim();

// ../react/src/sink/types/sink/sink-editor.ts
init_react_shim();

// ../react/src/sink/utils/index.ts
init_react_shim();

// ../react/src/sink/utils/core-utils/index.ts
init_react_shim();

// ../react/src/sink/utils/core-utils/better-at.ts
init_react_shim();
import { Element as Element3 } from "slate";
import { ReactEditor } from "slate-react";
function betterAt(editor, at) {
  if (!Element3.isElement(at))
    return at;
  return ReactEditor.findPath(editor, at);
}

// ../react/src/sink/utils/core-utils/curry.ts
init_react_shim();
function curryOne(fn, curriedArg) {
  return fn.bind(null, curriedArg);
}
function curryTwo(fn, arg1, arg2) {
  return fn.bind(null, arg1, arg2);
}

// ../react/src/sink/utils/core-utils/is-mac.ts
init_react_shim();
var IS_MAC_REGEX = /mac os x/i;
var isMacValue = void 0;
function isMac() {
  if (isMacValue !== void 0)
    return isMacValue;
  const { userAgent } = window.navigator;
  isMacValue = IS_MAC_REGEX.test(userAgent);
  return isMacValue;
}

// ../react/src/sink/utils/core-utils/stop-event.ts
init_react_shim();
function stopEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

// ../react/src/sink/utils/find-utils/find-element-up.ts
init_react_shim();
import { Editor as Editor3, Path } from "slate";

// ../react/src/sink/utils/standardize-utils/standardize-node-matcher.ts
init_react_shim();
import { Element as Element4 } from "slate";
function standardizeNodeMatcher(matchNode) {
  if (typeof matchNode === "function")
    return matchNode;
  if (typeof matchNode === "string")
    return (node2) => Element4.isElement(node2) && node2.type === matchNode;
  if (Array.isArray(matchNode))
    return (node2) => Element4.isElement(node2) && matchNode.includes(node2.type);
  throw new Error(
    `Expected matchNode to be a function, string or array but is ${matchNode}`
  );
}

// ../react/src/sink/utils/find-utils/find-element-up.ts
function findElementUp(editor, matchNode, { at = editor.selection } = {}) {
  if (at === null)
    return;
  const nextAt = betterAt(editor, at);
  const match = standardizeNodeMatcher(matchNode);
  if (Path.isPath(nextAt)) {
    const nodeEntryExactlyAt = Editor3.node(editor, nextAt);
    if (nodeEntryExactlyAt && match(nodeEntryExactlyAt[0])) {
      return nodeEntryExactlyAt;
    }
  }
  return Editor3.above(editor, { at: nextAt, match });
}
function findElementUpPath(...args) {
  const entry = findElementUp(...args);
  return entry?.[1];
}

// ../react/src/sink/utils/icon-utils/tabler-icon.tsx
init_react_shim();
import { jsx as jsx3 } from "react/jsx-runtime";
var TablerIcon = ({
  strokeWidth = 1.5,
  ...props
}) => /* @__PURE__ */ jsx3(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    strokeWidth,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ...props
  }
);

// ../react/src/sink/utils/is-utils/index.ts
init_react_shim();

// ../react/src/sink/utils/is-utils/is-collapsed.ts
init_react_shim();
import { Range } from "slate";
function isCollapsed(selection) {
  if (selection == null)
    return false;
  return Range.isCollapsed(selection);
}

// ../react/src/sink/utils/is-utils/is-element-type.ts
init_react_shim();
import { Element as Element6 } from "slate";
function createIsElementType(type) {
  if (Array.isArray(type)) {
    return (node2) => Element6.isElement(node2) && type.includes(node2.type);
  } else {
    return (node2) => Element6.isElement(node2) && type == node2.type;
  }
}

// ../react/src/sink/utils/is-utils/is-end-of-element.ts
init_react_shim();
import { Editor as Editor4 } from "slate";
function isEndOfElement(editor, matchNode) {
  const { selection } = editor;
  if (!isCollapsed(selection))
    return false;
  const entry = findElementUp(editor, matchNode, { at: selection });
  return !!entry && Editor4.isEnd(editor, selection.anchor, entry[1]);
}

// ../react/src/sink/utils/is-utils/is-in-empty-element.ts
init_react_shim();
import { Editor as Editor5 } from "slate";

// ../react/src/sink/utils/is-utils/is-start-of-element.ts
init_react_shim();
import { Editor as Editor6 } from "slate";
function isStartOfElement(editor, matchNode) {
  const { selection } = editor;
  if (!isCollapsed(selection))
    return false;
  const entry = findElementUp(editor, matchNode, { at: selection });
  return !!entry && Editor6.isStart(editor, selection.anchor, entry[1]);
}

// ../react/src/sink/utils/key-utils/index.ts
init_react_shim();

// ../react/src/sink/utils/key-utils/create-autocomplete-space-handler.tsx
init_react_shim();
import { isHotkey } from "is-hotkey";
import { Editor as Editor7, Element as SlateElement2, Range as Range2, Transforms } from "slate";
var isSpace = isHotkey(" ");
var isShiftSpace = isHotkey("SHIFT+SPACE");
function createAutocompleteSpaceHandler(editor, methods) {
  return (e) => {
    if (!isSpace(e.nativeEvent) && !isShiftSpace(e.nativeEvent))
      return false;
    const { selection } = editor;
    if (selection === null)
      return false;
    if (Range2.isExpanded(selection))
      return false;
    const convertibleBlockEntry = findElementUp(
      editor,
      (node2) => (
        /**
         * NOTE: We alias to SlateElement because this page needs acces to both
         * the global Eleent and the Slate Element.
         */
        SlateElement2.isElement(node2) && editor.convertElement.isConvertibleElement(node2)
      )
    );
    if (!convertibleBlockEntry)
      return false;
    const range = {
      anchor: Editor7.start(editor, convertibleBlockEntry[1]),
      focus: selection.focus
    };
    const text4 = Editor7.string(editor, range);
    const method = methods[text4];
    if (!method)
      return false;
    stopEvent(e);
    const deleteRange = {
      anchor: Editor7.start(editor, convertibleBlockEntry[1]),
      focus: selection.focus
    };
    Transforms.delete(editor, { at: deleteRange });
    method();
    return true;
  };
}

// ../react/src/sink/utils/key-utils/create-hotkey-handler.ts
init_react_shim();

// ../react/src/sink/utils/key-utils/is-better-hotkey.ts
init_react_shim();
import { isHotkey as isHotkey2 } from "is-hotkey";
function isBetterHotkey(hotkey) {
  const modifiedHotkey = hotkey.replace(
    /\bsuper\b/g,
    isMac() ? "cmd+alt" : "ctrl+shift"
  );
  return isHotkey2(modifiedHotkey);
}

// ../react/src/sink/utils/key-utils/create-hotkey-handler.ts
function createHotkeyHandler(shortcutsObject) {
  let shortcuts = null;
  return function handleShortcuts(event) {
    if (shortcuts == null) {
      shortcuts = Object.entries(shortcutsObject).map(([shortcut, fn]) => [
        isBetterHotkey(shortcut),
        fn
      ]);
    }
    for (const [isShortcut, action] of shortcuts) {
      if (isShortcut(event.nativeEvent)) {
        const response = action();
        if (response === true || response === void 0) {
          event.preventDefault();
          event.stopPropagation();
          return true;
        }
      }
    }
    return false;
  };
}

// ../react/src/sink/utils/normalize-utils/force-normalize-path.ts
init_react_shim();
import { Editor as Editor8, Transforms as Transforms2 } from "slate";
function forceNormalizePath(editor, path2) {
  Editor8.withoutNormalizing(editor, () => {
    Transforms2.setNodes(
      editor,
      // @ts-ignore
      { __DOESNT_MATTER_JUST_TO_START_NORMALIZING__: "123" },
      { at: path2 }
    );
    Transforms2.setNodes(
      editor,
      // @ts-ignore
      { __DOESNT_MATTER_JUST_TO_START_NORMALIZING__: null },
      { at: path2 }
    );
  });
}

// ../react/src/sink/utils/normalize-utils/normalize-siblings.ts
init_react_shim();
import { Editor as Editor9 } from "slate";
function normalizeSiblings(editor, entry, transform) {
  const [, path2] = entry;
  const prevEntry = Editor9.previous(editor, { at: path2 });
  if (prevEntry && transform(prevEntry, entry))
    return true;
  const nextEntry = Editor9.next(editor, { at: path2 });
  if (nextEntry && transform(entry, nextEntry))
    return true;
  return false;
}

// ../react/src/sink/utils/select-utils/index.ts
init_react_shim();
import { Editor as Editor10, Transforms as Transforms3 } from "slate";
function selectStartOfElement(editor, path2) {
  Transforms3.select(editor, Editor10.start(editor, path2));
}
function selectEndOfElement(editor, path2) {
  Transforms3.select(editor, Editor10.end(editor, path2));
}

// ../react/src/sink/utils/standardize-utils/index.ts
init_react_shim();

// ../react/src/sink/utils/standardize-utils/target-element.ts
init_react_shim();
function createTargetElement(srcElement, targetElement) {
  if (typeof targetElement !== "function")
    return targetElement;
  return targetElement(srcElement);
}

// ../react/src/sink/utils/transform-utils/index.ts
init_react_shim();

// ../react/src/sink/utils/transform-utils/insert-root-element.ts
init_react_shim();
import { Editor as Editor11, Element as Element7, Path as Path4, Transforms as Transforms4 } from "slate";
function insertRootElement(editor, element, { at = editor.selection } = {}) {
  if (at == null)
    return false;
  const entry = findElementUp(
    editor,
    (node2) => Element7.isElement(node2) && editor.isMaster(node2)
  );
  if (entry == null) {
    const selection = editor.selection;
    Editor11.withoutNormalizing(editor, () => {
      Transforms4.insertNodes(editor, element, { at });
      if (selection) {
        Transforms4.select(editor, selection);
        Transforms4.move(editor);
      }
    });
  } else {
    const nextPath = Path4.next(entry[1]);
    Editor11.withoutNormalizing(editor, () => {
      Transforms4.insertNodes(editor, element, { at: nextPath });
      Transforms4.select(editor, Editor11.start(editor, nextPath));
    });
  }
  return true;
}

// ../react/src/sink/utils/transform-utils/rewrap-element.ts
init_react_shim();
import { Editor as Editor12, Transforms as Transforms5 } from "slate";
function rewrapElement(editor, targetElement, at) {
  Editor12.withoutNormalizing(editor, () => {
    const originalEntry = Editor12.node(editor, at);
    const nextElement = createTargetElement(originalEntry[0], targetElement);
    Transforms5.wrapNodes(editor, nextElement, { at });
    Transforms5.unwrapNodes(editor, { at: [...at, 0] });
  });
}

// ../react/src/sink/utils/transform-utils/set-nodes-dynamic.ts
init_react_shim();
import { Editor as Editor13, Transforms as Transforms6 } from "slate";
function setNodesDynamic(editor, convert2, options) {
  const entries = Array.from(Editor13.nodes(editor, options));
  if (entries.length === 0)
    return false;
  for (const entry of entries) {
    const [node2] = entry;
    Transforms6.setNodes(editor, convert2(node2), { at: entry[1] });
  }
  return true;
}

// ../react/src/entry/plugins.ts
init_react_shim();

// ../react/src/anchor-plugin/index.tsx
init_react_shim();

// ../react/src/anchor-plugin/editable/on-paste.tsx
init_react_shim();
function onPaste(editor, e) {
  const clipboardData = e.clipboardData;
  const { types } = clipboardData;
  console.log(clipboardData.getData("text/html"));
  if (types.length > 1)
    return false;
  if (types[0] !== "text/plain")
    return false;
  const text4 = clipboardData.getData("text/plain");
  if (!isUrl2(text4))
    return false;
  e.preventDefault();
  e.stopPropagation();
  editor.anchor.insertLink(text4);
  return true;
}
function isUrl2(s) {
  let url;
  try {
    url = new URL(s);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:" || url.protocol === "mailto:";
}

// ../react/src/anchor-plugin/methods/index.ts
init_react_shim();

// ../react/src/anchor-plugin/methods/editLink.ts
init_react_shim();
import { Transforms as Transforms7 } from "slate";
function editLink(editor, { href, title }, { at }) {
  const link = findElementUp(editor, "anchor", { at });
  if (!link)
    return false;
  Transforms7.setNodes(editor, { href, title }, { at: link[1] });
  return true;
}

// ../react/src/anchor-plugin/methods/insertLink.ts
init_react_shim();
import { Editor as Editor15, Range as Range3, Text as Text2, Transforms as Transforms8 } from "slate";
function insertLink(editor, href, text4 = href, { select = true } = {}) {
  const selection = editor.selection || {
    anchor: Editor15.start(editor, [0]),
    focus: Editor15.start(editor, [0])
  };
  if (Range3.isCollapsed(selection)) {
    Transforms8.insertNodes(
      editor,
      {
        type: "anchor",
        href,
        children: [{ text: text4 }]
      },
      { select, at: selection }
    );
    if (select && editor.selection) {
      const entry = Editor15.node(editor, editor.selection);
      Transforms8.select(editor, entry[1]);
    }
  } else {
    Transforms8.wrapNodes(
      editor,
      { type: "anchor", href, children: [] },
      {
        split: true,
        match: (node2) => Text2.isText(node2) || Editor15.isInline(editor, node2)
      }
    );
  }
}

// ../react/src/anchor-plugin/methods/removeLink.ts
init_react_shim();
import { Transforms as Transforms9 } from "slate";
function removeLink(editor, { at }) {
  const link = findElementUp(editor, "anchor", { at });
  if (!link)
    return false;
  Transforms9.unwrapNodes(editor, { at: link[1] });
  return true;
}

// ../react/src/anchor-plugin/methods/index.ts
function createAnchorMethods(editor) {
  return {
    insertLink: curryOne(insertLink, editor),
    removeLink: curryOne(removeLink, editor),
    editLink: curryOne(editLink, editor)
  };
}

// ../react/src/anchor-plugin/normalize-node/index.ts
init_react_shim();
import { Element as Element9, Transforms as Transforms10 } from "slate";
function normalizeNode(editor, entry) {
  if (!Element9.isElement(entry[0]))
    return false;
  if (entry[0].type !== "anchor")
    return false;
  const children = entry[0].children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (!Element9.isElement(child) || child.type !== "anchor")
      continue;
    Transforms10.unwrapNodes(editor, { at: [...entry[1], i] });
    return true;
  }
  return false;
}

// ../react/src/anchor-plugin/render-element/anchor.tsx
init_react_shim();
import { clsx } from "clsx";
import { useEffect as useEffect3, useRef as useRef5 } from "react";
import { useSelected } from "slate-react";

// ../react/src/upload-plugin/store/index.ts
init_react_shim();

// ../react/src/upload-plugin/store/create-upload-store.ts
init_react_shim();
import create from "zustand";
var createUploadStore = ({ uploads = {} } = { uploads: {} }) => {
  return create((set, get) => ({
    uploads,
    setUpload(id, origin) {
      set((state) => ({
        uploads: {
          ...state.uploads,
          [id]: origin
        }
      }));
    },
    getUpload(id) {
      const origin = get().uploads[id];
      if (origin === void 0) {
        throw new Error(`Expected origin with id "${id}" but could not find it`);
      }
      return origin;
    }
  }));
};

// ../react/src/upload-plugin/store/use-upload.ts
init_react_shim();
import { useSlateStatic as useSlateStatic2 } from "slate-react";
function useUpload(url) {
  const editor = useSlateStatic2();
  const upload2 = editor.upload.useUploadStore((state) => state.uploads[url]);
  if (url.includes("/")) {
    return {
      status: "success",
      url
    };
  } else {
    return upload2;
  }
}

// ../react/src/upload-plugin/store/index.ts
function setUpload(editor, id, upload2) {
  const store = editor.upload.useUploadStore.getState();
  store.setUpload(id, upload2);
}

// ../react/src/use-layer/index.tsx
init_react_shim();

// ../react/src/use-layer/layers.tsx
init_react_shim();
import { createContext, useState } from "react";

// ../react/src/use-layer/portal.tsx
init_react_shim();
import { createPortal } from "react-dom";
function Portal({ children }) {
  return createPortal(children, document.body);
}

// ../react/src/use-layer/layers.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var LayersContext = createContext(
  /**
   * This is set to an invalid value and then typecast as the correct type.
   *
   * This is okay though because in `LayersProvider` we set the value to the
   * proper type before they are used for the first time.
   */
  {}
);
var LayerContext = createContext({});
function Layers({ children }) {
  const [layers, setLayers] = useState({});
  function openLayer(layer) {
    setLayers((layers2) => {
      return {
        ...layers2,
        [layer.type]: layer
      };
    });
  }
  function closeLayer(layerType) {
    setLayers((layers2) => {
      const nextLayers = { ...layers2 };
      delete nextLayers[layerType];
      return nextLayers;
    });
  }
  return /* @__PURE__ */ jsxs(
    LayersContext.Provider,
    {
      value: { layers, setLayers, openLayer, closeLayer },
      children: [
        children,
        Object.entries(layers).map(([, layer]) => {
          return /* @__PURE__ */ jsx4(Portal, { children: /* @__PURE__ */ jsx4(LayerContext.Provider, { value: layer, children: /* @__PURE__ */ jsx4(layer.Component, {}) }) }, layer.type);
        })
      ]
    }
  );
}

// ../react/src/use-layer/use-layer.tsx
init_react_shim();
import { useContext } from "react";
function useLayer(type) {
  const { openLayer, closeLayer, layers } = useContext(LayersContext);
  function open(Component) {
    const layer = { type, Component };
    openLayer(layer);
  }
  function close() {
    closeLayer(type);
  }
  return {
    open,
    close,
    layer: layers[type],
    type
  };
}

// ../react/src/anchor-plugin/styles.tsx
init_react_shim();
import styled2 from "@emotion/styled";
var $Anchor = styled2("a")`
  /**
   * Link colors
   */
  color: var(--link-color, blue);
  &:hover {
    color: var(--link-hover-color, blue);
  }
  /**
   * When the cursor is in the anchor and not outside the anchor, we style the
   * anchor with a very light shade. This is enough to subtly intuit to the user
   * that when they type, it will appear inside the link. When the shade is
   * not present, they intuit they are just outside the link.
   */
  border-radius: 0.125em;
  transition: background-color 250ms;
  &.--selected {
    background: var(--blue-50);
  }
`;
var $Edge = styled2("span")`
  display: inline;
  padding: 0 1px 0 0;
`;
var $ProgressBar = styled2("span")`
  position: fixed;
  width: 100px;
  background: var(--shade-50);
  height: 8px;
  border-radius: 7px;
  border: 1px solid var(--shade-400);
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
var $ProgressBarFill = styled2("span")`
  position: absolute;
  left: 0;
  top: 0;
  height: 14px;
  background: var(--blue-400);
  transition: width 100ms linear;
`;

// ../react/src/anchor-plugin/render-element/AnchorDialog.tsx
init_react_shim();
import styled14 from "@emotion/styled";
import { useCallback as useCallback4 } from "react";
import { useSlateStatic as useSlateStatic5 } from "slate-react";

// ../react/src/shared-overlays/index.ts
init_react_shim();

// ../react/src/shared-overlays/components/index.ts
init_react_shim();

// ../react/src/shared-overlays/components/CloseMask/index.tsx
init_react_shim();
import { useRef } from "react";

// ../react/src/shared-overlays/styles/$CloseMask.tsx
init_react_shim();
import styled3 from "@emotion/styled";
var $CloseMask = styled3("div")`
  position: fixed;
  user-select: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.01);
`;

// ../react/src/shared-overlays/components/CloseMask/index.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function CloseMask({ close }) {
  const ref = useRef(null);
  return /* @__PURE__ */ jsx5($CloseMask, { ref, onClick: close });
}

// ../react/src/shared-overlays/components/Menu/index.tsx
init_react_shim();

// ../react/src/shared-overlays/components/Menu/formatHotkey.ts
init_react_shim();
var key = {
  cmd: "\u2318",
  ctrl: "\u2303",
  shift: "\u21E7",
  opt: "\u2325",
  enter: "\u23CE"
};
var MAC_KEYS = {
  shift: key.shift,
  opt: key.opt,
  alt: key.opt,
  ctrl: key.ctrl,
  mod: key.cmd,
  cmd: key.cmd,
  enter: key.enter,
  super: `${key.opt}${key.cmd}`
};
var PC_KEYS = {
  alt: "ALT",
  ctrl: "CTRL",
  opt: "ALT",
  shift: "SHIFT",
  mod: "CTRL",
  cmd: "CTRL",
  enter: key.enter,
  super: "CTRL+SHIFT"
};
function pull(arr, value) {
  const index2 = arr.findIndex((el) => el === value);
  if (index2 !== -1) {
    arr.splice(index2, 1);
  }
}
function formatMac(segments) {
  const result = [];
  Object.entries(MAC_KEYS).forEach(([key2, symbol]) => {
    if (segments.includes(key2)) {
      result.push(symbol);
      pull(segments, key2);
    }
  });
  result.push(...segments.map((s) => s.toUpperCase()));
  return result.join("");
}
function formatPC(segments) {
  const result = [];
  Object.entries(PC_KEYS).forEach(([key2, symbol]) => {
    if (segments.includes(key2)) {
      result.push(symbol);
      pull(segments, key2);
    }
  });
  result.push(...segments.map((s) => s.toUpperCase()));
  return result.join("+");
}
function formatHotkey(shortcut) {
  const segments = shortcut.toLowerCase().split("+");
  if (isMac()) {
    return formatMac(segments);
  } else {
    return formatPC(segments);
  }
}

// ../react/src/shared-overlays/components/Menu/Menu.tsx
init_react_shim();
import { useRef as useRef2 } from "react";
import { useSlateStatic as useSlateStatic3 } from "slate-react";

// ../react/src/use-reposition/index.tsx
init_react_shim();

// ../react/src/use-reposition/hooks/use-absolute-reposition.tsx
init_react_shim();

// ../react/src/use-reposition/get-methods/get-absolute-rect.ts
init_react_shim();

// ../react/src/use-reposition/get-methods/get-fixed-rect.ts
init_react_shim();
function getFixedRect(domElement) {
  const bounds = domElement.getBoundingClientRect();
  return {
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom,
    left: bounds.left,
    width: bounds.width,
    height: bounds.height
  };
}

// ../react/src/use-reposition/get-methods/get-absolute-rect.ts
function getAbsoluteRect(domElement) {
  const rect = getFixedRect(domElement);
  const { scrollY } = window;
  return Object.assign(rect, {
    top: rect.top + scrollY,
    bottom: rect.bottom + scrollY
  });
}

// ../react/src/use-reposition/get-methods/get-absolute-viewport.ts
init_react_shim();

// ../react/src/use-reposition/get-methods/get-fixed-viewport.ts
init_react_shim();
function getFixedViewport() {
  const width = document.documentElement.clientWidth || document.body.clientWidth;
  return {
    top: 0,
    right: width,
    bottom: window.innerHeight,
    left: 0,
    width,
    height: window.innerHeight
  };
}

// ../react/src/use-reposition/get-methods/get-absolute-viewport.ts
function getAbsoluteViewport() {
  const rect = getFixedViewport();
  return Object.assign(rect, {
    top: window.scrollY,
    bottom: window.scrollY + rect.height
  });
}

// ../react/src/use-reposition/utils.ts
init_react_shim();
import mapValues from "just-map-values";
function mapHTMLElementLikeRecordToRectRecord(elementLikeRecord, converElementToRect) {
  const rectRecord = mapValues(elementLikeRecord, (value) => {
    const maybeHTMLElement = value instanceof HTMLElement ? value : value.current;
    const nextValue = maybeHTMLElement ? converElementToRect(maybeHTMLElement) : null;
    return nextValue;
  });
  return rectRecord;
}

// ../react/src/use-reposition/hooks/use-reposition.tsx
init_react_shim();
import { useEffect as useEffect2 } from "react";

// ../react/src/use-reposition/hooks/use-throttled-refresh.ts
init_react_shim();
import throttle from "lodash.throttle";
import { useState as useState2 } from "react";
function useThrottledRefresh(intervalInMs = 100) {
  const [counter, setState] = useState2(0);
  const refresh = throttle(
    () => {
      setState((counter2) => counter2 + 1);
    },
    intervalInMs,
    { trailing: true }
  );
  return Object.assign(refresh, { counter });
}

// ../react/src/use-reposition/hooks/use-reposition.tsx
function useReposition() {
  const refresh = useThrottledRefresh();
  useEffect2(() => {
    refresh();
    window.addEventListener("resize", refresh);
    window.addEventListener("scroll", refresh);
    return () => {
      window.removeEventListener("resize", refresh);
      window.removeEventListener("scroll", refresh);
    };
  }, []);
  return refresh;
}

// ../react/src/use-reposition/hooks/use-absolute-reposition.tsx
function useAbsoluteReposition(elementLikeRecord, fn) {
  const refresh = useReposition();
  const rectRecord = mapHTMLElementLikeRecordToRectRecord(
    elementLikeRecord,
    (element) => getAbsoluteRect(element)
  );
  return fn(rectRecord, getAbsoluteViewport(), refresh);
}

// ../react/src/use-reposition/hooks/use-fixed-reposition.tsx
init_react_shim();
function useFixedReposition(elementLikeRecord, fn) {
  const refresh = useReposition();
  const rectRecord = mapHTMLElementLikeRecordToRectRecord(
    elementLikeRecord,
    (element) => getFixedRect(element)
  );
  return fn(rectRecord, getFixedViewport(), refresh);
}

// ../react/src/use-reposition/position-methods/index.ts
init_react_shim();
function positionInside(src, container, pos, { margin = 0 } = {}) {
  if (src == null)
    return { ...pos, left: -1024 };
  const right = pos.left + src.width;
  if (right <= container.right - margin)
    return pos;
  return { ...pos, left: container.right - src.width - margin };
}

// ../react/src/toolbar-plugin/styles/index.ts
init_react_shim();

// ../react/src/toolbar-plugin/styles/anchor-dialog-styles.ts
init_react_shim();
import styled5 from "@emotion/styled";

// ../react/src/shared-overlays/styles/$Panel.ts
init_react_shim();
import styled4 from "@emotion/styled";
var $Panel = styled4(SinkReset)`
  position: absolute;
  z-index: 1000;
  border: 1px solid var(--table-border-color);
  border-radius: 0.5em;
  overflow: clip;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  background: white;
  /**
   * If you are tempted to add the transitions back in, here's why we left
   * them off:
   *
   * - When we initially unhide the panel (by setting a negative 'left' pos)
   *   the panel slides in very quickly. So we'd need to fix this first which
   *   adds complexity.
   *
   * - Even if we fixed it, the browser window updates the scrolls and resizes
   *   in a stepped manner (i.e. like frames in an animation). Keeping the
   *   smooth animations makes the panel step in sync with the page refreshes
   *   and so actually looks better.
   *
   * In other words, there's a technical issue we'd still need to solve but
   * even if we did, it looks better this way.
   */
  /* transition: left 100ms, top 100ms; */
`;

// ../react/src/toolbar-plugin/styles/anchor-dialog-styles.ts
var $AnchorDialog = styled5($Panel)`
  padding: 1em;
  width: 24em;
`;
var $AnchorDialogInputLine = styled5("div")`
  display: flex;
  gap: 0.5em;
`;
var $AnchorDialogInput = styled5("input")`
  flex: 1 1 auto;
  padding: 0.5em 0.75em;
  border-radius: 0.25em;
  color: var(--shade-700);
  border: 1px solid var(--shade-300);
  font-size: 0.9375em;
  &:focus {
    outline: 2px solid var(--blue-200);
  }
`;

// ../react/src/toolbar-plugin/styles/layout-styles.ts
init_react_shim();
import styled7 from "@emotion/styled";

// ../react/src/shared-layout/index.ts
init_react_shim();
import styled6 from "@emotion/styled";
var $Container = styled6(SinkReset)`
  border: 1px solid var(--shade-300); /* shade-300 */
  border-radius: 0.5em;
  color: rgb(39 39 42); /* shade-800 */
  line-height: 1.5;
  /**
   * !important is required because of role="textbox" I think
   */
  outline: 2px solid transparent !important;
  transition: all 250ms;
  &.--focused {
    /**
     * !important is required because of role="textbox" I think
     */
    outline: 2px solid var(--select-editor-color) !important;
  }
`;

// ../react/src/toolbar-plugin/styles/layout-styles.ts
var $Editable = styled7("div")`
  padding: 2em;
`;
var $OuterContainer = styled7($Container)`
  /**
   * We use this to make sure the top of the container is rounded even though
   * the toolbar inside is square. We keep the toolbar square so that as the
   * toolbar hits the top when scrolling, it can become sticky. We can try to
   * round the toolbar, but it causes an issue where the part under the
   * rounded part is still visible (i.e. the edge of the container). We can
   * then try to put an absolutely positioned background on it with an opaque
   * color, but that doesn't work unless we know the color of the background
   * so... ultimately, it's not a good solution.
   *
   * NOTE:
   *
   * Using "overflow: hidden;" will break the "position: sticky;" and it will
   * not work. "overflow: clip;" does work though.
   *
   * https://stackoverflow.com/a/73051006
   */
  overflow-y: clip;
  display: flex;
  flex-direction: column;
`;

// ../react/src/toolbar-plugin/styles/menu-styles.ts
init_react_shim();
import styled8 from "@emotion/styled";
var $Menu = styled8($Panel)`
  position: absolute;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  transition: all 200ms;
  /**
   * Prevent clicks from stealing focus from the editor
   */
  user-select: none;
`;
var $MenuItem = styled8("div")`
  display: flex;
  z-index: 10;
  padding: 0 1em 0 1.5em;
  height: 2em;
  align-items: center;
  /**
   * Normally we don't do it this way but since each part of the MenuItem
   * is tightly related to the display: flex, this seemed the easiest way
   * to set this up.
   */
  .--icon {
    flex: 0 0;
    display: block;
    font-size: 1.25em;
    height: 1em;
    padding-right: 0.75em;
    color: var(--shade-400);
    svg {
      position: relative;
      stroke-width: 1.5px;
    }
  }
  .--title {
    flex: 1 0;
    font-size: 0.875em;
    color: var(--shade-800);
  }
  .--hotkey {
    flex: 0 0;
    font-size: 0.75em;
    padding-left: 1.5em;
    color: var(--shade-500);
  }
  background: white;
  cursor: pointer;
  &:hover {
    background: var(--blue-50);
  }
`;
var $MenuDivider = styled8("div")`
  height: 1px;
  background: var(--shade-200);
  margin-top: 0.25em;
  margin-bottom: 0.25em;
`;

// ../react/src/toolbar-plugin/styles/toolbar-styles.ts
init_react_shim();
import styled9 from "@emotion/styled";
var $ToolbarContainer = styled9("div")`
  /**
   * This flex rule applies to the "display: flex;" of the parent container.
   * Ensures the toolbar does not shrink or grow vertically.
   */
  flex: 0 0 auto;
  /**
   * If "position: sticky;" is not working, check the ancestor for "overflow:
   * hidden;" of any kind. This will stop sticky from working. A good workaround
   * is to use "overflow: clip;" instead.
   *
   * https://stackoverflow.com/a/73051006
   */
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--shade-50);
  /* font-size: 0.875em; */
  font-size: 0.9375em;
  padding: 0 0.5em;
  border-bottom: 1px solid var(--shade-300);
  /**
   * Prevent clicks from stealing focus from the editor
   */
  user-select: none;
  /**
   * Extreme attention to detail. When the sticky is ending and the toolbar
   * is stuck to the bottom of the editor, setting margin-bottom to -1px will
   * fix the 2px bottom border and make it the proper 1px.
   */
  margin-bottom: -1px;

  /**
   * NOTE: The space in the equation is significant
   */
  height: calc(
    3em + 1px
  ); // $ToolbarDivider height + border-bottom of 1px above
  overflow: hidden;
`;
var $Toolbar = styled9("div")`
  display: inline-block;
  height: calc(
    3em + 1px
  ); // $ToolbarDivider height + border-bottom of 1px above
`;
var $ToolbarDividerContainer = styled9("div")`
  display: inline-block;
  height: 3em;
  padding: 0 0.375em;
`;
var $ToolbarDivider = styled9("div")`
  display: inline-block;
  background: var(--shade-300);
  opacity: 50%;
  width: 1px;
  height: 3em;
`;
var $ToolbarButton = styled9("div")`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 1.25em;
  margin-top: 0.25em;
  height: 2em;
  padding: 0.375em 0.375em;
  border-radius: 0.25em;
  text-align: center;
  color: var(--shade-500);
  transition: all 100ms;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  &.--active {
    color: var(--shade-700);
    background: rgba(0, 0, 0, 0.05);
    svg {
      /* stroke-width: 2px; */
    }
  }
  svg {
    stroke-width: 1.5px;
  }
  &:hover {
    color: var(--shade-700);
    background: var(--blue-100);
    svg {
      /* stroke-width: 2px; */
    }
  }

  &.--more {
    padding: 0.375em 0.5em;
  }
  .--more-icon {
    position: absolute;
    bottom: -0.2em;
    left: 50%;
    margin-left: -0.25em;
    opacity: 0.375;
  }
`;

// ../react/src/shared-overlays/components/Menu/MenuItem.tsx
init_react_shim();
import { useCallback } from "react";
import { ReactEditor as ReactEditor2 } from "slate-react";
import { Fragment, jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function MenuItem({
  editor,
  item,
  close,
  dest
}) {
  const menuLayer = useLayer("menu");
  const onClick = useCallback(() => {
    if (item.Component) {
      const Component = item.Component;
      menuLayer.open(() => /* @__PURE__ */ jsx6(Component, { dest, close: menuLayer.close }));
    } else if (item.action) {
      item.action(editor);
      ReactEditor2.focus(editor);
      close();
    }
  }, [editor, item]);
  return /* @__PURE__ */ jsx6(Fragment, { children: /* @__PURE__ */ jsxs2($MenuItem, { onClick, children: [
    /* @__PURE__ */ jsx6("div", { className: "--icon", children: /* @__PURE__ */ jsx6(item.icon, {}) }),
    /* @__PURE__ */ jsx6("div", { className: "--title", children: item.title }),
    /* @__PURE__ */ jsx6("div", { className: "--hotkey", children: item.hotkey ? formatHotkey(item.hotkey) : void 0 })
  ] }) });
}

// ../react/src/shared-overlays/components/Menu/Menu.tsx
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
function Menu({
  dest,
  items,
  close
}) {
  const editor = useSlateStatic3();
  const ref = useRef2(null);
  const style = useAbsoluteReposition({ src: ref, dest }, ({ dest: dest2 }) => {
    return { left: dest2.left - 8, top: dest2.top + dest2.height };
  });
  return /* @__PURE__ */ jsxs3(Fragment2, { children: [
    /* @__PURE__ */ jsx7(CloseMask, { close }),
    /* @__PURE__ */ jsx7($Menu, { ref, style, children: items.map((item, index2) => {
      if (item === "divider") {
        return /* @__PURE__ */ jsx7($MenuDivider, {}, index2);
      } else {
        return /* @__PURE__ */ jsx7(
          MenuItem,
          {
            editor,
            item,
            close,
            dest
          },
          index2
        );
      }
    }) })
  ] });
}

// ../react/src/shared-overlays/styles/index.ts
init_react_shim();

// ../react/src/shared-overlays/types.ts
init_react_shim();

// ../react/src/use-tooltip/index.tsx
init_react_shim();
import { useCallback as useCallback2 } from "react";

// ../react/src/use-tooltip/tooltip.tsx
init_react_shim();
import styled10 from "@emotion/styled";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function useRect(dest) {
  return dest.getBoundingClientRect();
}
var $Tooltip = styled10("div")`
  position: fixed;
  z-index: 10;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: white;
  font-size: 0.875em;
  line-height: 1.5em;
  padding: 0 0.5em;
  color: var(--shade-300);
  background: var(--shade-700);
  border-radius: 0.25em;
  white-space: nowrap;
`;
var $Hotkey = styled10("span")`
  margin-left: 0.75em;
  font-size: 0.875em;
  font-weight: 500;
  color: var(--shade-400);
`;
function Tooltip({
  title,
  hotkey,
  dest
}) {
  const rect = useRect(dest);
  return /* @__PURE__ */ jsxs4(
    $Tooltip,
    {
      style: {
        left: rect.left,
        top: `calc(${rect.top}px - 2em)`
      },
      children: [
        title,
        hotkey ? /* @__PURE__ */ jsx8($Hotkey, { children: hotkey }) : null
      ]
    }
  );
}

// ../react/src/use-tooltip/triangle.tsx
init_react_shim();
import styled11 from "@emotion/styled";
import { jsx as jsx9 } from "react/jsx-runtime";
var $Triangle = styled11("span")`
  position: fixed;
  z-index: 10;
  width: 0;
  height: 0;
  border-left: 0.375em solid transparent;
  border-right: 0.375em solid transparent;
  border-top: 0.375em solid var(--shade-700);
`;
function Triangle({ dest }) {
  const rect = useRect(dest);
  return /* @__PURE__ */ jsx9(
    $Triangle,
    {
      style: {
        left: `calc(${rect.left + rect.width / 2}px - 0.375em)`,
        top: `calc(${rect.top}px - 0.5em)`
      }
    }
  );
}

// ../react/src/use-tooltip/index.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
function useTooltip({
  title,
  hotkey
}, deps = []) {
  const label = useLayer("tooltip-label");
  const triangle = useLayer("tooltip-triangle");
  const onMouseEnter = useCallback2((e) => {
    const dest = e.currentTarget;
    if (title !== void 0) {
      label.open(() => /* @__PURE__ */ jsx10(
        Tooltip,
        {
          title,
          hotkey: typeof hotkey === "function" ? hotkey() : hotkey,
          dest
        }
      ));
      triangle.open(() => /* @__PURE__ */ jsx10(Triangle, { dest }));
    }
  }, deps);
  const onMouseLeave = useCallback2(() => {
    label.close();
    triangle.close();
  }, deps);
  return { onMouseEnter, onMouseLeave };
}

// ../react/src/anchor-plugin/render-element/AnchorEditDialog.tsx
init_react_shim();
import styled13 from "@emotion/styled";
import { useCallback as useCallback3, useRef as useRef3, useState as useState3 } from "react";
import { useSlateStatic as useSlateStatic4 } from "slate-react";

// ../react/src/shared-styles/index.ts
init_react_shim();
import styled12 from "@emotion/styled";
var $FormGroup = styled12("div")`
  margin: 0.5em 0;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
var $FormCaption = styled12("div")`
  font-size: 0.9375em;
  margin-bottom: 0.25em;
  color: var(--shade-700);
`;
var $FormHint = styled12("div")`
  font-size: 0.875em;
  margin-top: 0.25em;
  color: var(--shade-500);
`;
var $Textarea = styled12("input")`
  box-sizing: border-box;
  width: 100%;
  height: 6em;
  padding: 0.5em 0.75em;
  border-radius: 0.25em;
  color: var(--shade-700);
  font-family: inherit;
  border: 1px solid var(--shade-300);
  font-size: 0.9375em;
  &:focus {
    outline: 2px solid var(--blue-200);
  }
`;
var $Input = styled12("input")`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em 0.75em;
  border-radius: 0.25em;
  color: var(--shade-700);
  border: 1px solid var(--shade-300);
  font-size: 0.9375em;
  &:focus {
    outline: 2px solid var(--blue-200);
  }
`;
var $BaseButton = styled12("div")`
  /* Center vertically and horizontally */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.25em 0.75em;
  text-align: center;
  transition: all 100ms;
  border-radius: 0.25em;
  svg {
    font-size: 1.25em;
    stroke-width: 2px;
  }
`;
var $PrimaryButton = styled12($BaseButton)`
  color: var(--blue-50);
  background: var(--blue-500);
  outline: 0px solid white;
  &:hover {
    color: white;
    background: var(--blue-600);
    outline: 2px solid var(--blue-200);
  }
  svg {
    color: var(--blue-200);
  }
`;
var $CancelButton = styled12($BaseButton)`
  color: var(--shade-500);
  background: var(--shade-200);
  outline: 0px solid white;
  &:hover {
    color: var(--shade-600);
    background: var(--shade-300);
    outline: 2px solid var(--shade-200);
  }
  svg {
    color: var(--shade-400);
  }
`;

// ../react/src/anchor-plugin/render-element/AnchorEditDialog.tsx
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var $AnchorEditDialog = styled13($Panel)`
  position: absolute;
  width: 20em;
  padding: 1em;
`;
function AnchorEditDialog({
  destAnchor,
  destStartEdge,
  element
}) {
  const dialog = useLayer("dialog");
  const style = useAbsoluteReposition(
    { destAnchor, destStartEdge },
    ({ destAnchor: destAnchor2, destStartEdge: destStartEdge2 }) => {
      return {
        left: destStartEdge2.left,
        top: destAnchor2.top + destAnchor2.height
      };
    }
  );
  const editor = useSlateStatic4();
  const [href, setHref] = useState3(element.href);
  const [title, setTitle] = useState3(element.title || "");
  const formRef = useRef3({ href, title });
  formRef.current = { href, title };
  const handleHrefChange = useCallback3((e) => {
    setHref(e.target.value);
  }, []);
  const handleTitleChange = useCallback3((e) => {
    setTitle(e.target.value);
  }, []);
  const openAnchorDialog = useCallback3(() => {
    dialog.open(() => /* @__PURE__ */ jsx11(
      AnchorDialog,
      {
        destAnchor,
        destStartEdge,
        element
      }
    ));
  }, [destAnchor, destStartEdge, element]);
  const handleSubmit = useCallback3(() => {
    const { href: href2, title: title2 } = formRef.current;
    editor.anchor.editLink({ href: href2, title: title2 }, { at: element });
    openAnchorDialog();
  }, [openAnchorDialog]);
  return /* @__PURE__ */ jsxs5($AnchorEditDialog, { contentEditable: false, style, children: [
    /* @__PURE__ */ jsxs5($FormGroup, { children: [
      /* @__PURE__ */ jsx11($FormCaption, { children: "URL of link" }),
      /* @__PURE__ */ jsx11($Textarea, { as: "textarea", value: href, onChange: handleHrefChange })
    ] }),
    /* @__PURE__ */ jsxs5($FormGroup, { children: [
      /* @__PURE__ */ jsx11($FormCaption, { children: "Tooltip text" }),
      /* @__PURE__ */ jsx11($Input, { type: "text", value: title, onChange: handleTitleChange }),
      /* @__PURE__ */ jsx11($FormHint, { children: "Tooltip to display on mouse hover" })
    ] }),
    /* @__PURE__ */ jsx11($FormGroup, { children: /* @__PURE__ */ jsx11($PrimaryButton, { onClick: handleSubmit, children: "Apply Edit" }) }),
    /* @__PURE__ */ jsx11($FormGroup, { children: /* @__PURE__ */ jsx11($CancelButton, { onClick: openAnchorDialog, children: "Cancel" }) })
  ] });
}

// ../react/src/anchor-plugin/render-element/icons.tsx
init_react_shim();
import { jsx as jsx12 } from "react/jsx-runtime";
var ExternalLinkIcon = (props) => /* @__PURE__ */ jsx12(TablerIcon, { ...props, children: /* @__PURE__ */ jsx12("path", { d: "M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6M11 13l9-9M15 4h5v5" }) });
var LinkOffIcon = (props) => /* @__PURE__ */ jsx12(TablerIcon, { ...props, children: /* @__PURE__ */ jsx12("path", { d: "m9 15 3-3m2-2 1-1M11 6l.463-.536a5 5 0 0 1 7.071 7.072L18 13M3 3l18 18M13 18l-.397.534a5.068 5.068 0 0 1-7.127 0 4.972 4.972 0 0 1 0-7.071L6 11" }) });
var PencilIcon = (props) => /* @__PURE__ */ jsx12(TablerIcon, { ...props, children: /* @__PURE__ */ jsx12("path", { d: "M4 20h4L18.5 9.5a1.5 1.5 0 0 0-4-4L4 16v4M13.5 6.5l4 4" }) });

// ../react/src/anchor-plugin/render-element/AnchorDialog.tsx
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var $AnchorDialog2 = styled14($Panel)`
  position: absolute;
  display: flex;
  width: 20em;
  z-index: 10;
  padding: 1em;
  color: var(--shade-400);

  .--icons {
    display: flex;
    overflow: hidden;
    flex: 0 0 6em;
  }

  .--link {
    text-decoration: none;
    display: flex;
    flex: 0 0 14em;
    overflow: hidden;
    color: var(--shade-400);
    &:hover {
      color: var(--blue-600);
    }
    transition: all 200ms;
  }

  .--url {
    margin-left: 0.5em;
    .--hostname {
      font-size: 0.875em;
      width: 14em;
      line-height: 1.5em;
      color: var(--blue-600);
      overflow-wrap: break-word;
      /* width: 13.5em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; */
    }
    .--pathname {
      margin-top: 0.125em;
      font-size: 0.75em;
      width: 16.25em;
      line-height: 1.5em;
      overflow-wrap: break-word;
    }
    .--tooltip {
      box-sizing: border-box;
      position: relative;
      margin-top: 1em;
      font-size: 0.875em;
      width: 14em;
      line-height: 1.5em;
      background: var(--shade-200);
      border-radius: 0.5em;
      padding: 0.5em 0.75em;
      color: var(--shade-600);
      overflow-wrap: break-word;
    }
    .--tooltip::before {
      content: "";
      position: absolute;
      top: -0.5em; /* Height of the triangle */
      left: 0.5em; /* Position it on the left side */
      border-left: 0.5em solid transparent; /* Half the width of the triangle */
      border-right: 0.5em solid transparent; /* Half the width of the triangle */
      border-bottom: 0.5em solid var(--shade-200); /* Height and color of the triangle */
    }
  }

  .--icon {
    cursor: pointer;
    margin-left: 0.5em;
    &:hover {
      color: var(--blue-600);
    }
  }

  svg {
    flex: 0 0 auto;
    width: 1.25em;
    height: 1.25em;
    stroke-width: 1.5;
  }
`;
function parseUrl2(s) {
  try {
    const url = new URL(s);
    return { hostname: url.hostname, pathname: url.pathname };
  } catch (e) {
    return { hostname: "", pathname: "" };
  }
}
function AnchorDialog({
  destAnchor,
  destStartEdge,
  element
}) {
  const dialog = useLayer("dialog");
  const editor = useSlateStatic5();
  const url = parseUrl2(element.href);
  const style = useAbsoluteReposition(
    { destAnchor, destStartEdge },
    ({ destAnchor: destAnchor2, destStartEdge: destStartEdge2 }) => {
      return {
        left: destStartEdge2.left,
        top: destAnchor2.top + destAnchor2.height
      };
    }
  );
  const removeTooltip = useTooltip({ title: "Remove link" });
  const editTooltip = useTooltip({ title: "Edit link" });
  const removeLink2 = useCallback4(() => {
    editor.anchor.removeLink({ at: element });
  }, [editor]);
  const openEditDialog = useCallback4(() => {
    editTooltip.onMouseLeave();
    dialog.open(() => {
      return /* @__PURE__ */ jsx13(
        AnchorEditDialog,
        {
          destAnchor,
          destStartEdge,
          element
        }
      );
    });
  }, [destAnchor, destStartEdge, element]);
  return /* @__PURE__ */ jsxs6($AnchorDialog2, { contentEditable: false, style, children: [
    /* @__PURE__ */ jsxs6(
      "a",
      {
        className: "--link",
        href: element.href,
        target: "_blank",
        rel: "noreferrer",
        children: [
          /* @__PURE__ */ jsx13(ExternalLinkIcon, {}),
          /* @__PURE__ */ jsxs6("div", { className: "--url", children: [
            /* @__PURE__ */ jsx13("div", { className: "--hostname", children: url.hostname }),
            url.pathname === "" || url.pathname === "/" ? null : /* @__PURE__ */ jsx13("div", { className: "--pathname", children: url.pathname }),
            element.title == null || element.title === "" ? null : /* @__PURE__ */ jsx13("div", { className: "--tooltip", children: element.title })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs6("span", { className: "--icons", children: [
      /* @__PURE__ */ jsx13(
        "span",
        {
          className: "--icon",
          onClick: removeLink2,
          onMouseEnter: removeTooltip.onMouseEnter,
          onMouseLeave: removeTooltip.onMouseLeave,
          children: /* @__PURE__ */ jsx13(LinkOffIcon, {})
        }
      ),
      /* @__PURE__ */ jsx13(
        "span",
        {
          className: "--icon",
          onMouseEnter: editTooltip.onMouseEnter,
          onMouseLeave: editTooltip.onMouseLeave,
          onClick: openEditDialog,
          children: /* @__PURE__ */ jsx13(PencilIcon, {})
        }
      )
    ] })
  ] });
}

// ../react/src/anchor-plugin/render-element/ProgressBar.tsx
init_react_shim();
import { useRef as useRef4 } from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
function ProgressBar({
  anchorRef,
  progress
}) {
  const progressRef = useRef4(null);
  const rect = useFixedReposition(
    { anchor: anchorRef, progress: progressRef },
    (rects, viewport) => {
      if (rects.anchor == null || rects.progress == null)
        return { left: -1e3 };
      return positionInside(rects.progress, viewport, {
        left: rects.anchor.left,
        top: rects.anchor.top + rects.anchor.height + 4
      });
    }
  );
  return /* @__PURE__ */ jsx14($ProgressBar, { ref: progressRef, style: rect, children: /* @__PURE__ */ jsx14($ProgressBarFill, { style: { width: progress * 100 } }) });
}

// ../react/src/anchor-plugin/render-element/anchor.tsx
import { jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
function Anchor({
  element,
  attributes,
  children
}) {
  const startEdgeRef = useRef5(null);
  const anchorRef = useRef5(null);
  const selected = useSelected();
  const upload2 = useUpload(element.href);
  const dialog = useLayer("dialog");
  useEffect3(() => {
    const anchor = anchorRef.current;
    const startEdge = startEdgeRef.current;
    if (!anchor || !startEdge)
      return;
    if (selected) {
      setTimeout(() => {
        dialog.open(() => /* @__PURE__ */ jsx15(
          AnchorDialog,
          {
            destAnchor: anchor,
            destStartEdge: startEdge,
            element
          }
        ));
      });
    } else {
      dialog.close();
    }
  }, [selected, element]);
  return /* @__PURE__ */ jsxs7(
    $Anchor,
    {
      className: clsx({ "--selected": selected }),
      href: element.href,
      target: element.target,
      ...attributes,
      ref: anchorRef,
      children: [
        /* @__PURE__ */ jsx15($Edge, { ref: startEdgeRef, contentEditable: false }),
        upload2?.status === "progress" ? /* @__PURE__ */ jsx15(
          ProgressBar,
          {
            anchorRef,
            progress: upload2.sentBytes / upload2.totalBytes
          }
        ) : null,
        /* @__PURE__ */ jsx15("span", { children }),
        /* @__PURE__ */ jsx15($Edge, { contentEditable: false })
      ]
    }
  );
}

// ../react/src/anchor-plugin/index.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var AnchorPlugin = createPlugin(
  (editor, options, { createPolicy }) => {
    editor.anchor = createAnchorMethods(editor);
    return createPolicy({
      name: "anchor",
      editor: {
        isInline(element) {
          if (element.type === "anchor")
            return true;
        },
        normalizeNode: curryOne(normalizeNode, editor)
      },
      editableProps: {
        onPaste: curryOne(onPaste, editor),
        renderElement: ({ element, attributes, children }) => {
          if (element.type === "anchor") {
            return /* @__PURE__ */ jsx16(Anchor, { element, attributes, children });
          }
        }
      }
    });
  }
);

// ../react/src/atomic-delete-plugin/index.ts
init_react_shim();
import { Editor as Editor19, Transforms as Transforms11 } from "slate";

// ../react/src/atomic-delete-plugin/is-safe-delete.ts
init_react_shim();
import { Element as Element10, Path as Path6 } from "slate";
function isSafeDelete(editor, a, b) {
  if (!a || !b)
    return true;
  if (Path6.equals(a[1], b[1]))
    return true;
  const masterEntryA = findElementUp(
    editor,
    (el) => Element10.isElement(el) && editor.isMaster(el),
    { at: a[1] }
  );
  const masterEntryB = findElementUp(
    editor,
    (el) => {
      return Element10.isElement(el) && editor.isMaster(el);
    },
    { at: b[1] }
  );
  if (!masterEntryA && !masterEntryB)
    return true;
  if (masterEntryA && masterEntryB && Path6.equals(masterEntryA[1], masterEntryB[1]))
    return true;
  return false;
}

// ../react/src/atomic-delete-plugin/index.ts
var AtomicDeletePlugin = createPlugin(
  (editor) => {
    editor.atomicDelete = true;
    return {
      name: "atomic-delete",
      editor: {
        deleteBackward() {
          if (editor.selection == null)
            return false;
          const entry = Editor19.node(editor, editor.selection);
          const prevEntry = Editor19.previous(editor, { mode: "lowest" });
          if (isSafeDelete(editor, entry, prevEntry))
            return false;
          Transforms11.move(editor, { unit: "character", reverse: true });
          return true;
        },
        deleteForward() {
          if (editor.selection == null)
            return false;
          const entry = Editor19.node(editor, editor.selection);
          const nextEntry = Editor19.next(editor, { mode: "lowest" });
          if (isSafeDelete(editor, entry, nextEntry))
            return false;
          Transforms11.move(editor, { unit: "character" });
          return true;
        }
      }
    };
  }
);

// ../react/src/block-quote-plugin/index.tsx
init_react_shim();
import { Element as Element11, Transforms as Transforms12 } from "slate";

// ../react/src/block-quote-plugin/styles.tsx
init_react_shim();
import styled15 from "@emotion/styled";
var $BlockQuote = styled15("blockquote")`
  position: relative;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  border-left: 0.25em solid rgba(0, 0, 0, 0.075);
  padding-left: 1.5em;
`;

// ../react/src/block-quote-plugin/index.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
function matchBlockQuoteSafe(node2) {
  return Element11.isElement(node2) && /**
   * TODO:
   *
   * This is probably:
   * Element.isElement(node) && !Element.isInline(node) &&
   * !Element.isDependant(node)
   */
  (node2.type === "paragraph" || node2.type === "code-block" || node2.type === "table" || node2.type === "horizontal-rule" || node2.type === "task-list-item" || node2.type === "unordered-list-item" || node2.type === "ordered-list-item" || node2.type === "heading");
}
var BlockQuotePlugin = createPlugin(
  (editor) => {
    editor.supportsBlockQuote = true;
    editor.blockQuotePlugin = {
      indent: () => {
        Transforms12.wrapNodes(
          editor,
          { type: "block-quote", children: [] },
          { match: matchBlockQuoteSafe }
        );
      },
      outdent: () => {
        Transforms12.liftNodes(editor, {
          match: (node2, path2) => matchBlockQuoteSafe(node2) && path2.length > 1
        });
      }
    };
    return {
      name: "block-quote",
      editor: {
        normalizeNode(entry) {
          const [node2, path2] = entry;
          if (!Element11.isElement(node2))
            return false;
          if (node2.type !== "block-quote")
            return false;
          return normalizeSiblings(editor, [node2, path2], (a, b) => {
            if (Element11.isElement(a[0]) && Element11.isElement(b[0]) && a[0].type === "block-quote" && b[0].type === "block-quote") {
              Transforms12.mergeNodes(editor, { at: b[1] });
            }
            return true;
          });
        }
      },
      editableProps: {
        renderElement: ({ element, attributes, children }) => {
          if (element.type === "block-quote") {
            return /* @__PURE__ */ jsx17($BlockQuote, { ...attributes, children });
          }
        },
        onKeyDown: createHotkeyHandler({
          "super+.": editor.blockQuotePlugin.indent,
          "super+,": editor.blockQuotePlugin.outdent
        })
      }
    };
  }
);

// ../react/src/code-block-plugin/index.tsx
init_react_shim();
import { Editor as Editor22, Element as Element15, Transforms as Transforms15 } from "slate";

// ../react/src/code-block-plugin/decorate.tsx
init_react_shim();
import { languages, tokenize } from "prismjs";
import { Element as Element12, Node as Node6 } from "slate";
function getLineOffsets(lines) {
  let offset = 0;
  const lineOffsets = [];
  for (const line of lines) {
    lineOffsets.push(offset);
    offset = offset + line.length;
  }
  return lineOffsets;
}
function decorate(nodeEntry) {
  const [node2, path2] = nodeEntry;
  if (!Element12.isElement(node2))
    return [];
  if (node2.type !== "code-block")
    return [];
  const lang = languages[node2.language];
  if (lang === void 0)
    return [];
  const codeLineElements = node2.children;
  const textLines = codeLineElements.map((node3) => `${Node6.string(node3)}
`);
  const text4 = textLines.join("");
  const lineOffsets = getLineOffsets(textLines);
  function getPointFromOffset(offset2) {
    for (let i = lineOffsets.length; i >= 0; i--) {
      const lineOffset = lineOffsets[i];
      if (lineOffset <= offset2) {
        return {
          path: [...path2, i],
          offset: offset2 - lineOffset
        };
      }
    }
    throw new Error("This shouldn't happen and indicates a bug in the logic");
  }
  const ranges = [];
  const tokens = tokenize(text4, lang);
  let offset = 0;
  for (const token of tokens) {
    if (typeof token === "string") {
      offset += token.length;
    } else {
      const anchor = getPointFromOffset(offset);
      const focus = getPointFromOffset(offset + token.length);
      ranges.push({
        anchor,
        focus,
        prismToken: token.type
      });
      offset += token.length;
    }
  }
  return ranges;
}

// ../react/src/code-block-plugin/methods/index.ts
init_react_shim();

// ../react/src/code-block-plugin/methods/createCodeBlock.ts
init_react_shim();
function createCodeBlock(editor, { language }) {
  insertRootElement(editor, {
    type: "code-block",
    language,
    children: [{ type: "code-block-line", children: [{ text: "" }] }]
  });
}

// ../react/src/code-block-plugin/methods/setCodeBlockLanguage.ts
init_react_shim();
import { Element as Element13, Transforms as Transforms13 } from "slate";
function setCodeBlockLanguage(editor, language, options = {}) {
  const entry = findElementUp(
    editor,
    (el) => Element13.isElement(el) && el.type === "code-block",
    { at: options.at }
  );
  if (!entry)
    return false;
  Transforms13.setNodes(editor, { language }, { at: entry[1] });
  return true;
}

// ../react/src/code-block-plugin/methods/index.ts
function createCodeBlockMethods(editor) {
  return {
    createCodeBlock: curryOne(createCodeBlock, editor),
    setCodeBlockLanguage: curryOne(setCodeBlockLanguage, editor)
  };
}

// ../react/src/code-block-plugin/prism-theme.ts
init_react_shim();
var commentStyle = { color: "#999988", fontStyle: "italic" };
var dimStyle = { opacity: "0.7" };
var stringStyle = { color: "#e3116c" };
var operatorStyle = { color: "#393a34" };
var valueStyle = { color: "#36acaa" };
var keywordStyle = { color: "#00a4db" };
var functionStyle = { color: "#9a050f" };
var tagStyle = { color: "#00009f" };
var boldStyle = { fontWeight: "bold" };
var italicStyle = { fontStyle: "italic" };
var tokenStyles = {
  comment: commentStyle,
  prolog: commentStyle,
  doctype: commentStyle,
  cdata: commentStyle,
  namespace: dimStyle,
  string: stringStyle,
  "attr-value": stringStyle,
  puncutation: operatorStyle,
  operator: operatorStyle,
  entity: valueStyle,
  url: valueStyle,
  symbol: valueStyle,
  number: valueStyle,
  boolean: valueStyle,
  variable: valueStyle,
  constant: valueStyle,
  property: valueStyle,
  regex: valueStyle,
  insert: valueStyle,
  atrule: keywordStyle,
  keyword: keywordStyle,
  "attr-name": keywordStyle,
  function: { ...functionStyle, ...boldStyle },
  delete: functionStyle,
  tag: tagStyle,
  selector: tagStyle,
  important: boldStyle,
  bold: boldStyle,
  italic: italicStyle
};

// ../react/src/code-block-plugin/types.tsx
init_react_shim();
var LanguageList = [
  "text",
  "html",
  "css",
  "svg",
  "javascript",
  "java",
  "c"
];

// ../react/src/code-block-plugin/normalizeNode.tsx
init_react_shim();
import { Element as Element14, Node as Node7, Transforms as Transforms14 } from "slate";
function normalizeNode2(editor, entry) {
  if (!Element14.isElement(entry[0]))
    return false;
  if (entry[0].type === "code-block-line") {
    for (const [child, path2] of Node7.children(editor, entry[1])) {
      if (!Element14.isElement(child))
        continue;
      if (editor.isVoid(child)) {
        Transforms14.removeNodes(editor, { at: path2 });
        return true;
      } else {
        Transforms14.unwrapNodes(editor, { at: path2 });
        return true;
      }
    }
  }
  if (entry[0].type === "code-block") {
    for (const [child, path2] of Node7.children(editor, entry[1])) {
      if (!Element14.isElement(child))
        continue;
      if (child.type === "code-block-line")
        continue;
      if (child.type === "code-block") {
        Transforms14.unwrapNodes(editor, { at: path2 });
        return true;
      } else if (editor.isVoid(child)) {
        Transforms14.removeNodes(editor, { at: path2 });
        return true;
      } else {
        Transforms14.removeNodes(editor, { at: path2 });
        Transforms14.insertNodes(editor, {
          type: "code-block-line",
          children: [{ text: Node7.string(child) }]
        });
        return true;
      }
    }
  }
  return false;
}

// ../react/src/code-block-plugin/render-element/index.tsx
init_react_shim();

// ../react/src/code-block-plugin/render-element/CodeBlock.tsx
init_react_shim();
import { useCallback as useCallback5, useRef as useRef6 } from "react";
import { useSelected as useSelected2 } from "slate-react";

// ../react/src/code-block-plugin/icons/ChevronDownIcon.tsx
init_react_shim();
import { jsx as jsx18 } from "react/jsx-runtime";
var ChevronDownIcon = (props) => /* @__PURE__ */ jsx18(TablerIcon, { ...props, children: /* @__PURE__ */ jsx18("path", { d: "m6 9 6 6 6-6" }) });

// ../react/src/code-block-plugin/styles.ts
init_react_shim();
import styled16 from "@emotion/styled";
var $CodeBlock = styled16("div")`
  position: relative;
  background: var(--code-block-bgcolor);
  margin: 1em 0;
  border-radius: 0.5em;
  border: 1px solid var(--code-block-border-color);
  /**
   * DO NOT REMOVE: Code for adding line numbering if enabled. See $CodeBlockLine
  * for more details.
   * counter-reset: line;
   */
  &.--selected {
    outline: 2px solid var(--select-color);
  }
  /**
   * NOTE: Required to make the border radius work on the first and last lines.
   * Otherwise they will be square.
   */
  overflow-x: hidden;
`;
var $CodeBlockScroller = styled16("div")`
  padding: 2.25em 1em 1.5em 1em;
  border-radius: 0.5em;
  overflow-x: auto;
`;
var $CodeBlockLanguage = styled16("span")`
  cursor: pointer;
  position: absolute;
  top: 0.25em;
  right: 0.25em;
  width: 8em;
  display: flex;
  font-size: 0.75em;
  color: var(--shade-700);
  background: var(--shade-200);
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
  align-items: center;
  gap: 0.25em;
  span {
    text-align: right;
    flex: 1 1 auto;
  }
  svg {
    flex: 0 0 auto;
    position: relative;
  }
  &:hover {
    color: var(--shade-800);
    background: var(--shade-300);
  }
`;
var $CodeBlockLine = styled16("div")`
  white-space: pre;
  line-height: 1.5em;
  counter-increment: line;
  font-family: "andale mono", AndaleMono, monospace;
  font-size: 0.875em;
  &.--selected {
    background-color: var(--shade-100);
  }
  /*
    DO NOT REMOVE: Code for adding line numbering.
    TODO: Make optional in future.
    */
  /* &:before {
    content: counter(line);
    color: rgba(0, 0, 0, 0.25);
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    margin-right: 1em;
    padding: 0em 1em 0 0;
    text-align: right;
    display: inline-block;
    width: 2em;
  } */
`;

// ../react/src/code-block-plugin/render-element/CodeBlock.tsx
import { jsx as jsx19, jsxs as jsxs8 } from "react/jsx-runtime";
function CodeBlock({
  element,
  attributes,
  children
}) {
  const ref = useRef6(null);
  const selected = useSelected2();
  const dropdown = useLayer("code-block-dropdown");
  const onClick = useCallback5(() => {
    if (dropdown.layer)
      dropdown.close();
    const dest = ref.current;
    if (dest === null)
      return;
    const items = LanguageList.map((language) => {
      return {
        icon: () => /* @__PURE__ */ jsx19("span", {}),
        title: language,
        action: (editor) => {
          editor.codeBlock.setCodeBlockLanguage(language, { at: element });
        }
      };
    });
    dropdown.open(() => /* @__PURE__ */ jsx19(Menu, { dest, items, close: dropdown.close }));
  }, [element]);
  return /* @__PURE__ */ jsxs8($CodeBlock, { className: selected ? "--selected" : "", ...attributes, children: [
    /* @__PURE__ */ jsxs8($CodeBlockLanguage, { contentEditable: false, onClick, ref, children: [
      /* @__PURE__ */ jsx19("span", { children: element.language }),
      /* @__PURE__ */ jsx19(ChevronDownIcon, {})
    ] }),
    /* @__PURE__ */ jsx19($CodeBlockScroller, { children })
  ] });
}

// ../react/src/code-block-plugin/render-element/CodeBlockLine.tsx
init_react_shim();
import { useSelected as useSelected3 } from "slate-react";
import { jsx as jsx20 } from "react/jsx-runtime";
function CodeBlockLine({
  attributes,
  children
}) {
  const selected = useSelected3();
  return /* @__PURE__ */ jsx20(
    $CodeBlockLine,
    {
      className: selected ? "--selected" : "",
      ...attributes,
      spellCheck: "false",
      children
    }
  );
}

// ../react/src/code-block-plugin/render-element/index.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
function renderElement({
  element,
  attributes,
  children
}) {
  if (element.type === "code-block") {
    return /* @__PURE__ */ jsx21(CodeBlock, { element, attributes, children });
  } else if (element.type === "code-block-line") {
    return /* @__PURE__ */ jsx21(CodeBlockLine, { element, attributes, children });
  }
}

// ../react/src/code-block-plugin/index.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
var CodeBlockPlugin = createPlugin(
  (editor, options, { createPolicy }) => {
    editor.codeBlock = createCodeBlockMethods(editor);
    function onDelete() {
      const { selection } = editor;
      if (!isCollapsed(selection))
        return false;
      const codeBlockEntry = findElementUp(editor, "code-block");
      if (codeBlockEntry == null)
        return false;
      const codeBlockText = Editor22.string(editor, codeBlockEntry[1]);
      if (codeBlockText === "") {
        Transforms15.removeNodes(editor, { at: codeBlockEntry[1] });
        return true;
      }
      return false;
    }
    return createPolicy({
      name: "code-block",
      editor: {
        deleteBackward: onDelete,
        deleteForward: onDelete,
        isInline(element) {
          if (element.type === "code-block" || element.type === "code-block-line")
            return false;
        },
        isVoid(element) {
          if (element.type === "code-block" || element.type == "code-block-line")
            return false;
        },
        isMaster(element) {
          if (element.type === "code-block")
            return true;
        },
        normalizeNode: curryOne(normalizeNode2, editor)
      },
      editableProps: {
        decorate,
        onKeyDown: createHotkeyHandler({
          "super+`": () => editor.codeBlock.createCodeBlock({ language: "text" }),
          "mod+a": () => {
            const entry = findElementUp(
              editor,
              (el) => Element15.isElement(el) && el.type === "code-block"
            );
            if (!entry)
              return false;
            Transforms15.select(editor, entry[1]);
            return true;
          }
        }),
        renderElement,
        renderLeaf: ({ leaf, children }) => {
          const style = leaf.prismToken ? tokenStyles[leaf.prismToken] || null : null;
          if (style === null) {
            return children;
          } else {
            return /* @__PURE__ */ jsx22("span", { style, children });
          }
        }
      }
    });
  }
);

// ../react/src/collapsible-paragraph-plugin/index.tsx
init_react_shim();

// ../react/src/collapsible-paragraph-plugin/normalize-node/index.ts
init_react_shim();
import { Element as Element18 } from "slate";

// ../react/src/collapsible-paragraph-plugin/normalize-node/normalize-sibling-paragraphs.ts
init_react_shim();
import { Element as Element16, Transforms as Transforms16 } from "slate";
function isParagraph(node2) {
  return Element16.isElement(node2) && node2.type === "paragraph";
}
function normalizeSiblingParagraphs(editor, entry) {
  return normalizeSiblings(editor, entry, (a, b) => {
    if (!isParagraph(a[0]) || !isParagraph(b[0]))
      return false;
    if (a[0].__collapsible && b[0].__collapsible) {
      Transforms16.removeNodes(editor, { at: a[1] });
      return true;
    }
    return false;
  });
}

// ../react/src/collapsible-paragraph-plugin/normalize-node/normalize-sibling-walls.ts
init_react_shim();
import { Element as Element17, Transforms as Transforms17 } from "slate";
function isWall(editor, node2) {
  if (!Element17.isElement(node2))
    return false;
  return editor.isVoid(node2) || editor.isMaster(node2);
}
function normalizeSiblingWalls(editor, entry) {
  if (!isWall(editor, entry[0]))
    return false;
  return normalizeSiblings(editor, entry, (a, b) => {
    if (!isWall(editor, a[0]) || !isWall(editor, b[0]))
      return false;
    Transforms17.insertNodes(
      editor,
      {
        type: "paragraph",
        __collapsible: true,
        children: [{ text: "" }]
      },
      { at: b[1] }
    );
    return true;
  });
}

// ../react/src/collapsible-paragraph-plugin/normalize-node/index.ts
function normalizeNode3(editor, entry) {
  const [node2, path2] = entry;
  if (!Element18.isElement(node2))
    return false;
  if (normalizeSiblingWalls(editor, [node2, path2]))
    return true;
  if (normalizeSiblingParagraphs(editor, [node2, path2]))
    return true;
  return false;
}

// ../react/src/collapsible-paragraph-plugin/render-element/paragraph.tsx
init_react_shim();
import { clsx as clsx2 } from "clsx";
import { useSelected as useSelected4 } from "slate-react";

// ../react/src/collapsible-paragraph-plugin/render-element/styles.ts
init_react_shim();
import styled17 from "@emotion/styled";
var $Paragraph = styled17("p")`
  padding: 0;
  margin: 1em 0;
  &:first-child {
    margin-top: 0;
  }

  transition: background-color 200ms, margin-top 200ms, padding-top 200ms,
    margin-bottom 200ms, padding-bottom 200ms, font-size 200ms;

  &.--collapsible&.--empty {
    font-size: 0.25em; /* font-size is collapsed to 1/4 of regular em */
    margin: -4em 0; /* margin grows to 3/4 of regular em leaving space */
    padding: 1em 0; /* this is kind of eye-balling it */
    border-radius: 1em;
    &:hover {
      background: rgba(0, 127, 255, 0.1);
      cursor: pointer;
    }
  }
  &.--collapsible&.--empty&.--selected {
    font-size: 1em;
    padding: 0;
    margin: 1em 0;
    &:hover {
      background: none;
      cursor: default;
    }
    border-radius: 8px;
  }
`;

// ../react/src/collapsible-paragraph-plugin/render-element/utils.ts
init_react_shim();
import { Node as Node10 } from "slate";
function getIsEmpty(element) {
  return element.children.length === 1 && Node10.string(element.children[0]).length === 0;
}

// ../react/src/collapsible-paragraph-plugin/render-element/paragraph.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
function Paragraph({
  element,
  attributes,
  children
}) {
  const selected = useSelected4();
  const isEmpty = getIsEmpty(element);
  return /* @__PURE__ */ jsx23(
    $Paragraph,
    {
      ...attributes,
      className: clsx2({
        "--selected": selected,
        "--empty": isEmpty,
        "--collapsible": !!element.__collapsible
      }),
      children
    }
  );
}

// ../react/src/collapsible-paragraph-plugin/index.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
var CollapsibleParagraphPlugin = createPlugin((editor) => {
  editor.convertElement.addConvertElementType("paragraph");
  editor.collapsibleParagraph = {
    convertParagraph: () => {
      editor.convertElement.convertElements(
        () => false,
        {
          type: "paragraph"
        },
        false
      );
    }
  };
  if (!editor.normalizeAfterDelete) {
    throw new Error(
      `The collapsible-paragraph-plugin has a dependency on the normalize-after-delete plugin. Please add that plugin before this one.`
    );
  }
  return {
    name: "collapsible-paragraph",
    editor: {
      normalizeNode: curryOne(normalizeNode3, editor)
    },
    editableProps: {
      renderElement: ({ element, attributes, children }) => {
        switch (element.type) {
          case "paragraph": {
            return /* @__PURE__ */ jsx24(Paragraph, { element, attributes, children });
          }
        }
      },
      onKeyDown: createHotkeyHandler({
        "super+0": editor.collapsibleParagraph.convertParagraph
      })
    }
  };
});

// ../react/src/convert-element-plugin/index.tsx
init_react_shim();

// ../react/src/convert-element-plugin/methods/index.ts
init_react_shim();

// ../react/src/convert-element-plugin/methods/add-convert-element-type.ts
init_react_shim();
function addConvertElementType(editor, type) {
  if (Array.isArray(type)) {
    editor.convertElement.convertElementTypes.push(...type);
  } else {
    editor.convertElement.convertElementTypes.push(type);
  }
}

// ../react/src/convert-element-plugin/methods/convert-elements.ts
init_react_shim();
import { Editor as Editor26, Element as Element20 } from "slate";
function convertElements(editor, matchForToggle, targetElement, allowToggle) {
  const entries = Array.from(
    Editor26.nodes(editor, {
      match: (node2) => Element20.isElement(node2) && editor.convertElement.isConvertibleElement(node2)
    })
  );
  if (entries.length === 0)
    return false;
  const shouldToggle = allowToggle && entries.every((entry) => matchForToggle(entry[0]));
  if (shouldToggle) {
    Editor26.withoutNormalizing(editor, () => {
      for (const entry of entries) {
        rewrapElement(editor, { type: "paragraph" }, entry[1]);
      }
    });
  } else {
    Editor26.withoutNormalizing(editor, () => {
      for (const entry of entries) {
        rewrapElement(editor, targetElement, entry[1]);
      }
    });
  }
  return true;
}

// ../react/src/convert-element-plugin/methods/is-convert-element.ts
init_react_shim();
function isConvertElement(editor, element) {
  return editor.convertElement.convertElementTypes.includes(element.type);
}

// ../react/src/convert-element-plugin/methods/index.ts
function createConvertElementMethods(editor) {
  return {
    convertElementTypes: [],
    addConvertElementType: curryOne(addConvertElementType, editor),
    isConvertibleElement: curryOne(isConvertElement, editor),
    convertElements: curryOne(
      convertElements,
      editor
    )
  };
}

// ../react/src/convert-element-plugin/index.tsx
var ConvertElementPlugin = createPlugin((editor) => {
  editor.convertElement = createConvertElementMethods(editor);
  return {
    name: "convert-element"
  };
});

// ../react/src/heading-plugin/index.tsx
init_react_shim();

// ../react/src/heading-plugin/types.ts
init_react_shim();

// ../react/src/heading-plugin/insert-break.ts
init_react_shim();
import { Editor as Editor27, Path as Path8, Range as Range5, Transforms as Transforms18 } from "slate";
function insertBreak(editor) {
  const entry = findElementUp(editor, "heading");
  if (!entry)
    return false;
  if (!editor.selection)
    return false;
  if (Range5.isExpanded(editor.selection))
    return false;
  if (!Editor27.isEnd(editor, editor.selection.anchor, entry[1]))
    return false;
  const nextPath = Path8.next(entry[1]);
  Transforms18.insertNodes(
    editor,
    { type: "paragraph", children: [{ text: "" }] },
    { at: nextPath }
  );
  Transforms18.select(editor, {
    anchor: Editor27.start(editor, nextPath),
    focus: Editor27.start(editor, nextPath)
  });
  return true;
}

// ../react/src/heading-plugin/methods/index.ts
init_react_shim();
function convertHeading(editor, level, allowToggle) {
  editor.convertElement.convertElements(
    (element) => element.type === "heading" && element.level == level,
    { type: "heading", level },
    allowToggle
  );
}
function createHeadingMethods(editor) {
  return {
    convertHeading: curryOne(convertHeading, editor)
  };
}

// ../react/src/heading-plugin/styles.ts
init_react_shim();
import { css } from "@emotion/react";
import styled18 from "@emotion/styled";
var headingStyles = css`
  margin-top: 1em;
  &:first-child {
    margin-top: 0;
  }
  font-weight: bold;
`;
var $H1 = styled18("h1")`
  ${headingStyles}
  font-size: 2.25em;
  letter-spacing: -0.01em;
`;
var $H2 = styled18("h2")`
  ${headingStyles}
  font-size: 1.5em;
`;
var $H3 = styled18("h3")`
  ${headingStyles}
  font-size: 1.25em;
`;
var $H4 = styled18("h4")`
  ${headingStyles}
  font-size: 1em;
`;
var $H5 = styled18("h5")`
  ${headingStyles}
  font-size: 1em;
`;
var $H6 = styled18("h6")`
  ${headingStyles}
  font-size: 1em;
`;

// ../react/src/heading-plugin/index.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
var HeadingPlugin = createPlugin(
  (editor) => {
    editor.convertElement.addConvertElementType("heading");
    editor.heading = createHeadingMethods(editor);
    const hotkeyHandler = createHotkeyHandler({
      "super+1": curryTwo(editor.heading.convertHeading, 1, true),
      "super+2": curryTwo(editor.heading.convertHeading, 2, true),
      "super+3": curryTwo(editor.heading.convertHeading, 3, true),
      "super+4": curryTwo(editor.heading.convertHeading, 4, true),
      "super+5": curryTwo(editor.heading.convertHeading, 5, true),
      "super+6": curryTwo(editor.heading.convertHeading, 6, true)
    });
    const autocompleteHandler = createAutocompleteSpaceHandler(editor, {
      "#": curryTwo(editor.heading.convertHeading, 1, false),
      "##": curryTwo(editor.heading.convertHeading, 2, false),
      "###": curryTwo(editor.heading.convertHeading, 3, false),
      "####": curryTwo(editor.heading.convertHeading, 4, false),
      "#####": curryTwo(editor.heading.convertHeading, 5, false),
      "######": curryTwo(editor.heading.convertHeading, 6, false)
    });
    return {
      name: "heading",
      editor: {
        insertBreak: curryOne(insertBreak, editor)
      },
      editableProps: {
        renderElement: ({ element, attributes, children }) => {
          if (element.type === "heading") {
            switch (element.level) {
              case 1:
                return /* @__PURE__ */ jsx25($H1, { ...attributes, children });
              case 2:
                return /* @__PURE__ */ jsx25($H2, { ...attributes, children });
              case 3:
                return /* @__PURE__ */ jsx25($H3, { ...attributes, children });
              case 4:
                return /* @__PURE__ */ jsx25($H4, { ...attributes, children });
              case 5:
                return /* @__PURE__ */ jsx25($H5, { ...attributes, children });
              case 6:
                return /* @__PURE__ */ jsx25($H6, { ...attributes, children });
              default:
                throw new Error(
                  `Expected element.level to be 1-6 but got ${element.level}`
                );
            }
          }
        },
        onKeyDown: (e) => {
          if (hotkeyHandler(e))
            return true;
          if (autocompleteHandler(e))
            return true;
          return false;
        }
      }
    };
  }
);

// ../react/src/horizontal-rule-plugin/index.tsx
init_react_shim();

// ../react/src/horizontal-rule-plugin/horizontal-rule.tsx
init_react_shim();
import { useSelected as useSelected5 } from "slate-react";

// ../react/src/horizontal-rule-plugin/styles.tsx
init_react_shim();
import styled19 from "@emotion/styled";
var $HorizontalRule = styled19("hr")`
  position: relative;
  height: 1em;
  /* background-color: var(--hr-color); */
  margin: 1em 0;
  &::before {
    position: absolute;
    content: "";
    left: 0.125em;
    right: 0.125em;
    top: 50%;
    height: 1px;
    background-color: var(--hr-color);
    border-radius: 1px;
  }
  border-radius: 0.25em;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: rgba(0, 127, 255, 0.1);
    /* &::before {
      outline: 2px solid var(--hover-color);
    } */
  }
  &.--selected {
    background: none;
    &::before {
      outline: 2px solid var(--select-color, blue);
    }
  }
`;

// ../react/src/horizontal-rule-plugin/horizontal-rule.tsx
import { jsx as jsx26, jsxs as jsxs9 } from "react/jsx-runtime";
function HorizontalRule({
  attributes,
  children
}) {
  const selected = useSelected5();
  return /* @__PURE__ */ jsxs9("div", { ...attributes, draggable: true, children: [
    children,
    /* @__PURE__ */ jsx26("div", { contentEditable: false, children: /* @__PURE__ */ jsx26($HorizontalRule, { className: selected ? "--selected" : "" }) })
  ] });
}

// ../react/src/horizontal-rule-plugin/methods/index.ts
init_react_shim();
function insertHorizontalRule(editor) {
  return insertRootElement(editor, {
    type: "horizontal-rule",
    children: [{ text: "" }]
  });
}
function createHorizontalRuleMethods(editor) {
  return {
    insertHorizontalRule: curryOne(insertHorizontalRule, editor)
  };
}

// ../react/src/horizontal-rule-plugin/types.ts
init_react_shim();

// ../react/src/horizontal-rule-plugin/index.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
var HorizontalRulePlugin = createPlugin(
  (editor, options, { createPolicy }) => {
    editor.horizontalRule = createHorizontalRuleMethods(editor);
    return createPolicy({
      name: "horizontal-rule",
      editor: {
        isVoid(element) {
          if (element.type === "horizontal-rule")
            return true;
        }
      },
      editableProps: {
        renderElement: (props) => {
          if (props.element.type === "horizontal-rule") {
            return /* @__PURE__ */ jsx27(HorizontalRule, { ...props });
          }
        },
        onKeyDown: createHotkeyHandler({
          "super+-": editor.horizontalRule.insertHorizontalRule
        })
      }
    });
  }
);

// ../react/src/image-plugin/index.tsx
init_react_shim();
import { Editor as Editor31, Transforms as Transforms23 } from "slate";
import { ReactEditor as ReactEditor8 } from "slate-react";

// ../react/src/image-plugin/methods/index.ts
init_react_shim();
function noop(editor) {
  editor;
}
function createImageMethods(editor) {
  return {
    noop: curryOne(noop, editor)
  };
}

// ../react/src/image-plugin/normalize-node/index.ts
init_react_shim();
function normalizeNode4(editor, entry) {
  editor;
  entry;
  return false;
}

// ../react/src/image-plugin/render-element/index.tsx
init_react_shim();

// ../react/src/image-plugin/render-element/image-block.tsx
init_react_shim();
import { useSlateStatic as useSlateStatic10 } from "slate-react";

// ../react/src/image-plugin/styles/image-block-styles.tsx
init_react_shim();
import styled20 from "@emotion/styled";
var $ImageBlock = styled20("div")`
  display: block;
  margin: 1em 0;
`;

// ../react/src/image-plugin/render-element/image-with-controls/index.tsx
init_react_shim();
import { clsx as clsx5 } from "clsx";
import { useState as useState4 } from "react";
import { useSelected as useSelected6 } from "slate-react";

// ../react/src/image-plugin/styles/image-with-controls-styles/image-with-controls-styles.tsx
init_react_shim();
import styled21 from "@emotion/styled";
var $ImageContainer = styled21("span")`
  /**
   * In order for this container to wrap tightly (without space), it needs to be
   * an "inline-block". If it's just an "inline" we end up with spacing
   * artificats related to how spacing is placed around text.
   */
  display: inline-block;
  /**
   * This wrapper's primary purpose (why we don't use the image by itself) is
   * so that we can place UI controls for the image in and around the image.
   */
  position: relative;
`;
var $Image = styled21("img")`
  /**
   * TODO:
   *
   * This is a bit of a hack but is a better experience than not anything.
   *
   * Constrains the maximum resize width of an image to 100% of the space
   * available. This prevents the image from stepping outside its boundaries.
   *
   * Problem:
   *
   * - The "height" is set to "auto" which likely conflicts with the height
   *   provided as an image attribute of "height" set by the application.
   *   Effectively, this means that the "height" is ignored which is fine
   *   except when the image hasn't been loaded yet, I think it's possible
   *   and perhaps likely that there may be a reflow that happens before/after
   *   the image is loaded.
   */
  max-width: 100%;
  height: auto;

  /**
   * Rounded borders are pretty and also help the selection outline look
   * pretty.
   */
  transition: border-radius 250ms;
  border-radius: 0.5em;
  .--small > & {
    border-radius: 1px;
  }
  display: block;

  /**
   * Selection border. We leave a space between the outline and the image so
   * that an image that is the same color as the selection border will still
   * look selected.
   */
  .--selected > & {
    outline: 2px solid var(--select-color);
    outline-offset: 1px;
  }
  /**
   * If the image isn't loaded yet, we want to have some color filling the space
   * that the image will eventually load into. This helps indicates to the user
   * the space that the image will fill into.
   *
   * Once the image is finished loading, we want to respect transparency so at
   * that point we hide the background shading.
   */
  .--loading > & {
    background: var(--shade-100);
  }

  /**
   * When we change the image via a preset, we want to animate the change;
   * however, when we are dragging to resize, a transition adds a janky delay
   * to the resize so we remove the transition during drag resizing.
   */
  transition: width 100ms, height 100ms;
  .--dragging > & {
    transition: border-radius 250ms;
  }
`;

// ../react/src/image-plugin/render-element/image-with-controls/image-resize-controls/image-resize-control.tsx
init_react_shim();
import { clsx as clsx3 } from "clsx";
import { useCallback as useCallback6 } from "react";
import { Transforms as Transforms19 } from "slate";
import { ReactEditor as ReactEditor4, useSlateStatic as useSlateStatic6 } from "slate-react";

// ../react/src/use-reposition/hooks/index.ts
init_react_shim();

// ../react/src/use-reposition/hooks/use-resize-browser.tsx
init_react_shim();
import { useEffect as useEffect4 } from "react";
function useResizeBrowser() {
  const refresh = useThrottledRefresh();
  useEffect4(() => {
    refresh();
    window.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("resize", refresh);
    };
  }, []);
  return refresh;
}

// ../react/src/image-plugin/styles/image-with-controls-styles/image-resize-handle-styles.tsx
init_react_shim();
import styled22 from "@emotion/styled";
var $ImageResizeInvisibleHandle = styled22("span")`
  position: absolute;
  display: block;
  /**
   * Prevent touch dragging from exhibiting a kind of scroll bounce behavior
   * when we just want the image to resize.
   */
  touch-action: none;
  background: rgba(127, 127, 127, 0.001);
  top: 0;
  right: calc(-1em - 2px);
  width: 2em;
  bottom: 0;
  &.--left {
    cursor: w-resize;
  }
  &.--center {
    cursor: ew-resize;
  }
  &.--right {
    cursor: e-resize;
  }
  &.--small {
    right: calc(-1.25em);
    /* background: green; */
    width: 1.25em;
  }
`;
var $ImageResizeHandle = styled22("span")`
  position: absolute;
  display: block;
  background: var(--select-color);
  top: 50%;
  margin-top: -1em;
  width: 1em;
  height: 2em;
  outline: 1px solid white;
  transition: all 250ms;
  /**
   * The handle is 3 visible states depending on whether the image is at
   * maximum size or minimum size.
   *
   * There are three indicators that let the user know which directions are
   * available (left, right or both) that the user can drag:
   *
   * - rounded corners on the side that are available to drag towards
   * - on larger size image, the handle is on the inside, middle or outside
   *   of the outline
   * - the cursor pointer indicates the direction available for resizing.
   */
  .--center > & {
    left: 0.5em;
    border-radius: 0.375em;
  }
  .--left > & {
    border-radius: 0.5em 0 0 0.5em;
    left: 1px;
  }
  .--right > & {
    border-radius: 0 0.5em 0.5em 0;
    left: calc(50% - 1px);
  }
  .--bar {
    position: absolute;
    background: var(--blue-200);
    width: 1px;
    top: 0.5em;
    bottom: 0.5em;
  }
  /**
   * Each of 3 bars is 1px wide and 3px apart
   */
  .--bar-left {
    left: calc(50% - 3.5px);
  }
  .--bar-center {
    left: calc(50% - 0.5px);
  }
  .--bar-right {
    left: calc(50% + 2.5px);
  }
  /**
   * When the image is small, we reduce the size of the handler and place it
   * outside the image. The reasons we do this:
   * 
   * - If the handle is not outside the image at small sizes, the handle
   *   obscures the image too much. At larger sizes, it works okay and the
   *   inside handle placement makes the available direction of the drags more
   *   intuitive.
   *
   * - Also, at small sizes, a large handle can overwhelm the image. That is,
   *   the handle can be twice as tall as the image itself which looks poor.
   *   It's still possible for the handle to be larger than the image at small
   *   sizes, but this is okay in that we don't want the handle to become so
   *   small that it is hard to see and hard to click.
   */
  .--small > & {
    /**
     * We opt to mainly adjust the size of the handle at smaller sizes by
     * adjusting the font-size. This is more efficient than changing all the
     * border-sizes because changing the font-size automatically changes the
     * size of the border, but we don't have to redo the different combinations
     * border-size and the corner that they need to display on.
     */
    font-size: 0.5em;
    width: 1.5em;
    left: 0.5em;
    margin-top: -1em;
  }
  /**
   * Each of 2 bars is 1px wide and 3px apart
   */
  .--small > & > .--bar-left {
    left: calc(50% - 2px);
  }
  .--small > & > .--bar-center {
    display: none;
  }
  .--small > & > .--bar-right {
    left: calc(50% + 1px);
  }
`;

// ../react/src/image-plugin/utils/index.ts
init_react_shim();

// ../react/src/image-plugin/utils/min-max.ts
init_react_shim();
function minMax({
  value,
  min,
  max
}) {
  if (!(max >= min))
    throw new Error(`Expected max >= min but is not`);
  return Math.max(min, Math.min(max, value));
}

// ../react/src/image-plugin/utils/resize-utils.ts
init_react_shim();
import { ReactEditor as ReactEditor3 } from "slate-react";
function resizeToWidth(width, srcSize) {
  width = Math.round(width);
  const aspect = srcSize.width / srcSize.height;
  return { width, height: Math.round(width / aspect) };
}
function resizeToHeight(height, srcSize) {
  height = Math.round(height);
  const aspect = srcSize.width / srcSize.height;
  return { width: Math.round(height * aspect), height };
}
function resizeInBounds(size, bounds) {
  const aspect = size.width / size.height;
  const boundsAspect = bounds.width / bounds.height;
  if (aspect >= boundsAspect) {
    if (size.width > bounds.width) {
      return resizeToWidth(bounds.width, size);
    }
  } else {
    if (size.height > bounds.width) {
      return resizeToHeight(bounds.height, size);
    }
  }
  return size;
}
function resizeInPreset(size, srcSize, preset) {
  switch (preset.type) {
    case "bounds":
      return resizeInBounds(srcSize, preset);
    case "scale":
      return {
        width: Math.round(srcSize.width * preset.scale),
        height: Math.round(srcSize.height * preset.scale)
      };
  }
}
function getEditorWidth(editor) {
  const element = ReactEditor3.toDOMNode(editor, editor);
  const computed = getComputedStyle(element);
  const padding = parseInt(computed.paddingLeft) + parseInt(computed.paddingRight);
  return element.clientWidth - padding;
}

// ../react/src/image-plugin/render-element/image-with-controls/image-resize-controls/image-resize-control.tsx
import { Fragment as Fragment3, jsx as jsx28, jsxs as jsxs10 } from "react/jsx-runtime";
function getImageBoundsFromSlateElement(editor, element) {
  const imageContainerDOMNode = ReactEditor4.toDOMNode(editor, element);
  const imgDOMNode = imageContainerDOMNode.querySelector("img");
  if (!imgDOMNode)
    throw new Error(`Image Element could not be found but should exist`);
  return imgDOMNode.getBoundingClientRect();
}
function ImageResizeControl({
  element,
  srcSize,
  size,
  setSize,
  isDragging,
  setIsDragging
}) {
  const editor = useSlateStatic6();
  useResizeBrowser();
  const editorWidth = getEditorWidth(editor);
  const width = size.width;
  const maxWidth = Math.min(srcSize.width, editorWidth);
  const minWidth = Math.min(12, srcSize.width);
  const onMouseDown = useCallback6(
    (e) => {
      stopEvent(e);
      setIsDragging(true);
      const startX = e.clientX;
      const bounds = getImageBoundsFromSlateElement(editor, element);
      const startWidth = bounds.width;
      let nextSize = { ...size };
      const onDocumentMouseMove = (e2) => {
        const nextWidth = minMax({
          value: startWidth + e2.clientX - startX,
          min: minWidth,
          max: maxWidth
        });
        nextSize = resizeToWidth(nextWidth, srcSize);
        setSize(nextSize);
      };
      const onDocumentMouseUp = () => {
        document.removeEventListener("mousemove", onDocumentMouseMove);
        document.removeEventListener("mouseup", onDocumentMouseUp);
        const path2 = ReactEditor4.findPath(editor, element);
        const size2 = {
          width: nextSize.width,
          height: nextSize.height
        };
        setSize(size2);
        Transforms19.setNodes(editor, size2, { at: path2 });
        setIsDragging(false);
      };
      document.addEventListener("mousemove", onDocumentMouseMove);
      document.addEventListener("mouseup", onDocumentMouseUp);
    },
    [srcSize.width, srcSize.height, size.width, element]
  );
  const onTouchStart = useCallback6(
    (e) => {
      stopEvent(e);
      setIsDragging(true);
      const startX = e.changedTouches[0].clientX;
      const startWidth = size.width;
      let nextSize = { ...size };
      const onDocumentTouchMove = (te) => {
        const e2 = te.changedTouches[0];
        const nextWidth = minMax({
          value: startWidth + e2.clientX - startX,
          min: minWidth,
          max: maxWidth
        });
        nextSize = resizeToWidth(nextWidth, srcSize);
        setSize(nextSize);
      };
      const onDocumentTouchEnd = () => {
        document.removeEventListener("touchmove", onDocumentTouchMove);
        document.removeEventListener("touchend", onDocumentTouchEnd);
        const path2 = ReactEditor4.findPath(editor, element);
        Transforms19.setNodes(
          editor,
          { width: nextSize.width, height: nextSize.height },
          { at: path2 }
        );
        setIsDragging(false);
      };
      document.addEventListener("touchmove", onDocumentTouchMove);
      document.addEventListener("touchend", onDocumentTouchEnd);
    },
    [srcSize.width, srcSize.height, size.width, element]
  );
  const className = clsx3({
    "--center": width < maxWidth && width > minWidth,
    "--left": width >= maxWidth && width > minWidth,
    "--right": width <= minWidth && width < maxWidth,
    "--dragging": isDragging,
    "--small": width <= 64 || size.height <= 64
  });
  return /* @__PURE__ */ jsx28(Fragment3, { children: /* @__PURE__ */ jsx28(
    $ImageResizeInvisibleHandle,
    {
      className,
      onMouseDown,
      onTouchStart,
      children: /* @__PURE__ */ jsxs10($ImageResizeHandle, { children: [
        /* @__PURE__ */ jsx28("span", { className: "--bar --bar-left" }),
        /* @__PURE__ */ jsx28("span", { className: "--bar --bar-center" }),
        /* @__PURE__ */ jsx28("span", { className: "--bar --bar-right" })
      ] })
    }
  ) });
}

// ../react/src/image-plugin/render-element/image-with-controls/image-size-status/image-size-status.tsx
init_react_shim();

// ../react/src/image-plugin/styles/image-with-controls-styles/image-size-status-styles.tsx
init_react_shim();
import styled23 from "@emotion/styled";
var $ImageSizeStatus = styled23("span")`
  position: absolute;
  /**
   * The status appears with a 1px gap from the outline.
   *
   * - 1px for gap from image to outline
   * - 2px for outline width
   * - 1px more for the space to the status
   */
  bottom: calc(-2em - 4px);
  left: 0;
  font-size: 0.625em; /* 10px tiny */
  line-height: 2em;
  padding: 0 0.5em;
  color: var(--shade-100);
  background: var(--shade-600);
  outline: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.5em;
  white-space: nowrap;

  /* force numbers to be monospaced for better alignment */
  font-variant-numeric: tabular-nums;
`;

// ../react/src/image-plugin/render-element/image-with-controls/image-size-status/image-size-status.tsx
import { jsxs as jsxs11 } from "react/jsx-runtime";
function ImageSizeStatus({ size }) {
  return /* @__PURE__ */ jsxs11($ImageSizeStatus, { children: [
    size.width,
    " \xD7 ",
    size.height
  ] });
}

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-toolbar.tsx
init_react_shim();

// ../react/src/image-plugin/styles/image-with-controls-styles/image-toolbar-styles.tsx
init_react_shim();
import styled24 from "@emotion/styled";
var $ImageToolbar = styled24("span")`
  position: absolute;
  /**
   * On top of the image +1 for space inside outline, +2 for outline,
   * +2 for space outside outline.
   *
   * DO NOT MOVE TO BOTTOM:
   *
   * This is a reminder not to move the preset to the bottom. Visually, it is
   * less obtrusive at the bottom; however, an issue is that when switching
   * between different presets, the preset UI moves up/down making it difficult
   * to switch between different presets. When kept at the top, the preset
   * UI doesn't move.
   */
  top: calc(-1.5em - 5px);
  /**
   * Align left to the outline: +1 for space inside outline, +2 for outline
   * width
   */
  left: -3px;
  /**
   * When we're resizing, the controls aren't usable and just add to visual
   * clutter so we hide it. The transition lets us do it smoothly and less
   * obtrusively.
   */
  transition: opacity 200ms;
  .--dragging & {
    opacity: 0;
  }
  display: flex;
  gap: 0.25em;
`;

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-preset-buttons/image-preset-button-group.tsx
init_react_shim();

// ../react/src/image-plugin/styles/image-with-controls-styles/image-buttons-styles.tsx
init_react_shim();
import styled25 from "@emotion/styled";
var $ImageButtonGroup = styled25("span")`
  /* font-size: 0.75em; */
  border-radius: 0.5em;
  display: flex;
  /**
   * So that inner Preset design shows within the rounded corners.
   */
  overflow: clip;
  /**
   * Let's the menu pop a little over other content. Without it, may be able to
   * see the border of the buttons.
   */
  outline: 1px solid white;
`;
var $ImageButton = styled25("span")`
  font-size: 0.75em;
  line-height: 2em;
  padding: 0 0.625em;
  &:last-child {
    border-right: none;
  }
  cursor: pointer;

  /**
   * We don't want it to wrap
   */
  white-space: nowrap;

  /**
   * Preset default colors
   */
  color: var(--shade-600);
  background: var(--shade-200);
  border-right: 1px solid var(--shade-100);
  /**
   * When preset is disabled, it is lighter in color and with elss contrast.
   */
  &.--disabled {
    cursor: default;
    color: var(--shade-300);
    background: var(--shade-100);
    &:hover {
      color: var(--shade-300);
      background: var(--shade-100);
    }
  }
  &.--selected {
    cursor: default;
    color: var(--blue-700);
    background: var(--blue-200);
    &:hover {
      color: var(--blue-700);
      background: var(--blue-200);
    }
  }
  /**
   * On hover, it is dark, and with higher contrast.
   */
  &:hover {
    color: var(--shade-700);
    background: var(--shade-300);
  }
  svg {
    position: relative;
    top: 0.25em;
    font-size: 1.33em;
    line-height: 1em;
  }
`;

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-preset-buttons/image-preset-button.tsx
init_react_shim();
import { clsx as clsx4 } from "clsx";
import { useCallback as useCallback7 } from "react";
import { Transforms as Transforms20 } from "slate";
import { ReactEditor as ReactEditor5, useSlateStatic as useSlateStatic7 } from "slate-react";
import { jsx as jsx29 } from "react/jsx-runtime";
function ImagePresetButton({
  element,
  preset,
  size,
  setSize,
  srcSize
}) {
  const editor = useSlateStatic7();
  const presetSize = resizeInPreset(size, srcSize, preset);
  const tooltip = useTooltip({
    title: preset.title,
    hotkey: `${presetSize.width}x${presetSize.height}`
  });
  const onClick = useCallback7(() => {
    const path2 = ReactEditor5.findPath(editor, element);
    const nextSize = resizeInPreset(size, srcSize, preset);
    setSize(nextSize);
    Transforms20.setNodes(editor, nextSize, { at: path2 });
  }, [element, preset, size, srcSize]);
  const isEnabled = preset.type === "scale" ? true : preset.width <= srcSize.width || preset.height <= srcSize.height;
  const isDisabled = !isEnabled;
  const isSelected = size.width === presetSize.width && size.height === presetSize.height;
  const className = clsx4({
    "--disabled": isDisabled,
    "--selected": !isDisabled && isSelected
  });
  return /* @__PURE__ */ jsx29(
    $ImageButton,
    {
      className,
      onClick: isDisabled ? void 0 : onClick,
      onMouseEnter: tooltip.onMouseEnter,
      onMouseLeave: tooltip.onMouseLeave,
      children: preset.name
    }
  );
}

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-preset-buttons/image-preset-button-group.tsx
import { jsx as jsx30 } from "react/jsx-runtime";
function ImagePresetButtonGroup({
  element,
  size,
  setSize,
  srcSize,
  presets
}) {
  return /* @__PURE__ */ jsx30($ImageButtonGroup, { children: presets.map((preset, i) => {
    return /* @__PURE__ */ jsx30(
      ImagePresetButton,
      {
        element,
        preset,
        size,
        setSize,
        srcSize
      },
      i
    );
  }) });
}

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-type-buttons/image-type-button-group.tsx
init_react_shim();

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-type-buttons/block-image-type-button.tsx
init_react_shim();
import { useCallback as useCallback8 } from "react";
import { useSlateStatic as useSlateStatic8 } from "slate-react";

// ../react/src/image-plugin/render-element/icons.tsx
init_react_shim();
import { jsx as jsx31, jsxs as jsxs12 } from "react/jsx-runtime";
var BlockIcon = (props) => /* @__PURE__ */ jsxs12(TablerIcon, { ...props, children: [
  /* @__PURE__ */ jsx31("rect", { width: 6, height: 6, x: 4, y: 5, rx: 1 }),
  /* @__PURE__ */ jsx31("path", { d: "M4 15h16M4 19h16" })
] });
var InlineIcon = (props) => /* @__PURE__ */ jsxs12(TablerIcon, { ...props, children: [
  /* @__PURE__ */ jsx31("rect", { width: 6, height: 6, x: 9, y: 5, rx: 1 }),
  /* @__PURE__ */ jsx31("path", { d: "M4 7h1M4 11h1M19 7h1M19 11h1M4 15h16M4 19h16" })
] });

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-type-buttons/convert-to-inline-image.tsx
init_react_shim();
import { Editor as Editor29, Transforms as Transforms21 } from "slate";
import { ReactEditor as ReactEditor6 } from "slate-react";
function convertToInlineImage(editor, element) {
  if (!element.width || !element.height || !element.srcWidth || !element.srcHeight)
    return;
  const size = { width: element.width, height: element.height };
  const srcSize = { width: element.srcWidth, height: element.srcHeight };
  const path2 = ReactEditor6.findPath(editor, element);
  Editor29.withoutNormalizing(editor, () => {
    const nextSize = resizeInPreset(size, srcSize, {
      name: "initial-inline-image",
      title: "",
      type: "bounds",
      width: 24,
      height: 24
    });
    Transforms21.setNodes(
      editor,
      { type: "image-inline", ...nextSize },
      { at: path2 }
    );
    Transforms21.wrapNodes(
      editor,
      { type: "paragraph", children: [] },
      { at: path2 }
    );
  });
}

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-type-buttons/block-image-type-button.tsx
import { jsx as jsx32 } from "react/jsx-runtime";
function BlockImageTypeButton({
  element
}) {
  const editor = useSlateStatic8();
  const tooltip = useTooltip({
    title: "Inline Image",
    hotkey: "In a line with text"
  });
  const onClickInline = useCallback8(() => {
    if (element.type !== "image-block")
      return;
    convertToInlineImage(editor, element);
  }, [editor, element]);
  return /* @__PURE__ */ jsx32(
    $ImageButton,
    {
      className: element.type === "image-inline" ? "--selected" : "",
      onClick: element.type === "image-inline" ? void 0 : onClickInline,
      onMouseEnter: tooltip.onMouseEnter,
      onMouseLeave: tooltip.onMouseLeave,
      children: /* @__PURE__ */ jsx32(InlineIcon, {})
    }
  );
}

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-type-buttons/inline-image-type-button.tsx
init_react_shim();
import { useCallback as useCallback9 } from "react";
import { useSlateStatic as useSlateStatic9 } from "slate-react";

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-type-buttons/convert-to-block-image.tsx
init_react_shim();
import { Editor as Editor30, Text as Text3, Transforms as Transforms22 } from "slate";
import { ReactEditor as ReactEditor7 } from "slate-react";
function convertToBlockImage(editor, element) {
  if (!element.width || !element.height || !element.srcWidth || !element.srcHeight)
    return;
  const size = { width: element.width, height: element.height };
  const srcSize = { width: element.srcWidth, height: element.srcHeight };
  const path2 = ReactEditor7.findPath(editor, element);
  Editor30.withoutNormalizing(editor, () => {
    const nextSize = resizeInPreset(size, srcSize, {
      name: "initial-block-image",
      title: "",
      type: "bounds",
      width: 320,
      height: 320
    });
    Transforms22.setNodes(
      editor,
      { type: "image-block", ...nextSize },
      { at: path2 }
    );
    const parentEntry = findElementUp(
      editor,
      (node2) => Editor30.isBlock(editor, node2) && node2.type !== "image-block"
    );
    if (!parentEntry)
      throw new Error("This shouldn't happen");
    const [parentElement, parentPath] = parentEntry;
    const siblings = parentElement.children;
    const siblingCount = parentElement.children.length;
    const index2 = path2.slice(-1)[0];
    const lastSibling = siblings[siblingCount - 1];
    if (index2 === siblingCount - 2 && Text3.isText(lastSibling) && lastSibling.text === "") {
      Transforms22.removeNodes(editor, {
        at: [...parentPath, siblingCount - 1]
      });
    }
    const firstSibling = siblings[0];
    const removeFirstSibling = index2 === 1 && Text3.isText(firstSibling) && firstSibling.text === "";
    if (removeFirstSibling) {
      Transforms22.removeNodes(editor, { at: [...parentPath, 0] });
    }
    Transforms22.liftNodes(editor, {
      at: [...parentPath, removeFirstSibling ? index2 - 1 : index2]
    });
  });
}

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-type-buttons/inline-image-type-button.tsx
import { jsx as jsx33 } from "react/jsx-runtime";
function InlineImageTypeButton({
  element
}) {
  const editor = useSlateStatic9();
  const tooltip = useTooltip({
    title: "Block Image",
    hotkey: "On a line by itself"
  });
  const onClickBlock = useCallback9(() => {
    if (element.type !== "image-inline")
      return;
    convertToBlockImage(editor, element);
  }, [editor, element]);
  return /* @__PURE__ */ jsx33(
    $ImageButton,
    {
      className: element.type === "image-block" ? "--selected" : "",
      onClick: element.type === "image-block" ? void 0 : onClickBlock,
      onMouseEnter: tooltip.onMouseEnter,
      onMouseLeave: tooltip.onMouseLeave,
      children: /* @__PURE__ */ jsx33(BlockIcon, {})
    }
  );
}

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-type-buttons/image-type-button-group.tsx
import { jsx as jsx34, jsxs as jsxs13 } from "react/jsx-runtime";
function ImageTypeButtonGroup({
  element
}) {
  return /* @__PURE__ */ jsxs13($ImageButtonGroup, { children: [
    /* @__PURE__ */ jsx34(InlineImageTypeButton, { element }),
    /* @__PURE__ */ jsx34(BlockImageTypeButton, { element })
  ] });
}

// ../react/src/image-plugin/render-element/image-with-controls/image-toolbar/image-toolbar.tsx
import { jsx as jsx35, jsxs as jsxs14 } from "react/jsx-runtime";
function ImageToolbar({
  element,
  size,
  setSize,
  srcSize,
  presets
}) {
  return /* @__PURE__ */ jsxs14($ImageToolbar, { children: [
    /* @__PURE__ */ jsx35(ImageTypeButtonGroup, { element }),
    /* @__PURE__ */ jsx35(
      ImagePresetButtonGroup,
      {
        element,
        size,
        setSize,
        srcSize,
        presets
      }
    )
  ] });
}

// ../react/src/image-plugin/render-element/image-with-controls/index.tsx
import { jsx as jsx36, jsxs as jsxs15 } from "react/jsx-runtime";
function ImageWithControls({
  element,
  presets
}) {
  const upload2 = useUpload(element.url);
  const selected = useSelected6();
  const [isDragging, setIsDragging] = useState4(false);
  const [size, setSize] = useState4(
    element.srcWidth && element.srcHeight && element.width && element.height ? { width: element.width, height: element.height } : null
  );
  const srcSize = element.srcWidth && element.srcHeight ? { width: element.srcWidth, height: element.srcHeight } : null;
  const showControls = selected && size && srcSize;
  const className = clsx5({
    "--selected": selected,
    "--dragging": isDragging,
    "--small": size && (size.width <= 64 || size.height <= 64),
    "--loaded": upload2.status === "success"
  });
  return /* @__PURE__ */ jsxs15($ImageContainer, { className, children: [
    /* @__PURE__ */ jsx36($Image, { src: upload2.url, width: size?.width, height: size?.height }),
    showControls ? /* @__PURE__ */ jsx36(
      ImageToolbar,
      {
        element,
        size,
        setSize,
        srcSize,
        presets
      }
    ) : null,
    isDragging && size ? /* @__PURE__ */ jsx36(ImageSizeStatus, { size }) : null,
    showControls ? /* @__PURE__ */ jsx36(
      ImageResizeControl,
      {
        element,
        srcSize,
        isDragging,
        setIsDragging,
        size,
        setSize
      }
    ) : null
  ] });
}

// ../react/src/image-plugin/render-element/image-block.tsx
import { jsx as jsx37, jsxs as jsxs16 } from "react/jsx-runtime";
function ImageBlock({
  element,
  attributes,
  children
}) {
  const editor = useSlateStatic10();
  return /* @__PURE__ */ jsxs16("div", { ...attributes, children: [
    /* @__PURE__ */ jsx37($ImageBlock, { contentEditable: false, children: /* @__PURE__ */ jsx37(
      ImageWithControls,
      {
        element,
        presets: editor.image.imageBlockPresets
      }
    ) }),
    children
  ] });
}

// ../react/src/image-plugin/render-element/image-inline.tsx
init_react_shim();
import { useSlateStatic as useSlateStatic11 } from "slate-react";

// ../react/src/image-plugin/styles/image-inline-styles.tsx
init_react_shim();
import styled26 from "@emotion/styled";
var $ImageInline = styled26("span")`
  display: inline;
`;

// ../react/src/image-plugin/render-element/image-inline.tsx
import { jsx as jsx38, jsxs as jsxs17 } from "react/jsx-runtime";
function ImageInline({
  element,
  attributes,
  children
}) {
  const editor = useSlateStatic11();
  return /* @__PURE__ */ jsxs17("span", { ...attributes, style: { display: "inline-block" }, children: [
    /* @__PURE__ */ jsx38($ImageInline, { contentEditable: false, children: /* @__PURE__ */ jsx38(
      ImageWithControls,
      {
        element,
        presets: editor.image.imageInlinePresets
      }
    ) }),
    children
  ] });
}

// ../react/src/image-plugin/render-element/index.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
function renderElement2({
  element,
  attributes,
  children
}) {
  switch (element.type) {
    case "image-block":
      return /* @__PURE__ */ jsx39(ImageBlock, { element, attributes, children });
    case "image-inline":
      return /* @__PURE__ */ jsx39(ImageInline, { element, attributes, children });
  }
}

// ../react/src/image-plugin/index.tsx
var DEFAULT_OPTIONS = {
  maxInitialInlineImageSize: { width: 64, height: 64 },
  maxInitialImageSize: { width: 320, height: 320 },
  maxImageSize: { width: 1024, height: 1024 },
  imageBlockPresets: [
    /**
     * Pixel Presets
     */
    { name: "S", title: "Small", type: "bounds", width: 160, height: 160 },
    { name: "M", title: "Medium", type: "bounds", width: 320, height: 320 },
    { name: "L", title: "Large", type: "bounds", width: 640, height: 640 },
    /**
     * Scale Presets
     */
    { name: "\u2153", title: "1/3 scale", type: "scale", scale: 1 / 3 },
    { name: "\xBD", title: "1/2 scale", type: "scale", scale: 0.5 },
    { name: "Full", title: "Full size", type: "scale", scale: 1 }
  ],
  imageInlinePresets: [
    /**
     * Pixel Presets
     */
    {
      name: "16",
      title: "16 pixels",
      type: "bounds",
      width: 16,
      height: 16
    },
    {
      name: "24",
      title: "24 pixels",
      type: "bounds",
      width: 24,
      height: 24
    },
    {
      name: "32",
      title: "32 pixels",
      type: "bounds",
      width: 32,
      height: 32
    },
    /**
     * Scale Presets
     */
    { name: "\u2153", title: "1/3 scale", type: "scale", scale: 1 / 3 },
    { name: "\xBD", title: "1/2 scale", type: "scale", scale: 0.5 },
    { name: "Full", title: "Full size", type: "scale", scale: 1 }
  ]
};
var ImagePlugin = (
  //({
  createPlugin(
    (editor, sinkOptions, { createPolicy }) => {
      const options = {
        ...DEFAULT_OPTIONS,
        ...sinkOptions.image
      };
      editor.image = {
        ...createImageMethods(editor),
        maxInitialInlineImageSize: options.maxInitialInlineImageSize,
        maxInitialImageSize: options.maxInitialImageSize,
        maxImageSize: options.maxImageSize,
        imageBlockPresets: options.imageBlockPresets,
        imageInlinePresets: options.imageInlinePresets
      };
      editor.upload.onUploadImageFile = (e) => {
        const { selection } = editor;
        if (e.width <= 64 && e.height <= 64) {
          Transforms23.insertNodes(editor, {
            type: "image-inline",
            url: e.hashUrl,
            alt: e.file.name,
            title: e.file.name,
            bytes: e.file.size,
            width: e.width,
            height: e.height,
            srcWidth: e.width,
            srcHeight: e.height,
            children: [{ text: "" }]
          });
        } else {
          const initialSize = resizeInBounds(
            { width: e.width, height: e.height },
            options.maxInitialImageSize || options.maxImageSize
          );
          Transforms23.insertNodes(editor, {
            type: "image-block",
            url: e.hashUrl,
            alt: e.file.name,
            title: e.file.name,
            bytes: e.file.size,
            width: initialSize.width,
            height: initialSize.height,
            srcWidth: e.width,
            srcHeight: e.height,
            children: [{ text: "" }]
          });
        }
        if (!selection) {
          const lastPos = Editor31.end(editor, []);
          Transforms23.select(editor, lastPos);
          ReactEditor8.focus(editor);
        }
        return true;
      };
      editor.upload.onUploadImageFileSuccess = (e) => {
        editor.upload.setElementTimeTraveling({ url: e.hashUrl }, { url: e.url });
        return true;
      };
      return createPolicy({
        name: "image",
        editor: {
          isVoid: (element) => {
            if (["image-block", "image-inline"].includes(element.type)) {
              return true;
            }
          },
          isInline: (element) => {
            if (element.type === "image-inline")
              return true;
          },
          normalizeNode: curryOne(normalizeNode4, editor)
        },
        editableProps: {
          renderElement: renderElement2
        }
      });
    }
  )
);

// ../react/src/inline-code-plugin/index.tsx
init_react_shim();

// ../react/src/inline-code-plugin/styles.ts
init_react_shim();
import styled27 from "@emotion/styled";
var $InlineCode = styled27("code")`
  color: var(--shade-600);
  background-color: var(--inline-code-bgcolor);
  border: 1px solid var(--inline-code-border-color);
  border-radius: 0.25em;
  padding: 0.1375em 0.125em;
  /**
   * Font Stack from
   * https://qwtel.com/posts/software/the-monospaced-system-ui-css-font-stack/
   */
  font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
  /**
   * This font size may seem smaller but any larger (including 0.875) means that
   * it messes up the line height of the normal text. Not sure why this happens
   * with the monospace font but seems to happen on both the default 'monospace'
   * font as well as the font stack above.
   */
  font-size: 0.75em;
  vertical-align: baseline;
`;
var $InvisibleSpan = styled27("span")`
  display: inline-block;
  opacity: 0;
  width: 1px;
  overflow: hidden;
`;

// ../react/src/inline-code-plugin/types.ts
init_react_shim();

// ../react/src/inline-code-plugin/index.tsx
import { jsx as jsx40, jsxs as jsxs18 } from "react/jsx-runtime";
var InlineCodePlugin = createPlugin(
  (editor) => {
    if (!editor.marksPlugin)
      throw new Error(
        "InlineCodePlugin has a dependency on the MarksPlugin but the MarksPlugin has not been added or is added after the InlineCodePlugin"
      );
    editor.inlineCode = {
      toggleInlineCode: () => editor.marksPlugin.toggleMark("code")
    };
    return {
      name: "inline-code",
      editableProps: {
        renderLeaf: ({ leaf, children }) => {
          if (leaf.code) {
            return (
              /**
               * Disable spellCheck because it's computer code usually.
               */
              /* @__PURE__ */ jsxs18($InlineCode, { spellCheck: false, children: [
                /* @__PURE__ */ jsx40($InvisibleSpan, { contentEditable: false, children: "|" }),
                children,
                /* @__PURE__ */ jsx40($InvisibleSpan, { contentEditable: false, children: "|" })
              ] })
            );
          } else {
            return children;
          }
        },
        onKeyDown: createHotkeyHandler({
          "mod+j": () => editor.inlineCode.toggleInlineCode()
        })
      }
    };
  }
);

// ../react/src/list-plugin/index.tsx
init_react_shim();
import { Editor as Editor36, Path as Path9 } from "slate";

// ../react/src/list-plugin/methods/index.ts
init_react_shim();

// ../react/src/list-plugin/methods/convert-list-item.ts
init_react_shim();
function convertOrderedList(editor, allowToggle) {
  return editor.convertElement.convertElements(
    (element) => element.type === "ordered-list-item",
    (element) => {
      return {
        type: "ordered-list-item",
        depth: "depth" in element ? element.depth : 0
      };
    },
    allowToggle
  );
}
function convertTaskList(editor, allowToggle) {
  return editor.convertElement.convertElements(
    (element) => element.type === "task-list-item",
    (element) => {
      return {
        type: "task-list-item",
        checked: "checked" in element ? element.checked : false,
        depth: "depth" in element ? element.depth : 0
      };
    },
    allowToggle
  );
}
function convertUnorderedList(editor, allowToggle) {
  return editor.convertElement.convertElements(
    (element) => element.type === "unordered-list-item",
    (element) => {
      return {
        type: "unordered-list-item",
        depth: "depth" in element ? element.depth : 0
      };
    },
    allowToggle
  );
}

// ../react/src/list-plugin/methods/indent.ts
init_react_shim();
function indent2(editor) {
  return setNodesDynamic(
    editor,
    (node2) => ({ depth: node2.depth + 1 }),
    {
      match: isListItem
    }
  );
}

// ../react/src/list-plugin/methods/insert-break.ts
init_react_shim();
import { Editor as Editor32, Transforms as Transforms24 } from "slate";
function insertBreak2(editor) {
  const entry = findElementUp(editor, isListItem);
  if (!entry)
    return false;
  const [element, path2] = entry;
  if (Editor32.isEmpty(editor, element)) {
    if (element.depth > 0) {
      Transforms24.setNodes(editor, { depth: element.depth - 1 }, { at: path2 });
      return true;
    } else {
      rewrapElement(editor, { type: "paragraph" }, path2);
      return true;
    }
  }
  Transforms24.splitNodes(editor, { always: true });
  const nextEntry = findElementUp(editor, isListItem);
  if (!nextEntry)
    return true;
  if (nextEntry[0].type === "task-list-item" && nextEntry[0].checked === true) {
    Transforms24.setNodes(editor, { checked: false }, { at: nextEntry[1] });
  }
  return true;
}

// ../react/src/list-plugin/methods/outdent.ts
init_react_shim();
import { Editor as Editor33 } from "slate";
function outdent(editor) {
  const entries = Array.from(
    Editor33.nodes(editor, {
      match: isListItem
    })
  );
  for (const entry of entries) {
    if (entry[0].depth === 0)
      return true;
  }
  return setNodesDynamic(
    editor,
    (node2) => ({ depth: Math.max(0, node2.depth - 1) }),
    {
      match: isListItem
    }
  );
}

// ../react/src/list-plugin/methods/toggleTaskListItem.ts
init_react_shim();
import { Transforms as Transforms25 } from "slate";
function toggleTaskListItem(editor, { at = editor.selection } = {}) {
  const taskListItem = findElementUp(
    editor,
    "task-list-item",
    { at }
  );
  if (!taskListItem)
    return false;
  const nextChecked = !taskListItem[0].checked;
  Transforms25.setNodes(
    editor,
    { checked: nextChecked },
    { at: taskListItem[1] }
  );
}

// ../react/src/list-plugin/methods/index.ts
function createListMethods(editor) {
  return {
    indent: curryOne(indent2, editor),
    outdent: curryOne(outdent, editor),
    convertUnorderedList: curryOne(convertUnorderedList, editor),
    convertOrderedList: curryOne(convertOrderedList, editor),
    convertTaskList: curryOne(convertTaskList, editor),
    insertBreak: curryOne(insertBreak2, editor),
    toggleTaskListItem: curryOne(toggleTaskListItem, editor)
  };
}

// ../react/src/list-plugin/normalize-node/index.ts
init_react_shim();

// ../react/src/list-plugin/normalize-node/normalize-ordered-first-at-depth.ts
init_react_shim();
import { Element as Element21, Transforms as Transforms26 } from "slate";
var isOrderedListItem = createIsElementType([
  "ordered-list-item"
]);
function normalizeOrderedFirstAtDepth(editor, entry) {
  const [node2, path2] = entry;
  if (!Element21.isElement(node2))
    return false;
  return normalizeSiblings(editor, [node2, path2], (a, b) => {
    if (!isOrderedListItem(b[0]))
      return false;
    const __firstAtDepth = !isOrderedListItem(a[0]) || b[0].depth > a[0].depth;
    if (b[0].__firstAtDepth !== __firstAtDepth) {
      Transforms26.setNodes(editor, { __firstAtDepth }, { at: b[1] });
      return true;
    }
    return false;
  });
}

// ../react/src/list-plugin/normalize-node/index.ts
function normalizeNode5(editor, entry) {
  const [node2] = entry;
  if (!isListItem(node2))
    return false;
  return normalizeOrderedFirstAtDepth(editor, entry);
}

// ../react/src/list-plugin/render-element/index.tsx
init_react_shim();

// ../react/src/list-plugin/render-element/ordered-list-item.tsx
init_react_shim();
import { clsx as clsx6 } from "clsx";
import { useEffect as useEffect5 } from "react";
import { ReactEditor as ReactEditor9, useSlateStatic as useSlateStatic12 } from "slate-react";

// ../react/src/list-plugin/render-element/styles.ts
init_react_shim();
import styled28 from "@emotion/styled";
var $ListItem = styled28("li")`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  list-style-position: outside;
  margin-left: calc(2em + var(--list-item-depth) * 2em);
`;
var $UnorderedListItem = styled28($ListItem)`
  position: relative;
  list-style-type: none;
  .--list-item-icon {
    position: absolute;
    top: 0.25em;
    left: -1.375em;
    line-height: 1.5em;
    color: var(--shade-600);
  }
`;
var $OrderedListItem = styled28($ListItem)`
  position: relative;
  list-style-type: none;
  counter-increment: var(--list-item-var);

  &.--first-at-depth {
    counter-reset: var(--list-item-var);
    /**
     * if isDebug is true, then show a highlight on list items that are marked
     * as the first at a given depth.
     */
    background: ${isDebug ? "rgba(0, 255, 0, 0.2)" : "inherit"};
  }

  &:before {
    position: absolute;
    content: counter(var(--list-item-var)) ".";
    top: 0;
    left: -2em;
    width: 1.5em;
    text-align: right;
    color: var(--shade-500);
    /* force numbers to be monospaced for better alignment */
    font-variant-numeric: tabular-nums;
  }
`;
var $TaskListItem = styled28($ListItem)`
  position: relative;
  list-style-type: none;
  .--list-item-icon {
    position: absolute;
    top: 0.25em;
    left: -1.5em;
    line-height: 1.5em;
    color: var(--shade-300);
    .--checkmark {
      color: green;
      stroke-width: 3px;
    }
  }
`;

// ../react/src/list-plugin/render-element/ordered-list-item.tsx
import { jsx as jsx41 } from "react/jsx-runtime";
function OrderedListItem({
  element,
  attributes,
  children
}) {
  const editor = useSlateStatic12();
  useEffect5(() => {
    const path2 = ReactEditor9.findPath(editor, element);
    normalizeOrderedFirstAtDepth(editor, [element, path2]);
  }, []);
  const style = {
    "--list-item-depth": element.depth,
    "--list-item-var": `list-item-depth-${element.depth}`
  };
  const className = clsx6({ "--first-at-depth": element.__firstAtDepth });
  return /* @__PURE__ */ jsx41($OrderedListItem, { ...attributes, className, style, children });
}

// ../react/src/list-plugin/render-element/task-list-item.tsx
init_react_shim();
import { useCallback as useCallback10 } from "react";
import { useSlateStatic as useSlateStatic13 } from "slate-react";

// ../react/src/list-plugin/render-element/list-icons.tsx
init_react_shim();
import { jsx as jsx42, jsxs as jsxs19 } from "react/jsx-runtime";
var UncheckedIcon = (props) => /* @__PURE__ */ jsxs19(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx42("path", { d: "M0 0h24v24H0z", stroke: "none" }),
      /* @__PURE__ */ jsx42("rect", { x: 4, y: 4, width: 16, height: 16, rx: 2 })
    ]
  }
);
var CheckedIcon = (props) => /* @__PURE__ */ jsxs19(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-checkbox",
    width: "1em",
    height: "1em",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx42("path", { d: "M0 0h24v24H0z", stroke: "none" }),
      /* @__PURE__ */ jsx42("path", { d: "m9 11 3 3 8-8", className: "--checkmark" }),
      /* @__PURE__ */ jsx42("path", { d: "M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" })
    ]
  }
);
var BulletIcon = (props) => /* @__PURE__ */ jsx42(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx42("path", { d: "M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5z" })
  }
);

// ../react/src/list-plugin/render-element/task-list-item.tsx
import { jsx as jsx43, jsxs as jsxs20 } from "react/jsx-runtime";
function TaskListItem({
  element,
  attributes,
  children
}) {
  const editor = useSlateStatic13();
  const toggle = useCallback10(() => {
    editor.list.toggleTaskListItem({ at: element });
  }, [editor, element]);
  const style = { "--list-item-depth": element.depth };
  return /* @__PURE__ */ jsxs20($TaskListItem, { ...attributes, style, children: [
    /* @__PURE__ */ jsx43("div", { className: "--list-item-icon", contentEditable: false, children: element.checked ? /* @__PURE__ */ jsx43(CheckedIcon, { onClick: toggle, style: { cursor: "pointer" } }) : /* @__PURE__ */ jsx43(UncheckedIcon, { onClick: toggle, style: { cursor: "pointer" } }) }),
    children
  ] });
}

// ../react/src/list-plugin/render-element/unordered-list-item.tsx
init_react_shim();
import { jsx as jsx44, jsxs as jsxs21 } from "react/jsx-runtime";
function UnorderedListItem({
  element,
  attributes,
  children
}) {
  const style = { "--list-item-depth": element.depth };
  return /* @__PURE__ */ jsxs21($UnorderedListItem, { ...attributes, style, children: [
    /* @__PURE__ */ jsx44("div", { className: "--list-item-icon", contentEditable: false, children: /* @__PURE__ */ jsx44(BulletIcon, {}) }),
    children
  ] });
}

// ../react/src/list-plugin/render-element/index.tsx
import { jsx as jsx45 } from "react/jsx-runtime";
function renderElement3({
  element,
  attributes,
  children
}) {
  switch (element.type) {
    case "ordered-list-item":
      return /* @__PURE__ */ jsx45(OrderedListItem, { element, attributes, children });
    case "unordered-list-item":
      return /* @__PURE__ */ jsx45(UnorderedListItem, { element, attributes, children });
    case "task-list-item":
      return /* @__PURE__ */ jsx45(TaskListItem, { element, attributes, children });
  }
}

// ../react/src/list-plugin/types.ts
init_react_shim();

// ../react/src/list-plugin/index.tsx
var LIST_ITEM_TYPES = [
  "unordered-list-item",
  "ordered-list-item",
  "task-list-item"
];
var isListItem = createIsElementType(LIST_ITEM_TYPES);
var ListPlugin = createPlugin(
  (editor, options, { createPolicy }) => {
    editor.convertElement.addConvertElementType(LIST_ITEM_TYPES);
    const list2 = editor.list = createListMethods(editor);
    const hotkeyHandler = createHotkeyHandler({
      tab: list2.indent,
      "shift+tab": list2.outdent,
      "super+7": curryOne(list2.convertOrderedList, true),
      "super+8": curryOne(list2.convertUnorderedList, true),
      "super+9": curryOne(list2.convertTaskList, true)
    });
    return createPolicy({
      name: "list",
      editor: {
        normalizeNode: (entry) => normalizeNode5(editor, entry),
        insertBreak: list2.insertBreak,
        deleteBackward: (unit) => {
          if (unit !== "character")
            return false;
          if (!isStartOfElement(editor, isListItem))
            return false;
          const listItem2 = findElementUp(editor, isListItem);
          if (!listItem2)
            return false;
          const listItemPath = listItem2[1];
          if (!Path9.hasPrevious(listItemPath)) {
            editor.collapsibleParagraph.convertParagraph();
            return true;
          }
          const prevElementPath = Path9.previous(listItemPath);
          const prevElementEntry = Editor36.node(editor, prevElementPath);
          if (isListItem(prevElementEntry[0]))
            return false;
          editor.collapsibleParagraph.convertParagraph();
          return true;
        }
      },
      editableProps: {
        renderElement: renderElement3,
        onKeyDown(e) {
          if (!Editor36.nodes(editor, { match: isListItem }))
            return false;
          return hotkeyHandler(e);
        }
      }
    });
  }
);

// ../react/src/marks-plugin/index.tsx
init_react_shim();
import { clsx as clsx7 } from "clsx";

// ../react/src/marks-plugin/editor/insert-text/index.ts
init_react_shim();

// ../react/src/marks-plugin/editor/insert-text/autocomplete-mark.ts
init_react_shim();
import { Editor as Editor39, Range as Range6, Transforms as Transforms27 } from "slate";

// ../react/src/marks-plugin/editor/insert-text/get-range-backwards.ts
init_react_shim();
import { Editor as Editor37 } from "slate";
function getRangeBackwards(editor, point3, startDistance, endDistance) {
  const startPoint = Editor37.before(editor, point3, {
    unit: "character",
    distance: startDistance
  });
  const endPoint = endDistance === void 0 ? point3 : Editor37.before(editor, point3, {
    unit: "character",
    distance: endDistance
  });
  if (!startPoint)
    throw new Error(
      `startPoint not found. The distance backward from the point may be invalid.`
    );
  if (!endPoint)
    throw new Error(
      `endPoint not found. The distance backward from the point may be invalid.`
    );
  return {
    anchor: startPoint,
    focus: endPoint
  };
}

// ../react/src/marks-plugin/editor/insert-text/get-text-before-point-in-block.ts
init_react_shim();
import { Editor as Editor38, Element as Element22 } from "slate";
function getTextBeforePointInBlock(editor, point3) {
  const blockEntry = findElementUp(
    editor,
    (node2) => Element22.isElement(node2) && !Editor38.isVoid(editor, node2) && Editor38.isBlock(editor, node2)
  );
  if (blockEntry == null)
    return null;
  const range = {
    anchor: Editor38.start(editor, blockEntry[1]),
    focus: point3
  };
  return Editor38.string(editor, range);
}

// ../react/src/marks-plugin/editor/insert-text/autocomplete-mark.ts
function autocompleteMark(editor, text4, {
  triggerMarker,
  regexp,
  mark
}) {
  if (editor.selection === null)
    return false;
  if (Range6.isExpanded(editor.selection))
    return false;
  if (text4 !== triggerMarker)
    return false;
  const beforeInsertText = getTextBeforePointInBlock(
    editor,
    editor.selection.focus
  );
  const beforeText = `${beforeInsertText}${text4}`;
  const match = beforeText.match(regexp);
  if (match == null)
    return false;
  if (match.length !== 4)
    throw new Error(
      `Expected the RegExp to have 3 grouped subexpressions but returned ${match.length - 1}`
    );
  return () => {
    if (editor.selection === null)
      return false;
    if (Range6.isExpanded(editor.selection))
      return false;
    const closingMarkersRange = getRangeBackwards(
      editor,
      editor.selection.focus,
      /**
       * TODO:
       *
       * We should be using Slate's internal `getCharacterDistance` to generate
       * a length but it is not exposed.
       **/
      match[3].length
    );
    Transforms27.delete(editor, { at: closingMarkersRange });
    const openingMarkersRange = getRangeBackwards(
      editor,
      editor.selection.focus,
      /**
       * TODO:
       *
       * We should be using Slate's internal `getCharacterDistance` to generate
       * a length but it is not exposed.
       **/
      match[2].length + match[3].length,
      match[2].length
    );
    Transforms27.delete(editor, { at: openingMarkersRange });
    const matchRange = getRangeBackwards(
      editor,
      editor.selection.focus,
      /**
       * TODO:
       *
       * We should be using Slate's internal `getCharacterDistance` to generate
       * a length but it is not exposed.
       **/
      match[2].length
    );
    editor.marksPlugin.toggleMark(mark, void 0, { at: matchRange });
    Editor39.removeMark(editor, mark);
  };
}

// ../react/src/marks-plugin/editor/insert-text/index.ts
function insertText(editor, text4) {
  return autocompleteMark(editor, text4, {
    triggerMarker: "`",
    regexp: /([`])([^`]+)([`])$/,
    mark: "code"
  }) || autocompleteMark(editor, text4, {
    triggerMarker: "*",
    regexp: /([*][*])([^*]+)([*][*])$/,
    mark: "bold"
  }) || autocompleteMark(editor, text4, {
    triggerMarker: "~",
    regexp: /(~~)([^~]+)(~~)$/,
    mark: "bold"
  }) || autocompleteMark(editor, text4, {
    triggerMarker: "*",
    regexp: /(?:[^*]|^)([*])([^*]+)([*])$/,
    mark: "italic"
  }) || autocompleteMark(editor, text4, {
    triggerMarker: "~",
    regexp: /(?:[^~]|^)(~)([^~]+)(~)$/,
    mark: "italic"
  });
}

// ../react/src/marks-plugin/methods/index.ts
init_react_shim();

// ../react/src/marks-plugin/methods/removeMarks.ts
init_react_shim();
import { Editor as Editor40, Text as Text5, Transforms as Transforms28 } from "slate";
function removeMarks(editor, { at = editor.selection } = {}) {
  if (at == null)
    return;
  const nodeEntries = [
    ...Editor40.nodes(editor, {
      match: (n) => Text5.isText(n),
      at
    })
  ];
  const setter = {};
  for (const [node2] of nodeEntries) {
    for (const key2 of Object.keys(node2)) {
      if (key2 === "text")
        continue;
      setter[key2] = null;
    }
  }
  Transforms28.setNodes(editor, setter, {
    match: (n) => Text5.isText(n),
    split: true,
    at
  });
}

// ../react/src/marks-plugin/methods/toggle-mark.ts
init_react_shim();
import { Editor as Editor41, Text as Text6, Transforms as Transforms29 } from "slate";
function toggleMark(editor, markKey, unsetKey, { at = editor.selection } = {}) {
  if (at == null)
    return;
  const [match] = Editor41.nodes(editor, {
    match: (n) => Text6.isText(n) && !!n[markKey],
    at
  });
  Transforms29.setNodes(
    editor,
    { [markKey]: !match || null },
    {
      match: (n) => Text6.isText(n),
      split: true,
      at
    }
  );
  if (typeof unsetKey === "string") {
    Transforms29.unsetNodes(editor, unsetKey, {
      match: (n) => Text6.isText(n),
      split: true,
      at
    });
  }
}

// ../react/src/marks-plugin/methods/index.ts
function createMarksMethods(editor) {
  return {
    removeMarks: curryOne(removeMarks, editor),
    toggleMark: curryOne(toggleMark, editor),
    toggleBold: () => toggleMark(editor, "bold"),
    toggleItalic: () => toggleMark(editor, "italic"),
    toggleUnderline: () => toggleMark(editor, "underline"),
    toggleSup: () => toggleMark(editor, "sup", "sub"),
    toggleSub: () => toggleMark(editor, "sub", "sup"),
    toggleStrike: () => toggleMark(editor, "strike")
  };
}

// ../react/src/marks-plugin/styles.tsx
init_react_shim();
import styled29 from "@emotion/styled";
var $MarksSpan = styled29("span")`
  &.--bold {
    font-weight: bold;
  }
  &.--italic {
    font-style: italic;
  }
  &.--underline {
    text-decoration: underline;
  }
  &.--sup {
    vertical-align: super;
    font-size: 0.75em;
  }
  &.--sub {
    vertical-align: sub;
    font-size: 0.75em;
  }
  &.--strike {
    text-decoration: line-through;
  }
  /**
   * Text decorations don't merge automatically so we make a special one
   * when there is both an underline and a strike through.
   */
  &.--underline.--strike {
    text-decoration: underline line-through;
  }
`;

// ../react/src/marks-plugin/index.tsx
import { jsx as jsx46 } from "react/jsx-runtime";
var MarksPlugin = createPlugin((editor) => {
  editor.marksPlugin = createMarksMethods(editor);
  const hotkeyHandler = createHotkeyHandler({
    "mod+b": editor.marksPlugin.toggleBold,
    "mod+i": editor.marksPlugin.toggleItalic,
    "mod+u": editor.marksPlugin.toggleUnderline,
    "super+0": editor.marksPlugin.removeMarks,
    "super+b": editor.marksPlugin.toggleSub,
    "super+k": editor.marksPlugin.toggleStrike,
    "super+p": editor.marksPlugin.toggleSup
  });
  return {
    name: "marks",
    editor: {
      insertText: curryOne(insertText, editor)
    },
    editableProps: {
      renderLeaf: ({ leaf, children }) => {
        return /* @__PURE__ */ jsx46(
          $MarksSpan,
          {
            className: clsx7({
              "--bold": leaf.bold,
              "--italic": leaf.italic,
              "--underline": leaf.underline,
              "--sup": leaf.sup,
              "--sub": leaf.sub,
              "--strike": leaf.strike
            }),
            children
          }
        );
      },
      onKeyDown: (e) => {
        if (hotkeyHandler(e))
          return true;
        return false;
      }
    }
  };
});

// ../react/src/normalize-after-delete-plugin/index.tsx
init_react_shim();
import { Editor as Editor42, Point as Point3 } from "slate";
function forceNormalizeNearestElement(editor) {
  if (!editor.selection)
    return;
  const entry = Editor42.parent(editor, editor.selection);
  forceNormalizePath(editor, entry[1]);
}
var NormalizeAfterDeletePlugin = createPlugin((editor) => {
  editor.normalizeAfterDelete = true;
  return {
    name: "normalize-after-delete",
    editor: {
      deleteBackward() {
        if (!editor.selection)
          return false;
        const entry = Editor42.parent(editor, editor.selection);
        const isStart = Point3.equals(
          Editor42.start(editor, entry[1]),
          editor.selection.anchor
        );
        if (!isStart)
          return false;
        return function() {
          forceNormalizeNearestElement(editor);
        };
      },
      deleteForward() {
        if (!editor.selection)
          return false;
        const entry = Editor42.parent(editor, editor.selection);
        const isEnd = Point3.equals(
          Editor42.end(editor, entry[1]),
          editor.selection.anchor
        );
        if (!isEnd)
          return false;
        return function() {
          forceNormalizeNearestElement(editor);
        };
      }
    },
    editableProps: {}
  };
});

// ../react/src/table-plugin/index.tsx
init_react_shim();
import { Element as Element24 } from "slate";

// ../react/src/table-plugin/delete-fragment/index.ts
init_react_shim();
import { Editor as Editor44, Path as Path11, Transforms as Transforms30 } from "slate";

// ../react/src/table-plugin/delete-fragment/get-reversed-delete-safe-ranges.ts
init_react_shim();
import { Editor as Editor43, Path as Path10 } from "slate";
function getReversedDeleteSafeRanges(editor, deleteRange, protectedTypes) {
  const positions = [...Editor43.positions(editor, { at: deleteRange })];
  const deleteSafeRanges = [];
  let startPos, prevPos, startTdPath;
  startPos = prevPos = positions[0];
  startTdPath = findElementUpPath(editor, protectedTypes, {
    at: startPos
  });
  for (const pos of positions) {
    const tdPath = findElementUpPath(editor, protectedTypes, {
      at: pos
    });
    if (startTdPath && tdPath && Path10.equals(startTdPath, tdPath) || startTdPath == void 0 && tdPath == void 0) {
      prevPos = pos;
    } else {
      const range2 = { anchor: startPos, focus: prevPos };
      deleteSafeRanges.push(range2);
      startPos = prevPos = pos;
      startTdPath = tdPath;
    }
  }
  const range = { anchor: startPos, focus: prevPos };
  deleteSafeRanges.push(range);
  deleteSafeRanges.reverse();
  return deleteSafeRanges;
}

// ../react/src/table-plugin/delete-fragment/index.ts
function deleteFragmentWithProtectedTypes(editor, protectedTypes) {
  if (editor.selection == null)
    return false;
  const [start, end] = Editor44.edges(editor, editor.selection);
  const startProtectedPath = findElementUpPath(editor, protectedTypes, {
    at: start
  });
  const endProtectedPath = findElementUpPath(editor, protectedTypes, {
    at: end
  });
  if (!startProtectedPath && !endProtectedPath) {
    return false;
  }
  if (startProtectedPath && endProtectedPath && Path11.equals(startProtectedPath, endProtectedPath)) {
    return false;
  }
  const reversedRanges = getReversedDeleteSafeRanges(
    editor,
    editor.selection,
    protectedTypes
  );
  Editor44.withoutNormalizing(editor, () => {
    for (const range of reversedRanges) {
      Transforms30.delete(editor, { at: range });
    }
    Transforms30.collapse(editor, { edge: "start" });
  });
  return true;
}

// ../react/src/table-plugin/methods/index.ts
init_react_shim();
import { Transforms as Transforms38 } from "slate";

// ../react/src/table-plugin/methods/get-table-info.ts
init_react_shim();
function getTableInfo(editor, { at = editor.selection } = {}) {
  if (at == null)
    return void 0;
  const cellMatch = findElementUp(editor, "table-cell", {
    at
  });
  if (!cellMatch)
    return void 0;
  const rowMatch = findElementUp(editor, "table-row", {
    at
  });
  if (!rowMatch)
    return void 0;
  const tableMatch = findElementUp(editor, "table", { at });
  if (!tableMatch)
    return void 0;
  const [tableElement, tablePath] = tableMatch;
  const [rowElement, rowPath] = rowMatch;
  const [cellElement, cellPath] = cellMatch;
  return {
    tableElement,
    tablePath,
    tableColumns: tableElement.columns,
    rowElement,
    rowPath,
    rowIndex: rowPath.slice(-1)[0],
    rowCount: tableElement.children.length,
    cellElement,
    cellPath,
    cellIndex: cellPath.slice(-1)[0],
    cellCount: rowElement.children.length
  };
}

// ../react/src/table-plugin/methods/insert-column.ts
init_react_shim();
import { Editor as Editor45, Transforms as Transforms31 } from "slate";

// ../react/src/table-plugin/methods/utils.ts
init_react_shim();
function createCell(index2, children = [
  {
    type: "table-content",
    children: [{ text: "" }]
  }
]) {
  return {
    type: "table-cell",
    children
  };
}

// ../react/src/table-plugin/methods/insert-column.ts
function insertColumn(editor, { offset = 0, at = editor.selection } = {}) {
  const t = getTableInfo(editor, { at });
  if (t === void 0)
    return false;
  const { tableElement, tablePath, cellIndex } = t;
  const nextCellIndex = cellIndex + offset;
  Editor45.withoutNormalizing(editor, () => {
    const { columns } = tableElement;
    const nextColumns = [...columns];
    nextColumns.splice(nextCellIndex, 0, columns[nextCellIndex]);
    Transforms31.setNodes(editor, { columns: nextColumns }, { at: tablePath });
    tableElement.children.forEach((rowElement, i) => {
      Transforms31.insertNodes(editor, createCell(nextCellIndex), {
        at: [...tablePath, i, nextCellIndex]
      });
    });
  });
  return true;
}

// ../react/src/table-plugin/methods/insert-row.ts
init_react_shim();
import { Transforms as Transforms32 } from "slate";
function createRow(columnCount) {
  return {
    type: "table-row",
    children: [...Array(columnCount).keys()].map((index2) => createCell(index2))
  };
}
function insertRow(editor, { at = editor.selection, offset = 0 } = {}) {
  const t = getTableInfo(editor, { at });
  if (!t)
    return false;
  const nextRowElement = createRow(t.tableElement.columns.length);
  Transforms32.insertNodes(editor, nextRowElement, {
    at: [...t.tablePath, t.rowIndex + offset]
  });
  return true;
}
function insertRowBelow(editor, { at } = {}) {
  return insertRow(editor, { at, offset: 1 });
}

// ../react/src/table-plugin/methods/insert-table.ts
init_react_shim();
import { Editor as Editor47, Element as Element23, Path as Path12, Transforms as Transforms33 } from "slate";
function createRange(size) {
  return [...Array(size).keys()];
}
function createColumns(columnCount) {
  return createRange(columnCount).map(() => ({ align: "left" }));
}
function createTable(columnCount, rowCount) {
  return {
    type: "table",
    columns: createColumns(columnCount),
    children: createRange(rowCount).map(() => createRow2(columnCount))
  };
}
function createRow2(columnCount) {
  return {
    type: "table-row",
    children: [...Array(columnCount).keys()].map((index2) => createCell(index2))
  };
}
function insertTable(editor, columnCount, rowCount, { at = editor.selection } = {}) {
  const table = createTable(columnCount, rowCount);
  return insertRootElement2(editor, table, { at });
}
function insertRootElement2(editor, element, { at = editor.selection } = {}) {
  if (at == null)
    return false;
  const entry = findElementUp(
    editor,
    (node2) => Element23.isElement(node2) && editor.isMaster(node2)
  );
  if (entry == null) {
    const selection = editor.selection;
    Editor47.withoutNormalizing(editor, () => {
      Transforms33.insertNodes(editor, element, { at });
      if (selection) {
        Transforms33.select(editor, selection);
        Transforms33.move(editor);
      }
    });
  } else {
    const nextPath = Path12.next(entry[1]);
    Editor47.withoutNormalizing(editor, () => {
      Transforms33.insertNodes(editor, element, { at: nextPath });
      Transforms33.select(editor, Editor47.start(editor, nextPath));
    });
  }
  return true;
}

// ../react/src/table-plugin/methods/navigation/index.ts
init_react_shim();

// ../react/src/table-plugin/methods/navigation/select-element.ts
init_react_shim();
import { Path as Path13 } from "slate";
function selectElementBelow(editor, t) {
  const { cellIndex, rowIndex, rowCount, tablePath } = t;
  if (rowIndex < rowCount - 1) {
    selectStartOfElement(editor, [...tablePath, rowIndex + 1, cellIndex]);
    return true;
  }
  try {
    selectStartOfElement(editor, Path13.next(tablePath));
    return true;
  } catch (e) {
    return false;
  }
}
function selectElementAbove(editor, t) {
  const { cellIndex, rowIndex, tablePath } = t;
  if (rowIndex > 0) {
    selectStartOfElement(editor, [...tablePath, rowIndex - 1, cellIndex]);
    return true;
  }
  try {
    selectEndOfElement(editor, Path13.previous(tablePath));
    return true;
  } catch (e) {
    return false;
  }
}

// ../react/src/table-plugin/methods/navigation/utils.ts
init_react_shim();
import { ReactEditor as ReactEditor10 } from "slate-react";
function getUnreliableSelectionRect() {
  const s = window.getSelection();
  if (!s)
    return null;
  const range = s.getRangeAt(0);
  return range.getBoundingClientRect();
}
function getElementRect(editor, element) {
  return ReactEditor10.toDOMNode(editor, element).getBoundingClientRect();
}
function checkIsInElement(editor, element) {
  const selectionRect = getUnreliableSelectionRect();
  if (!selectionRect)
    return false;
  const elementRect = getElementRect(editor, element);
  return selectionRect.right < elementRect.right && selectionRect.left > elementRect.left && selectionRect.bottom < elementRect.bottom && selectionRect.top > elementRect.top;
}

// ../react/src/table-plugin/methods/navigation/index.ts
function down(editor) {
  const t = getTableInfo(editor);
  if (!t)
    return false;
  setTimeout(() => {
    if (!checkIsInElement(editor, t.cellElement)) {
      selectElementBelow(editor, t);
    }
  });
  return false;
}
function up(editor) {
  const t = getTableInfo(editor);
  if (!t)
    return false;
  setTimeout(() => {
    if (!checkIsInElement(editor, t.cellElement)) {
      selectElementAbove(editor, t);
    }
  });
  return false;
}

// ../react/src/table-plugin/methods/remove-column.ts
init_react_shim();
import { Editor as Editor50, Transforms as Transforms35 } from "slate";

// ../react/src/table-plugin/methods/remove-table.ts
init_react_shim();
import { Transforms as Transforms34 } from "slate";
function removeTable(editor) {
  const t = editor.tablePlugin.getTableInfo();
  if (t === void 0)
    return false;
  Transforms34.removeNodes(editor, { at: t.tablePath });
  return true;
}

// ../react/src/table-plugin/methods/remove-column.ts
function removeColumn(editor, { at = editor.selection } = {}) {
  const t = getTableInfo(editor, { at });
  if (!t)
    return false;
  const { tableElement, tablePath, rowIndex, cellIndex, cellCount } = t;
  if (cellCount === 1) {
    return removeTable(editor);
  }
  Editor50.withoutNormalizing(editor, () => {
    const columns = [...tableElement.columns];
    columns.splice(cellIndex, 1);
    Transforms35.setNodes(editor, { columns }, { at: tablePath });
    tableElement.children.forEach((rowElement, rowIndex2) => {
      Transforms35.removeNodes(editor, {
        at: [...tablePath, rowIndex2, cellIndex]
      });
    });
    const selection = Editor50.start(editor, [
      ...tablePath,
      rowIndex,
      Math.min(cellIndex, cellCount - 2)
    ]);
    Transforms35.select(editor, selection);
  });
}

// ../react/src/table-plugin/methods/remove-row.ts
init_react_shim();
import { Editor as Editor51, Transforms as Transforms36 } from "slate";
function removeRow(editor, { at = editor.selection } = {}) {
  const t = getTableInfo(editor, { at });
  if (t === void 0)
    return false;
  if (t.rowCount === 1) {
    removeTable(editor);
    return true;
  }
  Editor51.withoutNormalizing(editor, () => {
    Transforms36.removeNodes(editor, { at: t.rowPath });
    Transforms36.select(
      editor,
      Editor51.start(editor, [
        ...t.tablePath,
        Math.min(t.rowIndex, t.rowCount - 2),
        t.cellIndex
      ])
    );
  });
  return true;
}

// ../react/src/table-plugin/methods/setTableColumnAlign.ts
init_react_shim();
import { Transforms as Transforms37 } from "slate";
function setTableColumnAlign(editor, options) {
  const t = getTableInfo(editor);
  if (t === void 0)
    return false;
  const { tableElement, tablePath, cellIndex } = t;
  const nextColumns = tableElement.columns.slice();
  nextColumns.splice(cellIndex, 1, { align: options.align });
  Transforms37.setNodes(editor, { columns: nextColumns }, { at: tablePath });
  return true;
}

// ../react/src/table-plugin/methods/tab.ts
init_react_shim();
function tabForward(editor) {
  const t = getTableInfo(editor);
  if (!t)
    return false;
  const { cellIndex, cellCount, rowIndex, rowCount, tablePath } = t;
  if (cellIndex < cellCount - 1) {
    selectStartOfElement(editor, [...tablePath, rowIndex, cellIndex + 1]);
    return true;
  }
  if (rowIndex < rowCount - 1) {
    selectStartOfElement(editor, [...tablePath, rowIndex + 1, 0]);
    return true;
  }
  insertRowBelow(editor);
  selectStartOfElement(editor, [...tablePath, rowIndex + 1, 0]);
  return true;
}
function tabBackward(editor) {
  const t = getTableInfo(editor);
  if (!t)
    return false;
  const { cellIndex, cellCount, rowIndex, tablePath } = t;
  if (cellIndex > 0) {
    selectStartOfElement(editor, [...tablePath, rowIndex, cellIndex - 1]);
    return true;
  }
  if (rowIndex > 0) {
    selectStartOfElement(editor, [...tablePath, rowIndex - 1, cellCount - 1]);
    return true;
  }
}

// ../react/src/table-plugin/methods/index.ts
function createTableMethods(editor) {
  return {
    getTableInfo: curryOne(getTableInfo, editor),
    insertTable: curryOne(insertTable, editor),
    insertColumn: curryOne(insertColumn, editor),
    insertRow: curryOne(insertRow, editor),
    removeTable: curryOne(removeTable, editor),
    removeColumn: curryOne(removeColumn, editor),
    removeRow: curryOne(removeRow, editor),
    tabForward: curryOne(tabForward, editor),
    tabBackward: curryOne(tabBackward, editor),
    selectCell: curryOne(selectCell, editor),
    down: curryOne(down, editor),
    up: curryOne(up, editor),
    setTableColumnAlign: curryOne(setTableColumnAlign, editor)
  };
}
function selectCell(editor, { at = editor.selection } = {}) {
  const t = getTableInfo(editor, { at });
  if (t === void 0)
    return false;
  const { cellPath } = t;
  Transforms38.select(editor, cellPath);
  return true;
}

// ../react/src/table-plugin/normalize/normalize-table.ts
init_react_shim();
import { Transforms as Transforms39 } from "slate";
function normalizeTableIndexes(editor, entry) {
  let isTransformed = false;
  const rowElements = entry[0].children;
  rowElements.forEach((rowElement, y) => {
    const cellElements = rowElement.children;
    cellElements.forEach((cellElement, x) => {
      if (cellElement.x !== x || cellElement.y !== y) {
        Transforms39.setNodes(editor, { x, y }, { at: [...entry[1], y, x] });
        isTransformed = true;
      }
    });
  });
  return isTransformed;
}

// ../react/src/table-plugin/normalize/normalize-table-cell.ts
init_react_shim();
import { Editor as Editor55, Transforms as Transforms40 } from "slate";
function normalizeTableCell(editor, entry) {
  const [node2, path2] = entry;
  if (node2.children.length === 1 && node2.children[0].type === "table-content") {
    return false;
  }
  Editor55.withoutNormalizing(editor, () => {
    Transforms40.insertNodes(
      editor,
      {
        type: "table-content",
        children: [{ text: "X" }]
      },
      { at: [...entry[1], 0] }
    );
    for (let i = node2.children.length; i >= 0; i--) {
      Transforms40.mergeNodes(editor, { at: [...path2, i] });
    }
    Transforms40.delete(editor, {
      at: { path: [...path2, 0, 0], offset: 0 },
      unit: "character"
    });
  });
  return true;
}

// ../react/src/table-plugin/render-element/index.tsx
init_react_shim();

// ../react/src/table-plugin/render-element/table.tsx
init_react_shim();
import { useEffect as useEffect6 } from "react";
import { ReactEditor as ReactEditor11, useSelected as useSelected7, useSlateStatic as useSlateStatic14 } from "slate-react";

// ../react/src/table-plugin/render-element/styles/index.ts
init_react_shim();
import styled31 from "@emotion/styled";

// ../react/src/table-plugin/render-element/styles/table-menu-styles.ts
init_react_shim();
import styled30 from "@emotion/styled";
var $BaseMenu = styled30("div")`
  position: absolute;
  /**
   * very slightly shaded
   */
  background: rgba(0, 0, 0, 0.001);

  /**
   * hover 
   */
  &:hover {
    /**
     * needs to pop up so that it doesn't jump back and forth with neighbor
     * below
     */
    z-index: 1000;
    /**
     * Makes the visible tile get darker on hover over any part of the
     * menu including the invisible part
     */
    .--tile {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`;
var $ColumnMenu = styled30($BaseMenu)`
  cursor: pointer;
  /**
   * hangs out on top
   */
  left: -1px;
  right: -1px;
  right: 0;
  height: 3em;
  top: -3em;
`;
var $RowMenu = styled30($BaseMenu)`
  /**
   * hangs out on left
   */
  top: -1px;
  bottom: -1px;
  width: 3em;
  left: -3em;
`;
var $MenuTile = styled30("div")`
  position: absolute;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 200ms;
  /**
   * NOTE: One of these should be overridden
   */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
var $ColumnMenuTile = styled30($MenuTile)`
  top: 50%;
  border-bottom: none;
  border-right: none;
  bottom: 1px;
  td:first-of-type & {
    border-top-left-radius: 0.5em;
  }
  td:last-of-type & {
    border-top-right-radius: 0.5em;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    right: -1px;
  }
  svg {
    position: absolute;
    top: 0.1875em;
    left: 50%;
    margin-left: -0.5em;
    color: rgba(0, 0, 0, 0.2);
  }
  &:hover svg {
    color: rgba(0, 0, 0, 0.5);
  }

  /* border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em; */
`;
var $RowMenuTile = styled30($MenuTile)`
  left: 50%;
  border-right: none;
  border-bottom: none;
  right: 1px;
  tr:first-of-type & {
    border-top-left-radius: 0.5em;
  }
  tr:last-of-type & {
    border-bottom-left-radius: 0.5em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    bottom: 0;
  }
  svg {
    position: absolute;
    left: 0.25em;
    top: 50%;
    margin-top: -0.5em;
    color: rgba(0, 0, 0, 0.2);
  }
  &:hover svg {
    color: rgba(0, 0, 0, 0.5);
  }

  /* border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em; */
`;
var $MenuButton = styled30("div")`
  position: absolute;
  font-size: 1.5em;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  svg {
    display: block;
  }
`;
var $AddMenuButton = styled30($MenuButton)`
  color: #c0c0c0;
  &:hover {
    color: royalblue;
  }
`;
var $RemoveMenuButton = styled30($MenuButton)`
  color: #c0c0c0;
  &:hover {
    color: firebrick;
  }
`;

// ../react/src/table-plugin/render-element/styles/index.ts
var $Table = styled31("table")`
  border-collapse: collapse;
  margin: 1em 0;
  ${({ columns }) => columns.map(
  (column, index2) => `td:nth-of-type(${index2 + 1}) { text-align: ${column.align}; }`
).join("\n")}
`;
var $TableRow = styled31("tr")`
  position: relative;
  &:first-of-type {
    background: var(--table-head-bgcolor);
  }
`;
var $TableCell = styled31("td")`
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05);
  border-color: var(--table-row-border-color) var(--table-column-border-color);
  padding: 0.75em 1em;
  min-width: 2em;
  &.--selected {
    outline: 2px solid var(--select-color, blue);
  }
  /**
   * Stronger borders on the left and right edge
   */
  &:first-of-type {
    border-left-color: var(--table-border-color);
  }
  &:last-of-type {
    border-right-color: var(--table-border-color);
  }
`;
var $TableContent = styled31("div")`
  /**
   * Smaller font inside a table than outside of it
   */
  font-size: 0.9375em; /* 15px */
  /**
   * Even smaller font and dimmer for the heading row
   */
  tr:first-of-type & {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.875em; /* 14px */
  }
`;

// ../react/src/table-plugin/render-element/table-context.tsx
init_react_shim();
import { createContext as createContext2 } from "react";
var TableContext = createContext2({
  isSelected: false
});

// ../react/src/table-plugin/render-element/table.tsx
import { jsx as jsx47 } from "react/jsx-runtime";
function Table({
  element,
  attributes,
  children
}) {
  const editor = useSlateStatic14();
  const isSelected = useSelected7();
  useEffect6(() => {
    const path2 = ReactEditor11.findPath(editor, element);
    normalizeTableIndexes(editor, [element, path2]);
  }, []);
  return /* @__PURE__ */ jsx47(TableContext.Provider, { value: { isSelected }, children: /* @__PURE__ */ jsx47($Table, { ...attributes, columns: element.columns, children: /* @__PURE__ */ jsx47("tbody", { children }) }) });
}

// ../react/src/table-plugin/render-element/table-cell/index.tsx
init_react_shim();
import { useContext as useContext2 } from "react";
import { useSelected as useSelected8 } from "slate-react";

// ../react/src/table-plugin/render-element/table-cell/column-menu/index.tsx
init_react_shim();
import { useCallback as useCallback11, useRef as useRef7, useState as useState5 } from "react";
import { useSlateStatic as useSlateStatic15 } from "slate-react";

// ../react/src/table-plugin/icons.tsx
init_react_shim();
import { jsx as jsx48 } from "react/jsx-runtime";
var PlusIcon = (props) => /* @__PURE__ */ jsx48(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx48(
      "path",
      {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5z",
        clipRule: "evenodd"
      }
    )
  }
);
var MinusIcon = (props) => /* @__PURE__ */ jsx48(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx48(
      "path",
      {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5z",
        clipRule: "evenodd"
      }
    )
  }
);
var BarsIcon = () => /* @__PURE__ */ jsx48(TablerIcon, { children: /* @__PURE__ */ jsx48("path", { d: "M4 6h16M4 12h16M4 18h16" }) });
var AlignLeft = () => /* @__PURE__ */ jsx48(TablerIcon, { children: /* @__PURE__ */ jsx48("path", { d: "M4 6h16M4 12h10M4 18h14" }) });
var AlignCenter = () => /* @__PURE__ */ jsx48(TablerIcon, { children: /* @__PURE__ */ jsx48("path", { d: "M4 6h16M8 12h8M6 18h12" }) });
var AlignRight = () => /* @__PURE__ */ jsx48(TablerIcon, { children: /* @__PURE__ */ jsx48("path", { d: "M4 6h16M10 12h10M6 18h14" }) });

// ../react/src/table-plugin/render-element/table-cell/column-menu/index.tsx
import { Fragment as Fragment4, jsx as jsx49, jsxs as jsxs22 } from "react/jsx-runtime";
function ColumnMenu({ cellElement }) {
  const editor = useSlateStatic15();
  const menu = useLayer("column-menu");
  const buttonRef = useRef7(null);
  const [hover, setHover] = useState5(false);
  const onMouseEnter = useCallback11(() => {
    setHover(true);
  }, []);
  const onMouseLeave = useCallback11(() => {
    setHover(false);
  }, []);
  const onClick = useCallback11(() => {
    if (menu.layer)
      menu.close();
    const dest = buttonRef.current;
    if (dest === null)
      return;
    const items = [
      {
        icon: AlignLeft,
        title: "Align Column left",
        action: () => {
          editor.tablePlugin.setTableColumnAlign({ align: "left" });
        }
      },
      {
        icon: AlignCenter,
        title: "Align Column Center",
        action: () => {
          editor.tablePlugin.setTableColumnAlign({ align: "center" });
        }
      },
      {
        icon: AlignRight,
        title: "Align Column Right",
        action: () => {
          editor.tablePlugin.setTableColumnAlign({ align: "right" });
        }
      }
    ];
    menu.open(() => /* @__PURE__ */ jsx49(Menu, { dest, items, close: menu.close }));
  }, []);
  return /* @__PURE__ */ jsxs22(
    $ColumnMenu,
    {
      ref: buttonRef,
      contentEditable: false,
      onClick,
      onMouseEnter,
      onMouseLeave,
      children: [
        /* @__PURE__ */ jsx49($ColumnMenuTile, { className: "--tile", children: /* @__PURE__ */ jsx49(BarsIcon, {}) }),
        hover ? /* @__PURE__ */ jsxs22(Fragment4, { children: [
          /* @__PURE__ */ jsx49(
            $RemoveMenuButton,
            {
              style: {
                top: 0,
                left: "50%",
                marginLeft: "-0.5em"
              },
              onMouseDown: () => editor.tablePlugin.removeColumn({ at: cellElement }),
              children: /* @__PURE__ */ jsx49(MinusIcon, {})
            }
          ),
          /* @__PURE__ */ jsx49(
            $AddMenuButton,
            {
              style: { left: "-0.5em", top: 0 },
              onMouseDown: () => editor.tablePlugin.insertColumn({ at: cellElement }),
              children: /* @__PURE__ */ jsx49(PlusIcon, {})
            }
          ),
          /* @__PURE__ */ jsx49(
            $AddMenuButton,
            {
              style: { right: "-0.5em", top: 0 },
              onMouseDown: () => editor.tablePlugin.insertColumn({ at: cellElement, offset: 1 }),
              children: /* @__PURE__ */ jsx49(PlusIcon, {})
            }
          )
        ] }) : null
      ]
    }
  );
}

// ../react/src/table-plugin/render-element/table-cell/row-menu/index.tsx
init_react_shim();
import { useState as useState6 } from "react";
import { useSlateStatic as useSlateStatic16 } from "slate-react";
import { Fragment as Fragment5, jsx as jsx50, jsxs as jsxs23 } from "react/jsx-runtime";
function RowMenu({ cellElement }) {
  const editor = useSlateStatic16();
  const [hover, setHover] = useState6(false);
  return /* @__PURE__ */ jsxs23(
    $RowMenu,
    {
      contentEditable: false,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      children: [
        /* @__PURE__ */ jsx50($RowMenuTile, { className: "--tile", children: /* @__PURE__ */ jsx50(BarsIcon, {}) }),
        hover ? /* @__PURE__ */ jsxs23(Fragment5, { children: [
          /* @__PURE__ */ jsx50(
            $RemoveMenuButton,
            {
              style: {
                top: "50%",
                left: "0.5em",
                marginTop: "-0.5em"
              },
              onMouseDown: () => editor.tablePlugin.removeRow({ at: cellElement }),
              children: /* @__PURE__ */ jsx50(MinusIcon, {})
            }
          ),
          /* @__PURE__ */ jsx50(
            $AddMenuButton,
            {
              style: { top: "-0.5em", left: "0.5em" },
              onMouseDown: () => editor.tablePlugin.insertRow({ at: cellElement }),
              children: /* @__PURE__ */ jsx50(PlusIcon, {})
            }
          ),
          /* @__PURE__ */ jsx50(
            $AddMenuButton,
            {
              style: { bottom: "-0.5em", left: "0.5em" },
              onMouseDown: () => editor.tablePlugin.insertRow({ at: cellElement, offset: 1 }),
              children: /* @__PURE__ */ jsx50(PlusIcon, {})
            }
          )
        ] }) : null
      ]
    }
  );
}

// ../react/src/table-plugin/render-element/table-cell/table-menu/index.tsx
init_react_shim();

// ../react/src/table-plugin/render-element/table-cell/table-menu/$table-menu.tsx
init_react_shim();
import styled32 from "@emotion/styled";
var $TableMenu = styled32("div")`
  position: absolute;
  /**
   * very slightly shaded
   */
  background: rgba(0, 0, 0, 0.001);

  /**
   * hangs out on left
   */
  top: -1.5em;
  left: -4em;
  height: 2.5em;
  width: 2.5em;

  /**
   * hover 
   */
  &:hover {
    /**
     * needs to pop up so that it doesn't jump back and forth with neighbor
     * below
     */
    z-index: 1000;
    /**
     * Makes the visible tile get darker on hover over any part of the
     * menu including the invisible part
     */
    .--row-menu-tile {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`;
var $TableMenuTile = styled32("div")`
  position: absolute;
  left: 0;
  top: 0;
  width: 1.5em;
  height: 1.5em;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
`;

// ../react/src/table-plugin/render-element/table-cell/table-menu/index.tsx
import { jsx as jsx51 } from "react/jsx-runtime";
function TableMenu() {
  return /* @__PURE__ */ jsx51($TableMenu, { contentEditable: false, children: /* @__PURE__ */ jsx51($TableMenuTile, { className: "--table-menu-tile" }) });
}

// ../react/src/table-plugin/render-element/table-cell/index.tsx
import { jsx as jsx52, jsxs as jsxs24 } from "react/jsx-runtime";
function TableCell({
  element,
  attributes,
  children
}) {
  const tableContext = useContext2(TableContext);
  const selected = useSelected8();
  const showTableMenu = tableContext.isSelected && element.x === 0 && element.y === 0;
  const showRowMenu = tableContext.isSelected && element.x === 0;
  const showColumnMenu = tableContext.isSelected && element.y === 0;
  return /* @__PURE__ */ jsxs24(
    $TableCell,
    {
      className: selected ? "--selected" : "",
      ...attributes,
      "data-x": element.x,
      "data-y": element.y,
      children: [
        children,
        showTableMenu ? /* @__PURE__ */ jsx52(TableMenu, {}) : null,
        showRowMenu ? /* @__PURE__ */ jsx52(RowMenu, { cellElement: element }) : null,
        showColumnMenu ? /* @__PURE__ */ jsx52(ColumnMenu, { cellElement: element }) : null
      ]
    }
  );
}

// ../react/src/table-plugin/render-element/table-content.tsx
init_react_shim();
import { jsx as jsx53 } from "react/jsx-runtime";
function TableContent({
  attributes,
  children
}) {
  return /* @__PURE__ */ jsx53($TableContent, { ...attributes, children });
}

// ../react/src/table-plugin/render-element/table-row.tsx
init_react_shim();
import { jsx as jsx54 } from "react/jsx-runtime";
function TableRow({
  attributes,
  children
}) {
  return /* @__PURE__ */ jsx54($TableRow, { ...attributes, children });
}

// ../react/src/table-plugin/render-element/index.tsx
import { jsx as jsx55 } from "react/jsx-runtime";
function renderElement4({
  element,
  attributes,
  children
}) {
  switch (element.type) {
    case "table":
      return /* @__PURE__ */ jsx55(Table, { element, attributes, children });
    case "table-row":
      return /* @__PURE__ */ jsx55(TableRow, { element, attributes, children });
    case "table-cell":
      return /* @__PURE__ */ jsx55(TableCell, { element, attributes, children });
    case "table-content":
      return /* @__PURE__ */ jsx55(TableContent, { element, attributes, children });
  }
}

// ../react/src/table-plugin/types.ts
init_react_shim();

// ../react/src/table-plugin/index.tsx
var TablePlugin = createPlugin(
  (editor, options, { createPolicy }) => {
    editor.supportsTable = true;
    editor.tablePlugin = createTableMethods(editor);
    return createPolicy({
      name: "table",
      editor: {
        deleteBackward: () => {
          return isStartOfElement(editor, "table-cell");
        },
        deleteForward: () => {
          return isEndOfElement(editor, "table-cell");
        },
        deleteFragment: () => deleteFragmentWithProtectedTypes(editor, ["table-cell"]),
        insertBreak: () => {
          const entry = findElementUp(editor, "table-cell");
          return !!entry;
        },
        isMaster(element) {
          if (element.type === "table")
            return true;
        },
        normalizeNode: (entry) => {
          const [node2] = entry;
          if (!Element24.isElement(node2))
            return false;
          switch (node2.type) {
            case "table":
              return normalizeTableIndexes(
                editor,
                entry
              );
            case "table-cell": {
              return normalizeTableCell(
                editor,
                entry
              );
            }
          }
          return false;
        }
      },
      editableProps: {
        renderElement: renderElement4,
        onKeyDown: createHotkeyHandler({
          /**
           * navigation
           */
          tab: editor.tablePlugin.tabForward,
          "shift+tab": editor.tablePlugin.tabBackward,
          down: editor.tablePlugin.down,
          up: editor.tablePlugin.up,
          /**
           * selection
           */
          "mod+a": editor.tablePlugin.selectCell,
          /**
           * insert
           */
          "super+t": () => editor.tablePlugin.insertTable(3, 2),
          "mod+shift+enter": () => editor.tablePlugin.insertRow({ offset: 0 }),
          "mod+enter": () => editor.tablePlugin.insertRow({ offset: 1 }),
          "super+[": () => editor.tablePlugin.insertColumn({ offset: 0 }),
          "super+]": () => editor.tablePlugin.insertColumn({ offset: 1 }),
          /**
           * remove
           */
          "super+backspace": editor.tablePlugin.removeTable,
          "mod+backspace": editor.tablePlugin.removeRow,
          "mod+shift+backspace": editor.tablePlugin.removeColumn
        })
      }
    });
  }
);

// ../react/src/theme-plugin/index.tsx
init_react_shim();
import { Global } from "@emotion/react";

// ../react/src/theme-plugin/global-styles.ts
init_react_shim();
import { css as css2 } from "@emotion/react";
var blue = `
--blue-50: rgb(239 246 255);
--blue-100: rgb(219 234 254);
--blue-200: rgb(191 219 254);
--blue-300: rgb(147 197 253);
--blue-400: rgb(96 165 250);
--blue-500: rgb(59 130 246);
--blue-600: rgb(37 99 235);
--blue-700: rgb(29 78 216);
--blue-800: rgb(30 64 175);
--blue-900: rgb(30 58 138);
`;
var zincShades = `
--shade-50: rgb(250 250 250);
--shade-100: rgb(244 244 245);
--shade-200: rgb(228 228 231);
--shade-300: rgb(212 212 216);
--shade-400: rgb(161 161 170);
--shade-500: rgb(113 113 122);
--shade-600: rgb(82 82 91);
--shade-700: rgb(63 63 70);
--shade-800: rgb(39 39 42);
--shade-900: rgb(24 24 27);
`;
var globalStyles = css2`
  :root {
    /* Tailwind Colors */
    ${blue}
    ${zincShades}
    /* Select Colors */
    --select-color: var(--blue-400);
    --select-editor-color: var(--blue-200);
    --hover-color: var(--blue-200);
    /* Link Colors */
    --link-color: var(--blue-600);
    --link-hover-color: var(--blue-700);
    /* Code Block Colors */
    --code-block-bgcolor: var(--shade-50);
    --code-block-border-color: var(--shade-300);
    /* Inline Code Colors */
    --inline-code-bgcolor: var(--shade-100);
    --inline-code-border-color: var(--shade-200);
    /* Table Colors */
    --table-border-color: var(--shade-300);
    --table-row-border-color: var(--shade-300);
    --table-column-border-color: var(--shade-100);
    --table-head-bgcolor: var(--shade-50);
    --table-menu-bgcolor: var(--shade-100);
    --table-menu-hover-bgcolor: var(--shade-200);
    /* Horizontal Rule Colors */
    --hr-color: var(--shade-300);
  }
`;

// ../react/src/theme-plugin/index.tsx
import { Fragment as Fragment6, jsx as jsx56, jsxs as jsxs25 } from "react/jsx-runtime";
var ThemePlugin = createPlugin((editor) => {
  editor.theme = true;
  return {
    name: "theme",
    editor: {},
    renderEditable: ({ attributes, Editable: Editable3 }) => {
      return /* @__PURE__ */ jsxs25(Fragment6, { children: [
        /* @__PURE__ */ jsx56(Global, { styles: globalStyles }),
        /* @__PURE__ */ jsx56(Editable3, { ...attributes })
      ] });
    },
    editableProps: {}
  };
});

// ../react/src/toolbar-plugin/index.tsx
init_react_shim();

// ../react/src/toolbar-plugin/render-editable/index.tsx
init_react_shim();
import { clsx as clsx10 } from "clsx";
import { useCallback as useCallback16, useRef as useRef14 } from "react";
import { Editor as Editor56, Transforms as Transforms42 } from "slate";
import { ReactEditor as ReactEditor16, useFocused, useSlateStatic as useSlateStatic23 } from "slate-react";

// ../react/src/toolbar-plugin/components/index.tsx
init_react_shim();

// ../react/src/toolbar-plugin/components/dialog/table-dialog.tsx
init_react_shim();
import { clsx as clsx8 } from "clsx";
import { useCallback as useCallback12, useRef as useRef8, useState as useState7 } from "react";
import { ReactEditor as ReactEditor12, useSlateStatic as useSlateStatic17 } from "slate-react";

// ../react/src/toolbar-plugin/styles/table-styles.ts
init_react_shim();
import styled33 from "@emotion/styled";
var $TableDialog = styled33($Panel)`
  padding: 0.5em;
`;
var $TableDialogGrid = styled33("div")`
  display: grid;
  grid-template-columns: repeat(5, 1.75em);
  grid-template-rows: 1.5em;
  /* grid-gap: 1px; */
`;
var $TableDialogGridCell = styled33("div")`
  background: var(--shade-100);
  height: 1.5em;
  border-radius: 0.125em;
  border-right: 1px solid white;
  border-top: 1px solid white;
  cursor: pointer;
  &.--selected {
    background: var(--blue-100);
  }
`;

// ../react/src/toolbar-plugin/components/dialog/table-dialog.tsx
import { Fragment as Fragment7, jsx as jsx57, jsxs as jsxs26 } from "react/jsx-runtime";
function createRange2(size) {
  return [...Array(size).keys()];
}
function TableDialog({
  dest,
  close
}) {
  const [hover, setHover] = useState7({ x: 0, y: 0 });
  const editor = useSlateStatic17();
  const ref = useRef8(null);
  const style = useAbsoluteReposition({ src: ref, dest }, ({ dest: dest2 }) => {
    return { left: dest2.left - 8, top: dest2.top + dest2.height };
  });
  const rows = createRange2(5).map((i) => i + 1);
  const cols = createRange2(5).map((i) => i + 1);
  const hoverCell = useCallback12(
    (x, y) => {
      setHover({ x, y });
    },
    [setHover]
  );
  const createTable2 = useCallback12(
    (x, y) => {
      editor.tablePlugin.insertTable(x, y);
      ReactEditor12.focus(editor);
      close();
    },
    [editor]
  );
  return /* @__PURE__ */ jsxs26(Fragment7, { children: [
    /* @__PURE__ */ jsx57(CloseMask, { close }),
    /* @__PURE__ */ jsx57($TableDialog, { ref, style, children: /* @__PURE__ */ jsx57($TableDialogGrid, { onMouseLeave: () => hoverCell(0, 0), children: rows.map((y) => {
      return cols.map((x) => {
        const selected = x <= hover.x && y <= hover.y;
        return /* @__PURE__ */ jsx57(
          $TableDialogGridCell,
          {
            className: clsx8({ "--selected": selected }),
            onMouseEnter: () => hoverCell(x, y),
            onClick: () => createTable2(x, y)
          },
          `${x},${y}`
        );
      });
    }) }) })
  ] });
}

// ../react/src/toolbar-plugin/components/toolbar/toolbar.tsx
init_react_shim();
import throttle2 from "lodash.throttle";
import { useEffect as useEffect7, useRef as useRef13, useState as useState9 } from "react";
import { useSlateStatic as useSlateStatic22 } from "slate-react";

// ../react/src/toolbar-plugin/items/index.tsx
init_react_shim();

// ../react/src/toolbar-plugin/items/block-items.tsx
init_react_shim();

// ../react/src/toolbar-plugin/icons.tsx
init_react_shim();
import { jsx as jsx58, jsxs as jsxs27 } from "react/jsx-runtime";
var H = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M7 12h10M7 5v14M17 5v14M15 19h4M15 5h4M5 19h4M5 5h4" }) });
var More = () => /* @__PURE__ */ jsx58(TablerIcon, { className: "--more-icon", width: "0.5em", viewBox: "0 0 12 24", children: /* @__PURE__ */ jsx58("path", { d: "m2 12 4 4 4-4" }) });
var LinkPlus = () => /* @__PURE__ */ jsx58(TablerIcon, { width: "0.5em", viewBox: "6 0 12 24", children: /* @__PURE__ */ jsx58("path", { d: "M9 12h6M12 9v6" }) });
var H1 = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M19 18v-8l-2 2M4 6v12M12 6v12M11 18h2M3 18h2M4 12h8M3 6h2M11 6h2" }) });
var H2 = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M17 12a2 2 0 1 1 4 0c0 .591-.417 1.318-.816 1.858L17 18.001h4M4 6v12M12 6v12M11 18h2M3 18h2M4 12h8M3 6h2M11 6h2" }) });
var H3 = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M19 14a2 2 0 1 0-2-2M17 16a2 2 0 1 0 2-2M4 6v12M12 6v12M11 18h2M3 18h2M4 12h8M3 6h2M11 6h2" }) });
var H4 = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M20 18v-8l-4 6h5M4 6v12M12 6v12M11 18h2M3 18h2M4 12h8M3 6h2M11 6h2" }) });
var H5 = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M17 18h2a2 2 0 1 0 0-4h-2v-4h4M4 6v12M12 6v12M11 18h2M3 18h2M4 12h8M3 6h2M11 6h2" }) });
var H6 = () => /* @__PURE__ */ jsxs27(TablerIcon, { children: [
  /* @__PURE__ */ jsx58("path", { d: "M19 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" }),
  /* @__PURE__ */ jsx58("path", { d: "M21 12a2 2 0 1 0-4 0v4M4 6v12M12 6v12M11 18h2M3 18h2M4 12h8M3 6h2M11 6h2" })
] });
var Paragraph2 = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M7 20V4h5.5a4 4 0 0 1 0 9H7" }) });
var Bold = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M7 5h6a3.5 3.5 0 0 1 0 7H7zM13 12h1a3.5 3.5 0 0 1 0 7H7v-7" }) });
var Italic = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M11 5h6M7 19h6M14 5l-4 14" }) });
var Style = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M4 20h3M14 20h7M6.9 15h6.9M10.2 6.3 16 20M5 20l6-16h2l7 16" }) });
var Link = () => /* @__PURE__ */ jsxs27(TablerIcon, { children: [
  /* @__PURE__ */ jsx58("path", { d: "M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5" }),
  /* @__PURE__ */ jsx58("path", { d: "M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5" })
] });
var Blockquote = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M6 15h15M21 19H6M15 11h6M21 7h-6M9 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2M3 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2" }) });
var Quote = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5" }) });
var QuoteOff = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m4 4v3c0 2.667-1.333 4.333-4 5M19 11h-4m-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 .66-.082 1.26-.245 1.798m-1.653 2.29c-.571.4-1.272.704-2.102.912M3 3l18 18" }) });
var BulletList = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" }) });
var Table2 = () => /* @__PURE__ */ jsxs27(TablerIcon, { children: [
  /* @__PURE__ */ jsx58("rect", { x: 4, y: 4, width: 16, height: 16, rx: 2 }),
  /* @__PURE__ */ jsx58("path", { d: "M4 10h16M10 4v16" })
] });
var Code = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" }) });
var Image = () => /* @__PURE__ */ jsxs27(TablerIcon, { children: [
  /* @__PURE__ */ jsx58("path", { d: "M15 8h.01" }),
  /* @__PURE__ */ jsx58("rect", { x: 4, y: 4, width: 16, height: 16, rx: 3 }),
  /* @__PURE__ */ jsx58("path", { d: "m4 15 4-4a3 5 0 0 1 3 0l5 5" }),
  /* @__PURE__ */ jsx58("path", { d: "m14 14 1-1a3 5 0 0 1 3 0l2 2" })
] });
var Attachment = () => /* @__PURE__ */ jsxs27(TablerIcon, { children: [
  /* @__PURE__ */ jsx58("path", { stroke: "none", d: "M0 0h24v24H0z" }),
  /* @__PURE__ */ jsx58("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }),
  /* @__PURE__ */ jsx58("path", { d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zM12 11v6M9 14h6" })
] });
var FileUpload = () => /* @__PURE__ */ jsxs27(TablerIcon, { children: [
  /* @__PURE__ */ jsx58("path", { stroke: "none", d: "M0 0h24v24H0z" }),
  /* @__PURE__ */ jsx58("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }),
  /* @__PURE__ */ jsx58("path", { d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zM12 11v6" }),
  /* @__PURE__ */ jsx58("path", { d: "M9.5 13.5 12 11l2.5 2.5" })
] });
var PhotoUp = () => /* @__PURE__ */ jsxs27(TablerIcon, { children: [
  /* @__PURE__ */ jsx58("path", { stroke: "none", d: "M0 0h24v24H0z" }),
  /* @__PURE__ */ jsx58("path", { d: "M15 8h.01M12.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5" }),
  /* @__PURE__ */ jsx58("path", { d: "m3 16 5-5c.928-.893 2.072-.893 3 0l3.5 3.5" }),
  /* @__PURE__ */ jsx58("path", { d: "m14 14 1-1c.679-.653 1.473-.829 2.214-.526M19 22v-6M22 19l-3-3-3 3" })
] });
var Plus = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M12 5v14M5 12h14" }) });
var Superscript = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "m5 7 8 10m-8 0 8-10M21 11h-4l3.5-4A1.73 1.73 0 0 0 17 5" }) });
var Subscript = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "m5 7 8 10m-8 0 8-10M21 20h-4l3.5-4a1.73 1.73 0 0 0-3.5-2" }) });
var Strikethrough = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M5 12h14M16 6.5A4 2 0 0 0 12 5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1-4-1.5" }) });
var RemoveStyles = () => /* @__PURE__ */ jsxs27(TablerIcon, { children: [
  /* @__PURE__ */ jsx58("path", { d: "m14 6 7 7-2 2M10 10l-4.172 4.172a2.828 2.828 0 1 0 4 4L14 14" }),
  /* @__PURE__ */ jsx58("path", { d: "m16 12 4.414-4.414a2 2 0 0 0 0-2.829l-1.171-1.171a2 2 0 0 0-2.829 0L12 8M4 20l1.768-1.768M3 3l18 18" })
] });
var ListCheck = () => /* @__PURE__ */ jsxs27(TablerIcon, { children: [
  /* @__PURE__ */ jsx58("path", { d: "m9 11 3 3 8-8" }),
  /* @__PURE__ */ jsx58("path", { d: "M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" })
] });
var ListNumbers = () => /* @__PURE__ */ jsx58(TablerIcon, { children: /* @__PURE__ */ jsx58("path", { d: "M11 6h9M11 12h9M12 18h8M4 16a2 2 0 1 1 4 0c0 .591-.5 1-1 1.5L4 20h4M6 10V4L4 6" }) });
var Emoji = () => /* @__PURE__ */ jsxs27(TablerIcon, { children: [
  /* @__PURE__ */ jsx58("circle", { cx: 12, cy: 12, r: 9 }),
  /* @__PURE__ */ jsx58("path", { d: "M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0" })
] });

// ../react/src/toolbar-plugin/items/block-items.tsx
var blockItems = [
  {
    icon: H1,
    title: "Heading 1",
    hotkey: "super+1",
    action: (editor) => editor.heading.convertHeading(1, false)
  },
  {
    icon: H2,
    title: "Heading 2",
    hotkey: "super+2",
    action: (editor) => editor.heading.convertHeading(2, false)
  },
  {
    icon: H3,
    title: "Heading 3",
    hotkey: "super+3",
    action: (editor) => editor.heading.convertHeading(3, false)
  },
  {
    icon: H4,
    title: "Heading 4",
    hotkey: "super+4",
    action: (editor) => editor.heading.convertHeading(4, false)
  },
  {
    icon: H5,
    title: "Heading 5",
    hotkey: "super+5",
    action: (editor) => editor.heading.convertHeading(5, false)
  },
  {
    icon: H6,
    title: "Heading 6",
    hotkey: "super+6",
    action: (editor) => editor.heading.convertHeading(1, false)
  },
  "divider",
  {
    icon: Paragraph2,
    title: "Paragraph",
    hotkey: "super+0",
    action: (editor) => {
      editor.collapsibleParagraph.convertParagraph();
    }
  }
];
var blockDropdownItem = {
  icon: H,
  title: "Paragraph Style",
  more: true,
  children: blockItems
};

// ../react/src/toolbar-plugin/items/dialogItems.tsx
init_react_shim();

// ../react/src/toolbar-plugin/components/dialog/emoji-dialog.tsx
init_react_shim();
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import styled34 from "@emotion/styled";
import { useCallback as useCallback13, useRef as useRef9 } from "react";
import { Transforms as Transforms41 } from "slate";
import { ReactEditor as ReactEditor13, useSlateStatic as useSlateStatic18 } from "slate-react";
import { Fragment as Fragment8, jsx as jsx59, jsxs as jsxs28 } from "react/jsx-runtime";
function EmojiDialog({
  dest,
  close
}) {
  const editor = useSlateStatic18();
  const ref = useRef9(null);
  const style = useAbsoluteReposition(
    { src: ref, dest },
    ({ src, dest: dest2 }, viewport) => {
      return positionInside(
        src,
        viewport,
        {
          left: dest2.left,
          top: dest2.top + dest2.height
        },
        { margin: 16 }
      );
    }
  );
  const onEmojiSelect = useCallback13(
    (e) => {
      Transforms41.insertText(editor, e.native);
      ReactEditor13.focus(editor);
      close();
    },
    [editor]
  );
  return /* @__PURE__ */ jsxs28(Fragment8, { children: [
    /* @__PURE__ */ jsx59(CloseMask, { close }),
    /* @__PURE__ */ jsx59($EmojiDialog, { ref, style, children: /* @__PURE__ */ jsx59(Picker, { data, onEmojiSelect, autoFocus: true }) })
  ] });
}
var $EmojiDialog = styled34($Panel)``;

// ../react/src/toolbar-plugin/components/dialog/file-dialog.tsx
init_react_shim();
import { useRef as useRef10 } from "react";
import { useSlateStatic as useSlateStatic19 } from "slate-react";

// ../react/src/toolbar-plugin/styles/dialog-shared-styles.ts
init_react_shim();
import styled35 from "@emotion/styled";
var $DialogButton = styled35("div")`
  /* Center vertically and horizontally */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* font-size: 1.25em; */
  padding: 0.25em 0.75em;
  text-align: center;
  color: var(--blue-100);
  color: white;
  background: var(--blue-500);
  transition: all 100ms;
  &:hover {
    color: var(--blue-50);
    background: var(--blue-600);
    outline: 2px solid var(--blue-200);
  }
  border-radius: 0.25em;
  svg {
    color: var(--blue-200);
    font-size: 1.25em;
    stroke-width: 2px;
  }
`;
var $DialogHint = styled35("div")`
  font-size: 0.875em;
  margin-top: 0.5em;
  color: var(--shade-500);
  line-height: 1.375;
`;

// ../react/src/toolbar-plugin/styles/file-dialog-styles.ts
init_react_shim();
import styled36 from "@emotion/styled";
var $FileDialog = styled36($Panel)`
  padding: 1em;
  width: 18em;
`;

// ../react/src/toolbar-plugin/components/dialog/file-dialog.tsx
import { Fragment as Fragment9, jsx as jsx60, jsxs as jsxs29 } from "react/jsx-runtime";
function FileDialog({
  dest,
  close,
  icon,
  buttonCaption,
  buttonHint
}) {
  const editor = useSlateStatic19();
  const ref = useRef10(null);
  const style = useAbsoluteReposition(
    { src: ref, dest },
    ({ src, dest: dest2 }, viewport) => {
      return positionInside(
        src,
        viewport,
        {
          left: dest2.left - 16,
          top: dest2.top + dest2.height
        },
        { margin: 16 }
      );
    }
  );
  async function onChange(e) {
    if (e.target.files == null || e.target.files.length === 0)
      return;
    stopEvent(e);
    const { files } = e.target;
    for (const file of files) {
      editor.upload.upload(file);
    }
    close();
  }
  return /* @__PURE__ */ jsxs29(Fragment9, { children: [
    /* @__PURE__ */ jsx60(CloseMask, { close }),
    /* @__PURE__ */ jsxs29($FileDialog, { ref, style, children: [
      /* @__PURE__ */ jsxs29("label", { children: [
        /* @__PURE__ */ jsx60(
          "input",
          {
            type: "file",
            multiple: true,
            style: { display: "none" },
            onChange
          }
        ),
        /* @__PURE__ */ jsxs29($DialogButton, { children: [
          icon,
          /* @__PURE__ */ jsx60("span", { style: { marginLeft: "0.5em" }, children: buttonCaption })
        ] })
      ] }),
      /* @__PURE__ */ jsx60($DialogHint, { children: buttonHint })
    ] })
  ] });
}
function AttachmentDialog({
  dest,
  close
}) {
  return /* @__PURE__ */ jsx60(
    FileDialog,
    {
      dest,
      close,
      icon: /* @__PURE__ */ jsx60(FileUpload, {}),
      buttonCaption: "Select files...",
      buttonHint: "Select files to insert as attachments"
    }
  );
}
function ImageDialog({
  dest,
  close
}) {
  return /* @__PURE__ */ jsx60(
    FileDialog,
    {
      dest,
      close,
      icon: /* @__PURE__ */ jsx60(PhotoUp, {}),
      buttonCaption: "Select images...",
      buttonHint: "Select image files to upload and insert into the editor"
    }
  );
}

// ../react/src/toolbar-plugin/items/dialogItems.tsx
var dialogItems = [
  {
    icon: Table2,
    title: "Insert Table",
    more: true,
    Component: TableDialog
  },
  {
    icon: Image,
    title: "Insert Image",
    more: true,
    Component: ImageDialog,
    show: (editor) => editor.toolbar.showUploadButtons ?? false
  },
  {
    icon: Attachment,
    title: "Insert Attachment",
    more: true,
    Component: AttachmentDialog,
    show: (editor) => editor.toolbar.showUploadButtons ?? false
  },
  {
    icon: Emoji,
    title: "Insert Emoji",
    more: true,
    Component: EmojiDialog
  }
];
var expandedDialogItems = dialogItems;
var compactDialogItems = [
  {
    icon: Plus,
    title: "Insert",
    more: true,
    children: dialogItems
  }
];

// ../react/src/toolbar-plugin/items/dropdownItems.tsx
init_react_shim();

// ../react/src/toolbar-plugin/items/codeBlockItems.tsx
init_react_shim();
function codeBlockAction(language) {
  return (editor) => editor.codeBlock.setCodeBlockLanguage(language) || editor.codeBlock.createCodeBlock({ language });
}
var codeBlockItems = [
  {
    icon: BulletList,
    title: "Plain text",
    action: codeBlockAction("text")
  },
  "divider",
  {
    icon: BulletList,
    title: "HTML",
    action: codeBlockAction("html")
  },
  {
    icon: BulletList,
    title: "SVG",
    action: codeBlockAction("svg")
  },
  {
    icon: BulletList,
    title: "CSS",
    action: codeBlockAction("css")
  },
  "divider",
  {
    icon: BulletList,
    title: "Javascript",
    action: codeBlockAction("javascript")
  },
  {
    icon: BulletList,
    title: "C Like (C, C#, C++, Java)",
    action: codeBlockAction("clike")
  }
];

// ../react/src/toolbar-plugin/items/list-items.tsx
init_react_shim();
var listItems = [
  {
    icon: BulletList,
    title: "Bullet List",
    hotkey: "super+8",
    action: (editor) => editor.list.convertUnorderedList(false)
  },
  {
    icon: ListNumbers,
    title: "Numbered List",
    hotkey: "super+7",
    action: (editor) => editor.list.convertOrderedList(false)
  },
  {
    icon: ListCheck,
    title: "Checklist",
    hotkey: "super+9",
    action: (editor) => editor.list.convertTaskList(false)
  }
];

// ../react/src/toolbar-plugin/items/quote-items.tsx
init_react_shim();
var quoteItems = [
  {
    icon: Quote,
    title: "Add Block Quote",
    hotkey: "super+.",
    action: (editor) => editor.blockQuotePlugin.indent()
  },
  {
    icon: QuoteOff,
    title: "Remove Block Quote",
    hotkey: "super+,",
    action: (editor) => editor.blockQuotePlugin.outdent()
  }
];

// ../react/src/toolbar-plugin/items/dropdownItems.tsx
var dropdownItems = [
  {
    icon: BulletList,
    title: "Lists",
    more: true,
    children: listItems
  },
  {
    icon: Blockquote,
    title: "Block Quote",
    more: true,
    children: quoteItems
  },
  {
    icon: Code,
    title: "Code Block",
    more: true,
    children: codeBlockItems
  }
];

// ../react/src/toolbar-plugin/items/linkItem.tsx
init_react_shim();

// ../react/src/toolbar-plugin/components/dialog/anchor-dialog.tsx
init_react_shim();
import { isHotkey as isHotkey3 } from "is-hotkey";
import {
  useCallback as useCallback14,
  useRef as useRef11,
  useState as useState8
} from "react";
import { ReactEditor as ReactEditor14, useSlateStatic as useSlateStatic20 } from "slate-react";
import { Fragment as Fragment10, jsx as jsx61, jsxs as jsxs30 } from "react/jsx-runtime";
var isEnter = isHotkey3("enter");
function AnchorDialog2({
  dest,
  close
}) {
  const editor = useSlateStatic20();
  const ref = useRef11(null);
  const style = useAbsoluteReposition(
    { src: ref, dest },
    ({ src, dest: dest2 }, viewport) => {
      return positionInside(
        src,
        viewport,
        {
          left: dest2.left - 12,
          top: dest2.top + dest2.height
        },
        { margin: 16 }
      );
    }
  );
  const [url, setUrl] = useState8("");
  const insertLink2 = () => {
    editor.anchor.insertLink(url, url, { select: true });
    ReactEditor14.focus(editor);
    close();
  };
  const onChangeInput = useCallback14(
    (e) => {
      setUrl(e.currentTarget.value);
    },
    [setUrl]
  );
  const onKeyDown = (e) => {
    if (!isEnter(e))
      return;
    e.preventDefault();
    e.stopPropagation();
    insertLink2();
  };
  return /* @__PURE__ */ jsxs30(Fragment10, { children: [
    /* @__PURE__ */ jsx61(CloseMask, { close }),
    /* @__PURE__ */ jsxs30($AnchorDialog, { ref, style, children: [
      /* @__PURE__ */ jsxs30($AnchorDialogInputLine, { children: [
        /* @__PURE__ */ jsx61(
          $AnchorDialogInput,
          {
            type: "text",
            value: url,
            autoFocus: true,
            onChange: onChangeInput,
            onKeyDown
          }
        ),
        /* @__PURE__ */ jsxs30($DialogButton, { onClick: insertLink2, children: [
          /* @__PURE__ */ jsx61(Link, {}),
          /* @__PURE__ */ jsx61(LinkPlus, {})
        ] })
      ] }),
      /* @__PURE__ */ jsx61($DialogHint, { children: "Enter URL of link" })
    ] })
  ] });
}

// ../react/src/toolbar-plugin/items/linkItem.tsx
var linkItem = {
  icon: Link,
  title: "Insert Link",
  more: true,
  hotkey: "mod+k",
  Component: AnchorDialog2
};

// ../react/src/toolbar-plugin/items/mark-items.tsx
init_react_shim();
var primaryMarkItems = [
  {
    icon: Bold,
    title: "Bold",
    hotkey: "mod+b",
    action: (editor) => editor.marksPlugin.toggleBold()
  },
  {
    icon: Italic,
    title: "Italic",
    hotkey: "mod+i",
    action: (editor) => editor.marksPlugin.toggleItalic()
  }
];
var secondaryMarkItems = [
  {
    icon: Superscript,
    title: "Superscript",
    hotkey: "super+p",
    action: (editor) => editor.marksPlugin.toggleSup()
  },
  {
    icon: Subscript,
    title: "Subscript",
    hotkey: "super+b",
    action: (editor) => editor.marksPlugin.toggleSub()
  },
  "divider",
  {
    icon: Strikethrough,
    title: "Strikethrough",
    hotkey: "super+k",
    action: (editor) => editor.marksPlugin.toggleStrike()
  },
  "divider",
  {
    icon: Code,
    title: "Inline Code",
    hotkey: "mod+j",
    action: (editor) => editor.inlineCode.toggleInlineCode()
  },
  "divider",
  {
    icon: RemoveStyles,
    title: "Remove Styles",
    hotkey: "super+0",
    /**
     * TODO: Enable remove styles
     */
    action: (editor) => editor.marksPlugin.removeMarks()
  }
];
var expandedMarkItems = [
  ...primaryMarkItems,
  {
    icon: Style,
    title: "Text Style",
    more: true,
    children: secondaryMarkItems
  }
];
var compactMarkItems = [
  {
    icon: Style,
    title: "Text Style",
    more: true,
    children: [...primaryMarkItems, "divider", ...secondaryMarkItems]
  }
];

// ../react/src/toolbar-plugin/items/index.tsx
var largeItems = [
  blockDropdownItem,
  "divider",
  ...expandedMarkItems,
  "divider",
  linkItem,
  ...dropdownItems,
  "divider",
  ...expandedDialogItems
];
var mediumItems = [
  blockDropdownItem,
  "divider",
  ...expandedMarkItems,
  "divider",
  linkItem,
  ...dropdownItems,
  "divider",
  ...compactDialogItems
];
var smallItems = [
  blockDropdownItem,
  "divider",
  ...compactMarkItems,
  "divider",
  linkItem,
  ...dropdownItems,
  "divider",
  ...compactDialogItems
];
var initialItems = [blockDropdownItem, "divider"];
var itemSets = [largeItems, mediumItems, smallItems];

// ../react/src/toolbar-plugin/components/toolbar/toolbar-button.tsx
init_react_shim();
import { clsx as clsx9 } from "clsx";
import { useCallback as useCallback15, useRef as useRef12 } from "react";
import { ReactEditor as ReactEditor15, useSlateStatic as useSlateStatic21 } from "slate-react";
import { jsx as jsx62, jsxs as jsxs31 } from "react/jsx-runtime";
function ToolbarButton({
  active,
  item
}) {
  const editor = useSlateStatic21();
  const ref = useRef12(null);
  const tooltip = useTooltip({
    title: item.title,
    hotkey: () => item.hotkey ? formatHotkey(item.hotkey) : void 0
  });
  const menuLayer = useLayer("menu");
  const openMenu = useCallback15(() => {
    const dest = ref.current;
    const items = item.children;
    const Component = item.Component;
    if (!dest)
      return;
    if (items) {
      menuLayer.open(() => /* @__PURE__ */ jsx62(Menu, { dest, items, close: menuLayer.close }));
    } else if (Component) {
      menuLayer.open(() => /* @__PURE__ */ jsx62(Component, { dest, close: menuLayer.close }));
    }
  }, [item]);
  const onClick = useCallback15(() => {
    if (item.action) {
      item.action(editor);
      ReactEditor15.focus(editor);
      return;
    }
    if (menuLayer.layer) {
      menuLayer.close();
    } else {
      openMenu();
    }
  }, [menuLayer.layer, item]);
  const onMouseEnter = useCallback15(
    (e) => {
      tooltip.onMouseEnter(e);
      if (menuLayer.layer)
        openMenu();
    },
    [menuLayer.layer]
  );
  return /* @__PURE__ */ jsxs31(
    $ToolbarButton,
    {
      "data-item-type": "button",
      ref,
      onMouseEnter,
      onMouseLeave: tooltip.onMouseLeave,
      onClick,
      className: clsx9({ "--active": active, "--more": item.more }),
      children: [
        /* @__PURE__ */ jsx62(item.icon, {}),
        item.more ? /* @__PURE__ */ jsx62(More, {}) : null
      ]
    }
  );
}

// ../react/src/toolbar-plugin/components/toolbar/toolbar.tsx
import { jsx as jsx63 } from "react/jsx-runtime";
function ToolbarItem({ item }) {
  const editor = useSlateStatic22();
  if (item === "divider") {
    return /* @__PURE__ */ jsx63($ToolbarDividerContainer, { "data-item-type": "divider", children: /* @__PURE__ */ jsx63($ToolbarDivider, {}) });
  }
  const show = item.show === void 0 ? true : item.show(editor);
  if (!show)
    return null;
  return /* @__PURE__ */ jsx63(ToolbarButton, { item });
}
function getWidths(toolbar) {
  const button = toolbar.querySelector(
    "[data-item-type=button]"
  );
  const divider = toolbar.querySelector(
    "[data-item-type=divider]"
  );
  if (!button || !divider)
    throw new Error("Button or divider not found");
  return {
    toolbar: toolbar.offsetWidth,
    button: button.offsetWidth,
    divider: divider.offsetWidth
  };
}
function measureItemSetWidth(items, buttonWidth, dividerWidth) {
  let width = 0;
  for (const item of items) {
    width += item === "divider" ? dividerWidth : buttonWidth;
  }
  return width;
}
function Toolbar() {
  const ref = useRef13(null);
  const [items, setItems] = useState9(initialItems);
  useEffect7(() => {
    const refresh = throttle2(
      () => {
        const toolbar = ref.current;
        if (!toolbar)
          throw new Error("Toolbar not found");
        const widths = getWidths(toolbar);
        for (let i = 0; i < itemSets.length - 1; i++) {
          const itemSetWidth = measureItemSetWidth(
            itemSets[i],
            widths.button,
            widths.divider
          );
          if (itemSetWidth < widths.toolbar) {
            setItems(itemSets[i]);
            return;
          }
        }
        setItems(itemSets[itemSets.length - 1]);
      },
      100,
      { trailing: true }
    );
    refresh();
    window.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("resize", refresh);
    };
  }, []);
  return /* @__PURE__ */ jsx63($ToolbarContainer, { ref, children: /* @__PURE__ */ jsx63($Toolbar, { children: items.map((item, index2) => /* @__PURE__ */ jsx63(
    ToolbarItem,
    {
      item
    },
    typeof item === "string" ? index2 : item.title
  )) }) });
}

// ../react/src/toolbar-plugin/render-editable/index.tsx
import { jsx as jsx64, jsxs as jsxs32 } from "react/jsx-runtime";
function renderEditable({ attributes, Editable: Editable3 }) {
  const outerContainerRef = useRef14(null);
  const editor = useSlateStatic23();
  const focused = useFocused();
  const onClickOuterContainer = useCallback16(
    (e) => {
      if (e.target !== e.currentTarget)
        return;
      Transforms42.select(editor, Editor56.end(editor, []));
      ReactEditor16.focus(editor);
    },
    [editor]
  );
  return /* @__PURE__ */ jsx64(Layers, { children: /* @__PURE__ */ jsxs32(
    $OuterContainer,
    {
      ref: outerContainerRef,
      className: clsx10({ "--focused": focused }),
      style: {
        height: editor.toolbar.height,
        minHeight: editor.toolbar.minHeight,
        maxHeight: editor.toolbar.maxHeight
      },
      onClick: onClickOuterContainer,
      children: [
        /* @__PURE__ */ jsx64(Toolbar, {}),
        /* @__PURE__ */ jsx64(
          Editable3,
          {
            as: $Editable,
            ...attributes,
            style: { overflowY: "auto" }
          }
        )
      ]
    }
  ) });
}

// ../react/src/toolbar-plugin/index.tsx
var ToolbarPlugin = createPlugin(
  (editor, options) => {
    editor.toolbar = {
      height: options.toolbar?.height,
      minHeight: options.toolbar?.minHeight,
      maxHeight: options.toolbar?.maxHeight,
      showUploadButtons: options.toolbar?.showUploadButtons ?? true
    };
    return {
      name: "toolbar",
      editor: {},
      renderEditable,
      editableProps: {}
    };
  }
);

// ../react/src/trailing-block-plugin/index.tsx
init_react_shim();
import { Editor as Editor57, Node as Node12, Path as Path14, Transforms as Transforms43 } from "slate";
var TrailingBlockPlugin = createPlugin(
  (editor) => {
    editor.allowTrailingBlock = true;
    return {
      name: "trailing-block",
      editor: {
        normalizeNode: (entry) => {
          if (!Editor57.isEditor(entry[0]))
            return false;
          const lastPath = [editor.children.length - 1];
          const lastElement = Node12.child(
            editor,
            editor.children.length - 1
          );
          if (Editor57.hasBlocks(editor, lastElement) || Editor57.isVoid(editor, lastElement)) {
            Transforms43.insertNodes(
              editor,
              { type: "paragraph", children: [{ text: "" }] },
              {
                at: Path14.next(lastPath)
              }
            );
          }
          return true;
        }
      }
    };
  }
);

// ../react/src/upload-plugin/index.tsx
init_react_shim();
import { createClient } from "@portive/client";

// ../react/src/upload-plugin/methods/index.ts
init_react_shim();

// ../react/src/upload-plugin/methods/setElementTimeTraveling.ts
init_react_shim();
import {
  Editor as Editor58,
  Element as Element26,
  Transforms as Transforms44
} from "slate";
function extractLastOp(history) {
  const lastBatch = history.undos[history.undos.length - 1];
  return lastBatch.operations[lastBatch.operations.length - 1];
}
function extractSetNodeOp(history) {
  const lastOp = extractLastOp(history);
  if (lastOp.type !== "set_node")
    throw new Error(`Expected set_node operation, got ${lastOp.type}.`);
  return lastOp;
}
function setElementTimeTraveling(editor, prev, next) {
  const keys2 = Object.keys(prev);
  const key2 = keys2[0];
  const prevValue = prev[key2];
  const { undos } = editor.history;
  for (const undo of undos) {
    for (const op of undo.operations) {
      if ((op.type === "insert_node" || op.type === "remove_node") && op.node[key2] === prevValue) {
        op.node = { ...op.node, ...next };
      }
    }
  }
  const nodeEntries = [
    ...Editor58.nodes(editor, {
      mode: "all",
      at: [],
      match: (n) => Element26.isElement(n) && /**
       * We can typecast here because when we know `n.type` is the same as
       * `el.type`, we know that `n` is of type `T`.
       */
      n[key2] === prevValue
    })
  ];
  for (const nodeEntry of nodeEntries) {
    Transforms44.setNodes(editor, next, { at: nodeEntry[1] });
    const lastSetNodeOp = extractSetNodeOp(editor.history);
    lastSetNodeOp.properties = next;
  }
}

// ../react/src/upload-plugin/methods/upload.ts
init_react_shim();
import { uploadFile } from "@portive/client";
import { nanoid } from "nanoid";
function upload(editor, file) {
  const { client } = editor.upload;
  if (client === void 0)
    throw new Error(
      `Expected editor.upload.client to be defined if upload is being called`
    );
  const hashUrl = `$${nanoid()}`;
  const objectUrl = URL.createObjectURL(file);
  uploadFile({
    client,
    file,
    onBeforeFetch: ({ clientFile }) => {
      setUpload(editor, hashUrl, {
        status: "progress",
        url: objectUrl,
        sentBytes: 0,
        totalBytes: clientFile.bytes
      });
      if (clientFile.type === "image") {
        if (editor.upload.onUploadImageFile({
          hashUrl,
          file,
          width: clientFile.width,
          height: clientFile.height
        }))
          return true;
      }
      if (editor.upload.onUploadFile({ hashUrl, file }))
        return true;
      return false;
    },
    onProgress: ({ sentBytes, totalBytes }) => {
      setUpload(editor, hashUrl, {
        status: "progress",
        url: objectUrl,
        sentBytes,
        totalBytes
      });
    },
    onError: (e) => {
      setUpload(editor, hashUrl, {
        status: "error",
        url: objectUrl,
        message: e.message
      });
    },
    onSuccess: (e) => {
      setUpload(editor, hashUrl, {
        status: "success",
        url: e.hostedFile.url
      });
      if (e.hostedFile.type === "image") {
        if (editor.upload.onUploadImageFileSuccess({
          hashUrl,
          file,
          width: e.hostedFile.width,
          height: e.hostedFile.height,
          url: e.hostedFile.url
        }))
          return true;
      }
      editor.upload.onUploadFileSuccess({
        hashUrl,
        file,
        url: e.hostedFile.url
      });
    }
  });
  return false;
}

// ../react/src/upload-plugin/methods/index.ts
function createUploadMethods(editor) {
  return {
    upload: curryOne(upload, editor),
    setElementTimeTraveling: (prev, next) => setElementTimeTraveling(editor, prev, next)
  };
}

// ../react/src/upload-plugin/index.tsx
var UploadPlugin = (
  //({ authToken }: { authToken?: string }) =>
  createPlugin((editor, options) => {
    const authToken = options.upload?.authToken;
    if (!authToken) {
      console.warn(`No authToken provided. Uploads are disabled.`);
    }
    const client = authToken ? createClient({ authToken }) : void 0;
    editor.upload = {
      client,
      onUploadImageFile: () => {
        console.log("called onUploadImageFile");
        return false;
      },
      onUploadFile: () => {
        console.log("called onUploadFile");
        return false;
      },
      onUploadImageFileSuccess: () => {
        console.log("called onUploadImageFileSuccess");
        return false;
      },
      onUploadFileSuccess: () => {
        console.log("called onUploadFileSuccess");
        return false;
      },
      useUploadStore: createUploadStore(),
      ...createUploadMethods(editor)
    };
    const editableProps = authToken ? {
      onPaste(e) {
        const files = e.nativeEvent.clipboardData?.files;
        if (!files || files.length === 0)
          return false;
        for (const file of files) {
          editor.upload.upload(file);
        }
        return true;
      },
      onDrop(e) {
        const files = e.nativeEvent.dataTransfer?.files;
        if (!files || files.length === 0)
          return false;
        for (const file of files) {
          editor.upload.upload(file);
        }
        return true;
      }
    } : {};
    return {
      name: "upload",
      editor: {},
      editableProps
    };
  })
);

// ../react/src/attachment-plugin/index.tsx
init_react_shim();
import { Editor as Editor59, Transforms as Transforms45 } from "slate";
import { ReactEditor as ReactEditor17 } from "slate-react";
var AttachmentPlugin = createPlugin(
  (editor, options, { createPolicy }) => {
    editor.attachment = {};
    editor.upload.onUploadFile = ({ hashUrl, file }) => {
      const { selection } = editor;
      Transforms45.insertText(editor, `\u{1F517} `);
      Transforms45.insertNodes(editor, {
        type: "anchor",
        href: hashUrl,
        children: [{ text: file.name }]
      });
      if (!selection) {
        const lastPos = Editor59.end(editor, []);
        Transforms45.select(editor, lastPos);
        ReactEditor17.focus(editor);
      }
      Transforms45.move(editor, { distance: 1, unit: "offset" });
      return true;
    };
    editor.upload.onUploadFileSuccess = (e) => {
      editor.upload.setElementTimeTraveling(
        { href: e.hashUrl },
        { href: e.url }
      );
      return true;
    };
    return createPolicy({
      name: "attachment"
    });
  }
);

// ../react/src/paste-markdown-plugin/index.tsx
init_react_shim();

// ../react/src/paste-markdown-plugin/methods/index.ts
init_react_shim();
import { Transforms as Transforms46 } from "slate";
function pasteMarkdown(editor, markdown) {
  const fragment = parse2(markdown);
  Transforms46.insertNodes(editor, fragment);
}
function createPasteMarkdownMethods(editor) {
  return {
    pasteMarkdown: curryOne(pasteMarkdown, editor)
  };
}

// ../react/src/paste-markdown-plugin/index.tsx
var PasteMarkdownPlugin = createPlugin(
  (editor) => {
    editor.pasteMarkdown = createPasteMarkdownMethods(editor);
    return {
      name: "paste-markdown",
      editor: {},
      editableProps: {
        onPaste(e) {
          const { types } = e.clipboardData;
          if (types.length !== 1 || types[0] !== "text/plain") {
            return false;
          }
          const markdown = e.clipboardData.getData("text/plain");
          editor.pasteMarkdown.pasteMarkdown(markdown);
          stopEvent(e);
          return true;
        }
      }
    };
  }
);

// ../react/src/placeholder-plugin/index.tsx
init_react_shim();
import { jsx as jsx65 } from "react/jsx-runtime";
function renderPlaceholder(props) {
  const nextAttributes = {
    ...props.attributes,
    style: {
      ...props.attributes.style,
      width: void 0,
      maxWidth: void 0
    }
  };
  return /* @__PURE__ */ jsx65("span", { ...nextAttributes, children: props.children });
}
var PlaceholderPlugin = createPlugin(
  (editor, options, { createPolicy }) => {
    editor.placeholder = {};
    return createPolicy({
      name: "placeholder",
      editableProps: {
        renderPlaceholder
      }
    });
  }
);

// ../react/src/entry/plugins.ts
var plugins = [
  PasteMarkdownPlugin,
  ConvertElementPlugin,
  AnchorPlugin,
  HeadingPlugin,
  MarksPlugin,
  InlineCodePlugin,
  BlockQuotePlugin,
  CodeBlockPlugin,
  TablePlugin,
  HorizontalRulePlugin,
  TrailingBlockPlugin,
  ListPlugin,
  AtomicDeletePlugin,
  NormalizeAfterDeletePlugin,
  CollapsibleParagraphPlugin,
  ThemePlugin,
  ToolbarPlugin,
  UploadPlugin,
  AttachmentPlugin,
  ImagePlugin,
  PlaceholderPlugin
];

// ../react/src/entry/SinkEditable.tsx
var Sink = createSink(plugins);
var { withSink, SinkEditable: SinkEditable2 } = Sink;

// ../react/src/entry/useEditor.tsx
init_react_shim();
import { useState as useState10 } from "react";
import { createEditor, Editor as Editor61, Transforms as Transforms47 } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";
function useEditor({
  authToken,
  height,
  minHeight,
  maxHeight
}) {
  const [editor] = useState10(() => {
    const editor2 = createEditor();
    const nextEditor = withSink(withReact(withHistory(editor2)), {
      upload: { authToken },
      image: {},
      toolbar: {
        height,
        minHeight,
        maxHeight,
        /**
         * If `authToken` is provided then show upload buttons.
         */
        showUploadButtons: !!authToken
      }
    });
    nextEditor.convertElement.addConvertElementType("paragraph");
    editor2.wysimark = {
      //   initialMarkdown,
      //   initialValue: parse(initialMarkdown),
    };
    editor2.getMarkdown = () => {
      return serialize2(editor2.children);
    };
    editor2.setMarkdown = (markdown) => {
      const documentValue = parse2(markdown);
      editor2.children = documentValue;
      editor2.selection = null;
      Transforms47.select(editor2, Editor61.start(editor2, [0]));
    };
    return nextEditor;
  });
  return editor;
}

// ../react/src/entry/index.tsx
import { jsx as jsx66 } from "react/jsx-runtime";
function renderLeaf({ children, attributes }) {
  return /* @__PURE__ */ jsx66("span", { ...attributes, children });
}
function Editable2({
  editor,
  value,
  onChange,
  throttleInMs = 1e3,
  placeholder,
  className,
  style
}) {
  const ignoreNextChangeRef = useRef15(false);
  const initialValueRef = useRef15();
  const prevValueRef = useRef15();
  const onThrottledSlateChange = useCallback17(
    throttle3(
      () => {
        const markdown = serialize2(editor.children);
        editor.wysimark.prevValue = {
          markdown,
          children: editor.children
        };
        onChange(markdown);
      },
      throttleInMs,
      { leading: false, trailing: true }
    ),
    [editor, onChange, throttleInMs]
  );
  const onSlateChange = useCallback17(() => {
    if (prevValueRef.current === editor.children) {
      return;
    }
    prevValueRef.current = editor.children;
    onThrottledSlateChange();
  }, [onThrottledSlateChange]);
  if (editor.wysimark.prevValue == null || initialValueRef.current == null) {
    ignoreNextChangeRef.current = true;
    const children = parse2(value);
    prevValueRef.current = initialValueRef.current = children;
    editor.wysimark.prevValue = {
      markdown: value,
      children
    };
  } else {
    if (value !== editor.wysimark.prevValue.markdown) {
      ignoreNextChangeRef.current = true;
      const documentValue = parse2(value);
      editor.children = documentValue;
      editor.selection = null;
      Transforms48.select(editor, Editor62.start(editor, [0]));
    }
  }
  const onSinkeEditableMouseDown = useCallback17(() => {
    if (navigator.userAgent.toLowerCase().includes("firefox")) {
      ReactEditor19.focus(editor);
    }
  }, [editor]);
  const onBlur = useCallback17(() => {
    onThrottledSlateChange.flush();
  }, [onThrottledSlateChange]);
  return /* @__PURE__ */ jsx66(
    Slate2,
    {
      editor,
      value: initialValueRef.current,
      onChange: onSlateChange,
      children: /* @__PURE__ */ jsx66(
        SinkEditable2,
        {
          renderLeaf,
          onMouseDown: onSinkeEditableMouseDown,
          onBlur,
          placeholder,
          className,
          style
        }
      )
    }
  );
}

// src/entry/index.tsx
import { jsx as jsx67 } from "react/jsx-runtime";
function StandaloneEditor({
  standaloneOptions: { onChange, placeholder, ...options },
  standaloneMethodsRef
}) {
  const [markdown, setMarkdown] = useState11(options.initialMarkdown || "");
  const markdownRef = useRef16(markdown);
  const editor = useEditor(options);
  markdownRef.current = markdown;
  useImperativeHandle(
    standaloneMethodsRef,
    () => {
      return {
        getMarkdown() {
          return markdownRef.current;
        },
        setMarkdown(markdown2) {
          markdownRef.current = markdown2;
          setMarkdown(markdown2);
        }
      };
    },
    [markdownRef, setMarkdown]
  );
  const onChangeEditable = useCallback18(
    (markdown2) => {
      markdownRef.current = markdown2;
      setMarkdown(markdown2);
      onChange?.(markdown2);
    },
    [editor]
  );
  return /* @__PURE__ */ jsx67(
    Editable2,
    {
      editor,
      value: markdown,
      onChange: onChangeEditable,
      placeholder
    }
  );
}
function createWysimark(containerElement, options) {
  const standaloneMethodsRef = createRef();
  const root = createRoot(containerElement);
  root.render(
    /* @__PURE__ */ jsx67(
      StandaloneEditor,
      {
        standaloneMethodsRef,
        standaloneOptions: options
      }
    )
  );
  return {
    unmount() {
      try {
        root.unmount();
      } catch (e) {
      }
    },
    getMarkdown() {
      return standaloneMethodsRef.current?.getMarkdown() || "";
    },
    setMarkdown(markdown) {
      standaloneMethodsRef.current?.setMarkdown(markdown);
    }
  };
}
export {
  createWysimark
};
/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=index.esm.js.map