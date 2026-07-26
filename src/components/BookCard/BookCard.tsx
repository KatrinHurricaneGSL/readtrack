import type {Book, BookStatus} from "../../types/book"
import styles from "./BookCard.module.css"

interface BookCardProps {
    book: Book;
    statuses: BookStatus[];
    changeStatus: (id: string, newStatus: BookStatus) => void;
    removeBook: (id: string) => void;
}

function BookCard({
    book,
    statuses,
    changeStatus,
    removeBook
}: BookCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.content}>
                <img
                    className={styles.image}
                    src={book.image}
                    alt={`Обложка книги ${book.title}`}
                />

                <div className={styles.info}>
                    <h3 className={styles.title}>{book.title}</h3>
                    <p className={styles.author}>{book.author}</p>
                    <p className={styles.year}>{book.year}</p>
                    <p className={styles.status}>{book.status}</p>
                </div>

                <select
                    className={styles.select}
                    value={book.status}
                    onChange={(event) =>
                        changeStatus(book.id, event.target.value as BookStatus)
                    }
                >
                    {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>
            </div>

            <button
                className={styles.button}
                type='button'
                onClick={() => removeBook(book.id)}>
                Удалить
            </button>
        </article>
    )
}

export default BookCard