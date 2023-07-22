import React from 'react'
import navimg from "../../assets/img/Storefront.png"
import sign from "../../assets/img/User.png"

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#"> <img src={navimg} /> NFT Marketplace</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarNavAltMarkup" >
          <div className='container'>
            

              <ul className="nav justify-content-end navco">
                <li className="nav-item navco">
                  <a className="nav-link active navco" aria-current="page" href="#">Marketplaces</a>
                </li>
                <li className="nav-item navco">
                  <a className="nav-link active navco" aria-current="page" href="#">Rankings</a>
                </li>
                <li className="nav-item navco">
                  <a className="nav-link active navco" aria-current="page" href="#">Connect a Wallet</a>
                </li>
                <li className="nav-item navco">
                  <button type="button" className="btn navco btn-primary bt"><img src={sign} /> Sign up</button>
                </li>

              </ul>

            
          </div>



        </div>
      </div>
    </nav>









  )
}
