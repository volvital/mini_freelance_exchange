import { createRouter, createWebHistory } from "vue-router";
import TaskView from "./views/TaskView.vue";
import NewView from "./views/NewView.vue";
import TasksView from "./views/TasksView.vue";


export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/new', component: NewView },
    { path: '/task/:id', component: TaskView },
    { path: '/', component: TasksView },
	],
	linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})