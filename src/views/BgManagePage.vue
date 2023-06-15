<!-- 后台管理页面 -->
<template>
    <div>
        <el-container>
            <el-header>
                <h1>后台管理</h1>
            </el-header>
            <el-main style="display: flex;justify-content: flex-start;">
                <el-row class="tac" style="position: static;width: 20%;" >
                    <el-col :span="22">
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>编辑公告</span>
                                </template>
                                <el-menu-item-group v-for="(item,index) in noticeChoices" :key="index">
                                    <el-menu-item index="1-1" :id="'notice'+(index+1)" @click="listenClick(index+1)">{{ item }}</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">编辑文章</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <i class="el-icon-document"></i>
                                <span slot="title">日历</span>
                            </el-menu-item>
                            <el-menu-item index="4" disabled>
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
                <!-- 右边具体功能页面 -->
                <el-col class="main-layout" style="position: static;width: 80%;">
                    <!-- 这里是页面 使用router进行插入 -->
                    <router-view></router-view>
                </el-col>
            </el-main>
            <el-footer>
                <div class="fter">
                    <p>COPY RIGHT @A604 PRODUCTION</p>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>


<script>

export default {
    name: "BgManagePage",
    data() {
        return {
            noticeChoices: ["公告列表","发布公告","修改公告"]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        listenClick(index) {
            console.log(index);
        },
    },
    components: {
    },
    watch: {
        
    }
};
</script>

<style>
/* element-ui布局容器样式 */
.el-header {
    display: flex;
    justify-content: center;
    /* 设置主轴为中心 */
    align-items: center;
    /* 设置交叉轴为中心 */
}

.el-footer {
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

/* 自己的样式 */
.tac {
    /* 举例 */
    height: 600px;
    position: static;
    bottom: 0;
    /* 放至底部 */
    z-index: 0;
    /* 设置较大z-index */
}

.main-layout {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.el-main {
    display: flex;
    flex-direction: row;
    /* 设置侧轴右对齐 */
}

.main-layout {
    width: 200px;
    z-index: 1;
    /* 设置比 .tac 大 */
}
</style>