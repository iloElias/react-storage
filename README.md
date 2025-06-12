# 🧠 use-storage-hooks

A small and extensible React hook library to persist state to **localStorage** or **sessionStorage**, with support for SSR-safe environments.

## 📦 Installation

```bash
npm install use-storage-hooks
# or
yarn add use-storage-hooks
```

## 🚀 Usage

Import and use the hooks directly in your React components:

```tsx
import { useLocalStorage, useSessionStorage } from "use-storage-hooks";

function Example() {
  const [name, setName, clearName] = useLocalStorage("username", "Guest");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={clearName}>Reset</button>
    </div>
  );
}
```

## 🧩 API Reference

### `useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>, () => void]`

Persist state to `localStorage`.

#### Parameters

- `key`: A unique key under which the value is stored.
- `initialValue`: The default value if none is found in storage.

---

### `useSessionStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>, () => void]`

Persist state to `sessionStorage`.

---

### `useStorage<T>(storage: Storage | null, key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>, () => void]`

Generic hook for handling storage manually.

#### Parameters

- `storage`: Either `window.localStorage` or `window.sessionStorage`.
- `key`: A unique key to store the value under.
- `initialValue`: The value to use if none exists in storage.

---

## 🧪 Testing

This library uses [Vitest](https://vitest.dev/) for testing.

```bash
npm test
```

Tests run automatically on every Pull Request via GitHub Actions.

---

## 🤝 Contributing

We welcome contributions!

- See [CONTRIBUTING.md](./CONTRIBUTING.md) for branch and commit conventions.
- See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) to understand our community expectations.
- To propose changes, open a PR following our [Pull Request Template](./.github/PULL_REQUEST_TEMPLATE.md).

---

## 🛡️ License

This project is licensed under the [MIT License](./LICENSE).

---

## 💡 Inspiration

This library was designed to provide a simple, flexible way to persist state across sessions while remaining SSR-compatible and fully type-safe.
