import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card/Card'
const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let res = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      }
    });
    res = await res.json();
    setFoodItem(res[0]);
    setFoodCat(res[1]);
    // console.log(res[0],res[1]);
  }

  useEffect(() => {
    loadData();
  }, [])


  return (
    <div className='bg'>
      <Navbar />
      <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade justify-content-between" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
            <div class="carousel-inner" id='caro'>
                <div className='carousel-caption' style={{zIndex:"10"}}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="I want this Food" aria-label="Search"/>
                            <button className="btn" style={{"background":"#222222"}} type="submit">Search</button>
                    </form>
                </div>
                <div class="carousel-item active">
                    <img src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item active">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item active">
                    <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg" class="d-block w-100" alt="..." />
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
      </div>
      <div className='container'>
        {
          foodCat !== null ? foodCat.map((data) => {
            return <div className='row'>
              <div key={data._id} className='fs-3 m-3'>
                {data.CategoryName}
              </div>
              <hr />
              {foodItem !== null
                ?
                foodItem.filter((item) => item.CategoryName === data.CategoryName)
                  .map(f_list => {
                    return (
                      <div key={f_list._id} className='col-md-12 col-md-6 col-lg-3 m-2'>
                        <Card 
                          foodName={f_list.name}
                          options={f_list.options[0]}
                          imgSrc={f_list.img}
                          desc={"BEST TASTE"}
                        />
                      </div>
                    )
                  })
                : (
                  <div>Data Not Found</div>)
              }
            </div>
          }) : ""
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home
