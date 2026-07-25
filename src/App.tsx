import './App.css'
import { useState } from 'react'
import AddBookForm from './components/AddBookForm'
import BookList from './components/BookList'
import type { SortOrder, StatusFilter } from './types/book'
import useBooks from "./hooks/useBooks"
import BookStats from './components/BookStats'
import { statuses } from './data/bookStatuses'

function App() {
  const { books, changeStatus, addBook, removeBook } = useBooks()
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState<SortOrder>("default")
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("all")

  const filteredBooks = books.filter((book) => {
    const isSearchMatch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    const isStatusMatch = selectedStatus === "all" ||
      book.status === selectedStatus

    return isSearchMatch && isStatusMatch
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
            <label htmlFor="book-search">Название книги или автор</label>
            <input
              id="book-search"
              className="input"
              type="text"
              placeholder="Введите название книги или автора"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </form>
        </section>

        <section className="book-section">
          <h2 className="section-title">Мои книги</h2>
          
          <BookStats books={books}/>

          <AddBookForm addBook={addBook} />

          <label htmlFor="status-filter">Статус:</label>
          <select
            id="status-filter"
            value={selectedStatus}
            onChange={(event) => setSelectedStatus(event.target.value as StatusFilter)}
          >
            <option value="all">Все статусы</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <label htmlFor="sort-books">Сортировка:</label>
          <select
            id="sort-books"
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
