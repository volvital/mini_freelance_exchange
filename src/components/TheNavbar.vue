<template>
	<header class="navbar" v-if="visible">
    <h3>Freelance exchange</h3>
    <ul class="navbar-menu">
      <li><router-link to="/new">Нова задача</router-link></li>
      <li><router-link to="/">Перелік задач</router-link></li>
    </ul>
  </header>
</template>
<script>
import { useStore } from 'vuex';

export default {
	setup () {
		const store = useStore()
		return {
			visible: store.getters.getIsVisible
		}
	}
}
</script>
<style>
	
</style>