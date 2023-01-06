import { EVENT_QUEUE } from "./event_queue";
export const render = (c: Function[]) => {
  for (let f of c) f();
  EVENT_QUEUE.currIndex = 0;
};
