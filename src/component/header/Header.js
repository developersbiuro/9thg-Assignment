
import React from 'react'
import getimg from "../../assets/img/RocketLaunch.png"
import hcard from "../../assets/img/dis1.png"
import cdimg from "../../assets/img/Avatar Placeholder (1).png"


export default function Header() {
    return (
        <div className='container tr'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-sm-12'>
                        <h1 className='hd' > Discover              Digital Art & Collect NFTs</h1>
                        <p className='phd'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                        <button type="button" class=" cdh btn btn-primary btn-lg bt"><img src={getimg} /> Get Started</button>






                    </div>
                    <div className='col-lg-4 col-sm-12 '>
                        <div className="card hdcd col-cm-10">
                            <img src={hcard} className="card-img-top" alt="..." />
                            <div className="card-body cdh">
                                <h3 >Space Walking</h3>
                                <img src={cdimg} /> Animakids
                            </div>
                        </div>

                    </div>

                </div>
                <div className='row sp '>
                    <span className='hdb'> <b>240K+</b> <br /> Total Sale</span>
                    
                    <span className='hdb'> <b>100K+</b> <br /> Auctions </span>

                    <span className='hdb'> <b>240K+</b> <br /> Artists </span>

                </div>
            </div>
        </div>
    )
}
