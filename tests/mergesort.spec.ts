import 'mocha';
import {expect} from 'chai';
import {mergeSort} from "../src/mergesort";

let data = [2, 5, 4, 8, 1, 9, 7];
let mSort = new mergeSort();

describe('Merge Sort tests', () => {
  it('Order an array using merge sort method', () => {
     expect(mSort.execute(data)).to.be.eql([1, 2, 4, 5, 7, 8, 9]);
  });
});