import React from 'react'

function About() {
  return (
    <div className='text-light bg grid row justify-content-center align-items-center mt-5 py-5'>
      <div id='About' className='col-md-5 text-center px-5'>
        <p className='display-4'>PREPARE FOR THE BROKERS TAKEOVER</p>
        <p className=''>When you buy an NFT, you’re not simply buying an avatar or a rare piece of art. You’re also gaining membership access to the exclusive Broker's collectors’ community with ever-growing benefits and offers.</p>
      </div>
      <div className='col-5'>
        <img src="./assets/nft.gif" className='img-thumbnail' alt="Nft Gif"/>
      </div>
    </div>
  )
}

export default About