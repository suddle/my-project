import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./detail/details.vue";
import about from "./detail/content.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/detail",
        component: details
    },
    {
        path: "/detail",
        component: content
    }
]

var router =  new VueRouter({
    routes
})
export default router;