import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Container from "@material-ui/core/Container";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Projects from "./components/projects/list";
import Project from "./components/projects/project";

function App() {
	return (
		<Container maxWidth="lg">
			<Router>
				<Route exact path="/" component={Projects} />
				<Route path="/project/:id" component={Project} />
			</Router>
		</Container>
	);
}

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default App;

// export default App;
