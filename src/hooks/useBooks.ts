import { useEffect, useState } from "react"
import type { Book, BookStatus } from "../types/book"
import { initialBooks } from "../data/books"

interface UseBooksReturn {
    books: Book[];
    addBook: (book: Book) => void;
    removeBook: (id: string) => void;
    changeStatus: (id: string, newStatus: BookStatus) => void;
}

function useBooks(): UseBooksReturn {
    const [books, setBooks] = useState<Book[]>(() => {
        const savedBooks = localStorage.getItem("books")

        if (savedBooks) {
            try {
                const parsedBooks = JSON.parse(savedBooks);
                if (Array.isArray(parsedBooks)) {
                    return parsedBooks as Book[]
                }
            } catch {
                console.error("Не удалось загрузить книги из localStorage")
            }
        }

        return initialBooks
    })

    useEffect(() => {
        localStorage.setItem(
            "books",
            JSON.stringify(books)
        )
    }, [books])

    const changeStatus = (
        id: string,
        newStatus: BookStatus
    ): void => {
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
    }

    const addBook = (book: Book): void => {
        setBooks((prevBooks) => [...prevBooks, book])
    }

    const removeBook = (id: string): void => {
        setBooks((prevBooks) =>
            prevBooks.filter((book) => book.id !== id)
        )
    }

    return {
        books,
        addBook,
        removeBook,
        changeStatus,
    }
}

export default useBooks