import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const TechBytesObjects = [
  {
    featuredImage: "https://technext.ng/wp-content/uploads/2022/12/SBFCZ.png",
    featuredTitle: "8 Individuals who defined the Global Tech Space in 2022",
    byteDate: "December 21, 2022",
  },
  {
    featuredImage: "https://technext.ng/wp-content/uploads/2022/12/SBFCZ.png",
    featuredTitle: "8 Individuals who defined the Global Tech Space in 2022",
    byteDate: "December 21, 2022",
  },
  {
    featuredImage: "https://technext.ng/wp-content/uploads/2022/12/SBFCZ.png",
    featuredTitle: "8 Individuals who defined the Global Tech Space in 2022",
    byteDate: "December 21, 2022",
  },
  {
    featuredImage: "https://technext.ng/wp-content/uploads/2022/12/SBFCZ.png",
    featuredTitle: "8 Individuals who defined the Global Tech Space in 2022",
    byteDate: "December 21, 2022",
  },
  {
    featuredImage: "https://technext.ng/wp-content/uploads/2022/12/SBFCZ.png",
    featuredTitle: "8 Individuals who defined the Global Tech Space in 2022",
    byteDate: "December 21, 2022",
  },
];
const useStyles = makeStyles({
  justIn_topSectionCol_1_link: {
    backgroundColor: "white",
    padding: "1em",
    color: "#0a182a",
  },
  justin_column_1_hero_image: {
    //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://sub1.netmatta.com/wp-content/uploads/2022/12/wallpaper-four-scaled.jpeg")`,
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

function GadgetsDevices() {
  //Check if client-side JavaScript is mounted before applying MUI styles
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const classes = useStyles();
  return (
    <div style={{ margin: "0em 5em 0em 5em" }}>
      <div className="justin-sec-title-cont">
        <i
          class="bi bi-cpu"
          style={{ color: "#ef5450", fontSize: "2em", marginRight: "0.5em" }}
        ></i>
        <span className="justin-sec-title-title"> Gadgets and Devices</span>
      </div>
      <div className="gadgets-cont">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <div style={{ height: "100%" }}>
              <div
                className={`${mounted && classes.justin_column_1_hero_image}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/wallpaper-one.jpeg)`,
                }}
              >
                <div className={mounted && classes.justin_column_1_hero_text}>
                  <span className="justin-column-1-top-title">
                    <Link href={"#"} className="justin-column-1-top-link">
                      Jack Dorsey thinks Twitter should’ve been allowed to be a
                      hellscape
                    </Link>
                  </span>
                  <br />
                  <br />
                  <span className="justin-column-1-top-details">
                    <span>February 26 2023</span> | <span>Technology</span>
                  </span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container>
              {TechBytesObjects.map((item, index) => {
                return (
                  <Grid item xs={12} md={12} key={index}>
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          height: "100px",
                          width: "100px",
                          padding: "5px 0px 5px 0px",
                          marginRight: "10px",
                        }}
                      >
                        <img
                          src={item.featuredImage}
                          className="gadgets-device-section-headline-img"
                        />
                      </div>
                      <div style={{ fontFamily: '"Josefin Sans", sans-serif' }}>
                        <div style={{ fontSize: "0.8em", marginTop: "0.6em" }}>
                          <span
                            style={{
                              marginRight: "1em",
                              color: "#3FACE0",
                              fontWeight: "400",
                            }}
                          >
                            TECHNOLOGY
                          </span>
                          <span>March 26, 2020</span>
                        </div>
                        <p className="gadgets-device-section-headline-title">
                          {item.featuredTitle}
                        </p>
                      </div>
                      <div style={{ borderBottom: "dotted" }}></div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default GadgetsDevices;
