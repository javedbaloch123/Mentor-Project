<script setup>
   import PaymentForm from '@/components/PaymentForm.vue';
   import { onMounted,reactive } from 'vue';
   import axios from 'axios';
   import { useRoute } from 'vue-router';
    import Loading  from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';

   const state = reactive({
   course: {},
   price:'',
   name:'',
   isLoading: true
 });

const route = useRoute();
const CourseId = route.params.id;

onMounted(async () => {
  try {

  const response = await axios.get(`http://127.0.0.1:8000/api/courses/${CourseId}`);
  state.course = response.data;
  state.price = state.course.fee;
  state.name = state.course.title;

  } catch (error) {
    console.log(error);
  }finally{
     state.isLoading = false;
  }
 
  
});
</script>


<template>
    <Loading v-if="state.isLoading" :active="true" :is-full-page="true" />
   <PaymentForm :price="state.price" :name="state.name"/>
</template>