'use strict';
// forsach

{
   const prices = [180,190,200];
//    const updetaPrices = prices.map( (price) => {
//    return price + 20;}

// 配列になんらかの処理をしたいときはmap();を使う

const updetaPrices = prices.map(price => price + 20);
console.log(updetaPrices);


}

