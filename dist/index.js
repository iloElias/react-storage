"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  useLocalStorage: () => useLocalStorage,
  useSessionStorage: () => useSessionStorage,
  useStorage: () => useStorage
});
module.exports = __toCommonJS(index_exports);

// src/use-storage.ts
var import_react = require("react");
function parseStoredValue(value, initialValue) {
  if (value === null) {
    return initialValue;
  }
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
function useStorage(storage, key, initialValue) {
  const [storedValue, setStoredValue] = (0, import_react.useState)(() => {
    if (!storage) return initialValue;
    const item = storage.getItem(key);
    return parseStoredValue(item, initialValue);
  });
  (0, import_react.useEffect)(() => {
    if (!storage) return;
    try {
      storage.setItem(key, JSON.stringify(storedValue));
    } catch {
    }
  }, [key, storedValue, storage]);
  (0, import_react.useEffect)(() => {
    if (!storage) return;
    const handleStorage = (e) => {
      if (e.storageArea === storage && e.key === key) {
        setStoredValue(parseStoredValue(e.newValue, initialValue));
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [key, storage, initialValue]);
  const removeItem = (0, import_react.useCallback)(() => {
    if (storage) {
      try {
        storage.removeItem(key);
      } catch {
      }
    }
    setStoredValue(initialValue);
  }, [key, storage, initialValue]);
  return [storedValue, setStoredValue, removeItem];
}

// src/use-local-storage.ts
var useLocalStorage = (key, initialValue) => {
  const storage = typeof window !== "undefined" ? window.localStorage : null;
  return useStorage(storage, key, initialValue);
};

// src/use-session-storage.ts
var useSessionStorage = (key, initialValue) => {
  const storage = typeof window !== "undefined" ? window.sessionStorage : null;
  return useStorage(storage, key, initialValue);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useLocalStorage,
  useSessionStorage,
  useStorage
});
