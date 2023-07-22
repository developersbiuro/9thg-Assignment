import React from 'react'



export default function WorkCard(props) {
    return (
        <div className='col-lg-4 col-sm-10'>
            <div class="card wcd" >
                <img src={props.src} class="card-img-top" alt="..."/>
                    <div class="card-body wbd">
                        <h3>{props.title}</h3>
                        <p class="card-text">{props.para}</p>
                    </div>
            </div>
        </div>
    )
}
