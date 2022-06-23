# Vite 搭建 Vue2 项目（Vue2 + vue-router + vuex）

# 简介

在写本文时，`Vite` 默认不提供`Vue2`项目的创建方式。

使用`Vite`创建出来的`Vue`项目，暂时都是`Vue3`的。

`Vite `是构建工具的高阶封装。它的内部其实是` Rollup` 。

`Vite `是尤雨溪随着 `Vue3 `正式版 一起发布的一个工具。

最开始`Vite`是为`Vue3`服务的一个工具，但随着`Vite 2.0`发布之后，`Vite `就是一个独立的构建工具了。

`Vite `除了能搭建 `Vue3 `项目之外，还能搭建`react`等项目。

`Vite` 能搭建的项目包括：

- vanilla
- vanilla-ts
- vue
- vue-ts
  -react
- react-ts
- preact
- preact-ts
- lit-element
- lit-element-ts
- svelte
- svelte-ts

更详细的介绍请看:
<br/>
Vite 官网（中文版）[https://cn.vitejs.dev/]
<br/>
Vite GitHub [https://github.com/vitejs/vite]

# 1.1、初始化项目

首先进入项目存放的地方，然后运行以下命令创建项目。

```

npm init vite@latest

```

如果是首次使用 Vite 的话，会询问你是否继续，这里回复 y 即可。

```

Ok to proceed?(y)

```

之后只需输入项目名称即可，我这里新建的项目名为：vite-vue2。

```

Project name: vite-vue2

```

完成以上步骤后，再选择以下要新建的是什么项目即可。

这里选择 `vanilla`(原生的) 即可，随后会追问选择 原生 的还是 `ts` 的，根据自己需求选择即可。

我这里会选择 原生 进行开发。

项目创建成功后，会出现 3 条提示命令。

```

# 【1】进入项目

cd vite-vue2

# 【2】初始化项目

npm install

# 【3】运行项目

npm run dev

```

注意： 第二步使用`npm install`初始化可能会出现一些小问题，这里建议使用`yarn`初始化项目。

项目目录如下所示
<img src="https://gitee.com/txw1314/vite-vue2/blob/master/dir.png">

# 1.2、安装`vite`对`vue2`支持的插件

要在`vite`里运行`vue2`项目，需要安装一个`vite`的插件：`vite-plugin-vue2`

```
npm install vite-plugin-vue2 --dev
```

要使用`vite`插件，需要在项目的根目录创建 `vite.config.js `文件。

在`vite.config.js`里输入以下代码。

```
import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [createVuePlugin()]
}
```

引入`vite-plugin-vue2`插件，并用`Vite`提供的插件注册方法来注册。

需要注意，`createVuePlugin() `是跟着括号的，是要执行的！

# 1.3、安装`vue`依赖

使用以下命令安装` vue2`。

```
npm install vue -S
npm install vue-template-compiler
```

在写本文时，通过`npm install vue@3`安装`vue2`的话，需要在以上命令加上版本号。

# 1.4、修改项目文件依赖关系

- 1.4.1、创建`src`目录
  在项目根目录下创建`src`目录。

然后把`main.js`移到`src`目录里。

- 1.4.2、修改 index.html
  项目启动后，入口文件是`index.html`，而`index.html`原本引入了`main.js`，所以也要修改一下`index.html`文件的指向。

```
<script type="module" src="/src/main.js"></script>
```

- 1.4.3、创建`App.vue`文件
  创建`App.vue`文件，并输入以下代码

```
<template>
  <div>Hello Vite Vue2</div>
</template>
```

- 1.4.4、修改` src/main.js`
  这一步的代码就有点像使用`vue-cli`创建的项目里的`main.js`的操作了。

```
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
```

# 1.5、运行项目

经过之前几步的配置，运行以下命令就可以把项目跑起来了。

```
npm run dev
```

# 1.6、打包

运行一下命令可以打包项目。

```
npm run build
```

打包出来的项目目录名是：`dist`

# 2、安装`vue-router`

# 2.1、安装

```
npm install vue-router@3
```

提示:需要自行加一个版本号来约束

# 2.2 新建路由目录

- 2.2.1、创建路由表
  在`src`目录下创建`router`目录，并在`router`目录下创建`index.js`文件。

在`src/router/index.js`输入以下代码

```
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 引入 Home页面组件

// 注册路由插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
```

- 2.2.2、创建路由指向的页面组件
  在`src`目录下创建`views`目录，用来存放页面组件。

在`src/views`目录下创建 2 个页面：`Home.vue` 和`About.vue`

Home.vue 内容

```
<template>
  <div>
    Home
  </div>
</template>
```

# 2.3 全局注册

- 2.3.1、在`main.js`里注册

```
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

引入`router`，并且在`new Vue`时注册一下。

- 2.3.2 创建路由跳转标签 并 展示
  修改`App.vue`文件

```
<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
```

使用`<router-link>`标签定义跳转地址。

使用`<router-view>`标签展示内容。

# 3、安装`vuex`

# 3.1 安装

```
npm install vuex@3 --save
```

在写本文时，使用以上命令安装的`vuex`需要自行加一个版本号来约束。

# 3.2 新建`vuex`目录

在`src`目录下创建`store`目录，并在`store`目录下创建` index.js`。

在`index.js`文件输入以下代码

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  count: 0
},
  getters: {
    count(state) {
    return state.count
  }
},
  mutations: {
    addCount(state, num) {
      state.count += num
  }
},
  actions: {}
})
```

以上代码，在`state`里创建一个变量`count`用作计数器。

在`getters`里提供一个方法获取 `count`。

在`mutations`里提供一个方法修改 `count`。

# 3.3 全局注册

- 3.3.1 在`main.js`里注册

```
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

new Vue({
router,
store,
render: h => h(App)
}).$mount('#app')
```

引入`store`并在`new Vue`时注册。

- 3.3.2 在`Home.vue`里使用

```
<template>
  <div>
    <h1>Home</h1>
    <div>count: {{ count }}</div>
    <button @click="addCount">+1</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
  methods: {
    addCount() {
      this.$store.commit("addCount", 1);
    },
  },
};
</script>
```
