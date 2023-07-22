import React from 'react'



export default function WorkCard(props) {
    return (
        <div className='col-lg-4 col-sm-10'>
            <div className="card wcd" >
                <img src={props.src} className="card-img-top" alt="..."/>
                    <div className="card-body wbd">
                        <h3>{props.title}</h3>
                        <p className="card-text">{props.para}</p>
                    </div>
            </div>
        </div>
    )
}
