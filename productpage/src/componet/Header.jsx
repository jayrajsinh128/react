import React from 'react'
import Product from './Product'
import { useState } from 'react'

function Header() {
  const [data,setdata]=useState([])
    const handleclick=()=>{
        fetch(`https://mock-server-app-3.onrender.com/product`)
        .then(res=>res.json())
        .then((res)=>{
            setdata(res)
        })
        .catch((err)=>{
            console.log(err); 
        })
    }

  return (
    <>
    <div>
        <header>
    <div className="logo"><a href="#">ShoPperZ</a></div>
    <div className="menu">
      <a href="#">
        <ion-icon name="close" className="close"></ion-icon>
      </a>

      <ul>
        <li><a href="#" className="under">HOME</a></li>
        <li><a className="under">SHOP</a></li>
        <li><a href="#" className="under">OUR PRODUCTS</a></li>
        <li><a href="#" className="under">CONTACT US</a></li>
        <li><a href="#" className="under">ABOUT US</a></li>
      </ul>
    </div>
    <div className="search">

      <a href=""><input type="text" placeholder="search products" id="input"/>
        <ion-icon className="s" name="search"></ion-icon>
      </a>
    </div>
    <div className="heading">
      <ul>
        <li><a href="#" className="under">HOME</a></li>
        <li><a onClick={handleclick}  className="under">SHOP</a></li>
        <li><a href="#" className="under">OUR PRODUCTS</a></li>
        <li><a href="#" className="under">CONTACT US</a></li>
        <li><a href="#" className="under">ABOUT US</a></li>
      </ul>
    </div>
    <div className="heading1">
      <ion-icon name="menu" className="ham"></ion-icon>
    </div>
  </header>
    </div>
    <Product arr={data}/>
    </>
  )
}

export default Header


