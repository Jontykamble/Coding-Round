import React, { useState } from 'react'

function FormValidation() {

  const[objeData,setObject]=useState({})
  const getInput=(value,name)=>{
    let data={[name]:value}

    setObject({...objeData,...data})

  }


  const submit=(event)=>{
    event.preventDefault()

console.log(objeData)

  }
  





  return (

    <div>

    <input placeholder='write your name'
    name='name'
    type='text'
    onChange={(event)=>getInput(event.target.name)}/>

<input placeholder='write your name'
    name='age'
    type='number'
    onChange={(event)=>getInput(event.target.name)}/>
        <input placeholder='write your age'
    name='name'
    type='text'
    onChange={(event)=>getInput(event.target.name)}/>
        <input placeholder='write your name'
    name='name'
    type='text'
    onChange={(event)=>getInput()}/>


    <button onClick={submit}></button>


    </div>
  )
}

export default FormValidation