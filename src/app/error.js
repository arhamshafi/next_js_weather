"use client"
function error({ error , reset }) {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center flex-col text-white">
       <h1> Error Loading Weather </h1>
       <p>{error.message}</p>
       <button onClick={reset}>Try Again</button>
    </div>
  )
}

export default error
