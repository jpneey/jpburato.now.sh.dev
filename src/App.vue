<template>

  <div class="blob overflow-hidden" v-if="!showMobileMenu">
    <Blob></Blob>
  </div>

  <div id="nav">
    <div class="container d-flex align-items-center w-100 clear h-100">
      <div class="d-block w-100">
        <router-link to="/" class="logo">
          <div class="rounded-circle avatar border border-4 bg-white d-block position-relative overflow-hidden pulse-red">
            <img src="/asset/gravatar.png" alt="JP" class="w-100">
          </div>
        </router-link>
      </div>
      <div class="nav-links opacity-0">
        <a href="#menu" :class="'nav-hamburger ' + ((showMobileMenu) ? 'active' : 'inactive' )" class="nav-hamburger" @click="showMobileMenu = !showMobileMenu"></a>
      </div>

      <div :class="{ active: showMobileMenu }" @click="showMobileMenu = !showMobileMenu" class="sidenav position-fixed h-100 w-100 start-0 top-0">

        <ul class="sidenav-content w-100 h-100 ms-auto d-flex align-items-center justify-content-center flex-wrap align-content-center overflow-hidden position-relative">
          <li class="blob overflow-hidden position-absolute right-0 top-0" v-if="showMobileMenu">
            <Blob></Blob>
          </li>
          <li class="position-relative w-100 d-block px-5"><router-link to="/" class="hero ms-md-5">Home</router-link></li>
          <li class="position-relative w-100 d-block px-5"><router-link to="/about/" class="hero ms-md-5">About</router-link></li>
          <li class="position-relative w-100 d-block px-5"><a href="https://jpe.itch.io/" target="_blank" class="hero ms-md-5">Itch.io<span class="d-inline ps-2"> &#8599;</span></a></li>
          <li class="position-relative w-100 d-block px-5"><router-link to="/contact/" class="hero ms-md-5">Get in touch</router-link></li>
        </ul>
      </div>

    </div>
  </div>

  <div class="router-view overflow-hidden position-relative">
    <router-view v-slot="{ Component, route }">
      <transition name="page-fade">
        <div class="w-100 overflow-hidden top-0 start-0 position-relative-soft" :key="route.path">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
  

  <div class="bg-light shadow-lg">
    <div class="point p-3"></div>
    <div class="container">

      <div class="row row-cols-1">
        <div class="col">
          <div class="text-white p-3 p-md-5 text-center">
            <a href="https://github.com/jpneey" class="socials">
              <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>github [#142]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                          </g>
                      </g>
                  </g>
              </svg>
            </a>
            <a href="https://twitter.com/jpneey" class="socials">
              <svg width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>twitter [#154]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#000000">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]"></path>
                          </g>
                      </g>
                  </g>
              </svg>
            </a>
            <a href="https://linkedin.com/in/john-paul-burato/" class="socials">
              <svg  width="20px" height="16px" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>Linkedin</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Social-Icons---Rounded-Black" transform="translate(-376.000000, -267.000000)">
                          <g id="Linkedin" transform="translate(376.000000, 267.000000)">
                              <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" id="Rounded" fill="#000000"></path>
                              <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFFFFF"></path>
                          </g>
                      </g>
                  </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
  import Blob from '@/components/Blob';

  export default {
    name: 'Home',
    data() {
      return {
        showMobileMenu: false
      }
    },
    components: {
      Blob
    }
  }
</script>
