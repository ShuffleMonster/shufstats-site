<template>
  <div id="app">
    <Head/>
    <Navbar/>
    <Body/>
    <Footer/>
    <!-- <Index/>
    <Faq/> -->
    </div>
</template>

<script>
import Head from './components/Head.vue'
import Navbar from './components/Navbar.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'
// import Index from './components/Index.vue'
// import Join from './components/Join.vue'
// import Faq from './components/Faq.vue'


export default {
  name: 'app',
  components: {
    Head,
    Navbar,
    Body,
    Footer
    // Index
    // Join,
    // Faq,
  }
}
</script>

<style>




#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #f5bc00;
}
</style>
