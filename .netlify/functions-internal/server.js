var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { entry: { module: "/build/entry.client-DULRKKFN.js", imports: ["/build/_shared/chunk-ST7TJEML.js", "/build/_shared/chunk-2G7PDDD5.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YAPOH4AB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3UTEROWS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_pages": { id: "routes/_pages", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_pages-53VBVETB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_pages.about": { id: "routes/_pages.about", parentId: "routes/_pages", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/_pages.about-JWESLJAP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-5JWVSH64.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog.$slug": { id: "routes/blog.$slug", parentId: "routes/blog", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog.$slug-YWY45EVO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "6b191eb2", hmr: void 0, url: "/build/manifest-6B191EB2.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// node_modules/fault/index.js
function create(Constructor) {
  return FormattedError.displayName = Constructor.displayName || Constructor.name, FormattedError;
  function FormattedError(format, ...values) {
    let reason = format && (0, import_format.default)(format, ...values);
    return new Constructor(reason);
  }
}
var import_format, fault, init_fault = __esm({
  "node_modules/fault/index.js"() {
    import_format = __toESM(require("format"), 1), fault = Object.assign(create(Error), {
      eval: create(EvalError),
      range: create(RangeError),
      reference: create(ReferenceError),
      syntax: create(SyntaxError),
      type: create(TypeError),
      uri: create(URIError)
    });
  }
});

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module2) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    module2.exports = _interopRequireDefault, module2.exports.__esModule = !0, module2.exports.default = module2.exports;
  }
});

// node_modules/remark-mdx-frontmatter/dist/index.js
var require_dist = __commonJS({
  "node_modules/remark-mdx-frontmatter/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.remarkMdxFrontmatter = void 0;
    var estree_util_is_identifier_name_1 = require("estree-util-is-identifier-name"), estree_util_value_to_estree_1 = require("estree-util-value-to-estree"), js_yaml_1 = require("js-yaml"), toml_1 = require("toml"), remarkMdxFrontmatter = ({ name } = {}) => (ast) => {
      let mdast = ast, imports = [];
      if (name && !(0, estree_util_is_identifier_name_1.name)(name))
        throw new Error(`If name is specified, this should be a valid identifier name, got: ${JSON.stringify(name)}`);
      for (let node of mdast.children) {
        let data, { value: value2 } = node;
        if (node.type === "yaml" ? data = (0, js_yaml_1.load)(value2) : node.type === "toml" && (data = (0, toml_1.parse)(value2)), data != null) {
          if (!name && typeof data != "object")
            throw new Error(`Expected frontmatter data to be an object, got:
${value2}`);
          imports.push({
            type: "mdxjsEsm",
            value: "",
            data: {
              estree: {
                type: "Program",
                sourceType: "module",
                body: [
                  {
                    type: "ExportNamedDeclaration",
                    source: null,
                    specifiers: [],
                    declaration: {
                      type: "VariableDeclaration",
                      kind: "const",
                      declarations: Object.entries(name ? { [name]: data } : data).map(([identifier, val]) => {
                        if (!(0, estree_util_is_identifier_name_1.name)(identifier))
                          throw new Error(`Frontmatter keys should be valid identifiers, got: ${JSON.stringify(identifier)}`);
                        return {
                          type: "VariableDeclarator",
                          id: { type: "Identifier", name: identifier },
                          init: (0, estree_util_value_to_estree_1.valueToEstree)(val)
                        };
                      })
                    }
                  }
                ]
              }
            }
          });
        }
      }
      mdast.children.unshift(...imports);
    };
    exports.remarkMdxFrontmatter = remarkMdxFrontmatter;
  }
});

// node_modules/mdx-bundler/dist/dirname-messed-up.cjs
var require_dirname_messed_up = __commonJS({
  "node_modules/mdx-bundler/dist/dirname-messed-up.cjs"(exports, module2) {
    "use strict";
    module2.exports = !__dirname.includes("mdx-bundler");
  }
});

// node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
var unicodePunctuationRegex, init_unicode_punctuation_regex = __esm({
  "node_modules/micromark-util-character/lib/unicode-punctuation-regex.js"() {
    unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
  }
});

// node_modules/micromark-util-character/index.js
function markdownLineEnding(code) {
  return code !== null && code < -2;
}
function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32;
}
function regexCheck(regex) {
  return check;
  function check(code) {
    return code !== null && regex.test(String.fromCharCode(code));
  }
}
var asciiAlpha, asciiDigit, asciiHexDigit, asciiAlphanumeric, asciiPunctuation, asciiAtext, unicodeWhitespace, unicodePunctuation, init_micromark_util_character = __esm({
  "node_modules/micromark-util-character/index.js"() {
    init_unicode_punctuation_regex();
    asciiAlpha = regexCheck(/[A-Za-z]/), asciiDigit = regexCheck(/\d/), asciiHexDigit = regexCheck(/[\dA-Fa-f]/), asciiAlphanumeric = regexCheck(/[\dA-Za-z]/), asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/), asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
    unicodeWhitespace = regexCheck(/\s/), unicodePunctuation = regexCheck(unicodePunctuationRegex);
  }
});

// node_modules/micromark-extension-frontmatter/matters.js
function matters(options) {
  let result = [], index = -1, presetsOrMatters = Array.isArray(options) ? options : options ? [options] : ["yaml"];
  for (; ++index < presetsOrMatters.length; )
    result[index] = matter(presetsOrMatters[index]);
  return result;
}
function matter(option) {
  let result = option;
  if (typeof result == "string") {
    if (!own3.call(markers, result))
      throw fault("Missing matter definition for `%s`", result);
    result = {
      type: result,
      marker: markers[result]
    };
  } else if (typeof result != "object")
    throw fault("Expected matter to be an object, not `%j`", result);
  if (!own3.call(result, "type"))
    throw fault("Missing `type` in matter `%j`", result);
  if (!own3.call(result, "fence") && !own3.call(result, "marker"))
    throw fault("Missing `marker` or `fence` in matter `%j`", result);
  return result;
}
var own3, markers, init_matters = __esm({
  "node_modules/micromark-extension-frontmatter/matters.js"() {
    init_fault();
    own3 = {}.hasOwnProperty, markers = {
      yaml: "-",
      toml: "+"
    };
  }
});

