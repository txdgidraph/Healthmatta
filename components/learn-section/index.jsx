import React from "react";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import { useState, useEffect } from "react";
import DatePublished from "../published-date";
import renderHTML from "react-render-html";
import Link from "next/link";
import Head from "next/head";

const LearnSection = () => {
  const [fetchedBlogs, setFetchedBlogs] = useState();
  useEffect(() => {
    async function fetchData() {
      const GET_POSTS = gql`
        query AllPostsQuery {
          posts(first: 10, where: { categoryName: "_learn-section" }) {
            nodes {
              title
              content
              date
              uri
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              categories {
                nodes {
                  name
                }
              }
              customMetaDescription {
                metaDescription
              }
            }
          }
        }
      `;
      const response = await client.query({
        query: GET_POSTS,
      });
      const posts = response?.data?.posts?.nodes;
      setFetchedBlogs(posts);
    }
    fetchData();
  }, []);

  const learnSectionPostObjects = fetchedBlogs && fetchedBlogs.slice(0, 4);
  
  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>

      </Head>
      <div className="justin-sec-title-cont">
        <i
          class="fa fa-book"
          aria-hidden="true"
          style={{ color: "#ef5450", fontSize: "2em", marginRight: "0.5em" }}
        ></i>
        <span className="justin-sec-title-title">Learn Section</span>
      </div>
      <div className="container-fluid">
        <div className="row">
          {learnSectionPostObjects &&
            learnSectionPostObjects.map((item, index) => {
              return (
                <div className="col-md-3 col-sm-12" key={index}>
                  <div className="LearnSec-Col-1-cont">
                    <Link href={item.uri}>
                      <div className="LearnSec-Col-1-img-cont">
                        <img
                          src={item.featuredImage.node.mediaItemUrl}
                          alt={item.title}
                          className="LearnSec-Col-1-img"
                        />
                        <div class="middle">
                          <div class="text">
                            {/* <i class="bi bi-book" style={{
                                color: "#fff",
                                fontSize: "2em",
                              }}></i> */}
                              <p style={{color:"white", textDecoration:"underline"}}>READ MORE</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="LearnSec-Col-1-post-details">
                      <span className="LearnSec-Col-1-category-date">
                        Tech News - <DatePublished date={item.date} />
                      </span>
                      <span className="LearnSec-Col-1-title">
                        <Link
                          href={item.uri}
                          className="LearnSec-headlsec-title-link"
                        >
                          {item.title}
                        </Link>
                      </span>
                      <span className="LearnSec-Col-1-desc">
                        {item.customMetaDescription.metaDescription}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="LearnSec-Load-More-btn-cont">
        <div className="LearnSec-button-icon-cont">
          <span>
            <button className="LearnSec-Load-More-btn">Load More Posts</button>
          </span>
          <span>
            <i class="bi bi-arrow-clockwise"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
