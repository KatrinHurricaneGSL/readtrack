import type {Book} from "../types/book"

export const initialBooks: Book[] = [
  {
    id: "1",
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    status: "В планах",
    image: "https://placehold.co/120x180?text=Book",
  },
  {
    id: "2",
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    status: "Прочитано",
    image: "https://placehold.co/120x180?text=Book",
  },
  {
    id: "3",
    title: "Герой нашего времени",
    author: "Михаил Лермонтов",
    year: 1840,
    status: "Читаю",
    image: "https://placehold.co/120x180?text=Book",
  }
]