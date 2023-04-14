<template>
    <div class="">
        <h2>{{ upperCaseTitle(title) }}</h2>
        <h3>{{ lowerCaseTitle(upperCaseTitle(subTitle)) }}</h3>
    </div>
</template>

<script>
import { ref } from 'vue' // ⏪(Vue3で廃止の)フィルターの代用
import { mixinExport } from '@/mixinExport' // mixinExport.jsの変数名

export default {
  name: 'GlobalCompCopy',
  mixins: [mixinExport],
  setup() {
    const inputValue = ref('')
    function upperCaseTitle(value) {
      if (!value) return '';
      return value.toString().toUpperCase();
    }
    function lowerCaseTitle(value) {
      if (!value) return '';
      return value.toString().toLowerCase();
    }
    return {
      inputValue, 
      upperCaseTitle,
      lowerCaseTitle,
    }
  },
  created() {
    console.log("created in component");
  },
}
</script>