<template>
    <div class="col">
        <div class="d-block position-relative mb-4 fade-in">
            <div class="item-image to-enter d-block position-relative w-100 overflow-hidden">
                <p class="detail d-block w-100 bg-white position-absolute start-0 bottom-0">
                    <span class="d-block w-100 pt-3 pt-md-5 pb-md-4 px-4 fw-bold text-body">
                        <span class="title mb-0 mb-md-3">{{ title }}</span>
                        <div class="d-none d-md-block">
                            {{ detail }}
                        </div>
                    </span>
                    <span class="d-block item-footer text-decoration-none px-4 py-3 w-100 fw-bold text-body">
                        <span class="lang-wrap d-block"><span v-for="lang in langs" :key="lang" class="text-secondary me-2"><small>{{ lang }}</small></span></span>
                    </span>
                </p>
                <div class="overlay position-absolute top-0 start-0 w-100" :style="'background:' + theme"></div>
                <img :src="image" :alt="title" class="position-absolute shadow-lg rounded-3">
                <a :href="link" target="_blank" class="pulse item-link item-link__on-card m-2 position-absolute rounded-circle top-0 end-0 d-flex justify-content-center align-items-center text-white text-decoration-none"><i class="material-icons">open_in_new</i></a>
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