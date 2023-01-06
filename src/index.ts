import { useReducer, useState } from "./hooks";
import { render } from "./util/render";
const ComponentWithUseState = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  setInput((i: string) => i + "hello ");
  setCount((c: any) => c + 1);
  setCount((c: any) => c + 1);
  setCount((c: any) => c + 1);
  setCount((c: any) => c + 1);
  setCount((c: any) => c + 1);
  setCount((c: any) => c + 1);
  console.log("count", count);
  console.log("input", input);
};
const AnotherComponentWithUseState = () => {
  const [isTrue, setIsTrue] = useState(false);
  setIsTrue(true);
  console.log("is true", isTrue);
};
const initState = {
  count: 0,
};

interface Action {
  type: string;
  payload?: any;
}
const rootReducer = (action: Action, state: any = initState) => {
  switch (action.type) {
    case "INC": {
      return { ...state, count: state.count + 1 };
    }
    case "DEC": {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};

const ComponentWithReducer = () => {
  const [state, dispatch] = useReducer(rootReducer, initState);

  dispatch({ type: "INC" });
  dispatch({ type: "INC" });
  dispatch({ type: "INC" });
  dispatch({ type: "INC" });
  console.log(state);
};

console.log("==========FIRST");
render([
  ComponentWithUseState,
  AnotherComponentWithUseState,
  ComponentWithReducer,
]);
console.log("==========SECOND");
render([
  ComponentWithUseState,
  AnotherComponentWithUseState,
  ComponentWithReducer,
]);
console.log("==========THIRD");
render([ComponentWithUseState, AnotherComponentWithUseState]);
console.log("==========FOURTH");
render([ComponentWithUseState, AnotherComponentWithUseState]);
