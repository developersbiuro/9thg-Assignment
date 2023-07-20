import React from 'react'
import btimg from "../../assets/img/1025+.png"


export default function TrendCard(props) {
    return (

        <div className='col-lg-4 card con'>
            <img src={props.src} />
            <div className='row trcard'>

                <div className='col-lg-3'>  <img src={props.asrc} className='simg' /> </div>
                <div className='col-lg-3'>  <img src={props.bsrc} className='simg' /> </div>
                <div className='col-lg-3'><button type="button" className="btn btn-primary btn-lg cdbt"><b><img src={btimg} /></b></button></div>

            </div>
            <h3 className='cdh'>{props.title} </h3><br/>
            <h6 className='cdh'><img src={props.logosrc} /> {props.para} </h6>
        </div>
    )
}
