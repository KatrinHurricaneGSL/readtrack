import './App.css'
import { useState, useEffect } from 'react'
import AddBookForm from './components/AddBookForm'
import BookList from './components/BookList'
import { initialBooks } from './data/books'
import type { Book, BookStatus, SortOrder } from './types/book'

const statuses: BookStatus[] = [
  "В планах",
  "Читаю",
  "Прочитано",
]

function App() {
  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem("books")

    if(savedBooks) {
      return JSON.parse(savedBooks)
    }

    return initialBooks
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState<SortOrder>("default")

  useEffect(() => {
    localStorage.setItem(
      "books",
      JSON.stringify(books)
    )
  }, [books])


  const changeStatus = (
    id: string,
    newStatus: BookStatus
  ): void => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            status: newStatus,
          }
        }

        return book
      })
    )
  }

  const addBook = (book: Book): void => {
    setBooks((prevBooks) => [...prevBooks, book])
  }

  const removeBook = (id: string): void => {
    setBooks((prevBooks) =>
      prevBooks.filter((book) => book.id !== id)
    )
  }

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const visibleBooks = sortOrder === "default" ? filteredBooks
    : [...filteredBooks].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.year - b.year
      }

      return b.year - a.year
    })

  return (
    <>
      <header>
        <a href="/">ReadTrack</a>
      </header>
      <main>
        <h1 className='page-title'>Моя библиотека</h1>

        <section className="search-section">
          <h2 className="section-title">Поиск книг</h2>

          <form
            className="search-form"
          >
            <label htmlFor='book-search'>Название книги или автор</label>
            <input
              className='input'
              type='text'
              placeholder='Введите название книги или автора'
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </form>
        </section>

        <section className="book-section">
          <h2 className="section-title">Мои книги</h2>

          <AddBookForm addBook={addBook} />

          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value as SortOrder)}
          >
            <option value="default">Без сортировки</option>
            <option value="asc">Сначала старые</option>
            <option value="desc">Сначала новые</option>
          </select>

          <BookList
            books={visibleBooks}
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
