import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  sectionContainer: {
    backgroundColor: "#E8F4F0",
    marginTop: "3em",
    paddingBottom: "2em",
  },
  image: {
    borderRadius: "50%",
    width: 200,
    height: 200,
    objectFit: "cover",
    overflow: "hidden",
  },
  sectionTitle: {
    textAlign: "center",
    paddingTop: "1em",
    paddingBottom:"1em",
    fontSize:"1.5em"
  },
  optionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  optionTitle:{
    fontSize:"1.4em",
    paddingTop:"5px"
  }
});

const exploreOptionsObject = [
  {
    imageUrl: "/assets/sexual-health.png",
    optionTitle: "Sexual Health",
  },
  {
    imageUrl: "/assets/fitness.png",
    optionTitle: "Fitness",
  },
  {
    imageUrl: "/assets/recipes.png",
    optionTitle: "Recipes",
  },
  {
    imageUrl: "/assets/mental-health.png",
    optionTitle: "Mental health",
  },
];

function ExploreMoreOptions() {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div className={classes.sectionContainer}>
      <h1 className={classes.sectionTitle}>Explore More</h1>
      <Grid container spacing={2}>
        {exploreOptionsObject.map((item) => {
          return (
            <Grid item xs={6} sm={3} md={3}>
              <div className={classes.optionContainer}>
                <img
                  src={item.imageUrl}
                  alt="avatar"
                  className={classes.image}
                  style={{
                    width: matches ? "150px" : "200px",
                    height: matches ? "150px" : "200px",
                  }}
                />
                <h3 className={classes.optionTitle}>{item.optionTitle}</h3>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <div></div>
    </div>
  );
}

export default ExploreMoreOptions;
