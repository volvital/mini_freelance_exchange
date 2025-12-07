<template>
  <div class="card" v-if="task.id.toString() === id">
    <h2>{{ task.name }}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.deadline).toLocaleDateString() }}</p>
    <p><strong>Опис</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="changeStatus">Взяти до работи</button>
      <button class="btn primary" @click="finishTask">Завершити</button>
      <button class="btn danger" @click="cancelTask">Відмінити</button>
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
		const changeStatus = () => {
			task.status.type = 'warning'
			task.status.title = 'Виконується'
			store.commit('saveTasks')
		}
		const finishTask = () => {
			task.status.type = 'primary'
			task.status.title = 'Завершено'
			store.commit('saveTasks')
		}
		const cancelTask = () => {
			task.status.type = 'danger'
			task.status.title = 'Відмінена'
			store.commit('saveTasks')
		}
		return {
			task,
			id,
			changeStatus,
			finishTask,
			cancelTask
		}
	},
  components: {AppStatus}
}
</script>

<style scoped>

</style>