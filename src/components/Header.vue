<template>
  <div class="header">
    <nav class="navbar navbar-expand navbar-light">
      <router-link class="navbar-brand text-white" to="/">News-App</router-link>
      <form @submit="handleSubmit" class="form-inline my-1 ml-auto">
        <div class="input-group">
          <input
            v-model="searchTerm"
            type="text"
            class="form-control"
            placeholder="Nach Artikeln suchen"
          />
          <div class="input-group-append">
            <button class="btn btn-dark" type="button" id="button-addon2">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </nav>
    <div @click="toggleCategoryMenu" v-if="width <= 800" class="toggle-category-menu bg-light">
      Kategorien&nbsp;
      <i class="fas fa-caret-down"></i>
    </div>

    <div class="sub-navbar-wrapper bg-light">
      <div @click="closeCategoryMenu" class="sub-navbar" v-if="width > 800 || showCategoryMenu">
        <router-link class="category-link" to="/business">Finanzen</router-link>
        <router-link class="category-link" to="/entertainment">Unterhaltung</router-link>
        <router-link class="category-link" to="/health">Gesundheit</router-link>
        <router-link class="category-link" to="/science">Wissen</router-link>
        <router-link class="category-link" to="/sports">Sport</router-link>
        <router-link class="category-link" to="/technology">Technologie</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      showCategoryMenu: false
    };
  },
  computed: {
    width() {
      return window.innerWidth;
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$router.push(`/suche/${this.searchTerm}`);
      this.searchTerm = "";
    },
    toggleCategoryMenu() {
      this.showCategoryMenu = !this.showCategoryMenu;
    },
    closeCategoryMenu() {
      this.showCategoryMenu = false;
      console.log("ja");
      
    }
  }
};
</script>

<style lang="scss">
.navbar {
  background-color: rgb(206, 43, 43);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-content: center;
    .navbar-brand {
      margin-bottom: 10px;
    }
  }
  .navbar-brand {
    border-bottom: none;
    padding-bottom: 0 !important;
  }
}

.toggle-category-menu {
  text-align: end;
  padding: 10px;
}

.sub-navbar {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  animation: slide-in 0.3s ease;

  @keyframes slide-in {
    from {
      transform: translateX(500px);
    }
    to {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }

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