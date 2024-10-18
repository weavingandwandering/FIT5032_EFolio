<template>
    <div>
      <h1>All Books (JSON Format)</h1>
      <pre>{{ books }}</pre>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { collection, getDocs } from 'firebase/firestore';
  import db from '../../firebase/init.js';
  
  export default {
    name: 'GetAllBookAPI',
    setup() {
      const books = ref([]);
  
      const fetchAllBooks = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'books'));
          const booksArray = [];
          querySnapshot.forEach((doc) => {
            const { id, ...bookData } = doc.data(); 
            booksArray.push(bookData);
          });
          books.value = booksArray;
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };
  
      onMounted(() => {
        fetchAllBooks();
      });
  
      return {
        books,
      };
    },
  };
  </script>
  