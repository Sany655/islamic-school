import React from 'react'
import useCourses from '../../hooks/useCourses'
import useEnroll from '../../hooks/useEnroll'

function Courses() {
    const [courses] = useCourses()
    const [enrolled, handleEnroll] = useEnroll()
    
    return (
        <section className='container my-5'>
            <h2>Available Courses <hr /></h2>
            <div className="">
                <div className="row">
                    {
                        courses.map((course, key) => (
                            <div key={key} className="col-12 col-md-6 col-lg-3 my-2">
                                <div className="card">
                                    <img src={course.img} className="card-img-top" alt="..." style={{ height: '250px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{course.name}</h5>
                                        <p className="card-text">Hadia {course.hadia}</p>
                                        <button className="btn btn-primary" onClick={()=>handleEnroll(course)}>Start Course</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Courses
