import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect:"Login",
    hidden:true,//渲染测菜单栏
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    hidden:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/test",
    name: "test",
    hidden:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    hidden:true,
    component: () =>
      import("../views/account/Login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta:{
      title:"控制台",
      icon:"home"
    },
    component: () =>import("../Layout/Index.vue"),
    children:[
      {
        path:"/console",
        name:"Console",
        meta:{
          title:"首页"
        },
        component:()=>import("../views/console/Index.vue"),
      }
    ]
  },
  {
    path: "/news",
    name: "news",
    meta:{
      title:"信息管理",
      icon:"YY_information"
    },
    component: () =>import("../Layout/Index.vue"),
    children:[
      {
        path:"/newsIndex",
        name:"NewsIndex",
        meta:{
          title:"信息列表"
        },
        component:()=>import("../views/info/Index.vue"),
      },
      {
        path:"/newsCategory",
        name:"NewsCategory",
        meta:{
          title:"信息分类"
        },
        component:()=>import("../views/info/Category.vue"),
      },
      {
        path:"/newsDetailed",
        name:"NewsDetailed",
        meta:{
          title:"信息详情"
        },
        component:()=>import("../views/info/Detailed.vue"),
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    meta:{
      title:"用户管理",
      icon:"user"
    },
    component: () =>import("../Layout/Index.vue"),
    children:[
      {
        path:"/userIndex",
        name:"UserIndex",
        meta:{
          title:"用户列表"
        },
        component:()=>import("../views/user/Index.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
