
import React from 'react'
import getimg from "../../assets/img/RocketLaunch.png"
import hcard from "../../assets/img/Image Placeholder.png"
import cdimg from "../../assets/img/Avatar Placeholder (1).png"


export default function Header() {
    return (
        <div className='container tr'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <h1 className='hd' > Discover              Digital Art & Collect NFTs</h1>
                        <p className='phd'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                        <button type="button" class=" cdh btn btn-primary btn-lg bt"><img src={getimg} /> Get Started</button>
                        <div className='row tr'>
                            <div className='col-lg-4'><h1> <b>240K+</b> </h1> <h4>Total Sale</h4></div>
                            <div className='col-lg-4'><h1> <b>100K+</b> </h1> <h4>Auctions</h4></div>
                            <div className='col-lg-4'><h1> <b>240K+</b> </h1> <h4>Artists</h4></div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 '>
                        <div className="card hdcd">
                            <img src={hcard} className="card-img-top" alt="..." />
                            <div className="card-body cdh">
                               <h3 >Space Walking</h3>
                               <img src={cdimg} /> Animakids
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
