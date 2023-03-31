import {Login}from"../../api/account"
const state = {count:100}
const getters = {
    getCount: (state)=>{
        return state.count+10
    },
    getText: (state)=>{
        return "我正在努力"+state.text
    }
}
//获取state对象数据
const mutations ={
    SET_COUNT(state){
        state.count = 10
    },
    SET_TEXT(state,payload){
        state.text = payload
    }
} 
//更新
const actions ={
    update_count(context){
        context.commit("SET_COUNT")
    },
    update_text({commit,state,gettters,dispatch},payload){
        commit("SET_TEXT",payload)
    },
    loadAction(context,requesData){
        return new Promise((resolve,reject)=>{
            Login(requesData).then((response)=>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })
        })
    }
} 
export default ({
  namespaced:true,//限定在命名模块间
  state,
  getters,
  mutations,
  actions,
});