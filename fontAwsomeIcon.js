import Vue from "vue";

// 설치했던 fontAwesome 만들기
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faPhoneAlt,faMapMarkedAlt, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";

// 불러온 아이콘 라이브러리에 담기
library.add(faCalendar);
library.add(faMapMarkedAlt,faPhoneAlt,faMapMarker);

// fontawesome아이콘을 Vue탬플릿에 사용할 수 있게 등록해 줍니다.
Vue.component("font-awesome-icon", FontAwesomeIcon);
