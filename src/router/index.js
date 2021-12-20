import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: ()=>import("@/views/Welcome"),
      redirect:'login',
      children:[
        {
          path:'login',
          name:'login',
          component:()=>import("@/views/Login")
        },
        {
          path:'home',
          name:'home',
          component:()=>import("@/views/Home")
        },
        {
          path:'adminManage',
          name:'adminManage',
          component:()=>import("@/views/AdminManage")
        },
        {
          path:'studentManage',
          name:'studentManage',
          component:()=>import("@/views/StudentManage")
        },
        {
          path:'teacherManage',
          name:'teacherManage',
          component:()=>import("@/views/TeacherManage")
        },
      ]
    }
  ]
})
