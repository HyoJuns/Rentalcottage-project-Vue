<template>
    <section class="section">
        <SubpageTitle
            v-bind:title="title"
            v-bind:image-path="image"
        ></SubpageTitle>

        <article
            v-for="item in serviceDB"
            :key="item.id"
            class="background"
            :class="item.classname"
        >
            <h3 class="background__title">
                {{ item.name }}
            </h3>
            <p class="background__desc">
                {{ item.desc }}
            </p>
        </article>
    </section>
</template>

<script>
import SubpageTitle from "./Common/SubpageTitle.vue";
import infoImage from "../assets/bg_service.jpg";
export default {
    name: "Service",
    data() {
        return {
            title: "펜션 서비스",
            image: infoImage,
            serviceDB: [
                {
                    id: 1,
                    name: "깨끗한 내부 인테리어",
                    desc:
                        "항상 깨끗하게 내부를 청소하여 쾌적한 상태로 여러분을 기다리고 있습니다.",
                    classname: "background-1"
                },
                {
                    id: 2,
                    name: "무료 와이파이",
                    desc:
                        "각 객실마다 독립적인 초고속 와이파이가 설치되었습니다.",
                    classname: "background-2"
                },
                {
                    id: 3,
                    name: "DVD, 보드게임",
                    desc:
                        "영화와 보드게임을 항상 준비해두고 있어 언제든지 이용이 가능합니다.",
                    classname: "background-3"
                },
                {
                    id: 4,
                    name: "상비약",
                    desc:
                        "비상약을 준비했으니, 필요하신분이 있으면, 행복지기에 말씀해 주시면 됩니다.",
                    classname: "background-4"
                }
            ]
        };
    },
    components: {
        SubpageTitle
    }
};
</script>

<style scooped>
.section__subtitle {
    padding-top: 8rem;
    padding-bottom: 8rem;
    text-align: center;
    color: #1dc5e2;

    letter-spacing: 3px;
    text-shadow: 1px 1px 30px #1dc5e2;
}

.background-1 {
    background-image: url("../assets/service_1.jpg");
}
.background-2 {
    background-image: url("../assets/service_2.jpg");
}
.background-3 {
    background-image: url("../assets/service_3.jpg");
}
.background-4 {
    background-image: url("../assets/service_4.jpg");
}
.background {
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.background__title {
    font-size: 12rem;
    font-weight: 900;
    letter-spacing: 10px;
    color: rgb(51, 51, 51);
    text-shadow: 4px 4px 50px #ffffff, 4px 4px 5px #222;
    mix-blend-mode: multiply;
}
.background__desc {
    width: 80%;
    font-size: 1.8rem;
    line-height: 1.5;

    color: rgb(255, 117, 24);
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 1px 1px #222, 0 5px 10px #fff;
}
</style>
