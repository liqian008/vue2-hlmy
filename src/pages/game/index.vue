<style lang="less" scoped>

</style>


<style>
    @import "http://wx.1758.com/static/m/dist/details/css/details_1_1_1.css"
</style>

<template>
	
	<div>

		<v-header title="首页">
			<router-link slot="right" v-if="user.id" to="/home">{{user.name}}</router-link>
		</v-header>
		

        <section>
            <div class="d-head">
                <img id="d-head-img" src="http://images.1758.com/article/image/2016/07/14/42461468482006189.jpg" width="640"/>
                <div class="head-content">
                    <img id="head-img" class="head-img" src="http://images.1758.com/article/image/2016/07/15/78471468572845919.gif"/>
                    <span id="head-title" class="head-title">错嫁太子妃</span>
                    
                    <a id="d-play" href='http://w.g1758.cn/cjtzf/index.html?tp=fs&ex1758=1&hlmy_ent=platform_xiangqing_&chn='>
                        <span class="d-play ">开&nbsp;&nbsp;始</span>
                    </a>
                    
                </div>
            </div>
        </section>
        <section class="d-tab">
            <ul class="pure-g">
                <li class="pure-u-1-3"><a class="dk ziliao" data-type="un" data-value="infos">资料</a></li>
                <li class="pure-u-1-3"><a class="dk libao" data-type="un" data-value="gift">礼包</a></li>
                <li class="pure-u-1-3"><a class="dk liaoba" data-type="un" data-value="talk">聊吧</a></li>
            </ul>
        </section>
        <section id="d-infos" class="d-infos gone">
            <div class="game-intru bg">
                <header class="g-title">游戏介绍</header>
                <p id="g-content" class="g-content"></p>
            </div>
            
            <div id="gonglue" class="game-intru bg gone">
                <header class="g-title">游戏攻略</header>
                <div id="gonglue-content" class="gonglue-content"></div>
                <footer id="showGL" class="k-foot gone">
                    <span><img src="http://images.1758.com/game/down-1.png" alt="向下"></span>
                </footer>
                <footer id="hideGL" class="k-foot gone">
                    <span><img src="http://images.1758.com/game/up-1.png" alt="向上"></span>
                </footer>
            </div>
            <div id="similar" class="game-intru bg gone">
                <header class="g-title">大家也喜欢</header>
                <div id="similar-content" class="similar-content">
                    <div id="similar-inner" class="pure-g"></div>
                </div>
            </div>
        </section>


        <section id="d-gift" class="d-infos gone">
            <div id="gifts" class="game-gift bg gone game-intru">
                <header class="g-title">游戏礼包</header>
                <div id="game-gift" class="list"></div>
                <footer id="showHG" class="k-foot gone">
                    <span><img src="http://images.1758.com/game/down-1.png" alt="向下"></span>
                </footer>
                <footer id="hideHG" class="k-foot gone">
                    <span><img src="http://images.1758.com/game/up-1.png" alt="向上"></span>
                </footer>
            </div>
            <div id="similarGift" class="game-intru bg gone">
                <header class="g-title">大家也喜欢</header>
                <div id="similar-content" class="similar-content">
                    <div id="similar-inner" class="pure-g"></div>
                </div>
            </div>
        </section>
        <section id="d-talk" class="d-talk bg gone">
            <div id="d-talk-inner">
                <div class="more-info" data-num="1"><a>点击加载更多</a></div>
            </div>
            <div id="commentBtn" class="comment-logo gone"><div class="inner-comment-logo"><img id="commentLogo" src="http://images.1758.com/game/m/comment-3.png"></div></div>
        </section>

	</div>
</template>



<script>

    import { mapState } from 'vuex'
	export default {
		computed: mapState({ user: state => state.user }),
    }


</script>


