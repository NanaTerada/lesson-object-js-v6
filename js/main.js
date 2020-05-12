'use strict';

{
    
    const point = {
        x: 100,
        y:180,
    };

    // オブジェクトにはforeach使えないので。。。

    // const keys = Object.keys(point); //point1のすべてのキーを配列で受けとれる
    // keys.forEach( key => {
    //     console.log(`key: ${key} Value: ${point[key]}`);
    // });

    // たとえば複数の座標を管理したい場合

    const points = [
        {x:30,y:20},
        {x:10,y:50},
        {x:40,y:40},
    ];

    console.log(points[1].y);

    


}

