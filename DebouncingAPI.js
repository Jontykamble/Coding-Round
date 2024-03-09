

import axios from 'axios'
import { every } from 'lodash'
import React, { useEffect, useState } from 'react'
const pinAPI="https://api.postalpincode.in/pincode/"

function DebouncingAPii() {
    const [pin,setPin]=useState("")


    //Debounce-Delay function
    //in javascript a debounce function makes sure that your code is only triggered once per user input


        
    

    useEffect(()=>{

        const Debouncing=setTimeout(()=>{
            axios.get(pinAPI+pin)
        .then((res)=>{
            console.log(res.data[0].PostOffice)
        })
        .catch((err)=>{

            console.log(err)
        })


        },2000)

        return()=>{
            clearTimeout(Debouncing)
        }
        //it will only run when we type the last letter
        //append api 
    },[pin])

  return (
    <div>

        <input onChange={(event)=>setPin(event.target.value
            )} placeholder='enter your pin-code'/>

        
    </div>
  )
}

export default DebouncingAPii