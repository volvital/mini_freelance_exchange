export default {
	namespaced: true,
	state() {
		return {
			task: {
				id: Date.now(),
				name: '',
				status: {
					title: 'Активна',
					type: 'primary'
				},
				deadline: new Date().toLocaleDateString(),
				description: ''
			}
		}
	},
	mutations: {
		updateTaskName (state, payload) {
			state.task.name = payload
		},
		updateTaskDeadline (state, payload) {
			state.task.deadline = payload
		},
		updateTaskDescription (state, payload) {
			state.task.description = payload
		},
		resetTask (state) {
			state.task.name = ''
			state.task.deadline = ''
			state.task.description = ''
		}
	},
	actions: {},
	getters: {
		getTask(state) {
			return state.task 
		}
	}
}