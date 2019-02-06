import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Playlist from '@/components/Playlist'
import Videos from '@/components/Videos'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/search',
      component: Search
    },
    {
       path: '/playlist/:id',
       component: Playlist 
    },
    {
        path:'/videos/:id',
        component: Videos
    }
  ]
})