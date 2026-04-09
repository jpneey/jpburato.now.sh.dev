<template>
  <div class="skill-icon">
    <div class="skill">
      <img :src="url" alt="">
    </div>
    <span>{{ name }}</span>
  </div>
</template>
<script>

export default {
  name: 'Skill',
  props: {
    url: String,
    name: String,
  }
}
</script>