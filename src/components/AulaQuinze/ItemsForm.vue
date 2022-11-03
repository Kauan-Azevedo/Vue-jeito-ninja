<template>
    <div class="list-group">
        <div class="green elevation-10 white--text py-2 mx-3" v-for="value in list" v-bind:key="value.texto">
            <h2>{{ value.texto }}</h2>
        </div>
    </div>
</template>

<script>
import eventBus from '@/eventBus';

export default {
    name: "ItemsForm",

    created() {
        var cm = this;
        eventBus.$on('submit', function (texto) {
            if (texto) {
                cm.list.push({ texto: texto })
            }
        })
    },

    data() {
        return {
            list: [{ texto: '' }],
        }
    }
}
</script>
