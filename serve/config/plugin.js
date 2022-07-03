'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
   mysql: {
        enable: true,
        package: "egg-mysql",
    },
    security: {
      csrf: false,
      enable: false
    },
    validate: {
        //开启插件
        enable: true,
        package: "egg-validate",
    },
};
