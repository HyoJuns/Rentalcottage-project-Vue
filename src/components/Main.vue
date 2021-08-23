<template>
    <article>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <Section6></Section6>
    </article>
</template>

<script>
import Section1 from "./main/Section-1";
import Section2 from './main/Section-2';
import Section3 from './main/Section-3';
import Section4 from './main/Section-4';
import Section5 from './main/Section-5';
import Section6 from './main/Section-6';
export default {
    name: "Main",
    components: {Section1, Section2,Section3, Section4, Section5, Section6}
}
</script>

<style scoped>

</style>
