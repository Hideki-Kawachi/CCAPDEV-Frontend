import React, { useState, useEffect } from 'react';

function StarRating(props) {

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
    }
    console.log(props.rating + "RATING");
    return (
        <div>
            {starDisplay[props.rating]}
        </div>
      );
}

export default StarRating;