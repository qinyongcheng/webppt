<template>
	<div>
		<input v-model="value1" type="number" />
		<input v-model="value2" type="number" />
		<button @click="handleSum">求和</button>
		<h1>结果：{{ result }}</h1>
	</div>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
import Webppt from '@packages/webppt/js';
const state = reactive({
	value1: 0 as number,
	value2: 0 as number,
	result: 0
});
//暴露给视图template，模板取值不需要前缀state.
const { value1, value2, result } = toRefs(state);
//执行带参数查询
const handleSum = () => {
	alert(Webppt);
	//state.result = sum(state.value1, state.value2);
};
</script>
