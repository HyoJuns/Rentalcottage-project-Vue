<template>
    <section class="section">
        <div class="section__wrap">
            <h2 class="section__heading">
                {{ title }}
            </h2>
            <p class="section__subheading">
                {{ subTitle }}
            </p>
            <div class="section__world">

            </div>
        </div>
    </section>
</template>

<script>
import CardModal from "../Common/CardModal";
export default {

    name: "Section-4",
    data()
    {
        return {
            title : 'rooms',
            subTitle:  '행복펜션 객실'
        }
    },
    components : {
        CardModal
    },
    props : ['cardInfo']
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
    .section__world
    {
        perspective: 1000px;
    }
</style>
