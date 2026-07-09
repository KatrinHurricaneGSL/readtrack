function BookCard({
    book,
    statuses,
    changeStatus,
    removeBook
}) {
    return (
        <article className="book-card">
            <div className='book-card-content'>
                <img
                    className='book-img'
                    src={book.image}
                    alt={`Обложка книги ${book.title}`}
                />

                <div className="book-info">
                    <h3 className="book-name">{book.title}</h3>
                    <p className="book-description">{book.author}</p>
                    <p className="book-description book-year">{book.year}</p>
                    <p className="book-description">{book.status}</p>
                </div>

                <select
                    value={book.status}
                    onChange={(event) =>
                        changeStatus(book.title, event.target.value)
                    }
                >
                    {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>
            </div>

            <button
                className='button'
                type='button'
                onClick={() => removeBook(book.title)}>
                Удалить
            </button>
        </article>
    )
}

export default BookCard