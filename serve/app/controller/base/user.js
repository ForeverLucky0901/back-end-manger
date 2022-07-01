'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async allUserInfo () {
    const { ctx } = this;
    // 默认第一页，每页默认显示10条数据，搜索的是公司名称和手机号码
    const { page = 1, limit = 10, search = { company: '', phone: '' } } = ctx.query;
    const res = await ctx.service.base.getAllUserInfo(page, limit, search.company, search.phone);
    if (res.data.length > 0)
    {
      ctx.body = {
        code: 200,
        mes: '获取表数据成功',
        data:res.data
      }
    } else
    {
      ctx.body = {
        code: 300,
        mes: '获取表数据失败'
      }
    }
  }
  async addUserInfo () {
    //添加基础管理之用户信息
    const { ctx } = this;
    const { company, usename, address, phone } = ctx.request.body;

    // //判断参数非空
    if (!usename || !phone || !company || !address)
    {
      ctx.body = {
        code: 2,
        mes: '缺少参数'
      };
      return;
    }

    //判断姓名和手机号是否已经注册过了
    let isUse = await ctx.service.base.isReg(usename, phone);
    if (isUse.length != 0)
    {
      ctx.body = {
        code: 3,
        mes: '该用户已经注册了，不能重复注册'
      };
      return;
    }

    let res = await ctx.service.base.addBaseUserInfo({ ...ctx.request.body });
    if (res.affectedRows == 1)
    {
      ctx.body = {
        code: 0,
        mes: '用户信息添加成功'
      };
    } else
    {
      ctx.body = {
        code: 1,
        mes: '用户信息添加失败'
      };
    }
  }
  async editUserInfo () {
    // 编辑用户信息
    const { ctx } = this;
    let res = await ctx.service.base.editBaseUserInfo({ ...ctx.request.body });
    if (res.affectedRows === 1)
    {
      ctx.body = {
        code: 0,
        mes: "用户信息修改成功"
      }
    } else
    {
      ctx.body = {
        code: 1,
        tip: "用户信息修改失败",
        mes: res.message
      }
    }


  }
  async delUserInfo () {
    // 删除用户信息
    const { ctx } = this;
    const { id } = ctx.request.body;
    let res = await ctx.service.base.delBaseUserInfo(id);
    //  console.log(res);
    if (res.affectedRows === 1)
    {
      ctx.body = {
        code: 0,
        mes: "用户信息删除成功"
      }
    } else
    {
      ctx.body = {
        code: 0,
        tip: res.message,
        mes: "用户信息删除失败"
      }
    }


  }
  // async login() {
  //     const { ctx } = this;
  //     const { user_name, user_pwd } = ctx.request.body;

  //     //判断参数非空
  //     if (!user_name || !user_pwd) {
  //         ctx.body = {
  //             code: 2,
  //             mes: '缺少参数'
  //         };
  //         return;
  //     }

  //     //参数的校验,失败的话，会抛出异常
  //     try {
  //         //成功
  //         ctx.validate(createRule);

  //         // 判断
  //         let user = await ctx.service.user.user.getuser(user_name);
  //         if (user.length == 0) {
  //             ctx.body = {
  //                 code: 3,
  //                 mes: '该用户还没有注册，请先注册'
  //             };
  //             return;
  //         }

  //         //登录
  //         let res = await ctx.service.user.user.login(
  //             user_name,
  //             ctx.helper.help(user_pwd)
  //         );
  //         //生成token
  //         let token = jwt.sign({...res[0] }, ctx.app.config.keys, {
  //             expiresIn: '50h'
  //         });
  //         if (res.length > 0) {
  //             ctx.body = {
  //                 code: 0,
  //                 token,
  //                 // uid: res[0].id, //用户id
  //                 // rid: res[0].role, //角色id
  //                 mes: '登录成功'
  //             };
  //         } else {
  //             ctx.body = {
  //                 code: 1,
  //                 mes: '登录失败'
  //             };
  //         }
  //     } catch (e) {
  //         //参数校验不通过的时候
  //         ctx.body = {
  //             code: 4,
  //             mes: '参数校验失败'
  //         };
  //     }
  // }
  // async getrole() {
  //     //获取头部身份
  //     const { ctx } = this;
  //     let { rid, uid } = ctx.query; //获取的是登录用户的身份(角色)id

  //     let res = await ctx.service.user.user.getrole(rid, uid);
  //     if (res.rname) {
  //         ctx.body = {
  //             code: 1,
  //             ...res
  //         };
  //     } else {
  //         ctx.body = {
  //             code: 1,
  //             mes: '获取身份失败'
  //         };
  //     }
  // }
  // async getmenu() {
  //     const { ctx } = this;
  //     let { rid } = ctx.query;
  //     let res = await ctx.service.user.user.getmenu(rid);
  //     if (res.length > 0) {
  //         ctx.body = {
  //             code: 0,
  //             data: res
  //         };
  //     } else {
  //         ctx.body = {
  //             code: 1,
  //             mes: '失败'
  //         };
  //     }
  //     // ctx.body = res;
  // }

  // async getstudent() {
  //     //来获取没有添加过的学生
  //     const { ctx } = this;
  //     let res = await ctx.service.user.user.getstudent();
  //     if (res.length > 0) {
  //         ctx.body = {
  //             code: 0,
  //             data: res
  //         };
  //     } else {
  //         ctx.body = {
  //             code: 1,
  //             mes: '查询失败'
  //         };
  //     }
  // }
}

module.exports = UserController;