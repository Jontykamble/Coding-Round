

import { useSearchParams } from "react-router-dom"
import "../App.css"
import { useState } from "react"
const images=[
    {
        img_url:"https://www.10wallpaper.com/wallpaper/medium/1604/Amazing_Sunset_Reflected_Clear_Lakes-HDR_Photo_HD_Wallpaper_medium.jpg"
    },
    {
        img_url:"https://live.staticflickr.com/65535/49675866667_9ddefb5fd8_b.jpg"
        
    }
    ,{
        img_url:"https://live.staticflickr.com/65535/49675866667_9ddefb5fd8_b.jpg"
    
    }
]
const ImagesCarousaaal=()=>{


    const [active,setActive]=useState(0)





    return (

        <div className="App">

            <div className="slideShow">

                 
            {images.map((url,i)=>{
                return(
                    <div className="slide" >

<img src={url.img_url} activee={i===active} alt="wallpaer"/></div>)

            })}


            </div>



        </div>


    )
}

export default ImagesCarousaaal