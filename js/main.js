'use strict';

{
    let i = 0;

    function showTime(){
        console.log(new Date());
        i++;
        if(i > 2) {
            clearInterval(intervalId);
        }
    }

    // 1秒ごとに処理を繰り返す
 
    const intervalId　= setInterval(showTime,1000);　//関数を引数に渡す場合には（）はつけない ()をつけると帰り値を渡すことになる

}

