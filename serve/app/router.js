'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 基础管理之用户信息{查询}
  router.get('/base/getAllUserInfo', controller.base.user.allUserInfo);

  // 基础管理之用户信息{添加}
  router.post('/base/addUserInfo', controller.base.user.addUserInfo);

  // 基础管理之用户信息{编辑}
  router.post('/base/editUserInfo', controller.base.user.editUserInfo);

  // 基础管理之用户信息{删除}
  router.post('/base/delUserInfo', controller.base.user.delUserInfo);
};
