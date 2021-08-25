<template>
    <div class="card">
        <div class="card__side" v-show="fullscreen">
            <h3 class="card__title">
                {{ dataList.title }}
            </h3>
            <p class="card__description">
                {{ dataList.desc }}
            </p>
            <button class="card__open" @click="cardView()">
                <span class="filter"></span>
                <span class="filter"></span>
                <span class="filter"></span>
                <span class="filter"></span>
                자세히 보기
            </button>
        </div>
        <!-- absoulte -->
        <div class="card__pos" v-show="!fullscreen">
            <h3 class="card__title">
                {{ dataList.title }}
            </h3>
            <p class="card__description">
                {{ dataList.desc }}
            </p>
            <ul class="card__textList">
                <li class="card__item">타입 : {{ dataList.type.type }}</li>
                <li class="card__item">
                    성수기 : {{ dataList.type.price[0] }} 원
                </li>
                <li class="card__item">
                    비성수기 : {{ dataList.type.price[1] }} 원
                </li>
                <li class="card__item">
                    기준 / 최대 : {{ dataList.type.minPeople }}/{{
                        dataList.type.maxPeople
                    }}
                </li>
            </ul>
            <button class="card__open" @click="cardView()">
                자세히 보기
                <span class="filter"></span>
                <span class="filter"></span>
                <span class="filter"></span>
                <span class="filter"></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardModal",
    data() {
        return {
            fullscreen: false
        };
    },
    props: ["dataList"],
    methods: {
        cardView: function() {
            this.fullscreen = !this.fullscreen;
        }
    }
};
</script>

<style scoped>
.card {
    width: 400px;
    height: 400px;
    background-color: #444;

    box-shadow: 2px 2px 2px 2px #222;

    border-radius: 25px;
    color: seashell;
}
.card__title {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: 5px;
}
.card__description {
    font-size: 2.4rem;
    letter-spacing: 1.5px;
    padding-bottom: 0.5em;
}
.card__open {
    background: transparent;
    padding: 1em;
    font-size: 2rem;

    /* border: 2px solid hsl(11, 84%, 52%); */
    border: none;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    color: white;
    cursor: pointer;

    margin-top: 2rem;
    margin-bottom: 2rem;
}
.filter {
    display: block;

    position: absolute;
    width: 100%;
    height: 2px;
}
.filter:nth-child(1) {
    left: 0;
    top: 0;

    background-color: #9ccc65;
    animation: hue 6s ease-in-out infinite alternate;
}
.filter:nth-child(2) {
    width: 2px;
    height: 100%;
    right: 0;
    top: 0;

    background-color: #ffab91;
    animation: hue 6s 1s ease-in-out infinite alternate;
}
.filter:nth-child(3) {
    left: 0;
    bottom: 0;

    background-color: #ffa726;
    animation: hue 6s 3s ease-in-out infinite alternate;
}
.filter:nth-child(4) {
    width: 2px;
    height: 100%;
    left: 0;
    top: 0;

    background-color: #ffab91;
    animation: hue 6s 5s ease-in-out infinite alternate;
}
.card__item {
    font-size: 1.6rem;
    letter-spacing: 1.5px;
    font-weight: 500;
}
@keyframes hue {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
}
</style>
