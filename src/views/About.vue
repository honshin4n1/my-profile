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
          <p>本田 慎一</p>
        </div>
        <div class="text-group">
          <p style="width: 130px;">生年月日</p>
          <p>1983/7/5 (37歳)</p>
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
    <div>
      <transition name="fade" appear>
        <p class="description" style="line-height: 200%">
        専門学校卒業後から、音楽活動を軸に生活を送っていました。音楽の道を諦める決心をした後は、代わりに打ち込めることを仕事し
        たいと感じ、色々な仕事を調べるようになりました。そんな時、プログラミングに関するサイトやブログ記事から努力次第で市場値
        のあるスキルを身につけられるプログラミングに興味を持ち、書籍やProgate、ドットインストールなどでの学習を始めました。
        元々、自主CD作成をする時に録音や編集で物事を組み立てたり、理系分野が好きだったこともありすぐにプログラミングに夢中にり
        ました。作り上げたときの達成感や喜びは勿論のこと、考え抜くプロセス自体も楽しく、プログラミングを仕事にしようと決意しク
        ールの入校を決めました。スクールの学習ではどんなに調べてもエラーの解決策が見つけられない苦しさや、仮説を立てて解決策見
        つけることの難しさを痛感しました。しかしそれと同時に、ひとつのものを作り上げる楽しさを感じることができました。また、ー
        ム開発でのコミュニケーションにおいては経験を生かせる場面もあることを知り、自信にもなりました。前職では、幅広い年齢層方
        と働く機会が多かったため、「どんな方に対しても敬意を持って接する」ということを大切にしてきました。また、スクールでの習時は、年齢は私のほうが上でしたが、とても若く優秀な受講生の方と切磋琢磨しながら学んできました。今後もエンジニアとて、謙虚な姿勢を大切に技術力向上に励みたいと考えております。将来的にはクライアントの要望を汲み取り、プラスアルファの値を提供できるエンジニアになりたいです。また、個人の力を発揮しやすいチーム作りをし、利用者やクライアントに寄り添ったづくりをしていきたいと考えております。 
        元々、自主CD作成をする時に録音や編集で物事を組み立てたり、理系分野が好きだったこともありすぐにプログラミングに夢中にりました。作り上げたときの達成感や喜びは勿論のこと、考え抜くプロセス自体も楽しく、プログラミングを仕事にしようと決意スクールの入校を決めました。スクールの学習ではどんなに調べてもエラーの解決策が見つけられない苦しさや、仮説を立てて解策を見つけることの難しさを痛感しました。しかしそれと同時に、ひとつのものを作り上げる楽しさを感じることができました。た、チーム開発でのコミュニケーションにおいては経験を生かせる場面もあることを知り、自信にもなりました。前職では、幅広年齢層の方と働く機会が多かったため、「どんな方に対しても敬意を持って接する」ということを大切にしてきました。また、スールでの学習時は、年齢は私のほうが上でしたが、とても若く優秀な受講生の方と切磋琢磨しながら学んできました。今後もエンニアとして、謙虚な姿勢を大切に技術力向上に励みたいと考えております。将来的にはクライアントの要望を汲み取り、プラスアファの価値を提供できるエンジニアになりたいです。また、個人の力を発揮しやすいチーム作りをし、利用者やクライアントに寄添った物づくりをしていきたいと考えております。 
        </p>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: 1s;
}
.fade-enter-to{
  opacity: 1;
}
.main {
  height: 100%;
  width: 80%;
  margin: auto;
}
p {
  font-size: 20px;
  color: darkgrey;
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
  width: 100%;
  margin: 70px 0;
  padding-bottom: 100px;
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
    margin: 70px 0;
  }
}
</style>