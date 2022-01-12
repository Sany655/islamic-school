import img1 from '../../Images/carousal/e.png'
import img2 from '../../Images/carousal/b.jpg'
import img3 from '../../Images/carousal/d.jpg'
import useCourses from '../../hooks/useCourses'
import useEnroll from '../../hooks/useEnroll'

function Home() {
    const [courses] = useCourses()
    const [enrolled, handleEnroll] = useEnroll()
    return (
        <div className='container-lg'>
            <div id="carouselExampleSlidesOnly" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" style={{ height: '60vh' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" style={{ height: '60vh' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" style={{ height: '60vh' }} alt="..." />
                    </div>
                </div>
            </div>
            <section className='mt-5 mb-5'>
                <h2>Top Courses <hr /></h2>
                <div className="">
                    <div className="row">
                        {
                            courses.slice(0, 4).map((course, key) => (
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
        </div>
    )
}

export default Home
