import { useState } from 'react'
import type { Book } from "../../types/book"
import styles from "./AddBookForm.module.css"
import { Button } from '../Button';

interface AddBookFormProps {
    addBook: (book: Book) => void;
    loading?: boolean
}

function AddBookForm({ addBook, loading }: AddBookFormProps) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
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
            className={styles.form}
            onSubmit={handleSubmit}
        >

            <label className={styles.field}>
                Название книги
                <input
                    className={styles.input}
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </label>

            <label className={styles.field}>
                Имя автора
                <input
                    className={styles.input}
                    type="text"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
            </label>

            <label className={styles.field}>
                Год издания
                <input
                    className={styles.input}
                    type="number"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                />
            </label>

            <Button
                htmlType="submit"
                disabled={loading}
            >
                {loading ? "Загрузка..." : "Добавить"}
            </Button>

            {error &&
                <p className={styles.error}>
                    {error}
                </p>
            }
        </form>
    )
}

export default AddBookForm