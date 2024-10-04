<script setup>
// import JSON from './components/JSON.vue';
import Header from './components/Header.vue'
</script>

<template>
  <header>
    <Header/>
  </header>

  <main>
    <router-view></router-view>

    <!-- <Form /> -->
  </main>
</template>
<script>
export default {
  methods: {
    showHeader() {
      const noHeaderPaths = ['/getbookcount'];
      return !noHeaderPaths.includes(this.$route.path);
    }
  }
};
</script>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.about,.login{
  text-align: center;
}


@media (min-width: 1024px) {
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
}
</style>
