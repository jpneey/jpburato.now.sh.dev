<template>
  <div id="home" class="d-block position-relative w-100">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        <h1 class="text-white mt-5 hero fw-bold mb-2">
          A developer<br>Based in the province of Rizal, Philippines.
        </h1>
        <p class="text-white mb-3">Born on <code>June 24 1999</code> and graduated on <code>April 2019</code>.</p>
        <a href="./asset/jp-resume.pdf" target="_blank" class="btn btn-primary fw-bold py-3 px-5 me-3">Resume <i class="material-icons align-middle ms-2">open_in_new</i></a>
      </div>
    </div>
    <div class="container d-block position-relative text-white">
      <Work v-for="experience in experiences" :key="experience" :job="experience.position" :role="experience.role" :duration="experience.duration" :company="experience.company" :tools="experience.tool" />
    </div>
  </div>
</template>

<script>
import Work from '@/components/Work'
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
    Work
  },
  watch: {
    '$route' (to, from) {
      toTop();
    }
  }  
}
</script>