// node_modules/micromark-extension-frontmatter/lib/syntax.js
function frontmatter(options) {
  let listOfMatters = matters(options), flow = {}, index = -1;
  for (; ++index < listOfMatters.length; ) {
    let matter2 = listOfMatters[index], code = fence(matter2, "open").charCodeAt(0), construct = createConstruct(matter2), existing = flow[code];
    Array.isArray(existing) ? existing.push(construct) : flow[code] = [construct];
  }
  return {
    flow
  };
}
function createConstruct(matter2) {
  let anywhere = matter2.anywhere, frontmatterType = matter2.type, fenceType = frontmatterType + "Fence", sequenceType = fenceType + "Sequence", valueType = frontmatterType + "Value", closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: !0
  }, buffer, bufferIndex = 0;
  return {
    tokenize: tokenizeFrontmatter,
    concrete: !0
  };
  function tokenizeFrontmatter(effects, ok2, nok) {
    let self = this;
    return start;
    function start(code) {
      let position = self.now();
      return (
        // Indent not allowed.
        position.column === 1 && // Normally, only allowed in first line.
        (position.line === 1 || anywhere) && (buffer = fence(matter2, "open"), bufferIndex = 0, code === buffer.charCodeAt(bufferIndex)) ? (effects.enter(frontmatterType), effects.enter(fenceType), effects.enter(sequenceType), openSequence(code)) : nok(code)
      );
    }
    function openSequence(code) {
      return bufferIndex === buffer.length ? (effects.exit(sequenceType), markdownSpace(code) ? (effects.enter("whitespace"), openSequenceWhitespace(code)) : openAfter(code)) : code === buffer.charCodeAt(bufferIndex++) ? (effects.consume(code), openSequence) : nok(code);
    }
    function openSequenceWhitespace(code) {
      return markdownSpace(code) ? (effects.consume(code), openSequenceWhitespace) : (effects.exit("whitespace"), openAfter(code));
    }
    function openAfter(code) {
      return markdownLineEnding(code) ? (effects.exit(fenceType), effects.enter("lineEnding"), effects.consume(code), effects.exit("lineEnding"), buffer = fence(matter2, "close"), bufferIndex = 0, effects.attempt(closingFenceConstruct, after, contentStart)) : nok(code);
    }
    function contentStart(code) {
      return code === null || markdownLineEnding(code) ? contentEnd(code) : (effects.enter(valueType), contentInside(code));
    }
    function contentInside(code) {
      return code === null || markdownLineEnding(code) ? (effects.exit(valueType), contentEnd(code)) : (effects.consume(code), contentInside);
    }
    function contentEnd(code) {
      return code === null ? nok(code) : (effects.enter("lineEnding"), effects.consume(code), effects.exit("lineEnding"), effects.attempt(closingFenceConstruct, after, contentStart));
    }
    function after(code) {
      return effects.exit(frontmatterType), ok2(code);
    }
  }
  function tokenizeClosingFence(effects, ok2, nok) {
    let bufferIndex2 = 0;
    return closeStart;
    function closeStart(code) {
      return code === buffer.charCodeAt(bufferIndex2) ? (effects.enter(fenceType), effects.enter(sequenceType), closeSequence(code)) : nok(code);
    }
    function closeSequence(code) {
      return bufferIndex2 === buffer.length ? (effects.exit(sequenceType), markdownSpace(code) ? (effects.enter("whitespace"), closeSequenceWhitespace(code)) : closeAfter(code)) : code === buffer.charCodeAt(bufferIndex2++) ? (effects.consume(code), closeSequence) : nok(code);
    }
    function closeSequenceWhitespace(code) {
      return markdownSpace(code) ? (effects.consume(code), closeSequenceWhitespace) : (effects.exit("whitespace"), closeAfter(code));
    }
    function closeAfter(code) {
      return code === null || markdownLineEnding(code) ? (effects.exit(fenceType), ok2(code)) : nok(code);
    }
  }
}
function fence(matter2, prop) {
  return matter2.marker ? pick(matter2.marker, prop).repeat(3) : (
    // @ts-expect-error: They’re mutually exclusive.
    pick(matter2.fence, prop)
  );
}
function pick(schema, prop) {
  return typeof schema == "string" ? schema : schema[prop];
}
var init_syntax = __esm({
  "node_modules/micromark-extension-frontmatter/lib/syntax.js"() {
    init_micromark_util_character();
    init_matters();
  }
});

// node_modules/micromark-extension-frontmatter/index.js
var init_micromark_extension_frontmatter = __esm({
  "node_modules/micromark-extension-frontmatter/index.js"() {
    init_syntax();
  }
});

