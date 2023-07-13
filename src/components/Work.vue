<template>
    <div class="row mb-5">
        <div class="col col-12 col-md-4">
            <div class="aside">
                <h5>{{ calculateTotal }}</h5>
                <p class="text-secondary">{{ duration }}</p>
            </div>
        </div>
        <div class="col col-12 col-md-8 work-details">
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
        start: String
    },
    computed: {
        calculateTotal() {
            let total = this.total;
            if ( total == null && this.start ) {
                let start_date = Date.parse( this.start )
                let end_date   = Date.now()
                return new Date( end_date - start_date ).getFullYear() - 1970 + " years & counting";
            }
            return this.total;
        }
    }
}
</script>