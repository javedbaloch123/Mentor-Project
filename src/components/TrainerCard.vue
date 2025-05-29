<script setup>
     import trainer1 from '@/assets/img/team/team-1.jpg';
     import { defineProps } from 'vue';

     defineProps({
        trainer:Object
     })
</script>


<template>
      <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
            <div class="member-img">
              <img :src="'http://127.0.0.1:8000/trainer_images/'+trainer.picture" class="img-fluid" alt="">
              <div class="social">
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>{{ trainer.name }}</h4>
              <span>{{ trainer.skill }}</span>
              <p>{{ trainer.desc }}</p>
            </div>
          </div>
</template>