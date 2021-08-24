import Vue from "vue";
import Router from "vue-router";

// 연결할 컴포넌트
import Main from '../components/Main';
import Info from '../components/Info';
import Room from '../components/Room';
import Special from '../components/Special';
import Service from '../components/Service';
import Travel from '../components/Travel';
import Reservation from '../components/Reservation.vue';
import Community from '../components/Community';

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
        },
        {
            path : '/info',
            name : 'Info',
            component : Info
        }
        ,
        {
            path : '/room',
            name : 'Room',
            component : Room
        }
        ,
        {
            path : '/special',
            name : 'Special',
            component : Special
        }
        ,
        {
            path : '/service',
            name : 'Service',
            component : Service
        }
        ,
        {
            path : '/travel',
            name : 'Travel',
            component : Travel
        }
        ,
        {
            path : '/reservation',
            name : 'Reservation',
            component : Reservation
        }
        ,
        {
            path : '/community',
            name : 'Community',
            component : Community
        }
    ]
});
