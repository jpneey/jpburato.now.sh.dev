<template>
  <div id="home" class="d-block position-relative w-100">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        <h1 class="text-white hero mt-5 fw-bold mb-3">I am building<br>things for the web.</h1>
        <p class="text-white mb-4">A developer specializing on the <code>LAMP</code> stack, <code>Vue 3</code> and <code>Electron</code>.<br>Feel free to scroll down to see some of my works</p>
        <a href="mailto:johnpaulburato.jp@gmail.com" class="btn btn-primary fw-bold py-3 px-5 me-3">Get in touch</a>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3">
      <Itemcard v-for="project in projects" :key="project" :link="project.link" :text="project.text" :detail="project.details" :title="project.title" :image="project.img" :theme="project.theme" :langs="project.lang" />
    </div>
  </div>
</template>

<script>
import Itemcard from '@/components/Itemcard.vue';
import projects from '@/api/projects.json';
import { onMounted, onUnmounted } from 'vue';

const toTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

const isElemVisible = (el) => {
  var offset = 90
  var rect = el.getBoundingClientRect()
  var elemTop = rect.top
  var elemBottom = rect.bottom
  return elemTop < window.innerHeight + offset && elemBottom >= offset
}

export default {
  name: 'Home',
  data() {
    return {
      projects
    }
  },
  components: {
    Itemcard
  },
  watch: {
    '$route' (to, from) {
      toTop();
    }
  }
}
</script>
