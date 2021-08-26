<template>
    <section class="section">
        <SubpageTitle
            v-bind:title="title"
            v-bind:image-path="image"
        ></SubpageTitle>
        <div class="section__wrap">
            <ul class="menu">
                <li
                    class="menulist"
                    @click="changeTable(1)"
                    :class="{ menulist__active: choice[0] }"
                >
                    실시간 예약
                    <span class="line"></span>
                </li>
                <li
                    class="menulist"
                    @click="changeTable(2)"
                    :class="{ menulist__active: choice[1] }"
                >
                    요금 가이드
                    <span class="line"></span>
                </li>
            </ul>

            <table class="table">
                <thead>
                    <tr>
                        <th v-for="(item, index) in headData" :key="index">
                            {{ item }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in outputMessage" :key="item.id">
                        <td>
                            {{ item.id }}
                        </td>
                        <td>
                            {{ item.title }}
                        </td>
                        <td>
                            {{ item.author }}
                        </td>
                        <td>
                            {{ item.data }}
                        </td>
                        <td>
                            {{ item.count }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import SubpageTitle from "./Common/SubpageTitle.vue";

import infoImage from "../assets/bg_reservation.jpg";
export default {
    name: "Reservation",
    data() {
        return {
            title: "예약 안내",
            image: infoImage,
            headData: ["번호", "제목", "글쓴이", "작성일", "조회"],
            choice: [true, false],
            itemData: [
                {
                    id: 1,
                    title:
                        "현재 내부 공사로 인해 예약이 전부 취소된 상태입니다.",
                    author: "관리자",
                    data: "2021-09-12",
                    count: 600,
                    type: 1
                },
                {
                    id: 1,
                    title: "카라반 가격 안내",
                    author: "관리자",
                    data: "2021-08-01",
                    count: 470,
                    type: 2
                },
                {
                    id: 2,
                    title: "사랑체 가격 안내",
                    author: "관리자",
                    data: "2021-08-01",
                    count: 330,
                    type: 2
                },
                {
                    id: 3,
                    title: "행복체 가격 안내",
                    author: "관리자",
                    data: "2021-08-01",
                    count: 100,
                    type: 2
                }
            ]
        };
    },
    methods: {
        changeTable: function(i) {
            this.choice.fill(false).splice(i - 1, 1, true);
            console.log(this.choice);
        }
    },
    computed: {
        outputMessage: function() {
            // 깊은 복사
            const _data = this.itemData.slice();
            // true 값 확인
            const _index = this.choice.indexOf(true);

            if (_index === -1) {
                return [];
            }

            return _data.filter(x => {
                return x.type === _index + 1;
            });
        }
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

.menu {
    width: 100%;

    display: flex;

    justify-content: space-evenly;
    align-items: center;
}
.menulist {
    cursor: pointer;
    font-size: 3rem;
    font-weight: 500;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 0.5em;
    /* color: #1dc5e2; */
    color: #222;
}
.menulist__active {
    color: #1dc5e2;
}

/* Table */
.table {
    width: 100%;
    min-width: 800px;
    border-collapse: collapse;

    margin-bottom: 8rem;
}
.table th {
    background-color: #1dc5e2;
    color: white;
    font-size: 2rem;
    padding: 0.5em;
}
.table th:nth-child(2) {
    width: 50%;
}
tbody tr:nth-child(eval) {
    background-color: #1dc4e25e;
}
td {
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
    padding: 0.5em 0 0.5em 0;
}
</style>
