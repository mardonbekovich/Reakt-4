import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <header className='header'>
      <div className="container">
        <div className="header_wrapper">
          <div className="header_box">
            <h1>Lorem ipsum dolor sit amet <span>consectetur</span> </h1>
            <p>Adipisicing elit. Eum molestiae deserunt hic, voluptate magni odit recusandae beatae odio impedit, molestias repellat iure animi minus? Asperiores distinctio beatae tenetur atque corrupti!</p>
            <button>go the dreams</button>
          </div>
          <img className='header_img' src="https://abbos29.github.io/dream/img/main.png" alt="" />
        </div>

      </div>
    </header>
    
    </>
  )
}

export default Header