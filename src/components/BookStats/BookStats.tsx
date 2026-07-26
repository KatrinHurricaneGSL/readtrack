import type { BookStatus, Book } from "../../types/book"
import { statuses } from "../../data/bookStatuses";
import styles from "./BookStats.module.css"
import { Delimeter } from "../Delimeter";

interface BookStatsProps {
    books: Book[];
}

function BookStats({ books }: BookStatsProps) {
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
            <p>Всего книг: {totalBooks}</p> <Delimeter />
            {statuses.map(status => (
                <p key={status}>
                    {status}: {statusCount[status]} <Delimeter />
                </p>
            ))}
        </section>
    )
}

export default BookStats