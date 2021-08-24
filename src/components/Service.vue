<template>
    <section class="section">
        <SubpageTitle v-bind:title="title" v-bind:image-path="image"></SubpageTitle>
    </section>
</template>

<script>
import SubpageTitle from './Common/SubpageTitle.vue'
import infoImage from '../assets/bg_service.jpg';
export default {
    name : "Service",
    data()
    {
        return {
            title : '펜션 서비스',
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
