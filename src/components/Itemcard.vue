<template>
    <div class="col">
        <div class="d-block position-relative mb-4 fade-in">
            <div class="item-image d-block position-relative w-100 bg-light overflow-hidden">

                <p class="detail d-block w-100 bg-white position-absolute start-0 bottom-0">
                    <span class="d-block w-100 pt-5 pb-4 px-4 fw-bold text-body border-bottom">
                        <span class="title">{{ title }}</span>
                        {{ detail }}
                    </span>
                    <span class="d-block item-link text-decoration-none bg-white px-4 py-3 w-100 fw-bold text-body">
                        <span class="lang-wrap d-block"><span v-for="lang in langs" :key="lang" class="text-secondary me-2"><small>{{ lang }}</small></span></span>
                    </span>
                        
                    <a :href="link" target="_blank" class="position-absolute bottom-0 end-0 material-icons text-dark text-decoration-none py-3 px-4">east</a>
                </p>
                <div class="overlay position-absolute top-0 start-0 w-100" :style="'background:' + theme"></div>
                <img :src="image" :alt="title" class="position-absolute shadow-lg rounded-3">
            </div>
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
        link: String,
        text: String,
        detail: String
    }
}
</script>