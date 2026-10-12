import { useState } from "react"
import { BookFilters } from "@/features/book-filters"
import { BookList, BookStats, statuses } from "@/entities/books"
import { Button } from "@/shared/ui/button"
import { ContentBlock } from "@/shared/ui/content-block"
import { EmptyState } from "@/shared/ui/empty-state"
import useBooks from "../model/useBooks"
import { useFavorites } from "../model/useFavorites"
import useBookFilters from "../model/useBookFilters"
import { Modal } from "@/shared/ui/modal"
import { AddBookForm } from "@/features/add-book-form"

import styles from "./LibraryPage.module.css"

export const LibraryPage = () => {
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
            <h1 className={styles.title}>Моя библиотека</h1>

            <section className={styles.searchSection}>
                <ContentBlock className={styles.searchBlock}>
                    <h2 className={styles.sectionTitle}>Поиск книг</h2>

                    <form
                        className={styles.searchForm}
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

                <ContentBlock className={styles.stats}>
                    <BookStats books={books} />
                </ContentBlock>
            </section>

            <section className={styles.bookSection}>
                <h2 className={styles.sectionTitle}>
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

                    {visibleBooks.length > 0
                        ? (
                            <BookList
                                books={visibleBooks}
                                statuses={statuses}
                                loading={loading}
                                changeStatus={changeStatus}
                                removeBook={removeBook}
                                isFavorite={isFavorite}
                                toggleFavorite={toggleFavorite}
                            />
                        )
                        : (
                            <EmptyState
                                description='Попробуйте изменить фильтры'
                            />
                        )

                    }
                </ContentBlock>
            </section>

            <Modal title="Добавить книгу" open={open} onClose={() => setOpen(false)}>
                <AddBookForm addBook={addBook} loading={loading} />
            </Modal>
        </>
    )
}