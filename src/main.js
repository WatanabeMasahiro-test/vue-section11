import { createApp } from 'vue'
import App from './App.vue'
import GlobalComp from './components/GlobalComp.vue'

createApp(App)
    .component("GlobalComp", GlobalComp)
    /**
     * Vue3でFilterは廃止
     * 外部JSファイルexport.jsで代用
     */
    // .filter("upperCase", function(value) {
    //     return value.toUpperCase();
    // })
    .directive("border", function(el, binding) {
        // el.style.border = "solid black 2px";
        el.style.borderWidth = binding.value.width;
        el.style.borderColor = binding.value.color;
        el.style.borderStyle = binding.arg;
        if (binding.modifiers.round) {
            el.style.borderRadius = "0.5rem";
        }
        if (binding.modifiers.shadow) {
            el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
        }
    })
    // .directive("border", {
    //     bind(el, bindeing, vnode)              {
    //         // ディレクティブがはじめて対象の要素に紐づいたとき
    //     },
    //     inserted(el, bindeing, vnode)          {
    //         // 親Nodeに挿入されたとき
    //     },
    //     update(el, bindeing, vnode, oldVnode)            {
    //         // コンポーネントが更新される度、子コンポーネントが更新される前
    //     },
    //     componentUpdated(el, bindeing, vnode, oldVnode)  {
    //         // コンポーネントが更新される度、子コンポーネントが更新された後
    //     },
    //     unbind(el, bindeing, vnode)            {
    //         // ディレクティブが紐づいている要素から取り除かれたとき
    //     },
    // })
    .mixin({
        created() {
            console.log("GLOBAL MIXIN");
        }
    })
.mount('#app')