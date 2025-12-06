import { Suspense } from "react";
import City from "./City";



export default async function Home({ searchParams }) {

  const get_cities = async () => {
    const res = await fetch(" https://gist.githubusercontent.com/immujahidkhan/014fb1629ddc931e6f6d4a3a4d31abaa/raw/8f5cc4f88b9dc4efc5058c5354b9f955e4bda16f/cities.json", {
      cache: "force-cache"
    })
    if (!res.ok) throw new Error("Error While Fetching Data !")
    return res.json()
  }

  const query = await searchParams
  const city = query.city || "Lahore"

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f65e32faa80c40a876bd4112cd36e525`,
    { next: { revalidate: 1800 } }
  )

  if (!res.ok) throw new Error("city not Found !")

  const cities = await get_cities()
  const city_weather =  res

  return (

    <div className="w-full bg-black min-h-screen py-1">
      <h1 className="text-center text-white font-bold mt-10 text-2xl tracking-[3px]">Weather API </h1>
      <div className="w-[400px] mx-auto flex justify-center items-center mt-10 rounded-2xl flex-col min-h-[500px] bg-white">
        <h1 className="font-bold text-xl text-black" >Weather Dashboard</h1>
        <div className="flex justify-center mt-10 gap-5 items-center">
          <p className="font-bold text-lg ">SELECT CITY : </p>
          <City crnt_city={city} cities={cities} />
        </div>
        <Suspense fallback={<div className='w-full min-h-screen bg-white flex justify-center items-center text-3xl '>
          LOADING...
        </div>} >
          <Weather_com city_weather={city_weather} />
        </Suspense>
      </div>
    </div>
    
  );
}

const Weather_com = async ({ city_weather }) => {
  const data = await city_weather.json();
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return (
    <div style={{ marginTop: 20 }}>
      <h2 className="font-bold text-center tracking-[2px]"> Weather in <span className="text-red-700" >{data.name}</span> </h2>
      <img src={iconUrl} alt="Weather Icon" className=" block mx-auto mt-10" />
      <p className="text-lg text-center mt-10">Temperature: <span className="text-red-700 font-bold">{(data.main.temp - 273.15).toFixed(1)}°C</span></p>
      <p className="text-lg text-center mt-5">Weather: <span className="text-red-700 font-bold">{data.weather[0].description}</span> </p>
    </div>
  );
}

// jab new city select krty to jb tk change ni hota tn tk loader kesy chlana ?

