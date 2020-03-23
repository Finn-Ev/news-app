<template>
  <div class="home">
    <h3>Aktuelle Top-Meldungen</h3>
    <div class="articles">
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
  name: "Home",
  data() {
    return {
      articles: []
    };
  },
  components: {
    Article
  },
  methods: {
    fetchTopHeadlines() {
      fetch(
        "https://newsapi.org/v2/top-headlines?country=de&apiKey=aea2c011a7e24b5192fcbd65533e0103"
      )
        .then(res => res.json())
        .then(data => {
          this.articles = data.articles;
        });
    }
  },
  created() {
    this.fetchTopHeadlines();
  }
};
</script>

<style lang="scss" scoped>
.home {
  h3 {
    margin-top: 20px;
    text-align: center;
    font-weight: 400;
  }
}
</style>