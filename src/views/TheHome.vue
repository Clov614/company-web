<template>
    <div id="home">
        <el-container>
            <el-button type="text" @click="open">点击查看最新公告</el-button>
            <el-container>
                <div class="cebian">
                    <el-steps direction="vertical" :active="2">
                        <el-step title="第一步" description="公司第一阶段战略"></el-step>
                        <el-step title="第二步" description="公司第二阶段战略"></el-step>
                        <el-step title="第三步" description="关注鬼头明里喵关注鬼头明里谢谢喵"></el-step>
                        <el-step title="第四步" description="关注鬼头明里喵关注鬼头明里谢谢喵"></el-step>
                    </el-steps>
                </div>
                <el-container>
                    <el-main>
                        <div class="main">
                            <div class="lunbo">
                                <template>
                                    <el-carousel :interval="5000" arrow="always">
                                        <el-carousel-item v-for="item in 4" :key="item">
                                            <h3>{{ item }}</h3>
                                        </el-carousel-item>
                                    </el-carousel>
                                </template>
                            </div>
                            <div class="hinfo" style="margin-top: -110px;">
                                <h2>文章列表</h2>
                            </div>
                            <div class="info" style="margin-top: -80px;">
                                <!-- <el-descriptions>
                                    <el-descriptions-item label="ctmer">桐生战狼</el-descriptions-item>
                                    <el-descriptions-item label="id">1145141919810</el-descriptions-item>
                                    <el-descriptions-item label="address">下北泽</el-descriptions-item>
                                    <el-descriptions-item label="备注">
                                        <el-tag size="small">A级通缉令</el-tag>
                                    </el-descriptions-item>
                                    <el-descriptions-item label="">下北泽114号</el-descriptions-item>
                                </el-descriptions> -->
                                <!-- <el-table :data="tableData" style="width: 100%" height="350">
                                    <el-table-column fixed prop="date" label="日期" width="150" height="50">
                                    </el-table-column>
                                    <el-table-column prop="name" label="姓名" width="120" height="50">
                                    </el-table-column>
                                    <el-table-column prop="province" label="省份" width="120" height="50">
                                    </el-table-column>
                                    <el-table-column prop="city" label="市区" width="120" height="50">
                                    </el-table-column>
                                    <el-table-column prop="address" label="地址" width="300" height="50">
                                    </el-table-column>
                                    <el-table-column prop="zip" label="邮编" width="120" height="50">
                                    </el-table-column>
                                </el-table> -->


                                <el-table :data="tableData" style="width: 100%">
                                    <el-table-column label="标题" prop="title"></el-table-column>
                                    <el-table-column label="内容" prop="content"></el-table-column>
                                    <el-table-column label="Token" prop="token" show-overflow-tooltip></el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </el-main>
                </el-container>
                <template>
                    Drop anything you want here senpai
                    kokosuki

                </template>
            </el-container>


            <el-footer>
                <div class="fter">
                    <p>COPY RIGHT @神秘人敢死队</p>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'TheHome',
    data() {
        return {
            tempStatus: false, // 一个临时的状态
            tableData: []
        }
    },
    components: {},
    methods: {

        open() {
            this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${action}`
                    });
                }
            });
        },
        //数据表示例数据
    //     this.tableData = [
    //   { title: "标题1", content: "内容1", token: "sha-token-1" },
    //   { title: "标题2", content: "内容2", token: "sha-token-2" },
    //   { title: "标题3", content: "内容3", token: "sha-token-3" },
    // ],
    }
}
</script>

<style>
.el-header {
    display: flex;
}



.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;

}

.cebian {
    height: 500px;
    width: 200px;
}

.fter {
    box-shadow: 0 4px 8px rgba(255, 0, 0, 0.12), 0 0 6px rgba(208, 0, 0, 0.04);
    height: 50px;

    margin: 0 auto;
    text-align: center;
}

.info {
    width: 1000px;
    height: 150px;

}

.lunbo {
    height: 340px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 600px;
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

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>