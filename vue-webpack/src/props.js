const Vue = require('vue/dist/vue');
require('./template/index.html');
require('./style/header.css');


Vue.component('lx.header', {
    props: ['title', 'align', 'inWidth', 'bg'],
    template
});


new Vue({
    el: '#demo',
    data: {
        title: ['未能获取地址', '选择收货地址'],
        align: ['left', 'center'], //title对齐方式
        inWidth: ['400px', '320px'], //input标签width
        bg: '#eee' //input标签background
    },
    template: `
        <div>
        <lx.header :title="title[0]" :align="align[0]" :inWidth="inWidth[0]"></lx.header>
        <lx.header :title="title[1]" :align="align[1]" :inWidth="inWidth[1]" :bg="bg"><p>选择...</p></lx.header>
        <lx.header><h2>{{name}}</h2></lx.header>
        </div>
    `
});