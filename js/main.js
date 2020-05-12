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

    class SponsorPost{
        constructor(text,sponsor) {
            this.text = text;
            this.likeCount = 0;
            this.sponsor = sponsor ;
        }

        show() {
            console.log(`${this.text} - ${this.likeCount}likes`);
            console.log(`...sponsored by ${this.sponsor}`);
    }
    like() {
        this.likeCount++;
        this.show();
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

