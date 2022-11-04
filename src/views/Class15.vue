<template>
  <div class="container">
    <FormVue />

    <v-divider class="my-5 mx-3"></v-divider>

    <ItemsForm />
  </div>
</template>

<script>
import FormVue from "@/components/Class15/FormVue.vue";
import ItemsForm from "@/components/Class15/ItemsForm.vue";

export default {
  components: {
    FormVue,
    ItemsForm,
  },
};
</script>

<style scoped>
input {
  width: 100%;
  min-height: 60px;
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 5px;
}

button {
  width: 100%;
  min-height: 45px;
}
</style>
