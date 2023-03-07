import "../styles/globals.css";
import "../components/TopBar/TopBar.css";
import "../components/header/header.css";
import "../components/posts/index.css";
import "../components/sidebar/index.css";
import "../components/post/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "../pages/single-post/index.css";
import "../components/single-post/index.css";
import "../components/just-in-posts-section/index.css";
import "../components/learn-section/index.css";
import "../components/trending-news-section/index.css";
import Layout from "../components/layout";
import "../pages/write/index.css";
import Head from "next/head";
import "../styles/index.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../components/theme";
import "../components/gadgets-devices-section/index.css";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Lora:ital,wght@1,400;1,500;1,600;1,700&family=Roboto:wght@100;300;400;500&family=Varela&family=Varela+Round&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
              integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </ThemeProvider>
  );
}

export default MyApp;
