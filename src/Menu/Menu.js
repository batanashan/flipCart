import React, { useState } from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import './Menu.css'

import Cards from '../Cards/Cards'
import ProductPage from '../Products/ProductPage'
const Menu = () => {
  const [isShow,setIsShow] = useState(document.body.clientWidth>700 ?false : true)
  const [left,setLeft] = useState(-150)
  const [clr,setClr] =useState("home")

  const fnResize =() =>{
    if(document.body.clientWidth<700){
    setIsShow(true)
    }
    else{
      setIsShow(false)
    }
  }
  window.addEventListener('resize',fnResize)
            const handleMobileBtnClick =() =>{
         setLeft(left === 0? -150 :0)
           }

           const fnMenuClick = (eve)=>{
            const {id} =eve.target
            eve.stopPropagation()
            setLeft(-150)
            setClr(id)
           }

  return (
    <div>
    { isShow && <button className='mobile-btn' onClick={handleMobileBtnClick}>
        <span></span>
        <span></span>
        <span></span>
        

      </button>
}
    <ul style ={{left}}  className={`${isShow? 'mobile-menu' : 'menu' }`}>
       
        <li><Link to="/card" id="card" className={`${clr==="card"?'menuItem':''}`}  onClick={fnMenuClick}>Cards</Link></li>
       
    </ul>
<Routes>

<Route path="/card" element={<Cards/>}></Route>
<Route path="/product/:id" element={<ProductPage/>}></Route>
</Routes>
     
     </div>
  )
}

export default Menu
