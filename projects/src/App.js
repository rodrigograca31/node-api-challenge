import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { getProjects, deleteProject } from "./state/actionCreators";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 345
	},
	media: {
		height: 140
	},
	fab: {
		margin: theme.spacing(2),
		position: "fixed",
		bottom: 0,
		right: 0
	}
}));

function App({ projects, getProjects, deleteProject }) {
	React.useEffect(() => {
		getProjects();
	}, []);

	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			Total Projects: {projects.length}
			<br />
			<br />
			<Grid container spacing={2}>
				{projects.length === 0 ? "No projects atm" : ""}
				{projects.map(project => (
					<Grid item xs={3} key={project.id}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={
										"https://picsum.photos/seed/" +
										project.id +
										"/600/300"
									}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
									>
										{project.name}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										{project.description.slice(0, 10)}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<span
									className="delete"
									onClick={e => {
										deleteProject(project.id);
									}}
								>
									🗑️
								</span>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
			{/* {projects.map(project => {
				return (
					<div className="project" key={project.id}>
						{project.name}
						<br />
						{project.description}
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
			})} */}
		</Container>
	);
}

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default connect(state => state, {
	getProjects,
	deleteProject
})(App);

// export default App;
