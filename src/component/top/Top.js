import React from 'react'
import img from "../..//assets/img/RocketLaunch.png"
import TopCard from '../topCard/TopCard'


export default function Top() {
    return (
        <div className='container'>
            <div className='row tr' >
                <div className='col-lg-8'>
                    <h1 className='trhd '>TOP Creators</h1>
                    <h5 className='trhd'>Checkout Top Rated Creators on the NFT Marketplace</h5>
                </div>
                <div className='col-lg-4'>
                    <button type="button" class="btn-lg btn btn-outline-primary topbt"><img src={img} /> View Rankings</button>
                </div>

            </div>
            <div className='row'>

            </div>

            
        </div>


    )
}
