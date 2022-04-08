<template>
  <div class="main">
    <div class="title">
      <h1 class="animate__animated animate__backInUp"><font-awesome-icon icon="user-circle"></font-awesome-icon></h1>
      <h1>About</h1>
    </div>
    <div class="prof-flex">
      <div class="prof-img">
        <img src="@/assets/images/myimg.jpeg" alt="顔写真">
      </div>
      <div class="prof-text">
        <div class="text-group">
          <p style="width: 130px;">名前</p>
          <p>本田 慎一（ほんだ しんいち）</p>
        </div>
        <div class="text-group">
          <p style="width: 130px;">生年月日</p>
          <p>1983/7/5 (38歳)</p>
        </div>
        <div class="text-group">
          <p style="width: 130px;">現住所</p>
          <p>福岡市</p>
        </div>
        <div class="text-group">
          <p style="width: 130px;">趣味</p>
          <p>映画 漫画 カラオケ サッカー視聴</p>
        </div>
        <!-- <div class="text-body">
        </div> -->
      </div>
    </div>
    <transition name="fade" appear>
      <div class="description">
        <p class="description-text">
          専門学校卒業後から、音楽活動をしながら飲食店に勤務。音楽の道を諦める決心をした後も長く飲食業に携わっていく。色々な人達と接する中で、人間力みたいなものは着いたと思うが、このままで良いのかという思いも芽生える。目に見えた技術が欲しいと思い、様々な仕事を調べる中で、エンジニアに関するサイトやブログ記事から努力次第で市場価値のあるスキルを身につけられるプログラミングに興味を持ち学習を始める。
        </p>
        <p class="description-text">
          自分で書いたHTML/CSSコードが反映された時は感動した。元々、自主CD作成をする時に録音や編集で物事を組み立てたり、理系分野が好きだったこともありすぐにプログラミングに夢中になる。作り上げたときの達成感や喜びは勿論のこと、考え抜くプロセス自体も楽しく、プログラミングを仕事にしようと決意。身近な人だけでなく、世界中と繋がり幸せを生み出す「モノ」を作る人たちと仕事がしたいと思った。
        </p>
        <p class="description-text">
          飲食業時代にはお客様に対して誠実な対応を心掛けていました。その結果として感謝のお言葉をいただくこともあり、喜びややりがいを感じていました。今後はエンジニアとして、一人でも多くの「喜び」「幸せ」「笑顔」を生み出せる物づくりをしていきたいです。
        </p>
        <p class="description-text">
          年齢や未経験の転職が厳しいことは覚悟し、責任感や真面目にコツコツできることを武器に転職活動中です。<br>
          最後まで読んでいただき、ありがとうございました。
        </p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
  width: 80%;
  margin: auto;
}
p {
  font-size: 20px;
}
.prof-flex {
  display: flex;
  justify-content: flex-start;
  margin-top: 100px;
}
.prof-img {
  width: 200px;
  height: auto;
  margin-left: 50px;
}
img {
  width: 200px;
  height: auto;
}
.prof-text {
  margin-left: 50px;
}
.text-group {
  display: flex;
}
.text-body {
  margin-left: 50px;
}
.description {
  width: 80%;
  margin: 70px 50px;
  color: dimgray;
  padding-bottom: 100px;
}
.description-text {
  font-size: 18px;
  line-height: 200%;
}
@media (max-width: 940px) {
  .prof-flex {
    flex-direction: column;
    margin-top: 50px;
  }
  .main {
    width: 90%;
  }
  .prof-img {
    margin: 0 auto;
  }
  .prof-text {
    margin: 0 auto;
  }
  
}
@media (max-width: 500px) {
  p {
    width: 200px;
    font-size: 16px;
  }
  .description {
    width: 100%;
    margin: 70px auto;
  }
  .description-text {
    width: 100%;
    font-size: 15px;
    line-height: 200%;
}
}
</style>