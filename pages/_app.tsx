import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { DefaultSeo } from 'next-seo'
import dynamic from 'next/dynamic'

import SEO from '../next-seo.config'
import theme from '../styles/theme'

import '../styles/style.css'
import 'prismjs/themes/prism-tomorrow.css'

const ProgressBar = dynamic(
  () => {
    return import('../components/progressbar')
  },
  { ssr: false },
)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ProgressBar />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
