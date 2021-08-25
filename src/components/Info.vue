<template>
    <section>
        <SubpageTitle
            v-bind:title="title"
            v-bind:image-path="image"
        ></SubpageTitle>
        <div class="section__wrap">
            <div class="section__container">
                <h2 class="section__subtitle">
                    {{ subtitle[0] }}
                </h2>
                <div class="section__group">
                    <figure class="section__imageContainer">
                        <img
                            src="../assets/card_image1_back.jpg"
                            alt="room"
                            class="section__image section__image--A"
                        />
                        <img
                            src="../assets/img_garden_tablet.jpg"
                            alt="garden"
                            class="section__image section__image--B"
                        />
                    </figure>
                    <div class="section__textContainer">
                        <p class="section__desc">
                            안녕하세요 행복펜션입니다. <br />
                            수많은 펜션 중에 어디서 숙박 할지 결정하시기
                            힘드시죠?
                        </p>
                        <p class="section__desc">
                            저희 행복펜션은 아침고요수목원 입구에 위치해 있으며
                            <br />
                            객실마다 개별테라스가 있어서 와인과 차 한잔의 여유를
                            맛보실 수 있습니다.
                        </p>
                        <p class="section__desc">
                            무더운 여름에는 야외수영장과 근처 계곡에서 커플,
                            가족, 지인들과<br />
                            즐거운 물놀이를 즐시길 수 있습니다.
                        </p>
                        <p class="section__desc">
                            계절에 따라 행복 정원에 심어놓은 꽃사과,앵두,매실 등
                            과실 열매를 맛보실 수 있으며<br />
                            저녁에서 넓고 예쁜 정원에서 산책을 즐기실 수
                            있습니다.
                        </p>
                        <p class="section__desc">
                            인생의 피로와 스트레스에 지쳐있는 여러분에게
                            잠시나마 무거운 짐을 <br />
                            내려 놓을 수 있는 인생의 동반자가 되어줄 것입니다.
                        </p>
                    </div>
                </div>

                <h2 class="section__subtitle">
                    {{ subtitle[1] }}
                </h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.988349004778!2d127.3612702152757!3d37.766871379760886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35632dc04872453b%3A0xf1d4ddfa425c5798!2z7ZaJ67O17Y6c7IWY!5e0!3m2!1sko!2skr!4v1628792681514!5m2!1sko!2skr"
                    width="100%"
                    height="450"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                >
                </iframe>
                <ul class="section__info">
                    <li class="section__infoDesc">
                        <span>
                            <font-awesome-icon icon="map-marker" />
                        </span>
                        <strong>
                            주소
                        </strong>
                        <ul class="section__subDesc">
                            <li>
                                경기도 가평군 상면 수목원로 128
                            </li>
                            <li>
                                (구주소 : 경기도 가평군 상면 행현리 332-2 번지)
                            </li>
                        </ul>
                    </li>
                    <li class="section__infoDesc">
                        <span>
                            <font-awesome-icon icon="phone-alt" />
                        </span>
                        <strong>
                            전화
                        </strong>
                        <ul class="section__subDesc">
                            <li>
                                010-2062-0418
                            </li>
                            <li>
                                031-585-8232
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import SubpageTitle from "./Common/SubpageTitle.vue";

import infoImage from "../assets/img_exercise_desktop.jpg";

export default {
    name: "Info",
    data() {
        return {
            title: "펜션소개",
            image: infoImage,
            subtitle: [
                "아름다운 풍경 행복펜션으로 초대합니다",
                "MAP & LOCATION"
            ]
        };
    },
    components: {
        SubpageTitle
    }
};
</script>

<style scoped>
.section__wrap {
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    color: black;
}
.section__container {
    min-height: 100vh;
}
.section__subtitle {
    padding-top: 8rem;
    padding-bottom: 8rem;
    text-align: center;
    color: #1dc5e2;

    letter-spacing: 3px;
    text-shadow: 1px 1px 30px #1dc5e2;
}

.section__group {
    width: 100%;

    overflow: hidden;
}
.section__imageContainer {
    width: 48%;
    float: left;

    position: relative;
}
.section__textContainer {
    width: 48%;
    height: 100%;
    float: right;
}
.section__image {
    position: absolute;
    object-fit: cover;

    box-shadow: 1px 1px 2px 1px #444;
}
.section__image--A {
    width: 35vmin;
    height: 35vmin;

    right: 10rem;
    top: -2rem;
    z-index: 1;
}
.section__image--B {
    right: 25rem;
    width: 45vmin;
    height: 25vmin;
}
.section__desc {
    font-size: 1.6rem;
    line-height: 1.5;
    padding-bottom: 2rem;
    letter-spacing: 2px;
    color: #222;
    font-weight: 500;
}

.section__info {
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;
    align-content: center;

    margin-bottom: 8rem;
}
.section__infoDesc {
    font-size: 1.6rem;
    margin-top: 4rem;
}
.section__infoDesc span {
    font-size: 2.2em;
    color: #222;
    padding-right: 0.5em;
}
.section__infoDesc strong {
    color: #222;
    font-size: 2.2em;
}
.section__subDesc {
    font-size: 1.6rem;
}
.section__subDesc li {
    font-size: 1.2em;
    text-align: left;
    font-weight: 500;
    padding: 0.3em;
    padding-left: 0;
}
</style>
