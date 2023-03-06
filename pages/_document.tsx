import { Html, Head, Main, NextScript } from 'next/document'
//these are only renderd on the server; possible, but unlikely I will ever want to mess with this.

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
