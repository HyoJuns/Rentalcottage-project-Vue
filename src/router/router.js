import Vue from "vue";
import Router from "vue-router";

// 연결할 컴포넌트
import Main from '../components/Main';

// 필수 구문
Vue.use(Router);

export default new Router({
  // # 나타나지 않도록 설정
  mode: "history",
  routes: [
    {
        path: "/",
        name : "Main",
        component : Main

    }
  ]
});
