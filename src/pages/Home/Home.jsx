// Home.js
import React from 'react';
import Slider from '../../components/Slider/Slider';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

function Home() {
    return (
        <div className='home'>
          <Slider/>
          <FeaturedProducts type="featured"/>
        </div>
      )
}

export default Home;