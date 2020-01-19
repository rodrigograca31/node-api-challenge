import React from "react";

import { getProject } from "../../state/actionCreators";
import { connect } from "react-redux";
import { useParams } from "react-router";

const Project = ({ getProject, project }) => {
	let { id } = useParams();

	React.useEffect(() => {
		getProject(id);
	}, []);
	return (
		<>
			<h1>{project.title}</h1>
			<img
				src={"https://picsum.photos/seed/" + project.id + "/1200/600"}
				alt=""
				style={{ width: "100%" }}
			/>
			<p style={{ fontSize: "25px" }}>{project.description}</p>
			Actions:
			<br />
			<br />
			<ol>
				{project.actions.map(action => (
					<>
						<li>{action.description}</li>
						<br />
					</>
				))}
			</ol>
		</>
	);
};

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default connect(state => state, { getProject })(Project);

// export default connect(state => state, {
// 	getProjects,
// 	deleteProject
// })(Projects);
