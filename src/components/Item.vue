<template>
    <div class="d-block position-relative fade-in w-auto">
        <div class="item-image to-enter rounded-0 d-block position-relative w-100 overflow-hidden">
            <img :src="image" :alt="title" class="position-absolute featured-image rounded-3 fix">
        </div>
        <template v-if="link">
            <a :href="link" target="_blank" class="pulse item-link position-absolute rounded-circle top-50 start-50 d-flex justify-content-center align-items-center text-white text-decoration-none"><i class="material-icons">open_in_new</i></a>
        </template>
    </div>
</template>
<script>

export default {
    name: 'Item',
    props: {
        title: String,
        image: String,
        theme: String,
        langs: Array,
        link: String,
        text: String,
        detail: String
    }
}
</script>