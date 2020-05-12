'use strict';
// クラス！！！
{
    class Post{
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }

        show() {
            console.log(`${this.text} - ${this.likeCount}likes`);
    }
    like() {
        this.likeCount++;
        this.show();
    }
// static 静的メソッド this使えない　インスタンスをつくらずに呼び出す
    static showInfo() {
        console.log('Post class vertion 1.0');
    }
}

const posts = [
    new Post('jsの勉強中...'),
    new Post('プログラミング楽しい！')

];

posts[0].like();
Post.showInfo();


}

