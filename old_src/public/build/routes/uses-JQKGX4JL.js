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

// app/routes/uses.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/uses.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/uses.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.9048";
}
function UsesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Uses" }, void 0, false, {
    fileName: "app/routes/uses.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = UsesPage;
var _c;
$RefreshReg$(_c, "UsesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UsesPage as default
};
//# sourceMappingURL=/build/routes/uses-JQKGX4JL.js.map