// node_modules/mdast-util-frontmatter/lib/index.js
function frontmatterFromMarkdown(options) {
  let settings = matters(options), enter = {}, exit = {}, index = -1;
  for (; ++index < settings.length; ) {
    let matter2 = settings[index];
    enter[matter2.type] = opener(matter2), exit[matter2.type] = close, exit[matter2.type + "Value"] = value;
  }
  return { enter, exit };
}
function opener(matter2) {
  return open;
  function open(token) {
    this.enter({ type: matter2.type, value: "" }, token), this.buffer();
  }
}
function close(token) {
  let data = this.resume(), node = (
    /** @type {Literal} */
    this.exit(token)
  );
  node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function value(token) {
  this.config.enter.data.call(this, token), this.config.exit.data.call(this, token);
}
function frontmatterToMarkdown(options) {
  let unsafe = [], handlers = {}, settings = matters(options), index = -1;
  for (; ++index < settings.length; ) {
    let matter2 = settings[index];
    handlers[matter2.type] = handler(matter2), unsafe.push({ atBreak: !0, character: fence2(matter2, "open").charAt(0) });
  }
  return { unsafe, handlers };
}
function handler(matter2) {
  let open = fence2(matter2, "open"), close2 = fence2(matter2, "close");
  return handle;
  function handle(node) {
    return open + (node.value ? `
` + node.value : "") + `
` + close2;
  }
}
function fence2(matter2, prop) {
  return matter2.marker ? pick2(matter2.marker, prop).repeat(3) : (
    // @ts-expect-error: They’re mutually exclusive.
    pick2(matter2.fence, prop)
  );
}
function pick2(schema, prop) {
  return typeof schema == "string" ? schema : schema[prop];
}
var init_lib = __esm({
  "node_modules/mdast-util-frontmatter/lib/index.js"() {
    init_matters();
  }
});

// node_modules/mdast-util-frontmatter/index.js
var init_mdast_util_frontmatter = __esm({
  "node_modules/mdast-util-frontmatter/index.js"() {
    init_lib();
  }
});

// node_modules/remark-frontmatter/index.js
var remark_frontmatter_exports = {};
__export(remark_frontmatter_exports, {
  default: () => remarkFrontmatter
});
function remarkFrontmatter(options = "yaml") {
  let data = this.data();
  add("micromarkExtensions", frontmatter(options)), add("fromMarkdownExtensions", frontmatterFromMarkdown(options)), add("toMarkdownExtensions", frontmatterToMarkdown(options));
  function add(field, value2) {
    /** @type {unknown[]} */
    // Other extensions
    /* c8 ignore next 2 */
    (data[field] ? data[field] : data[field] = []).push(value2);
  }
}
var init_remark_frontmatter = __esm({
  "node_modules/remark-frontmatter/index.js"() {
    init_micromark_extension_frontmatter();
    init_mdast_util_frontmatter();
  }
});

// node_modules/mdx-bundler/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/mdx-bundler/dist/index.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.bundleMDX = bundleMDX2;
    var _fs = _interopRequireDefault(require("fs")), _path = _interopRequireDefault(require("path")), _string_decoder = require("string_decoder"), _remarkMdxFrontmatter = require_dist(), _grayMatter = _interopRequireDefault(require("gray-matter")), esbuild = _interopRequireWildcard(require("esbuild")), _nodeResolve = require("@esbuild-plugins/node-resolve"), _esbuildPluginGlobalExternals = require("@fal-works/esbuild-plugin-global-externals"), _uuid = require("uuid"), _dirnameMessedUp = _interopRequireDefault(require_dirname_messed_up());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap != "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap(), cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule)
        return obj;
      if (obj === null || typeof obj != "object" && typeof obj != "function")
        return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj))
        return cache.get(obj);
      var newObj = {}, hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj)
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
        }
      return newObj.default = obj, cache && cache.set(obj, newObj), newObj;
    }
    var {
      readFile,
      unlink
    } = _fs.default.promises;
    async function bundleMDX2({
      file,
      source,
      files = {},
      mdxOptions = (options) => options,
      esbuildOptions = (options) => options,
      globals = {},
      cwd = _path.default.join(process.cwd(), "__mdx_bundler_fake_dir__"),
      grayMatterOptions = (options) => options,
      bundleDirectory,
      bundlePath
    }) {
      _dirnameMessedUp.default && !process.env.ESBUILD_BINARY_PATH && console.warn("mdx-bundler warning: esbuild maybe unable to find its binary, if your build fails you'll need to set ESBUILD_BINARY_PATH. Learn more: https://github.com/kentcdodds/mdx-bundler/blob/main/README.md#nextjs-esbuild-enoent");
      let [{
        default: mdxESBuild
      }, {
        default: remarkFrontmatter2
      }] = await Promise.all([import("@mdx-js/esbuild"), Promise.resolve().then(() => (init_remark_frontmatter(), remark_frontmatter_exports))]), code, entryPath, matter2, absoluteFiles = {}, isWriting = typeof bundleDirectory == "string";
      if (typeof bundleDirectory != typeof bundlePath)
        throw new Error("When using `bundleDirectory` or `bundlePath` the other must be set.");
      function isVFile(vfile) {
        return typeof vfile == "object" && vfile !== null && "value" in vfile;
      }
      if (typeof source == "string")
        matter2 = (0, _grayMatter.default)(source, grayMatterOptions({})), entryPath = _path.default.join(cwd, `./_mdx_bundler_entry_point-${(0, _uuid.v4)()}.mdx`), absoluteFiles[entryPath] = source;
      else if (isVFile(source)) {
        let value2 = String(source.value);
        matter2 = (0, _grayMatter.default)(value2, grayMatterOptions({})), entryPath = source.path ? _path.default.isAbsolute(source.path) ? source.path : _path.default.join(source.cwd, source.path) : _path.default.join(cwd, `./_mdx_bundler_entry_point-${(0, _uuid.v4)()}.mdx`), absoluteFiles[entryPath] = value2;
      } else if (typeof file == "string")
        matter2 = _grayMatter.default.read(file, grayMatterOptions({})), entryPath = file;
      else
        throw new Error("`source` or `file` must be defined");
      for (let [filepath, fileCode] of Object.entries(files))
        absoluteFiles[_path.default.join(cwd, filepath)] = fileCode;
      let inMemoryPlugin = {
        name: "inMemory",
        setup(build) {
          build.onResolve({
            filter: /.*/
          }, ({
            path: filePath,
            importer
          }) => {
            if (filePath === entryPath)
              return {
                path: filePath,
                pluginData: {
                  inMemory: !0,
                  contents: absoluteFiles[filePath]
                }
              };
            let modulePath = _path.default.resolve(_path.default.dirname(importer), filePath);
            if (modulePath in absoluteFiles)
              return {
                path: modulePath,
                pluginData: {
                  inMemory: !0,
                  contents: absoluteFiles[modulePath]
                }
              };
            for (let ext of [".js", ".ts", ".jsx", ".tsx", ".json", ".mdx"]) {
              let fullModulePath = `${modulePath}${ext}`;
              if (fullModulePath in absoluteFiles)
                return {
                  path: fullModulePath,
                  pluginData: {
                    inMemory: !0,
                    contents: absoluteFiles[fullModulePath]
                  }
                };
            }
            return {};
          }), build.onLoad({
            filter: /.*/
          }, async ({
            path: filePath,
            pluginData
          }) => {
            if (pluginData === void 0 || !pluginData.inMemory)
              return null;
            let fileType = (_path.default.extname(filePath) || ".jsx").slice(1), contents = absoluteFiles[filePath];
            if (fileType === "mdx")
              return null;
            let loader3;
            return build.initialOptions.loader && build.initialOptions.loader[`.${fileType}`] ? loader3 = build.initialOptions.loader[`.${fileType}`] : loader3 = /** @type import('esbuild').Loader */
            fileType, {
              contents,
              loader: loader3
            };
          });
        }
      }, buildOptions = esbuildOptions({
        entryPoints: [entryPath],
        write: isWriting,
        outdir: isWriting ? bundleDirectory : void 0,
        publicPath: isWriting ? bundlePath : void 0,
        absWorkingDir: cwd,
        define: {
          "process.env.NODE_ENV": JSON.stringify("development")
        },
        plugins: [
          (0, _esbuildPluginGlobalExternals.globalExternals)({
            ...globals,
            react: {
              varName: "React",
              type: "cjs"
            },
            "react-dom": {
              varName: "ReactDOM",
              type: "cjs"
            },
            "react/jsx-runtime": {
              varName: "_jsx_runtime",
              type: "cjs"
            }
          }),
          // eslint-disable-next-line @babel/new-cap
          (0, _nodeResolve.NodeResolvePlugin)({
            extensions: [".js", ".ts", ".jsx", ".tsx"],
            resolveOptions: {
              basedir: cwd
            }
          }),
          inMemoryPlugin,
          mdxESBuild(mdxOptions({
            remarkPlugins: [remarkFrontmatter2, [_remarkMdxFrontmatter.remarkMdxFrontmatter, {
              name: "frontmatter"
            }]]
          }, matter2.data))
        ],
        bundle: !0,
        format: "iife",
        globalName: "Component",
        minify: !0
      }, matter2.data), bundled = await esbuild.build(buildOptions);
      if (bundled.outputFiles)
        code = new _string_decoder.StringDecoder("utf8").write(Buffer.from(bundled.outputFiles[0].contents));
      else if (buildOptions.outdir && buildOptions.write) {
        let entryFile = (
          /** @type {{entryPoints: string[]}} */
          buildOptions.entryPoints[0]
        ), fileName = _path.default.basename(entryFile).replace(/\.[^/.]+$/, ".js");
        code = (await readFile(_path.default.join(buildOptions.outdir, fileName))).toString(), await unlink(_path.default.join(buildOptions.outdir, fileName));
      } else
        throw new Error("You must either specify `write: false` or `write: true` and `outdir: '/path'` in your esbuild options");
      return {
        code: `${code};return Component;`,
        frontmatter: matter2.data,
        errors: bundled.errors,
        matter: matter2
      };
    }
  }
});

