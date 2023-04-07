<template>
    <div>{{value}}</div>
    <div>计算后的结果是{{ number }}</div>
</template>
<script>
//     import {Apple, Avatar} from '@element-plus/icons-vue';
//     export default{
//         components:{
//     Apple,
//     Avatar
// }
    // }
    import { useStore } from 'vuex';
    export default{
        setup(){
            const cookie_json ={}
            document.cookie.split(";").map(function(item){
                let new_arr = item.split("=")
                cookie_json[new_arr[0]]=new_arr[1] 
            })
            const new_cookie_json=JSON.stringify(cookie_json)
            console.log(new_cookie_json)
            const store =useStore();//多一层少一层
            const {state} = useStore();
            const value =state.app.count
            const value_store= store.state.app.count
            const number = store.getters["app/getText"]
            store.commit('app/SET_TEXT',"调用函数后的参数")//更新了
            return{
                value,value_store,number
            }
        }
    }
</script>