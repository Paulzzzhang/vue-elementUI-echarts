<template>
    <div>
        <div class="collapse-btn" @click="collapseChange">
            <i v-if="!isCollapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
        <el-menu default-active=""  unique-opened
                 router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1" >
                <template slot="title">
                    <i class="el-icon-pie-chart"></i>
                    <span slot="title">岗位信息</span>
                </template>
                <el-menu-item-group v-model="value" @change="lineTo" router="true" >
                    <span slot="title">分组一</span>
                    <el-menu-item  index="/occupation/differOccupation">不同岗位薪资</el-menu-item>
                    <el-menu-item index="/occupation/differIndustry">不同行业平均薪资</el-menu-item>
                    <el-menu-item index="/occupation/differOccuEduBack">不同岗位的学历要求</el-menu-item>
                    <el-menu-item index="/occupation/differEduBackSalary">不同学历平均薪资</el-menu-item>
                    <el-menu-item index="/occupation/differSa_Edu_Exp">薪资-学历-经验</el-menu-item>
                </el-menu-item-group>

            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-data-line"></i>
                    <span slot="title">行业</span>
                </template>
                <el-menu-item-group v-model="value" @change="lineTo">
                    <el-menu-item index="/enterprise/differScale">不同规模企业薪资分析</el-menu-item>
                    <el-menu-item index="/enterprise/differType">不同性质企业</el-menu-item>
                </el-menu-item-group >
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-map-location"></i>
                    <span slot="title">地区</span>
                </template>
                <el-menu-item-group v-model="value" @change="lineTo">
                    <span slot="title">分组一</span>
                    <el-menu-item index="/location/differLocationSa">不同地区的平均薪资分析</el-menu-item>
                    <el-menu-item index="/location/differLocationIn">不同地域的行业分析</el-menu-item>
                    <el-menu-item index="/location/compareTwoCity">比较两个地区的行业分布</el-menu-item>

                </el-menu-item-group>

            </el-submenu>
            <el-submenu index="">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">招聘需求</span>
                </template>
                <el-menu-item-group v-model="value" @change="lineTo">
                    <span slot="title">分组一</span>
                    <el-menu-item index="/demand/differIndustry">不同行业的需求人数分析</el-menu-item>
                    <el-menu-item index="/demand/requirements">行业需求关键词</el-menu-item>
                </el-menu-item-group>

            </el-submenu>
            <el-submenu index="">
                <template slot="title">
                    <i class="el-icon-monitor"></i>
                    <span slot="title">互联网</span>
                </template>
                <el-menu-item-group v-model="value" @change="lineTo">
                    <span slot="title">分组一</span>
                    <el-menu-item index="/InternetInfo">互联网行业</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项2</el-menu-item>
                    <el-menu-item index="4-4">选项2</el-menu-item>
                    <el-menu-item index="4-5">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>


        </el-menu>
    </div>

</template>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .collapse-btn {
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
</style>

<script>
    export default {
        // eslint-disable-next-line no-undef
        data() {
            return {
                isCollapse: true,
                value : '1-1'
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            collapseChange(){
                this.isCollapse = !this.isCollapse;
            },
            lineTo(){
                console.log(this.value)
                if(this.value === '1'){
                    this.$router.push('/occupation/differOccupation')
                }

            }
        }

    }
</script>