// node_modules/mdx-bundler/dist/client.js
var require_client = __commonJS({
  "node_modules/mdx-bundler/dist/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.getMDXComponent = getMDXComponent2;
    exports.getMDXExport = getMDXExport;
    var React = _interopRequireWildcard(require("react")), _jsx_runtime = _interopRequireWildcard(require("react/jsx-runtime")), ReactDOM = _interopRequireWildcard(require("react-dom"));
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap != "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap(), cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule)
        return obj;
      if (obj === null || typeof obj != "object" && typeof obj != "function")
        return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj))
        return cache.get(obj);
      var newObj = {}, hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj)
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
        }
      return newObj.default = obj, cache && cache.set(obj, newObj), newObj;
    }
    function getMDXComponent2(code, globals) {
      return getMDXExport(code, globals).default;
    }
    function getMDXExport(code, globals) {
      let scope = {
        React,
        ReactDOM,
        _jsx_runtime,
        ...globals
      };
      return new Function(...Object.keys(scope), code)(...Object.values(scope));
    }
  }
});

// node_modules/mdx-bundler/client/index.js
var require_client2 = __commonJS({
  "node_modules/mdx-bundler/client/index.js"(exports, module2) {
    module2.exports = require_client();
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_server()), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/_pages.about.tsx
var pages_about_exports = {};
__export(pages_about_exports, {
  default: () => AboutPage
});

// app/assets/images/me.jpg
var me_default = "/build/_assets/me-WTPDWHAB.jpg";

// app/routes/_pages.about.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function AboutPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Who am I?" }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 6,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: me_default, alt: "Me", className: "center-me" }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 7,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "My name is Thiago Temple, I'm Brazilian and I'm living and working in Ottawa/Canada. You can reach out to on\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://twitter.com/ThiagoTemple", children: "twitter" }, void 0, !1, {
        fileName: "app/routes/_pages.about.tsx",
        lineNumber: 13,
        columnNumber: 5
      }, this),
      "\xA0 and my\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:thitemple@gmail.com", children: "email" }, void 0, !1, {
        fileName: "app/routes/_pages.about.tsx",
        lineNumber: 15,
        columnNumber: 5
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 10,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "What I do?" }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 18,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "I work at\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "http://shopify.com", children: "Shopify" }, void 0, !1, {
        fileName: "app/routes/_pages.about.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this),
      "\xA0as a staff developer and for most of the time I'm programming with web related technologies."
    ] }, void 0, !0, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 19,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Why I do it?" }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Even before my family bought its first computer back in the 90's, I was already fascinated by them. I used to use my neighbour's computer when I was still 13." }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Today, I love the craft of writing software, and especially I love the challenge of being up to date with new technologies. I'm sure the fact that technologies are constantly changing is one of the major things keeping me motivated. That and the fact of knowing that people are becoming more productive because of software I'm helping build." }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 32,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Why this blog?" }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "First, this is a way for me to practice what I'm learning. People tend to say that one learns something when she's trying to teach somebody else. Well, I think that's true." }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "I'm also enthusiastic about new things I learn that I want to share it. So, this is my contribution the community. Sharing my experiences." }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 46,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "What I do for fun?" }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 51,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Living in Canada with its hard winters made me discover a new passion:\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "http://boardgamegeek.com", children: "board games" }, void 0, !1, {
        fileName: "app/routes/_pages.about.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, this),
      ".\xA0Now I love them and I have a somewhat growing collection:\xA0"
    ] }, void 0, !0, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 52,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://boardgamegeek.com/user/vintem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        alt: "Board games collection",
        src: "https://boardgamegeek.com/jswidget.php?username=vintem&numitems=5&header=1&text=title&images=medium&show=recentplays&imagesonly=1&imagepos=center&inline=1&domains%5B%5D=boardgame&imagewidget=1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_pages.about.tsx",
        lineNumber: 60,
        columnNumber: 6
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 59,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 58,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "I also watch a few\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://www.tvtime.com/en/user/13947508/profile", children: "TV Shows" }, void 0, !1, {
        fileName: "app/routes/_pages.about.tsx",
        lineNumber: 68,
        columnNumber: 5
      }, this),
      ", and I'm constantly reading at least one book."
    ] }, void 0, !0, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 66,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "But one thing I love to do is to spend time with my family. I'm married, father of one little girl and two very active greyhounds." }, void 0, !1, {
      fileName: "app/routes/_pages.about.tsx",
      lineNumber: 71,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_pages.about.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/routes/blog.$slug.tsx
var blog_slug_exports = {};
__export(blog_slug_exports, {
  default: () => BlogPostPage,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/util/mdx.server.ts
var import_path = __toESM(require("path"));

// node_modules/unist-util-is/lib/index.js
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
    if (test == null)
      return ok;
    if (typeof test == "string")
      return typeFactory(test);
    if (typeof test == "object")
      return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    if (typeof test == "function")
      return castFactory(test);
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory(tests) {
  let checks = [], index = -1;
  for (; ++index < tests.length; )
    checks[index] = convert(tests[index]);
  return castFactory(any);
  function any(...parameters) {
    let index2 = -1;
    for (; ++index2 < checks.length; )
      if (checks[index2].call(this, ...parameters))
        return !0;
    return !1;
  }
}
function propsFactory(check) {
  return castFactory(all);
  function all(node) {
    let key;
    for (key in check)
      if (node[key] !== check[key])
        return !1;
    return !0;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(node, ...parameters) {
    return Boolean(
      node && typeof node == "object" && "type" in node && // @ts-expect-error: fine.
      Boolean(check.call(this, node, ...parameters))
    );
  }
}
function ok() {
  return !0;
}

// node_modules/unist-util-visit-parents/lib/color.js
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/unist-util-visit-parents/lib/index.js
var CONTINUE = !0, EXIT = !1, SKIP = "skip", visitParents = (
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
    typeof test == "function" && typeof visitor != "function" && (reverse = visitor, visitor = test, test = null);
    let is2 = convert(test), step = reverse ? -1 : 1;
    factory(tree, void 0, [])();
    function factory(node, index, parents) {
      let value2 = node && typeof node == "object" ? node : {};
      if (typeof value2.type == "string") {
        let name = (
          // `hast`
          typeof value2.tagName == "string" ? value2.tagName : (
            // `xast`
            typeof value2.name == "string" ? value2.name : void 0
          )
        );
        Object.defineProperty(visit2, "name", {
          value: "node (" + color(node.type + (name ? "<" + name + ">" : "")) + ")"
        });
      }
      return visit2;
      function visit2() {
        let result = [], subresult, offset, grandparents;
        if ((!test || is2(node, index, parents[parents.length - 1] || null)) && (result = toResult(visitor(node, parents)), result[0] === EXIT))
          return result;
        if (node.children && result[0] !== SKIP)
          for (offset = (reverse ? node.children.length : -1) + step, grandparents = parents.concat(node); offset > -1 && offset < node.children.length; ) {
            if (subresult = factory(node.children[offset], offset, grandparents)(), subresult[0] === EXIT)
              return subresult;
            offset = typeof subresult[1] == "number" ? subresult[1] : offset + step;
          }
        return result;
      }
    }
  }
);
function toResult(value2) {
  return Array.isArray(value2) ? value2 : typeof value2 == "number" ? [CONTINUE, value2] : [value2];
}

// node_modules/unist-util-visit/lib/index.js
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
    typeof test == "function" && typeof visitor != "function" && (reverse = visitor, visitor = test, test = null), visitParents(tree, test, overload, reverse);
    function overload(node, parents) {
      let parent = parents[parents.length - 1];
      return visitor(
        node,
        parent ? parent.children.indexOf(node) : null,
        parent
      );
    }
  }
);

// node_modules/remark-mdx-images/index.js
var urlPattern = /^(https?:)?\//, relativePathPattern = /\.\.?\//, remarkMdxImages = ({ resolve = !0 } = {}) => (ast) => {
  let imports = [], imported = /* @__PURE__ */ new Map();
  visit(ast, "image", (node, index, parent) => {
    let { alt = null, title, url } = node;
    if (urlPattern.test(url))
      return;
    !relativePathPattern.test(url) && resolve && (url = `./${url}`);
    let name = imported.get(url);
    name || (name = `__${imported.size}_${url.replace(/\W/g, "_")}__`, imports.push({
      type: "mdxjsEsm",
      value: "",
      data: {
        estree: {
          type: "Program",
          sourceType: "module",
          body: [
            {
              type: "ImportDeclaration",
              source: { type: "Literal", value: url, raw: JSON.stringify(url) },
              specifiers: [
                {
                  type: "ImportDefaultSpecifier",
                  local: { type: "Identifier", name }
                }
              ]
            }
          ]
        }
      }
    }), imported.set(url, name));
    let textElement = {
      type: "mdxJsxTextElement",
      name: "img",
      children: [],
      attributes: [
        { type: "mdxJsxAttribute", name: "alt", value: alt },
        {
          type: "mdxJsxAttribute",
          name: "src",
          value: {
            type: "mdxJsxAttributeValueExpression",
            value: name,
            data: {
              estree: {
                type: "Program",
                sourceType: "module",
                comments: [],
                body: [{ type: "ExpressionStatement", expression: { type: "Identifier", name } }]
              }
            }
          }
        }
      ]
    };
    title && textElement.attributes.push({ type: "mdxJsxAttribute", name: "title", value: title }), parent.children.splice(index, 1, textElement);
  }), ast.children.unshift(...imports);
}, remark_mdx_images_default = remarkMdxImages;

