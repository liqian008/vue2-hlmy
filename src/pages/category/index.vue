<style lang="less" scoped>

</style>


<style>
    @import "http://wx.1758.com/static/m/dist/category/css/category_1_0_1.css"
</style>

<template>
	
	<div>

		<v-header title="首页">
			<router-link slot="right" v-if="user.id" to="/home">{{user.name}}</router-link>
		</v-header>
		


        <section class="category">
            <div class="c-search">
                <form id="form" class="form" action="//wx.1758.com/game/wxgame/search.html" name="f">
                    <div class="con-wrap">
                        <div class="f-ser">
                            <input id="keyword" name="keyword" type="text" placeholder="请输入游戏名">
                            <input name="tp" type="hidden" value="full">
                            <input name="ex1758" type="hidden" value="1">
                            <input name="title" type="hidden" value="搜索结果">
                        </div>
                        <div class="f-btn">
                            <button id="su" type="submit" class="pure-button">搜&nbsp;索</button>
                        </div>
                    </div>
                </form>
            </div>
            
            <div id="categoryContain" class="c-list">
            <ul class="pure-g">
            <li class="pure-u-1-2"><div><a href="/play/gamebox/111?chn=&amp;ex1758=1&amp;tp=full&amp;yn=点击游戏&amp;title=点击游戏"><img src="http://images.1758.com/article/image/2015/10/22/4641445501530604.jpg" width="100%"><div class="title"><div class="t">点击游戏</div><div class="n">47款</div></div></a></div></li><li class="pure-u-1-2"><div><a href="/play/gamebox/112?chn=&amp;ex1758=1&amp;tp=full&amp;yn=休闲益智&amp;title=休闲益智"><img src="http://images.1758.com/article/image/2016/05/12/63311463044991749.jpg" width="100%"><div class="title"><div class="t">休闲益智</div><div class="n">143款</div></div></a></div></li><li class="pure-u-1-2"><div><a href="/play/gamebox/113?chn=&amp;ex1758=1&amp;tp=full&amp;yn=挂机放置&amp;title=挂机放置"><img src="http://images.1758.com/article/image/2016/11/11/32441478833287882.jpg" width="100%"><div class="title"><div class="t">挂机放置</div><div class="n">21款</div></div></a></div></li><li class="pure-u-1-2"><div><a href="/play/gamebox/114?chn=&amp;ex1758=1&amp;tp=full&amp;yn=角色扮演&amp;title=角色扮演"><img src="http://images.1758.com/article/image/2017/03/03/6071488509536057.jpg" width="100%"><div class="title"><div class="t">角色扮演</div><div class="n">41款</div></div></a></div></li><li class="pure-u-1-2"><div><a href="/play/gamebox/115?chn=&amp;ex1758=1&amp;tp=full&amp;yn=动作竞技&amp;title=动作竞技"><img src="http://images.1758.com/article/image/2015/07/08/96781436354182753.jpg" width="100%"><div class="title"><div class="t">动作竞技</div><div class="n">46款</div></div></a></div></li><li class="pure-u-1-2"><div><a href="/play/gamebox/116?chn=&amp;ex1758=1&amp;tp=full&amp;yn=经营策略&amp;title=经营策略"><img src="http://images.1758.com/article/image/2016/11/25/74721480056858748.jpg" width="100%"><div class="title"><div class="t">经营策略</div><div class="n">50款</div></div></a></div></li><li class="pure-u-1-2"><div><a href="/play/gamebox/118?chn=&amp;ex1758=1&amp;tp=full&amp;yn=每日必玩&amp;title=每日必玩"><img src="http://images.1758.com/article/image/2016/10/25/62491477393761490.jpg" width="100%"><div class="title"><div class="t">每日必玩</div><div class="n">24款</div></div></a></div></li><li class="pure-u-1-2"><div><a href="/play/gamebox/119?chn=&amp;ex1758=1&amp;tp=full&amp;yn=趣味测试&amp;title=趣味测试"><img src="http://images.1758.com/article/image/2016/07/06/55651467792087086.jpg" width="100%"><div class="title"><div class="t">趣味测试</div><div class="n">3款</div></div></a></div></li><li class="pure-u-1-2"><div><a href="/play/gamebox/122?chn=&amp;ex1758=1&amp;tp=full&amp;yn=女生必玩&amp;title=女生必玩"><img src="http://images.1758.com/article/image/2016/10/17/70911476699663924.jpg" width="100%"><div class="title"><div class="t">女生必玩</div><div class="n">16款</div></div></a></div></li><li class="pure-u-1-2"><div><a href="/play/gamebox/123?chn=&amp;ex1758=1&amp;tp=full&amp;yn=挑战好友&amp;title=挑战好友"><img src="http://images.1758.com/article/image/2016/12/22/39031482370465634.jpg" width="100%"><div class="title"><div class="t">挑战好友</div><div class="n">69款</div></div></a></div></li></ul>
        </div>
        </section>

	</div>
</template>



<script>

    import { mapState } from 'vuex'
	export default {
		computed: mapState({ user: state => state.user }),
    }


</script>


