import React from 'react'

const System = () => {
  return (
    <div className="flex justify-center items-center mt-10 ml-20">
        <div className="sun absolute w-32 h-32 rounded-full bg-gradient-to-b from-yellow-600 to-yellow-700 via-amber-700 saturate-200 brightness-200"></div>
        <div className="earth absolute brightness-150 before:w-[2.5em] before:h-[2.5em] before:bg-sky-600">
            <div className="moon absolute brightness-150 before:w-[1.2em] before:h-[1.2em] before:bg-gray-600"></div>
        </div>
    </div>
  )
}

export default System