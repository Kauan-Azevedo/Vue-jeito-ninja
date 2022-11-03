<template>
    <div class="sidebar">
        <ul>
            <li>
                <a href="">Inicio</a>
            </li>
            <li>
                <a href="">Conteudo</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "SideBar"
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
}

.sidebar {
    width: 150px;
    max-width: 200px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
