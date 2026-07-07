import './App.css'
import { useState } from 'react'
import BookCard from './components/BookCard'
import AddBookForm from './components/AddBookForm'

function App() {
  const [books, setBooks] = useState([
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
      status: "Читаю",
      image: "https://placehold.co/120x180?text=Book",
    }
  ])

  const statuses = [
    "В планах",
    "Читаю",
    "Прочитано",
  ]

  const changeStatus = (title, newStatus) => {
    const updatedBooks = books.map((book) => {
      if (book.title === title) {
        return {
          ...book,
          status: newStatus,
        }
      }

      return book
    })

    setBooks(updatedBooks)
  }

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book])
  }

  const removeBook = (title) => {
    const updatedBooks = books.filter(book => {
      return book.title !== title
    })

    setBooks(updatedBooks)
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

          <AddBookForm addBook={addBook}/>

          <ul className="book-list">
            {books.map((book) => (
              <li key={book.title}>
                <BookCard
                  book={book}
                  statuses={statuses}
                  changeStatus={changeStatus}
                  removeBook={removeBook}
                />
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
