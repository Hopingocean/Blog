// header
var Header = Vue.component('v-header', {
  template: '#v-header-template',
})
// 内容
var homeBlogList = {homeBlogList: [
  {
    icon: 'http://oak1q2h54.bkt.clouddn.com/blog/0.jpg',
    title: 'cloc代码统计工具',
    desc: '项目地址：https://github.com/AlDanial/cloc',
    date: '2017年04月18日'
  }
]};
var Home = Vue.component('v-home', {
  template: '#v-home-template',
  data: function () {
    return homeBlogList;
  }
})

// 分类
var Category = Vue.component('v-category', {
  template: '#v-category-template',
})

// 标签
var Tag = Vue.component('v-tag', {
  template: '#v-tag-template',
})

// 关于我
var About = Vue.component('v-about', {
  template: '#v-about-template',
})

// 导航栏组件
var Sidebar = Vue.component('v-sidebar', {
  template: '#v-sidebar-template',
})

// 底部组件
var Footer = Vue.component('v-footer', {
  template: '#v-footer-template',
})

var routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/header', component: Header},
  {path: '/category', component: Category},
  {path: '/tag', component: Tag},
  {path: '/about', component: About}
]
// 初始化VueRouter
var router = new VueRouter({
  routes: routes
})
// 初始化Vue
var app = new Vue({
  el: '#app',
  router: router,
  data: {},
  computed: {},
  watch: {},
  methods: {},
  mounted: function () {
    this.$nextTick(function () {
      getHomeList();
    })
  }
})

// 获取首页博客列表
function getHomeList() {

}