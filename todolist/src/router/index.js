import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import task from '@/components/taskDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: ':taskId',
        name: 'task',
        component: task,
        props: true
      },
    ]
  },
  // {
  //   path: '/:taskId',
  //   name: 'task',
  //   component: task,
  //   props:true
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router