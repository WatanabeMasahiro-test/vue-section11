<template>
  <div class="container">
    <div class="row">
      <h2>カスタムディレクティブ</h2>
      <samp>HELLO!!!!!!!!</samp>
      <hr class="py-1">
      <LinkComponent1></LinkComponent1>
      <GlobalComp></GlobalComp>
      <hr class="py-1">
    </div>
  </div>
</template>

<script>
import LinkComponent1 from './components/LinkComponent1.vue'
import './assets/css/style.css'

export default {
  name: 'App',
  components: {
    LinkComponent1,
  },
  data: () => ({

  }),
  computed: {

  },
  methods: {

  },
}
</script>

<style>

</style>
