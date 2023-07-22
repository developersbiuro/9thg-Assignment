import React from 'react'
import logo from "../../assets/img/Storefront.png"
import logo1 from "../../assets/img/DiscordLogo.png"
import logo3 from "../../assets/img/TwitterLogo.png"
import logo2 from "../../assets/img/YoutubeLogo.png"
import logo4 from "../../assets/img/InstagramLogo.png"
import div from "../../assets/img/Divider.png"
import evimg from "../../assets/img/EnvelopeSimple.png"



export default function Footer() {
    return (
        <div className='container-fluid tr ft'>

            <div className='container'>
                <div className='row ftm trhd' >
                    <div className='col-lg-4 col-sm-12 ftm '>
                        <h3 className='fth'>  <img src={logo} /> NFT Marketplace</h3>
                        <h5 className='ftt mar'>NFT marketplace UI created with Anima for Figma.</h5>
                        <h5 className='ftt mar'>Join our community</h5>
                        <a className=''     href='https://wa.me/+923036253428' target='blank'> <img src={logo1} /></a>
                        <a className='logo' href='https://wa.me/+923036253428' target='blank'> <img src={logo2} /></a>
                        <a className='logo' href='https://wa.me/+923036253428' target='blank'> <img src={logo3} /></a>
                        <a className='logo' href='https://wa.me/+923036253428' target='blank'> <img src={logo4} /></a>


                    </div>

                    <div className='col-lg-3 col-sm-12 ftm'>
                        <h3 className='fth'>Explore</h3>
                        <h5 className='ftt mar'>MarketPlace</h5>
                        <h5 className='ftt mar'>Rankings</h5>
                        <h5 className='ftt mar'>Connect a Wallet</h5>
                    </div>

                    <div className='col-lg-5 col-sm-12 ftm'>
                        <h3 className='fth'>Join our weekly digest</h3>
                        <h5 className='ftt mar'>Get exclusive promotions & updates straight to your inbox.</h5>
                        <div className='row'>
                            <div class="form-floating col-lg-7 col-sm-12 trcard em">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Enter your email here</label>
                            </div>
                            <div className='col-lg-5 col-sm-12 trcard'>
                                <button type="button" className="btn btn-primary btn-lg bt jbt"><img src={evimg} /> Subscribe</button>
                            </div>
                        </div>

                    </div>
                    <img className='mar' src={div} />
                    <h5 className='ftt mar ftr '> Ⓒ Developers-Biuro. - - - - - - - - - - - - - - - - - - - - -  -     Made By: <a className='ftr' href='https://wa.me/+923036253428' target='blank'><b>Developers-Biuro</b></a></h5>
                </div>


            </div>
        </div>
    )
}
