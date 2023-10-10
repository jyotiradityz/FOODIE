
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card/Card';

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state

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
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div className='bg'>
      <Navbar />
      <div>
        <div className="carousel-inner" id='caro'>
          <div>
            <div className="carousel-inner" id='caro'>
              <div className='carousel-caption'>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="I want this Food"
                    aria-label="Search"
                    style={{ zIndex: "100" }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn" style={{ "background": "#222222" }} type="submit">Search</button>
                </form>
              </div>
              <div className="carousel-item active">
                <img src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item active">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item active">
                <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          {foodCat !== null ? foodCat.map((data) => {
            const filteredFoodItems = foodItem.filter(
              (item) =>
                item.CategoryName === data.CategoryName &&
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredFoodItems.length === 0) {
              return null; 
            }

            return (
              <div className='row' key={data._id}>
                <div className='fs-3 m-3'>{data.CategoryName}</div>
                <hr />
                {filteredFoodItems.map((f_list) => (
                  <div key={f_list._id} className='col-12 col-md-6 col-lg-3'>
                    <Card
                      foodName={f_list.name}
                      options={f_list.options[0]}
                      imgSrc={f_list.img}
                      desc={"BEST TASTE"}
                    />
                  </div>
                ))}
              </div>
            );
          }) : ""}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;