<template>
    <div id ="login">
        <div class="from-wrap">
            <ul class="menu-tab">
                <!-- :class == v-bind-->
                <!-- @click="$event => current_menu=item.type"-->
                <li @click="_$event => toggleMenu(item.type)" :class="{'current':current_menu===item.type}" v-for="item in tab_menu" :key="item.type">{{ item.label }}</li>
                <el-form ref="from" :model="form" :rules="form_rules">
                    <el-form-item  prop="username">
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
                                <el-button type="success" class="el-button-block">获得验证码</el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" class="el-button-block" disabled>登录</el-button>
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
import { reactive,toRefs } from 'vue';
export default{
    setup(_porops,{root}){
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
            // form_rules:{
            //     username:[
            //         {required:true,message:'请输入用户名',tigger:'change'},
            //         {min:3,max:5,message:'长度在3和5之间',tigger:'change'}
            //     ],
            //     mima:[
            //         {required:true,message:'请输入密码',tigger:'change'},
            //         {min:8,max:16,message:'长度在8和16之间',tigger:'change'}
            //     ]
            // },
            current_menu:"login"
        })
        const validata_username_rules =(_rule,value,callback)=>{
            let reg_email =/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if(value===""){
                callback(new Error("请输入邮箱"))
            }else if(!reg_email.test(value)){
                callback(new Error("请输入正确的邮箱格式"))
            }else{
                callback()
            }
        }
        const validata_password_rules =(_rule,value,callback)=>{
            let reg_password =/^(?!D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
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
        
        const form_rules = reactive({
            username:[{validator:validata_username_rules,trigger:'change'}],
            password:[{validator:validata_password_rules,trigger:'change'}],
            passwords:[{validator:validata_passwords_rules,trigger:'change'}]
        })
        const toggleMenu = ((type)=>{
            data.current_menu =type
        })
        return{
            toggleMenu,...toRefs(data),form_rules
        }
    }

}
</script>