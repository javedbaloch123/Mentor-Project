import AboutView from "@/view/AboutView.vue";
import ContactView from "@/view/ContactView.vue";
import CoursesView from "@/view/CoursesView.vue";
import CourseView from "@/view/CourseView.vue";
import HomeView from "@/view/HomeView.vue";
import NotFoundView from "@/view/NotFoundView.vue";
import PaymentView from "@/view/PaymentView.vue";
import PricingView from "@/view/PricingView.vue";
import TrainerView from "@/view/TrainerView.vue";
import { createRouter,createWebHistory } from "vue-router";


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component:HomeView
        },
         {
            path: '/About',
            name: 'about',
            component:AboutView
        },
         {
            path: '/Courses',
            name: 'courses',
            component:CoursesView
        },
         {
            path: '/Trainers',
            name: 'trainers',
            component:TrainerView
        },
        {
            path: '/Pricing',
            name: 'pricing',
            component:PricingView
        },
        {
            path: '/Contact',
            name: 'contact',
            component:ContactView
        },
         {
            path: '/Course/:id',
            name: 'course',
            component:CourseView
        },
         {
            path: '/Payment/:id',
            name: 'payment',
            component:PaymentView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
        },

    ]
})

export default router;