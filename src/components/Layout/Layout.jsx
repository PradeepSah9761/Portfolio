import React,{useState} from 'react';
import Home from '../../pages/Home/Home.jsx';
import { RiArrowLeftDoubleLine, RiArrowRightDoubleFill} from "react-icons/ri";
import './Layout.css';
import Menus from '../Menus/Menus.jsx';


const Layout=()=>
{
const [toggle,setToggle]=useState(true);
//change the toggle
const handleToggle=()=>
{
    setToggle(!toggle);
}
    return(
        <>
        <div className="sidebar-section">
   <div className={ toggle ? "sidebar-toggle sidebar":"sidebar"}>
    <div className="sidebar-toggle-icons">
         <p onClick={handleToggle}>
            {
                
                toggle?(<RiArrowLeftDoubleLine  size={40} />):(<RiArrowRightDoubleFill size={40} />)
            }
        
        </p> 
        
    </div>
            <Menus  toggle={toggle}/>
   </div>
   <div class="container">
    <Home/>

   </div>

        </div>

        </>
        
    )
}
export default Layout;