import {Login}from"../../api/account"
import {setToken,setUserName}from'@/utils/cookies'
const state = {
    count:100,
    collapse:JSON.parse(sessionStorage.getItem('collapse'))||false,
    token:'',
    username:'',
}
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
    },
    SET_COLLAPSE(state){
        state.collapse =!state.collapse
        sessionStorage.setItem('collapse',JSON.stringify(state.collapse))
        // localStorage.setItem('zz',JSON.stringify(state.collapse))
    },
    SET_TOKEN(state,value){
        state.token = value
        value &&setToken(value)
    },
    SET_USERNAME(state,value){
        state.token = value
        value &&setUserName(value)
    },
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
                let data = response.data
                context.commit('SET_TOKEN',data.token)
                context.commit('SET_USERNAME',data.username)
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