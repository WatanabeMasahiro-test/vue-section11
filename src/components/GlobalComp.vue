<template>
    <div class="container">
        <!-- <p v-border:dotted="{width: '5px', color: 'red'}">Home</p> -->
        <p v-border2:solid.round.shadow="{width: '10px', color: 'blue'}" class="ps-1">Global</p>
        <h2>{{ upperCaseTitle(title) }}</h2>
        <h3>{{ lowerCaseTitle(upperCaseTitle(subTitle)) }}</h3>
        <hr>
        <GlobalCompCopy></GlobalCompCopy>
    </div>
</template>

<script>
import { ref } from 'vue' // ⏪(Vue3で廃止の)フィルターの代用
import { mixinExport } from '@/mixinExport' // mixinExport.jsの変数名
import GlobalCompCopy from './GlobalCompCopy'

export default {
  name: 'GlobalComp',
  components: {
    GlobalCompCopy,
  },
  mixins: [mixinExport],
  data: () => ({
    /**
     * ローカルにカスタムディレクティブを使う場合は、「this」が使えない
     */
    tmpData   : "HELLO-TEST",
    title     : "Welcome to Nagoya", // ⏪mixInとわざと被るオプション
  }),
  /*↓** (Vue3で廃止の)フィルターの代用 **↓*/
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
  /*↑** ************************** **↑*/
  directives: {
    border2(el, binding) {
        /**
         * this.tmpData = "こんにちは-テスト";
         */
        // el.style.border = "solid black 2px";
        el.style.borderWidth = binding.value.width;
        el.style.borderColor = binding.value.color;
        el.style.borderStyle = binding.arg;
        if (binding.modifiers.round) {
            el.style.borderRadius = "2.5rem";
        }
        if (binding.modifiers.shadow) {
            el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
        }
    }
  },
}
</script>