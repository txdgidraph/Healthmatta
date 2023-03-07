import Head from "next/head";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import SideBar from "../components/sidebar";

export default function SlugPage({ post }) {
  console.log(post);
  return (
    <div>
      
      <main>
        <div className="container-fluid uri-header">
          <div className="row">
            <div className="col-sm-12 col-md-9">
              <div className="uri-featuredImageCont">
                <div className="uri-post-title">
                  <h1>{post.title}</h1>
                </div>
                <div className="post-info-detail-cont">
                  <span>
                    <img
                      src="/assets/user-one.jpeg"
                      alt=""
                      className="uri-userpost-img"
                    />
                  </span>
                  <span>
                    ✍️ &nbsp;&nbsp;
                    {`${post.author.node.firstName} ${post.author.node.lastName}`}{" "}
                    | 🗓️ &nbsp;&nbsp;{new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <img
                  src={post.featuredImage.node.mediaItemUrl}
                  alt=""
                  className="uri-featuredImage"
                />
              </div>
              <div className="post-article-content">
                <article
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></article>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <SideBar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export async function getStaticPaths() {
  const GET_POST_URIS = gql`
    query GetPostUris {
      posts {
        nodes {
          uri
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POST_URIS,
  });
  const uris = response?.data?.posts?.nodes?.map((post) => post.uri) || [];
  const paths = uris.map((uri) => ({ params: { uri } }));
  return {
    paths,
    fallback: 'blocking', // Use 'blocking' if you want to generate the page on the first request.
  };
}


export async function getStaticProps({ params }) {
  const GET_POST = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        date
        uri
        author {
          node {
            firstName
            lastName
          }
        }
        featuredImage {
          node {
            mediaItemUrl
            fileSize
            mediaType
            mimeType
            sizes
          }
        }
        categories {
          nodes {
            name
          }
        }
        
      }
    }
  `;
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.uri,
    },
  });
  const post = response?.data?.post;
  return {
    props: {
      post,
    },
  };
}


// export async function getServerSideProps({ params }) {
//   const GET_POST = gql`
//     query GetPostByURI($id: ID!) {
//       post(id: $id, idType: URI) {
//         title
//         content
//         date
//         uri
//         author {
//           node {
//             firstName
//             lastName
//           }
//         }
//         featuredImage {
//           node {
//             mediaItemUrl
//             fileSize
//             mediaType
//             mimeType
//             sizes
//           }
//         }
//         categories {
//           nodes {
//             name
//           }
//         }
        
//       }
//     }
//   `;
//   const response = await client.query({
//     query: GET_POST,
//     variables: {
//       id: params.uri,
//     },
//   });
//   const post = response?.data?.post;
//   return {
//     props: {
//       post,
//     },
//   };
// }