import React, { useState, useEffect } from 'react';

function StarRating(props) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const starDisplay={
        0:(
            <>
            <span className='star-unchecked'></span>
            <span className='star-unchecked'></span>
            <span className='star-unchecked'></span>
            <span className='star-unchecked'></span>
            <span className='star-unchecked'></span>
            </>
        ),
        1:(
            <>
            <span className='star-checked'></span>
            <span className='star-unchecked'></span>
            <span className='star-unchecked'></span>
            <span className='star-unchecked'></span>
            <span className='star-unchecked'></span>
            </>
        ),
        2:(
            <>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-unchecked'></span>
            <span className='star-unchecked'></span>
            <span className='star-unchecked'></span>
            </>
        ),
        3:(
            <>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-unchecked'></span>
            <span className='star-unchecked'></span>
            </>
        ),
        4:(
            <>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-unchecked'></span>
            </> 
        ),
        5:(
            <>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            </>
        )
    };

    const starEdit={
        true: (
            <>
                {[...Array(5)].map((star, index)=>{
                    index +=1;
                    return(
                        <button type='button' key={index} className={index <= (hover || rating) ? "star-checked" : "star-unchecked"} onClick={()=>clickStar(index)} onMouseEnter={()=>setHover(index)} onMouseLeave={()=>setHover(rating)}>
                        </button>
                        
                    );
                })}
            </>
        ),
        false: (
            <>
            {starDisplay[props.rating]}
            </>
        )
    }

    function clickStar(index){
        setRating(index);
        props.setRating(index);
    }

    return (
        <div>
            {starEdit[props.edit]}
        </div>
      );
}

export default StarRating;