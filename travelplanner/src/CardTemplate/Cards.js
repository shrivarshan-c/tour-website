import React from "react";
import './Cards.css';
import vector1 from './ei_arrow-up.png'
import vector2 from './tabler_dots.png'
import vector3 from './solar_bookmark-circle-broken.png'
function Cards()
{
    return(
        <div className="card">
            <div className="desc"><p className="sub">Discover</p><p className="main1">Uncover the hidden gems<br></br> of our country</p></div>
            <div className="allcards">
                <div className="viewmore"> <p>View More</p> <img src = {vector1}></img></div>
                <div className="card1"> <div className="vectors"><img src= {vector2}></img><img src = {vector3}></img></div><p>THANJAVUR</p> <button>View Details</button></div>
                <div className="card2"> <div className="vectors"><img src= {vector2}></img><img src = {vector3}></img></div><p>COORG</p> <button>View Details</button></div>
                <div className="card3"> <div className="vectors"><img src= {vector2}></img><img src = {vector3}></img></div><p>COCHIN</p> <button>View Details</button></div>
            </div>
            
        </div>
    );
    
}
export default Cards;