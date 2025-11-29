<template>
  <h1 class="text-white center" v-if="tasks.lenght">Задач поки нема</h1>
	<div v-else>
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
								{{new Date().toLocaleDateString() }}
							</small>
						</strong>
					</p>
					<button class="btn primary" @click="navigate(task.id)">Подивитись</button>
				</div>
			</li>
		</ul>
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
		const tasks = store.getters.getTasks
		const activeTasks = computed(() => {
			return store.getters.getActiveTasks
		})
		
		return {
			tasks,
			navigate,
			activeTasks
		}
	},
  components: {AppStatus}
}
</script>
