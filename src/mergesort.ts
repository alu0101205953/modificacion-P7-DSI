import {Strategy} from "./strategy";

export class mergeSort implements Strategy {
  constructor() {}
  merge(left: number[], right: number[]): number[] {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }

  execute(data: number[]): number[] {
    if (data.length <= 1) {
      return data;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(data.length / 2);

    // This is where we will be dividing the array into left and right
    const left = data.slice(0, middle);
    const right = data.slice(middle);

    // Using recursion to combine the left and right
    return this.merge(
      this.execute(left), this.execute(right));
  }
}