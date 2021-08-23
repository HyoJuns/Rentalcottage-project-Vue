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
                <CardModal v-bind:data-list="cardData[0]"></CardModal>
                <CardModal v-bind:data-list="cardData[1]"></CardModal>
                <CardModal v-bind:data-list="cardData[2]"></CardModal>
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
            subTitle:  '행복펜션 객실',
            cardData : [
                {
                    title : '카라반',
                    desc : '친구 혹은 연인이 지내기 편안한 곳',
                    type : {
                        type : '원통형',
                        price : [150000, 90000],
                        minPeople : 2,
                        maxPeople : 2
                    }
                },
                {
                    title : '사랑체',
                    desc : '가족과 친구들이 지내기 편안한 곳',
                    type : {
                        type : '복층형',
                        price : [190000, 140000],
                        minPeople: 2,
                        maxPeople: 4
                    }
                },
                {
                    title : '행복체',
                    desc : '가족, 친구들이 지내기 편안한 곳',
                    type : {
                        type : '원룸형',
                        price: [220000, 160000],
                        minPeople: 2,
                        maxPeople: 6
                    }
                }
            ]
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
        margin-top: 10rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>
