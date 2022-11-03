<template>
    <v-container>
        <h1>Aula 17 - Mixins</h1>
        <v-divider></v-divider>

        <h2>{{ titulo }}</h2>
        <v-btn @click.stop.prevent="getUsers" class="red white--text">Encontrar Usuários</v-btn>
    </v-container>
</template>

<script>
import Mixin from '@/Mixin'

export default {
    data() {
        return {
            titulo: "VueJS do jeito Ninja"
        }
    },
    created() {
        console.log("Created...")
    },
    mixins: [Mixin],

    // methods: {
    //     getUsers() {
    //         console.log("Get users...")
    //     }
    // }
}
</script>
