<template>
  <div>
    <!-- <p @click="isShow = !isShow">开始</p>
    <transition name="bounce">
      <span v-show="isShow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</span>
    </transition>-->
    <div ref="wrap" :style="{height: scollHeight ? h : 'auto'}" id="wrap">
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <div @mousedown="onMouseDown" id="drag"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isShow: true,
      beforeTop: 0,
      beforeHeight: 0,
      scollHeight: false,
      h: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    onMouseDown(down) {
      this.scollHeight = true;
      this.beforeTop = down.clientY;
      this.beforeHeight = this.$refs.wrap.offsetHeight;
      document.onmousemove = (move) => {
        this.h = this.beforeHeight + ( move.clientY - this.beforeTop ) + 'px';
      };
      document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  }
};
</script>
<style lang="scss" scope>
#wrap {
  width: 800px;
  margin: 50px auto 0;
  border: 1px solid gold;
  border-bottom: none;
  position: relative;
  padding-bottom: 10px;
  overflow: auto;
}
#drag {
  width: 100%;
  height: 10px;
  background-color: #faa;
  position: absolute;
  bottom: 0;
  cursor: n-resize;
}
</style>
