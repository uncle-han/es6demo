<template>
  <div>
    <div ref="wrap" :style="{height: scollHeight ? h : 'auto'}" id="wrap">
      <el-table :span-method="objectSpanMethod" :data="tableData" style="width: 100%;">
        <el-table-column prop="province" label="省" width="180">
          <el-table-column colspan="2" prop="city" label="市" width="180"></el-table-column>
          <el-table-column prop="city" label="市" width="180"></el-table-column>
        </el-table-column>
        <el-table-column v-for="(item, index) in HeadersList1" :key="index" prop="" :label="item.provinceName">
          <el-table-column v-for="(city, index) in item.city" :key="index" prop="" :label="city"></el-table-column>
        </el-table-column>
      </el-table>
      <div @mousedown="onMouseDown" id="drag"></div>
    </div>
    <div id="demoEcharts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      beforeTop: 0,
      beforeHeight: 0,
      scollHeight: false,
      h: "",
      tableData: [
        {
          province: "广东",
          city: "佛山",
        },
        {
          province: "广东",
          city: "中山",
        },
        {
          province: "广西",
          city: "南宁",
        },
        {
          province: "广西",
          city: "北海",
        },
        {
          province: "广西",
          city: "柳州",
          address: "上海市普陀区金沙江路 1516 弄"
        },
      ],
      HeadersList1: [
        {
          provinceName : '广东',
          city: ['佛山', '中山', '广州']
        },
        {
          provinceName: '广西',
          city: ['南宁', '柳州']
        }
      ]
    };
  },
  async mounted() {
    this.showEcharts();
    // this.HeadersList()
    // console.log(document.querySelector('.el-table_1_column_1_column_2'))
    // const th = await this.$refs.wrap.getElementsByClassName('el-table__header-wrapper')[0].getElementsByClassName('el-table_1_column_1_column_2')
    // console.log(th)
    // for(let key in th){
    //   console.log(th[key])
    //   if(th[key] !== String ){
    //     th[key].colspan = '2'
    //   }
    // }
    // document.getElementById('wrap').style.height = 1000 + 'px';

  },
  computed: {
    HeadersList() {
      const header = {};
      let provinceName = this.tableData[0].province
      // console.log(provinceName) // 广东
      let province = {}
      this.tableData.forEach( (item, index) => {
        // console.log(item.province)
        if(item.province !== provinceName){
          provinceName = item.province
          // header
          province = {}
        }
        if(province[provinceName] === undefined){
          province[provinceName] = {}
          province[provinceName].city = []
          province[provinceName].name = provinceName
        }
        province[provinceName].city.push( {cityList: item.city} )
        // console.log(province)
        if(index === this.tableData.length -1){
          // header[provinceName] = 
        }
      })
      // console.log(header)
      return header
    }
  },
  methods: {
    showEcharts() {
      const echarts = this.$echarts.init(
        document.getElementById("demoEcharts")
      );
      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            barWidth: 20,
            data: [20, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      };
      echarts.setOption(option);
    },
    onMouseDown(down) {
      this.scollHeight = true;
      this.beforeTop = down.clientY;
      this.beforeHeight = this.$refs.wrap.offsetHeight;
      document.onmousemove = move => {
        this.h = this.beforeHeight + (move.clientY - this.beforeTop) + "px";
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    objectSpanMethod({row, column, rowIndex, columnIndex}) {
      // console.log(row, column, rowIndex, columnIndex)
    },
    // HeadersList() {
    //   const header = [];
    //   let provinceName = this.tableData[0].province
    //   // console.log(provinceName) // 广东
    //   let province = {}
    //   this.tableData.forEach( (item, index) => {
    //     // console.log(item.province)
    //     if(item.province !== provinceName){
    //       provinceName = item.province
    //       header.push(province)
    //       province = {}
    //     }
    //     if(province[provinceName] === undefined){
    //       province[provinceName] = {}
    //       province[provinceName].city = []
    //     }
    //     province[provinceName].city.push( {city: item.city} )
    //     // console.log(province)
    //     if(index === this.tableData.length -1){
    //       header.push(province)
    //     }
    //   })
    //   // console.log(header)
    //   return header
    // }
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
#demoEcharts {
  width: 600px;
  height: 400px;
  background-color: #ccc;
}
</style>
<style lang="scss" scoped>
#wrap {
  // .el-table_1_column_1_column_2{
  //   display: none;
  // }
  // .el-table_1_column_1_column_3 {
  //   display: none;
  // }
  .el-table thead.is-group th {
    &:nth-child(2) {
      display: none;
    }
  }
}
</style>