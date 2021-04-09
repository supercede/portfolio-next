import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <script
            src='https://kit.fontawesome.com/1759022df8.js'
            crossOrigin='anonymous'
          ></script>
        </Head>
        <body className='font-mono text-white bg-blackish relative'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
