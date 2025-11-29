import { createStore } from "vuex";

export const store = createStore({
	state() {
		return {
			visible: true,
			tasks: [
				{
					id: 1234567890,
					name: 'Головна задача',
					status: {
						title: 'Активна',
						type: 'primary'
					},
					deadline: new Date().toLocaleDateString(),
					description: 'Це головна задача'
				},
				{
					id: 987654321,
					name: 'Друга задача',
					status: {
						title: 'Завершена',
						type: 'primary'
					},
					deadline: new Date().toLocaleDateString(),
					description: 'Це друга головна задача'
				}
			]
		}
	},
	mutations: {},
	actions: {},
	getters: {
		getIsVisible(state) {
			return state.visible
		},
		getTasks(state) {
			return state.tasks
		},
		getAmountOfTasks(state) {
			return state.tasks.length
		},
		getAmountOfActiveTasks(state) {
			return state.tasks.filter(item => item.status.title === 'Активна').length
		},
		getCurrentTask: (state) => (id) => {
			return state.tasks.find(item => item.id.toString() === id)
		}
	}
})