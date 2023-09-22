import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Image1 from '/MxPertz/task/src/pic9.jpg'
import Image2 from '/MxPertz/task/src/pic10.jpg'
import Image3 from '/MxPertz/task/src/pic11.jpg'
import { height } from '@mui/system';
const News = () => {
  return (
    <>

   <div className='news'> 
  <div className='newsbox'>
    <div className='newstext'>DON'T MISS<span> <div className='line3'></div></span></div>
    <div className='newstitle'>Fresh Ingredient,Tasty Meals</div>
    <div className='newsintro'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores expedita hic laboriosam dolor tempora numquam cum tenetur! Id laborum doloribus commodi tenetur..</div>
   </div>
   <div className='events'>
     <div class="card" style={{width: "18rem"}}>
  <img  src={Image1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Nunc Volupat Venenatis</h6>
    <p style={{color:"#d0901b", fontSize:"12px", fontWeight:"650"}}>CATEGORY</p>
    <p class="card-text" style={{  fontSize: "15px",fontWeight: 600,color:"rgb(169, 167, 164)"}}> Ipsum est repellat qui molestiae commodi earum exercitationem, perferendis quisquam placeat nemo odit voluptates consectetur in ex nostrum ducimus odio? Perferendis, hic.</p>
  </div>
</div>

<div class="card" style={{width: "18rem",height:"380px"}}>
  <img  src={Image2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Vestibulum Nisi Felis</h6>
    <p style={{color:"#d0901b", fontSize:"12px", fontWeight:"650"}}>CATEGORY</p>
    <p class="card-text" style={{  fontSize: "15px",fontWeight: 600,color:"rgb(169, 167, 164)"}}> Ipsum est repellat qui molestiae commodi earum exercitationem, perferendis quisquam placeat nemo odit voluptates.</p>
  </div>
</div>

<div class="card" style={{width: "18rem",height:"380px"}}>
  <img  src={Image3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Proin Eu Augue Efficitur</h6>
    <p style={{color:"#d0901b", fontSize:"12px", fontWeight:"650"}}>CATEGORY</p>
    <p class="card-text" style={{  fontSize: "15px",fontWeight: 600,color:"rgb(169, 167, 164)"}}> Ipsum est repellat qui molestiae commodi earum exercitationem,hic.</p>
  </div>
</div>
   </div>
   <div className='btndiv'>
   <button className='btnn'>READ MORE</button>
   </div>

  
   </div>

    </>
  )
}

export default News