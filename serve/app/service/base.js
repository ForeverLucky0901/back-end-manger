'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
  async getAllUserInfo (page,limit,company,phone) {
    // page:默认第一页，limit：默认每页显示10条数据，search：搜索的是company和phone;

    let startIndex = (page - 1)*limit; // 分页截取的起始索引
    // 先搜索出结果在分页，找到所有满足条件的条数total
    let count = `select count(*) from base where company like '%${company}%' and phone like '%${phone}%'`;
    let total = await this.app.mysql.query(count);
    let sql = `select * from base where company like '%${company}%' and phone like '%${phone}%' limit ${startIndex},${limit} `
    // 查询数据库
    let res = await this.app.mysql.query(sql);
    return {
      data : res,
      total: total[0]['count(*)'], //总页数
    }
  }
  async isReg (obj) {
    // 检测用户名和手机号是否被注册过
    let { usename, phone } = obj;
    let res = await this.app.mysql.query(`select * from base where usename='${usename}' and phone='${phone}'`);
    return res;
  }
  async addBaseUserInfo(obj) {
    // 添加用户数据到数据库
    let { company,usename,address, phone, sex, createTime, state } = obj;
    let res = await this.app.mysql.query(
      `insert into base (company,usename,address, phone, sex, createTime, state) values ('${company}','${usename}','${address}','${phone}','${sex}','${createTime}','${state}')`
    );
    return res;
  }
  async editBaseUserInfo(obj) {
    // 编辑更新用户信息
    const { id, company, usename, address, phone, sex, state } = obj;
    let res = await this.app.mysql.query(`update base set company='${company}',usename='${usename}',address='${address}',phone='${phone}',sex='${sex}',state='${state}'  where id=${id}`);
    return res;
  }
  async delBaseUserInfo(id) {
    // 删除基础管理之用户信息
    let res = await this.app.mysql.query(
      `delete from base where id='${id}'`
    );
    return res;
  }
  async registry (obj) {
    //注册
    let { user_name, user_pwd } = obj;
    let res = await this.app.mysql.query(
      `insert into user_info (user_name, user_pwd) values ('${user_name}','${user_pwd}')`
    );
    return res;
  }
  async login (stu, pwd) {
    let res = await this.app.mysql.query(
      `select * from user_info where user_name='${user_name}' and user_pwd='${user_pwd}'`
    );
    return res;
  }
  async getrole (rid, uid) {
    //通过rid,获取对应的文字
    let sql = `select rname from role where id=${rid}`;
    let res = await this.app.mysql.query(sql);
    let sql1 = `select name from manage_user where id=${uid}`;
    let res1 = await this.app.mysql.query(sql1);
    return {
      rname: res[0].rname,
      name: res1[0].name
    };
  }
  async getmenu (rid) {
    let pid = `select pid from role_power where rid=${rid}`;
    let sql = `select * from power where id in (${pid})`;
    // let aa = `select * from power where id in (select pid from role_power where rid=${rid}})`;
    let res = await this.app.mysql.query(sql);
    return res;
  }
  async getstudent () {
    //获取所有添加过的学生的学号
    let stus = `select stu from scores`; //所有添加过的学生
    let sql = `select * from manage_user where stu not in (${stus}) and not role=1`;
    let res = await this.app.mysql.query(sql);
    return res;
  }

  // if(a != 3){}
}

module.exports = BaseService;