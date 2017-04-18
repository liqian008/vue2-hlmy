<style lang="less" scoped>
	
</style>


<style>
	@import "http://wx.1758.com/static/m/dist/user/css/user_1_2_6.css"
</style>


<template>
	
	<div>

		<v-header title="首页">
		</v-header>


		<section class="user-info my">
			<div class="inner-user-info">

				<div id="userId" class="user-id">
					<div class="inner-id">
						ID:<span></span>
					</div>
				</div>


				<div id="user-img" class="user-img">
					<div class="head-wrapper">
						
						<img src="http://wx.qlogo.cn/mmopen/Q3auHgzwzM5xciaXhVypOz2FM6amj9Zn8yZATSWeibFkx4MCiaEK4XFwWchIVxRRfZMvbcicH97pFo61vSYxOCibCAA/0" alt="用户头像">
						<a class="u-profile" href="./profile?tp=full&ex1758=1">
							<div class="avatar">个人信息</div>
						</a>
						
					</div>
					<div id="userMess" class="user-message gone">
						<div class="inner-u-message">
							<a href="/play/message/inbox/index?tp=full&ex1758=1">
								<img src="http://images.1758.com/daren/usermessage.png" />
								<p id="messNew" class="message-new gone">●</p>
							</a>
						</div>
					</div>
					<div id="userMessCount" class="user-message mess-count gone">
						<div class="inner-u-message">
							<a href="/play/message/inbox/index?tp=full&ex1758=1" >
								<img id="messUserImg" src="">
								<span class="countWrapper"><span id="messCount" class="">0</span>条新消息</span>
							</a>
						</div>
					</div>
					<div class="user-rmb">
						<img src="http://images.1758.com/images/1758bi.png"/>
						<span id="user-rmb-count">0</span>
					</div>
				</div>


				<div class="user-name">
					<span id="user-name" class="u-name">李乾@1758</span>
					<span class="user-sex">
						
							 	<img id="sex" src="http://images.1758.com/game/m/woman.png"/>
							
					</span>
					
					<a href="./profile?tp=full&ex1758=1"><span class="user-level">VIP2</span></a>
					
					
				</div>

				<a class="exp-wrapper" href="./profile?tp=full&ex1758=1"><div id='userExp' class="user-exp" data-value='37'></div></a>
			
			
				<div id="user-set" class="user-set">
					<div id="checkWrapper" class="checkin-wrapper">
						
							<img id='checkIn' class="checkin ac-ch" src="http://images.1758.com/image/20161202/open_104818_d16c1d4ce20b131e15b587ce847ec3ae.png" alt="签到">
						
					</div>
					<div id="getGold" class="checkin-wrapper">
						<img class="checkin ac-ch" src="http://images.1758.com/image/20161202/open_104818_8a60023d4d3d14655657266f194585e9.png" alt="领取鼓励金">
					</div>
				</div>

			</div>
		</section>

		<section class="user-main">
			<div id='user-menu' class="pure-g user-menu" >
			    <div id='menu-comment' class="pure-u-1-4 dm" data-flag='1'><p class="y">动态</p><p class="show-new">●</p></div>
			    <div id='menu-play' class="pure-u-1-4 dm" data-flag='2'><p class="y">在玩</p></div>
			    <div id='menu-following' class="pure-u-1-4 dm" data-flag='3'><p class="y">关注</p><p id="total-following" class="to-fo">0</p></div>
			    <div id='menu-follower' class="pure-u-1-4 dm" data-flag='4'><p class="y">粉丝</p><p id="total-follower" class="to-fo">0</p></div>
			</div>
		</section>


		<section id='user-comment' class="user-comment u-list gone"><div class="dropList"></div></section>
		<section id='user-game' class="user-game gone u-list">
			<div id="vistorContainer" class="vistor-container gone">
		        <div class="inner-vistor">
		            <div id="vistorWrapper" class="vistor-wrapper gone">
		                <header class="lib-top gone">
		                    <img src="http://images.1758.com/image/20161230/open_1_10691b55eafa26007f3cb4d687e36134.png">
		                    <span id="vistorAccount" class="vistor-account">111人</span>
		                </header>
		                <div id="swiperVistor" class="swiper-container swiper-container-horizontal">
		                    <div class="swiper-wrapper vistor-body">
		                    </div>
		                </div>
		            </div>
		            <div id="wealthWrapper" class="wealth-wrapper gone">
		                <div class="wealth-body flex-wrapper">
		                    <div class="wealth-item cell">
		                    	<a href="/play/mall/index?tp=full&ex1758=1&title=积分商城">
		                        	<img src="http://images.1758.com/image/20161230/open_1_9f56d243907b5e8c5c6b7358fbaf73a4.png" alt="">
		                        	<span id="wealthExp">0积分</span> 
		                    	</a>
		                    </div>
		                    <div class="wealth-item cell">
			                  	<a href="/play/user/coinInfo?tp=full&ex1758=1&title=1758币">
			                        <img src="http://images.1758.com/image/20161230/open_1_978e4f6228f58ebee419e27cea5c1cfe.png" alt="">
			                        <span id="wealthCoins">0币</span>
			                    </a>
		                    </div>
		                    <div class="wealth-item cell">
			                    <a href="/pay/voucher/myVouchers?tp=full&ex1758=1&title=我的抵用券">
			                        <img src="http://images.1758.com/image/20161230/open_1_b9d7ec69c59c0180a5613d66063bbcfa.png" alt="">
			                        <span>福利</span>
			                    </a>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
			<div id="userGameContainer">
				<header class="lib-top margin-top gone">
					<img src="http://images.1758.com/image/20161230/open_1_2b8782427a9ec38d35ff8bcef9c5c5c9.png">
	            </header>
				<div class="dropList"></div>
			</div>
		</section>
		<section id="user-following" class="user-follow gone u-list"><div class="dropList"></div></section>
		<section id='user-follower' class="user-follow u-list gone"><div class="dropList"></div></section>
		

		
		<v-footer active='home'>
		</v-footer>
	</div>

</template>
<script>
   
	
</script>