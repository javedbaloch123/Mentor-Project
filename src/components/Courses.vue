<script setup>
  import course1 from '@/assets/img/course-1.jpg';
  import course2 from '@/assets/img/course-2.jpg';
  import course3 from '@/assets/img/course-3.jpg';
  import trainer1 from '@/assets/img/trainers/trainer-1-2.jpg';
  import trainer2 from '@/assets/img/trainers/trainer-2-2.jpg';
  import trainer3 from '@/assets/img/trainers/trainer-3-2.jpg';
  import { defineProps,onMounted, ref } from 'vue';
  import CourseCard from './CourseCard.vue';
  import axios from 'axios';

   defineProps({
         title:{
          type: String,
         },
         limit:{
          type:String,
         }
   });

const data = ref([]);
onMounted(async()=>{
   const response = await axios.get('http://127.0.0.1:8000/api/courses');
    data.value = response.data
    console.log(data);
    
 })

</script>


<template>
     <!-- Courses Section -->
    <section id="courses" class="courses section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Courses</h2>
        <p>{{ title }}</p>
      </div><!-- End Section Title -->

      <div class="container">
         
        <div class="row">
      
          <!-- <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="course-item">
              <img :src="course1" class="img-fluid" alt="...">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">Web Development</p>
                  <p class="price">$169</p>
                </div>

                <h3><a href="course-details.html">Website Design</a></h3>
                <p class="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div class="trainers/trainer d-flex justify-content-between align-items-center">
                  <div class="trainers/trainer-profile d-flex align-items-center">
                    <img :src="trainers/trainer1" class="img-fluid" alt="">
                    <a href="" class="trainers/trainer-link">Antonio</a>
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

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="course-item">
              <img :src="course2" class="img-fluid" alt="...">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">Marketing</p>
                  <p class="price">$250</p>
                </div>

                <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                <p class="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div class="trainers/trainer d-flex justify-content-between align-items-center">
                  <div class="trainers/trainer-profile d-flex align-items-center">
                    <img :src="trainers/trainer2" class="img-fluid" alt="">
                    <a href="" class="trainers/trainer-link">Lana</a>
                  </div>
                  <div class="trainers/trainer-rank d-flex align-items-center">
                    <i class="bi bi-person user-icon"></i>&nbsp;35
                    &nbsp;&nbsp;
                    <i class="bi bi-heart heart-icon"></i>&nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div>  

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="course-item">
              <img :src="course3" class="img-fluid" alt="...">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">Content</p>
                  <p class="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p class="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div class="trainers/trainer d-flex justify-content-between align-items-center">
                  <div class="trainers/trainer-profile d-flex align-items-center">
                    <img :src="trainers/trainer3" class="img-fluid" alt="">
                    <a href="" class="trainers/trainer-link">Brandon</a>
                  </div>
                  <div class="trainers/trainer-rank d-flex align-items-center">
                    <i class="bi bi-person user-icon"></i>&nbsp;20
                    &nbsp;&nbsp;
                    <i class="bi bi-heart heart-icon"></i>&nbsp;85
                  </div>
                </div>
              </div>
            </div>
          </div>   -->
          <CourseCard v-for="course in data.slice(0,limit || data.length)" :key="course.id" :course="course"/>

        </div>

      </div>

    </section><!-- /Courses Section -->

</template>