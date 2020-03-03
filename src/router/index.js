import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import hello from '../views/hello.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/hello',
    name: 'hello',
    component: hello
  },
  {
    path: '/About',
    redirect: '/Home',
    component: About,
    children: [{ path: '/Home', component: Home }]// 子路由
  }
]

const router = new VueRouter({
  routes
})

export default router
