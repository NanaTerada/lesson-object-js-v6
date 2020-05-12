'use strict';

{
    const point = {
        x: 100,
        y:180,
    };
　　// 再代入
    point.x = 120;
    point['y'] = 150;

    console.log(point.x);
    console.log(point['y']);

    point.z = 200;　//プロパティの追加
    delete point.y; //プロパティの削除

    console.log(point);


}

