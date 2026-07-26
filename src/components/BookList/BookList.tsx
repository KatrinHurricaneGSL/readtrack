import { BookCard } from '../BookCard'
import type {Book, BookStatus} from "../../types/book"
import styles from "./BookList.module.css"

interface BookListProps {
    books: Book[];
    statuses: BookStatus[];
    changeStatus: (id: string, newStatus: BookStatus) => void;
    removeBook: (id: string) => void;
}

function BookList({ 
    books,
    statuses,
    changeStatus,
    removeBook,
}: BookListProps) {
    return (
        <ul className={styles.list}>
            {books.map((book) => (
                <li key={book.id}>
                    <BookCard
                        book={book}
                        statuses={statuses}
                        changeStatus={changeStatus}
                        removeBook={removeBook}
                    />
                </li>
            ))}
        </ul>
    )
}

export default BookList