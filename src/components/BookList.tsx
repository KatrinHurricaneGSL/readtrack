import BookCard from './BookCard'

function BookList({ 
    books,
    statuses,
    changeStatus,
    removeBook,
}) {
    return (
        <ul className="book-list">
            {books.map((book) => (
                <li key={book.title}>
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