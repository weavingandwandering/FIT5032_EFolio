<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  
  <p>
    <select v-model="role">
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  </p>

  <p><button @click="register">Save to Firebase</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const email = ref("");
const password = ref("");
const role = ref("user");  
const router = useRouter();
const auth = getAuth();
const db = getFirestore(); 

const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    

    await setDoc(doc(db, "users", user.uid), {
      email: email.value,
      role: role.value,  
    });

    console.log("Firebase Register Successful with role: ", role.value);
    router.push("/FireLogin");
  } catch (error) {
    console.log("Error:", error.code);
  }
};
</script>
