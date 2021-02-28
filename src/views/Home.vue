<template>
  <div id="home" class="d-block position-relative w-100">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        <h1 class="text-white hero  mt-md-5 fw-bold mb-3">I am building<br>things for the web.</h1>
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
import { onMounted, onUnmounted } from 'vue';

var projects = [
  { 
    title: 'Senzmedical',
    details: 'A flat and modern looking minimalist website created with PHP and Materialize.css.', 
    lang: ['PHP', 'Materialize', 'Jquery'],
    link: 'http://senz-medical.com',
    img: './asset/senz.jpg',
    text: 'Visit Site' ,
    theme: '#1249a6',
  },
  { 
    title: 'PMC Group of Companies',
    details: 'A two-pager responsive website created with minimalism in mind.', 
    lang: ['PHP', 'Materialize', 'Jquery'],
    link: 'http://pmcgroup.com',
    img: './asset/pmcg.jpg',
    text: 'Visit Site',
    theme: '#e0ac22',
  },
  { 
    title: 'Progressive Medical Corporation',
    details: 'A corporate website with administration module for blogging, product management and pdf portals for brochures.', 
    lang: ['PHP', 'MySQL', 'Materialize', 'Jquery'],
    link: 'https://pmc.ph',
    img: './asset/pmc.jpg',
    text: 'Visit Site',
    theme: '#22e065',
  },
  { 
    title: 'Opus Academy',
    details: 'Clean and mobile friendly website with multi language support created on bootstrap 4', 
    lang: ['PHP', 'Bootstrap 4', 'Jquery'],
    link: 'https://opusacademy.com',
    img: './asset/opus.jpg',
    text: 'Visit Site' ,
    theme: '#0069d9',
  },
  { 
    title: 'Calculate.now.sh',
    details: 'Clean and mobile friendly website with multi language support created on bootstrap 4', 
    lang: ['CSS 3', 'Javascript'],
    link: 'https://opusacademy.com',
    img: './asset/calculate.jpg',
    text: 'Visit Site' ,
    theme: '#8326e1',
  },
  { 
    title: 'Panamed Philippines',
    details: 'Clean and mobile friendly website with multi language support created on bootstrap 4', 
    lang: ['PHP', 'Materialize', 'Jquery'],
    link: 'https://panamed.com.ph',
    img: './asset/ppi.jpg',
    text: 'Visit Site' ,
    theme: '#0d3e7c',
  },
  { 
    title: 'Technomed Internation',
    details: 'Clean and mobile friendly website with multi language support created on bootstrap 4', 
    lang: ['PHP', 'Bootstrap 4', 'Jquery'],
    link: 'https://technomed.com.ph',
    img: './asset/technomed.jpg',
    text: 'Visit Site' ,
    theme: '#0d3e7c',
  },
  { 
    title: 'Inmed Internation',
    details: 'Clean and mobile friendly website with multi language support created on bootstrap 4', 
    lang: ['PHP', 'Materialize', 'Jquery'],
    link: 'https://inmed.com.ph',
    img: './asset/inmed.jpg',
    text: 'Visit Site' ,
    theme: '#ff7600',
  },

];

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
