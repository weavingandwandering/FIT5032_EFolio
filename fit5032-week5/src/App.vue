<script setup>
// import JSON from './components/JSON.vue';
import Form from './components/Form.vue'
import Header from './components/Header.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> 

     <div class="wrapper">
      <JSON msg="You did it!" />
    </div> -->
    <Header/>
  </header>

  <main>
    <router-view></router-view>

    <!-- <Form /> -->
  </main>
</template>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.about{
  text-align: center;
}


/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) );
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
