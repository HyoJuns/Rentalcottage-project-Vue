<template>
    <section class="section">
        <SubpageTitle v-bind:title="title" v-bind:image-path="image"></SubpageTitle>
    </section>
</template>

<script>
import SubpageTitle from './Common/SubpageTitle.vue'

import infoImage from '../assets/bg_travel.jpg';
export default {
    name : "Travel",
    data()
    {
        return {
            title : '주변 여행지',
            image : infoImage
        }
    },
    components : {
        SubpageTitle
    }
}
</script>

<style>

</style>
