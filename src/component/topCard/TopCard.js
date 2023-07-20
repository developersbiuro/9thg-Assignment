import React from 'react'

export default function TopCard(props) {
    return (
        <div class="card text-center mb-3 col-lg-3" style="width: 18rem;">
            <div class="card-body">
                <img src={props.src} />
                <h5 class="card-title">{props.title} </h5>

                
            </div>
        </div>
    )
}
