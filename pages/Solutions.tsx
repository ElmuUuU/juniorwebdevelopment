import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function Solutions() {
  var Arrays = new Array()
  Arrays[0] = new Array(4, 7, 8, 3, 10, 5, 11, 13, 2)
  Arrays[1] = new Array(11, 3, 13, 9, 14, 4, 6, 8, 15)
  Arrays[2] = new Array(11, 6, 4, 12, 5, 9, 10, 2, 1)
  Arrays[3] = new Array(7, 10, 9, 3, 2, 6, 12, 13, 11)
  Arrays[4] = new Array(3, 6, 11, 9, 7, 10, 12, 2, 4)
  Arrays[5] = new Array(10, 13, 5, 9, 2, 3, 12, 15, 4)
  Arrays[6] = new Array(1, 14, 11, 7, 2, 6, 10, 9, 12)
  Arrays[7] = new Array(12, 10, 3, 11, 4, 13, 7, 15, 8)
  Arrays[8] = new Array(1, 5, 3, 7, 15, 4, 11, 6, 12)
  Arrays[9] = new Array(12, 9, 14, 7, 11, 5, 3, 10, 15)
  return (
    <div>
      <Head>
        <title>Simple Map</title>
      </Head>
      <div className="mx-auto max-w-7xl items-center justify-center text-center">
        <h1 className="mt-4 text-4xl font-bold">Game 1:</h1>
        <h2 className="text-2xl font-semibold">
          Scroll down for the next Game
        </h2>
        <div>
          <div>
            <h3>Game 1.1 (a,b,c):</h3>
            <div className="mx-auto flex justify-center p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37278.131272652514!2d8.649768140355832!3d50.115710835865414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%20am%20Main%2C%20Deutschland!5e0!3m2!1sde!2sca!4v1643584690808!5m2!1sde!2sca"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <h3>Game 1.2 (a,b,c):</h3>
            <div className="mx-auto flex justify-center p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100755.57024612394!2d-118.33225732764105!3d34.065665088318916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf61e9d408cb%3A0x73ff07b1c2d6dadc!2sGriffith-Observatorium!5e0!3m2!1sde!2sca!4v1643584571405!5m2!1sde!2sca"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h3>Game 1.3 (a,b,c):</h3>
          <div className="mx-auto flex justify-center p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70145.16004862389!2d-6.290899914347089!3d53.34035135042329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Irland!5e0!3m2!1sde!2sca!4v1643584720975!5m2!1sde!2sca"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div>
          <h3>Game 1.4 (a,b,c):</h3>
          <div className="mx-auto flex justify-center p-4" id="4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91218.11805127865!2d139.71723619658712!3d35.687548368712335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokio%2C%20Pr%C3%A4fektur%20Tokio%2C%20Japan!5e0!3m2!1sde!2sca!4v1643584823986!5m2!1sde!2sca"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div>
          <h3>Game 1.5 (a,b,c):</h3>
          <div className="mx-auto flex justify-center p-4" id="5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78394.65252276375!2d151.12346033492884!3d-33.89079477277752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20New%20South%20Wales%2C%20Australien!5e0!3m2!1sde!2sca!4v1643584889413!5m2!1sde!2sca"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl items-center justify-center text-center">
        <h1 className="mt-4 text-4xl font-bold">Game 2:</h1>
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
      <div className="mx-auto max-w-7xl items-center justify-center text-center">
        <h1 className="mt-4 text-4xl font-bold">Game 3:</h1>
        <div className="block">
          <div className="mt-4 flex items-center justify-center">
            <h3 className="mr-4 text-3xl">Solution 1:</h3>
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r8.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
          </div>
          <hr className="m-2 mx-auto max-w-xl" />
          <div className="flex items-center justify-center">
            <h3 className="mr-4 text-3xl">Solution 2:</h3>
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r9.png" width={50} height={50} />
            <Image src="/r14.png" width={50} height={50} />
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r6.png" width={50} height={50} />
            <Image src="/r8.png" width={50} height={50} />
            <Image src="/r15.png" width={50} height={50} />
          </div>
          <hr className="m-2 mx-auto max-w-xl" />
          <div className="flex items-center justify-center">
            <h3 className="mr-4 text-3xl">Solution 3:</h3>
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r6.png" width={50} height={50} />
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r12.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r9.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
            <Image src="/r1.png" width={50} height={50} />
          </div>
          <hr className="m-2 mx-auto max-w-xl" />
          <div className="flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 4:</h3>
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r8.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
          </div>
          <hr className="m-2 mx-auto max-w-xl" />
          <div className="flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 5:</h3>
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r8.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
          </div>
          <hr className="m-2 mx-auto max-w-xl" />
          <div className="flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 6:</h3>
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r8.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
          </div>
          <hr className="m-2 mx-auto max-w-xl" />
          <div className="flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 7:</h3>
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r8.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
          </div>
          <hr className="m-2 mx-auto max-w-xl" />
          <div className="flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 8:</h3>
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r8.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
          </div>
          <hr className="m-2 mx-auto max-w-xl" />
          <div className="flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 9:</h3>
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r8.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
          </div>
          <hr className="m-2 mx-auto max-w-xl" />
          <div className="flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 10:</h3>
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r8.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 mb-4 max-w-7xl text-center">
        <a
          href="/"
          className="font bold mt-4 cursor-pointer rounded-2xl border-2 bg-yellow-300 p-1 text-3xl"
        >
          Go back to the starting screen
        </a>
      </div>
    </div>
  )
}

export default Solutions
