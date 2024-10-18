<template>
    <div class="login container">
      <h1 class="text-center my-4">Login Page</h1>
      <form @submit.prevent="submitForm" class="p-4 border rounded">
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Enter your username"
          v-model="formData.username"/>
         
        </div>
  
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
          v-model="formData.role"/>
         
        </div>
  
        <button type="submit" class="btn btn-primary w-100">Login</button>
        

      </form>
        <div v-if="!isAuthenticated.result" class="text-danger"> {{error.error}} </div>
    </div>
  </template>
  
  <script setup>

    import { ref } from 'vue';
    import { useRouter } from 'vue-router'

    const formData = ref({
        username: '',
        password: '',
    });

    const validData = ref({
        username: "FIT5032",
        password: "student@5032"
    });


    const router = useRouter()


    const error = ref({
        error: null
    })
    const submitForm = () => {
        authenticateUser()
        if(isAuthenticated.value.result === true){
            router.push("/about")
        } else{
            error.value.error = "The username or password do not match our records."
        }

       
    };

    const isAuthenticated = ref({result: false});
 

    const authenticateUser = () => {
        if(validData.value.username === formData.value.username && validData.value.password === formData.value.password){
            isAuthenticated.value.result = true;
        } else {
            isAuthenticated.value.result = false;
                }
    };

    
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  
  