'use strict';

{

 let i = 0;

 function showTime() {
    console.log(new Date());
    const timeoutId = setTimeout(showTime,1000); //指定した時間の後に1度だけ処理を実行する ※中にかくと繰り返しにできる
    i++;
    if(i > 2){
        clearTimeout(timeoutId);
    }
 }
 
 showTime();
}

