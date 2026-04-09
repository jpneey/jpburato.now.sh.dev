<template>
  <div class="skill-icon">
    <div class="skill">
      <i class="position-absolute top-50 start-50 translate-middle">{{ title }}</i>
    </div>
    <span>{{ name }}</span>
  </div>
</template>
<script>

export default {
  name: 'StaticSkill',
  props: {
    name: String,
    title: String,
  }
}
</script>