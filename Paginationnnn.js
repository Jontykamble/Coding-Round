import { useEffect, useState } from "react"
import "./PaginationCss.css"
const Pagination=()=>{

    const [products,setProducts]=useState([])
    const [page,setPage]=useState(1)


   const fetchProduct=async()=>{

    const res=await fetch("https://dummyjson.com/products?limit=100")
    const data=await res.json()

    if(data && data.products){


        setProducts(data.products)
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
            {products.slice(page*10-10,page*10).map((prod)=>{
                return (
                    <span className="product__single"key={prod.id}>
                        <img src={prod.thumbnail}alt={prod.title}/>
                       
                    </span>
                )
            })}

            <div className="pagination">
                <span onClick={()=>selectPage(page-1)}>⏪</span>
                {[...Array(products.length/10)].map((_,i)=>{
                    return (
                        <span className={page==i+1?"paginationselcted":""}
                        onClick={()=>selectPage(i+1)} key={i}>{i+1}</span>
                    )
                })}

                <span onClick={()=> selectPage(page+1)}>⏩</span>


        

            </div>
        </div>
    </div>
   )
}

export default Pagination