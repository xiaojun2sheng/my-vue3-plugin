<template>
	<div class="popup_page" >
		<div>
			<a-upload
				:showUploadList="false"
				name="file"
				@change="handleChange"
				>
				<a-button>
					<upload-outlined></upload-outlined>
					图片上传
				</a-button>
			</a-upload>
			<a-image v-if="uploadImg" :width="200" :src="uploadImg" />
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, computed} from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue';

const fileList = ref([]);
let uploadImg = ref('')



const handleChange = info => {
	var blob = new Blob([info.file.originFileObj], { type: 'image/jpeg' });
	var blobURL = URL.createObjectURL(blob);
	uploadImg.value = blobURL;
};

</script>

<style lang="less" scoped>
.popup_page{
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	img {
		width: 100px;
		height: 100px;
		display: inline-block;
	}
}
</style>