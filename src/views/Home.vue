<template>
  <div id="home" class="d-block position-relative w-100">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        <h1 class="text-white hero mt-5 fw-bold mb-3">I am building<br>things for the web.</h1>
        <p class="text-white mb-4">A developer specializing on the <code>LAMP</code> stack and currently transitioning to the ways of the <code>MERN</code> stack.</p>
        <a href="mailto:johnpaulburato.jp@gmail.com" class="btn btn-primary fw-bold py-3 px-5 me-3">Get in touch</a>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3">
      <Itemcard v-for="project in projects" :key="project" :link="project.link" :title="project.title" :image="project.img" :theme="project.theme" :langs="project.lang" />
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
  
  var rect = el.getBoundingClientRect()
  var elemTop = rect.top
  var elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
}

const handleScroll = (evt) => {
  var fadeInElements = Array.from(document.getElementsByClassName('fade-in'));
  for (var i = 0; i < fadeInElements.length; i++) {
    var elem = fadeInElements[i]
    if (isElemVisible(elem)) {
      elem.style.opacity = '1'
      elem.style.transform = 'scale(1)'
      /* fadeInElements.splice(i, 1) */
    } else {
      elem.style.opacity = '0'
      elem.style.transform = 'scale(0.8)'
    }
  }
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
  },
  setup() {
    onMounted(() => {
      handleScroll();
      document.addEventListener('scroll', handleScroll);
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll);
    })
  }

}
</script>
