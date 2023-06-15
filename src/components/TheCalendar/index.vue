<template>
<div class="calendar">
    <el-calendar v-model="value"></el-calendar>
    </div>
</template>

<script>
export default {
    name:'TheCalendar',
    data() {
    return {
        value: new Date()
    };
    }
};
</script>

<style>
.calendar {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
}
</style>
