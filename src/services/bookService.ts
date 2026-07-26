import type { Book, BookStatus } from "../types/book"
import { axios } from "./apiClient"


export async function getBooks(): Promise<Book[]> {
    const result = await axios.get("/books")
    return result.data
}

export async function createBook(book: Book): Promise<void> {
    await axios.post("/books", book)
}

export async function deleteBook(id: string): Promise<void> {
    await axios.delete(`/books/${id}`)
}

export async function updateStatus(
    id: string,
    newStatus: BookStatus
): Promise<void> {
    await axios.patch(`/books/${id}`, {
        status: newStatus,
    })
}