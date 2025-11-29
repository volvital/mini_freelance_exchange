<template>
  <span class='badge' :class="status.type">{{ status.title }}</span>
</template>

<script>
	export default {
		props: ['status']
	}
</script>