import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import gA from 'vue-analytics'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'John Paul Burato',
      metaTags: [
        {
          name: 'description',
          content: 'A website and visual novel developer and a Bachelor of Science In Information Technology graduate from a state university in the province of Rizal, Philippines'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About - John Paul Burato',
      metaTags: [
        {
          name: 'description',
          content: 'A website and visual novel developer and a Bachelor of Science In Information Technology graduate from a state university in the province of Rizal, Philippines'
        }
      ]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue'),
    meta: {
      title: '404 - John Paul Burato',
      metaTags: [
        {
          name: 'description',
          content: 'Page not found'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
