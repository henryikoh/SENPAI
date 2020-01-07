import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20a401e2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _cd3a9356 = () => interopDefault(import('../pages/_category/_slug.vue' /* webpackChunkName: "pages/_category/_slug" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _20a401e2,
    name: "index"
  }, {
    path: "/:category/:slug?",
    component: _cd3a9356,
    name: "category-slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
