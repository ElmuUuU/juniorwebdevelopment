import Image from 'next/image'
import React from 'react'

function Solutions() {
  return (
    <div className="mx-auto max-w-7xl items-center justify-center text-center">
      <div>
        <h1 className="text-4xl">Game 1:</h1>
        <h2>Scroll down for the next Game</h2>
        <div className="">
          <h3>Game 1.1 (a,b,c):</h3>
          <div className="mx-auto flex justify-center p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29349.591613795757!2d8.64298520852353!3d50.11534950513444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd095855555555%3A0x204d96071c9db69c!2sSkyline%20Plaza%20Frankfurt!5e0!3m2!1sde!2sca!4v1643420162048!5m2!1sde!2sca"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129783.03002312685!2d-118.4049296686739!3d34.0514532540114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c755b4a2cc03%3A0x1146b683382ffe0d!2sEast%20Hollywood%2C%20Los%20Angeles%2C%20Kalifornien%2C%20USA!5e0!3m2!1sde!2sca!4v1643489057901!5m2!1sde!2sca"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div>
          <h3>Game 1.3 (a,b,c):</h3>
          <div className="mx-auto flex justify-center p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52928.20831043867!2d-6.325949185812008!3d53.35041315911307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e8389fe6091%3A0xc26786c51f5ebd04!2sNorth%20City%2C%20Dublin%2C%20Irland!5e0!3m2!1sde!2sca!4v1643489147012!5m2!1sde!2sca"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div>
          <h3>Game 1.4 (a,b,c):</h3>
          <div className="mx-auto flex justify-center p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79683.94040012921!2d139.70896909537458!3d35.68927092521853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018895574f822af%3A0xc3c2b2ae0f388da7!2sNihonbashimuromachi%2C%20Ch%C5%AB%C5%8D%2C%20Pr%C3%A4fektur%20Tokio%20103-0022%2C%20Japan!5e0!3m2!1sde!2sca!4v1643488643931!5m2!1sde!2sca"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div>
          <h3>Game 1.5 (a,b,c):</h3>
          <div className="mx-auto flex justify-center p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52992.34160093543!2d151.16867407724047!3d-33.889103980650646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5829637fb85b8e6e!2zMzPCsDUzJzIwLjgiUyAxNTHCsDEyJzEzLjMiRQ!5e0!3m2!1sde!2sca!4v1643488591261!5m2!1sde!2sca"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
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
  )
}

export default Solutions
