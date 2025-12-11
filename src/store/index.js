import { createStore } from "vuex";
import task from "./modules/task";
import { api } from "@/firebase";

export const store = createStore({
	modules:{
		task
	},
	state() {
		return {
			visible: true,
			tasks: []
		}
	},
	mutations: {
		addTask(state, payload) {
			state.tasks.push(payload)
		},
		updateTasks(state, payload) {
			state.tasks = payload
		}
	},
	actions: {
		addTask({ commit, dispatch }, payload) {
			commit('addTask', payload)
			dispatch('saveTasks')
		},
		async saveTasks(state) {
			try {
				await api.saveTasks(state.state.tasks)
			} catch (error) {
				console.log(error);
			}
			
		},
		async setTasks({commit}) {
			try {
				const tasks = await api.getTasks()
				commit('updateTasks', tasks)
			} catch (error) {
				console.log(error);
			}
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
			return state.tasks?.length || 0
		},
		getAmountOfActiveTasks(state) {
			return state.tasks?.filter(item => item.status.title === 'Активна').length
		},
		getCurrentTask: (state) => (id) => {
			return state.tasks?.find(item => item.id.toString() === id)
		}
	}
})