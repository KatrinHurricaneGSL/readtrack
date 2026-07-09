import './App.css'
import { useState } from 'react'
import AddBookForm from './components/AddBookForm'
import BookList from './components/BookList'
import { initialBooks } from './data/books'

const statuses = [
  "В планах",
  "Читаю",
  "Прочитано",
]

function App() {
  const [books, setBooks] = useState(initialBooks)

  const changeStatus = (title, newStatus) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.title === title) {
          return {
            ...book,
            status: newStatus,
          }
        }

        return book
      })
    )
  }

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book])
  }

  const removeBook = (title) => {
    setBooks((prevBooks) =>
      prevBooks.filter((book) => book.title !== title)
    )
  }

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
              className='input'
              type='text'
              placeholder='Введите название книги или автора'
            />
            <button className='button' type="submit">Найти</button>
          </form>
        </section>

        <section className="book-section">
          <h2 className="section-title">Мои книги</h2>

          <AddBookForm addBook={addBook} />

          <BookList
            books={books}
            statuses={statuses}
            changeStatus={changeStatus}
            removeBook={removeBook}
          />
        </section>
      </main>
      <footer>
        <p className="footer-info">ReadTrack - трекер прочитанных книг</p>
      </footer>
    </>
  )
}

export default App
