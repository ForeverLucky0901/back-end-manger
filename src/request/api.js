/**   
 * api接口统一管理
 */
import { get, post } from './http'

// 基础管理之查询
export const getAllUserInfo = params => get('/base/getAllUserInfo', params);

// 基础管理之添加
export const addUserInfo = params => post('/base/addUserInfo', params);

// 基础管理之编辑
export const editUserInfo = params => post('/base/editUserInfo', params);

// 基础管理之删除
export const delUserInfo = params => get('/base/delUserInfo', params);