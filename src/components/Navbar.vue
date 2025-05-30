<script setup>
    import { RouterLink } from 'vue-router';
    import { useRoute } from 'vue-router';
 
    const isActive = (routePath) =>{
       const route = useRoute();
       return route.path === routePath;
    }

</script>


<template>
   <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <RouterLink to="/" class="logo d-flex align-items-center me-auto">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">Mentor</h1>
      </RouterLink>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><RouterLink to="/" :class="[isActive('/') ? 'active' : '']">Home<br></RouterLink></li>
          <li><RouterLink to="/About" :class="[isActive('/About') ? 'active' : '']">About</RouterLink></li>
          <li><RouterLink to="/Courses" :class="[isActive('/Courses') ? 'active' : '']">Courses</RouterLink></li>
          <li><RouterLink to="/Trainers" :class="[isActive('/Trainers') ? 'active' : '']">Trainers</RouterLink></li>
          <!-- <li><RouterLink to="/Pricing" :class="[isActive('/Pricing') ? 'active' : '']">Pricing</RouterLink></li> -->
          
          <li><RouterLink to="/Contact" :class="[isActive('/Contact') ? 'active' : '']">Contact</RouterLink></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <RouterLink class="btn-getstarted" to="/Courses">Get Started</RouterLink>

    </div>
  </header>
 
</template>