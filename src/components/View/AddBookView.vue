<template>
    <div>
      <!-- Add Book Form -->
      <h1>Add Book</h1>
      <form @submit.prevent="addBook">
        <div>
          <label for="isbn">ISBN: </label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
          <label for="name">Name: </label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Add Book</button>
      </form>
  
      <hr />
  
      <!-- Update Book Form -->
      <h1>Update Book</h1>
      <form @submit.prevent="updateBook">
        <div>
          <label for="updateBookId">Book ID to Update: </label>
          <input type="text" v-model="updateBookId" id="updateBookId" required />
        </div>
        <div>
          <label for="updateNewIsbn">New ISBN: </label>
          <input type="text" v-model="updateNewIsbn" id="updateNewIsbn" required />
        </div>
        <div>
          <label for="updateNewName">New Name: </label>
          <input type="text" v-model="updateNewName" id="updateNewName" required />
        </div>
        <button type="submit">Update Book</button>
      </form>
  
      <hr />
  
      <!-- Delete Book Form -->
      <h1>Delete Book</h1>
      <form @submit.prevent="deleteBook">
        <div>
          <label for="deleteBookId">Book ID to Delete: </label>
          <input type="text" v-model="deleteBookId" id="deleteBookId" required />
        </div>
        <button type="submit">Delete Book</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import db from '../../firebase/init.js'
  import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
  
  export default {
    setup() {
      // Add Book
      const isbn = ref('');
      const name = ref('');
  
      const addBook = async () => {
        try {
          const isbnNumber = Number(isbn.value);
          if (isNaN(isbnNumber)) {
            alert('ISBN must be a valid number');
            return;
          }
          await addDoc(collection(db, 'books'), {
            isbn: isbnNumber,
            name: name.value
          });
          isbn.value = '';
          name.value = '';
          alert('Book added successfully!');
        } catch (error) {
          console.error('Error adding book: ', error);
        }
      };
  
      // Update Book
      const updateBookId = ref('');
      const updateNewIsbn = ref('');
      const updateNewName = ref('');
  
      const updateBook = async () => {
        try {
          const bookRef = doc(db, 'books', updateBookId.value);
          await updateDoc(bookRef, {
            isbn: Number(updateNewIsbn.value),
            name: updateNewName.value
          });
          alert('Book updated successfully!');
          updateBookId.value = '';
          updateNewIsbn.value = '';
          updateNewName.value = '';
        } catch (error) {
          console.error('Error updating book: ', error);
        }
      };
  
      // Delete Book
      const deleteBookId = ref('');
  
      const deleteBook = async () => {
        try {
          const bookRef = doc(db, 'books', deleteBookId.value);
          await deleteDoc(bookRef);
          alert('Book deleted successfully!');
          deleteBookId.value = '';
        } catch (error) {
          console.error('Error deleting book: ', error);
        }
      };
  
      return {
        isbn,
        name,
        addBook,
        updateBookId,
        updateNewIsbn,
        updateNewName,
        updateBook,
        deleteBookId,
        deleteBook
      };
    }
  };
  </script>
  
  <style scoped>
  form {
    margin-bottom: 20px;
  }
  
  label {
    margin-right: 10px;
  }
  
  hr {
    margin: 20px 0;
  }
  </style>
  