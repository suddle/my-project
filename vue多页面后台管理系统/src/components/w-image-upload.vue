<template>
<!-- 组件获取上传图片组件 -->
	<div :style="imageStyle" @click="selectImg" class="image-upload-box">
			<input type="file" @change="handleChangeSelect($event)" ref="img" accept="image/*" style="display: none">
			<i class="el-icon-plus" v-if="!imgLink"></i>
			<div v-if="imgLink" :style="imageStyle">
				<img :src="imgLink" alt="" class="upload-img">
			</div>
	</div>
</template>
<script>
export default {
	name: 'w-image-upload',
	data() {
		return {

			imageStyle:{
				height:200+"px",
				width:100+"px",

				
			},
			imgLink:''
		
		}
	},
	methods:{
		selectImg(){
			this.$refs.img.click();
		},
		handleChangeSelect(e){
			console.log(e.target.files[0]);
			let _file = this.$refs.img;
			let _this = this;
			//console.log(_fileUrl.value);
			let _reader = new FileReader();
			_reader.onload = (function(file){
				return function(e){
					//console.log(this.result);
					_this.imgLink = this.result;
					_this.cb(this.result);

				}
			})(e.target.files[0]);
			_reader.readAsDataURL(e.target.files[0]);
			//this.imgUrl = _fileUrl.value;
		}
	},
	mounted(){
		this.imageStyle.width = this.width +"px";
		this.imageStyle.height = this.height +"px";
		this.imgLink = this.imgUrl;
	},
	props:["width","height","imgUrl","cb"]
}
</script>
<style scoped lang="scss">
	.upload-img{
		width:100%;
		height:100%;

	}
	.image-upload-box{
		border:1px dashed #ccc;
		
		position: relative;
	}
	.el-icon-plus{
		font-size:.2rem;

		position: absolute;
		left:40%;
		top:40%;
	}

</style>
