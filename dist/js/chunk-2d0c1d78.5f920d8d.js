(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1d78"],{4886:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category"},[r("div",{staticClass:"articles"},t._l(t.articles,(function(t,e){return r("Article",{key:e,attrs:{urlToImage:t.urlToImage,title:t.title,description:t.description,url:t.url}})})),1)])},c=[],n=(r("a4d3"),r("e01a"),r("4de4"),r("d3b7"),r("3e3e")),i={data:function(){return{selectedCategory:this.$route.params.category,articles:[]}},components:{Article:n["a"]},watch:{$route:function(t,e){t.params.category!==e.params.category&&this.fetchCategoryArticles(t.params.category)}},methods:{fetchCategoryArticles:function(t){var e=this;fetch("https://newsapi.org/v2/top-headlines?country=de&category=".concat(t,"&apiKey=aea2c011a7e24b5192fcbd65533e0103")).then((function(t){return t.json()})).then((function(r){var a=r.articles.filter((function(t){return null!=t.description}));e.articles=a.filter((function(t){return null!=t.urlToImage})),e.selectedCategory=t}))}},created:function(){this.fetchCategoryArticles(this.$route.params.category)}},o=i,s=r("2877"),l=Object(s["a"])(o,a,c,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c1d78.5f920d8d.js.map