<style lang="less" scoped>
	html,body{
        min-height: 100%;
        height: 100%;
    }
    .main{
        background-color: #fff;
        height: 100%;
    }
    .img-wrapper{
        text-align: center;
    }
    .img-wrapper img{
        width: 250px;
        margin-top: 30px;
    }
    
    .btn-container{
        margin-top: 10px;
    }
    .btn-wrapper{
        text-align: center;
    }
    .btn{
        display: inline-block;
        border-radius: 5px;
        width: 200px;
        height: 40px;
        line-height: 40px;
    }
    .b1{
        color: #fff;
        background-color: #08ba05;
    }
    .b2{
        border: 1px solid #f2f2f2;
        margin-top: 10px;
    }

</style>
<template>
	
	<div>

		<v-header title="首页">
			
		</v-header>


        
        <section class="main">
            <div class="img-wrapper">
                <img src="http://images.1758.com/game/m/ewn_1.png" alt="">
            </div>
            <div class="btn-container">
                <div class="btn-wrapper">
                    <a href="/game/download.htm">
                        <div class="btn b1">
                            下载1758客户端
                        </div>
                    </a>
                </div>
                <div class="btn-wrapper">
                    <a href="javascript:history.go(-1);">
                        <div class="btn b2">
                            返回上一页
                        </div>
                    </a>
                </div>
            </div>
        </section>

	</div>
</template>

