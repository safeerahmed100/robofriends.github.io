import React from "react";
function Card({name,username,email,id}){


    return(
        <div className="b3 ma4 pa3 bg-light-blue w6 dib tc  br4 grow shadow-5">
                        <h2>{name}</h2>
        
            <img src={`https://robohash.org/${id}`} alt="hehe"/>
            <div>
            <h2>{username}</h2>
            <p>{email}</p>
        </div>
        </div>
    );
}

export default Card;