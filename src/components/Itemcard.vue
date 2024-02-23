<template>
    <div class="col mb-4 col-item-card">
        <router-link :to="'/project/' + slug" class="text-decoration-none d-block text-white feature-column modern position-relative overflow-hidden"
            @mouseenter="this.$emit( 'cardHover', image, theme )"
            :style="{ border_color: theme }">

            <div :style="{ background: theme }" class="position-absolute top-0 start-0 w-100 h-100 opacity-25"></div>

            <img :src="image" class="position-absolute image-fragment" loading="eager">
            <div class="d-block justify-content-between align-items-center position-absolute w-100 bottom-0 start-0 p-4">
                <div class="feature-column__content-gradient"></div>
                <div class="col col-md-12 h-100 d-flex position-relative">
                    <div class="d-block">
                        <p>{{ title }}</p>
                        <p class="text-secondary"><small>{{ feature }}</small></p>
                    </div>
                </div>
                <!-- <div class="col col-md-4" v-html="detail"></div> -->
            </div>
        </router-link>
    </div>
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
        detail: String,
        slug: String
    },
}
</script>