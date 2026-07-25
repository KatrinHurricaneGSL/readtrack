import { useState } from "react";
import type { Book, SortOrder, StatusFilter } from "../types/book";


function useBookFilters(books: Book[]) {
    const [searchQuery, setSearchQuery] = useState("")
    const [sortOrder, setSortOrder] = useState<SortOrder>("default")
    const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("all")

    const filteredBooks = books.filter((book) => {
        const isSearchMatch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
        const isStatusMatch = selectedStatus === "all" ||
            book.status === selectedStatus

        return isSearchMatch && isStatusMatch
    })

    const visibleBooks = sortOrder === "default" ? filteredBooks
        : [...filteredBooks].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.year - b.year
            }

            return b.year - a.year
        })


    return {
        searchQuery,
        setSearchQuery,
        sortOrder,
        setSortOrder,
        selectedStatus,
        setSelectedStatus,
        visibleBooks
    }
}

export default useBookFilters