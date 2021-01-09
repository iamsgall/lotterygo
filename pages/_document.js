import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* PRECONNECT AND PREFETCH FONTS GOOGLE */}
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com/'
            crossOrigin='true'
          />
          <link rel='dns-prefetch' href='https://fonts.gstatic.com/' />
          {/* <!-- BOOTSTRAP CDN --> */}
          <link
            async
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
            integrity='sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z'
            crossOrigin='anonymous'
          />
          {/* <!-- GOOGLE FONTS --> */}

          {/* <!-- ANIMATE CSS --> */}
          <link
            async
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
          />
        </Head>

        <body>
          <div id='particles-js'></div>
          <Main />
          <NextScript />

          {/* BOOTSTRAP_JS CDN */}
          <script
            defer
            src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
            integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
            crossOrigin='anonymous'
          ></script>
          <script
            defer
            src='https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js'
            integrity='sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN'
            crossOrigin='anonymous'
          ></script>
          <script
            defer
            src='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js'
            integrity='sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s'
            crossOrigin='anonymous'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
