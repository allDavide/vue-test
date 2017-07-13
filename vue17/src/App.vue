<template>
  <div id="app">
  
  	<router-view></router-view>
    
    <div class="tap">
     	<ul>
    	 <li>
    		<router-link to='/home'>首页</router-link>
    	</li>
    	 <li>
    		<router-link to='/classify'>分类</router-link>
    	</li>
    	<li>
    		<router-link to='/cart'>购物车</router-link>
    	</li>
    	
    	 <li>
    		<router-link to='/mine'>我的</router-link>
    	</li>
    </ul>
     	    	
    </div>
    
    
    
  </div>
</template>

<script>


export default {
  name: 'app'
}
</script>

<style type="text/css" src='./assets/基本样式.css'></style>

<style>
  html{font-size:62.5%;}
  body{font-size:0.24rem;}  
	#app{width:100%;height: 100%;position: relative;}
	#app .tap{width: 100%;height:4rem;background: lightcyan;position: fixed;bottom: 0;border-top:1px solid lightgrey}
	.tap ul{width: 100%;height: 4rem;}
	.tap ul li{float: left;width: 25%;height: 4rem;line-height: 4rem;text-align: center;}
</style>
