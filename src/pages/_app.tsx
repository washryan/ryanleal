import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import "../styles/globals.css"
import PageTransition from "../components/PageTransition"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/ryan-leal.jpg" as="image" />
        <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>
      <ChakraProvider>
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </ChakraProvider>
    </>
  )
}
