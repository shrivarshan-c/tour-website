import React, { useState } from "react";
import './Cards.css';

import vector1 from './ei_arrow-up.png'
import vector2 from './tabler_dots.png'
import vector3 from './solar_bookmark-circle-broken.png'

function Cards() {
    const [showAll, setShowAll] = useState(true);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="cards">
            <div className="card">
                
                <div className="desc1">
                    <div className="desc2">
                    <p className="sub">Discover</p>
                    <p className="main1">Uncover the hidden gems<br></br> of our country</p>
                    </div>
                    <div className="searchbar">
                    <input type="text" placeholder="Search"></input>
                    </div>
                </div>

                <div className="allcards">
                    <div className="viewmore" onClick={toggleShowAll}>
                        <p>View More</p>
                        <img src={vector1} alt="View More" />
                    </div>
                    {!showAll &&
                        <>
                    <div className="card1"> <div className="vectors"><img src={vector2} alt="Vector 2" /><img src={vector3} alt="Vector 3" /></div><p>THANJAVUR</p> <button>View Details</button></div>
                    <div className="card2"> <div className="vectors"><img src={vector2} alt="Vector 2" /><img src={vector3} alt="Vector 3" /></div><p>COORG</p> <button>View Details</button></div>
                    </>
                    }
                    {showAll &&
                        <>
                            <div className="card3"> <div className="vectors"><img src={vector2} alt="Vector 2" /><img src={vector3} alt="Vector 3" /></div><p>COCHIN</p> <button>View Details</button></div>
                            <div className="card4"> <div className="vectors"><img src={vector2} alt="Vector 2" /><img src={vector3} alt="Vector 3" /></div><p>COORG</p> <button>View Details</button></div>
                            <div className="card5"> <div className="vectors"><img src={vector2} alt="Vector 2" /><img src={vector3} alt="Vector 3" /></div><p>KODAIKANAL</p> <button>View Details</button></div>
                        </>
                    }
                </div>
                
            </div>
        </div>
    );
}

export default Cards;
