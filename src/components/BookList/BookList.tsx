import { BookCard } from '../BookCard'
import type {Book, BookStatus} from "../../types/book"
import styles from "./BookList.module.css"

interface BookListProps {
    books: Book[];
    statuses: BookStatus[];
    loading?: boolean;
    changeStatus: (id: string, newStatus: BookStatus) => void;
    removeBook: (id: string) => void;
    isFavorite: (id: string) => boolean;
    toggleFavorite: (id: string) => void;
}

function BookList({ 
    books,
    statuses,
    loading,
    changeStatus,
    removeBook,
    isFavorite,
    toggleFavorite,
}: BookListProps) {
    return (
        <ul className={styles.list}>
            {books.map((book) => (
                <li key={book.id}>
                    <BookCard
                        book={book}
                        statuses={statuses}
                        loading={loading}
                        changeStatus={changeStatus}
                        removeBook={removeBook}
                        isFavorite={isFavorite}
                        toggleFavorite={toggleFavorite}
                    />
                </li>
            ))}
        </ul>
    )
}

export default BookList