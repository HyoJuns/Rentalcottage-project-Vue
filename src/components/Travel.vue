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

            <div class="travel__container">
                <figure class="travel__iamge image__number--1">
                    <img src="../assets/near_travel_01.jpg" alt="Travel" />
                    <figcaption>
                        청평호수 / 수상레저
                    </figcaption>
                </figure>
                <figure class="travel__iamge image__number--2">
                    <img src="../assets/near_travel_02.jpg" alt="Travel" />
                    <figcaption>
                        아침고요 수목원
                    </figcaption>
                </figure>
                <figure class="travel__iamge image__number--3">
                    <img src="../assets/near_travel_03.jpg" alt="Travel" />
                    <figcaption>
                        호명 호수
                    </figcaption>
                </figure>
                <figure class="travel__iamge image__number--4">
                    <img src="../assets/near_travel_04.jpg" alt="Travel" />
                    <figcaption>
                        에델 바이스
                    </figcaption>
                </figure>
                <figure class="travel__iamge image__number--5">
                    <img src="../assets/near_travel_05.jpg" alt="Travel" />
                    <figcaption>
                        쁘띠 프랑스
                    </figcaption>
                </figure>
                <figure class="travel__iamge image__number--6">
                    <img src="../assets/near_travel_06.jpg" alt="Travel" />
                    <figcaption>
                        낙엽 길
                    </figcaption>
                </figure>
                <figure class="travel__iamge image__number--7">
                    <img src="../assets/near_travel_07.jpg" alt="Travel" />
                    <figcaption>
                        사계절 썰매장
                    </figcaption>
                </figure>
                <figure class="travel__iamge image__number--8">
                    <img src="../assets/near_travel_08.jpg" alt="Travel" />
                    <figcaption>
                        절
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
</template>

<script>
import SubpageTitle from "./Common/SubpageTitle.vue";

import infoImage from "../assets/bg_travel.jpg";
export default {
    name: "Travel",
    data() {
        return {
            title: "주변 여행지",
            image: infoImage,
            subtitle: "주변 여행지"
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

.travel__container {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
        "image1 image1 image2"
        "image3 image4 image4"
        "image3 image5 image6"
        "image7 image5 image8";
    gap: 20px;

    margin-bottom: 8rem;
}
/* 사진 */
.travel__iamge {
    width: 100%;
    height: 100%;
    position: relative;
}
.travel__iamge:hover figcaption {
    background: transparent;
    box-shadow: none;
}
.travel__iamge > img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    vertical-align: middle;
    filter: blur(2px);
    transition: filter 0.3s linear;
}
.travel__iamge:hover img {
    filter: blur(0);
}
.travel__iamge > figcaption {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    color: #fff;
    font-size: 2.4rem;
    font-weight: 500;
    background-color: #222;
    border-radius: 25px;
    padding: 0.5em 1.2em;
    text-shadow: 0 0 8px #222;
    box-shadow: 2px 2px 4px #222;
    transition: all 0.5s linear;
}
.image__number--1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    grid-area: image1;
}
.image__number--2 {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    grid-area: image2;
}
.image__number--3 {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    grid-area: image3;
}
.image__number--4 {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    grid-area: image4;
}
.image__number--5 {
    grid-column: 2 / 3;
    grid-row: 3 / 5;
    grid-area: image5;
}
.image__number--6 {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
    grid-area: image6;
}
.image__number--7 {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    grid-area: image7;
}
.image__number--8 {
    grid-column: 3 / 4;
    grid-row: 4 / 5;
    grid-area: image8;
}
</style>
