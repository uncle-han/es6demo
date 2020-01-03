<template>
  <div id="app">
    <nav>
      <router-link to="/drapButtomTable">底部可拖拽表格</router-link>
      <router-link to="/LotteryTurntable">抽奖转盘</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
nav{
  a {
    margin: 10px;
  }
}
</style>
