<template>
    <div id="info">
        <h1>这是后台管理页面</h1>
        <div v-for="(item,index) in infos" :key="index">
            <p>{{ item }}</p><br>
        </div>
    </div>
</template>

<script>
export default({
    name: 'InfoView',
    data() {
        return {
            infos: ["现有功能主要为添加删除修改公告"]
        }
    },
    methods: {

    }
})
</script>

<style scoped>
#info{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
#info h1{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 20px;
}
#info p{
    height: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

</style>