import { createStore } from "vuex";
import task from "./modules/task";

export const store = createStore({
	modules:{
		task
	},
	state() {
		return {
			visible: true,
			tasks: JSON.parse(localStorage.getItem('my-tasks')) ?? []
		}
	},
	mutations: {
		setTasks(state, payload) {
			state.tasks.push(payload)
			localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
		},
		saveTasks(state) {
			localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
		}
	},
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