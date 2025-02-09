/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

window.Form = Form

import VueRouter from 'vue-router'

Vue.use(VueRouter)


import DashboardComponent from './components/dashboard.vue';
import ProductComponent from './components/product.vue';
import CreateProductComponent from './components/productcreate.vue';

// Vue.component('dashboard-component', DashboardComponent);
// Vue.component('product-component', ProductComponent);

let routes = [
    { path: '/dashboard', component: Vue.component('dashboard-component', DashboardComponent) },
    { path: '/product', component: Vue.component('product-component', ProductComponent) },
    { path: '/product/create', component: Vue.component('createproduct-component', CreateProductComponent) }
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode : 'history'
  })


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
}).$mount('#app');
