import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layout.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        meta: { title: "首页" },
        component: () => import("../views/Home.vue"),
      },
    ],
  },
  {
    path: "/components",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layout.vue"),
    redirect: "/components/index",
    children: [
      {
        path: "index",
        name: "components",
        meta: { title: "组件" },
        component: () => import("../views/myComponents/index.vue"),
      },
    ],
  },
  {
    path: "/blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layout.vue"),
    redirect: "/blog/index",
    children: [
      {
        path: "index",
        name: "blog",
        meta: { title: "博客" },
        component: () => import("../views/blog/index.vue"),
      },
      {
        path: "addBlog",
        name: "AddBlog",
        meta: { title: "添加博客", hidden: true },
        component: () => import("../views/blog/addBlog.vue"),
      },
      {
        path: "blogDetails",
        name: "BlogDetails",
        meta: { title: "文章详情", hidden: true },
        component: () => import("../views/blog/detail.vue"),
      },
    ],
  },
  {
    path: "/cloudDisk",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layout.vue"),
    redirect: "/cloudDisk/index",
    children: [
      {
        path: "index",
        name: "cloudDisk",
        meta: { title: "云盘" },
        component: () => import("../views/cloudDisk/index.vue"),
      },
    ],
  },
  {
    path: "/message",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layout.vue"),
    redirect: "/message/index",
    children: [
      {
        path: "index",
        name: "message",
        meta: { title: "留言" },
        component: () => import("../views/message/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: { hidden: true },
    component: () => import("../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
