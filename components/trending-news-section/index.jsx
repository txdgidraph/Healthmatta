import { Grid } from "@material-ui/core";
import React from "react";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import { useState, useEffect } from "react";
import DatePublished from "../published-date";
import PostCategory from "../return-post-category";
import Link from "next/link";
import SocialMediaButtons from "../social-media-button";

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

const trendNewsTopSection = (postsObjects) => {
  return (
    <div>
      <Grid container spacing={2}>
        {postsObjects &&
          postsObjects.map((item, index) => {
            return (
              <Grid item sm={12} md={6} key={index}>
                <div className="trendnews-topsec-postdetails-cont">
                  <Link href={item.uri}>
                    <img
                      src={item.featuredImage.node.mediaItemUrl}
                      alt={item.title}
                      className="trendnews-topsec-featuredimage"
                    />
                  </Link>
                  <div className="trendnews-topsec-post-info">
                    <span className="trendnews-topsec-date-cate">
                      <DatePublished date={item.date} /> |{" "}
                      <PostCategory categoryObject={item.categories.nodes} />
                    </span>
                    <span className="trendnews-topsec-title">
                      <Link
                        href={item.uri}
                        className="trendnews-topsec-title-link"
                      >
                        {item.title}
                      </Link>
                    </span>
                    <span className="trendnews-topsec-desc">{item.desc}</span>
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

const trendNewsHeadlineSection = (postsObjects) => {
  return (
    <div style={{ marginTop: "1em" }}>
      <Grid container spacing={2}>
        {postsObjects &&
          postsObjects.map((item, index) => {
            return (
              <Grid item xs={12} sm={12} md={6} key={index}>
                <div>
                  <div className="trendnews-headlsec-postdetails">
                    <div className="trendnews-headlsec-img-cont">
                      <Link href={item.uri}>
                        <img
                          src={item.featuredImage.node.mediaItemUrl}
                          alt={item.title}
                          className="trendnews-headlsec-img"
                        />
                      </Link>
                    </div>
                    <div className="trendnews-headlsec-postinfo-cont">
                      <span className="trendnews-headlsec-date-cate">
                        <DatePublished date={item.date} /> |{" "}
                        <PostCategory categoryObject={item.categories.nodes} />
                      </span>
                      <span className="trendnews-headlsec-title">
                        <Link
                          href={item.uri}
                          className="trendnews-headlsec-title-link"
                        >
                          {item.title}
                        </Link>
                      </span>
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

const TrendingNews = ({ Trend_News_Data, Just_In_Data }) => {
  const [trendNewsfetchedBlogs, setTrendNewsFetchedBlogs] = useState();
  const [justInfetchedBlogs, setJustINFetchedBlogs] = useState();

  useEffect(() => {
    setTrendNewsFetchedBlogs(Trend_News_Data);
    setJustINFetchedBlogs(Just_In_Data);
  }, []);

  const justInPostsLinksArr =
    justInfetchedBlogs &&
    justInfetchedBlogs.reduce((acc, currVal) => {
      acc.push(currVal.uri);
      return acc;
    }, []);

  const trendNewsBlogs_NotInJustInSection =
    trendNewsfetchedBlogs &&
    trendNewsfetchedBlogs.reduce((acc, currVal) => {
      if (!justInPostsLinksArr.includes(currVal.uri)) {
        acc.push(currVal);
      }
      return acc;
    }, []);

    const trendNewsTopSectionObjects =
    trendNewsBlogs_NotInJustInSection &&
    trendNewsBlogs_NotInJustInSection.slice(0, 2);
  const trendNewsHeadlineSectionObjects =
    trendNewsBlogs_NotInJustInSection &&
    trendNewsBlogs_NotInJustInSection.slice(2, 8);

  return (
    <div>
      <div className="fullTrendNews-Container">
        <div className="justin-sec-title-cont">
          <i
            class="fa fa-heart"
            aria-hidden="true"
            style={{ color: "#ef5450", fontSize: "2em", marginRight: "0.5em" }}
          ></i>
          <span className="justin-sec-title-title">Trending News Section</span>
        </div>
        {trendNewsfetchedBlogs && (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8} md={8}>
              {trendNewsTopSection(trendNewsTopSectionObjects)}
              {trendNewsHeadlineSection(trendNewsHeadlineSectionObjects)}
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
            <SocialMediaButtons/>
              <div className="trendnews-sec-title-cont">
                <h5 style={{ color: "#555" }}>This Week&apos;s</h5>
                <span className="trendnews-sec-title-title">
                  Leading Activities
                </span>
              </div>
             
              <Grid container>
                {TechBytesObjects.map((item, index) => {
                  return (
                    <Grid item xs={12} sm={12} md={12} key={index}>
                      <div className="trendnews-byteContainer">
                        <div>
                          <img
                            src={item.featuredImage}
                            alt=""
                            className="trendnews-byteImage"
                          />
                        </div>
                        <div className="trendnews-byteDetails-cont">
                          <span className="trendnews-byteTitle" style={{fontWeight:"bold"}}>
                            {item.featuredTitle}
                          </span>
                          <span className="trendnews-byteDate">
                            {item.byteDate}
                          </span>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};
export default TrendingNews;
