<template>
  <div class="category">
    <div class="articles" >
      <Article
         v-for="(article, idx) in articles"
        :key="idx"
        :urlToImage="article.urlToImage"
        :title="article.title"
        :description="article.description"
        :url="article.url"
      />
    </div>
  </div>
</template>

<script>
import Article from "../components/Article";
export default {
  data() {
    return {
      selectedCategory: this.$route.params.category,
      articles: []
    };
  },
  components: {
    Article
  },
  watch: {
    $route(to, from) {
      if (to.params.category !== from.params.category) {
        this.fetchCategoryArticles(to.params.category);
      }
    }
  },
  methods: {
    fetchCategoryArticles(selectedCategory) {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=de&category=${selectedCategory}&apiKey=aea2c011a7e24b5192fcbd65533e0103`
      )
        .then(res => res.json())
        .then(data => {
          this.articles = data.articles.filter(article => article.description != null )
          this.selectedCategory = selectedCategory;
        });
    }
  },
  created() {
    this.fetchCategoryArticles(this.$route.params.category);
  }
};
</script>

<style lang="scss"></style>
