//引入vue模块
const Vue = require('vue/dist/vue');
//创建vue实例对象
const vm = new Vue({
    el: '#app',
    data: {
        search: "",
        html: "曾经沧海难为水，除却巫山不是云。曾经沧海难为水，除却巫山不是云。"
    },
    template: `
        <div>
            <input v-model='search' style="height: 20px">
            <div v-html="computedhtml"></div>
        </div>`,
    computed: {
        computedhtml: function () {
            let arr = this.html.split(this.search)
            console.log(arr);

            //拼接高亮字符串
            let str = arr.join("<span style='color : red'>" + this.search + "</span>")
            console.log(str);

            return str
        }
    }
});