import { useState } from 'react'

function AddBookForm(props) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState("")

    return (
        <form className="add-book-form">
            <h2>Добавить книгу</h2>

            <label className="form-field">
                Название книги
                <input
                    className="input"
                    type="text"
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)}
                />
            </label>

            <label className="form-field">
                Имя автора
                <input 
                    className="input"
                    type="text"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
            </label>

            <label className="form-field">
                Год издания
                <input 
                    className="input"
                    type="number"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                />
            </label>

            <button
                className="button"
                type="button"
                onClick={() => {
                    props.addBook({
                        title: title,
                        author: author,
                        year: Number(year),
                        status: "В планах",
                        image: "https://placehold.co/120x180?text=Book",
                    })
                }}
            >
                Добавить книгу
            </button>
        </form>
    )
}

export default AddBookForm