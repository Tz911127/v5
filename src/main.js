// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '@/styles/index.scss' // global css
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})


router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
      localStorage.removeItem("token");
      next()
    // }
  } else {
    if (localStorage.getItem('token') || to.name == 'login') {
      next();
    } else {
      next({
        path: '/login'
      })
    };
  }

})
