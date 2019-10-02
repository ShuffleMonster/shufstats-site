<template>
  <div id="app">
    <Head/>
    <Navbar/>
    <!-- <Eth/> -->
    <Body/>
    <Index/>
    <Index2/>
    <Footer/>
    </div>
</template>

<script>
import Head from './components/Head.vue'
import Navbar from './components/Navbar.vue'
// import Eth from './components/Eth.vue'
import Body from './components/Body.vue'
import Index from './components/Index.vue'
import Index2 from './components/Index2.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Head,
    Navbar,
    // Eth,
    Body,
    Index,
    Index2,
    Footer
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
