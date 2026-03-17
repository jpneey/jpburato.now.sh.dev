<template>
    <li class="position-relative w-100 d-block px-5"><router-link to="/" class="hero ms-md-5">Home</router-link></li>
    <li class="position-relative w-100 d-block px-5"><router-link to="/about/" class="hero ms-md-5">About</router-link></li>
    <li class="position-relative w-100 d-block px-5"><a href="https://jpe.itch.io/" target="_blank" class="hero ms-md-5">Itch.io<span class="d-inline ps-2"> &#8599;</span></a></li>
    <li class="position-relative w-100 d-block px-5"><router-link to="/contact/" class="hero ms-md-5">Get in touch</router-link></li>
</template>

<script>
    export default {
        name: 'Links'
    }
</script>