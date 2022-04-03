import { useState } from "react";

interface SetDataType<T> {
  state: Set<T>;
  has: (data: T) => boolean;
  add: (data: T) => void;
  clear: () => void;
  remove: (data: T) => void;
}

function useSetData<T>() {
  const [state, setState] = useState<Set<T>>(new Set());

  const has = (data: T) => state.has(data);

  const add = (data: T) => setState((prev) => new Set(prev).add(data));

  const clear = () => setState(new Set());

  const remove = (data: T) =>
    setState((prev) => {
      const set = new Set(prev);
      set.delete(data);
      return set;
    });

  return {
    add,
    clear,
    has,
    remove,
    state,
  };
}

export { type SetDataType, useSetData };
