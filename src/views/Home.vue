<template>
  <div id="home" class="d-block position-relative w-100 pt-5">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        <h1 class="text-white hero mt-5 fw-bold mb-3">I am <em>building</em><br>things for the web.</h1>
        <p class="text-white mb-4">I specialize on the <code>LAMP</code> stack, <code>Wordpress core</code> and <code>WooCommerce</code>.<br>Scroll down to see some of my work.</p>
        <a href="mailto:johnpaulburato.jp@gmail.com" class="btn btn-danger fw-bold py-3 px-5 me-3">Get in touch</a>
        <router-link to="/about" class="btn btn-primary d-none d-md-inline-block fw-bold py-3 px-5 me-3">About</router-link>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 align-items-start">
      <div class="col col-12 col-md-12 col-xl-8">
        <Featured></Featured>
      </div>
      <Itemcard v-for="project in projects" :key="project" :link="project.link" :text="project.text" :detail="project.details" :title="project.title" :image="project.img" :theme="project.theme" :langs="project.lang" />
    </div>
  </div>
</template>

<script>
import Itemcard from '@/components/Itemcard.vue';
import projects from '@/api/projects.json';
import Featured from '@/components/Featured.vue';

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
    Itemcard,
    Featured
  },
  watch: {
    '$route' (to, from) {
      toTop();
    }
  }
}
</script>
