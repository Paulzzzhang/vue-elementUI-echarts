<template>
    <el-col :span="24">
        <el-card shadow="hover">
            <div style>
                <el-col :span="4">
                    <el-select v-model="value" filterable placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>

                <div style="margin-left: 10px">
                    <el-button icon="el-icon-search" circle></el-button>
                </div>

            </div>

        </el-card>
    </el-col>
</template>

<script>
    export default {
        name: "selector",
        data(){
            return{
                options: [{
                    value: '选项1',
                    label: '北京'
                }, {
                    value: '选项2',
                    label: '上海'
                }, {
                    value: '选项3',
                    label: '重庆'
                }, {
                    value: '选项4',
                    label: '深圳'
                }, {
                    value: '选项5',
                    label: '成都'
                }],
                value: '',
            }
        }
    }
</script>

<style scoped>

</style>