export const EVENT_QUEUE: EventQueue = { currIndex: 0, events: {} };
export interface EventQueue {
  currIndex: number;
  events: {
    [key: string]: any[];
  };
}
