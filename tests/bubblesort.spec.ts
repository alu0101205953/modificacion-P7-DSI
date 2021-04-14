import 'mocha';
import {expect} from 'chai';
import {bubbleSort} from "../src/bubblesort";

let data = [2, 5, 4, 8, 1, 9, 7];
let bSort = new bubbleSort();

describe('Bubble Sort tests', () => {
  it('Order an array using bubble sort method', () => {
     expect(bSort.execute(data).toString).to.be.equal([1, 2, 4, 5, 7, 8, 9].toString);
  });
});