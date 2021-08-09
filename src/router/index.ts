import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/layout",
    name: "Layout",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/layout.vue"),
    children:[
      {
        path:"home",
        name:'Home',
        component:()=>import("../views/Home.vue")
      },
      {
        path:"myComponents",
        name:'MyComponents',
        component:()=>import("../views/myComponents/index.vue")
      },
      {
        path:"blog",
        name:'Blog',
        component:()=>import("../views/blog/index.vue")
      },
      {
        path:"addBlog",
        name:'AddBlog',
        component:()=>import("../views/blog/addBlog.vue")
      },
      {
        path:"blogDetails",
        name:'BlogDetails',
        component:()=>import("../views/blog/detail.vue")
      },
    ]
},
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/myComponents",
    name: "myComponents",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/myComponents/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
