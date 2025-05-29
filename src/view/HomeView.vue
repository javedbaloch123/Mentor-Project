
<script setup>
    import Hero from '@/components/Hero.vue';
    import About from '@/components/About.vue';
    import Count from '@/components/Count.vue';
    import Why from '@/components/Why.vue';
    import Courses from '@/components/Courses.vue';
    import Trainer from '@/components/Trainer.vue';
</script>


<template>
    <Hero />
    <About />
    <Count />
    <Why />
     
    <Courses title="Popular Courses" limit="3"/>
    <Trainer />
</template>