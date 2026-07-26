import { useState, useEffect, } from "react"
import type { Book, BookStatus } from "../types/book"
import { createBook, deleteBook, getBooks, updateStatus, } from "../services/bookService"

interface UseBooksReturn {
    books: Book[];
    addBook: (book: Book) => void;
    removeBook: (id: string) => void;
    changeStatus: (id: string, newStatus: BookStatus) => void;
    loading: boolean;
}

function useBooks(): UseBooksReturn {
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async () => {
        setLoading(true)
        const result = await getBooks()

        setBooks(result)
        setLoading(false)
    }

    const changeStatus = async (
        id: string,
        newStatus: BookStatus
    ) => {
        try {
            setLoading(true)
            await updateStatus(id, newStatus)

            setBooks((prevBooks) =>
                prevBooks.map((book) => {
                    if (book.id === id) {
                        return {
                            ...book,
                            status: newStatus,
                        }
                    }

                    return book
                })
            )
        } catch {
            alert("Не удалось обновить статус")
        } finally {
            setLoading(false)
        }
    }

    const addBook = async (book: Book) => {
        try {
            setLoading(true)
            await createBook(book)

            fetchBooks()
        } catch {
            alert("Не удалось добавить книгу")
        } finally {
            setLoading(false)
        }
    }

    const removeBook = async (id: string) => {
        try {
            setLoading(true)
            await deleteBook(id)

            fetchBooks()
        } catch {
            alert("Не удалось добавить книгу")
        } finally {
            setLoading(false)
        }
    }

    return {
        books,
        addBook,
        removeBook,
        changeStatus,
        loading
    }
}

export default useBooks