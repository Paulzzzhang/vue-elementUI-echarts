<template>
    <el-row :gutter="20">
        <el-col :span="24">
            <el-card shadow="hover">
                <pyramid></pyramid>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import Pyramid from "../components/pyramid";
    export default {
        name: "differEduback",
        components: {Pyramid}
    }
</script>

<style scoped>

</style>