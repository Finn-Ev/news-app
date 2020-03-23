<template>
  <footer>
     <i @click="scrollToTop" class="fas fa-chevron-up"></i>
    <div>
      Nachrichtenquelle:
      <a class="link" href="https://newsapi.org/">News API</a>
    </div>
   
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop(){
      window.scroll(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  i {
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 10px;

    &:hover{
      transform: translateY(-3px);
    }
  }
  div {
    padding-bottom: 2rem;
  }
}
</style>