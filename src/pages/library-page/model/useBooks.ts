import { useEffect, useState } from 'react';
import { toast } from 'sonner';

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
          toast.error('Не удалось загрузить книги');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadBooks();

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

      toast.success('Статус книги успешно обновлён');
    } catch {
      toast.error('Не удалось обновить статус');
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (book: Book) => {
    try {
      setLoading(true);
      await createBook(book);
      await fetchBooks();

      toast.success(`Книга ${book.title} успешно добавлена`);
    } catch {
      toast.error('Не удалось добавить книгу');
    } finally {
      setLoading(false);
    }
  };

  const removeBook = async (id: string) => {
    try {
      setLoading(true);
      await deleteBook(id);
      await fetchBooks();

      toast.success('Книга успешно удалена');
    } catch {
      toast.error('Не удалось удалить книгу');
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
