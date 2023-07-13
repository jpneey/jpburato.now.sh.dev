<template>
    <a :href="link" target="_blank">
        <div class="d-block position-relative fade-in w-auto">
            <div class="item-image to-enter d-block position-relative w-100 overflow-hidden">
                <img :src="image" :alt="title" class="position-absolute rounded-3 fix">
            </div>
        </div>
    </a>
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