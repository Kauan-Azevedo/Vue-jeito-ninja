<template>
    <div class="main">
        <h1>VueJS aula 13</h1>
        <div class="container">
            <CardsComponent />
            <CardsComponent />
            <CardsComponent />
            <CardsComponent />
        </div>
    </div>
</template>

<script>
import CardsComponent from '@/components/CardsComponent'

export default {
    components: {
        CardsComponent
    }
}

</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    align-items: center;
    justify-content: center;
}
</style>
