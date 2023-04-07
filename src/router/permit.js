import router from "./index";
import { getToken } from "@u/cookies";
//路由每次变化都会经历我
router.beforeEach((to,from)=>{
    if(!getToken()){
        if(to.name!=='Login')
        return{
            name:"Login/"//包括我
        }
    }
})

router.afterEach((to,from)=>{
    
})