<template>
    <div class="col">
        <div class="d-block position-relative mb-4 fade-in">
            <div class="item-image d-block position-relative w-100 bg-light rounded-3 overflow-hidden">
                <div class="overlay position-absolute top-0 start-0 w-100" :style="'background:' + theme"></div>
                <img :src="image" :alt="title" class="w-100 position-absolute shadow-lg rounded-3">
                <a :href="link" target="_blank" class="item-link text-white">
                    <i class="material-icons position-absolute top-50 start-50 bg-white p-3 rounded-circle shadow" :style="'color:' + theme">open_in_new</i>
                </a>
            </div>
            <p class="fw-bold text-white mt-3 mb-0">{{ title }}</p>
            <p>
                <span v-for="lang in langs" :key="lang" class="text-secondary me-2"><small>{{ lang }}</small></span>
            </p>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Itemcard',
    props: {
        title: String,
        image: String,
        theme: String,
        langs: Array,
        link: String
    }
}
</script>