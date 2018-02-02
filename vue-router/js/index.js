// 1.定义路由组件
// 可以从其他文件import进来
// let  btn=document.getElementById('btn');
// btn.onclick=function(){
// 	console.log(123);
// 	router.push('/user/foo');
// }
 const Foo={
 	template:'<div>我是模板1 Foo</div>'
 }
 const Bar={
 	template:'<div>我是模板2 Bar</div>'
 };
 const User={
 	template:`
 	<div class="user">
 	<p>我是模板3 -- usre 我可以通过一些匹配条件进入我的孙子页面 我的user下面的id是 {{ $route.params.id }} </p>
 	<router-view></router-view>
 	</div>
 	`,
 	watch:{
 		'$route'(to,from){
 			//对路由变化做出相应...
 			console.log(this.$route.params.id) //只能通过watch对路由变化进行监听
 		}
 	}
 }
 const UserHome={
 	template:'<div>我是user模板id下面的userhome 11111111</div>',
 }
 const UserProfile={
 	template:'<div>我是user模板id下面的userhome Profile 2222222</div>'
 }
 const UserPosts ={
 	template:'<div>123465 33333333</div>'
 }
 //2.定义路由
 
 // const routes=[
 // 	{path:'/foo',component:Foo},
 // 	{path:'/bar',component:Bar},
 // ]

 //3.创建router实例，然后传`routes`配置
 //还可以传别的配置参数
 const router=new VueRouter({
 	routes:[ //相当于 routes:router
 	//动态路径参数 以冒号开头
 	{path:'/user/:id',component:User,   //配置动态路径 并设置其下面的子组件
 	children:[{
 		//当/user/:id/profile匹配成功，
 		//userProfile会被渲染在user的router-view中
 		path:'profile',
 		component:UserProfile
 	},{
 		path:'',component:UserHome
 	},{
 		path:'posts',component:UserPosts
 	}

 	]
 },
 	{
 	 path:'/foo',
 	 component:Foo
 	},{
 		path:'/bar',
 		component:Bar
 	},{
 		path:'/',
 		component:Foo
 	}
 ]

 	// 一个路径参数使用冒号：标记。当匹配到一个路由时，参数值会被设置到this.$route.params，可以
 	//每个组件内使用。于是，我们可以更新User的模板，输出到当前用户的ID。

 })

 // 4.创建和挂载根实例
 // 记得要通过 router配置参数注入路由
 // 从而让整个应用都有路由功能
 
 const app=new Vue({
 	router,
 	data:{

 	},
 	methods:{
 		doSomething:function(){
 			console.log(this.$router.push('/bar'))
 		} //我是通过点击进入的bar组件
 	}
 }).$mount('#app')
 //启动路由