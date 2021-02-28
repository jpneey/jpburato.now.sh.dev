<template>
    <div class="greeting">
        <h1>{{ greeting }}</h1>
        <p>{{ message }}</p>
        <div v-html="html"></div>
        <br>
    </div>
</template>
<script>
export default {
  name: 'Greetings',
  props: {
    greeting: String,
    message: String,
    html: String
  }
}
</script>