// header
var Header = Vue.component('v-header', {
  template: '#v-header-template',
  data: function () {
    return {
      behavior: 1,
      toggleabout: false
    };
  },
  methods: {
    showSidebar: function () {
      this.behavior = (this.behavior == 1) ? 2 : 1;
      this.$emit('tochangebehavior', this.behavior); // $emit传入的事件名称只能使用小写，不能使用大写的驼峰规则命名
    },
    showAbout: function () {
      this.$emit('showabout', true);
    }
  }
})

// 导航栏组件
var Sidebar = Vue.component('v-sidebar', {
  props: ['behavior'],
  template: '#v-sidebar-template',
  data: function () {
    return {
      toggleabout: true,
    };
  },
  methods: {
    showAbout: function () {
      this.$emit('showabout', true);
    }
  }
})

// 内容
var homeData = {
  homeBlogList: [
    {
      icon: 'http://oak1q2h54.bkt.clouddn.com/blog/ljdzz_icon.png',
      title: 'cloc代码统计工具',
      desc: '项目地址：https://github.com/AlDanial/cloc',
      date: '2017年04月18日'
    }
  ]
};
var Home = Vue.component('v-home', {
  props: ['behavior'],
  template: '#v-home-template',
  data: function () {
    return homeData;
  }
})

// 分类
var categoryData = {
  categoryList: [
    {
      id: '#personal',
      name: '个人总结'
    },
    {
      id: '#javaScript',
      name: 'javaScript'
    },
    {
      id: '#vue',
      name: 'Vue'
    },
    {
      id: '#tips',
      name: 'Tips'
    },
    {
      id: '#life',
      name: '生活'
    }
  ]
}
var Category = Vue.component('v-category', {
  props: ['behavior'],
  template: '#v-category-template',
  data: function () {
    return categoryData;
  }
})

// 标签
var tagData = {
  tagList: [
    {
      id: '#html5',
      name: 'HTML5'
    },
    {
      id: '#ajax',
      name: 'ajax'
    },
    {
      id: '#vue',
      name: 'Vue'
    },
    {
      id: '#linux',
      name: 'linux'
    },
    {
      id: '#css3',
      name: 'css3'
    },
    {
      id: '#optimize',
      name: '优化'
    },
  ]
}
var Tag = Vue.component('v-tag', {
  props: ['behavior'],
  template: '#v-tag-template',
  data: function () {
    return tagData;
  }
})

// 关于我
var aboutData = {
  userinfo: {
    name: 'Lee',
    icon: 'http://oak1q2h54.bkt.clouddn.com/blog/lf.jpg',
    desc: '听海...',
    email: 'h_opingocean@outlook.com',
    address: '浙江 - 杭州'
  }
}
var About = Vue.component('v-about', {
  props: ['toggleabout'],
  template: '#v-about-template',
  data: function () {
    return aboutData;
  },
  methods: {
    hideAbout: function () {
      this.$emit('hideabout', false);
    }
  }
})

// 底部组件
var Footer = Vue.component('v-footer', {
  template: '#v-footer-template',
})

var routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/category', component: Category},
  {path: '/tag', component: Tag}
]

// 初始化VueRouter
var router = new VueRouter({
  routes: routes
})

// 初始化Vue
var app = new Vue({
  el: '#app',
  router: router,
  data: {
    behavior: 1,
    toggleabout: false,
  },
  computed: {},
  watch: {},
  methods: {
    changeBehavior: function (i) {
      this.behavior = i;
    },
    changeToggleState: function (state) {
      this.toggleabout = state;
    }
  },
  components: {
    Header,
    Sidebar,
    Category,
    Tag,
    About,
  },
  mounted: function () {
    this.$nextTick(function () {
      getHomeList();
    })
  }
})

// 获取首页博客列表
function getHomeList() {

}