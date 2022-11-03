<template>
    <v-card elevation="15" shaped class="ma-5 pa-3">
        <img src="../../assets/logo.svg" alt="logo do vuetify">
        <v-divider></v-divider>
        <div class="card-body">
            <slot name="title"></slot>
            <slot name="text"></slot>
            <slot name="action"></slot>

        </div>
    </v-card>
</template>

<script>
export default {
    name: "CardVue",
}

</script>

<style scoped>
img {
    max-height: 200px;
    width: 100%;
    object-fit: 100% 100%;
}
</style>
