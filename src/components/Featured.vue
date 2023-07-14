<template>
    <div class="position-relative overflow-hidden featured-work d-flex align-items-end item-image mb-4 w-100 h-100" :style="'background:' + theme">
        <div class="row align-items-center w-100 mx-0 position-relative">
            <div class="col col-12 col-md-5">
				<div class="featured-content px-4 py-5 px-md-5 pe-md-0">
					<h3 class="text-white hero my-3 fw-bold" v-html="title"></h3>
					<p class="my-0 text-white p-small" v-html="content"></p>
				</div>
            </div>
            <div class="col col-12 col-md-7">

				<swiper-container
					:slides-per-view="1"
					:space-between="20"
					:centered-slides="true"
					:pagination="true"
					:pagination-dynamic-bullets="true"
					:injectStyles="[styles]"
					:loop="true"
					:autoplay-delay="2500"
					:autoplay-disable-on-interaction="false"
					@progress="onProgress"
					@slidechange="onSlideChange"
				>
					<swiper-slide v-for="project in projects" :data-title="project.title" :data-details="project.details" :data-color="project.theme">
						<Item :link="project.link" :text="project.text" :detail="project.details" :title="project.title" :image="project.img" :theme="project.theme" :langs="project.lang" />
					</swiper-slide>
				</swiper-container>


			</div>
        </div>
    </div>
</template>
  
<script>

	import Item from '@/components/Item.vue';
	import projects from '@/api/featured.json';

	let self;

	export default {
		name: 'Featured',
		setup() {

			const styles =  `
				.swiper-pagination-bullets-dynamic {
					overflow: hidden;
					font-size: 0px;
					top: 10% !important;
					bottom: auto !important;
				}
				.swiper-pagination-bullet {
					background: #fff;
					opacity: .3;
				}
				.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
					background: #fff;
					opacity: 1;
				}
			`;

			const onSlideChange = (e) => {
				const [swiper, progress] = e.detail;
				self.title 	 = swiper.slides[swiper.activeIndex].dataset.title
				self.content = swiper.slides[swiper.activeIndex].dataset.details
				self.theme   = swiper.slides[swiper.activeIndex].dataset.color
			};

			return {
				onSlideChange,
				styles
			};
		},
		created() {
			self = this;
		},
		data() {
			return {
				projects,
				title: "Explore some<br>of my <em>latest work</em> .",
				content: "",
				theme: "#26091a"
			}
		},
		components: {
			Item,
		},
		watch: {
			'$route' (to, from) {
				toTop();
			}
		}
	}
</script>
  