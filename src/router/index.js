import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import login from '@/views/login'
import homePage from '@/views/homePage'
import versionManage from '@/views/versionManage'
import areaManage from '@/views/areaManage'
import dataDic from '@/views/dataDic'
import businessManage from '@/views/businessManage'
import terminalManage from '@/views/terminalManage'
import materialManage from '@/views/materialManage'
import programManage from '@/views/programManage'
import notice from '@/views/notice'
import auditManage from '@/views/auditManage'
import account from '@/views/account'
import role from '@/views/role'
import otherManege from '@/views/otherManege'
import terOrder from '@/views/terOrder'
import proOrder from '@/views/proOrder'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login,
      hidden: true
    },
    {
      path: '/homePage',
      name: '首页',
      iconCls: 'el-icon-star-off',
      component: home,
      children: [{
        path: '/homePage',
        component: homePage,
        name: '首页'
      }]
    },
    {
      path: '/dataDic',
      name: '系统管理',
      component: home,
      iconCls: 'el-icon-menu',
      children: [{
        path: '/dataDic',
        component: dataDic,
        name: '数据字典'
      }, {
        path: '/versionManage',
        component: versionManage,
        name: '版本管理'
      }, {
        path: '/areaManage',
        component: areaManage,
        name: '地域管理'
      }]
    },
    {
      path: '/businessManage',
      name: '企业管理',
      iconCls: 'el-icon-star-off',
      component: home,
      children: [{
        path: '/businessManage',
        component: businessManage,
        name: '企业管理'
      }]
    },
    {
      path: '/terminalManage',
      name: '终端管理',
      iconCls: 'el-icon-star-off',
      component: home,
      children: [{
        path: '/terminalManage',
        component: terminalManage,
        name: '终端管理'
      }]
    },
    {
      path: '/materialManage',
      name: '素材管理',
      iconCls: 'el-icon-star-off',
      component: home,
      children: [{
        path: '/materialManage',
        component: materialManage,
        name: '素材管理'
      }]
    },
    {
      path: '/programManage',
      name: '节目管理',
      iconCls: 'el-icon-star-off',
      component: home,
      children: [{
        path: '/programManage',
        component: programManage,
        name: '节目管理'
      }, {
        path: '/notice',
        component: notice,
        name: '紧急通知'
      }]
    },
    {
      path: '/auditManage',
      name: '审核管理',
      iconCls: 'el-icon-star-off',
      component: home,
      children: [{
        path: '/auditManage',
        component: auditManage,
        name: '审核管理'
      }]
    },
    {
      path: '/role',
      name: '账户中心',
      iconCls: 'el-icon-star-off',
      component: home,
      children: [{
        path: '/role',
        component: role,
        name: '角色管理'
      }, {
        path: '/account',
        component: account,
        name: '账户管理'
      }]
    },
    {
      path: '/otherManege',
      name: '第三方管理',
      iconCls: 'el-icon-star-off',
      component: home,
      children: [{
        path: '/otherManege',
        component: otherManege,
        name: '第三方管理'
      }]
    },
    {
      path: '/logging',
      name: '日志记录',
      iconCls: 'el-icon-star-off',
      component: home,
      children: [{
          path: '/terOrder',
          component: terOrder,
          name: '终端命令'
        },
        {
          path: '/proOrder',
          component: proOrder,
          name: '节目命令'
        }
      ]
    },
  ]

})
