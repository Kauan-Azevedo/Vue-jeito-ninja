<template>
    <div class="container">
        <h1>VueJS aula 10</h1>
        <div>
            <!-- <p>Nome: {{ nome }}</p>
            <p>{{ toUpperCase }}</p> -->
            <!-- <p>{{ fullName }}</p> -->
            <p>{{ fullNameComputed }}</p>
        </div>
        <div class="form-names">
            <label for="firstName">Nome
                <input name="firstName" type="text" placeholder="Digite um nome" v-model="firstName">
            </label>
            <label for="lastName">Sobrenome
                <input name="LastName" type="text" placeholder="Digite um sobrenome" v-model="lastName">
            </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            fullName: ''
        }
    },
    computed: {
        // toUpperCase() {
        //     return this.nome.toUpperCase()
        // }
        fullNameComputed() {
            return `${this.firstName} ${this.lastName}`
        }
    },
    watch: {
        // nome(newValue, oldValue) {
        //     console.log("Novo valor: ", newValue)
        //     console.log("Valor Antigo: ", oldValue)
        // }
        // firstName(newValue) {
        //     this.fullName = newValue + ' ' + this.lastName
        // },
        // lastName(newValue) {
        //     this.fullName = this.firstName + ' ' + newValue
        // }
    },
    methods: {

    }
}
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.form-names {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.form-names label {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

input {
    min-height: 25px;
    border: 1px solid rgba(0, 0, 0, 0.137);
    border-radius: 7px;
    outline: none;
    transition: border .2s ease;

}

input:hover {
    border: 2px solid rgba(0, 0, 0, 0.200);
}
</style>
