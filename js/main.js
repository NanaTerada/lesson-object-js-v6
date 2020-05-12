'use strict';

{
    // 配列を連結する
    const d = [2019,11,14];
    // console.log(d.join('/'));
    // console.log(d.join(''));

    // 文字列を配列に
    const t = '17:08:24';
    console.log(t.split(':'));

    // 分割代入
    const [hour,minit,second] = t.split(':');
    console.log(hour);
    console.log(minit);
    console.log(second);


}

