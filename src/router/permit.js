import router from "./index";
import { getToken,getUserName } from "@u/cookies";
import { Check } from "@/api/account";
//路由每次变化都会经历我
router.beforeEach((to,from)=>{
    if(!getToken() ){
        if(to.name!=='Login')
            return{
                name:"Login/"//包括我
            }
    }else{
        // const datapst = {username:getUserName()}
        // Check(datapst).then((response)=>{
        //     if(response.data.user == false){
        //         return {
        //             name:"Login"
        //         }
        //     }
        // })
    }
})

router.afterEach((to,from)=>{
    
})