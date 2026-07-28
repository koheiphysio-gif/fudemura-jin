const books = [
  {
    number: "01",
    title:
      "看護師の在宅医療Webライター副業の始め方: 夜勤16時間vs在宅4時間どちらを選ぶ？専門知識と経験を活かせるタイパ最強副業",
    shortTitle: "看護師の在宅医療Webライター副業の始め方",
    description:
      "看護師として培った専門知識と経験を、在宅でのWebライター副業へつなげるための実践的なスタートガイドです。",
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
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__grain" aria-hidden="true" />
        <p className="eyebrow">BOOKS BY</p>
        <h1 id="page-title">筆村ジン</h1>
        <p className="hero__subtitle">ことばで、人生の選択肢を増やす。</p>
        <a className="scroll-link" href="#books">
          BOOKS <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="intro" aria-label="書籍紹介">
        <p className="eyebrow">SELECTED WORKS</p>
        <p>
          心と仕事のあいだにある迷いへ。<br />
          いまの自分に寄り添うための、二冊です。
        </p>
      </section>

      <section className="books" id="books" aria-label="書籍一覧">
        {books.map((book) => (
          <article className={`book book--${book.theme}`} key={book.number}>
            <div className="book__inner">
              <div className="book__cover-wrap">
                <span className="book__number" aria-hidden="true">
                  {book.number}
                </span>
                <img
                  className="book__cover"
                  src={book.image}
                  alt={`『${book.shortTitle}』の書影`}
                />
              </div>
              <div className="book__content">
                <p className="book__label">BOOK {book.number}</p>
                <h2>{book.title}</h2>
                <p className="book__description">{book.description}</p>
                <a
                  className="amazon-link"
                  href={book.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Amazonで見る <span aria-hidden="true">↗</span>
                </a>
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
