import Vue from 'vue';
import Router from 'vue-router';
import Add from '@/views/Add.vue';
import Browse from './views/Browse.vue';
import Edit from '@/views/Edit.vue';
import Login from '@/views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/',
      name: 'browse',
      component: Browse
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
