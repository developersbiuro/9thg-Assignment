import React from 'react'
import img from "../..//assets/img/RocketLaunch.png"
import TopCard from '../topCard/TopCard'
import card1img from "../../assets/img/t1.png"
import card2img from "../../assets/img/t2.png"
import card3img from "../../assets/img/t3.png"
import card4img from "../../assets/img/t4.png"
import card5img from "../../assets/img/t5.png"
import card6img from "../../assets/img/t6.png"
import card7img from "../../assets/img/t7.png"
import card8img from "../../assets/img/t8.png"
import card9img from "../../assets/img/t9.png"
import card10img from "../../assets/img/t10.png"
import card11img from "../../assets/img/t11.png"
import card12img from "../../assets/img/t12.png"


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
                <TopCard src={card1img} title="Keepitreal" />
                <TopCard src={card2img} title="DigiLab" />
                <TopCard src={card3img} title="GravityOne" />
                <TopCard src={card4img} title="Juanie" />
                <TopCard src={card5img} title="BlueWhale" />
                <TopCard src={card6img} title="Mr Fox" />
                <TopCard src={card7img} title="Shroomie" />
                <TopCard src={card8img} title="Robotica" />
                <TopCard src={card9img} title="Keepitreal" />
                <TopCard src={card10img} title="Keepitreal" />
                <TopCard src={card11img} title="Keepitreal" />
                <TopCard src={card12img} title="Keepitreal" />

            </div>

            
        </div>


    )
}
