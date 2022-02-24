import React from 'react'
import { Accordion } from 'react-bootstrap-accordion'


function FAQ() {
  return (
    <div className='p-5 my-5 container text-center bg-dark'>
        <p id='faq' className='display-1 text-light pt-5'>FAQ</p>
        <div className='px-sm-5 pb-5'>
          <Accordion title="Where can I purchase an NFT?" children="TBD"/>
          <Accordion title="How many whitelist spots will be available?" children={<p><span className='bold'>The Brokers</span> will have 250 whitelist spots to get your NFTs at the lower price. This is the 1st out of our multiple phases on our Roadmap.</p>} />
          <Accordion title="How much will it cost?" children="The mint  will be 0.2 Sol for public, and 0.1 for whitelist" />
          <Accordion title="How can I get access to the whitelist?" children="All the steps are included in the #how-to-whitelist in our discord group" />
        </div>
        

    </div>
  )
}

export default FAQ