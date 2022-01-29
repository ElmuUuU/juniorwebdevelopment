import Image from 'next/image'
import React from 'react'

function Solutions() {
  return (
    <div className="mx-auto max-w-7xl items-center justify-center text-center">
      <div>
        <h1 className="text-4xl">Game 1:</h1>
        <h2>Scroll down for the next Game</h2>
        <h3>Solution 1:</h3>
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
        Solution 2:
        <div className="mx-auto flex justify-center p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29349.591613795757!2d8.64298520852353!3d50.11534950513444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd095855555555%3A0x204d96071c9db69c!2sSkyline%20Plaza%20Frankfurt!5e0!3m2!1sde!2sca!4v1643420162048!5m2!1sde!2sca"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          Solution 3:
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
          Solution 4:
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
          Solution 5:
          <div className="mx-auto flex justify-center p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29349.591613795757!2d8.64298520852353!3d50.11534950513444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd095855555555%3A0x204d96071c9db69c!2sSkyline%20Plaza%20Frankfurt!5e0!3m2!1sde!2sca!4v1643420162048!5m2!1sde!2sca"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-4xl">
        Game 2:
        <div>
          <Image src="/labyrinth1.png" width={300} height={300} />
          <Image src="/labyrinth2.png" width={300} height={300} />
        </div>
        <div>
          <Image src="/labyrinth3.png" width={300} height={300} />
          <Image src="/labyrinth4.png" width={300} height={300} />
        </div>
        <div>
          <Image src="/labyrinth5.png" width={300} height={300} />
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
