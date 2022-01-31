import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function Solutions() {
  return (
    <div>
      <Head>
        <title>Solutions</title>
      </Head>
      <div className="mx-auto justify-center p-4 items-center text-center">
        <h1 className="mt-4 text-4xl font-bold">Welcome to ComIsKey!</h1>

        <p className="text-2xl font-semibold mt-6">Rules: </p>
        <p>
          - The game has to be played in a group of two, one player assumes the
          role of the coach, who guides the other player through the mini games.
        </p>
        <p>- The player may not look at the coach's screen</p>
        <p>
          - You have a total of 3 lives for each game, communicate and make it
          count!
        </p>
        <p>- You time will be measured and put on the leaderboard</p>
      </div>
      <div className="mx-auto max-w-7xl items-center justify-center text-center">
        <hr></hr>
        <h1 className="mt-4 text-4xl font-bold">Game 1:</h1>
        <h2 className="text-1xl font-semibold">
          Find the location marked on the players map and write it down.
        </h2>
        <div>
          <div>
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
            <div className="mx-auto flex justify-center p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d85231.59987532445!2d-118.31510855741142!3d34.056804448483454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1643654479922!5m2!1sen!2sde"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
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
        <hr className="mt-2"></hr>
        <h1 className="mt-4 text-4xl font-bold">Game 2:</h1>
        <h2 className="text-1xl font-semibold">
          Navigate through the maze and bring the key to the lock. Don't touch the walls!
        </h2>
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
        <hr className="mt-4"></hr>
        <h1 className="mt-4 text-4xl font-bold">Game 3:</h1>
        <h2 className="text-1xl font-semibold">
          Press the runes in the order they appear here
        </h2>
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
          <div className="mb-2 mt-2 flex items-center justify-center">
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
          <div className="mb-2 flex items-center justify-center">
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
          <div className="mb-2 flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 4:</h3>
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r9.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
            <Image src="/r6.png" width={50} height={50} />
            <Image src="/r12.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
          </div>
          <div className="mb-2 flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 5:</h3>
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r6.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r9.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r12.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
            <Image src="/r4.png" width={50} height={50} />
          </div>
          <div className="mb-2 flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 6:</h3>
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r9.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r12.png" width={50} height={50} />
            <Image src="/r15.png" width={50} height={50} />
            <Image src="/r4.png" width={50} height={50} />
          </div>
          <div className="mb-2 flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 7:</h3>
            <Image src="/r1.png" width={50} height={50} />
            <Image src="/r14.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r2.png" width={50} height={50} />
            <Image src="/r6.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r9.png" width={50} height={50} />
            <Image src="/r12.png" width={50} height={50} />
          </div>
          <div className="mb-2 flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 8:</h3>
            <Image src="/r12.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r13.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r15.png" width={50} height={50} />
            <Image src="/r8.png" width={50} height={50} />
          </div>
          <div className="mb-2 flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 9:</h3>
            <Image src="/r1.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r15.png" width={50} height={50} />
            <Image src="/r4.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r6.png" width={50} height={50} />
            <Image src="/r12.png" width={50} height={50} />
          </div>
          <div className="flex items-center justify-center ">
            <h3 className="mr-4 text-3xl">Solution 10:</h3>
            <Image src="/r12.png" width={50} height={50} />
            <Image src="/r9.png" width={50} height={50} />
            <Image src="/r14.png" width={50} height={50} />
            <Image src="/r7.png" width={50} height={50} />
            <Image src="/r11.png" width={50} height={50} />
            <Image src="/r5.png" width={50} height={50} />
            <Image src="/r3.png" width={50} height={50} />
            <Image src="/r10.png" width={50} height={50} />
            <Image src="/r15.png" width={50} height={50} />
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
