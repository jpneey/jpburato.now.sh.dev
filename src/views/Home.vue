<template>
  <div id="home" class="d-block position-relative w-100 pt-5">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        <h1 class="text-white hero mt-5 fw-bold mb-3">I am <em>building</em><br>things for the web.</h1>
        <p class="text-white mb-4">I specialize on the <code>LAMP</code> stack, <code>Wordpress core</code> and <code>WooCommerce</code>.<br>Scroll down to see some of my work.</p>
        <router-link to="/about/" class="btn btn-danger fw-bold py-3 px-5 me-3">About</router-link>
        <router-link to="/contact/"  class="btn btn-primary d-none d-md-inline-block fw-bold py-3 px-5 me-3">Get in touch</router-link>
      </div>
    </div>
  </div>

  <div class="container d-flex pb-3">
    <span @click="showFeatured = true, showAll = false" :class="[showFeatured ? 'on' : '']" class="text-secondary text-uppercase fw-small me-3">Recent works ({{ featured.length }})</span>
    <span @click="showFeatured = false, showAll = true" :class="[showAll ? 'on' : '']" class="text-secondary text-uppercase fw-small">All ({{ projects.length }})</span>
  </div>

  <div class="circle-container container position-relative overflow-hidden">
    <div class="d-none d-md-block floating-image" :style="{ backgroundColor: circleColor }">
      <div class="floating-window position-absolute start-50 bottom-0" :style="{ backgroundImage: 'url('+ circleImage +')' }"></div>
      <div class="floating-circle rounded-circle d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle">
        <i class="material-icons align-middle text-white">open_in_new</i>
      </div>
    </div>
    <TransitionGroup name="slide-fade" datamode="out-in">
      <div v-if="showFeatured" class="content mx-0">
        <Itemcard v-on:cardHover="updateCircle" v-for="project in featured" :key="project" :link="project.link" :text="project.text" :detail="project.details" :title="project.title" :image="project.img" :theme="project.theme" :feature="project.feature" :langs="project.lang" />
      </div>
      <div v-if="showAll" class="content">
        <Itemcard v-on:cardHover="updateCircle" v-for="project in projects" :key="project" :link="project.link" :text="project.text" :detail="project.details" :title="project.title" :image="project.img" :theme="project.theme" :feature="project.feature" :langs="project.lang" />
      </div>
    </TransitionGroup>

  </div>
  <Footer></Footer>
</template>

<script>

import Itemcard from '@/components/Itemcard.vue';
import Footer from '@/components/Footer.vue';
import projects from '@/api/projects.json';
import featured from '@/api/featured.json';

import Blob from '@/components/Blob';

import $ from 'jquery';

export default {
  name: 'Home',
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
    Itemcard,
    Footer,
    Blob
  },
  methods: {
    updateCircle( url, color ) {

      this.circleColor = color;
      
      $( "div.floating-window" )
        .removeClass( 'off' )
        
      this.circleImage = url;

      setTimeout( function() {
        $( "div.floating-window" )
          .addClass( 'off' )
      }, 300)

    },  
    animate() {
      const floatingImage = document.querySelector("div.floating-image");

      let mouseX = 0;
      let mouseY = 0;

      let ballX = 0;
      let ballY = 0;

      let speed = 0.05;

      function animate(){

        let distX = mouseX - ballX;
        let distY = mouseY - ballY;

        ballX = ballX + (distX * speed);
        ballY = ballY + (distY * speed);
        
        floatingImage.style.left = ballX + "px";
        floatingImage.style.top = ballY + "px";
        
        requestAnimationFrame(animate);
        
      }

      animate();

      document.addEventListener("mousemove", function(event){
        mouseX = event.clientX;
        mouseY = event.clientY;
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
