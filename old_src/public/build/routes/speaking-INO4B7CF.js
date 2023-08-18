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

// app/routes/speaking.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/speaking.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/speaking.tsx"
  );
  import.meta.hot.lastModified = "1689861290787.854";
}
function SpeakingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Speaking" }, void 0, false, {
    fileName: "app/routes/speaking.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = SpeakingPage;
var _c;
$RefreshReg$(_c, "SpeakingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SpeakingPage as default
};
//# sourceMappingURL=/build/routes/speaking-INO4B7CF.js.map
