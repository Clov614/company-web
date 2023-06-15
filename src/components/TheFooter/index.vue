

<template>
    <el-page-header @back="goBack" content="COPY RIGHT @神必人集团">
    </el-page-header>
    </template>
    
    <script>
      export default {
        name : "TheFooter",
        methods: {
          goBack() {
            console.log('go back');
          }
        }
      }
    </script>