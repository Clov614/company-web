<!-- 修改公告组件 后台中使用 -->
<template>
    <div class="container">
        <h1 class="page-title">修改公告</h1>
        <el-form ref="announcementForm" :model="form" label-width="120px" class="form-container">
            <el-form-item label="标题">
                <el-input v-model="form.title" class="input-large"></el-input>
            </el-form-item>
            <el-form-item label="公告内容">
                <el-input type="textarea" v-model="form.content" class="textarea-large"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="updateAnnouncement" class="submit-button">更新公告</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import request from '@/api/request';

export default {
    name: 'UpDataAnnounce',
    // props: ["id","title","content","token"],
    data() {
        return {
            form: {
                id: "",
                title: "",
                content: "",
                token: ""
            },
        };
    },
    created() { // TODO 这边bug
        // 在页面加载时，可以从后端获取公告信息，并将其填充到表单中
        this.fetchAnnouncement();
    },
    methods: {
        fetchAnnouncement() {
            // 将公告信息填充到表单中
            const title = this.$route.query.title;
            const content = this.$route.query.content;
            const id = this.$route.query.id;
            const token = this.$route.query.token;
            // data中的值更新
            this.$data.form.title = title;
            this.$data.form.content = content;
            this.$data.form.id = id;
            this.$data.form.token = token;
        },
        async updateAnnouncement() {
            // 执行更新公告的逻辑，可以将 this.form 提交到后端或进行其他操作
            
            await request.post('/notice/modify', this.form, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log("更新公告成功", this.form);
            
            // TODO 增加确认alert提示框
            // 跳转回公告列表
            this.$router.push("/manager/AnnoList");
        },
    },
};
</script>

<style>
.form-container {
    width: 500px;
    padding: 40px;
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
