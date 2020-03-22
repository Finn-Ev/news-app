<template>
  <div class="article card">
    <img class="card-img-top" :src="urlToImage" alt />
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{description}}</p>
      <a :href="url" class="">Zum Artikel</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["urlToImage", "title", "description", "url"]
};
</script>

<style lang="scss">
.article {
  width: 30vw;
  min-width: 300px;
  margin: 1rem;
  .card-img-top{
      max-height: 300px;
  }
}
</style>

