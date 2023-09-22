import React from 'react'

const Contact = () => {
  return (
   <>
   <div className="contact">
    <div className='contact1'>
        <div className='contact11'>Hours of Operation</div>
        <div style={{color:"white"}} className='time1'> <span style={{fontWeight:'650'}}>MON - FRI </span><br/>
            10:00am - 1:00pm <br/>
            4:00pm - 10:30pm
        </div> 
        <div className='line4'></div>
        <div className='time1'>  <span style={{fontWeight:'650'}}>SAT</span><br/>
        10:00am - 1:00pm
        </div>
        <div className='line4'></div>
        <div className='time1'>  <span style={{fontWeight:'650'}}>SUN</span><br/>
        We are closed
        </div>
        <button className='btntime'>MAKE A RESERVATION</button>
    </div>
    <div className='contact2'>
        <div className='contact21'>
        <div> <span style={{fontSize:"25px",fontWeight:"600"}}>Drop Us a Line</span> <br/>
          Don't be shy. Let us know if you have any questions!<br/>
            <button className='contactbtn1'>CONTACT US</button></div>
        </div>
        <div className='contact22'>
            <div>
            <span style={{fontSize:"25px",fontWeight:"600"}}>  Our Newsletter </span>
            </div>
      
            Dialogue is an essential part of any script  
             <div className='form'>
                <div>  <input type="text" placeholder='First Name'/></div>
                <div>  <input type="text" placeholder='Last Name'/></div>
                <div>  <input type="email" placeholder='Email'/></div>
                <div>  <button className='contactbtn2'>CONTACT US</button></div>
           </div>
           
        </div>
    </div>
   </div>
   </>
  )
}

export default Contact