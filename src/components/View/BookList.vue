<!-- BookList.vue -->
<template>
    <div>
      <ul>
        <h1>All Books </h1>
        <li v-for="book in allBooks" :key="book.id">
          {{ book.name }} - ISBN: {{ book.isbn }}
        </li>
        <h1>Books with ISBN > 1000, Ordered by ISBN (Ascending), Limited to 10 Results</h1>

        <li v-for="book in books" :key="book.id">
          {{ book.name }} - ISBN: {{ book.isbn }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
    import { ref, onMounted } from 'vue';
    import db from '../../firebase/init.js'
    import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
  
    export default {
      setup() {
        const books = ref([]);
        const allBooks = ref([]);

        const fetchAllBooks = async () => {
        try {
          const q = query(collection(db, 'books'));
          const querySnapshot = await getDocs(q);
          const booksArray = [];
          querySnapshot.forEach((doc) => {
            booksArray.push({ id: doc.id, ...doc.data() });
          });
          allBooks.value = booksArray;
        } catch (error) {
          console.error('Error fetching all books:', error);
        }
      };
  
        const fetchBooks = async () => {
          try {
            const q = query(
              collection(db, 'books'),
              where('isbn', '>', 1000),
              orderBy('isbn'),
              limit(10)
            );
            const querySnapshot = await getDocs(q);
            const booksArray = [];
            querySnapshot.forEach((doc) => {
              booksArray.push({ id: doc.id, ...doc.data() });
            });
            books.value = booksArray;
          } catch (error) {
            console.error('Error fetching books:', error);
          }
        };
  
        onMounted(() => {
          fetchBooks();
          fetchAllBooks()
        });
  
        return {
          books,
          allBooks
        };
      }
    };
  </script>
  