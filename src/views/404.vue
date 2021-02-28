<template>
  <div id="home" class="d-block position-relative bg-dim w-100">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        
        <h1 class="text-white mt-5 hero fw-bold mb-2">
          Oops that's 404.
        </h1>
        <p class="text-white mb-3">We can't seem to find the page you are looking for :(</p>
        <router-link to="/" class="btn btn-primary fw-bold py-3 px-5 me-3">Take me home</router-link>
      </div>
    </div>
  </div>
</template>

<script>


const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

export default {
  name: '404',
  watch: {
    '$route' (to, from) {
      toTop();
    }
  }  
}
</script>
