import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _314dc354 = () => interopDefault(import('../pages/academy/index.vue' /* webpackChunkName: "pages/academy/index" */))
const _10632842 = () => interopDefault(import('../pages/academy/courses/design101.vue' /* webpackChunkName: "pages/academy/courses/design101" */))
const _67e433b7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _1f058e06 = () => interopDefault(import('../pages/_category/_slug.vue' /* webpackChunkName: "pages/_category/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/academy",
    component: _314dc354,
    name: "academy"
  }, {
    path: "/academy/courses/design101",
    component: _10632842,
    name: "academy-courses-design101"
  }, {
    path: "/",
    component: _67e433b7,
    name: "index"
  }, {
    path: "/:category/:slug?",
    component: _1f058e06,
    name: "category-slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
