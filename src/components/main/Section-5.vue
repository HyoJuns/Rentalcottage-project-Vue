<template>
    <section class="section">
        <div class="section__wrap">
            <h2 class="section__heading">
                {{ title }}
            </h2>
            <p class="section__subheading">
                {{ subTitle }}
            </p>

        </div>
    </section>
</template>

<script>
export default {
    name: "Section-5",
    data ()
    {
        return {
            title : 'facilities',
            subTitle : '행복펜션 부대시설'
        }
    }
}
</script>

<style scoped>
    .section
    {
        padding-top: 100px;
        height: 100vh;
        background-color: #444;
        text-align: center;
    }
    .section__heading
    {
        font-size: 4rem;
        text-transform: uppercase;
        letter-spacing: 8px;
    }
    .section__subheading
    {
        font-size: 2rem;
        letter-spacing: 8px;
    }
</style>
