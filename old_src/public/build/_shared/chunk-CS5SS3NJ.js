import {
  useLoaderData
} from "/build/_shared/chunk-TX27HHCQ.js";
import {
  __commonJS
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/data/post.server
var require_post = __commonJS({
  "empty-module:~/data/post.server"(exports, module) {
    module.exports = {};
  }
});

// node_modules/.pnpm/remix-typedjson@0.1.7_@remix-run+react@1.19.0_@remix-run+server-runtime@1.19.0_react@18.2.0/node_modules/remix-typedjson/dist/esm/typedjson.js
function applyMeta(data, meta) {
  for (const key of Object.keys(meta)) {
    applyConversion(data, key.split("."), meta[key]);
  }
  return data;
  function applyConversion(data2, keys, type, depth = 0) {
    const key = keys[depth];
    if (depth < keys.length - 1) {
      applyConversion(data2[key], keys, type, depth + 1);
      return;
    }
    const value = data2[key];
    switch (type) {
      case "date":
        data2[key] = new Date(value);
        break;
      case "set":
        data2[key] = new Set(value);
        break;
      case "map":
        data2[key] = new Map(Object.entries(value));
        break;
      case "regexp":
        const match = /^\/(.*)\/([dgimsuy]*)$/.exec(value);
        if (match) {
          data2[key] = new RegExp(match[1], match[2]);
        } else {
          throw new Error(`Invalid regexp: ${value}`);
        }
        break;
      case "bigint":
        data2[key] = BigInt(value);
        break;
      case "undefined":
        data2[key] = void 0;
        break;
      case "infinity":
        data2[key] = Number.POSITIVE_INFINITY;
        break;
      case "-infinity":
        data2[key] = Number.NEGATIVE_INFINITY;
        break;
      case "nan":
        data2[key] = NaN;
        break;
      case "error":
        const err = new Error(value.message);
        err.name = value.name;
        err.stack = value.stack;
        data2[key] = err;
        break;
    }
  }
}

// node_modules/.pnpm/remix-typedjson@0.1.7_@remix-run+react@1.19.0_@remix-run+server-runtime@1.19.0_react@18.2.0/node_modules/remix-typedjson/dist/esm/remix.js
function useTypedLoaderData() {
  const data = useLoaderData();
  return deserializeRemix(data);
}
function deserializeRemix(data) {
  if (!data)
    return data;
  if (data.__obj__) {
    return data.__meta__ ? applyMeta(data.__obj__, data.__meta__) : data.__obj__;
  } else if (data.__meta__) {
    const meta = data.__meta__;
    delete data.__meta__;
    return applyMeta(data, meta);
  }
  return data;
}

export {
  useTypedLoaderData,
  require_post
};
//# sourceMappingURL=/build/_shared/chunk-CS5SS3NJ.js.map
