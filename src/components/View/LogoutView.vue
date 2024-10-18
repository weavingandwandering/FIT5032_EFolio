<template>
    <div>
      <h1>Log Out</h1>
      <p v-if="user">Logged in as: {{ user.email }}</p>
      <p v-else>Not logged in</p>
      <button @click="logout">Log Out</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
  
  const user = ref(null);
  const auth = getAuth();
  
  onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        user.value = currentUser;
        console.log("Current user:", currentUser.email); // Log current user
      } else {
        console.log("No user is logged in");
      }
    });
  });
  
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('User logged out');
        user.value = null; // Reset the user state after logout
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };
  </script>
  