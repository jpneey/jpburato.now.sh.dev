<template>
    <div class="row mb-5">
        <div class="col col-12 col-md-4">
            <div class="aside">
                <h5>{{ total }}</h5>
                <p class="text-secondary">{{ duration }}</p>
            </div>
        </div>
        <div class="col col-12 col-md-8">
            <div class="content position-relative">
                <h4 class="fw-bold mb-0">{{ company }}</h4>
                <p class="text-white mb-3"><small>{{ job }}</small></p>
                <p class="text-secondary mb-4">{{ role }}</p>
                <button v-for="tool in tools" :key="tool" class="btn btn-sm btn-secondary py-1 px-2 me-2 mb-2"><small>{{ tool }}</small></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Work",
    props: {
        duration: String,
        job: String,
        company: String,
        role: String,
        tools: Array,
        total: String,
    }
}
</script>