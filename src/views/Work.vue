<template>
  <div id="home" class="d-block position-relative w-100 pt-5">
    <div class="container d-block position-relative pt-5">
      <div class="d-block py-5 mt-3">
        <h1 class="text-white hero mt-5 fw-bold mb-3">Some of my<br><em>previous works</em>.</h1>
        <p class="text-white mb-4">A curated list of projects that I have worked on in the past.</p>
      </div>
    </div>
  </div>

  <div class="container">

    <div class="project-wrapper row">
      <div id="projects" :style="{ background: circleColor  }">
        <img :src="circleImage" alt="">
      </div>
      <template v-for="project in projects">
        <div class="col position-relative overflow-hidden text-white py-4 border-bottom border-dark col-12" @mouseover="updateCircle_( project.img, project.theme )">
          <RouterLink :to="'/project/' + project.slug" class="row text-decoration-none text-white align-items-center">
            <div class="col col-12 col-md-8">
              <p class="h4 text-white fw-bold hero mb-2">{{ project.title }}</p>
            </div>
            <div class="col col-12 col-md-4 text-md-end">
              <span class="fw-small opacity-75 text-uppercase text-secondary">View project</span>
            </div>
          </RouterLink>
        </div>
      </template>
    </div>
  
  </div>

  <Footer></Footer>
</template>

<script>

import Footer from '@/components/Footer.vue';
import projects from '@/api/featured_home.json';
import featured from '@/api/featured.json';

import Blob from '@/components/Blob';

import $ from 'jquery';

export default {
  name: 'Work',
  data() {
    return {
      projects,
      featured,
      circleImage: 'test',
      circleColor: '#000000',
      showFeatured: true,
      showAll: false
    }
  },
  components: {
    Footer,
    Blob
  },
  methods: {
    updateCircle_( url, color ) {

      this.circleColor = color;
      
      $( "div#projects" )
        .removeClass( 'off' )
        
      this.circleImage = url;

      setTimeout( function() {
        $( "div#projects" )
          .addClass( 'off' )
      }, 300)

    },  
    animate() {
      const followerElement = document.querySelector("div#projects");

      let cursorX = 0;
      let cursorY = 0;

      let followerX = 0;
      let followerY = 0;

      let followSpeed = 0.15;

      function followCursor(){

        let deltaX = cursorX - followerX;
        let deltaY = cursorY - followerY;

        followerX = followerX + (deltaX * followSpeed);
        followerY = followerY + (deltaY * followSpeed);
        
        followerElement.style.left = followerX + "px";
        followerElement.style.top = followerY + "px";
        
        requestAnimationFrame(followCursor);
        
      }

      followCursor();

      document.addEventListener("mousemove", function(event){
        cursorX = event.clientX;
        cursorY = event.clientY;
      })
    }
  },
  mounted() {

    if ( ! window.matchMedia("(max-width: 767px)").matches ) {
      this.animate()
    }

  },
}
</script>
