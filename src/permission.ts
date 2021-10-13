import router from "./router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// NProgress.configure({
//     easing:'ease',
//     speed:500,
//     showSpinner:false,
//     trickleSpeed:200,
//     minimum:0
// })
NProgress.configure({ showSpinner: false }) 
// 如果是安装 nprogress 进度条，都需要ts处理一下
// npm install nprogress @types/nprogress -S
router.beforeEach((to:any,from:any,next:any): void =>{
    const hasToken = localStorage.getItem('token')
    NProgress.start()
    if(hasToken){
        next()
    }else{
        if(to.path !== '/login') {
            next('/login')
        }else{
            next()
        }
    }
})

router.afterEach((): void=>{
    NProgress.done()
})