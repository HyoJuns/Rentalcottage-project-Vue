<template>
<div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</div>
</template>

<script>
import Header from "./components/Header";
import Footer from './components/Footer';

export default {
    name: "app",
    data() {
    return {
        msg: "Welcome to Your Vue.js App"
    };
    },
    components : {
        Header, Footer
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap");

*, *::before, *::after
{
    margin : 0;
    padding : 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 300;

  min-height: 100vh;

  overflow-x: hidden;
  scroll-behavior: smooth;

  color : hsl(0, 0%, 100%);
}

img
{
  vertical-align: middle;
}

li
{
  list-style-type: none;
}

a
{
  font-size: inherit;
  text-decoration: none;
}
</style>
