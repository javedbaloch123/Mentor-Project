<script setup>
     import course1 from '@/assets/img/course-1.jpg';
     import trainer1 from '@/assets/img/trainers/trainer-1-2.jpg';
     import { defineProps } from 'vue';
     import { RouterLink } from 'vue-router';

     defineProps({
      course:Object
     })
</script>


<template>
     <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="course-item">
              <img :src="`http://127.0.0.1:8000/images/`+course.image" class="img-fluid" alt="...">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">{{ course.title }}</p>
                  <p class="price">{{ course.fees }}</p>
                </div>
                 
                
                <h3><RouterLink :to="`/Course/`+course.id"> {{ course.title }} </RouterLink></h3>
                <p class="description">{{ course.desc }}</p>
                <div class="trainers/trainer d-flex justify-content-between align-items-center">
                  <div class="trainers/trainer-profile d-flex align-items-center">
                    <a href="" class="trainers/trainer-link">{{ course.trainer.name }}</a>
                  </div>
                  <div class="trainers/trainer-rank d-flex align-items-center">
                    <i class="bi bi-person user-icon"></i>&nbsp;50
                    &nbsp;&nbsp;
                    <i class="bi bi-heart heart-icon"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>