'use strict';

{
    // const score1 = 80; 
    // const score2 = 90; 
    // const score3 = 40; 

    const scores = [80,90,40];
    console.log(scores[1]);　//2つめの要素
    //要素の変更
    scores[2]=45;
    console.log(scores);

    // scores = 10; //constなのでこの書き換えはできない

    console.log(scores.length);


    console.log(`Score: ${scores[0]}`);
    console.log(`Score: ${scores[1]}`);
    console.log(`Score: ${scores[2]}`);

    // 書き換え大変なのでfor文つかおう

    for(let i = 0; i < scores.length; i++){ //scores.length　スコアの要素の数分
        console.log(`Score${i} ${scores[i]}`);
    }
    
// 　　便利な命令
//     先頭に要素を使いたい時　unshift()
//     末尾に追加したいとき　PushManager()
//     追加から削除 shift()
//     末尾から削除 pop()


const scores2 = [80,90,40,70];
scores2.push(60,50);
scores.shift();
for(let i = 0; i < scores2.length; i++){
    console.log(`Score2${i} ${scores2[i]}`);
}


}

