import { getDatabase, ref, set, get } from "firebase/database";

class API {
	database
	constructor() {
		this.database = getDatabase()
	}

	saveTasks = async (tasks) => {
		await set(ref(this.database, 'tasks'), tasks)
	}

	getTasks = async () => {
		let tasks = []
		await get(ref(this.database, 'tasks'))
		.then((snapshot) => {
			if (snapshot.exists()) {
					tasks = snapshot.val() || []
				} else {
					console.log("No data available");
				}
		})
		.catch((error) => {
				console.error(error);
			});
		return tasks
	}
}

export default API