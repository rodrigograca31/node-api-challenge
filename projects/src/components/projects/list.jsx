import React from "react";

import { connect } from "react-redux";
import { getProjects, deleteProject } from "../../state/actionCreators";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useHistory } from "react-router-dom";

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

const Projects = ({ projects, getProjects, deleteProject }) => {
	const classes = useStyles();

	React.useEffect(() => {
		getProjects();
	}, []);

	let history = useHistory();

	const goTo = id => {
		history.push("/project/" + id);
	};

	return (
		<>
			Total Projects: {projects.length}
			<br />
			<br />
			<Grid container spacing={2}>
				{projects.length === 0 ? "No projects atm" : ""}
				{projects.map(project => (
					<Grid item xs={3} key={project.id}>
						<Card className={classes.card}>
							<CardActionArea onClick={e => goTo(project.id)}>
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
			;
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
		</>
	);
};

export default connect(state => state, {
	getProjects,
	deleteProject
})(Projects);
