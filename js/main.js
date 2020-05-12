'use strict';

{
   const scores = [10,3,9];
   let sum = 0;

   scores.forEach(score => {
       sum += score;
   });

   const avg = sum/ scores.length;

//    console.log(sum);
//    console.log(avg);

console.log(Math.floor(avg));　//小数点以下切り捨て
console.log(Math.ceil(avg));　//小数点以下切り上げ
console.log(Math.round(avg)); //四捨五入
console.log(avg.toFixed(3)); 　//指定した小数点まで

console.log( Math.random());


}
