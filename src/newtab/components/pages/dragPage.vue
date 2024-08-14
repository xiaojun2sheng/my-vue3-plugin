<template>
	<div class="drag_page" >
		<a-card class="drag_box" title="组件列表">
			组件列表
			<VueDraggableNext :group="groupA">
				<div v-for="comItem in ComponentsList" :key="comItem.key">
					{{ comItem.title }}
				</div>
			</VueDraggableNext>
		</a-card>
		<!-- 中间画布 -->
		<a-card class="rendering_box" title="绘图区域">
			<VueDraggableNext>
			</VueDraggableNext>
		</a-card>
	</div>
</template>

<script setup>
/**
 * https://www.npmjs.com/package/vue-draggable-next
 */
import { onMounted, ref, computed, reactive} from 'vue'
import moment from 'moment';

import { VueDraggableNext } from "vue-draggable-next";

import Text from './dragComponents/text.vue'
import Input from './dragComponents/input.vue'


const ComponentsList = [
	{key: 'Text', title: 'Text', page: Text},
	{key: 'Input', title: 'Input', page: Input},
]

const groupA = reactive({ 
	name:'itxst',
	pull:true,//允许拖出,如果设置 字符串'clone' 表示该组拖出的元素会被克隆
	put:true  //允许拖入
});


</script>

<style lang="less" scoped>
.drag_page{
	width: 100%;
	height: calc(100% - 100px);
	display: flex;
	justify-content: center;
	.drag_box {
		width: 20%;
	}
	.rendering_box {
		width: 70%;
		margin-left: 8px;
	}
}
</style>