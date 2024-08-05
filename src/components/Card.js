import { useState } from "react";
function Card({name,id,info,image,price,sorting})
{
    const description=`${info.substring(0,200)}...`;
    const [readMore,setReadMore]=useState(false);
    function clickHandler()
    {
        setReadMore(!readMore)
    }

    function notInterestedHandler()
    {
        sorting(id);
    }
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="card-detail">
                <div className="name">{name}</div>
                <div className="price">₹ {price}</div>
            </div>
            <div className="description">
                {readMore?info:description}
                <span onClick={clickHandler} >
                {

                    readMore ?`Show Less`:`Read More`
                }
                </span>
            </div>
            <button onClick={notInterestedHandler} className="btn-red">Not Interested</button>
        </div>
    )
}

export default Card;