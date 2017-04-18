import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './router/routes'
import store from './store/'
import components from './components/' //加载公共组件

import './css/common.css'
import './less/common.less'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

  

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    //var name =  key;
    //console.log(`v${name}`);
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    if (auth) {
        Vue.axios.get("/play/user/profile.json?mode=65").then((response) => {
            if(response.data.result!=1){
                //console.log(11111)
                //changeData(response.data.data.ugcData.dataList);
                return next({ path: '/login' })
            }
        })
    }
    next()




    /*
    var { auth = true } = meta

    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
    */
})

new Vue({ store, router }).$mount('#app')