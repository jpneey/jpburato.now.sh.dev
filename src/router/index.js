import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Project from '../views/Project';

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
    component: About,
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
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact - John Paul Burato',
      metaTags: [
        {
          name: 'description',
          content: 'A website and visual novel developer and a Bachelor of Science In Information Technology graduate from a state university in the province of Rizal, Philippines'
        }
      ]
    }
  },
  {
    path: '/project/:slug',
    name: 'Project',
    component: Project
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
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
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
