<template>
  <div class="container">
    <h1>VueJS aula 11</h1>

    <div class="conteudo"></div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("Antes de Criar.");
    console.log("Conteudo: ", this.conteudo);
    console.log("el: ", this.$el);
  },
  created() {
    console.log("Criado.");
    console.log("Conteudo: ", this.conteudo);
    console.log("el: ", this.$el);
  },
  beforeMount() {
    console.log("Antes de Montar.");
    console.log("Conteudo: ", this.conteudo);
    console.log("el: ", this.$el);
  },
  mounted() {
    console.log("Montado.");
    console.log("Conteudo: ", this.conteudo);
    console.log("el: ", this.$el);
  },
  bedoreUpdate() {
    console.log("Antes de Atualizar.");
  },
  updated() {
    console.log("Atualizado.");
  },

  data() {
    return {
      conteudo: "Lorem Ipsum",
    };
  },
};
</script>
