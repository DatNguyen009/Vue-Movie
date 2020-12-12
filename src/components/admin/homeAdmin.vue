<template>
  <main>
      <div class="container-fluid">
        <el-table
        :data="tableData.filter(data => !search || data.email.toLowerCase().includes(search.toLowerCase()))"  empty-text = "Không có user nào cả " 
        :lazy="true"
        style="width: 100%">
        <el-table-column
          label="Date"
          prop="email">
        </el-table-column>
        <el-table-column
          label="Name"
          prop="hoTen">
        </el-table-column>
        <el-table-column
          label="SDT"
          prop="soDt">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="{}">
            <el-input
              v-model="search"
              size="mini"
              placeholder="Type to search"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- start modal Edit -->
      <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="Promotion name" :label-width="formLabelWidth"  >
            <el-input v-model="form.input" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Zones" :label-width="formLabelWidth">
            <el-select  v-model="form.region" placeholder="Please select a zone">
              <el-option label="Zone No.1" value="shanghai" ></el-option>
              <el-option label="Zone No.2" value="beijing" ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleForm(form)">Confirm</el-button>
        </span>
      </el-dialog>
      <!-- end modal edit -->
      
      <el-pagination
        background
        layout="prev, pager, next"
        :total="parseInt(totalPage)" style="background-color: white;" @current-change="handleChangePage">
      </el-pagination>
      </div>
    </main>
</template>

<script>
import Axios from 'axios'
import ElementUI from 'element-ui'
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
export default {
    data() {
      return {
        tableData: [],
        search: '',
        totalPage: 1,
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form:{
          input: '',
          region: ''
        }
      }
    },
  
    methods: {
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.$confirm('Bạn có chắc chắn muốn xóa user này không??','Thông báo',{
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        })
        .then( () => {
            this.$message({
              type: 'success',
              message: 'Xóa tài khoản thành công'
            })
        } )
        .catch(()=>{
          this.$message({
            type:'error',
            message:'Xóa tài khoản không thành công',
          })
        })
        console.log(index, row);
      },
      handleChangePage(val){
        Axios.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?soTrang=${val}&soPhanTuTrenTrang=10`)
        .then(res => {
          this.tableData = res.data.items;
        })
        .catch(err => console.log(err))
      },
      handleForm(form)
      {
        console.log(form);
      }
    },
    created() {
      Axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?soTrang=1&soPhanTuTrenTrang=10')
      .then(res => {
        this.tableData = res.data.items;
        this.totalPage = `${res.data.totalPages}0`;
      })
      .catch(err =>console.log(err))
    },
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
    .header_home,.footer{
        display: none!important;;
    }
    .main_home{
      background-color: white;
    }
</style>