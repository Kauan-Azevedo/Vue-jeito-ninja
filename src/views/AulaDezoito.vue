<template>
    <v-container>
        <h1>Aula 18 - Vue js ajax com vue-resource</h1>
        <v-btn class="purple white--text" @click.stop.prevent="getUsers()">GET</v-btn>

        <div class="card-users">
            <div class="card-user" v-for="user in users" v-bind:key="user.id">
                <h2>Nome:<br />{{ user.name }}</h2>
                <p>Telefone:<br />{{ user.phone }}</p>
                <p>Username:<br />{{ user.username }}</p>
                <p>Site:<br />{{ user.website }}</p>
            </div>
        </div>
    </v-container>
</template>

<script>
import Aula18 from '@/Mixin/Aula18'

export default {
    name: "AulaDezoito",
    mixins: [Aula18],
    data() {
        return {
            users: [],
        }
    }
}

</script>

<style scoped>
.card-users {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.card-user {
    max-width: 33%;
    min-height: 257px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px 5px;
    padding: 2px 5px;
}
</style>
