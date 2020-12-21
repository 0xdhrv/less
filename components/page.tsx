import Header from './header'
import Footer from './footer'

import { Container } from 'theme-ui'
import { motion } from 'framer-motion'

let easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    x: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
}

interface PageProps {
  children: any
}

function Page({ children }: PageProps) {
  return (
    <>
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            px: [3, 3, 5],
            py: [3, 3, 5],
            maxWidth: '768px',
          }}
        >
          <Header
            sx={{
              width: '100%',
            }}
          />
          <Container
            sx={{
              width: '100%',
              flex: '1 1 auto',
              py: [2, 3, 5],
              px: [1, 2, 4],
            }}
          >
            <motion.div variants={fadeInUp}>{children}</motion.div>
          </Container>
          <Footer
            sx={{
              width: '100%',
            }}
          />
        </Container>
      </motion.div>
    </>
  )
}

export default Page
