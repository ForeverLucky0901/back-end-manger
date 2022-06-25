import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 引入 Home页面组件

// 注册路由插件
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: '首页',
    redirect: '/basic/index',
    component: Home,
    icon: 'el-icon-tickets',
    children: [
      {
        path: '/',
        redirect: '/basic/index'
      },
      {
        path: '/basic/index',
        name: '基础管理',
        icon: '',
        component: () => import('../views/basic/index.vue'),
        meta: {
          isLogin: true,
          isKeepAlive: false
        }
      },
      {
        path: '/menu/index',
        name: '菜单管理',
        icon: '',
        component: () => import('../views/menu/index.vue'),
        meta: {
          isLogin: true,
          isKeepAlive: false
        }
      },
      {
        path: '/artcle/index',
        name: '文章管理',
        icon: '',
        component: () => import('../views/artcle/index.vue'),
        meta: {
          isLogin: true,
          isKeepAlive: false
        }
      },
      {
        path: '/artcle/artEdit',
        name: '文章编辑',
        icon: '',
        component: () => import('../views/artcle/ArtEdit.vue'),
        meta: {
          isLogin: true,
          isKeepAlive: false
        }
      },
      {
        path: '/artcle/artDetail',
        name: '文章详情',
        icon: '',
        component: () => import('../views/artcle/artDetail.vue'),
        meta: {
          isLogin: true,
          isKeepAlive: false
        }
      },
      {
        path: '/system/index',
        name: '系统管理',
        icon: '',
        component: () => import('../views/system/index.vue'),
        meta: {
          isLogin: true,
          isKeepAlive: false
        }
      },
      {
        path: '/about/About',
        name: '关于我们',
        icon: '',
        component: () => import('../views/about/About.vue'),
        meta: {
          isLogin: true,
          isKeepAlive: false
        }
      },
    ]
  },
  {
    path: '/',
    name: '登陆',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/menu/index.vue')
  }
]

// // 这里就可以进行vue-router的beforeEach拦截了，你也可以放其他地方，我比较喜欢放这
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || '';
//   if (to.meta.isLogin) {
//     next('/login');
//   } else {
//     next();
//   }
// });
 
const router = new VueRouter({
  routes,
  mode:'hash'
});

export default router;