<script setup>
import detailImage from "@/assets/img/course-details.jpg";
import tab1 from "@/assets/img/tabs/tab-1.png";
import tab2 from "@/assets/img/tabs/tab-2.png";
import tab3 from "@/assets/img/tabs/tab-3.png";
import tab4 from "@/assets/img/tabs/tab-4.png";
import tab5 from "@/assets/img/tabs/tab-5.png";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, reactive } from "vue";
import axios from "axios";
import router from "@/router";

const route = useRoute();
const CourseId = route.params.id;

const state = reactive({
  course: {},
});

onMounted(async () => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/courses/${CourseId}`
  );
  state.course = response.data;
  console.log(state.course);
});

const checkout = () =>{
  router.push({ name: 'payment', params: CourseId});
}
</script>


<template>
  <main class="main">
    <!-- Page Title -->
    <div class="page-title" data-aos="fade">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1>Course Details</h1>
              <p class="mb-0">
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li class="current">Course Details</li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Page Title -->

    <!-- Courses Course Details Section -->
    <section id="courses-course-details" class="courses-course-details section">
      <div class="container" data-aos="fade-up">
        <div class="row" v-if="state.course.trainer">
          <div class="col-lg-8">
            <img
              :src="'http://127.0.0.1:8000/images/' + state.course.image"
              class="img-fluid"
              alt=""
            />
            <h3>{{ state.course.title }}</h3>
            <p>
              {{ state.course.desc }}
            </p>
          </div>
          <div class="col-lg-4">
            <div
              class="course-info d-flex justify-content-between align-items-center"
            >
              <h5>Trainer</h5>
              <p>
                <a href="#">{{ state.course.trainer.name }}</a>
              </p>
            </div>

            <div
              class="course-info d-flex justify-content-between align-items-center"
            >
              <h5>Course Fee</h5>
              <p>{{ state.course.fee }}</p>
            </div>

            <div
              class="course-info d-flex justify-content-between align-items-center"
            >
              <h5>Available Seats</h5>
              <p>{{ state.course.seats }}</p>
            </div>

            <div
              class="course-info d-flex justify-content-between align-items-center"
            >
              <h5>Schedule</h5>
              <p>{{ state.course.schedule }}</p>
            </div>
            <div>
              <button class="btn btn-success" @click="checkout">Let's Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Courses Course Details Section -->

    <!-- Tabs Section -->
    <!-- /Tabs Section -->
  </main>
</template>