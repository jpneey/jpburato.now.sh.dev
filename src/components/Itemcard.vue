<template>
    <img :src="image" class="d-none" loading="eager">
    <div class="d-md-none text-white feature-column position-relative overflow-hidden " >
        <div class="d-block d-md-flex justify-content-between align-items-center position-relative overflow-hidden rounded" :style="{ backgroundColor: theme }">
            <div class="col featured-image-wrapper">
                <div class="featured-image mb-0 position-relative" :style="{ backgroundColor: theme, backgroundImage: 'url('+ image +')' }">
                    <a :href="link" class="d-none btn btn-sm btn-primary position-absolute mb-3 rounded-pill px-4 py-2 bottom-0 start-50 translate-middle-x">Visit </a>
                </div>
            </div>
            <div class="col col-md-6">
                <div class="p-4 position-relative">
                    <div class="position-absolute bg-dark opacity-3 top-0 start-0 w-100 h-100"></div>
                    <div class="position-relative">
                        <p class="h6">{{ title }}</p>
                        <small class="text-white opacity-75" v-html="detail"></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a :href="link" target="_blank" class="text-decoration-none d-none d-md-block text-white feature-column modern position-relative overflow-hidden" @mouseenter="this.$emit( 'cardHover', image, theme )">
        <div class="d-block d-md-flex justify-content-between align-items-center">
            <div class="col col-md-8">
                <p class="h2">{{ title }}</p>
                <p class="text-secondary">{{ feature }}</p>
            </div>
            <div class="col col-md-4" v-html="detail"></div>
        </div>
    </a>
</template>
<script>

export default {
    name: 'Itemcard',
    emits: [ 'cardHover' ],
    props: {
        title: String,
        feature: String,
        image: String,
        theme: String,
        langs: Array,
        link: String,
        text: String,
        detail: String
    }
}
</script>