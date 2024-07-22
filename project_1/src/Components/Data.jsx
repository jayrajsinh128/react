import React, { useEffect, useState } from 'react'


function Data() {
    const[state,setState]=useState(false)
    const[data,setData]=useState([])
   
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])
    console.log(data);


  
    return (
    <div style={{width:'500px', display:'flex', flexWrap:'wrap'}}>
        {
            data.map((el)=>{
                return(
                    <div style={{border:"1px solid red"}}>
                        <img src={el.image} alt={el.name} style={{width:"150px",height:"150px"}} />
                        <h2>{el.name}</h2>
                        <h5>{el.count}</h5>
                    </div>
                )
            })
        }
        <button onClick={()=>setState(!state)}>fetch data</button>

        </div>
  )
}

export default Data