import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowPost from '../views/posts/Show.vue'
import CreatePost from '../views/posts/Create.vue'
import Tag from '../views/posts/Tag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/posts/:id',
      name: 'ShowPost',
      component: ShowPost,
      props: true
    },
    {
      path: '/posts/create',
      name: 'CreatePost',
      component: CreatePost
    },
    {
      path: '/tag/:tag',
      name: 'Tag',
      component: Tag
    }
  ]
})

export default router
