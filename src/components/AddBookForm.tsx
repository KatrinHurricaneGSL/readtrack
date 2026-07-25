import { useState } from 'react'
import type { Book } from "../types/book"

interface AddBookFormProps {
    addBook: (book: Book) => void;
}

function AddBookForm({ addBook }: AddBookFormProps) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        setError("")

        if (!title.trim()) {
            setError("Введите название книги")
            return
        }

        if (!author.trim()) {
            setError("Введите имя автора")
            return
        }

        const numYear = Number(year);

        if (isNaN(numYear) || numYear < 1000 || numYear > 2026) {
            setError("Введите корректный год")
            return
        }

        addBook({
            id: crypto.randomUUID(),
            title: title.trim(),
            author: author.trim(),
            year: numYear,
            status: "В планах",
            image: "https://placehold.co/120x180?text=Book",
        })

        setTitle("")
        setAuthor("")
        setYear("")
    }

    return (
        <form
            className="add-book-form"
            onSubmit={handleSubmit}
        >
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
                type="submit"
            >
                Добавить книгу
            </button>

            {error &&
                <p className="from-error">
                    {error}
                </p>
            }
        </form>
    )
}

export default AddBookForm