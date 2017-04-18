<style lang="less" scoped>
	.login-msg {
		padding: 50px;
		text-align: center;
	}
	.msg {
		padding: 50px;
		text-align: center;
		font-size: 20px;
		color: red;
	}
</style>
<template>
	
	<div>

		<v-header title="首页">
			<router-link slot="right" v-if="user.id" to="/home">{{user.name}}</router-link>
		</v-header>


        <section id="upComming" class="upcomming-container gone">
            <div class="inner-upcomming">
                <header class="lib-top">
                    <img src="http://images.1758.com/image/20160826/open_1_5d24b010d36f2ac8b52bb948e57502da.png">
                </header>
                <div>
                    <div id="swiperContainerNav" class="swiper-container">
                        <div id="upCommingWrapper" class="swiper-wrapper upcomming-wrapper"></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="testGame" class="recommend-contain">
            <div class="inner-recommend">
                <header class="lib-top">
                    <img src="http://images.1758.com/image/20161221/open_1_2b695b945876c9c644d90c41461b36d7.png">
                </header>
                <div id="swiperTestContainer" class="swiper-container">
                    <div class="swiper-wrapper recom-wrapper">
                    </div>
                </div>
            </div>
        </section>
        <section class="main cag-main">
            <header id="libTop" class="lib-top gone">
                <img src="http://images.1758.com/image/20160826/open_1_5450070a87207f355da27fe73082ff0a.png">
                <!--<div class="lib-more">更多<img src="images/right.png"/></div>-->
            </header>
            <div id="gameList" class="list">
                <!-- <div class="more-info" data-num="1"><a>点击加载更多</a></div> -->

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