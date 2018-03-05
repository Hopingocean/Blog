// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({4:[function(require,module,exports) {
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
},{}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':60577/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,4])