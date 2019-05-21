// bus.js 记录 用户是否登陆
import Vue from 'vue';
var bus = new Vue();
bus.islog=false;
// 默认登陆信息为false；
export default bus;
//  导出bus