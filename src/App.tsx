import './App.css'
import { AddBookForm } from './components/AddBookForm'
import { BookList } from './components/BookList'
import type { SortOrder, StatusFilter } from './types/book'
import useBooks from "./hooks/useBooks"
import { BookStats } from './components/BookStats'
import { statuses } from './data/bookStatuses'
import useBookFilters from './hooks/useBookFilters'
import { Button } from './components/Button'

function App() {
  const { books, changeStatus, addBook, removeBook, loading } = useBooks()

  const {
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    selectedStatus,
    setSelectedStatus,
    visibleBooks
  } = useBookFilters(books)

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
          <h2 className="section-title">
            <span>Мои книги</span>
            <Button size='small'>Добавить книгу</Button>
          </h2>

          <BookStats books={books} />

          <AddBookForm addBook={addBook} loading={loading} />

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

          {loading && <div>Загрузка...</div>}

          <BookList
            books={visibleBooks}
            statuses={statuses}
            loading={loading}
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
