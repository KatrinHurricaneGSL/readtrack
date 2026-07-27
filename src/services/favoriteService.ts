export function getFavorites(): string[] {
    const favorites = localStorage.getItem("favorites")

    if(!favorites) {
        return []
    }

    try {
        const parsedFavorites = JSON.parse(favorites)

        if(Array.isArray(parsedFavorites)) {
            return parsedFavorites
        }
    } catch {
        console.error("Не удалось загрузить избранное");
    }

    return []
}

export function saveFavorites (ids: string[]) {
    localStorage.setItem("favorites", JSON.stringify(ids))
}