'use strict';

{
   const otherScores = [10,20];
   const scores = [80,90,40,70,...otherScores];
   console.log(scores);

   function sum(a,b){
    console.log(a + b);
   }
// スプレット構文は関数の引数にもよく使われる

sum(...otherScores);

}

