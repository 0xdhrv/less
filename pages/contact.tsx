import { Box, Heading } from 'theme-ui'
import { NextSeo } from 'next-seo'

import Page from '../components/page'
import ContactForm from '../components/contactform'

function Contact() {
  return (
    <>
      <NextSeo title="Contact | Less" description="Less Blog" />
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
            <Heading as="h2">contact</Heading>
          </Box>
          <Box p={3}>
            <ContactForm />
          </Box>
        </Box>
      </Page>
    </>
  )
}

export default Contact
