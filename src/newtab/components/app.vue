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

		<KeepAlive>
			<component :is="pageVal"></component>
		</KeepAlive>

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
import Diff from './pages/diff.vue'
import MarkDown from './pages/markDown.vue'
import CompressImg from './pages/compressImg.vue'
import JsonFormat from './pages/jsonFormat.vue';
import DragPage from './pages/dragPage.vue';

let current = ref(['dragPage'])

let pageVal = ref(DragPage)

const MenuList = [
	{key: 'home', title: '首页', page: Home},
	{key: 'diff', title: 'diff比对', page: Diff},
	{key: 'markDown', title: 'MarkDown转换', page: MarkDown},
	{key: 'compressImg', title: '图片压缩', page: CompressImg},
	{key: 'jsonFormat', title: 'JSON格式化', page: JsonFormat},
	{key: 'dragPage', title: '拖拽页面', page: DragPage}
	
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