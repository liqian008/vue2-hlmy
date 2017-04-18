<style lang="less" scoped>
	.base-head{line-height:46px;height:46px;background-color:#fff}.head-menu{padding:0;position:relative;text-align:center}.head-menu .head-index{position:absolute;left:6px;padding:0 10px}.head-index img{width:20px;vertical-align:middle}.head-menu .head-icon img{width:100px;vertical-align:middle}.head-menu .head-dowload{position:absolute;right:0;background-color:#5bbd2a}.head-menu .sj-icon{width:14px;vertical-align:middle;padding:0 3px 2px 0}.head-dowload a{color:#fff;text-decoration:none;display:inline-block;height:100%;padding:0 5px;font-size:12px;cursor:pointer}
</style>
<template>

	<header id="headContent" class="base-head">
		<div class="head-menu">
			<span class="head-icon">
				<router-link to="/">
					<img src="http://wx.1758.com/game/h5/images/head-icon.png">
				</router-link>
			</span>

			<slot name="right"></slot>

			<span class="head-dowload">
				<router-link to="/download">
				<img class="sj-icon" src="http://images.1758.com/image/20160825/open_1_6164b7b439c2799559c76e4d72130c3c.gif">
				关注 | 安装
				</router-link>
			</a></span>
		</div>
	</header>
	


	<!--
	<header class="header">
		<div class="item left">
			<slot name="left"></slot>
		</div>
		<div class="title">{{title}}</div>
		<div class="item right">
			<slot name="right"></slot>
		</div>
	</header>
	-->
	
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>