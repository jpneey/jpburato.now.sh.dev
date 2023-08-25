<template>
  <div id="home" class="d-block position-relative w-100 pt-5">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        <h1 class="text-white mt-5 hero fw-bold mb-2">
          A developer<br>Based in the <em>Philippines</em>.
        </h1>
        <p class="text-white mb-3">Writing code and building things for the web since <code>2018</code>.</p>
        <router-link to="/contact/"  class="btn btn-danger fw-bold py-3 px-5 me-3">Get in touch <i class="material-icons align-middle ms-2">open_in_new</i></router-link>
      </div>
    </div>
    <div class="container d-block position-relative text-white">
      <Work v-for="experience in experiences" :key="experience" :job="experience.position" :total="experience.total" :role="experience.role" :duration="experience.duration" :company="experience.company" :tools="experience.tool" :start="experience.start || null" />
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Work from '@/components/Work';
import Footer from '@/components/Footer';
import experiences from '@/api/experiences.json';

const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

export default {
  name: 'About',
  data() {
    return {
      experiences
    }
  },
  components: {
    Work,
    Footer
  },
  watch: {
    '$route' (to, from) {
      toTop();
    }
  }  
}
</script>
