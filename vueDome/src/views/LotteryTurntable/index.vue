<template>
  <div>
    <ul @click="component">
      <li>table</li>
      <li>input</li>
      <li>button</li>
	  <li>h1</li>
    </ul>
	<component :is="componentName">13123</component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      componentName: "table"
    };
  },
  methods: {
    component(e) {
      // console.log(e);
      if (e.target.tagName === "LI") {
        this.componentName = e.target.innerHTML;
      }
    }
  }
};
</script>
<style lang="scss" scope></style>
