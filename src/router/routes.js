import App from '../app'
//import MockJson from '../mockJson'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    /*
    {
        path: '/api',
        meta: { auth: false},
        component: MockJson,
    },
    */
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/login', //登录
                meta: { auth: false },
                component: resolve => require(['../pages/login/'], resolve)
            },
            {
                path: '/', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '/feeds', //微社区
                meta: { auth: false },
                component: resolve => require(['../pages/feeds/'], resolve)
            },
            {
                path: '/home', //个人主页
                 meta: { auth: true },
                component: resolve => require(['../pages/home/'], resolve)
            },
            {
                path: '/game/*', //游戏详情
                meta: { auth: false},
                component: resolve => require(['../pages/game/'], resolve)
            },
            {
                path: '/gamebox', //游戏列表
                meta: { auth: false},
                component: resolve => require(['../pages/gamebox/'], resolve)
            },
            {
                path: '/gifts', //礼包列表
                meta: { auth: false},
                component: resolve => require(['../pages/gifts/'], resolve)
            },
            {
                path: '/category', //游戏分类
                meta: { auth: false},
                component: resolve => require(['../pages/category/'], resolve)
            },
            {
                path: '/download', //下载
                meta: { auth: false},
                component: resolve => require(['../pages/download/'], resolve)
            },
            {
                path: '/signout', //退出
                component: resolve => require(['../pages/signout/'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/login'
            }
        ]
    },

]