import React from 'react'
const img1 = 'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg';
const Card = (props) => {

    let option=props.options;
    let priceoptions=Object.keys(option)

    return (
        <div className="card mt-3 m-2" style={{ "background": "#191d2b", 'color': "#00d9ff", "width": "18rem", "maxHeight": "360px" }}>
            <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"180px"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.foodName}</h5>
                <p className="card-text">{props.desc}</p>
                <div className='container w-100'>
                    <select className='m-2 h-100 '  >
                        {
                            Array.from(Array(6), (e,i) => {
                                return (
                                    <option key={i + 1} value={i+1}>{i+1}</option>
                                )
                            })
                        }
                    </select>
                    <select className='m-2 h-100 rounded'>
                        {
                            priceoptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })
                        }
                    </select>
                    <div className='d-inline h-100 fs-5'>Price</div>
                </div>
            </div>
        </div>
    )
}

export default Card
