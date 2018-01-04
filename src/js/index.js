// 内容
var Home = Vue.component('v-home', {
  template: '#v-home-template',
})

// 关于我
var About = Vue.component('v-about', {
  template: '#v-about-template',
})

// 导航栏组件
Vue.component('v-header', {
  template: '#v-header-template',
})

// 底部组件
Vue.component('v-footer', {
  template: '#v-footer-template',
})

var routes = [
  {path: '/home', component: Home},
  {path: '/about', component: About}
]

var router = new VueRouter({
  routes: routes
})

var app = new Vue({
  el: '#app',
  router: router,
  data: {
    behavior: '1',
  },
  computed: {},
  watch: {},
  methods: {},
  mounted: function () {
    this.$nextTick(function () {

    })
  }
})