import { Box, Flex, Heading } from 'theme-ui'
import Link from 'next/link'

function Footer() {
  return (
    <Flex
      sx={{
        width: '100%',
        borderWidth: 0,
        borderTopWidth: 2,
        borderStyle: 'solid',
        borderColor: 'muted',
      }}
    >
      <Box p={3}>
        <Heading as="h4">2020</Heading>
      </Box>
      <Box p={3} sx={{ flex: '1 1 auto' }}></Box>
      <Box p={3}>
        <Link href="/blog">
          <a>
            <Heading
              as="h4"
              sx={{
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              blog
            </Heading>
          </a>
        </Link>
      </Box>
      <Box p={3} sx={{ flex: '1 1 auto' }}></Box>
      <Box p={3}>
        <Link href="/about">
          <a>
            <Heading
              as="h4"
              sx={{
                paddingBottom: 3,
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              about
            </Heading>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <Heading
              as="h4"
              sx={{
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              contact
            </Heading>
          </a>
        </Link>
      </Box>
    </Flex>
  )
}

export default Footer
