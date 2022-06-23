<template>
  <div>
    <h1>LOGO</h1>
    <!--  unique-opened ：只能打开一个折叠;删掉的话可以打开对个折叠菜单了 -->
    <el-menu
      class="el-menu-vertical-demo"
      unique-opened
      collapse-transition
      router
      :collapse="collapsed"
      :default-active="$route.path"
      background-color="#334157"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu
        v-for="menu in allMenu"
        :key="menu.menuid"
        :index="menu.menuname"
      >
        <template slot="title">
          <i class="iconfont" :class="menu.icon"></i>
          <span>{{ menu.menuname }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="childmenu in menu.menus"
            :index="'/' + childmenu.url"
            :key="childmenu.menuid"
          >
            <i class="iconfont" :class="childmenu.icon"></i>
            {{ childmenu.menuname }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      allMenu: [
        {
          menuid: 1,
          icon: "el-icon-s-tools",
          menuname: "基础管理",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 2,
              icon: "el-icon-user-solid",
              menuname: "用户管理",
              hasThird: "B",
              url: "basic/index",
              menus: null,
            },
          ],
        },
        {
          menuid: 3,
          icon: "el-icon-s-order",
          menuname: "菜单管理",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 4,
              icon: "el-icon-s-custom",
              menuname: "用户管理",
              hasThird: "M",
              url: "menu/index",
              menus: null,
            },
          ],
        },
        {
          menuid: 5,
          icon: "el-icon-notebook-2",
          menuname: "文章管理",
          hasThird: "W",
          url: null,
          menus: [
            {
              menuid: 6,
              icon: "el-icon-notebook-1",
              menuname: "文章管理",
              hasThird: "W",
              url: "artcle/index",
              menus: null,
            },
            {
              menuid: 7,
              icon: "el-icon-notebook-2",
              menuname: "添加文章",
              hasThird: "W",
              url: "artcle/artEdit",
              menus: null,
            },
            {
              menuid: 8,
              icon: "el-icon-notebook-2",
              menuname: "查看文章",
              hasThird: "W",
              url: "artcle/artDetail",
              menus: null,
            },
            
          ],
        },
        {
          menuid: 9,
          icon: "el-icon-setting",
          menuname: "系统管理",
          hasThird: "S",
          url: null,
          menus: [
            {
              menuid: 10,
              icon: "el-icon-info",
              menuname: "消息管理",
              hasThird: "S",
              url: "system/index",
              menus: null,
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-submenu {
  text-align: left;
  margin: 10px;
}
h1 {
  line-height: 20px;
  font-weight: 600px;
}
.iconfont {
  margin-right: 20px;
  color: aqua;
  font-weight: 400;
  font-size: 26px;
}
/* 头部导航 */
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  font-size: 24px;
}
/* 设置icon */
.el-icon-setting {
  font-size: 24px;
  margin-right: 15px;
}
</style>
