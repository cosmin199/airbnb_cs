import Head from "next/head"
import Header from "../components/Header"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>cosmo airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* banner */}
    </div>
  )
}
