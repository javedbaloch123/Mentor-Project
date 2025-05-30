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
  import Loading  from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';



  const data = ref([]);
  const isLoading = ref(true);

   defineProps({
         title:{
          type: String,
         },
         limit:{
          type:String,
         }
   });
 

onMounted(async()=>{
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/courses');
    data.value = response.data
  } catch (error) {
     console.log(error)
  } finally{
      isLoading.value = false;
  }
   
     
    
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
         <Loading v-if="isLoading" :active="true" :is-full-page="true" />
          <CourseCard v-for="course in data.slice(0,limit || data.length)" :key="course.id" :course="course"/>

        </div>

      </div>

    </section><!-- /Courses Section -->

</template>