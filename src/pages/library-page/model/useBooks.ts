import { useEffect, useState } from 'react';

import type { Book, BookStatus } from '@/entities/books/';

import { createBook, deleteBook, getBooks, updateStatus } from '../api/bookService';

interface UseBooksReturn {
  books: Book[];
  addBook: (book: Book) => void;
  removeBook: (id: string) => void;
  changeStatus: (id: string, newStatus: BookStatus) => void;
  loading: boolean;
}

function useBooks(): UseBooksReturn {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    const result = await getBooks();

    setBooks(result);
  };

  useEffect(() => {
    let active = true;

    const loadBooks = async () => {
      try {
        const result = await getBooks();

        if (active) {
          setBooks(result);
        }
      } catch {
        if (active) {
          alert('Не удалось загрузить книги');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void loadBooks();

    return () => {
      active = false;
    };
  }, []);

  const changeStatus = async (id: string, newStatus: BookStatus) => {
    try {
      setLoading(true);
      await updateStatus(id, newStatus);

      setBooks((prevBooks) =>
        prevBooks.map((book) => {
          if (book.id === id) {
            return {
              ...book,
              status: newStatus,
            };
          }

          return book;
        }),
      );
    } catch {
      alert('Не удалось обновить статус');
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (book: Book) => {
    try {
      setLoading(true);
      await createBook(book);

      await fetchBooks();
    } catch {
      alert('Не удалось добавить книгу');
    } finally {
      setLoading(false);
    }
  };

  const removeBook = async (id: string) => {
    try {
      setLoading(true);
      await deleteBook(id);

      await fetchBooks();
    } catch {
      alert('Не удалось удалить книгу');
    } finally {
      setLoading(false);
    }
  };

  return {
    books,
    addBook,
    removeBook,
    changeStatus,
    loading,
  };
}

export default useBooks;
