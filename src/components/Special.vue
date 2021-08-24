<template>
    <section class="section">
        <SubpageTitle v-bind:title="title" v-bind:image-path="image"></SubpageTitle>
    </section>
</template>

<script>
import SubpageTitle from './Common/SubpageTitle.vue'

import infoImage from '../assets/bg_special.jpg';
export default {
    name : "Special",
    data()
    {
        return {
            title : '펜션 스페셜',
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
