import BookCard from './BookCard'
import type {Book, BookStatus} from "../types/book"

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
        <ul className="book-list">
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