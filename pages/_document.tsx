// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

import "normalize.css";
import "@videoamp-private/preamp-ui/styles/themes.css";
import "@videoamp-private/preamp-ui/styles/main.css";

export default class extends Document {
  render() {
    return (
      <html className="va-dark">
        <Head>
            <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
