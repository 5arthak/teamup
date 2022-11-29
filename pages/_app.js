import '../styles/globals.css'
import {TeamUpProvider} from '../context/TeamUpContext'
import {MoralisProvider} from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider>
      <TeamUpProvider>
        <Component {...pageProps} />
      </TeamUpProvider>
    </MoralisProvider>
  )
}

export default MyApp
