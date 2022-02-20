import React from 'react'

function Team() {
  return (
    <div className='grid row text-light justify-content-center text-center py-5'>

      <p id='team' className='display-3 '>MEET THE TEAM</p>

      <div className="card col-sm-3 col-10 bg-dark pt-2 m-3">
        <img src="./assets/1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title h3">Alphan</h5>
          <p className="card-text h6">Likes pineapples and dogs.</p>
        </div>
      </div>

      <div className="card col-sm-3 col-10 bg-dark pt-2  m-3">
        <img src="./assets/2.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title h3">Rhino</h5>
          <p className="card-text h6">Aspiring Tiktok Influencer.</p>
        </div>
      </div>

      <div className="card col-sm-3 col-10 bg-dark pt-2  m-3">
        <img src="./assets/3.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title h3">Anon-Kun</h5>
          <p className="card-text h6">Here for the tech.</p>
        </div>
      </div>

    </div>
  )
}

export default Team