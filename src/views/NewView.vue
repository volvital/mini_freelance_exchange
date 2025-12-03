<template>
  <form class="card" @submit.prevent="saveNewTask">
    <h1>Створити нову задачу</h1>
    <div class="form-control">
      <label for="title">Назва</label>
      <input type="text" id="title" v-model.trim="name">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="deadline">
    </div>

    <div class="form-control">
      <label for="description">Опис</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button type="submit" class="btn primary" :disabled="!visible">Створити</button>
  </form>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
	setup() {
		const store = useStore()
		onMounted(() => {
			store.commit('task/resetTask')
		})
		const router = useRouter()
		const task = store.getters['task/getTask']
		const name = computed({
				get () {
					return store.state.task.task.name
				},
				set (value) {
					store.commit('task/updateTaskName', value)
				}
		})
		const deadline = computed({
				get () {
					return store.state.task.task.deadline
				},
				set (value) {
					store.commit('task/updateTaskDeadline', value)
				}
		})
		const description = computed({
				get () {
					return store.state.task.task.description
				},
				set (value) {
					store.commit('task/updateTaskDescription', value)
				}
		})
		const visible = computed({
			get() {
				return !!name.value.length && !!deadline.value.length && !!description.value.length
			}
		})
		const saveNewTask = () => {
			store.commit('setTasks', task)
			router.push('/')
		}
		return {name, deadline, description, visible, saveNewTask}
	}
}
</script>