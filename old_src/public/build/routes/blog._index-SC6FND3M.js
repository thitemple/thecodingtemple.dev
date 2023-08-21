import {
  require_post,
  useTypedLoaderData
} from "/build/_shared/chunk-CS5SS3NJ.js";
import {
  OutlineLink,
  PostMeta,
  Title,
  articles_default,
  clsx
} from "/build/_shared/chunk-NIVO5WLF.js";
import {
  Link
} from "/build/_shared/chunk-TX27HHCQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NRH5LTJ7.js";
import {
  createHotContext
} from "/build/_shared/chunk-K42DHKRC.js";
import "/build/_shared/chunk-K6PKGSTD.js";
import "/build/_shared/chunk-O4OKU2LD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/blog._index.tsx
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog._index.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.7322";
}
function ArticleCard({
  post,
  featured
}) {
  const shouldShowBanner = post.banner && !featured;
  const hasFeaturedBanner = post.banner && featured;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: clsx("flex flex-col gap-x-6 gap-y-4 py-4 md:rounded-md md:border md:border-slate-200 md:p-6 md:py-8 dark:md:border-pink-300/40 lg:px-8", {
    "lg:first:col-span-2": featured
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blog/${post.slug}`, className: " lg:mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-heading text-2xl text-slate-700 dark:text-slate-200", children: post.frontmatter.title }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 56,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500 dark:text-slate-400 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostMeta, { date: post.frontmatter.date, readTime: post.readTime }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 61,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 60,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 54,
      columnNumber: 4
    }, this),
    hasFeaturedBanner && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: post.banner, alt: `Banner for ${post.frontmatter.title}`, className: "max-h-60 w-full object-none object-center" }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 64,
      columnNumber: 26
    }, this),
    shouldShowBanner && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: post.banner, alt: `Thumbnail for ${post.frontmatter.title}`, className: "aspect-auto object-cover opacity-90 lg:pr-4" }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 65,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex-1 text-slate-600 dark:text-slate-300 lg:mt-4", children: post.frontmatter.summary }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 66,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "md:self-center lg:self-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OutlineLink, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 71,
      columnNumber: 8
    }, this) }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 70,
      columnNumber: 24
    }, this), to: `/blog/${post.slug}`, className: "md:px-12 md:py-3", children: "Read more" }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 70,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 69,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_c = ArticleCard;
function BlogPage() {
  _s();
  const data = useTypedLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grid gap-4 px-4 md:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "hidden gap-x-4 lg:flex lg:py-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { className: "flex flex-1 items-center", children: "My latest articles, what's on my mind lately" }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 84,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: articles_default, alt: "Blog articles cover", className: "hidden max-w-xs flex-1 self-end rounded-full lg:block" }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 87,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 83,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:gap-6 lg:grid-cols-2 lg:grid-rows-3", children: data.posts.map((post, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArticleCard, { post, featured: data.currentPage === 1 && idx === 0 }, post.slug, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 90,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 89,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "aria-disabled": !data.hasPreviousPage, to: data.hasPreviousPage ? `/blog?page=${data.previousPage}` : "", className: clsx("flex items-center text-fuchsia-500 hover:underline dark:text-slate-300", {
        "cursor-not-allowed text-slate-500  hover:no-underline dark:text-slate-500": !data.hasPreviousPage
      }), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "mr-3 h-auto w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 98,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 97,
          columnNumber: 8
        }, this),
        "Previous"
      ] }, void 0, true, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 93,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "aria-disabled": !data.hasNextPage, to: data.hasNextPage ? `/blog?page=${data.nextPage}` : "", className: clsx("flex items-center text-fuchsia-500 hover:underline dark:text-slate-300", {
        "cursor-not-allowed hover:no-underline dark:text-slate-500": !data.hasNextPage
      }), children: [
        "Next",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "ml-3 h-auto w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 108,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 104,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 103,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 92,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_s(BlogPage, "wIi7om0lxnZWRAvgqQHdSnyQkjE=", false, function() {
  return [useTypedLoaderData];
});
_c2 = BlogPage;
var _c;
var _c2;
$RefreshReg$(_c, "ArticleCard");
$RefreshReg$(_c2, "BlogPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BlogPage as default
};
//# sourceMappingURL=/build/routes/blog._index-SC6FND3M.js.map
