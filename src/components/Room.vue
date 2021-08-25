<template>
    <section class="section">
        <SubpageTitle
            v-bind:title="title"
            v-bind:image-path="image"
        ></SubpageTitle>

        <div class="section__wrap">
            <h2 class="section__subtitle">
                {{ subtitle[0] }}
            </h2>
            <div class="section__roomContainer">
                <div
                    class="section__room"
                    v-for="elem in roomDB"
                    :key="elem.id"
                >
                    <img
                        class="section__roomImage"
                        :src="elem.image"
                        :alt="elem.name"
                    />
                    <h3 class="section__roomTitle">
                        {{ elem.name }}
                    </h3>
                    <p class="section__roomDesc">
                        {{ elem.people }}
                        <span class="section__roomline"></span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SubpageTitle from "./Common/SubpageTitle.vue";

import infoImage from "../assets/room.jpg";
import room1 from "../assets/room_00.jpg";
import room2 from "../assets/room_01.jpg";
import room3 from "../assets/room_02.jpg";
export default {
    name: "Room",
    data() {
        return {
            title: "객실소개",
            image: infoImage,

            subtitle: ["객실을 소개합니다"],
            roomDB: [
                {
                    id: 1,
                    name: "카라반",
                    people: "2/3인 친구, 커플",
                    image: room1
                },
                {
                    id: 2,
                    name: "사랑체",
                    people: "2/4인 친구, 커플, 가족",
                    image: room2
                },
                {
                    id: 3,
                    name: "행복체",
                    people: "3/5인 대가족, 친구들",
                    image: room3
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

/* 객실 소개합니다 스타일 */
.section__roomContainer {
    width: 100%;
    display: flex;
    gap: 1rem;

    justify-content: space-evenly;
    align-content: center;
    flex-wrap: wrap;

    margin-bottom: 8rem;
}

.section__room {
    position: relative;
    width: 25vmin;
    height: 40vmin;

    /* outline: 1px solid red; */

    cursor: pointer;

    box-shadow: 0.1rem 0.2rem 0.1rem #222,
        0 2rem 1.2rem 0.5rem rgba(0, 0, 0, 0.5);

    transition: all 0.5s ease-in-out;
}

.section__room:hover {
    transform: skewX(5deg) rotate(-5deg);
}
.section__room::before {
    content: "";

    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
}
/* 이미지 */
.section__roomImage {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    z-index: 0;
}
.section__roomTitle {
    position: absolute;

    bottom: 5rem;
    left: 50%;
    transform: translate(-50%);
    color: white;

    z-index: 1;
}
.section__roomDesc {
    width: 80%;
    text-align: center;
    font-size: 1.4rem;
    position: absolute;

    bottom: 2rem;
    left: 50%;
    transform: translate(-50%);
    color: white;

    z-index: 1;
}
.section__roomline {
    display: inline-block;
    position: absolute;

    width: 50%;
    height: 2px;
    border-radius: 5px;
    background: white;

    bottom: -1rem;
    left: 50%;
    transform: translate(-50%);
}
</style>
