<template>
    <div id ="login">
        <div class="from-wrap">
            <ul class="menu-tab">
                <li class="current">登录</li>
                <li>注册</li>
                <el-form ref="from" >
                    <el-form-item label="username">
                        <label class="from-label">用户名</label>
                        <el-input />
                    </el-form-item>
                    <el-form-item label="password">
                        <label class="from-label">密码</label>
                        <el-input type="passord"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click=" ">立即创建</el-button>
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
            &.current{background-color: rgba(0,0,0,-1);}
        }
    }
    .from-label{
        display: block;
        color:#fff;
        font-size: 14px;
    }
</style>