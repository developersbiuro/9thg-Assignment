import React from 'react'
import logo from "../../assets/img/Storefront.png"
import logo1 from "../../assets/img/DiscordLogo.png"
import logo3 from "../../assets/img/TwitterLogo.png"
import logo2 from "../../assets/img/YoutubeLogo.png"
import logo4 from "../../assets/img/InstagramLogo.png"



export default function Footer() {
    return (
        <div className='container-fluid tr ft'>

            <div className='container'>
                <div className='row ftm trhd' >
                    <div className='col-lg-4 col-sm-12 ftm '>
                        <h3 className='fth'>  <img src={logo} /> NFT Marketplace</h3>
                        <h5 className='ftt mar'>NFT marketplace UI created with Anima for Figma.</h5>
                        <h5 className='ftt mar'>Join our community</h5>
                        <a className='' href=''> <img src={logo1} /></a>
                        <a className='logo' href=''> <img src={logo2} /></a>
                        <a className='logo' href=''> <img src={logo3} /></a>
                        <a className='logo' href='' target='blank'> <img src={logo4} /></a>
                        
                    
                    </div>

                    <div className='col-lg-3 col-sm-12 ftm'>
                        <h3 className='fth'>Explore</h3>
                        <h5 className='ftt mar'>MarketPlace</h5>
                        <h5 className='ftt mar'>Rankings</h5>
                        <h5 className='ftt mar'>Connect a Wallet</h5>
                    </div>

                    <div className='col-lg-5 col-sm-12 ftm'>

                    </div>
                    <img src={div} />
                </div>


            </div>
        </div>
    )
}
