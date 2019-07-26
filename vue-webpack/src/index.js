// 以模块的方式引入vue
const Vue = require('vue/dist/vue');
//引入css
require('./style/index.css');
//创建一个Vue实例对象
const vm = new Vue({
    // V
    el: '#app',
    // M
    data: {
        tabId: 0,
        msg: '小明背井离乡',
        msg1: '大明两百米19.88破世界纪录',
        msg2: '明天赚它个一个亿',
        msg3: '互联网时代已经来临'
    },
    //方法二
    template: `<div>
    <div class="tab">
    <a href="#" @click="tabId=0" class="{tabId=0}">娱乐新闻</a>
    <a href="#" @click="tabId=1" class="{tabId=1}">体育新闻</a>
    <a href="#" @click="tabId=2" class="{tabId=2}">财经新闻</a>
    <a href="#" @click="tabId=3" class="{tabId=3}">科技新闻</a>
   </div>
   <div class="box">
    <div v-show="tabId === 0" v-text="msg"></div>
    <div v-show="tabId === 1" v-text="msg1"></div>
    <div v-show="tabId === 2" v-text="msg2"></div>
    <div v-show="tabId === 3" v-text="msg3"></div>
   </div>
   </div> 
   `,
})