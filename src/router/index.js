import Vue from 'vue'
import Router from 'vue-router'
import dev from '@/components/dev'
import vueHeadful from 'vue-headful';

Vue.component('vue-headful', vueHeadful);
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dev',
      name: 'dev',
      component: dev,
      meta: {
        title: 'terminal'
      }
    }
  ]
})
