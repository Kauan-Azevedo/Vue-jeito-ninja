<template>
  <div class="container">
    <SideBar />
    <div>
      <h1>VueJS aula 12</h1>
      <div class="conteudo"></div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  margin: 0 auto;
  max-width: 250px;
  text-align: center;
}

.container {
  width: 100vw;
  min-height: 100;
  display: flex;
}
</style>
