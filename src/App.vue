<template>
	<div class="webppt-wrap">
		<div class="page" data-animation="1">
			<div class="slide"><p class="page-center pt-page-rotateCubeLeftIn pt-page-delay500">第1页第1张</p></div>
			<div class="slide"><p class="page-center animate__animated animate__rubberBand pt-page-delay500">第1页第2张</p></div>
			<div class="slide" data-animation="67"><p>第1页第3张</p></div>
		</div>
		<div class="page">
			<div class="slide"><p>第2页第1张</p></div>
			<div class="slide"><p>第2页第2张</p></div>
		</div>
		<div class="page">第3页</div>
		<div class="css_icon img-up pt-page-moveIconUp"></div>
		<div class="css_icon img-left pt-page-moveIconLeft"></div>
		<div class="css_icon img-right pt-page-moveIconRight"></div>
		<div class="screenfull-menu">全屏</div>
	</div>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue';
import webppt from '@packages/webppt/js/index.js';
import '@packages/webppt/css/index.css';
const state = reactive({
	value1: 0 as number
});
//暴露给视图template，模板取值不需要前缀state.
const { value1 } = toRefs(state);

onMounted(() => {
	webppt.start();
});
</script>
<style>
#app {
	height: 100%;
}
body {
	background-color: aliceblue;
}

.page {
	color: #333;
	background-color: lightpink;
}
.slide {
	background-color: coral;
}
</style>
