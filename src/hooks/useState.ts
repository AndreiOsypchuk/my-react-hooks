import { EVENT_QUEUE } from "../util/event_queue";

export function useState(initValue: any) {
  let currValue = initValue;
  const ownIndex = EVENT_QUEUE.currIndex;
  if (!Array.isArray(EVENT_QUEUE.events[ownIndex])) {
    console.log("init queue");
    EVENT_QUEUE.events[ownIndex] = [];
  }
  const setState = (input: any) => {
    EVENT_QUEUE.events[ownIndex].push(input);
  };
  const dispatch = (input: any) => {
    if (typeof input === "function") {
      currValue = input(currValue);
    } else {
      currValue = input;
    }
  };
  for (let i of EVENT_QUEUE.events[ownIndex]) {
    dispatch(i);
  }
  EVENT_QUEUE.events[ownIndex].length = 0;
  EVENT_QUEUE.events[ownIndex].push(currValue);
  EVENT_QUEUE.currIndex++;
  return [currValue, setState];
}
