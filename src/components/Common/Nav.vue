<template>
    <div class="nav__wrap">
        <!--    모바일 전용 메뉴-->
        <nav class="nav__mobile" v-if="device">
            <div class="nav__hamburger">
                <span class="nav__hamburgerLine nav__hamburgerLine--first"></span>
                <span class="nav__hamburgerLine nav__hamburgerLine--second"></span>
                <span class="nav__hamburgerLine nav__hamburgerLine--third"></span>
            </div>
            <ul class="nav__menuList">
                <li class="nav__item nav__item--mobile" v-for="item in listData" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
        </nav>
        <!--    데스크탑 전용 메뉴 -->
        <nav class="nav__desktop" v-if="!device">
            <ul class="nav__menuList">
                <li class="nav__item nav__item--desktop" v-for="item in listData" :key="item.id">
                    <router-link :to="{path:item.router}">
                        {{item.name}}
                    </router-link>
                </li>
            </ul>

        </nav>
        <ul class="nav__menuIcon">
            <li class="nav__item">
                <font-awesome-icon icon="calendar"/>
            </li>
            <li class="nav__item">
                <font-awesome-icon icon="map-marker"/>
            </li>
        </ul>
    </div>


</template>

<script>
export default {
    name: "Nav",
    data()
    {
        return {
            listData : [
                {id : 1, name : '펜션소개', router : '/info'},
                {id : 2, name : '객실소개', router : '/room'},
                {id : 3, name : '펜션스페셜', router :'/special'},
                {id : 4, name : '펜션서비스', router : '/service'},
                {id : 5, name : '주변여행지', router : '/travel'},
                {id : 6, name : '예약안내', router : '/reservation'},
                {id : 7, name : '커뮤니티', router : '/community'}
            ]

        }
    },
    props : ['device']
}
</script>

<style scoped>
    /*모바일 너비 만큼 설정*/
    .nav__mobile
    {
        width: 100vw;
    }
    .nav__wrap
    {
        height: 100%;

    }
    /* 배치하기 */
    .nav__desktop
    {
        float : left;
        height: inherit;
        margin-left: 20rem;
    }

    /* 메뉴 리스트 flex 설정 */
    .nav__desktop > .nav__menuList
    {
        height: inherit;
        display: flex;

        justify-content: space-evenly;
        align-items: center;
        gap : 4rem;
        /*outline: 1px solid red;*/

    }

    /* 메뉴 목록 글꼴 설정 */
    .nav__item
    {
        font-size: 1.6rem;
        font-weight: 500;
        /*color : #fff;*/
        letter-spacing: 1px;

        color : white;
    }
    .nav__menuIcon
    {
        float : right;
    }
    .nav__menuIcon > li
    {
        display: inline-block;
        font-size: 2.4rem;
        margin-top : 2.8rem;
        margin-right: 4rem;

    }
    a
    {
        color : white;
    }
</style>
