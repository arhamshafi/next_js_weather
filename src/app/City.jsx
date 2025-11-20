"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

function City({ crnt_city , cities  }) {

    const router = useRouter()

    const handler = (e) => {
        const city = e.target.value
        if(!city) return
        router.push(`/?city=${encodeURIComponent(city)}`)
    }

  return (
    <select className='w-[200px] h-7 rounded-lg bg-[whiteSmoke] outline-none px-4 tracking-[2px]' value={crnt_city} onChange={handler} >
        {
            cities && cities.map((ele , idx)=>(
                <option key={idx} value={ele.name} > {ele.name} </option>
            ))
        }
    </select>
  )
}

export default City
