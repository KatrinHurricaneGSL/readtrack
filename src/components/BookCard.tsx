function BookCard(props) {
    return (
        <article className="book-card">
            <div className='book-card-content'>
                <img
                    className='book-img'
                    src={props.book.image}
                    alt={`Обложка книги ${props.book.title}`}
                />

                <div className="book-info">
                    <h3 className="book-name">{props.book.title}</h3>
                    <p className="book-description">{props.book.author}</p>
                    <p className="book-description book-year">{props.book.year}</p>
                    <p className="book-description">{props.book.status}</p>
                </div>

                <select
                    value={props.book.status}
                    onChange={(event) =>
                        props.changeStatus(props.book.title, event.target.value)
                    }
                >
                    {props.statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>
            </div>

            <button
                className='button'
                type='button'
                onClick={() => props.removeBook(props.book.title)}>
                Удалить
            </button>
        </article>
    )
}

export default BookCard