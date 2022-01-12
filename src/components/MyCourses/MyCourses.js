import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import useEnroll from '../../hooks/useEnroll'

function MyCourses() {
    const [enrolled, handleEnroll] = useEnroll()
    return (
        <div className='container-lg'>
            <h1 className="text-center">Welcome back to your course</h1>
            <hr />
            <div className="row g-3 mb-5">
                {
                    enrolled.length<1?
                    <p className="text-center d-flex justify-content-center align-items-center" style={{height:'60vh'}}>You have no course to continue</p>
                    :enrolled.map((e, i) => (
                        <div key={i} className="col-12 col-md-6">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={e.img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{e.name}</h5>
                                            <p className="card-text"><small className="text-muted">Starting in <Countdown date={Date.now() + 10000000}></Countdown></small></p>
                                            <button onClick={()=>handleEnroll(e,'-')} className="btn btn-danger">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyCourses
