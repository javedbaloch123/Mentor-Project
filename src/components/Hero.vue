<script setup>
     import Bg from '@/assets/img/hero-bg.jpg';
     import { RouterLink } from 'vue-router';
</script>


<template>
     <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">

      <img :src="Bg" alt="" data-aos="fade-in">

      <div class="container">
        <h2 data-aos="fade-up" data-aos-delay="100">Learning Today,<br>Leading Tomorrow</h2>
        <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Clean Code</p>
        <div class="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <RouterLink to="/Courses" class="btn-get-started">Get Started</RouterLink>
        </div>
      </div>

    </section><!-- /Hero Section -->    
</template>


<style scoped>
    
</style>