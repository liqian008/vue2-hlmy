<style lang="less" scoped>
	
</style>
<template>

	<section id="footerSection" class="base-footer">
		<div id='base-menu' class="pure-g base-menu" >
		    <div class="pure-u-1-3" >
		    	<router-link to="/">
					<img v-if="active=='index'" src="http://images.1758.com/game/m/wyxy.png"/>
					<img v-else src="http://images.1758.com/game/m/wyxw.png"/>

		    	</router-link>
		    </div>
		    <div class="pure-u-1-3" >
		    	<router-link to="/feeds">
		    		<img v-if="active=='feeds'" src="http://images.1758.com/game/m/wsqy.png"/>

		    		<img v-else src="http://images.1758.com/game/m/wsqw.png"/>
		    	</router-link>
		    </div>
		    <div class="pure-u-1-3 cursor">
		    	<router-link to="/home">
		    		<img v-if="active=='home'" src="http://images.1758.com/game/m/wdy.png"/>
		    		<img v-else src="http://images.1758.com/game/m/wdw.png"/>

		    		<div id="newMessCount" class="f-n-count gone">
			    		<span></span>
			    	</div>
			    </router-link>
		    </div>
		</div>
	</section>
	
</template>

<script>
    export default {
        props: {
        	active:{
        		default:"index"
        	}
        }
    }
</script>