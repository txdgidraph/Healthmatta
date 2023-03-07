import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Facebook, Twitter, Instagram, YouTube } from "@material-ui/icons";

const useStyles = makeStyles({
  socialMediaButtons: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px 0 4px 0",
    cursor: "pointer",
  },
});

const SocialMediaButtons = () => {
  const classes = useStyles();

  return (
    <div>
      <h3>Follow Us</h3>
      <Grid container spacing={2}>
        <Grid item md={6} sm={6} xs={6}>
          <div
            style={{
              backgroundColor: "#00acee",
            }}
            className={classes.socialMediaButtons}
          >
            <Twitter />
            <span style={{ paddingLeft: "4px", fontSize: "0.8em" }}>
              Twitter
            </span>
          </div>
        </Grid>
        <Grid item md={6} sm={6} xs={6}>
          <div
            style={{
              backgroundColor: "#4267B2",
            }}
            className={classes.socialMediaButtons}
          >
            <Facebook />
            <span style={{ paddingLeft: "4px", fontSize: "0.8em" }}>
              Facebook
            </span>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={6} sm={6} xs={6}>
          <div
            style={{
              backgroundColor: "#7757CA",
            }}
            className={classes.socialMediaButtons}
          >
            <Instagram />
            <span style={{ paddingLeft: "4px", fontSize: "0.8em" }}>
              Instagram
            </span>
          </div>
        </Grid>
        <Grid item md={6} sm={6} xs={6}>
          <div
            style={{
              backgroundColor: "#F60000",
            }}
            className={classes.socialMediaButtons}
          >
            <YouTube />
            <span style={{ paddingLeft: "4px", fontSize: "0.8em" }}>
              YouTube
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default SocialMediaButtons;
