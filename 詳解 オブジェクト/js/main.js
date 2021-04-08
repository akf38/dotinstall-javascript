'use strict';

{
  // const otherScores = [10, 20];
  // const scores = [80, 90, 40, 70, ...otherScores];
  // scores.push(60, 50);
  // scores.shift();
  // scores.splice(1, 1, 40, 50);
  // console.log(scores[1]);

  // scores[2] = 66;
  // console.log(scores[2]);

  // console.log(scores.length);

  // console.log(`Score: ${scores[0]}`);

  // for (let i = 0; i < scores.length; i++){
  //   console.log(`Score${i}: ${scores[i]}`);
  // }

  // function sum(a,b){
  //   console.log(a + b);
  // }

  // sum(...otherScores);


  // const scores = [80, 90, 40, 70];

  // const[a, b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(...others);

  // let x = 30;
  // let y = 70;
  // [x, y] = [y, x];
  // console.log(x);
  // console.log(y);

  // scores.forEach((score, index)=>{
  //   console.log(`Score${index}: ${score}`);
  // });

  // const prices = [180, 190, 200];

  // const updatedPrices = prices.map(price => price + 20);

  // console.log(updatedPrices);

  // const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter(number =>  number %2 === 0 );

  // console.log(evenNumbers);

  // const otherProps = {
  //   r: 4,
  //   color: 'red',
  // }
  // const point = {
  //   x: 100,
  //   y: 180,
  //   ...otherProps,
  // };

  // console.log(point.x);
  // console.log(point['y']);

  // point.z = 90;
  // console.log(point);
  // delete point.y;
  // console.log(point);

  // const {x, r, ...others} = point;
  // console.log(x);
  // console.log(r);
  // console.log(others);

  // const point = {
  //   x: 100,
  //   y: 180,
  // };

  // const keys = Object.keys(point);
  // keys.forEach((key) => {
  //   console.log(`Key: ${key} Value: ${point[key]}`);
  // })

  // const points = [
  //   {x: 30, y: 20},
  //   {x: 10, y: 50},
  //   {x: 40, y: 40},
  // ];

  // console.log(points[1].y);

  // let x = 1;
  // let y = x;

  // x = 5;

  // console.log(x);
  // console.log(y);

  // let x = [1, 2];
  // let y = x;

  // x[0] = 5;

  // console.log(x);
  // console.log(y);

  // let x = [1, 2];
  // let y = [...x];

  // x[0] = 5;

  // console.log(x);
  // console.log(y);

  // const str = 'hello';

  // console.log(str.length);

  // console.log(str.substring(2,4));

  // console.log(str[1]);

  // const d = [2019, 11, 14];

  // console.log(d.join(' '));

  // const t = '17:08:24';
  // console.log(t.split(':'));

  // const [hour, minute, second] = t.split(':');
  // console.log(hour);
  // console.log(minute);
  // console.log(second);

  // const scores = [10, 3, 9];


  // let sum = 0;

  // scores.forEach((score)=>{
  //   sum += score;
  // });

  // const avg = sum / scores.length;

  // console.log(sum);
  // console.log(Math.floor(avg));
  // console.log(Math.ceil(avg));
  // console.log(Math.round(avg));
  // console.log(avg.toFixed(3));

  // console.log(Math.random());

  // console.log(Math.floor(Math.random() * 6) + 1);

  // const d = new Date();
  // console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);
  // d.getFullYear();

  // const d = new Date(2019, 10);
  // d.setHours(10, 20, 30);
  // d.setDate(31);
  // d.setDate(d.getDate() + 3);
  // console.log(d);

  // alert('hello');

  // const answer = confirm('削除しますか？');

  // if(answer){
  //   console.log('削除しました。')
  // }else{
  //   console.log('キャンセルしました。')
  // }


  // let i = 0;

  // function showTime(){
  //   console.log(new Date());
  //   i++;
  //   if(i>2){
  //     clearInterval(intervalId);
  //   }
  // }

  // const intervalId = setInterval(showTime, 1000);
  // let i = 0;
  // function showTime(){
  //   console.log(new Date());
  //   const timeoutId = setTimeout(showTime, 1000);
  //   i++;
  //   if(i>2){
  //     clearTimeout(timeoutId);
  //   }
  // }

  // showTime();

  // const name = 'taguchi';
  // const name = 5;

  // try{
  //   console.log(name.toUpperCase());
  // }catch(e){
  //   console.log(e);
  // }

  // console.log('Finish!');


  class Post {
    constructor(text){
      this.text = text;
      this.likeCount = 0;
    }

    show(){
      console.log(`${this.text} - ${this.likeCount}likes`);
    }

    like(){
      this.likeCount++;
      this.show();
    }


    // 静的メソッド
    // thisは使えない
    static showInfo(){
      console.log('Post class version 1.0');
    }
  }

  // const posts = [
  //   new Post('JavaScriptの勉強中・・・'),
  //   new Post('プログラミング楽しい！'),

    // {
    //   text: 'JavaScriptの勉強中・・・',
    //   likeCount: 0,
    //   // show: function show(){
    //   //   console.log(`${this.text} - ${this.likeCount}いいね`);
    //   // }
    //   show(){
    //     console.log(`${this.text} - ${this.likeCount}いいね`);
    //   },
    // },
    // {
    //   text: 'プログラミング楽しい！',
    //   likeCount: 0,
    //   show(){
    //     console.log(`${this.text} - ${this.likeCount}いいね`);
    //   },
    // },
  // ];

  // posts[0].show();
  // posts[1].show();

  // posts[0].like();

  // Post.showInfo();


  class SponsoredPost extends Post {
    constructor(text, sponsor){
      super(text);
      this.sponsor = sponsor
    }

    show(){
      super.show();
      console.log(`... sponsored by ${this.sponsor}`);
    }

    static seeInfo(){
      console.log('Post class version 2.0');
    }

  }

  const posts = [
    new Post('JavaScriptの勉強中'),
    new Post('プログラミング楽しい'),
    new SponsoredPost('三分動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();

  Post.showInfo();
  SponsoredPost.seeInfo();






}