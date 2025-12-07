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
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
	setup() {
		const store = useStore()
		const router = useRouter()
		onMounted(() => {
			store.commit('task/resetTask')
		})
		const name = computed({
				get () {
					return store.state.task.name
				},
				set (value) {
					store.commit('task/updateTaskName', value)
				}
		})
		const deadline = computed({
				get () {
					return store.state.task.deadline
				},
				set (value) {
					store.commit('task/updateTaskDeadline', value)
				}
		})
		const description = computed({
				get () {
					return store.state.task.description
				},
				set (value) {
					store.commit('task/updateTaskDescription', value)
				}
		})
		const visible = computed({
			get() {
				return name.value !== '' && !!deadline.value && description.value !== ''
			}
		})
		const saveNewTask = () => {
			const task = {
        id: Date.now().toString(),
        name: name.value,
        deadline: new Date(deadline.value).setHours(23,59,59,999),
        description: description.value,
        status: new Date(deadline.value) < new Date() ? {title: 'Відмінена', type: 'danger'} : {title: 'Активна', type: 'primary'}
      }
			store.commit('setTasks', task)
			router.push('/')
		}
		return {name, deadline, description, visible, saveNewTask}
	}
}
</script>