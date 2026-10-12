import { statuses } from "../../model/bookStatuses";
import type { Book, BookStatus } from "../../model/book";
import styles from "./BookStats.module.css"

interface BookStatsProps {
    books: Book[];
}

export function BookStats({ books }: BookStatsProps) {
    const totalBooks = books.length

    const statusCount = books.reduce<Record<BookStatus, number>>((acc, book) => {
        acc[book.status] += 1
        return acc
    }, {
        "В планах": 0,
        "Читаю": 0,
        "Прочитано": 0,
    })

    return (
        <section className={styles.stats}>
            <div className={styles.item}>
                <span>Всего книг</span>
                <strong>{totalBooks}</strong>
            </div>

            {statuses.map(status => (
                <div className={styles.item} key={status}>
                    <span>{status}</span>
                    <strong>{statusCount[status]}</strong>
                </div>
            ))}
        </section>
    )
}
