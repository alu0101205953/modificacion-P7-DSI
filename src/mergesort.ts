import {Strategy} from "./strategy";

export class mergeSort implements Strategy {
  constructor() {}
  merger(left: number[], right: number[]): number[] {

    const arr: number[] = [];
  
    while(left.length && right.length){
      if(left[0] < right [0]){
        arr.push(left.shift())
      }else{
        arr.push(right.shift())
      }
    }
  
    return [...arr, ...left, ...right];
  }

  execute(data: number[]): number[] {
    if(data.length < 2){
      return data  // it means we no longer divide the data
                    // into smaller chunks
    }

    const half: number = Math.floor(data.length / 2);
    const left: number[] = data.splice( 0,half ); //left part of  the data
  
    return this.merger( mergeSort( left ), mergeSort( data ) );
  }