import { useState, useEffect } from "react";
import { getFavorites, saveFavorites } from "../services/favoriteService";

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>(getFavorites)

    useEffect(() => {
        saveFavorites(favorites)
    }, [favorites])

    const isFavorite = (id: string): boolean => {
        return favorites.includes(id)
    }

    const toggleFavorite = (id: string): void => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(id)) {
                return prevFavorites.filter(favoriteId => favoriteId !== id)
            }

            return [...prevFavorites, id]
        })
    }

    return {
        favorites,
        isFavorite,
        toggleFavorite
    }
}