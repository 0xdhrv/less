import { Box, Text, Heading } from 'theme-ui'
import { NextSeo } from 'next-seo'

import Page from '../components/page'

function About() {
  return (
    <>
      <NextSeo title="About | Less" description="Less Blog" />
      <Page>
        <Box
          sx={{
            maxWidth: 768,
            minHeight: 288,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            alignContent: 'stretch',
          }}
        >
          <Box p={3}>
            <Heading as="h2">about</Heading>
          </Box>
          <Box p={3}>
            <Text as="p">
              Next.js + Notion based Blog
              <br />
            </Text>
          </Box>
        </Box>
      </Page>
    </>
  )
}

export default About
