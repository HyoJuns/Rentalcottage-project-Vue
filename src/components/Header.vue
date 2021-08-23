<template>
  <header class="header">
    <div class="header-wrap">
        <!-- 로고 생성 -->
        <Logo v-bind:data="isLogoShow"></Logo>

        <!-- 메뉴 생성 -->
        <Nav v-bind:device="isMobile"></Nav>
    </div>
  </header>
</template>

<script>
// Logo
import Logo from "./Common/Logo";
// Nav
import Nav from "./Common/Nav";

export default {
    name: "Header",
    data (){
        return {
            isLogoShow : true, // 로고 숨길까?
            isMobile : false, // 모바일 인가?
        }
    },
    components : {
        Logo,
        Nav
    }
}
</script>

<style scoped>
    .header
    {
        width : 100vw;
        position : fixed;
        top : 0;
        left :0;
        background-color: black;
        box-shadow: 1px 1px 1px #222;
        z-index:1000;
    }
    .header-wrap
    {
        width: 1440px;
        height: 100px;
        margin : 0 auto;

        overflow: hidden;
        /*outline: 1px solid green;*/
    }

</style>
