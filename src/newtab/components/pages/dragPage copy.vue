<template>
	<div class="drag_page" >
		<a-card class="drag_box" title="组件列表">
				<VueDraggableNext>
					<div v-for="comItem in ComponentsList" :key="comItem.key">
						{{ comItem.title }}
					</div>
				</VueDraggableNext>
			</a-card>
		<a-card class="rendering_box" title="绘图区域">
			<VueDraggableNext>
			</VueDraggableNext>
		</a-card>
	</div>
</template>

<script setup>
import { onMounted, ref, computed} from 'vue'
import moment from 'moment';

import { VueDraggableNext } from "vue-draggable-next";

import Text from './dragComponents/text.vue'
import Input from './dragComponents/input.vue'


const ComponentsList = [
	{key: 'Text', title: 'Text', page: Text},
	{key: 'Input', title: 'Input', page: Input},
	
]

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