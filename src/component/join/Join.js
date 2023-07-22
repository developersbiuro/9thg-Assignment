import React from 'react'
import joinimg from "../../assets/img/join.png"


export default function Join() {
    return (
        <div className='container tr' >
            <div className="card mb-3 joincard" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={joinimg} className="imgj img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title cdhead"><b>Join our weekly digest</b></h1>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
