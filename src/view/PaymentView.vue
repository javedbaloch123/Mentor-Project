<script setup>
   import PaymentForm from '@/components/PaymentForm.vue';
   import { onMounted,reactive } from 'vue';
   import axios from 'axios';
   import { useRoute } from 'vue-router';

   const state = reactive({
   course: {},
   price:'',
   name:'',
 });

const route = useRoute();
const CourseId = route.params.id;

onMounted(async () => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/courses/${CourseId}`
  );
  state.course = response.data;
  state.price = state.course.fee;
  state.name = state.course.title;
  
});
</script>


<template>
   <PaymentForm :price="state.price" :name="state.name"/>
</template>