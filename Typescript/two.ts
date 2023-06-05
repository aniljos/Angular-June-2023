import {calcSum, calcMultiply} from './one.js';

console.log("in two.ts");

function process(){

    console.log("in process two.ts");
    calcSum(2, 3);
    calcMultiply(3,4);

}


export default process;