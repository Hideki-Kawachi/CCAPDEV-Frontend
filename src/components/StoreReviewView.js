import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function StoreReviewView() {
    const info = useLocation();

    return (
        <div className='content-store-review-view'>
          <span>{info.state.title}</span>
          <span>{info.state.user}</span>
          <span>{info.state.date}</span>
          <span>{info.state.description}</span>
          <span>{info.state.rating}</span>
        </div>
      );
}

export default StoreReviewView;