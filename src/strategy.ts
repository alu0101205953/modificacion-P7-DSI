/**
 * Interfeca that implements a sort method
 * @function execute A sorting method
 */
export interface Strategy {
  execute(data: number[]): number[];
}
