import { Button, Grid, ThemeProvider } from "@material-ui/core";
import React from "react";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import { useState, useEffect } from "react";
import DatePublished from "../published-date";
import PostCategory from "../return-post-category";
import Link from "next/link";
import { theme } from "../theme";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  justIn_topSectionCol_1_link: {
    backgroundColor: "white",
    padding: "1em",
    color: "#0a182a",
  },
  justin_column_1_hero_image: {
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  justin_column_1_hero_text: {
    color: "white",
    margin: "1em",
  },
  justin_column_1_hero_text_button: {
    border: "none",
    outline: "0",
    display: "inline-block",
    padding: "10px 25px",
    color: "black",
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
  },
});

const JustInSection = ({ data }) => {
  const [fetchedBlogs, setFetchedBlogs] = useState();
  const [checkIfBlogLoaded, setcheckIfBlogLoaded] = useState(false);
  useEffect(() => {
    setFetchedBlogs(data);
  }, []);

  const getTheFirstSixBlogs = fetchedBlogs && fetchedBlogs.slice(0, 6);
  const justIn_topSectionCol_1 =
    getTheFirstSixBlogs && getTheFirstSixBlogs.slice(0, 1);
  const justIn_topSectionCol_2 =
    getTheFirstSixBlogs && getTheFirstSixBlogs.slice(1, 2);
  const justin_bottomSectionObjects =
    getTheFirstSixBlogs && getTheFirstSixBlogs.slice(2, 6);
  const classes = useStyles();

  return (
    <div style={{margin:"0em 5em 0em 5em"}}>
      <div className="justin-sec-title-cont">
        <i
          class="fa fa-bar-chart"
          aria-hidden="true"
          style={{ color: "#ef5450", fontSize: "2em", marginRight: "0.5em" }}
        ></i>
        <span className="justin-sec-title-title"> JUST IN POSTS</span>
      </div>
      <Grid container spacing={2} className="just-in-top-cont">
        {justIn_topSectionCol_1 &&
          justIn_topSectionCol_1.map((item, index) => {
            return (
              <Grid
                item
                md={8}
                sm={12}
                key={index}
                className="justin-column-1-top"
              >
            
                <div className="justin-column-1-top-img">
                  <div
                    className={`${classes.justin_column_1_hero_image}`}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.featuredImage.node.mediaItemUrl})`,
                    }}
                  >
                    <div className={classes.justin_column_1_hero_text}>
                      <span className="justin-column-1-top-title">
                        <Link
                          href={item.uri}
                          className="justin-column-1-top-link"
                        >
                          {item.title}
                        </Link>
                      </span>
                      <br />
                      <br />
                      <span className="justin-column-1-top-details">
                        <DatePublished date={item.date} /> |{" "}
                        <PostCategory categoryObject={item.categories.nodes} />
                      </span>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}

        {justIn_topSectionCol_2 &&
          justIn_topSectionCol_2.map((item, index) => {
            return (
              <Grid item md={4} sm={12} key={index}>
                <div className="justin-column-2-top">
                  <div className="justin-column-2-top-img-cont">
                    <img
                      src={justIn_topSectionCol_2 && item.featuredImage.node.mediaItemUrl}
                      alt={item.title}
                      className="justin-column-2-img"
                    />
                    <div className="justin-column-2-post-details-cont">
                      <div className="justin-column-2-category">
                        <PostCategory categoryObject={item.categories.nodes} />
                      </div>
                      <div className="justin-column-2-title">
                        <Link
                          href={item.uri}
                          className="justin-column-2-top-link"
                        >
                          {item.title}
                        </Link>
                      </div>
                      <div className="justin-column-2-post-details">
                        <DatePublished date={item.date} />
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
      {/* JustInBootom Section */}
      <Grid container spacing={2} className="JustInBootom-cont">
        {justin_bottomSectionObjects &&
          justin_bottomSectionObjects.map((item, index) => {
            return (
              <Grid
                item
                md={3}
                xs={12}
                sm={6}
                lg={3}
                xl={3}
                className="JustInBootom-col-1"
                key={index}
              >
                <div className="JustInBottom-col-1-cont">
                  <img
                    src={item.featuredImage && item.featuredImage.node.mediaItemUrl}
                    alt={item.title}
                    className="JustInBottom-col-1-img"
                  />
                  <div className="JustInBottom-col-1-post-details">
                    <div className="JustInBottom-column-1-title">
                      <Link href={item.uri} className="justinBottom-col-1-link">
                        {item.title}
                      </Link>
                    </div>
                    <div className="JustInBottom-column-1-post-details">
                      <DatePublished date={item.date} /> |{" "}
                      <PostCategory categoryObject={item.categories.nodes} />
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default JustInSection;
