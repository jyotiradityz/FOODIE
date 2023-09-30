import React from 'react'

const Caraousel = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade justify-content-between" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
            <div class="carousel-inner" id='caro'>
                <div className='carousel-caption' style={{zIndex:"10"}}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="I want this Food" aria-label="Search"/>
                            <button className="btn" style={{"background":"#222222"}} type="submit">Search</button>
                    </form>
                </div>
                <div class="carousel-item active">
                    <img src="https://source.unsplash.com/random/1800x1000/?burger" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item active">
                    <img src="https://source.unsplash.com/random/1800x1000/?burger" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item active">
                    <img src="https://source.unsplash.com/random/1800x1000/?burger" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Caraousel
