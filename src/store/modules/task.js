export default {
	namespaced: true,
	state() {
		return {
			name: '',
			deadline: null,
			description: ''
		}
	},
	mutations: {
		updateTaskName (state, payload) {
			state.name = payload
		},
		updateTaskDeadline (state, payload) {
			state.deadline = payload
		},
		updateTaskDescription (state, payload) {
			state.description = payload
		},
		resetTask (state) {
			state.name = ''
			state.deadline = ''
			state.description = ''
		}
	}
}