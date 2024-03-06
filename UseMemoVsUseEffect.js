//its helps to stop components specific part rendering

//inside it we can return html element 

import { useMemo, useState } from "react"

const Usememooojk=()=>{

    const [count,setCount]=useState(0)
    const [name,setName]=useState('')


    const noRender=useMemo(()=>{
        return <div>

            
        <h1 style={{color:'red'}}>
        No rerender again{count}--{name} 
          
      </h1>
      <h1>
          UseMemo hook
      </h1>
        </div>



    },[name])



    return (

        <div>
            {noRender}
            


            <h1>Render it again agian aigain{count}</h1>

            <button onClick={()=>setCount(count+1)}>count</button>

            <button onClick={()=>setName('Jonty the name is enough')}>update name</button>

    
            
        </div>



    )
}

export default Usememooojk