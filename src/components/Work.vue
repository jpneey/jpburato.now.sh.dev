<template>
    <div class="row mb-5">
        <div class="col col-12 col-md-4">
            <div class="aside">
                <p>{{ duration }}</p>
            </div>
        </div>

        <div class="col col-12 col-md-8">
            <div class="content">
                <h4 class="fw-bold mb-0">{{ company }}</h4>
                <p class="text-white mb-3"><small>{{ job }}</small></p>
                <p class="text-secondary">{{ role }}</p>
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
        role: String
    }
}
</script>