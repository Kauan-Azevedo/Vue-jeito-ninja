<template>
    <div class="container">

        <FormVue />

        <v-divider class="my-5 mx-3"></v-divider>

        <ItemsFormVue />
    </div>
</template>

<script>
import FormVue from '@/components/AulaQuinze/FormVue.vue';
import ItemsFormVue from '@/components/AulaQuinze/ItemsForm.vue';

export default {
    components: {
        FormVue,
        ItemsFormVue,
    }
}

</script>

<style scoped>
input {
    width: 100%;
    min-height: 60px;
    outline: none;
    border: 1px solid black;
    border-radius: 10PX;
    padding: 0 5px;
}

button {
    width: 100%;
    min-height: 45px;

}
</style>
