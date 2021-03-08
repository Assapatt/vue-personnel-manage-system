import Vue from 'vue';
import Vuex from 'vuex';
import { moduleCommon } from './common-module'

Vue.use(Vuex);
// 开发环境启用严格模式
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
  },
  modules: {
    moduleCommon
  }
});
