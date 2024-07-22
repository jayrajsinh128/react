import React,{useEffect,useState} from 'react'

function Data() {

const[state,setState]=useState(false)
const[data,setData]=useState([])

const handleClick= ()=>{
  fetch(`https://mock-server-app-3.onrender.com/product`)
  .then((res)=>res.json())
  .then((res)=>{
    setData(res)
  })
    .catch((err)=>{
      console.log(err)
    })
  }
console.log(data)


  return (
    <>
    <div style={{display:"flex", justifyContent:"center", width:"100%",border:"1px solid black", flexWrap:"wrap" }}>
      {
        data.map((el)=>{

          return(
            

<div style={{ width:"33%", border:"1px solid black" }}>
                        <img src={el.img} alt={el.title} style={{width:"40%",height:"250px",}} /> <br></br><br />
                       
                        <h5 style={{fontFamily:"sans-serif"}}>₹{el.price}</h5>
                        <span >{el.name}</span>
                        
                    </div>
          
          )
        })
      }
       
    </div>
    <button onClick={handleClick}>fetch data</button>
   </>
  )
}

export default Data