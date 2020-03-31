//watch和计算属性区别
watch是监听某个属性,该属性变化则触发
computed计算属性监听是群体监听,当相关依赖发生变化就会触发执行

//watch也可以实现监听为什么还要计算属性这个
computed有缓存,功能不同

//data为什么是一个函数
组件中的data写成一个函数,数据以函数返回值的形式定义,这样每复用一次组件就会返回生成新data的数据
让各个组件实例维护各自的数据
类似于给每个组件实例创建一个私有的数据空间,如果写成对象形式,那么所有的组件实例就共用了一个data,就会造成一个变了全都会变的结果

//双向数据绑定原理
利用了Object.defineProperty(),让数据变得可观测,结合发布者订阅者模式,
当数据发生变化,发布者通知订阅者更新数据和view

//组件怎么实现双向数据绑定
组件内部props写上value,watchvalue进行数据的初始化,data中声明一个newvalue,
监听这个newvalue,如果页面发生变化使用emit/on抛出事件

//vue中如果数据更新了视图没有渲染怎么办
用$set(目标, 要修改的key, 值),如果极层很多set不起作用那么用this.$forceUpdate()

//key的作用
当Vue.js用v-for正在更新已渲染过的元素列表时,它默认用,就地复用,策略
如果数据项的顺序被改变,Vue将不会移动DOM元素来匹配数据项的顺序
而是简单复用此处每个元素,并且确保它在特定索引下显示已被渲染过的每个元素
key的作用让每个item有一个唯一的识别身份
可以下标值index或者id,主要是为了vue精准的追踪到每一个元素,高效的更新虚拟DOM

//vue v-show/v-if

//vue-router有哪几种导航钩子
全局的beforeEach,afterEach
单个路由独享的beforeEnter
页面级的beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave

//hash和history路由
hash值变化不会导致浏览器向服务器发出请求
hash改变会出发hashchange事件,HashChangeEvent只能改变//#后面的url片段
hash发生变化的url都会被浏览器记录下来,从而浏览器可以前进后退
//hash 模式下，仅 hash 符号之前的内容会被包含在请求中，
//如 http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误

history利用了html5
//history利用了html5 history enterface中新增的pushState()
//和replaceState()方法，但是history路由需要后段配置
//如果路由找不到，就始终返回一个html，不然会有刷新404问题
