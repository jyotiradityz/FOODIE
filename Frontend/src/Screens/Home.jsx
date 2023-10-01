import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card/Card'
import Caraousel from '../Components/Caraousel'
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
        <Caraousel />
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
                      <div key={f_list._id} className='col-12 col-md-6 col-lg-3'>
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
