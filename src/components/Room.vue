<template>
    <section class="section">
        <SubpageTitle v-bind:title="title" v-bind:image-path="image"></SubpageTitle>


    </section>
</template>

<script>
import SubpageTitle from './Common/SubpageTitle.vue'

import infoImage from '../assets/room.jpg';
export default {
    name : "Room",
    data()
    {
        return {
            title : '객실소개',
            image : infoImage,

            subtitle : ['아름다운 풍경 행복펜션으로 초대합니다', 'MAP & LOCATION']
        }
    },
    components : {
        SubpageTitle
    }
}
</script>

<style>

</style>
