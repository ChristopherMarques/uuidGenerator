import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head/>
        <body className="bg-white dark:bg-gray-800">
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
          <Main />
          <NextScript />
        </body>
        <footer>
          Built with <p title="Love">❤</p> by <a href="https://github.com/ChristopherMarques" target="_blank" className="text-indigo-600">Christopher Corrêa</a>
        </footer>
      </Html>
    )
  }
}

export default MyDocument