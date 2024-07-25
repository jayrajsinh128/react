import React from 'react'

function Product({ arr }) {
  return (
    <div>

  <section>
    <div className="section">
      <div className="section1">
        <div className="img-slider">
          <img src="https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="img"/>
          <img src="https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="img"/>
          <img src="https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="img"/>
          <img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="img"/>
          <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="img"/>
        </div>
      </div>
      <div className="section2">
        <div className="container">
        {
            arr.map((el) => {
              return (
                      <div className="items">
                        <div class="img img1"><img src={el.img} alt=""/></div>
                    <div className="name">{el.name}</div>
                    <h3 classNameName="price">{el.mrp}</h3>
                    <div className="info">{el.price}</div>
                </div>
              )
            })
            }
        </div>
      </div>
    </div>

  </section>
  
  
  
    </div>
  )
}

export default Product