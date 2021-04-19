import '../styles/globals.css'
import '../styles/global.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
      <div className='flex-grow' />
      <Footer />
    </div>
  )
}

library.add(fab)

export default MyApp
