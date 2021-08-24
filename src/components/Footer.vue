<template>
    <footer class="footer">
        <div class="footer__wrap">
            <nav class="fnb">
                <ul class="fnb_menulist">
                    <li class="fnb__item fnb__item--desktop" v-for="item in listData" :key="item.id">
                        <router-link :to="{path:item.router}">
                            {{item.name}}
                        </router-link>
                    </li>
                </ul>
            </nav>
            <address class="footer__address">
                <strong>상호</strong> : 행복펜션<br>
                <strong>예약전화</strong> :
                <a href="tel:031-585-8232">031-585-8232</a><br>
                <strong>주소</strong> :
                경기도 가평군 상면 수목원 128<br>
                (구주소 : 경기도 가평군 상면 행현리 332-2번지)<br>
                <strong>사업자 번호</strong> : 879-44-00531<br>
                <strong>계좌번호</strong> : 농협 351-1085-1544-03 조미선<br>
            </address>
            <blockquote cite="http://www.gphappy.kr/">
                이 사이트는 포트폴리오 용도로 제작되었습니다.
            </blockquote>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data ()
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
    }
}
</script>

<style scoped>
    .footer
    {
        width: 100vw;
        background-color: black;
    }
    .footer__wrap
    {
        width: 1440px;
        margin : 0 auto;

    }
    .fnb_menulist
    {
        padding: 2rem 0 2rem 0;
        border-bottom: 4px solid rgba(255, 255, 255,.5);
    }

    .fnb__item
    {
        display: inline-block;
        font-size: 1.6rem;

        padding-left: 4rem;
        color : white;
    }
    .fnb__item:nth-child(1)
    {
        padding-left: 0;
    }
    .fnb__item > a
    {
        color : inherit;
    }
    .footer__address
    {
        letter-spacing: 2px;
        font-size: 1.6rem;
        padding : 1em 0 1em 0;
    }
    .footer__address a
    {
        color:inherit;
    }
    .footer__address strong
    {
        color : honeydew;
        font-weight: 500;
    }
    blockquote
    {
        padding-bottom: 2rem;
    }
</style>
