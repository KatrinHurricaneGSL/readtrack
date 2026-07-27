import type { Book, BookStatus } from "../../types/book"
import { Button } from "../Button";
import styles from "./BookCard.module.css"

interface BookCardProps {
    book: Book;
    statuses: BookStatus[];
    loading?: boolean;
    changeStatus: (id: string, newStatus: BookStatus) => void;
    removeBook: (id: string) => void;
    isFavorite: (id: string) => boolean;
    toggleFavorite: (id: string) => void;
}

function BookCard({
    book,
    statuses,
    loading,
    changeStatus,
    removeBook,
    isFavorite,
    toggleFavorite,
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
                    <div className={styles.titleRow}>
                        <h3 className={styles.title}>{book.title}</h3>

                        <button
                            className={`${styles.favorite} ${isFavorite(book.id) ? styles.active : ""}`}
                            type="button"
                            onClick={() => toggleFavorite(book.id)}
                            disabled={loading}
                        >
                            {isFavorite(book.id) ? "★" : "☆"}
                        </button>
                    </div>

                    <p className={styles.author}>{book.author}</p>
                    <p className={styles.year}>{book.year}</p>
                </div>

                <div className={styles.actions}>
                    <p className={styles.status}>{book.status}</p>

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

                    <Button
                        htmlType='button'
                        onClick={() => removeBook(book.id)}
                        disabled={loading}
                        danger
                    >
                        Удалить
                    </Button>
                </div>
            </div>
        </article>
    )
}

export default BookCard