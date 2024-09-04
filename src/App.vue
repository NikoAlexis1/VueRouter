<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import MediosPago from '@/components/MediosPago.vue'
import Card from './components/Card.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
    MediosPago,
    Card
  }
}
</script>

<template>
  <Navbar />
  
  <RouterView />
  
  <medios-pago/>
  <Footer/>
</template>

<style scoped>


</style>
