'use strict';
const functional = require('./index');
const compose = functional.compose;
const pipe = functional.pipe;
const clone = functional.clone;
const mixobj = functional.mixobj;
const mixfns = functional.mixfn;
const filterGT3 = functional.filter(i => i > 3);
const mapInc = functional.map(i => i*=3);
let array = [1, 2, 3, 4];

console.log(mapInc(array));

const incAndTakeEven = compose(filterGT3, mapInc);

console.log(incAndTakeEven(array));
