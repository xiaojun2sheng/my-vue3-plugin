<template>
	<div class="newtab_page">
		<div class="nav_box">
			<a-button @click="pageVal=Home">Home</a-button>
			<a-button @click="pageVal=Tools">Tools</a-button>
		</div>
		
		<component :is="pageVal"></component>

		<div class="contact_me">
			<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=qbgskcd">
				<QuestionCircleOutlined />
			</a>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, computed} from 'vue'
import moment from 'moment';
import 'moment/dist/locale/zh-cn'
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
import Home from './pages/home.vue'
import Tools from './pages/tools.vue'

let pageVal = ref(Home)



</script>

<style lang="less" scoped>
.newtab_page{
	width: 100%;
	height: 100%;
	.nav_box {
		width: 100%;
		height: 30px;
		float: left;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.contact_me {
		position: fixed;
		bottom: 10%;
		right: 100px;
		.anticon-question-circle {
			font-size: 30px;
		}
	}
}
</style>