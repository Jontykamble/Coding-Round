import { useEffect, useState } from "react"

 import data from "./data.json"

const Paginationnnnnn=()=>{

    const [product,setProducts]=useState([])
    const [page,setPage]=useState(1)

    const fetchProduct=async()=>{


      const res=await fetch("https://dummyjson.com/products?limit=100")
      const data=await res.json()

      if(data && data.product){
        setProducts(data.product)
      }

    }

    useEffect(()=>{

        fetchProduct()
    },[])


    const selectPage=(select)=>{

        setPage(select)
    }

    




    return (


        <div>
            <div className="products">
                {product.slice(page*10-10,page*10).map((prod)=>{

                        return(
                            <span className="product_single"key={prod.id}>

                                <img src={prod.thumbnail}alt={prod.title}/>

                            </span>



                        )

                })}
        
                <div className="pagination">
                    
                    <span onClick={()=>selectPage(page-1)}>⏪</span>
                    {[...Array(product.length/10)].map((_,i)=>{

                        return(

                            <span className={page==i+1?"paginationselcted":""}
                            onClick={()=>selectPage(i+1)} key={i}>
                                
                            </span>
                        )
                    })}

                    <span onClick={()=>selectPage(page+1)}>⏩ </span>
                </div>




            </div>
           
        </div>



    )
}


export default Paginationnnnnn