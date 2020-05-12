'use strict';
// クラス！！！
{
    class Post{
        constructor(text,sponsor) {
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

}

    class SponsorPost extends Post{ //extends Post 親クラスの継承
        constructor(text,sponsor) {
            super(text); //子クラスの時はこれいる
            this.sponsor = sponsor ;
        }

        show() {
            super.show();
            console.log(`...sponsored by ${this.sponsor}`);
    }
    

}

const posts = [
    new Post('jsの勉強中...'),
    new Post('プログラミング楽しい！'),
    new SponsorPost('分動画でマスターしよう','dotinstoll'),
];

posts[2].show();
posts[2].like();


}

