import React from 'react'

export default function TopCard(props) {
    return (
        <div class="card text-center mb-3 col-lg-3 tpcd " >
            <div class="card-body">
                <img src={props.src} />
                <h2 class="card-title">{props.title} </h2>
                <p>Total Sales: 34.53 ETH</p>


            </div>
        </div>
    )
}
