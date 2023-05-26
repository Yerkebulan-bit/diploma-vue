<template>
<div class="page">
  <main class="content">
    <header-component></header-component>
    <suspense> <router-view></router-view></suspense>
  </main>
  <footer-component></footer-component>
</div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import HeaderComponent from "@/components/header/header-component.vue";
import FooterComponent from "@/components/footer/footer-component.vue";

export default defineComponent({
  components: {FooterComponent, HeaderComponent}
})

</script>

<style>
.page{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content{
  flex: 1;
}
</style>
<!--test-->