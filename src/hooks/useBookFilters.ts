import { useState } from "react";
import type { Book, SortOrder, StatusFilter } from "../types/book";


function useBookFilters(
    books: Book[],
    showFavoritesOnly: boolean,
    isFavorite: (id: string) => void
) {
    const [searchQuery, setSearchQuery] = useState("")
    const [sortOrder, setSortOrder] = useState<SortOrder>("default")
    const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("all")

    const filteredBooks = books.filter((book) => {
        const isSearchMatch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())

        const isStatusMatch = selectedStatus === "all" ||
            book.status === selectedStatus

        const isFavoriteMatch = !showFavoritesOnly || isFavorite(book.id)

        return isSearchMatch && isStatusMatch && isFavoriteMatch
    })

    const visibleBooks = sortOrder === "default" ? filteredBooks
        : [...filteredBooks].sort((a, b) => {
            if (sortOrder === "title-asc") {
                return a.title.localeCompare(b.title)
            }

            if (sortOrder === "title-desc") {
                return b.title.localeCompare(a.title)
            }
            
            if (sortOrder === "year-asc") {
                return a.year - b.year
            }

            
            if (sortOrder === "year-desc") {
                return b.year - a.year
            }

            return 0
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