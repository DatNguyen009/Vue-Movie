<template>
  <div class="container-fluid" style="background-color: white">
    <el-form :model="form"  style="margin: 0 5rem;">
        <el-form-item label="Mã phim">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="Tên phim" prop="nameFilm">
            <el-input type="text" v-model="form.nameFilm" auto-complete="off" ></el-input>
        </el-form-item>
    
        <el-form-item label="Bí danh">
            <el-input></el-input>
        </el-form-item>

        <el-form-item label="Trailer">
            <el-input></el-input>
        </el-form-item>

        <el-form-item label="Hình ảnh">
            <el-input></el-input>
        </el-form-item>

        <el-form-item label="Mô tả">
            <el-input></el-input>
        </el-form-item>

        <el-form-item label="Mã nhóm">
            <el-input></el-input>
        </el-form-item>

        <el-form-item label="Ngày khởi chiếu">
            <el-input></el-input>
        </el-form-item>

        <el-form-item label="Đánh giá">
            <el-input></el-input>
        </el-form-item>

        <el-button type="success">
            Thêm
        </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        form: {

        }
    };
  },
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
.header_home,
.footer {
  display: none !important;
}
</style>