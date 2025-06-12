declare function useStorage<T>(storage: Storage | null, key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>, () => void];

declare const useLocalStorage: <T>(key: string, initialValue: T) => [T, React.Dispatch<React.SetStateAction<T>>, () => void];

declare const useSessionStorage: <T>(key: string, initialValue: T) => [T, React.Dispatch<React.SetStateAction<T>>, () => void];

export { useLocalStorage, useSessionStorage, useStorage };
