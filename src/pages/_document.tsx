import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Nunito:ital,wght@0,400;0,700;1,400&family=Poppins:wght@400;600&family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            async
            defer
            src="https://static.cdn.prismic.io/prismic.js?new=true&repo=spacetraveling-rocketchallenge"
          />
        </body>
      </Html>
    );
  }
}
