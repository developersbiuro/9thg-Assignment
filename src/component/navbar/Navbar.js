import React from 'react'
import navimg from "../../assets/img/Storefront.png"
import sign from "../../assets/img/User.png"

export default function Navbar() {
    return (
        <div classNameNameName='navbg'>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={navimg} />NFT Marketplace</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-link active" aria-current="page" href="#">Marketplaces</a>
                            <a className="nav-link active" aria-current="page" href="#">Rankings</a>
                            <a className="nav-link active" aria-current="page" href="#">Connect a Wallet</a>
                            <button type="button" className="btn btn-primary bt"><img src={sign} /> Sign up</button>

                        </div>
                    </div>
                </div>
            </nav>





        </div >
    )
}
