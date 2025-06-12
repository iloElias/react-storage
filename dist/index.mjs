// src/use-storage.ts
import { useState, useEffect, useCallback } from "react";
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
  const [storedValue, setStoredValue] = useState(() => {
    if (!storage) return initialValue;
    const item = storage.getItem(key);
    return parseStoredValue(item, initialValue);
  });
  useEffect(() => {
    if (!storage) return;
    try {
      storage.setItem(key, JSON.stringify(storedValue));
    } catch {
    }
  }, [key, storedValue, storage]);
  useEffect(() => {
    if (!storage) return;
    const handleStorage = (e) => {
      if (e.storageArea === storage && e.key === key) {
        setStoredValue(parseStoredValue(e.newValue, initialValue));
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [key, storage, initialValue]);
  const removeItem = useCallback(() => {
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
export {
  useLocalStorage,
  useSessionStorage,
  useStorage
};
