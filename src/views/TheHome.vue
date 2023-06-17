<template>
    <div id="home">
        <div class="mid">
            <div class="side">
                <TheSide/>
            </div>
            <div class="main">
                <the-main></the-main>
                <div class="lists">
                    <the-lists></the-lists>
                </div>
            </div>
        </div>
        <div class="footer">
            <the-footer></the-footer>
        </div>
    </div>
</template>

<script>

import TheSide from '@/components/TheSide/index.vue'
import TheMain from '@/components/TheMain/index.vue'
import TheLists from '@/components/TheLists/index.vue'
import TheFooter from '@/components/TheFooter/index.vue'

export default {
    name: 'TheHome',
    data() {
        return {
            tempStatus: false, // 一个临时的状态
            tableData: []
        }
    },
    components: {
        TheMain,
        TheLists,
        TheSide,
        TheFooter
    },
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


.side {
    width: 500px;
}

.lists {
    margin-left: 240px;
}

.footer {
    margin-top: 150px;
    margin-left: 560px;
}
</style>