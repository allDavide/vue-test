<template>
	
	<div class="home">
			
		<router-view></router-view>
  	
    	<ul>
	    	<li>
	    		<router-link to='/home/login'>登录</router-link>
	    	</li>
	    	
	    	<li>
	    		<router-link to='/home/regist'>注册</router-link>
	    	</li>
    	</ul>
				
	</div>
	
  	
	
</template>
<script type="text/javascript">
	
	export default{
		name:'home',
//		data:function(){
//			return
//		}
	}
	//安装，骑上......
//	mounted:function(){
//		this.$nextTick(function(){
//			Axios.get('',{
//				params:{}
//			}).then(function(res){
//				this.list=res.data
//			}.bind(this))
//		})
//	}
</script>


<!--<style type="text/css" scoped>
	
</style>-->