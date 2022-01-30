import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

let map: google.maps.Map

function initMap(): void {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  })
}

function Solutions() {
  return (
    <div className="mx-auto max-w-7xl items-center justify-center text-center">
      <Head>
        <title>Simple Map</title>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

        <script src="./Solutions.tsx"></script>
      </Head>
      <body>
        <div id="map"></div>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXO3QMSRjSC5Pmz3nJKoHGzJaYh6cZl7M&v=weekly"
          async
          defer
        ></script>
        <div>
          <h1 className="text-4xl">Game 1:</h1>
          <h2>Scroll down for the next Game</h2>
          <div className="">
            <h3>Game 1.1 (a,b,c):</h3>
            <div id="frankfurt"></div>
          </div>
          <div>
            <h3>Game 1.2 (a,b,c):</h3>
            <div className="mx-auto flex justify-center p-4" id="2">
              {/* Map einbinden */}
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
      </body>
    </div>
  )
}

export default Solutions
