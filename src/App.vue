<template>
  <div id="app">
    <appHeader />
    <router-view />
    <appFooter/>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer"
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>
<style lang="scss">

:root{
  scroll-behavior: smooth;
}

.router-link-exact-active {
  border-bottom: 2px solid black;
  padding-bottom: 8px !important;

  
  @media screen and (max-width: 800px){
   border-bottom: none !important;
    font-weight: 600;
    
  }
}

.articles{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
