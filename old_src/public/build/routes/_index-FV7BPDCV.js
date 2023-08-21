import {
  require_post,
  useTypedLoaderData
} from "/build/_shared/chunk-CS5SS3NJ.js";
import {
  OutlineLink,
  PostMeta,
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

// app/routes/_index/route.tsx
var import_post = __toESM(require_post());

// app/routes/_index/components/About.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index/components/About.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index/components/About.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.0562";
}
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grid px-4 py-8 md:px-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-heading text-2xl text-slate-700 dark:text-slate-200 lg:col-start-2", children: "About" }, void 0, false, {
      fileName: "app/routes/_index/components/About.tsx",
      lineNumber: 23,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://res.cloudinary.com/duacbnsfa/image/upload/f_auto,q_auto/nfhbzkqa7by6n6znan0s", alt: "Thiago Temple", className: "mt-6 h-32 w-32 content-center place-self-center rounded-full lg:row-span-2 lg:row-start-1 lg:mt-0 lg:h-64 lg:w-64" }, void 0, false, {
      fileName: "app/routes/_index/components/About.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-slate-600 dark:text-slate-300 lg:col-start-2", children: "As a software engineer based in Ottawa, Canada, I'm passionate about web and mobile technologies. I've always been captivated by the ever-evolving world of tech, and I love sharing my learning journey on my blog. When I'm not immersed in code, you'll find me enjoying board games, diving into a good book, or spending quality time with my family. It's all about balance!" }, void 0, false, {
      fileName: "app/routes/_index/components/About.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index/components/About.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = About;
var _c;
$RefreshReg$(_c, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/assets/images/kinaxis-logo.png
var kinaxis_logo_default = "/build/_assets/kinaxis-logo-LHQXBA3U.png";

// app/assets/images/shopify-logo.png
var shopify_logo_default = "/build/_assets/shopify-logo-TSIOHSL5.png";

// app/assets/images/sm-logo.png
var sm_logo_default = "/build/_assets/sm-logo-U54RCH2J.png";

// app/assets/images/wyhn-logo.png
var wyhn_logo_default = "/build/_assets/wyhn-logo-4MFFAMB7.png";

// app/routes/_index/components/Section.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index/components/Section.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index/components/Section.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.4646";
}
function Section({
  title,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: clsx("px-4 py-8 md:px-6 lg:px-8", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "font-heading text-2xl text-slate-700 dark:text-slate-200", children: title }, void 0, false, {
      fileName: "app/routes/_index/components/Section.tsx",
      lineNumber: 28,
      columnNumber: 4
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/routes/_index/components/Section.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c2 = Section;
var _c2;
$RefreshReg$(_c2, "Section");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index/components/Experience.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index/components/Experience.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index/components/Experience.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.1296";
}
function ExperienceItem({
  logo,
  company,
  position,
  date
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "flex justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: logo, className: "mr-2 w-11" }, void 0, false, {
      fileName: "app/routes/_index/components/Experience.tsx",
      lineNumber: 33,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-medium text-slate-600 dark:text-slate-200", children: company }, void 0, false, {
        fileName: "app/routes/_index/components/Experience.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-slate-500 dark:text-slate-300", children: position }, void 0, false, {
        fileName: "app/routes/_index/components/Experience.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index/components/Experience.tsx",
      lineNumber: 34,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-slate-500 dark:text-slate-300", children: date }, void 0, false, {
      fileName: "app/routes/_index/components/Experience.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_index/components/Experience.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index/components/Experience.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c3 = ExperienceItem;
function Experience() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Section, { title: "Experience", className: "lg:grid lg:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-6 text-slate-600 dark:text-slate-300 lg:col-start-1 lg:pr-4", children: "I'm a seasoned Staff Software Developer at Shopify, skilled in TypeScript, Elm, JavaScript, and React. With a career spanning over two decades, I've led impactful projects, pioneered the adoption of TypeScript at SurveyMonkey, and developed innovative web and mobile applications. I'm a tech-savvy problem solver and a relentless learner." }, void 0, false, {
      fileName: "app/routes/_index/components/Experience.tsx",
      lineNumber: 48,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "mt-6 flex flex-col items-stretch gap-6 lg:col-start-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExperienceItem, { logo: shopify_logo_default, company: "Shopify", position: "Staff Developer", date: "2022 - now" }, void 0, false, {
        fileName: "app/routes/_index/components/Experience.tsx",
        lineNumber: 56,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExperienceItem, { logo: sm_logo_default, company: "SurveyMonkey", position: "Senior Engineer", date: "2019 - 2022" }, void 0, false, {
        fileName: "app/routes/_index/components/Experience.tsx",
        lineNumber: 57,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExperienceItem, { logo: wyhn_logo_default, company: "Wyhn", position: "Senior Engineer", date: "2018 - 2018" }, void 0, false, {
        fileName: "app/routes/_index/components/Experience.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExperienceItem, { logo: kinaxis_logo_default, company: "Kinaxis", position: "Advisory Developer", date: "2017 - 2018" }, void 0, false, {
        fileName: "app/routes/_index/components/Experience.tsx",
        lineNumber: 59,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index/components/Experience.tsx",
      lineNumber: 55,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index/components/Experience.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_c22 = Experience;
var _c3;
var _c22;
$RefreshReg$(_c3, "ExperienceItem");
$RefreshReg$(_c22, "Experience");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index/components/Hero.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index/components/Hero.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index/components/Hero.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.191";
}
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "bg-gradient-to-b from-[#921D6403] to-[#921D6435] px-4 py-12 text-fuchsia-500 dark:from-violet-300 dark:to-violet-500/50 md:px-6 lg:px-8 lg:py-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "font-heading  text-2xl text-violet-500 dark:text-slate-100 lg:max-w-2xl lg:text-5xl lg:font-medium", children: "Hi, I'm Thiago Temple. I love building products, writing code and learning through it." }, void 0, false, {
      fileName: "app/routes/_index/components/Hero.tsx",
      lineNumber: 23,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "lg: mt-8 hidden max-w-2xl text-lg text-zinc-600 dark:text-slate-200 lg:block", children: "I'm a web-loving staff developer, driven by curiosity and a passion for learning. I'm eager to share my knowledge and always up for new challenges. With a friendly and open-minded approach, I embrace the ever-evolving world of web technologies, staying ahead of the game and inspiring others along the way." }, void 0, false, {
      fileName: "app/routes/_index/components/Hero.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index/components/Hero.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c4 = Hero;
var _c4;
$RefreshReg$(_c4, "Hero");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index/components/LatestArticle.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index/components/LatestArticle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index/components/LatestArticle.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.2751";
}
function LatestArticle({
  latestArticle,
  slug,
  readTime,
  banner
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "grid px-4 py-8 md:px-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr_auto_auto] lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/article/${slug}`, className: "lg:col-start-2 lg:mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "font-heading text-2xl text-slate-700 dark:text-slate-200", children: latestArticle.title }, void 0, false, {
      fileName: "app/routes/_index/components/LatestArticle.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_index/components/LatestArticle.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    banner && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: banner, alt: `Thumbnail for ${latestArticle.title}`, className: "mt-6 w-full object-cover opacity-90 lg:col-start-1 lg:row-span-5 lg:row-start-1 lg:pr-4" }, void 0, false, {
      fileName: "app/routes/_index/components/LatestArticle.tsx",
      lineNumber: 35,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-6 text-slate-600 dark:text-slate-300 lg:col-start-2 lg:row-span-2 lg:row-start-3 lg:mt-4", children: latestArticle.summary }, void 0, false, {
      fileName: "app/routes/_index/components/LatestArticle.tsx",
      lineNumber: 36,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-6 text-slate-400 lg:col-start-2 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PostMeta, { date: latestArticle.date, readTime }, void 0, false, {
      fileName: "app/routes/_index/components/LatestArticle.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_index/components/LatestArticle.tsx",
      lineNumber: 39,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-6 lg:col-start-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(OutlineLink, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }, void 0, false, {
      fileName: "app/routes/_index/components/LatestArticle.tsx",
      lineNumber: 44,
      columnNumber: 8
    }, this) }, void 0, false, {
      fileName: "app/routes/_index/components/LatestArticle.tsx",
      lineNumber: 43,
      columnNumber: 24
    }, this), to: `/blog/${slug}`, children: "Read more" }, void 0, false, {
      fileName: "app/routes/_index/components/LatestArticle.tsx",
      lineNumber: 43,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_index/components/LatestArticle.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index/components/LatestArticle.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c5 = LatestArticle;
var _c5;
$RefreshReg$(_c5, "LatestArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index/components/Passions.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index/components/Passions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index/components/Passions.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.4036";
}
function Passions() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "grid px-4 py-8 md:px-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "font-heading text-2xl text-slate-700 dark:text-slate-200 lg:col-start-1", children: "Passions" }, void 0, false, {
      fileName: "app/routes/_index/components/Passions.tsx",
      lineNumber: 23,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "https://res.cloudinary.com/duacbnsfa/image/upload/f_auto,q_auto/qj7mhjhxvw8uedb0jfni", alt: "Board game collection", className: "mt-6 self-start lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0" }, void 0, false, {
      fileName: "app/routes/_index/components/Passions.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-6 text-slate-600 dark:text-slate-300 lg:col-start-1 lg:pr-6", children: "Outside of the tech world, I have a deep love for board games and have been building a growing collection. I'm also a fan of various TV shows and always have at least one book on the go. But above all, spending time with my family is my favorite pastime. Life's all about enjoying these simple pleasures!" }, void 0, false, {
      fileName: "app/routes/_index/components/Passions.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index/components/Passions.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c6 = Passions;
var _c6;
$RefreshReg$(_c6, "Passions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index/route.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index/route.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.5288";
}
var meta = () => {
  return [{
    title: "The Coding Temple"
  }, {
    name: "description",
    content: "Hi, I'm Thiago Temple, a developer, geek and this is my site."
  }];
};
function Index() {
  _s();
  const {
    post
  } = useTypedLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col lg:gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Hero, {}, void 0, false, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 49,
      columnNumber: 4
    }, this),
    post && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LatestArticle, { latestArticle: post.frontmatter, readTime: post.readTime, slug: post.slug, banner: post.banner }, void 0, false, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Experience, {}, void 0, false, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 51,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(About, {}, void 0, false, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 52,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Passions, {}, void 0, false, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 53,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index/route.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s(Index, "f9C5Z2v+F8sBTmyKZtfcxc4KjMQ=", false, function() {
  return [useTypedLoaderData];
});
_c7 = Index;
var _c7;
$RefreshReg$(_c7, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-FV7BPDCV.js.map