// node_modules/lowlight/lib/common.js
var import_arduino = __toESM(require("highlight.js/lib/languages/arduino"), 1), import_bash = __toESM(require("highlight.js/lib/languages/bash"), 1), import_c = __toESM(require("highlight.js/lib/languages/c"), 1), import_cpp = __toESM(require("highlight.js/lib/languages/cpp"), 1), import_csharp = __toESM(require("highlight.js/lib/languages/csharp"), 1), import_css = __toESM(require("highlight.js/lib/languages/css"), 1), import_diff = __toESM(require("highlight.js/lib/languages/diff"), 1), import_go = __toESM(require("highlight.js/lib/languages/go"), 1), import_graphql = __toESM(require("highlight.js/lib/languages/graphql"), 1), import_ini = __toESM(require("highlight.js/lib/languages/ini"), 1), import_java = __toESM(require("highlight.js/lib/languages/java"), 1), import_javascript = __toESM(require("highlight.js/lib/languages/javascript"), 1), import_json = __toESM(require("highlight.js/lib/languages/json"), 1), import_kotlin = __toESM(require("highlight.js/lib/languages/kotlin"), 1), import_less = __toESM(require("highlight.js/lib/languages/less"), 1), import_lua = __toESM(require("highlight.js/lib/languages/lua"), 1), import_makefile = __toESM(require("highlight.js/lib/languages/makefile"), 1), import_markdown = __toESM(require("highlight.js/lib/languages/markdown"), 1), import_objectivec = __toESM(require("highlight.js/lib/languages/objectivec"), 1), import_perl = __toESM(require("highlight.js/lib/languages/perl"), 1), import_php = __toESM(require("highlight.js/lib/languages/php"), 1), import_php_template = __toESM(require("highlight.js/lib/languages/php-template"), 1), import_plaintext = __toESM(require("highlight.js/lib/languages/plaintext"), 1), import_python = __toESM(require("highlight.js/lib/languages/python"), 1), import_python_repl = __toESM(require("highlight.js/lib/languages/python-repl"), 1), import_r = __toESM(require("highlight.js/lib/languages/r"), 1), import_ruby = __toESM(require("highlight.js/lib/languages/ruby"), 1), import_rust = __toESM(require("highlight.js/lib/languages/rust"), 1), import_scss = __toESM(require("highlight.js/lib/languages/scss"), 1), import_shell = __toESM(require("highlight.js/lib/languages/shell"), 1), import_sql = __toESM(require("highlight.js/lib/languages/sql"), 1), import_swift = __toESM(require("highlight.js/lib/languages/swift"), 1), import_typescript = __toESM(require("highlight.js/lib/languages/typescript"), 1), import_vbnet = __toESM(require("highlight.js/lib/languages/vbnet"), 1), import_wasm = __toESM(require("highlight.js/lib/languages/wasm"), 1), import_xml = __toESM(require("highlight.js/lib/languages/xml"), 1), import_yaml = __toESM(require("highlight.js/lib/languages/yaml"), 1);

