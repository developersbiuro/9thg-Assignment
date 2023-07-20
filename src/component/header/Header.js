
import React from 'react'
import getimg from "../../assets/img/RocketLaunch.png"
import hcard from "../../assets/img/dis1.png"
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
                        <div className='container'>
                            <div className='row tr'>
                                <div className='col-lg-3 col-sm-3'>
                                    <h3> <b>240K+</b> </h3>
                                    <h6>Total Sale</h6>
                                </div>
                                <div className='col-lg-3 col-sm-3'>
                                    <h3> <b>100K+</b> </h3>
                                    <h6>Auctions</h6>
                                </div>
                                <div className='col-lg-3 col-sm-3'>
                                    <h3> <b>240K+</b> </h3>
                                    <h6>Artists</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 '>
                        <div className="card hdcd col-cm-10">
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
