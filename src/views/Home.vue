<template>
  <div id="home" class="d-block position-relative w-100 pt-5">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        <h1 class="text-white hero mt-5 fw-bold mb-3">I am <em>building</em><br>things for the web.</h1>
        <p class="text-white mb-4">Specializing on <code>PHP</code>, <Code>SQL</code>, Wordpress theme ( <code>ACF</code>, <code>Gutenberg</code> ) and plugin development,<br>WooCommerce integration, <code>Vue</code> and <code>React</code>. Scroll down to see some of my works or learn about my skills.</p>
        <a href="#about" class="btn btn-danger fw-bold py-3 px-5 me-3">Learn more</a>
        <router-link to="/contact/"  class="btn btn-primary d-none d-md-inline-block fw-bold py-3 px-5 me-3">Get in touch</router-link>
      </div>
    </div>
  </div>

  <div id="about" class="container d-flex">
    <span @click="showFeatured = true, showAll = false" :class="[showFeatured ? 'on' : '']" class="text-secondary text-uppercase fw-small me-3">Featured</span>
    <span class="text-secondary text-uppercase fw-small">
      <RouterLink class="text-secondary text-decoration-none" to="/work">
        View All
      </RouterLink>
    </span>
  </div>
  <div class="container">
    <div class="circle-container position-relative overflow-hidden pt-4">
      <div class="d-none d-md-flex align-items-center justify-content-center pulse floating-image" :style="{ backgroundColor: circleColor }">
        <span class="text-white">+</span>
      </div>
      <TransitionGroup name="slide-fade" datamode="out-in">
        <div v-if="showFeatured" class="content">

          <h2 class="h4 text-white fw-bold hero mb-2">Some of my previous <em>projects</em>.</h2>
          <p class="text-secondary fw-small mb-4">I build solutions that solve real-world problems and create meaningful impact.</p>

          <div class="row row-cols-1 row-cols-md-2 row-cols-xxl-3">
            <Itemcard v-on:cardHover="updateCircle" v-for="project in featured.slice(0, 6)" :badge="project.badge" :key="project" :link="project.link" :text="project.text" :detail="project.details" :title="project.title" :image="project.img" :theme="project.theme" :feature="project.feature" :langs="project.lang" :slug="project.slug" />
          </div>
        </div>

        <div v-if="showAll" class="content pb-3">
          <Skills></Skills>
        </div>

        <router-link to="/work"  class="btn btn-primary d-none d-md-inline-block fw-bold py-3 px-5 me-3">All Projects</router-link>
        
        <div class="row">

          <div class="col col-12">
            <div class="pt-5 pb-4">
              <span class="text-secondary text-uppercase fw-small on me-3">Skills</span>
              <span class="text-secondary text-uppercase fw-small">
                <RouterLink class="text-secondary text-decoration-none" to="/about">
                  Experience
                </RouterLink>
              </span>
            </div>
            <Skills></Skills>

            <router-link to="/about"  class="btn btn-primary d-none d-md-inline-block fw-bold py-3 px-5 me-3">Tenure</router-link>

          </div>
        </div>

      </TransitionGroup>


      <div class="row">
        <div class="col col-12">
          <div class="pt-5 pb-4">
            <span class="text-secondary text-uppercase fw-small on me-3">Learn more</span>
            <span class="text-secondary text-uppercase fw-small">
              <RouterLink class="text-secondary text-decoration-none" to="/contact">
                Get in touch
              </RouterLink>
            </span>
          </div>
        </div>
        <div class="col col-12">
          <h2 class="h4 text-white fw-bold hero mb-2">Frequently Asked <em>Questions</em>.</h2>
          <p class="text-secondary fw-small mb-4">I build solutions that solve real-world problems and create meaningful impact.</p>
        </div>

        <div class="col col-12">

          <div class="accordion" id="faqAccordion">
            <div v-for="(faq, index) in faqs" :key="index" class="accordion-item">
              <h2 class="accordion-header" :id="`heading-${index}`">
                <button 
                  class="accordion-button" 
                  type="button"
                  @click="toggleAccordion(index)"
                  :aria-expanded="openAccordion === index"
                  :aria-controls="`collapse-${index}`"
                >
                  {{ faq.question }}
                </button>
              </h2>
              <div 
                :id="`collapse-${index}`" 
                class="accordion-collapse collapse"
                :class="{ show: openAccordion === index }"
                :aria-labelledby="`heading-${index}`"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>

import Itemcard from '@/components/Itemcard.vue';
import Footer from '@/components/Footer.vue';
import projects from '@/api/projects.json';
import featured from '@/api/featured_home.json';

import Blob from '@/components/Blob';
import Skills from '@/components/Skills.vue';

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
      showAll: false,
      openAccordion: null,
      faqs: [
        {
          "question": 'How long does a website build usually take?',
          "answer": 'It depends on the project complexity. Brochure sites can take two to three weeks and eCommerce websites usually take four to five weeks'
        },
        {
          "question": "Do you offer design services?",
          "answer": "Lorem"
        },
        {
          "question": "Do you offer SEO services?",
          "answer": "Lorem"
        },
        {
          "question": "My website is not working, ",
          "answer": "Lorem"
        }
      ]
    }
  },
  components: {
    Itemcard,
    Footer,
    Blob,
    Skills
  },
  methods: {
    toggleAccordion(index) {
      this.openAccordion = this.openAccordion === index ? null : index;
    },
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
