import * as types from "./actionTypes";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

// Step 7: Design action creator functions
export const getProjects = () => dispatch => {
	axios
		.get("/api/projects")
		.then(response => {
			dispatch({
				type: types.GET_PROJECTS,
				payload: {
					projects: response.data
				}
			});
		})
		.catch(error => {
			console.log(error);

			console.log("error!!!");
		});
};

// Step 7: Design action creator functions
export const deleteProject = id => dispatch => {
	axios
		.delete("/api/projects/" + id)
		.then(response => {
			dispatch({
				type: types.DELETE_PROJECT,
				payload: {
					data: response.data
				}
			});
		})
		.catch(error => {
			console.log(error);

			console.log("error!!!");
		});
};
