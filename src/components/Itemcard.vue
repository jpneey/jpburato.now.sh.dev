<template>
    <div class="col">
        <a :href="link" target="_blank">
            <div class="d-block position-relative mb-4 fade-in">
                <div class="item-image to-enter d-block position-relative w-100 overflow-hidden">
                    <p class="detail d-block w-100 bg-white position-absolute start-0 bottom-0">
                        <span class="d-block w-100 pt-5 pb-4 px-4 fw-bold text-body">
                            <span class="title">{{ title }}</span>
                            {{ detail }}
                        </span>
                        <span class="d-block item-link text-decoration-none px-4 py-3 w-100 fw-bold text-body">
                            <span class="lang-wrap d-block"><span v-for="lang in langs" :key="lang" class="text-secondary me-2"><small>{{ lang }}</small></span></span>
                        </span>
                    </p>
                    <div class="overlay position-absolute top-0 start-0 w-100" :style="'background:' + theme"></div>
                    <img :src="image" :alt="title" class="position-absolute shadow-lg rounded-3">
                </div>
            </div>
        </a>
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
        link: String,
        text: String,
        detail: String
    }
}
</script>