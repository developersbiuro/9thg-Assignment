import React from 'react'

export default function BrowseCard(props) {
    return (
        <div className='col-lg-3 col-sm-12'>

            <div className="card tpcd" >
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className='bs'>{props.title} </h2>
                </div>
            </div>

        </div>
    )
}
