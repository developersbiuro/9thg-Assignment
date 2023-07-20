import React from 'react'
import btimg from "../../assets/img/1025+.png"


export default function TrendCard(props) {
    return (
        <div className='col-lg-4 col-sm-12 trcard'>

            <div className='container card con'>
                <img src={props.src} />
                <div className='row trcard'>

                      <img src={props.asrc} className='simg' /> 
                     <img src={props.bsrc} className='simg' /> 
                    <button type="button" className="btn btn-primary  cdbt"><img src={btimg} /></button>

                </div>
                <h3 className='cdh'>{props.title} </h3><br />
                <h6 className='cdh'><img src={props.logosrc} /> {props.para} </h6>
            </div>
        </div>
    )
}
