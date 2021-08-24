<template>
    <section class="section">
        <img :src="imagePath" alt="background" class="section__background">
        <h1 class="section__title">
            {{title}}
        </h1>
    </section>
</template>

<script>
export default {
    name: "SubpageTitle",
    props : ['imagePath', 'title']
}
</script>

<style scoped>
    .section
    {
        width : 100vw;
        padding-top : 100px;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .section::before
    {
        content : '';
        position : absolute;
        left :0;
        top : 0;
        width: 100%;
        height: 100vh;

        background-color: rgba(0,0,0,.4);
        z-index: -1;
    }
    .section__background
    {
        width: inherit;
        height: inherit;

        position: absolute;
        left : 0;
        top : 0;
        object-fit: cover;
        z-index: -2;
    }
    .section__title
    {
        text-shadow: 1px 1px 22px #fff, 1px 1px 1px #222;
        letter-spacing: 10px;
        user-select: none;
        font-size: 4vmax;
    }
</style>
