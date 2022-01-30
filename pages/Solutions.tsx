import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function Solutions() {
  return (
    <div className="mx-auto max-w-7xl items-center justify-center text-center">
      <Head>
        <title>Simple Map</title>
      </Head>
      <div>
        <div>
          <h1 className="text-4xl">Game 1:</h1>
          <h2>Scroll down for the next Game</h2>
          <div className="">
            <h3>Game 1.1 (a,b,c):</h3>
            <div className="mx-auto flex justify-center p-4" id="2"></div>
            {/* Map einbinden */}
          </div>
          <div>
            <h3>Game 1.2 (a,b,c):</h3>
            <div className="mx-auto flex justify-center p-4" id="2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100755.57024612394!2d-118.33225732764105!3d34.065665088318916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf61e9d408cb%3A0x73ff07b1c2d6dadc!2sGriffith-Observatorium!5e0!3m2!1sde!2sca!4v1643584571405!5m2!1sde!2sca"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <h3>Game 1.3 (a,b,c):</h3>
            <div className="mx-auto flex justify-center p-4" id="3">
              {/* Map einbinden */}
            </div>
          </div>
          <div>
            <h3>Game 1.4 (a,b,c):</h3>
            <div className="mx-auto flex justify-center p-4" id="4"></div>
          </div>
          <div>
            <h3>Game 1.5 (a,b,c):</h3>
            <div className="mx-auto flex justify-center p-4" id="5">
              {/* Map einbinden */}
            </div>
          </div>
        </div>
        <div className="p-4 text-4xl">
          Game 2:
          <div className="pt-4">
            <Image src="/labyrinth1.png" width={300} height={300} />
            <Image src="/labyrinth2.png" width={300} height={300} />
            <Image src="/labyrinth3.png" width={300} height={300} />
          </div>
          <div>
            <Image src="/labyrinth4.png" width={300} height={300} />
            <Image src="/labyrinth5.png" width={300} height={300} />
            <Image src="/labyrinth6.png" width={300} height={300} />
          </div>
          <div>
            <Image src="/labyrinth7.png" width={300} height={300} />
            <Image src="/labyrinth8.png" width={300} height={300} />
          </div>
        </div>
        <div className="text-4xl">Game 3:</div>
        <div className="mt-4 mb-4">
          <a
            href="/"
            className="font bold mt-4 cursor-pointer rounded-2xl border-2 bg-yellow-300 p-1"
          >
            Go back to the starting screen:
          </a>
        </div>
      </div>
    </div>
  )
}

export default Solutions
