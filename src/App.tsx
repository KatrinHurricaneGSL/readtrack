import './App.css'

function App() {
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
            <li>
              <article className="book-card">
                <div className="book-card-content">
                  <img className="book-img" src="https://placehold.co/120x180?text=Book" alt="Обложка книги Мастер и Маргарита" />
                  <div className="book-info">
                    <h3 className="book-name">Мастер и Маргарита</h3>
                    <p className="book-description">Михаил Булгаков</p>
                    <p className="book-description book-year">1967</p>
                  </div>
                </div>
                <button className="add-btn" type="button">Добавить в библиотеку</button>
              </article>
            </li>
            <li>
              <article className="book-card">
                <div className="book-card-content">
                  <img className="book-img" src="https://placehold.co/120x180?text=Book" alt="Обложка книги Мастер и Маргарита" />
                  <div className="book-info">
                    <h3 className="book-name">Преступление и наказание</h3>
                    <p className="book-description">Фёдор Достоевский</p>
                    <p className="book-description book-year">1866</p>
                  </div>
                </div>
                <button className="add-btn" type="button">Добавить в библиотеку</button>
              </article>
            </li>
            <li>
              <article className="book-card">
                <div className="book-card-content">
                  <img className="book-img" src="https://placehold.co/120x180?text=Book" alt="Обложка книги Мастер и Маргарита" />
                  <div className="book-info">
                    <h3 className="book-name">Отцы и дети</h3>
                    <p className="book-description">Иван Тургенев</p>
                    <p className="book-description book-year">1862</p>
                  </div>
                </div>
                <button className="add-btn" type="button">Добавить в библиотеку</button>
              </article>
            </li>
            <li>
              <article className="book-card">
                <div className="book-card-content">
                  <img className="book-img" src="https://placehold.co/120x180?text=Book" alt="Обложка книги Мастер и Маргарита" />
                  <div className="book-info">
                    <h3 className="book-name">Герой нашего времени</h3>
                    <p className="book-description">Михаил Лермонтов</p>
                    <p className="book-description book-year">1840</p>
                  </div>
                </div>
                <button className="add-btn" type="button">Добавить в библиотеку</button>
              </article>
            </li>
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
