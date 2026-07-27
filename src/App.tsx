import './App.css'
import { AddBookForm } from './components/AddBookForm'
import { BookList } from './components/BookList'
import useBooks from "./hooks/useBooks"
import { BookStats } from './components/BookStats'
import { statuses } from './data/bookStatuses'
import useBookFilters from './hooks/useBookFilters'
import { Button } from './components/Button'
import { Modal } from './components/Modal'
import { useState } from 'react'
import { ContentBlock } from './components/ContentBlock'
import { BookFilters } from './components/BookFilters'
import { useFavorites } from './hooks/useFavorites'

function App() {
  const { books, changeStatus, addBook, removeBook, loading } = useBooks()

  const { isFavorite, toggleFavorite } = useFavorites()
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  const {
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    selectedStatus,
    setSelectedStatus,
    visibleBooks
  } = useBookFilters(books, showFavoritesOnly, isFavorite)

  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <a href="/">ReadTrack</a>
      </header>
      <main>
        <h1 className='page-title'>Моя библиотека</h1>

        <section className="search-section">
          <ContentBlock className='search-block'>
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
          </ContentBlock>

          <ContentBlock className='search-stats'>
            <BookStats books={books} />
          </ContentBlock>
        </section>

        <section className="book-section">
          <h2 className="section-title">
            <span>Мои книги</span>
            <Button size='small' onClick={() => setOpen(true)}>Добавить книгу</Button>
          </h2>

          <ContentBlock>
            <BookFilters
              status={selectedStatus}
              sortOrder={sortOrder}
              showFavoritesOnly={showFavoritesOnly}
              onSelectStatus={setSelectedStatus}
              onSortOrder={setSortOrder} 
              onToggleFavoritesOnly={setShowFavoritesOnly}
            />

            {loading && <div>Загрузка...</div>}

            <BookList
              books={visibleBooks}
              statuses={statuses}
              loading={loading}
              changeStatus={changeStatus}
              removeBook={removeBook}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
            />
          </ContentBlock>
        </section>
      </main>
      <footer>
        <p className="footer-info">ReadTrack - трекер прочитанных книг</p>
      </footer>

      <Modal title="Добавить книгу" open={open} onClose={() => setOpen(false)}>
        <AddBookForm addBook={addBook} loading={loading} />
      </Modal>
    </>
  )
}

export default App
