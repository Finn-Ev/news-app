<template>
  <div class="search-results">
    <p class="query-info">Ergebnisse für "{{searchTerm}}":</p>
    <div class="articles">
      <Article :v-if="urlToImage"
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
      searchTerm: this.$route.params.searchTerm,
      articles: []
    };
  },
  components: {
    Article
  },
  watch: {
    $route(to, from) {
      if (to.params.searchTerm !== from.params.searchTerm) {
        this.fetchSearchTermArticles(to.params.searchTerm);
      }
    }
  },
  methods: {
    fetchSearchTermArticles(searchTerm) {
      fetch(
        `http://newsapi.org/v2/everything?language=de&q=${searchTerm}&sortBy=publishedAt&pageSize=50&apiKey=aea2c011a7e24b5192fcbd65533e0103`
      )
        .then(res => res.json())
        .then(data => {
          this.articles = data.articles.filter(article => article.description != null)
          this.searchTerm = searchTerm;
          console.log(this.articles);
        });
    }
  },
  created() {
    this.fetchSearchTermArticles(this.$route.params.searchTerm);
  }
};
</script>

<style lang="scss">
.search-results {
  .query-info {
    margin-top: 1rem;
    margin-bottom: -5px;
    text-align: center;
    font-size: 1.75rem;
    font-weight: 200;
  }
}
</style>
