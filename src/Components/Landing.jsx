import React from 'react'
import './Landing.css'

function Landing() {
  return (
    <div className='landing_container'>
      <div className='landing_title'>
        <h1>BMI Calculator</h1>
        <p>Knowing your daily intake can enhance your life</p>
      </div>
      <div id='landing_img_container'>
        <img id='landing_img' src='https://cdn.pixabay.com/photo/2023/01/14/12/27/meditation-7718089_1280.jpg' />
      </div>
    </div>
  )
}

export default Landing
