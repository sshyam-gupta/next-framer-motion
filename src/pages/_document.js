import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta charSet="utf-8" />
          <noscript>
            <h5 className="no-script">
              It looks like your browser has JavaScript disabled.
            </h5>
          </noscript>
          <link
            rel="preload"
            href="/fonts/AirbnbCerealBook.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/AirbnbCerealLight.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/AirbnbCerealMedium.woff"
            as="font"
            crossOrigin=""
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />
        </Head>
        <body className="text-gray-700 bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
