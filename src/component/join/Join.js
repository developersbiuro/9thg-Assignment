import React from 'react'
import joinimg from "../../assets/img/join.png"
import evimg from "../../assets/img/EnvelopeSimple.png"


export default function Join() {
    return (
        <center>
            <div className='container tr' >
                <div className="card  joincard col-sm-12" >
                    <div className="row g-0">
                        <div className="col-lg-6 col-sm-8">
                            <img src={joinimg} className="img-fluid rounded-start im" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body imgj row cdh">
                                <h1 className="card-title cdhead"><b>Join our weekly digest</b></h1>
                                <p className="card-text">Get exclusive promotions & updates straight to your inbox.</p>
                                <div className="form-floating col-lg-6 col-sm-12 trcard em">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Enter your email here</label>
                                </div>
                                <div className='col-lg-6 col-sm-12 trcard'>
                                    <button type="button" className="btn btn-primary btn-lg bt jbt"><img src={evimg} /> Subscribe</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}
