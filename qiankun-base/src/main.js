import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入乾坤
import { registerMicroApps, start, initGlobalState } from 'qiankun';

Vue.use(ElementUI);

// 初始化 state
let state = {
  a: 1,
  b: 2
}
const actions = initGlobalState(state);
// 主项目项目监听和修改
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState({ a: 3 });

const apps = [
  {
    name: 'vueApp', // 应用的名字
    entry: '//localhost:8081', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: '#vue', // 容器名
    activeRule: '/vue', // 激活的路径
    props: { a: 1 }
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: '#react',
    activeRule: '/react',
  }
]
registerMicroApps(apps); // 注册应用
start({
  prefetch: false // 取消预加载
});// 开启

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')