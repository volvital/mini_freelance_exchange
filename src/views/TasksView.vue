<template>
	<div v-if="amtTasks">
		<h3 class="text-white">Всього активних задач: {{ activeTasks }}</h3>
		<ul>
			<li v-for="task in tasks" :key="task.id">
				<div class="card">
					<h2 class="card-title">
						{{ task.name }}
						<AppStatus :status="task.status" />
					</h2>
					<p>
						<strong>
							<small>
								{{ task.deadline.split('-').reverse().join('.') }}
							</small>
						</strong>
					</p>
					<button class="btn primary" @click="navigate(task.id)">Подивитись</button>
				</div>
			</li>
		</ul>
	</div>
	<div v-else>
		<h1 class="text-white center">Задач поки нема</h1>
	</div>
</template>

<script>
import { computed } from 'vue';
import AppStatus from '../components/AppStatus'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
	setup () {
		const router = useRouter()
		const store = useStore()
		const navigate = (id) => router.push('/task/' + id)
		const tasks = store.getters['getTasks']
		const amtTasks = store.getters.getAmountOfTasks
		const activeTasks = computed(() => {
			return store.getters.getAmountOfActiveTasks
		})
		
		return {
			tasks,
			amtTasks,
			navigate,
			activeTasks
		}
	},
  components: {AppStatus}
}
</script>
