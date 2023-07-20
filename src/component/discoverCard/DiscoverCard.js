import React from 'react'
import logoimg from "../../assets/img/Asset 12 2.png"

export default function DiscoverCard(props) {
    return (

        <div className='col-lg-4 col-sm-12'>
            <div className="card dscd " >
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body row trhds">
                    <h3 className='trhd'>{props.title}</h3>
                    <h6 className='cdh ps'><img src={logoimg} /> {props.logotitle} </h6>

                    <div className='col-lg-6 trhd topbt'>
                        <p className='pr'>Price</p>
                        <h6 className='ps'>1.63 ETH</h6>
                    </div>
                    <div className='col-lg-6 trhd topbt'>
                        <p className='pr'>Highest Bid</p>
                        <h6 className='ps'>0.33 wETH</h6>
                    </div>


                </div>
            </div>
        </div>

    )
}
