import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null,
    account: { // 默认账号
      name: "admin",
      password: "admin123"
    },
    tableData: [ //首页表格数据
      { "id": 1, "company": "郑州宇通", "usename": "张三", "address": "北京海淀区", "phone": 13621001354, "sex": "男", "email": "1025803781@qq.com", "createTime": "2018-05-27 16:51:08", "state": true },
      { "id": 2, "company": "精密", "usename": "张伟", "address": "江苏昆山", "phone": 12289566631, "sex": "男", "email": "1025803781@qq.com", "createTime": "2018-05-27 16:51:08", "state": true },
      { "id": 3, "company": "纬创", "usename": "小红", "address": "江苏昆山", "phone": 12581001354, "sex": "女", "email": "1025803781@qq.com", "createTime": "2018-05-27 16:51:08", "state": true },
      { "id": 4, "company": "郑州宇通", "usename": "张飞", "address": "江苏南京", "phone": "13689651354", "sex": "男", "email": "1025803781@qq.com", "createTime": "2018-05-27 16:51:08", "state": true },
      { "id": 5, "company": "微创", "usename": "张小小", "address": "广西", "phone": "894611001354", "sex": "女", "email": "1025803781@qq.com", "createTime": "2018-05-27 16:51:08", "state": false },
      { "id": 6, "company": "玲珑塔", "usename": "梁梓轩", "address": "北京大兴", "phone": "14896501354", "sex": "女", "email": "1025803781@qq.com", "createTime": "2018-05-27 16:51:08", "state": true },
      { "id": 7, "company": "大连人力", "usename": "赵阳", "address": "门头沟", "phone": "138961354", "sex": "男", "email": "1025803781@qq.com", "createTime": "2018-05-27 16:51:08", "state": false },
      { "id": 8, "company": "武汉宇通", "usename": "林子琦", "address": "湖北武汉", "phone": "1516530254", "sex": "男", "email": "1025803781@qq.com", "createTime": "2018-05-27 16:51:08", "state": false }
    ],
    // 菜单管理分类数据
    cateData: [
      { cateValue: "娱乐", createUser: "佳欣", date: "2022/6/26 00:15:26", id: "FXbsZ" },
      { cateValue: "娱乐", createUser: "佳欣", id: "FXbsZ", date: "2022/6/26 00:15:26" },
      { cateValue: "音乐", createUser: "佳欣", id: "BD3wP", date: "2022/6/26 00:15:40" },
      { cateValue: "科技", createUser: "佳欣", id: "jUA_g", date: "2022/6/26 00:15:50" },
      { cateValue: "游戏", createUser: "佳欣", id: "fbpWO", date: "2022/6/26 00:16:00" },
      { cateValue: "电影", createUser: "佳欣", id: "tRBPL", date: "2022/6/26 00:16:17" },
      { cateValue: "美图", createUser: "小姐姐", id: "lHOyU", date: "2022/6/22 00:02:07" },
    ],
    // 文章总数据
    artData: [
      {
        id: 10001,
        title: "我们的爱情故事",
        author: "张一鸣",
        createTime: "2022/6/22 00:00:36",
        classCate: " 娱乐",
        readNum: 200,
        likeNum: 20,
        keepNum: 500,
        cover: "http://www.xianluba.com/images/upload/main/20201201104817503.jpg",
        url: "http://www.twodou.com/5055.html",
        content: "<div>具体你内容</div>",
        introduce: "说明",
        tag: '宋慧乔'
      },
      {
        id: 1005,
        title: "明星八卦侯鹤廉退出德云社 离开或许是为了更好的生活",
        author: "张一鸣",
        createTime: "2042/1/22 00:00:36",
        classCate: " 明星",
        readNum: 200,
        likeNum: 20,
        keepNum: 500,
        cover: "http://www.xianluba.com/images/upload/main/20201201104817503.jpg",
        url: "http://www.twodou.com/5055.html",
        content: "<div>具体你内容</div>",
        introduce: "说明",
        tag: '美女'
      }, {
        id: 10341,
        title: "明星八卦宋慧仁出柜 我们应该给予其祝福",
        author: "张一鸣",
        createTime: "2022/7/22 00:00:36",
        classCate: " 音乐",
        readNum: 200,
        likeNum: 20,
        keepNum: 500,
        cover: "http://www.xianluba.com/images/upload/main/20201201104817503.jpg",
        url: "http://www.twodou.com/3128.html",
        content: "<div>具体你内容</div>",
        introduce: "说明",
        tag: '其他'
      }
    ],
    // 编辑的数据，默认为空
    artEditData:null,
  },
  getters: {
    count (state) {
      return state.count
    }
  },
  mutations: {
    loginSuccess() {
      console.log(state.token);
      state.token = null;
    },
    addCount (state, num) {
      state.count += num
    },
    addUser (state, payload) {
      // 添加基础管理用户数据
      state.tableData.push(payload)
    },
    addCateData (state, payload) {
      // 添加分类类目数据
      state.cateData.push(payload)
    },
    editCateData (state, payload) {
      // 编辑类目数据
      state.cateData = payload
    },
    setData (state, payload) {
      // 跟新基础管理用户数据
      state.tableData = payload
    },
    addArtData (state, payload) {
      // 添加文章数据
      console.log(3,state, payload);
      state.artData.push(payload)
      console.log(4,state, payload);
    },
    // 
    editArtData (state, payload) {
      // 设置编辑数据为临时数据
      state.artEditData = payload
    },
    editOneArtData (state, payload) {
      // 编辑一条文章数据
      state.artEditData = payload
    }
  },
  actions: {},
  // 这种默认写法会将vuex中的所有数据存储到Local Storage中，
  plugins: [createPersistedState()],
  // 制定存储数据
  // plugins: [createPersistedState({
    // storage: window.sessionStorage,
  //   reducer (val) {
  //     return {
  //       account: val.account,
  //       tableData: val.tableData,
  //       cateData: val.cateData,
  //       artData: val.artData,
  //       artEditData: val.artEditData
  //     };
  //   }
  // })]


})