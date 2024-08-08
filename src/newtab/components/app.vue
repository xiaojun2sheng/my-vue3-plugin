<template>
	<div class="newtab_page">
		<a-menu v-model:selectedKeys="current" mode="horizontal" class="nav_box">
			<a-menu-item
				v-for="mItem in MenuList"
				:key="mItem.key"
				@click="pageVal=mItem.page">
				{{ mItem.title }}
			</a-menu-item>
		</a-menu>

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
import MarkDown from './pages/markDown.vue'

let current = ref(['home'])

let pageVal = ref(Home)

const MenuList = [
	{key: 'home', title: '首页', page: Home},
	{key: 'markDown', title: 'MarkDown转换', page: MarkDown}
]

</script>

<style lang="less" scoped>
.newtab_page{
	width: 100%;
	height: 100%;
	overflow: hidden;
	.nav_box {
		width: calc(100% - 32px);
		height: 42px;
		float: left;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 16px;
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