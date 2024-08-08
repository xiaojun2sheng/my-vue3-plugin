<template>
	<div class="popup_page" :style="`background: ${pageStyle.bg}`">
		<div class="say_hello">
			<label :style="`color: ${pageStyle.color}`">
				{{ date }}
			</label>

			<div :style="`color: ${pageStyle.color}`">
			</div>

			<a-button @click="changeBg">
				换个色
			</a-button>
		</div>

	</div>
</template>

<script setup>
import { onMounted, ref, computed} from 'vue'
import moment from 'moment';

const pageStyleList = [
	{bg: '#002ea6', color: '#ffe78f'},
	{bg: '#f1f2e5', color: '#d7000f'},
	{bg: '#000010', color: '#ff770f'},
	{bg: '#91b822', color: '#ffe76f'},
	{bg: '#cda59e', color: '#8ba583'},
	{bg: '#80d1c8', color: '#ffd4a9'},
]

let pageStyle = ref({})

const changeBg = () => {
	let ramdom = Math.floor(Math.random() * 6)
	pageStyle.value = pageStyleList[ramdom]
}

onMounted(() => {
	changeBg()
})

let date = computed(() => {
	return moment().format('YYYY-MM-DD'); // 2022年9月2日星期五晚上6点25分 moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
})

let date2 = computed(() => {
	return moment().format("MMM Do YY"); // 2022年9月2日星期五晚上6点25分 moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
})


</script>

<style lang="less" scoped>
.popup_page{
	width: 100%;
	height: 100%; //calc(100% - 30px);
}
</style>