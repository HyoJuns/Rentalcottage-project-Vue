<template>
    <article>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
    </article>
</template>

<script>
import Section1 from "./main/Section-1";
import Section2 from './main/Section-2';
import Section3 from './main/Section-3';
import Section4 from './main/Section-4';
export default {
    name: "Main",
    components: {Section1, Section2,Section3, Section4}
}
</script>

<style scoped>

</style>
