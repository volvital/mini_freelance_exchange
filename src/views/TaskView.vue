<template>
  <div class="card" v-if="task.id.toString() === id">
    <h2>{{ task.name }}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.deadline }}</p>
    <p><strong>Опис</strong>: {{ task.description }}</p>
    <div>
      <button class="btn">Взяти до работи</button>
      <button class="btn primary">Завершити</button>
      <button class="btn danger">Відмінити</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачі з id = <strong>{{ id }}</strong> нема.
  </h3>
</template>

<script>
import { useRoute } from 'vue-router';
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex';

export default {
	setup() {
		const store = useStore()
		const route = useRoute()
		const id = route.params.id
		const task = store.getters.getCurrentTask(id)
		return {
			task,
			id
		}
	},
  components: {AppStatus}
}
</script>

<style scoped>

</style>