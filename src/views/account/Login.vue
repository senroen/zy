<template>
    <div id ="login">
        <div class="from-wrap">
            <ul class="menu-tab">
                <!-- :class == v-bind-->
                <!-- @click="$event => current_menu=item.type"-->
                <li @click="_$event => toggleMenu(item.type)" :class="{'current':current_menu===item.type}" v-for="item in tab_menu" :key="item.type">{{ item.label }}</li>
                <el-form ref="from" :model="form" :rules="form_rules">
                    <el-form-item  prop="form_rules.username">
                        <label class="from-label">邮箱</label>
                        <el-input v-model.trim="form.username"/>
                    </el-form-item>
                    <el-form-item  prop="password">
                        <label class="from-label">密码</label>
                        <el-input type="password" v-model.trim="form.password"/>
                    </el-form-item>
                    <el-form-item v-if="current_menu==='register'" prop="passwords">
                        <label class="from-label">确认密码</label>
                        <el-input type="password" v-model.trim="form.passwords"/>
                    </el-form-item>
                    <el-form-item>
                        <label class="from-label">验证码</label>
                        <el-row :gutter="21">
                            <el-col :span="14">
                                <el-input v-model="code"></el-input>
                            </el-col>
                            <el-col :span="10">
                                <el-button @click="getCode" type="success" class="el-button-block">获得验证码</el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" class="el-button-block" disabled>{{ current_menu==='register'?"注册":"登入" }}</el-button>
                    </el-form-item>
                </el-form>
            </ul>   
        </div>
    </div>
</template>
<style lang="scss" scoped>
// scoped 设置在局部生效
    #login{
        height: 100vh;
        background-color: #344a5f;
    }
    .from-wrap{
        width:  320px;
        padding-top:100px;
        margin: auto;
    }
    .menu-tab{
        text-align: center;
        li{
            display: inline-block;
            padding: 10px 24px;
            margin: 0 10px;
            color: #fff;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
            &.current{background-color: rgba(0,0,0,.1);}
        }
    }
    .from-label{
        display: block;
        color:#fff;
        font-size: 14px;
    }
    el-input{
        display: block;
        width: 100%;
    }
</style>
<script>
import { reactive,toRefs,getCurrentInstance } from 'vue';
import { validate_email } from '../../utils/validate';
import { validate_password } from '../../utils/validate';
import {Getcode} from '../../api/common';
import { ElMessage } from 'element-plus';
export default{
    setup(_porops,{root}){
        const validata_username_rules =(_rule,value,callback)=>{
            let reg_email =validate_email(value);
            if(value===""){
                callback(new Error("请输入邮箱"))
            }else if(!reg_email.test(value)){
                callback(new Error("请输入正确的邮箱格式"))
            }else{
                callback()
            }
        }
        const validata_password_rules =(_rule,value,callback)=>{
            let reg_password =validate_password(value);
            const passwordValues = date.form.password
            if(value===""){
                callback(new Error("请输入密码"))
            }else if(!reg_password.test(value)){
                callback(new Error("请输入6-20位密码,包含数字和、字母"))
            }else{
                callback()
            }
        }
        const validata_passwords_rules =(rule,value,callback)=>{
            let reg_password =/^(?!D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
            const passwordValues = data.form.password;
            if(value===""){
                callback(new Error("请输入密码"))
            }else if(!reg_password.test(value)){
                callback(new Error("请输入6-20位密码,包含数字和、字母"))
            }
            else if( passwordValues &&passwordValues !== value){
                callback(new Error("俩次密码不一致"))
            }else{
                callback()
            }
        }
        const data = reactive({
            form:{
                username:"",
                password:"",
                passwords:"",
                code:"",
            },
            tab_menu:
            [
                {type:"login",label:"登录"},
                {type:"register",label:"注册"}
            ],
            form_rules:{
            username:[{validator:validata_username_rules,trigger:'change'}],
            password:[{validator:validata_password_rules,trigger:'change'}],
            passwords:[{validator:validata_passwords_rules,trigger:'change'}]

        },
            current_menu:"login"
        })
        const toggleMenu = ((type)=>{
            data.current_menu =type
        })
        const {proxy} =getCurrentInstance()
        const getCode=()=>{
            
            console.log(process.env.VUE_APP_API_DEV_TARGET)
            const password =data.form.password;
            const username=data.form.username;
            const passwords =data.form.passwords;
            if(!validate_email(username)){
                ElMessage({
                    message:"用户名不能为空",
                    type:"error"
                })
                return false
            }
            // proxy.$axios.post("http://v3.web-jshtml.cn/api/getCode/",{username:data.form.username,module:"register"})
            const data_post = {username:date.form.username,module:"register"}
            Getcode(data_post).then(response=>{
                console.log(response)
            }).catch(error=>{})
        }
        return{
            toggleMenu,...toRefs(data),getCode
        }
    }
}
</script>