// node_modules/lowlight/lib/core.js
var import_core = __toESM(require("highlight.js/lib/core"), 1);
init_fault();
var own = {}.hasOwnProperty, defaultPrefix = "hljs-";
function highlight(language2, value2, options = {}) {
  let prefix = options.prefix;
  if (typeof language2 != "string")
    throw fault("Expected `string` for name, got `%s`", language2);
  if (!import_core.default.getLanguage(language2))
    throw fault("Unknown language: `%s` is not registered", language2);
  if (typeof value2 != "string")
    throw fault("Expected `string` for value, got `%s`", value2);
  prefix == null && (prefix = defaultPrefix), import_core.default.configure({ __emitter: HastEmitter, classPrefix: prefix });
  let result = (
    /** @type {HighlightResult & {_emitter: HastEmitter}} */
    import_core.default.highlight(value2, { language: language2, ignoreIllegals: !0 })
  );
  if (import_core.default.configure({}), result.errorRaised)
    throw result.errorRaised;
  return result._emitter.root.data.language = result.language, result._emitter.root.data.relevance = result.relevance, result._emitter.root;
}
function highlightAuto(value2, options = {}) {
  let subset = options.subset || import_core.default.listLanguages(), prefix = options.prefix, index = -1, result = {
    type: "root",
    data: { language: null, relevance: 0 },
    children: []
  };
  if (prefix == null && (prefix = defaultPrefix), typeof value2 != "string")
    throw fault("Expected `string` for value, got `%s`", value2);
  for (; ++index < subset.length; ) {
    let name = subset[index];
    if (!import_core.default.getLanguage(name))
      continue;
    let current = highlight(name, value2, options);
    current.data.relevance > result.data.relevance && (result = current);
  }
  return result;
}
function registerLanguage(language2, syntax) {
  import_core.default.registerLanguage(language2, syntax);
}
var registerAlias = (
  /**
   * @type {(
   *   ((language: string, alias: string|Array<string>) => void) &
   *   ((aliases: Record<string, string|Array<string>>) => void)
   * )}
   */
  /**
   * @param {string|Record<string, string|Array<string>>} language
   * @param {string|Array<string>} [alias]
   * @returns {void}
   */
  function(language2, alias) {
    if (typeof language2 == "string")
      import_core.default.registerAliases(alias, { languageName: language2 });
    else {
      let key;
      for (key in language2)
        own.call(language2, key) && import_core.default.registerAliases(language2[key], { languageName: key });
    }
  }
);
function registered(aliasOrLanguage) {
  return Boolean(import_core.default.getLanguage(aliasOrLanguage));
}
function listLanguages() {
  return import_core.default.listLanguages();
}
var HastEmitter = class {
  /**
   * @param {HighlightOptions} options
   */
  constructor(options) {
    this.options = options, this.root = {
      type: "root",
      data: { language: null, relevance: 0 },
      children: []
    }, this.stack = [this.root];
  }
  /**
   * @param {string} value
   */
  addText(value2) {
    if (value2 === "")
      return;
    let current = this.stack[this.stack.length - 1], tail = current.children[current.children.length - 1];
    tail && tail.type === "text" ? tail.value += value2 : current.children.push({ type: "text", value: value2 });
  }
  /**
   *
   * @param {unknown} rawName
   */
  startScope(rawName) {
    this.openNode(String(rawName));
  }
  /**
   */
  endScope() {
    this.closeNode();
  }
  /**
   * @param {HastEmitter} other
   * @param {string} name
   */
  __addSublanguage(other, name) {
    let current = this.stack[this.stack.length - 1], results = other.root.children;
    name ? current.children.push({
      type: "element",
      tagName: "span",
      properties: { className: [name] },
      children: results
    }) : current.children.push(...results);
  }
  /**
   * @param {string} name
   */
  openNode(name) {
    let className = name.split(".").map((d, i) => i ? d + "_".repeat(i) : this.options.classPrefix + d), current = this.stack[this.stack.length - 1], child = {
      type: "element",
      tagName: "span",
      properties: { className },
      children: []
    };
    current.children.push(child), this.stack.push(child);
  }
  /**
   */
  closeNode() {
    this.stack.pop();
  }
  /**
   */
  finalize() {
  }
  /**
   */
  toHTML() {
    return "";
  }
}, lowlight = {
  highlight,
  highlightAuto,
  registerLanguage,
  registered,
  listLanguages,
  registerAlias
};

// node_modules/lowlight/lib/common.js
lowlight.registerLanguage("arduino", import_arduino.default);
lowlight.registerLanguage("bash", import_bash.default);
lowlight.registerLanguage("c", import_c.default);
lowlight.registerLanguage("cpp", import_cpp.default);
lowlight.registerLanguage("csharp", import_csharp.default);
lowlight.registerLanguage("css", import_css.default);
lowlight.registerLanguage("diff", import_diff.default);
lowlight.registerLanguage("go", import_go.default);
lowlight.registerLanguage("graphql", import_graphql.default);
lowlight.registerLanguage("ini", import_ini.default);
lowlight.registerLanguage("java", import_java.default);
lowlight.registerLanguage("javascript", import_javascript.default);
lowlight.registerLanguage("json", import_json.default);
lowlight.registerLanguage("kotlin", import_kotlin.default);
lowlight.registerLanguage("less", import_less.default);
lowlight.registerLanguage("lua", import_lua.default);
lowlight.registerLanguage("makefile", import_makefile.default);
lowlight.registerLanguage("markdown", import_markdown.default);
lowlight.registerLanguage("objectivec", import_objectivec.default);
lowlight.registerLanguage("perl", import_perl.default);
lowlight.registerLanguage("php", import_php.default);
lowlight.registerLanguage("php-template", import_php_template.default);
lowlight.registerLanguage("plaintext", import_plaintext.default);
lowlight.registerLanguage("python", import_python.default);
lowlight.registerLanguage("python-repl", import_python_repl.default);
lowlight.registerLanguage("r", import_r.default);
lowlight.registerLanguage("ruby", import_ruby.default);
lowlight.registerLanguage("rust", import_rust.default);
lowlight.registerLanguage("scss", import_scss.default);
lowlight.registerLanguage("shell", import_shell.default);
lowlight.registerLanguage("sql", import_sql.default);
lowlight.registerLanguage("swift", import_swift.default);
lowlight.registerLanguage("typescript", import_typescript.default);
lowlight.registerLanguage("vbnet", import_vbnet.default);
lowlight.registerLanguage("wasm", import_wasm.default);
lowlight.registerLanguage("xml", import_xml.default);
lowlight.registerLanguage("yaml", import_yaml.default);

