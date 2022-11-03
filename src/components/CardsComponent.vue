<template>
    <div class="cards">
        <CardContent />
    </div>
</template>

<script>
import CardContent from "@/components/CardContent"


export default {
    components: {
        CardContent
    }
}

</script>

<style scoped>
.cards {
    width: 33%;
    min-height: 30px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    transition: width .2s ease;
}

.cards:hover {
    width: 35%;
}
</style>
