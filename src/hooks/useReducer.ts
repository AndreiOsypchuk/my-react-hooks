import { useState } from "./";

export function useReducer(reducer: Function, initialState: any) {
  const [state, setState] = useState(initialState);
  const dispatch = (action: any) => {
    setState((s: any) => reducer(action, s));
  };

  return [state, dispatch];
}