// node_modules/hast-util-is-element/index.js
var convertElement = (
  /**
   * @type {(
   *   (<T extends Element>(test: T['tagName'] | TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  /**
   * @param {Test | null | undefined} [test]
   * @returns {AssertAnything}
   */
  function(test) {
    if (test == null)
      return element;
    if (typeof test == "string")
      return tagNameFactory(test);
    if (typeof test == "object")
      return anyFactory2(test);
    if (typeof test == "function")
      return castFactory2(test);
    throw new Error("Expected function, string, or array as test");
  }
);
function anyFactory2(tests) {
  let checks = [], index = -1;
  for (; ++index < tests.length; )
    checks[index] = convertElement(tests[index]);
  return castFactory2(any);
  function any(...parameters) {
    let index2 = -1;
    for (; ++index2 < checks.length; )
      if (checks[index2].call(this, ...parameters))
        return !0;
    return !1;
  }
}
function tagNameFactory(check) {
  return tagName;
  function tagName(node) {
    return element(node) && node.tagName === check;
  }
}
function castFactory2(check) {
  return assertion;
  function assertion(node, ...parameters) {
    return element(node) && Boolean(check.call(this, node, ...parameters));
  }
}
function element(node) {
  return Boolean(
    node && typeof node == "object" && // @ts-expect-error Looks like a node.
    node.type === "element" && // @ts-expect-error Looks like an element.
    typeof node.tagName == "string"
  );
}

