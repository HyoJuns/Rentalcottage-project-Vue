<template>
    <section class="section">
        <SubpageTitle v-bind:title="title" v-bind:image-path="image"></SubpageTitle>
    </section>
</template>

<script>
import SubpageTitle from './Common/SubpageTitle.vue'

import infoImage from '../assets/bg_community.jpg';
export default {
    name : "Community",
    data()
    {
        return {
            title : '커뮤니티',
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
