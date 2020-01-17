import * as types from "./actionTypes";

// STEP 1: Decide state slices
const initialState = {
	projects: [],
	project: {
		actions: []
	}
};

// STEP 3: create reducers
export function projectsReducer(projects = initialState.projects, action) {
	switch (action.type) {
		case types.GET_PROJECTS:
			return action.payload.projects;
		case types.DELETE_PROJECT:
			//action.payload.data
			return projects.filter(
				project => project.id !== action.payload.data.id
			);
		default:
			return projects;
	}
}

// STEP 3: create reducers
export function projectReducer(project = initialState.project, action) {
	switch (action.type) {
		case types.GET_PROJECT:
			return action.payload.project;
		default:
			return project;
	}
}
