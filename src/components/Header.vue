<template>
  <div class="header">
    <nav class="navbar navbar-expand navbar-light">
      <router-link class="navbar-brand text-white ml-5" to="/">News-App</router-link>
      <form @submit="handleSubmit" class="form-inline my-1 ml-auto mr-5">
        <div class="input-group">
          <input
            v-model="searchTerm"
            type="text"
            class="form-control"
            placeholder="Nach Artikeln suchen"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-dark" type="button" id="button-addon2">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </nav>

    <div class="sub-navbar-wrapper bg-light">
      <div class="sub-navbar">
        <router-link class="category-link" to="/kategorie/corona">Corona</router-link>
        <router-link class="category-link" to="/kategorie/politik">Politik</router-link>
        <router-link class="category-link" to="/kategorie/finanzen">Finanzen</router-link>
        <router-link class="category-link" to="/kategorie/wissen">Wissen</router-link>
        <router-link class="category-link" to="/kategorie/gesundheit">Gesundheit</router-link>
        <router-link class="category-link" to="/kategorie/sport">Sport</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$router.push(`/suche/${this.searchTerm}`);
      this.searchTerm = "";
    }
  }
};
</script>

<style lang="scss">
.navbar {
  background-color: rgb(206, 43, 43);
  .navbar-brand {
    border-bottom: none;
    padding-bottom: 0 !important;
  }
}

.sub-navbar {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;

  .category-link {
    color: black;
    padding: 10px 0;
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid black;
      padding-bottom: 8px;
    }
  }
}
</style>