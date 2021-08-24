<template>
    <section class="section">
        <SubpageTitle v-bind:title="title" v-bind:image-path="image"></SubpageTitle>
    </section>
</template>

<script>
import SubpageTitle from './Common/SubpageTitle.vue'

import infoImage from '../assets/bg_reservation.jpg';
export default {
    name : "Reservation",
    data()
    {
        return {
            title : '예약 현황',
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
