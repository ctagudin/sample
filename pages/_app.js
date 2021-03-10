import { AppProps } from 'next/app'
import "../styles/index.css"
import "../styles/main.scss"
import '@fortawesome/fontawesome-free/css/all.min.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
