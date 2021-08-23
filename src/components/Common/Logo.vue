<template>
    <figure class="image__logo" v-if="data">
        <router-link to="/">
            <img src="../../assets/logo.png" alt="Logo">
        </router-link>
    </figure>
</template>

<script>
export default {
    props : ['data'],
    name: "Logo"
}
</script>

<style scoped>
    .image__logo
    {
        float : left;

        width: 150px;
        margin-top : .75rem;

        /*outline: 1px solid blue;*/
    }
    .image__logo img
    {
        width: 100%;
        vertical-align: top;
    }
</style>

