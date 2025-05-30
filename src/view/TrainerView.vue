<script setup>
    import trainer1 from '@/assets/img/team/team-1.jpg';
    import trainer2 from '@/assets/img/team/team-2.jpg';
    import trainer3 from '@/assets/img/team/team-3.jpg';
    import trainer4 from '@/assets/img/team/team-4.jpg';
    import trainer5 from '@/assets/img/team/team-5.jpg';
    import trainer6 from '@/assets/img/team/team-6.jpg';
    import TrainerCard from '@/components/TrainerCard.vue';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/css/index.css';
    import axios from 'axios';
    import { onMounted,ref } from 'vue';

    const trainer = ref([]);
    const isLoading = ref(true);
    onMounted(async()=>{
      try {
         const response = await axios.get('http://127.0.0.1:8000/api/trainers');
        trainer.value = response.data;
      } catch (error) {
        console.log(error)
      }finally{
         isLoading.value = false;
      }
           
    })

</script>


<template>
     <Loading v-if="isLoading" :active="true" :is-full-page="true" />
   <main class="main">

    <!-- Page Title -->
    <div class="page-title" data-aos="fade">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1>Trainers</h1>
              <p class="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
            </div>
          </div>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li class="current">Trainers</li>
          </ol>
        </div>
      </nav>
    </div><!-- End Page Title -->

    <!-- Trainers Section -->
    <section id="trainers" class="section trainers">

      <div class="container">

        <div class="row gy-5">
        
         <TrainerCard v-for="trainer in trainer" :key="trainer.id" :trainer="trainer"/>
        </div>

      </div>

    </section><!-- /Trainers Section -->

  </main>
</template>