<template>
    <section class="section">
        <h2 class="section__title">
            {{title}}
        </h2>
    </section>
</template>

<script>
export default {
    name: "Section-3",
    data ()
    {
        return{
            title : "시원한 계곡 속으로"
        }
    }
}
</script>

<style scoped>
    .section
    {
        padding-top : 100px;
        min-height: 100vh;

        background-image: url("../../assets/section-3.jpg");
        background-attachment: fixed;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
    }
    .section::before
    {
        content: '';

        width: 100%;
        height: 100%;

        position : absolute;
        left : 0;
        top : 0;
        background-color: rgba(0,0,0,.5);
    }
    .section__title
    {
        width: 0%;
        font-size: 4rem;
        position : relative;

        letter-spacing: 5px;
        font-weight: 700;
        text-shadow: 1px 1px 50px #fff;

        user-select: none;
        transition: width 10s ease;
        text-align: center;
    }
    .section__title:hover
    {
        width: 100%;
    }
</style>