// node_modules/unist-util-find-after/lib/index.js
var findAfter = (
  /**
   * @type {(
   *  (<T extends Node>(node: Parent, index: Node | number, test: import('unist-util-is').PredicateTest<T>) => T | null) &
   *  ((node: Parent, index: Node | number, test?: Test) => Node | null)
   * )}
   */
  /**
   * @param {Parent} parent
   * @param {Node | number} index
   * @param {Test} [test]
   * @returns {Node | null}
   */
  function(parent, index, test) {
    let is2 = convert(test);
    if (!parent || !parent.type || !parent.children)
      throw new Error("Expected parent node");
    if (typeof index == "number") {
      if (index < 0 || index === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if (index = parent.children.indexOf(index), index < 0)
      throw new Error("Expected child node or index");
    for (; ++index < parent.children.length; )
      if (is2(parent.children[index], index, parent))
        return parent.children[index];
    return null;
  }
);

// node_modules/hast-util-to-text/lib/index.js
var searchLineFeeds = /\n/g, searchTabOrSpaces = /[\t ]+/g, br = convertElement("br"), p = convertElement("p"), cell = convertElement(["th", "td"]), row = convertElement("tr"), notRendered = convertElement(
  [
    // List from: <https://html.spec.whatwg.org/#hidden-elements>
    "datalist",
    "head",
    "noembed",
    "noframes",
    "noscript",
    // Act as if we support scripting.
    "rp",
    "script",
    "style",
    "template",
    "title",
    // Hidden attribute.
    hidden,
    // From: <https://html.spec.whatwg.org/#flow-content-3>
    closedDialog
  ]
), blockOrCaption = convertElement([
  "address",
  // Flow content
  "article",
  // Sections and headings
  "aside",
  // Sections and headings
  "blockquote",
  // Flow content
  "body",
  // Page
  "caption",
  // `table-caption`
  "center",
  // Flow content (legacy)
  "dd",
  // Lists
  "dialog",
  // Flow content
  "dir",
  // Lists (legacy)
  "dl",
  // Lists
  "dt",
  // Lists
  "div",
  // Flow content
  "figure",
  // Flow content
  "figcaption",
  // Flow content
  "footer",
  // Flow content
  "form,",
  // Flow content
  "h1",
  // Sections and headings
  "h2",
  // Sections and headings
  "h3",
  // Sections and headings
  "h4",
  // Sections and headings
  "h5",
  // Sections and headings
  "h6",
  // Sections and headings
  "header",
  // Flow content
  "hgroup",
  // Sections and headings
  "hr",
  // Flow content
  "html",
  // Page
  "legend",
  // Flow content
  "listing",
  // Flow content (legacy)
  "main",
  // Flow content
  "menu",
  // Lists
  "nav",
  // Sections and headings
  "ol",
  // Lists
  "p",
  // Flow content
  "plaintext",
  // Flow content (legacy)
  "pre",
  // Flow content
  "section",
  // Sections and headings
  "ul",
  // Lists
  "xmp"
  // Flow content (legacy)
]);
function toText(tree, options = {}) {
  let children = "children" in tree ? tree.children : [], block = blockOrCaption(tree), whitespace = inferWhitespace(tree, {
    whitespace: options.whitespace || "normal",
    breakBefore: !1,
    breakAfter: !1
  }), results = [];
  (tree.type === "text" || tree.type === "comment") && results.push(
    ...collectText(tree, {
      whitespace,
      breakBefore: !0,
      breakAfter: !0
    })
  );
  let index = -1;
  for (; ++index < children.length; )
    results.push(
      ...innerTextCollection(children[index], tree, {
        whitespace,
        breakBefore: index ? void 0 : block,
        breakAfter: index < children.length - 1 ? br(children[index + 1]) : block
      })
    );
  let result = [], count;
  for (index = -1; ++index < results.length; ) {
    let value2 = results[index];
    typeof value2 == "number" ? count !== void 0 && value2 > count && (count = value2) : value2 && (count !== void 0 && count > -1 && result.push(`
`.repeat(count) || " "), count = -1, result.push(value2));
  }
  return result.join("");
}
function innerTextCollection(node, parent, info) {
  return node.type === "element" ? collectElement(node, parent, info) : node.type === "text" ? info.whitespace === "normal" ? collectText(node, info) : collectPreText(node) : [];
}
function collectElement(node, parent, info) {
  let whitespace = inferWhitespace(node, info), children = node.children || [], index = -1, items = [];
  if (notRendered(node))
    return items;
  let prefix, suffix;
  for (br(node) || row(node) && findAfter(parent, node, row) ? suffix = `
` : p(node) ? (prefix = 2, suffix = 2) : blockOrCaption(node) && (prefix = 1, suffix = 1); ++index < children.length; )
    items = items.concat(
      innerTextCollection(children[index], node, {
        whitespace,
        breakBefore: index ? void 0 : prefix,
        breakAfter: index < children.length - 1 ? br(children[index + 1]) : suffix
      })
    );
  return cell(node) && findAfter(parent, node, cell) && items.push("	"), prefix && items.unshift(prefix), suffix && items.push(suffix), items;
}
function collectText(node, info) {
  let value2 = String(node.value), lines = [], result = [], start = 0;
  for (; start <= value2.length; ) {
    searchLineFeeds.lastIndex = start;
    let match = searchLineFeeds.exec(value2), end = match && "index" in match ? match.index : value2.length;
    lines.push(
      // Any sequence of collapsible spaces and tabs immediately preceding or
      // following a segment break is removed.
      trimAndCollapseSpacesAndTabs(
        // […] ignoring bidi formatting characters (characters with the
        // Bidi_Control property [UAX9]: ALM, LTR, RTL, LRE-RLO, LRI-PDI) as if
        // they were not there.
        value2.slice(start, end).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        start === 0 ? info.breakBefore : !0,
        end === value2.length ? info.breakAfter : !0
      )
    ), start = end + 1;
  }
  let index = -1, join;
  for (; ++index < lines.length; )
    lines[index].charCodeAt(lines[index].length - 1) === 8203 || index < lines.length - 1 && lines[index + 1].charCodeAt(0) === 8203 ? (result.push(lines[index]), join = void 0) : lines[index] ? (typeof join == "number" && result.push(join), result.push(lines[index]), join = 0) : (index === 0 || index === lines.length - 1) && result.push(0);
  return result;
}
function collectPreText(node) {
  return [String(node.value)];
}
function trimAndCollapseSpacesAndTabs(value2, breakBefore, breakAfter) {
  let result = [], start = 0, end;
  for (; start < value2.length; ) {
    searchTabOrSpaces.lastIndex = start;
    let match = searchTabOrSpaces.exec(value2);
    end = match ? match.index : value2.length, !start && !end && match && !breakBefore && result.push(""), start !== end && result.push(value2.slice(start, end)), start = match ? end + match[0].length : end;
  }
  return start !== end && !breakAfter && result.push(""), result.join(" ");
}
function inferWhitespace(node, info) {
  if (node.type === "element") {
    let props = node.properties || {};
    switch (node.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return props.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return props.noWrap ? "nowrap" : info.whitespace;
      case "textarea":
        return "pre-wrap";
      default:
    }
  }
  return info.whitespace;
}
function hidden(node) {
  return Boolean((node.properties || {}).hidden);
}
function closedDialog(node) {
  return node.tagName === "dialog" && !(node.properties || {}).open;
}

// node_modules/rehype-highlight/lib/index.js
var own2 = {}.hasOwnProperty;
function rehypeHighlight(options = {}) {
  let { aliases, languages, prefix, plainText, ignoreMissing, subset, detect } = options, name = "hljs";
  if (aliases && lowlight.registerAlias(aliases), languages) {
    let key;
    for (key in languages)
      own2.call(languages, key) && lowlight.registerLanguage(key, languages[key]);
  }
  if (prefix) {
    let pos = prefix.indexOf("-");
    name = pos > -1 ? prefix.slice(0, pos) : prefix;
  }
  return (tree, file) => {
    visit(tree, "element", (node, _, givenParent) => {
      let parent = (
        /** @type {Node?} */
        givenParent
      );
      if (!parent || !("tagName" in parent) || parent.tagName !== "pre" || node.tagName !== "code" || !node.properties)
        return;
      let lang = language(node);
      if (lang === !1 || !lang && !detect || lang && plainText && plainText.includes(lang))
        return;
      Array.isArray(node.properties.className) || (node.properties.className = []), node.properties.className.includes(name) || node.properties.className.unshift(name);
      let result;
      try {
        result = lang ? lowlight.highlight(lang, toText(parent), { prefix }) : lowlight.highlightAuto(toText(parent), { prefix, subset });
      } catch (error) {
        let exception = (
          /** @type {Error} */
          error
        );
        (!ignoreMissing || !/Unknown language/.test(exception.message)) && file.fail(exception, node, "rehype-highlight:missing-language");
        return;
      }
      !lang && result.data.language && node.properties.className.push("language-" + result.data.language), Array.isArray(result.children) && result.children.length > 0 && (node.children = result.children);
    });
  };
}
function language(node) {
  let className = node.properties && node.properties.className, index = -1;
  if (Array.isArray(className))
    for (; ++index < className.length; ) {
      let value2 = String(className[index]);
      if (value2 === "no-highlight" || value2 === "nohighlight")
        return !1;
      if (value2.slice(0, 5) === "lang-")
        return value2.slice(5);
      if (value2.slice(0, 9) === "language-")
        return value2.slice(9);
    }
}

// app/util/mdx.server.ts
var import_mdx_bundler = __toESM(require_dist2());
async function getMdxContent(slug) {
  let pathToContent = `/content/posts/${slug}/index.mdx`, dir = import_path.default.dirname(pathToContent);
  return (0, import_mdx_bundler.bundleMDX)({
    file: import_path.default.join(process.cwd(), pathToContent),
    cwd: import_path.default.join(process.cwd(), dir),
    mdxOptions: (options) => (options.remarkPlugins = [
      ...options.remarkPlugins ?? [],
      remark_mdx_images_default
    ], options.rehypePlugins = [rehypeHighlight], options),
    esbuildOptions: (options) => (options.loader = {
      ...options.loader,
      ".png": "dataurl",
      ".jpg": "dataurl",
      ".gif": "dataurl"
    }, options)
  });
}

// app/routes/blog.$slug.tsx
var import_client = __toESM(require_client2()), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
async function loader({ params }) {
  if (!params.slug)
    throw new Error("Slug not found");
  let { code, frontmatter: frontmatter2 } = await getMdxContent(params.slug);
  return { code, frontmatter: frontmatter2 };
}
function BlogPostPage() {
  let { code } = (0, import_react3.useLoaderData)(), Component = (0, import_react4.useMemo)(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("article", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Component, {}, void 0, !1, {
    fileName: "app/routes/blog.$slug.tsx",
    lineNumber: 23,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.$slug.tsx",
    lineNumber: 22,
    columnNumber: 3
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          children: "Deep Dive Jokes App Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_pages.tsx
var pages_exports = {};
__export(pages_exports, {
  default: () => PagesLayout
});
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function PagesLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
    fileName: "app/routes/_pages.tsx",
    lineNumber: 6,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_pages.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => BlogLayout,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function loader2({ params }) {
  return params.slug ? null : (0, import_node2.redirect)("/");
}
function BlogLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "the layout" }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 15,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 16,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_pages.about": {
    id: "routes/_pages.about",
    parentId: "routes/_pages",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: pages_about_exports
  },
  "routes/blog.$slug": {
    id: "routes/blog.$slug",
    parentId: "routes/blog",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_slug_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_pages": {
    id: "routes/_pages",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: pages_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=server.js.map
