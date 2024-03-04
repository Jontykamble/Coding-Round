import React, { useState } from 'react'
import "../App.css"
import OtpInputjk from './OtpInput'


function OTP() {
    const [phoneNumber,SetPhone]=useState("")

    const [showOtp,setshowOtp]=useState(false)

    const handlePhoneNumber=(event)=>{
    SetPhone(event.target.value)


    }

    const handleSubmit=(event)=>{

       
        //phone va;dationn

        const regex=/[^0-9]/g;
        if(phoneNumber.length<10|| regex.test(phoneNumber)){
            alert("Inviald Phomne Number")
            return ;
        }

        //call backend API
        //show otp fiield
        setshowOtp(true)
    }

    const onOtpSubmit=(otp)=>{

      console.log("login sucessfull",otp)
    }


  return (
  <div>

    <h1>Login With Phone</h1>
    {!showOtp?<form  className="App"onSubmit={()=>{handleSubmit() }}>

<input type='text' value={phoneNumber} onChange={handlePhoneNumber}placeholder='enter phone number'/>
<button type='submit'>Submit</button>
</form>:<div>


<p>Enter Otp sent to{phoneNumber}</p>
<OtpInputjk length={4} onOtpSubmit={onOtpSubmit}/>




</div>}</div>

  )

       




  
}

export default OTP