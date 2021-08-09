<template>
	<div>
		<h1>Number is <span>{{counter}}</span></h1>
		<button @click="incrementCounter">Incrementar</button>
		<button @click="decrementCounter">Decrementar</button>
	</div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
	setup() {
		let counter = ref(0);
		const incrementCounter = () => counter.value += 1;
		const decrementCounter = () => counter.value -= 1;

		return { counter, incrementCounter, decrementCounter}
	},
})
</script>
