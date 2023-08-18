import {
  OutlineLink,
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
import "/build/_shared/chunk-O4OKU2LD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/courses.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/courses.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/courses.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.8037";
}
function CourseCard({
  title,
  image,
  description,
  url
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid gap-4 overflow-hidden md:rounded-md md:border md:border-slate-200 md:p-6 dark:md:border-pink-300/40", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-heading text-xl", children: title }, void 0, false, {
      fileName: "app/routes/courses.tsx",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image, alt: title, className: "mx-auto block w-full max-w-lg" }, void 0, false, {
      fileName: "app/routes/courses.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: description }, void 0, false, {
      fileName: "app/routes/courses.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OutlineLink, { to: url, icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" }, void 0, false, {
      fileName: "app/routes/courses.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/courses.tsx",
      lineNumber: 32,
      columnNumber: 32
    }, this), children: "Enroll" }, void 0, false, {
      fileName: "app/routes/courses.tsx",
      lineNumber: 32,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/courses.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = CourseCard;
function CoursesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "grid gap-4 px-4 md:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Courses" }, void 0, false, {
      fileName: "app/routes/courses.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-600 dark:text-slate-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "I have in the past produced a few courses for Pluralsight. You can find them below:" }, void 0, false, {
        fileName: "app/routes/courses.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:grid lg:grid-cols-2 lg:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CourseCard, { title: "Getting the Most from the TypeScript Compiler", url: "https://app.pluralsight.com/library/courses/typescript-compiler/table-of-contents", image: "https://res.cloudinary.com/duacbnsfa/image/upload/f_auto,q_auto/v1/courses/h7akqj3ee5gbmj213r8f", description: "This course, Getting the Most from the TypeScript Compiler, will teach you advanced techniques of TypeScript, how to rely on the compiler to avoid errors, how to have rapid feedback, and how to improve the code maintainability." }, void 0, false, {
          fileName: "app/routes/courses.tsx",
          lineNumber: 49,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CourseCard, { title: "Writing Functional JavaScript Using Ramda", url: "https://app.pluralsight.com/library/courses/javascript-ramda-functional/table-of-contents", image: "https://res.cloudinary.com/duacbnsfa/image/upload/f_auto,q_auto/v1/courses/eodpah2za5edc0l6dxan", description: "This course will introduce you to the basics of functional programming in JavaScript including what pure functions are, currying, composition, and how to control the application flow in a functional way." }, void 0, false, {
          fileName: "app/routes/courses.tsx",
          lineNumber: 50,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/courses.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/courses.tsx",
      lineNumber: 43,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/courses.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c2 = CoursesPage;
var _c;
var _c2;
$RefreshReg$(_c, "CourseCard");
$RefreshReg$(_c2, "CoursesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CoursesPage as default
};
//# sourceMappingURL=/build/routes/courses-XYJ4SJPH.js.map
