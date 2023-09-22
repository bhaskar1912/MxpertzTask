import React from 'react'
import Rating from '@mui/material/Rating';
const Ratings = () => {
  return (
    <>
   <div className='ratings'> 
<div className='raitingbox'>
    <div className='ratingtext'>TESTIMONIALS
    <span> <div className='line2'></div></span></div>
    <div className='ratingtitle'>What People are Saying</div>
    <div className='rating'>

        <div className='ratingbox1'>
            <div className='Rating11'><Rating defaultValue={5} readOnly />
            <div className='reviews'>"A Great Find"</div>
            <div className='reviewstext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus atque ab commodi ratione repellendus in dolore cupiditate, beatae consequatur iure voluptate distinctio quam quae voluptatem, voluptates aspernatur! Placeat, culpa ducimus!</div>
            <div style={{marginTop:'10px'}}>Divi</div>
            </div>
        </div>
        <div>
        <div className='Rating12'><Rating defaultValue={5} readOnly /></div>
        <div className='reviews'>"Fabulous food flawless & service"</div>
        <div className='reviewstext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus atque ab commodi ratione repellendus in dolore cupiditate, beatae consequatur iure voluptate distinctio quam quae </div>'
        <div>Bloom</div>
        </div>
        <div>
        <div className='Rating13'><Rating defaultValue={5} readOnly /></div>
        <div className='reviews'>"Another successfull experience"</div>
        <div className='reviewstext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus atque ab commodi ratione repellendus in dolore cupiditate, beatae consequatur iure voluptate distinctio quam quae </div>
        <div style={{marginTop:'10px'}}>Extra</div>
        </div>
        <div>
        <div className='Rating14'><Rating defaultValue={5} readOnly /></div>
        <div className='reviews'>"Speechless"</div>
        <div className='reviewstext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus atque ab commodi ratione repellendus in dolore cupiditate, beatae consequatur iure voluptate distinctio quam quae </div>
        <div style={{marginTop:'10px'}}>Monarch</div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default Ratings