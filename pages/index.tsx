import { Box, useThemeUI } from 'theme-ui'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

import Page from '../components/page'

function HomePage() {
  const { theme } = useThemeUI()
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={theme.colors?.primary} />
      </Head>
      <NextSeo title="Home | Less" description="Less Blog" />
      <Page>
        <Box>Welcome to Less</Box>
      </Page>
    </>
  )
}

export default HomePage
