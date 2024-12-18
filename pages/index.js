import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>home | miamibeachhotel</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Updated favicon link */}
        <link rel="icon" type="image/png" href="https://theblackoutszn.miamibeachhotel.li/icon.png" />
        <link rel="stylesheet" type="text/css" href="/styles.css" />
      </Head>

      <header>
        <div className="normal-tmp-headers">
          <h1>
            {/* If this link is external, you can use a normal <a> tag. 
                If it’s part of your Next.js site, use the Link component. */}
            <a href="https://miamibeachhotel.li">miamibeachhotel</a>
          </h1>
          <nav>
            <h2 style={{ display: 'inline-block' }}>
              <a href="https://media.miamibeachhotel.li">media</a>
            </h2>
            <h2 style={{ display: 'inline-block' }}>
              <a href="https://contact.miamibeachhotel.li">contact</a>
            </h2>
          </nav>
        </div>
      </header>

      <footer></footer>
    </>
  )
}
