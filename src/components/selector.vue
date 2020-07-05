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

            }
        }
    }
</script>

<style scoped>

</style>