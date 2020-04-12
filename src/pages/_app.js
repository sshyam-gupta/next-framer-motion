import "../styles/main.css";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { Head } from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </div>
      <style jsx global>{`
        @font-face {
          font-family: "Airbnb Cereal Book";
          src: url("/fonts/AirbnbCerealBook.woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Airbnb Cereal Light";
          src: url("/fonts/AirbnbCerealLight.woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Airbnb Cereal Medium";
          src: url("/fonts/AirbnbCerealMedium.woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
