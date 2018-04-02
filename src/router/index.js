import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {path: '/', redirect: '/signin'},
    {path: '/signin', component: SignIn},
    {path: '/signup', component: SignUp}
  ]
})
