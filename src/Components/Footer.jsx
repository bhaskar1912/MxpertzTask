import React from 'react'

const Footer = () => {
  return (
   <>
   <div className='footer'>
    <div className='name'>Designed by <span style={{fontWeight:"700"}}>Bhaskar Mishra </span> |  Powered by <span style={{fontWeight:"700"}}>WordPress </span></div>
    <div className='logo'>
        <div><i class="fa-brands fa-facebook-f" style={{color: "rgb(169, 167, 164)"}}></i></div>
    <div><i class="fa-brands fa-twitter" style={{color: "rgb(169, 167, 164)"}}></i></div>
    <div><i class="fa-brands fa-google-plus-g" style={{color: "rgb(169, 167, 164)"}}></i></div>
    <div><i class="fa-solid fa-rss" style={{color: "rgb(169, 167, 164)"}}></i></div>
    </div>
   </div>
   <div className='last'></div>
   </>
  )
}

export default Footer