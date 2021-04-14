import {bubbleSort} from "./bubblesort";
import {mergeSort} from "./mergesort";
import {Solver} from "./solver";

const mySolver = new Solver([2, 5, 4, 8, 1, 9, 7], new bubbleSort());
mySolver.logic();

mySolver.setStrategy(new mergeSort());
mySolver.logic();
