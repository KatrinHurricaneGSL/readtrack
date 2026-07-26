import type {Book, BookStatus} from "../../types/book"
import { Button } from "../Button";
import styles from "./BookCard.module.css"

interface BookCardProps {
    book: Book;
    statuses: BookStatus[];
    loading?: boolean;
    changeStatus: (id: string, newStatus: BookStatus) => void;
    removeBook: (id: string) => void;
}

function BookCard({
    book,
    statuses,
    loading,
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

            <Button
                htmlType='button'
                onClick={() => removeBook(book.id)}
                disabled={loading}
                danger
            >
                Удалить
            </Button>
        </article>
    )
}

export default BookCard