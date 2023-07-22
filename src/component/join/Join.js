import React from 'react'
import joinimg from "../../assets/img/join.png"
import evimg from "../../assets/img/EnvelopeSimple.png"


export default function Join() {
    return (
        <center>
            <div className='container tr' >
                <div className="card mb-3 joincard col-sm-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={joinimg} className="imgj  img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body imgj cdh">
                                <h1 className="card-title cdhead"><b>Join our weekly digest</b></h1>
                                <p className="card-text">Get exclusive promotions & updates straight to your inbox.</p>
                                <div class="form-floating col-lg-6 col-sm-12 em">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Enter your email here</label>
                                </div>
                                <div className='col-lg-4 col-sm-12'>
                                    <button type="button" className="btn btn-primary bt"><img src={evimg} /> Subscribe</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}
