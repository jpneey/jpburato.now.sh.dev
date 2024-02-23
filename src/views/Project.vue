<template>
  <div id="home" v-if="project" class="d-block position-relative w-100 pt-5">
    <div class="crack w-100 h-100 position-absolute top-0 start-0 opacity-25" :style="{ background: `linear-gradient(180deg, ${project.theme}, transparent)` }"></div>
    <div class="container d-block position-relative py-5">
      <div class="text-md-center py-5">
        <h1 class="text-white hero mt-5 mb-3 fw-bold" v-html="project.title"></h1>
        <div class="row justify-content-center text-white py-md-4">
          <div class="col col-12 col-md-4 pe-md-5 text-md-end">
              <ul class="project-meta-list mb-3 mb-md-0">
                <li><span class="d-block d-md-inline-block">{{ project.feature }}</span></li>
                <li><a :href="project.link" class="d-block d-md-inline-block text-decoration-none text-white" target="_blank">{{ project.text }}<span class="d-none d-md-inline ps-2"> &#8599;</span></a></li>
              </ul>
          </div>
          <div class="col col-12 col-md-5 text-start">
            <p class="mb-3" v-html="project.details"></p>
            <template v-for="lang in project.lang">
              <small class="btn btn-sm btn-secondary py-1 px-2 me-2 mb-2">{{ lang }}</small>
            </template>
          </div>
        </div>
      </div>
      <div v-if=" type == 'website' " class="laptop">
        <div class="laptop__screen">
          <div class="position-relative laptop__screen_holder">
            <PerfectScrollbar class="position-absolute top-0 start-0 w-100 h-100 image-wrapper">
              <img :src=" '.' + project.img" width="1600" height="1000" alt="Screen" class="w-100" />
            </PerfectScrollbar>
          </div>
        </div>
        <div class="laptop__bottom">
          <div class="laptop__under"></div>
        </div>
        <div class="laptop__shadow"></div>
      </div>

      <div v-if=" type == 'mobile-app' " class='mobile-phone'>
        <PerfectScrollbar class='screen position-relative'>
          <img :src=" '.' + project.img" width="1600" height="1000" alt="Screen" class="position-absolute top-0 start-0 h-auto w-100" />
        </PerfectScrollbar>
        <div class='brove'><span class='speaker'></span></div>
      </div>
    </div>
    
    <div class="position-fixed start-50 translate-middle-x bottom-0 mb-3 mb-md-5 text-center project-btns p-2">
      <router-link to="/" class="btn bg-transparent text-white mx-1 ms-0">Go back</router-link>
      <a :href=" project.link " class="btn danger mx-1 me-0 text-white" target="_blank" :style="{ background: project.theme, borderColor: project.theme }">{{ project.text }} <span class="d-none d-md-inline ps-1"> &#8599;</span></a>
    </div>
    <Footer></Footer>
  </div>
  
  <template v-else>
    <NotFound></NotFound>
  </template>
</template>

<script>

import Footer from '@/components/Footer';
import NotFound from '@/views/404.vue';
import projects from '@/api/projects.json';
import featured from '@/api/featured.json';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

export default {
  name: 'Project',
  data() {
    return {
      items: null,
      project: null,
      slug: null,
      type: 'website'
    }
  },
  components: {
    Footer,
    NotFound,
    PerfectScrollbar
  },
  methods: {
    initProject(){
      this.prepareProject();
      this.prepareProjectType();
    },
    prepareProject(){
      this.items = [...featured, ...projects];
      this.project = this.items.find( item => {
        return item.slug == this.$route.params.slug;
      })

      if ( ! this.project ) {
        // alert( "page not found" )
      }
    },
    prepareProjectType(){
      if ( this.project && this.project.hasOwnProperty( 'type' ) ) {
        this.type = this.project.type
      }
    }
  },
  watch: {
    '$route' (to, from) {
      toTop();
    }
  },
  created() {
    this.initProject();
  }
}
</script>
<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css"/>
