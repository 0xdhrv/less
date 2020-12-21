import Router from 'next/router'
import NProgress from 'nprogress'

import { useThemeUI } from 'theme-ui'

let timer: NodeJS.Timeout
let state: string
let activeRequests = 0
const delay = 250

function load() {
  if (state === 'loading') {
    return
  }

  state = 'loading'

  timer = setTimeout(function () {
    NProgress.start()
  }, delay) // only show progress bar if it takes longer than the delay
}

function stop() {
  if (activeRequests > 0) {
    return
  }

  state = 'stop'

  clearTimeout(timer)
  NProgress.done()
}

Router.events.on('routeChangeStart', load)
Router.events.on('routeChangeComplete', stop)
Router.events.on('routeChangeError', stop)

const originalFetch = window.fetch
window.fetch = async function (...args) {
  if (activeRequests === 0) {
    load()
  }

  activeRequests++

  try {
    const response = await originalFetch(...args)
    return response
  } catch (error) {
    return Promise.reject(error)
  } finally {
    activeRequests -= 1
    if (activeRequests === 0) {
      stop()
    }
  }
}

export default function ProgressBar() {
  const { theme } = useThemeUI()
  const color = theme.colors?.primary
  const height = 4
  return (
    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${color};
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: ${height}px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 16px ${color}, 0 0 16px ${color};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
    `}</style>
  )
}
