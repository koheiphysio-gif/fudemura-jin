const books = [
  {
    number: "01",
    title:
      "看護師の在宅医療Webライター副業の始め方: 夜勤16時間vs在宅4時間どちらを選ぶ？専門知識と経験を活かせるタイパ最強副業",
    shortTitle: "看護師の在宅医療Webライター副業の始め方",
    description:
      "理学療法士でありながら、あえて看護師向けに書いたのには理由があります――医療現場で副業を探す声を最も多く耳にするのが、看護師の皆さんだったからです。夜勤や不規則勤務と向き合う中で培った専門知識と経験を、在宅でのWebライター副業へどうつなげるか、自身の副業実践をもとに解説する実践的なスタートガイドです。",
    bestseller: {
      title: "Kindleストア 2部門で上位にランクイン！",
      note: "（2026年2月17日時点／医療・看護の資格・検定2位・ビジネスの意思決定3位）",
    },
    image: "https://m.media-amazon.com/images/I/81Rgq6sRRRL._SY522_.jpg",
    href: "https://www.amazon.co.jp/dp/B0GMWK2D5L",
    theme: "work",
  },
  {
    number: "02",
    title:
      "うつ休職から復職できた妻の話: 回復のきっかけは“リワーク”で教わった「優しさの優先順位」だった",
    shortTitle: "うつ休職から復職できた妻の話",
    description:
      "休職から復職へ。そばで見守った夫婦の時間を通して、回復のきっかけと、自分を大切にするための考え方を綴った一冊です。",
    image: "https://m.media-amazon.com/images/I/81qUvFmsiEL._CR0%2C0%2C0%2C130_.jpg",
    href: "https://www.amazon.co.jp/dp/B0H2NMP3Q4",
    theme: "life",
  },
  {
    number: "03",
    seriesTag: "老健リハビリの現場 シリーズ 1／2",
    title: "マンガでわかる老健リハビリの現場（1） さよならの前に",
    shortTitle: "さよならの前に",
    description:
      "テーマは「看取り」。老健で出会った「最後の時間」を、若きリハビリ職員の目線で描くマンガ作品です。身体を動かすことの先にある、その人らしい暮らしと人生の最終章に、医療・介護に関わるすべての人へ寄り添います。",
    bestseller: {
      title: "Kindleストア 2部門でベストセラー1位を獲得！",
      note: "（2026年7月31日付／リハビリテーション医学・整形外科学）",
    },
    image: "/assets/rouken-rehab-vol-1-cover.webp",
    href: "https://www.amazon.co.jp/dp/B0HB4DHCT2",
    noteHref: "https://note.com/ripe_dove7169/n/n27d52d422ff6?sub_rt=share_sb",
    theme: "third",
  },
  {
    number: "04",
    seriesTag: "老健リハビリの現場 シリーズ 2／2",
    title: "マンガでわかる老健リハビリの現場（2） 思い出は消えても",
    shortTitle: "思い出は消えても",
    description:
      "テーマは「認知症」。記憶の向こうにある、その人らしさと真心に寄り添う、老健リハビリの現場を描くマンガ作品です。",
    bestseller: {
      title: "Kindleストア 2部門でベストセラー1位を獲得！",
      note: "（2026年8月7日付／リハビリテーション医学・老年医学）",
    },
    image: "/assets/rouken-rehab-vol-2-cover.webp",
    href: "https://www.amazon.co.jp/dp/B0GX2Y47G5",
    noteHref: "https://note.com/ripe_dove7169/n/n502c23104fb0?sub_rt=share_sb",
    theme: "fourth",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__grain" aria-hidden="true" />
        <p className="eyebrow">BOOKS BY</p>
        <h1 id="page-title">筆村ジン</h1>
        <p className="hero__subtitle">マンガで、心と仕事の選択肢を増やす。</p>
        <a className="scroll-link" href="#books">
          BOOKS <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="intro" aria-label="書籍紹介">
        <p className="eyebrow">SELECTED WORKS</p>
        <p>
          理学療法士としての医療知識を、マンガで分かりやすく紐解く。<br />
          心と仕事の悩みに寄り添います。
        </p>
      </section>

      <section className="author" id="about" aria-labelledby="about-title">
        <div className="author-inner">
          <img
            className="author-photo"
            src="/assets/author.webp"
            width="220"
            height="220"
            alt="筆村ジンのプロフィール写真"
          />
          <div>
            <p className="eyebrow">ABOUT THE AUTHOR</p>
            <h2 id="about-title" className="author-name">筆村ジン</h2>
            <p className="author-role">理学療法士 × Webディレクター・ライター × Kindle作家</p>
            <p className="author-bio">
              2004年より理学療法士として、主に介護老人保健施設で高齢者リハビリテーションの現場に立ち続けてきました。臨床の最前線で医療従事者の長時間労働や将来への不安を肌で感じる中で、「場所と時間に縛られない働き方」を模索するように。2021年からは副業としてWebライター・ディレクター業をスタートし、朝4時起床、出勤前の時間を活用して活動しています。医療現場で培った「観察眼」と最新のAI技術を掛け合わせることで、本業と両立しながら収益化に成功しました。2026年2月からはKindle作家としても活動を開始。マンガという形式を通じて、医療・介護の現場でしか見えない「命と向き合う人の物語」や、自分らしい生き方・働き方のヒントを届けています。
            </p>
            <a
              className="note-link"
              href="https://note.com/ripe_dove7169"
              target="_blank"
              rel="noreferrer"
            >
              noteをフォローする <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="story" id="story" aria-labelledby="story-title">
        <div className="story-inner">
          <div className="story-header">
            <p className="eyebrow">MY STORY</p>
            <h2 id="story-title">その知識、誰かの宝になる</h2>
            <p className="story-subtitle">
              理学療法士としての現場の気づきから、Webライター副業、そしてマンガ・Kindle出版へ。<br />
              専門知識を分かりやすく届け、誰かの役に立つ資産に変えるまでの歩みです。
            </p>
          </div>
          <div className="story-card">
            <picture>
              <source srcSet="/assets/story-manga.webp" type="image/webp" />
              <img
                className="story-img"
                src="/assets/story-manga.jpg"
                width={682}
                height={1024}
                alt="4コマ漫画『その知識、誰かの宝になる』。理学療法士としての気づきからWebライター副業、マンガ化への挑戦、Kindle出版までの軌跡"
              />
            </picture>
            <div className="story-caption">
              <p className="story-catchphrase">
                「知識は、使ってこそ価値になる。今日もコツコツ、未来の誰かのために。」
              </p>
              <p className="story-credit">
                マンガ制作：
                <a
                  href="https://x.com/tama_ai_2024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @tama_ai_2024 <span aria-hidden="true">↗</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="books" id="books" aria-label="書籍一覧">
        {books.map((book) => (
          <article className={`book book--${book.theme}`} key={book.number}>
            <div className="book__inner">
              <div className="book__cover-wrap">
                <img
                  className="book__cover"
                  src={book.image}
                  alt={`『${book.shortTitle}』の書影`}
                />
              </div>
              <div className="book__content">
                <p className="book__label">BOOK {book.number}</p>
                {book.seriesTag && (
                  <span className="series-tag">{book.seriesTag}</span>
                )}
                <h2>{book.title}</h2>
                <p className="book__description">{book.description}</p>
                {book.bestseller && (
                  <div className="bestseller">
                    <strong>{book.bestseller.title}</strong>
                    <span>{book.bestseller.note}</span>
                  </div>
                )}
                <div className="book-links">
                  <a
                    className="amazon-link"
                    href={book.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Amazonで見る <span aria-hidden="true">↗</span>
                  </a>
                  {book.noteHref && (
                    <a
                      className="note-link"
                      href={book.noteHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      noteで書籍紹介を読む <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer>
        <p>筆村ジン　書籍紹介</p>
        <p>© {new Date().getFullYear()} JIN FUDEMURA</p>
      </footer>
    </main>
  );
}
