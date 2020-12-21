import { Flex, Box, Heading, useColorMode, useThemeUI, IconButton } from 'theme-ui'
import { Sun, Moon } from 'react-feather'
import Link from 'next/link'

function Header() {
  const [colorMode, setColorMode] = useColorMode()
  const { theme } = useThemeUI()
  return (
    <Flex
      sx={{
        p: 3,
        width: '100%',
        borderWidth: 0,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: 'muted',
      }}
    >
      <Box>
        <Link href="/">
          <a>
            <Heading
              as="h3"
              sx={{
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              less.
            </Heading>
          </a>
        </Link>
      </Box>
      <Box sx={{ flex: '1 1 auto' }}></Box>
      <Box></Box>
      <Box sx={{ flex: '1 1 auto' }}></Box>
      <Box>
        <IconButton
          aria-label="Toggle Light/Dark"
          sx={{
            cursor: 'pointer',
          }}
          onClick={(_event: React.MouseEvent<HTMLElement>) => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }}
        >
          {colorMode === 'default' ? (
            <Moon color={theme.colors?.primary} />
          ) : (
            <Sun color={theme.colors?.primary} />
          )}
        </IconButton>
      </Box>
    </Flex>
  )
}

export default Header
