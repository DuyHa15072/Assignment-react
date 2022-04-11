import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="https://conversestore.vn/wp-content/uploads/2021/07/z2647671391884_0b98febd92e957af3beefa4995c2a0d5-0x600.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content htmlFor the first slide.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src="https://pubcdn.ivymoda.com/files/news/2022/01/17/b4b52ab3742c304599a40807b44e62d1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content htmlFor the second slide.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src="https://pubcdn.ivymoda.com/files/news/2022/01/17/b4b52ab3742c304599a40807b44e62d1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content htmlFor the third slide.</p>
            </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>

  )
}

export default Banner