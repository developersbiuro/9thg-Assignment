import React from 'react'

export default function TopCard(props) {
    return (
        <div className='col-lg-3 col-sm-6'>
            <div className="card text-center mb-3  tpcd " >
            <div className="card-body">
                <img src={props.src} />
                <h3 className="card-title">{props.title} </h3>
                <p>Total Sales: 34.53 ETH</p>


            </div>
        </div>
        </div>
    )
}
