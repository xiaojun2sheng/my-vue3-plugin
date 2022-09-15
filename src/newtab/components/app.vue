<template>
	<div class="popup_page" :style="`background: ${pageStyle.bg}`">
		<!-- <a-button type="primary" @click="change">{{ name }}</a-button> -->
		
		<label :style="`color: ${pageStyle.color}`">
			{{ date }}
		</label>

		<div :style="`color: ${pageStyle.color}`">
			{{ date2 }}
		</div>

		<a-button type="link">
			<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=qbgskcd">
				联系我
			</a>
		</a-button>

	</div>
</template>

<script setup>
import { onMounted, ref, computed} from 'vue'
import moment from 'moment';
import 'moment/dist/locale/zh-cn'

const pageStyleList = [
	{bg: '#002ea6', color: '#ffe78f'},
	{bg: '#f1f2e5', color: '#d7000f'},
	{bg: '#000010', color: '#ff770f'},
	{bg: '#91b822', color: '#ffe76f'},
	{bg: '#cda59e', color: '#8ba583'},
	{bg: '#80d1c8', color: '#ffd4a9'},
]

let pageStyle = computed(() => {
	let ramdom = Math.floor(Math.random() * 6)
	return pageStyleList[ramdom]
})

onMounted(() => {

})

let date = computed(() => {
	return moment().format('LLLL'); // 2022年9月2日星期五晚上6点25分 moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
})

let date2 = computed(() => {
	return moment().format("MMM Do YY"); // 2022年9月2日星期五晚上6点25分 moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
})



</script>

<style lang="less" scoped>
.popup_page{
	width: 100%;
	height: 100%;
}
</style>