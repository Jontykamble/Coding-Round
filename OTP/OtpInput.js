

import React, { useEffect, useRef, useState } from 'react'

function OtpInputjk({length=4,onOtpSubmit=()=>{}}) {

  const [otp,setOtp]=useState(new Array(length).fill(""))

  const inputRef=useRef([])

  useEffect(()=>{


    if(inputRef.current[0]){

      inputRef.current[0].focus()
    }
  })


  const handleChange=(index,e)=>{

    const value= e.target.value
    if(isNaN(value))return



    const newOtp=[...otp]

    //allow only one input
    newOtp[index]=value.substring(value.length-1)
    setOtp(newOtp)

    //onsubmit trigwee

    const combine=newOtp.join("")
    if(combine.length===length)
    onOtpSubmit(combine)





  }
  const handleClick=(index)=>{

    inputRef.current[index].setSelectionRange(0, 1)




  }
  const handleKeyDown=()=>{


  }


  return (
    <div>
    
    {
      otp.map((value,index)=>{


        return (

        <input key={index} type='text' ref={(input)=>(inputRef.current[index]=input)} value={value}
        onChange={(e)=>handleChange(index,e)} onClick={()=>handleClick(index)}
        onKeyDown={(e)=>handleKeyDown(index,e)}
        className='otpInput'/>

        )
      })
    }

    </div>
  )
}

export default OtpInputjk