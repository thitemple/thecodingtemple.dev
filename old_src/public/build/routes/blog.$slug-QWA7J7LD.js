import {
  require_jsx_runtime
} from "/build/_shared/chunk-SE6AVHRO.js";
import {
  require_react_dom
} from "/build/_shared/chunk-H5ZE7JVG.js";
import {
  require_post,
  useTypedLoaderData
} from "/build/_shared/chunk-CS5SS3NJ.js";
import {
  PostMeta,
  Title
} from "/build/_shared/chunk-NIVO5WLF.js";
import "/build/_shared/chunk-TX27HHCQ.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/.pnpm/mdx-bundler@9.2.1_esbuild@0.18.14/node_modules/mdx-bundler/dist/client.js
var require_client = __commonJS({
  "node_modules/.pnpm/mdx-bundler@9.2.1_esbuild@0.18.14/node_modules/mdx-bundler/dist/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getMDXComponent = getMDXComponent2;
    exports.getMDXExport = getMDXExport;
    var React = _interopRequireWildcard(require_react());
    var _jsx_runtime = _interopRequireWildcard(require_jsx_runtime());
    var ReactDOM = _interopRequireWildcard(require_react_dom());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function getMDXComponent2(code, globals) {
      const mdxExport = getMDXExport(code, globals);
      return mdxExport.default;
    }
    function getMDXExport(code, globals) {
      const scope = {
        React,
        ReactDOM,
        _jsx_runtime,
        ...globals
      };
      const fn = new Function(...Object.keys(scope), code);
      return fn(...Object.values(scope));
    }
  }
});

// node_modules/.pnpm/mdx-bundler@9.2.1_esbuild@0.18.14/node_modules/mdx-bundler/client/index.js
var require_client2 = __commonJS({
  "node_modules/.pnpm/mdx-bundler@9.2.1_esbuild@0.18.14/node_modules/mdx-bundler/client/index.js"(exports, module) {
    module.exports = require_client();
  }
});

// app/routes/blog.$slug.tsx
var import_client = __toESM(require_client2());
var import_react = __toESM(require_react());

// app/assets/css/post.page.css
var post_page_default = "/build/_assets/post.page-7RMEZJSO.css";

// app/assets/css/prism-light.css
var prism_light_default = "/build/_assets/prism-light-2VTSCH5L.css";

// app/routes/blog.$slug.tsx
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog.$slug.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: "https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css",
  media: "(prefers-color-scheme: dark)"
}, {
  rel: "stylesheet",
  href: prism_light_default,
  media: "(prefers-color-scheme: light)"
}, {
  rel: "stylesheet",
  href: post_page_default
}];
var meta = (metaParams) => {
  return [{
    title: `${metaParams.data.frontmatter.title} - The Coding Temple`
  }];
};
function BlogPostPage() {
  _s();
  const {
    code,
    frontmatter,
    readTime,
    banner
  } = useTypedLoaderData();
  const Component = (0, import_react.useMemo)(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "article grid gap-4 px-4 md:gap-y-6 md:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { className: "mb-4 leading-10 underline decoration-violet-300 decoration-double decoration-4 underline-offset-8 dark:decoration-pink-500", children: frontmatter.title }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 75,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500 dark:text-slate-400 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostMeta, { date: frontmatter.date, readTime }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 79,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 74,
      columnNumber: 4
    }, this),
    banner && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: banner, alt: `Banner for ${frontmatter.title}`, className: "w-full object-cover" }, void 0, false, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 83,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 82,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-2 overflow-hidden dark:text-slate-200 md:gap-y-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, {}, void 0, false, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 88,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 87,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.$slug.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(BlogPostPage, "ECT+CN783TfJcHtHv7hJ3K84lIg=", false, function() {
  return [useTypedLoaderData];
});
_c = BlogPostPage;
var _c;
$RefreshReg$(_c, "BlogPostPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BlogPostPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog.$slug-QWA7J7LD.js.map
