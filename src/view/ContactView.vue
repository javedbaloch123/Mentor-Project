<script setup>
      import axios from 'axios';
      import { reactive } from 'vue';
      import swal from 'sweetalert';
    
         
      const state = reactive({
        name:'',
        email:'',
        subject:'',
        message:'',
        errors: {}
      })
 

    const submitForm = async() =>{
      try {
        const data ={
        name:state.name, 
        email:state.email, 
        subject:state.subject, 
        message:state.message, 
      }
        const response = await axios.post('http://127.0.0.1:8000/api/contact',data);
        state.errors = response.data.error;
        if(response.data.status == true){
             swal({
              title: 'Message Sent!',
              text: 'We will contact you soon.',
              icon: 'success',
              confirmButtonText: 'OK'
            });

        state.name = '';
        state.email='';
        state.subject='';
        state.message='';
       
        }
         
      } catch (error) {
        
      }
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
              <h1>Contact</h1>
              <p class="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
            </div>
          </div>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li class="current">Contact</li>
          </ol>
        </div>
      </nav>
    </div><!-- End Page Title -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <div class="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe style="border:0; width: 100%; height: 300px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div><!-- End Google Maps -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-4">
            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div><!-- End Info Item -->

            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i class="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div><!-- End Info Item -->

            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div><!-- End Info Item -->

          </div>

          <div class="col-lg-8">
            <form @submit.prevent="submitForm" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" v-model="state.name" name="name" id="name" class="form-control" placeholder="Your Name">
                  <p v-if="state.errors && state.errors.name" class="text-danger">{{ state.errors.name[0] }}</p>
                 
                </div>

                <div class="col-md-6 ">
                  <input type="email" v-model="state.email" class="form-control" id="email" name="email" placeholder="Your Email">
                   <p v-if="state.errors && state.errors.email" class="text-danger">{{ state.errors.email[0] }}</p>
                </div>

                <div class="col-md-12">
                  <input type="text" v-model="state.subject" class="form-control" id="subject" name="subject" placeholder="Subject">
                   <p v-if="state.errors && state.errors.subject" class="text-danger">{{ state.errors.subject[0] }}</p>
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" v-model="state.message" id="message" name="message" rows="6" placeholder="Message"></textarea>
                   <p v-if="state.errors && state.errors.message" class="text-danger">{{ state.errors.message[0] }}</p>
                </div>
               
                <div class="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>

    </section><!-- /Contact Section -->

  </main>
</template>
