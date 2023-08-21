import {
  Link,
  NavLink
} from "/build/_shared/chunk-TX27HHCQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NRH5LTJ7.js";
import {
  createHotContext
} from "/build/_shared/chunk-K42DHKRC.js";
import {
  require_react
} from "/build/_shared/chunk-O4OKU2LD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// app/components/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1689861290785.9963";
}
function FooterLink({
  to,
  label
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to, className: ({
    isActive
  }) => {
    return clsx("text-slate-700 hover:text-violet-500 hover:underline dark:text-slate-200 dark:hover:text-pink-300", {
      "cursor-default text-slate-400 hover:text-slate-400 hover:no-underline": isActive
    });
  }, end: true, children: label }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 28,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = FooterLink;
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex flex-col items-center gap-6 bg-slate-200 py-6 dark:bg-violet-500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-wrap justify-center gap-6 px-6 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterLink, { to: "/", label: "Home" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterLink, { to: "/blog", label: "Blog" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterLink, { to: "/courses", label: "Courses" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterLink, { to: "/about", label: "About" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-500 dark:text-slate-400", children: "The Coding Temple \xA9 2023" }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 50,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c2 = Footer;
var _c;
var _c2;
$RefreshReg$(_c, "FooterLink");
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/assets/images/articles.png
var articles_default = "/build/_assets/articles-XRMRBZTS.png";

// app/assets/images/brand/logo-dark-mode.svg
var logo_dark_mode_default = "/build/_assets/logo-dark-mode-DA42VZWA.svg";

// app/assets/images/brand/logo-transparent.svg
var logo_transparent_default = "/build/_assets/logo-transparent-RAG7E3Y4.svg";

// app/assets/images/brand/symbol-dark-mode.svg
var symbol_dark_mode_default = "/build/_assets/symbol-dark-mode-4JVVLEYO.svg";

// app/assets/images/brand/symbol-transparent.svg
var symbol_transparent_default = "/build/_assets/symbol-transparent-STZQOOFB.svg";

// app/assets/images/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/assets/images/index.ts"
  );
  import.meta.hot.lastModified = "1689861290785.5488";
}

// app/components/Nav/Nav.tsx
var import_react6 = __toESM(require_react());

// app/components/Nav/DesktopNavLink.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Nav/DesktopNavLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Nav/DesktopNavLink.tsx"
  );
  import.meta.hot.lastModified = "1689861290786.0896";
}
function DesktopNavLink({
  to,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-full items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to, className: ({
    isActive
  }) => {
    return clsx("transition-all duration-300 ease-in-out hover:text-violet-500 hover:underline dark:hover:text-pink-300", {
      "cursor-default text-slate-500 no-underline hover:text-slate-500 hover:no-underline dark:text-slate-400 dark:hover:text-slate-400": isActive
    });
  }, end: true, children }, void 0, false, {
    fileName: "app/components/Nav/DesktopNavLink.tsx",
    lineNumber: 28,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/Nav/DesktopNavLink.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c3 = DesktopNavLink;
var _c3;
$RefreshReg$(_c3, "DesktopNavLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Nav/MobileNav.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Nav/MobileNav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Nav/MobileNav.tsx"
  );
  import.meta.hot.lastModified = "1689861290786.1616";
}
function MobileNavItem({
  to,
  children,
  autoFocus
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "border-b border-slate-200 py-4 last:border-0 focus:bg-slate-300 dark:focus:bg-violet-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to, autoFocus, children }, void 0, false, {
    fileName: "app/components/Nav/MobileNav.tsx",
    lineNumber: 30,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/Nav/MobileNav.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c4 = MobileNavItem;
function MobileNav({
  open = false,
  onClose
}) {
  _s();
  const ref = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (ref.current && open && !ref.current.open) {
      ref.current.showModal();
      ref.current.focus();
    }
    if (ref.current?.open && !open) {
      ref.current.close();
    }
  }, [ref.current, open]);
  (0, import_react4.useEffect)(() => {
    function handleCancel() {
      onClose();
    }
    ref.current?.addEventListener("cancel", handleCancel);
    return () => {
      ref.current?.removeEventListener("cancel", handleCancel);
    };
  }, []);
  function handleClick(e) {
    if (e.target.id !== "mobile-nav") {
      onClose();
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dialog", { className: "backdrop:bg-gray-900/50 z-50 w-5/6 rounded-2xl bg-slate-100 px-4 py-6 backdrop:backdrop-blur-sm dark:bg-violet-700", onClick: handleClick, ref, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "mobile-nav", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "flex justify-between text-slate-500 dark:text-slate-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Navigation" }, void 0, false, {
        fileName: "app/components/Nav/MobileNav.tsx",
        lineNumber: 68,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
        fileName: "app/components/Nav/MobileNav.tsx",
        lineNumber: 71,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/components/Nav/MobileNav.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/Nav/MobileNav.tsx",
        lineNumber: 69,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Nav/MobileNav.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "mt-6 flex flex-col text-lg text-slate-600 dark:text-slate-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MobileNavItem, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/components/Nav/MobileNav.tsx",
        lineNumber: 76,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MobileNavItem, { to: "/blog", autoFocus: true, children: "Blog" }, void 0, false, {
        fileName: "app/components/Nav/MobileNav.tsx",
        lineNumber: 77,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MobileNavItem, { to: "/courses", children: "Courses" }, void 0, false, {
        fileName: "app/components/Nav/MobileNav.tsx",
        lineNumber: 80,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MobileNavItem, { to: "/about", children: "About" }, void 0, false, {
        fileName: "app/components/Nav/MobileNav.tsx",
        lineNumber: 83,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Nav/MobileNav.tsx",
      lineNumber: 75,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Nav/MobileNav.tsx",
    lineNumber: 66,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/Nav/MobileNav.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_s(MobileNav, "lq1tzM4DdcBd9rchfALtCTAkzkA=");
_c22 = MobileNav;
var _c4;
var _c22;
$RefreshReg$(_c4, "MobileNavItem");
$RefreshReg$(_c22, "MobileNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Nav/Nav.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Nav/Nav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Nav/Nav.tsx"
  );
  import.meta.hot.lastModified = "1689861290786.2249";
}
function Nav() {
  _s2();
  const [mobileOpened, setMobileOpened] = (0, import_react6.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative flex gap-4 px-4 pb-4 pt-2 md:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: symbol_transparent_default, className: "w-10 dark:hidden lg:hidden" }, void 0, false, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: symbol_dark_mode_default, className: "hidden w-10 dark:block lg:hidden" }, void 0, false, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: logo_transparent_default, className: "hidden w-48 lg:block dark:lg:hidden" }, void 0, false, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: logo_dark_mode_default, className: "hidden w-48 dark:lg:block" }, void 0, false, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Nav/Nav.tsx",
        lineNumber: 33,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden w-full justify-end lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "flex items-center gap-4 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-600 shadow-md ring-1 ring-slate-300 dark:border-slate-400 dark:bg-violet-700 dark:text-slate-200 dark:ring-slate-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DesktopNavLink, { to: "/blog", children: "Blog" }, void 0, false, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 41,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DesktopNavLink, { to: "/courses", children: "Courses" }, void 0, false, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 42,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DesktopNavLink, { to: "/about", children: "About" }, void 0, false, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 45,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Nav/Nav.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/Nav/Nav.tsx",
        lineNumber: 39,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Nav/Nav.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 justify-end lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { title: "Toggle mobile menu", className: "group flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-violet-700 dark:text-slate-200 dark:shadow-slate-700 dark:ring-slate-300", onClick: () => setMobileOpened(true), children: [
        "Menu",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "ml-3 h-auto w-4 stroke-slate-500 backdrop:backdrop-blur-sm group-hover:stroke-slate-700 dark:group-hover:stroke-slate-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }, void 0, false, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 53,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Nav/Nav.tsx",
        lineNumber: 50,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileNav, { open: mobileOpened, onClose: () => setMobileOpened(false) }, void 0, false, {
        fileName: "app/components/Nav/Nav.tsx",
        lineNumber: 56,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Nav/Nav.tsx",
      lineNumber: 49,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Nav/Nav.tsx",
    lineNumber: 31,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/Nav/Nav.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s2(Nav, "PuztZbOzaULJwZcCmh2pVfAWmCg=");
_c5 = Nav;
var _c5;
$RefreshReg$(_c5, "Nav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Nav/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Nav/index.ts"
  );
  import.meta.hot.lastModified = "1689861290786.278";
}

// app/components/OutlineLink.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/OutlineLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/OutlineLink.tsx"
  );
  import.meta.hot.lastModified = "1689861290786.3398";
}
function OutlineLink({
  children,
  icon,
  to,
  className,
  disabled
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to, className: clsx("flex cursor-pointer justify-center rounded-lg border-2 border-fuchsia-500 bg-white px-4 py-2 uppercase text-fuchsia-500 shadow-md transition-colors duration-300 ease-in-out hover:border-pink-500 hover:bg-slate-100 hover:text-pink-500 dark:border-fuchsia-500 dark:bg-violet-700 dark:text-slate-200 dark:hover:bg-violet-500 dark:hover:text-slate-100", className ?? ""), "aria-disabled": disabled, children: [
    children,
    icon && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "ml-3 h-auto w-6", children: icon }, void 0, false, {
      fileName: "app/components/OutlineLink.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/OutlineLink.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c6 = OutlineLink;
var _c6;
$RefreshReg$(_c6, "OutlineLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/dateFormats.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/dateFormats.ts"
  );
  import.meta.hot.lastModified = "1689861290787.9954";
}
function formatDate(sourceDate) {
  const date = typeof sourceDate === "string" || typeof sourceDate === "number" ? new Date(sourceDate) : sourceDate;
  return new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }).format(
    date
  );
}

// app/components/PostMeta.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PostMeta.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PostMeta.tsx"
  );
  import.meta.hot.lastModified = "1689861290786.4707";
}
function PostMeta({
  date,
  readTime
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: formatDate(date) }, void 0, false, {
      fileName: "app/components/PostMeta.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    readTime && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      " ",
      "\u2022 ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: [
        readTime,
        " min read"
      ] }, void 0, true, {
        fileName: "app/components/PostMeta.tsx",
        lineNumber: 30,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PostMeta.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PostMeta.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c7 = PostMeta;
var _c7;
$RefreshReg$(_c7, "PostMeta");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Title.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Title.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Title.tsx"
  );
  import.meta.hot.lastModified = "1689861290786.5286";
}
function Title({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: clsx("w-full font-heading text-2xl text-slate-700 dark:text-slate-100 lg:text-3xl", className), children }, void 0, false, {
    fileName: "app/components/Title.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c8 = Title;
var _c8;
$RefreshReg$(_c8, "Title");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/index.ts"
  );
  import.meta.hot.lastModified = "1689861290786.5852";
}

export {
  clsx,
  Footer,
  articles_default,
  Nav,
  OutlineLink,
  PostMeta,
  Title
};
//# sourceMappingURL=/build/_shared/chunk-NIVO5WLF.js.map
