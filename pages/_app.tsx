import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [clickAmount, setClickAmount] = useState(0)
  const increment = () => setClickAmount((amount) => amount + 1)

  return (
    <Component {...pageProps} clickAmount={clickAmount} increment={increment} />
  )
}

export default MyApp
