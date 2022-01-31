import Head from 'next/head'
import { useState } from 'react'
import Hero from '../components/Hero'

export default function Home() {
  var [lives, setLives] = useState('')
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  )
}
