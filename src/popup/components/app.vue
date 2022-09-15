<template>
	<div class="popup_page">
		<a-dropdown>
			<template #overlay>
				<a-menu>
					<a-menu-item
						v-for="item in resolutionList"
						:key="item.value"
						 @click="selectWindowSize(item.value)">
						<a-button type="link" ghost>{{item.label}}</a-button>
					</a-menu-item>
				</a-menu>
			</template>
			<a-button>
				分辨率调节<DownOutlined />
			</a-button>
		</a-dropdown>
	</div>
</template>

<script setup>
import { ref} from 'vue'
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';


// 常见的分辨率
const resolutionList = [
	{label: '800 x 600', value: [800, 600]},
	{label: '1024 x 768', value: [1024, 768]},
	{label: '1280 x 720', value: [1280, 720]},
	{label: '1360 x 768', value: [1360, 768]},
	{label: '1440 x 900', value: [1440, 900]},
	{label: '1920 x 1080', value: [1920, 1080]},
	{label: '2650 x 1440', value: [2650, 1440]}
]
const selectWindowSize = ([width, height]) => {
	try {
		chrome.windows.getCurrent(function (w) {
			width += 16
			height += 120
			chrome.windows.update(w.id, {width, height, state: "normal"});
		})
	} catch (error) {
		console.error('chrome插件环境下使用')
	}
}


</script>

<style lang="less" scoped>
.popup_page {
	padding: 20px;
	width: 400px;
	height: auto;
	min-height: 500px;
}
</style>