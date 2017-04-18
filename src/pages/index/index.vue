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



		<div id="swiperContainerLun" class="swiper-container loop">
            <ul id="swiperWrapper" class="swiper-wrapper">
                
                <li class="swiper-slide">
                    <a href="//wx.1758.com/cqsj/index2.html?chn=banner&hlmy_ent=platform_banner_1">
                    <img src="http://images.1758.com/article/image/2016/08/23/57481471948562463.jpg" draggable="false"> </a>
                </li>
                
                <li class="swiper-slide">
                    <a href="//wx.1758.com/manghuangji/index2.html?chn=banner&hlmy_ent=platform_banner_2">
                    <img src="http://images.1758.com/article/image/2016/08/23/96851471949229492.jpg" draggable="false"> </a>
                </li>
                
            </ul>
            <div class="swiper-pagination"></div>
        </div>


		<div class="nav-contain">
            <div class="inner-nav flex-wrapper">
                <div class="nav-item flex-item">

                	<router-link to="/gamebox">
 						<img src="http://images.1758.com/game/m/new-game2.png" alt="">
                    </router-link>
                </div>
                
                <div class="nav-item flex-item">
                    <router-link to="/gifts">
                        <img src="http://images.1758.com/game/m/gift_2.png" alt="">
                    </router-link>
                </div>
                <div class="nav-item flex-item">
                    <router-link to="/gamebox">
                        <img src="http://images.1758.com/game/m/small-game2.png" alt="">
                    </router-link>
                </div>
                <div class="nav-item flex-item">
                   <router-link to="/category">
                        <img src="http://images.1758.com/game/m/category_2.png" alt="">
                    </router-link> 
                </div>
            </div>
        </div>

        <div class="recommend-contain">
            <div class="inner-recommend">
                <header class="lib-top">
                    <img src="http://images.1758.com/game/m/author-recommend.png">
                    <!--<div class="lib-more">更多<img src="images/right.png"/></div>-->
                </header>
                <div id="swiperContainerNav" class="swiper-container">
                    <div class="swiper-wrapper recom-wrapper">
                    </div>
                </div>
            </div>
        </div>
        <div class="lib bg">
            <div class="lib-inner">
                <header class="lib-top">
                    <img src="http://images.1758.com/game/m/hotgame.png">
                    <!--<div class="lib-more">更多<img src="images/right.png"/></div>-->
                </header>
                <div id="hotGames" class="list hot-main">
                    <div class="item" v-for="hotGame in hotGameList">
                        
                        <router-link class="i-info"  to="/game/1">

                           <figure class="cover">
                                <img :src="hotGame.appIconUrl"></figure>
                                <div class="meta">
                                    <h3 class="title">{{hotGame.appName}}
                                        <span class="identification">
                                            <img src="http://images.1758.com/game/m/lb1.png">
                                        </span>
                                    </h3>

                                    <div class="desc">{{hotGame.appRemark}}</div>
                                </div>
                        </router-link>

                        <a :href="hotGame.videoUrl">
                            <div class="play-btn">
                                开始
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

		
		<v-footer active="index">
		</v-footer>
	</div>
</template>


<script>
    import { mapState } from 'vuex'
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
	import logo from './logo.png'

    Vue.use(VueAxios, axios)


    function getHotData(){
        Vue.axios.get("/game/column/listvremarkugc.html?cid=88&reqType=1").then((response) => {
            var success = true;//response.data.data && response.data.data.ugcData && response.data.data.ugcData.dataList;
            if(success){
                //self.hotGameList = response.data.data.ugcData.dataList;
                self.hotGameList = response.data;

                //console.log(response.data.data)
                //changeData(response.data.data.ugcData.dataList);
            }
        })
    }

    

    var self = this;
    export default {
		data() {
			return {
                hotGameList:[]
             
                
                 /*
                hotGameList: [
                  { text: '蔬菜' },
                  { text: '奶酪' },
                  { text: '随便其他什么人吃的东西' }
                ]
                */
               
			}
		},

        created: function(){
            self = this;
            console.log(self);

            getHotData();

        },

        methods: {
            changeData: function(dataList) {
              //this.hotGameList = dataList;
            }
        },

        computed: mapState({ user: state => state.user }),
    }
</script>