<!-- 添加公告组件 后台中使用 -->
<template>
    <div class="container">
        <h1 class="page-title">添加公告</h1>
        <el-form ref="announcementForm" :model="form" label-width="120px" class="form-container">
            <el-form-item label="标题">
                <el-input v-model="form.title" class="input-large"></el-input>
            </el-form-item>
            <el-form-item label="公告内容">
                <el-input type="textarea" v-model="form.content" class="textarea-large"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addAnnouncement" class="submit-button">添加公告</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// 导入request (axios)
import request from '@/api/request.js';

export default {
    name: 'AddAnnounce',
    data() {
        return {
            form: {
                title: "",
                content: "",
                token: "" // 用户唯一凭证
            }
        };
    },
    methods: {
        addAnnouncement() {
            // 执行添加公告的逻辑，可以将 this.form 提交到后端或进行其他操作
            console.log('添加公告', this.form);
            this.getToken(); // 获取token
            this.postNotice();
        },
        // 提交后端添加一条公告请求
        async postNotice() {
            const response = await request.post("/notice/add",this.$data.form);
            if (response.data.status == 200) {
                // TODO 提示alert可用element-ui更加美观
                alert("添加公告成功");
                // 跳转回公告列表
                this.$router.push("/manager/AnnoList");
            } else {
                alert("添加公告失败: "+response.data.msg);
            }
            console.log(response);
            
        },
        // 在session中获取token
        getToken() {
            const token = sessionStorage.getItem("token");
            this.$data.form.token = token;
        }
    }
};
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 600px;
}

.page-title {
    font-size: 26px;
    /* margin-bottom: 5px; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 20px;
}

.form-container {
    width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.el-form-item__label {
    font-weight: bold;
}

.input-large .el-input__inner {
    height: 40px;
    font-size: 16px;
    line-height: 40px;
}

.textarea-large .el-input__inner {
    height: 40px;
    font-size: 16px;
    line-height: 40px;
}

.submit-button {
    width: 100%;
    margin-top: 20px;
}
</style>
