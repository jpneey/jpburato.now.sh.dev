<template>
  <div id="home" class="d-block position-relative bg-dim w-100">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        
        <h1 class="text-white mt-md-5 hero fw-bold mb-2">
          A developer<br>Based in the province of Rizal, Philippines.
        </h1>
        <p class="text-white mb-3">Born on June 24 1999 and graduated on April 2019.</p>
        <a href="./asset/jp-resume.pdf" target="_blank" class="btn btn-primary fw-bold py-3 px-5 me-3">Resume <i class="material-icons align-middle ms-2">open_in_new</i></a>
      </div>
    </div>

    <div class="container d-block position-relative text-white">
      <Work v-for="experience in experiences" :key="experience" :job="experience.position" :role="experience.role" :duration="experience.duration" :company="experience.company" />
    </div>

  </div>
</template>

<script>
import Work from '@/components/Work'

const experiences = [
  {
    duration: 'July 2019 - Present',
    position: 'Website Developer',
    company: 'Progressive Medical Corporation',
    role: 'Developed various websites and web-based systems with the LAMP stack. From UI/UX drafting, project file system designing, Database design up to configuring Apache servers on deployment. Some notable technologies, frameworks and applications used are: REST APIs, Object Oriented Programming, DRY, Woocommerce API, MVCL design, SEO Fundamentals, Wordpress and Opencart.'
  },
  {
    duration: 'May 2019 – Jul 2019',
    position: 'Website Developer',
    company: 'Bigtime Empire Corporation',
    role: 'Managed nginx webservers and maintained various wordpress created websites using Elementor and DIVI.',
  },
  {
    duration: 'Nov 2018 – Mar 2019',
    position: 'Intern',
    company: 'Dibztech Inc.',
    role: 'Collaborated with fellow interns using GIT and helped further the development of an internal web-based system written in Laravel and Vue.js.'
  },
  {
    duration: '',
    position: 'Software Developer',
    company: 'Freelancing',
    role: 'Aside from working full time in the corporate world, I’ve become a freelance developer and served clients such as Canvasspoint, Bigtime Empire, Technomed and undergraduate Masteral Professors. Also proficient on various media design software, I’ve also catered minor graphic designing and video editing for undergraduate college students'
  },
];

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
