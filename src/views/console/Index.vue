<template>
    <div>{{value}}</div>
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
            const store =useStore();
            const {state} = useStore();
            const value =state.app.count
            console.log(state)
            const value_store= store.state.app.count
            return{
                value,value_store
            }
        }
    }
</script>