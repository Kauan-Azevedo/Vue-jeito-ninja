<template>
    <v-card elevation="5" class="my-5 px-2">
        <label for="message">Texto:
            <v-text-field v-model="texto"></v-text-field>
        </label>
        <v-btn color="primary" elevation="2" class="my-3" @click.stop.prevent="submit()">Enviar</v-btn>
    </v-card>
</template>

<script>
import eventBus from '@/eventBus'

export default {
    name: "FormVue",
    data() {
        return {
            texto: this.texto ? this.texto : ''
        }
    },
    methods: {
        submit() {
            console.log("Envinado...")
            console.log(this.texto)
            eventBus.$emit('submit', this.texto)
        }
    },
}
</script>
