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
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Marketplaces</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Rankings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Connect a Wallet</a>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-primary bt"><img src={sign} /> Sign up</button>
            </li>

          </ul>

        </div>
      </div>
    </nav>









  )
}
