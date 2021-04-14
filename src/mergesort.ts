import {Strategy} from "./strategy";

export class bubbleSort implements Strategy {
  constructor() {}
  execute(data: number[]): number[] {
    if (data.length <= 1) {
      return data;
    }

    const middle = Math.floor(data.length / 2);
    const left = data.slice(0, middle);
  const right = data.slice(middle);
    return data;
  }
}