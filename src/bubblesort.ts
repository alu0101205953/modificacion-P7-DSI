import {Strategy} from "./strategy";

/**
 * Class that implements the bubble sort algorithm
 */
export class bubbleSort implements Strategy {
  constructor() {}

  /**
   * Main method to order
   * @param data Unsorted array
   * @returns The ordered array
   */
  execute(data: number[]): number[] {
    let length = data.length;
    for (let i = 0; i < length; i++) {
      for(let j = 0; j < length - i - 1; j++){
        if (data[j] > data[j + 1]) { // swap
          let temp = data[j];
          data[j] = data[j+1];
          data[j + 1] = temp;
        }
        console.log(data);
      }
    }
    return data;
  }
}