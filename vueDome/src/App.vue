<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/drapButtomTable">底部可拖拽表格</router-link>
      <router-link to="/LotteryTurntable">抽奖转盘</router-link>
    </nav> -->
    <!-- <router-view/> -->
    <div style="max-width: 1200px">
      <div style="margin-top: 20px">
        <el-button @click="append">新增</el-button>
        <el-button @click="deleteItem" :disabled="tableData.length === 0"
          >删除</el-button
        >
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column type="index" width="55" />
        <el-table-column label="input field" width="auto">
          <template slot-scope="scope">
            <p style="display: flex;width: 100%">
              <span style="width: 50px">字段：</span>
              <el-input
                placeholder="Please input"
                v-model="scope.row.data"
                clearable
                @input="e => inputData(e, scope.row.i)"
              >
              </el-input>
            </p>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="save">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      selectionTabelItem: [],
    };
  },
  methods: {
    inputData(data, i) {
      console.log(data, i);
    },
    append() {
      const tableData = [...this.tableData];
      const len = tableData.length;
      tableData.push({
        data: "",
        i: len,
      });
      this.tableData = tableData;
    },
    handleSelectionChange(selectedItems) {
      console.log("selectedItems", selectedItems);
      this.selectionTabelItem = selectedItems;
    },
    deleteItem() {
      const deleteItemsIndex = this.selectionTabelItem.map(item => item.i);
      const residueItem = this.tableData.filter((item) => {
        return  !deleteItemsIndex.includes(item.i);
      });
      this.tableData = residueItem.map((item, i) => {
        item.i = i;
        return item;
      });
    },
    save(){
      window.alert(JSON.stringify(this.tableData))
    }
  },
};
</script>
<style lang="scss">
nav {
  a {
    margin: 10px;
  }
}
</style>
