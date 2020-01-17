import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { getProjects, deleteProject } from "./state/actionCreators";

function App({ projects, getProjects, deleteProject }) {
	React.useEffect(() => {
		getProjects();
	}, []);

	return (
		<div className="App">
			Total Projects: {projects.length}
			<br />
			<br />
			{projects.map(project => {
				return (
					<div className="project" key={project.id}>
						{project.name}
						<br />
						<br />
						<span
							onClick={e => {
								deleteProject(project.id);
							}}
						>
							🗑️
						</span>
						<br />
					</div>
				);
			})}
		</div>
	);
}

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default connect(state => state, {
	getProjects,
	deleteProject
})(App);

// export default App;
