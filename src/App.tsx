import './App.css'

function App() {
  const books = [
    {
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      year: 1967,
      status: "В планах",
      image: "https://placehold.co/120x180?text=Book",
    },
    {
      title: "Преступление и наказание",
      author: "Фёдор Достоевский",
      year: 1866,
      status: "Прочитано",
      image: "https://placehold.co/120x180?text=Book",
    },
    {
      title: "Герой нашего времени",
      author: "Михаил Лермонтов",
      year: 1840,
      status: "В планах",
      image: "https://placehold.co/120x180?text=Book",
    }
  ]

  return (
    <>
      <header>
        <a href="/">ReadTrack</a>
      </header>
      <main>
        <h1 className='page-title'>Моя библиотека</h1>

        <section className="search-section">
          <h2 className="section-title">Поиск книг</h2>

          <form className="search-form">
            <label htmlFor='book-search'>Название книги или автор</label>
            <input
              id="book-search"
              type='text'
              placeholder='Введите название книги или автора'
            />
            <button className='find-btn' type="submit">Найти</button>
          </form>
        </section>

        <section className="book-section">
          <h2 className="section-title">Мои книги</h2>

          <ul className="book-list">
            {books.map((book) => (
              <li key={book.title}>
                <article className="book-card">
                  <div className='book-card-content'>
                    <img
                      className='book-img'
                      src={book.image}
                      alt={`Обложка книги ${book.title}`}
                    />

                    <div className="book-info">
                      <h3 className="book-name">{book.title}</h3>
                      <p className="book-description">{book.author}</p>
                      <p className="book-description book-year">{book.year}</p>
                    </div>
                  </div>

                  <button className="add-btn" type='button'>
                    Добавить в библиотеку
                  </button>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p className="footer-info">ReadTrack - трекер прочитанных книг</p>
      </footer>
    </>
  )
}

export default App
