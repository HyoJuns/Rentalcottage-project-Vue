<template>
    <section class="section">
        <SubpageTitle
            v-bind:title="title"
            v-bind:image-path="image"
        ></SubpageTitle>

        <div class="section__wrap">
            <h2 class="section__subtitle">
                {{ subtitle }}
            </h2>
            <div class="special__container">
                <div
                    v-for="item in specialDB"
                    :key="item.id"
                    class="special__card"
                >
                    <div class="special__circle"></div>
                    <div class="special__info">
                        <h3 class="special__title">
                            {{ item.title }}
                        </h3>
                        <p class="special__desc">
                            {{ item.desc }}
                        </p>
                        <p class="special__desc">
                            {{ item.desc2 }}
                        </p>
                    </div>

                    <img :src="item.image" alt="beef" class="special__image" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SubpageTitle from "./Common/SubpageTitle.vue";

import infoImage from "../assets/bg_special.jpg";

import image1 from "../assets/img_beef_desktop.jpg";
import image2 from "../assets/img_exercise_desktop.jpg";
import image3 from "../assets/img_fallwater_desktop.jpg";
import image4 from "../assets/img_garden_desktop.jpg";
import image5 from "../assets/img_ice_desktop.jpg";
import image6 from "../assets/img_water_desktop.jpg";

export default {
    name: "Special",
    data() {
        return {
            title: "펜션 스페셜",
            image: infoImage,
            subtitle: "펜션 스페셜",
            specialDB: [
                {
                    id: 1,
                    title: "바베큐",
                    desc: "지글지글 익어가는 바베큐를 즐겨보세요.",
                    desc2: "숯 + 그릴 대여, 2인 기본 15,000원",
                    image: image1
                },
                {
                    id: 2,
                    title: "배드민턴 족구장",
                    desc: "가족 혹은 친구와 좋은 승부를 내보세요.",
                    desc2: "사용하시려면 말씀해주시면 감사하겠습니다.",
                    image: image2
                },
                {
                    id: 3,
                    title: "근처 계곡",
                    desc: "펜션 근처 계곡 이있습니다.",
                    desc2: "아름다운 자연을 맛보세요.",
                    image: image3
                },
                {
                    id: 4,
                    title: "행복연못과 정원",
                    desc: "사계절 피고 지는 아름다운 꽃과 나무가 있는 정원",
                    desc2: "시원하게 분수가 뿜어져 나오는 연못이 있습니다.",
                    image: image4
                },
                {
                    id: 5,
                    title: "겨울썰매장과 얼음팽이",
                    desc: "동계에 한해서 운영되는 썰매장이 있습니다.",
                    desc2:
                        "얼음팽이 놀이도 하며, 추운겨울 또 하나의 추억을 만드러 보시길 바랍니다.",
                    image: image5
                },
                {
                    id: 6,
                    title: "대형 수영장",
                    desc: "더운 여름에 시원한 수영장에 풍덩 빠져보세요.",
                    desc2: "개인용 튜브 등을 가져와서 즐겨보세요.",
                    image: image6
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
.section__wrap {
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    color: black;
}
.section__subtitle {
    padding-top: 8rem;
    padding-bottom: 8rem;
    text-align: center;
    color: #1dc5e2;

    letter-spacing: 3px;
    text-shadow: 1px 1px 30px #1dc5e2;
}

.special__container {
    display: flex;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    flex-wrap: wrap;

    gap: 4rem;

    margin-bottom: 8rem;
}

.special__card {
    width: 100%;
    height: 600px;
    position: relative;
    overflow: hidden;
}

.special__image {
    width: 100%;
    height: 100%;
    max-width: 100%;

    object-fit: cover;
    object-position: top;
}

.special__info {
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
}
.special__title {
    font-size: 5.6rem;
    letter-spacing: 10px;
    color: white;

    text-shadow: 1px 1px 15px #fff;
    text-align: left;
}
.special__circle {
    width: 100%;
    height: 100%;

    background: hsla(0, 15%, 0%, 0.5);

    position: absolute;
    left: 0;
    top: 0;

    transition: width 0.8s cubic-bezier(0.165, 0.84, 0.44, 1),
        height 0.8s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}
.special__desc {
    font-size: 1.6rem;
    letter-spacing: 5px;
    color: #fff;
}
</style>
