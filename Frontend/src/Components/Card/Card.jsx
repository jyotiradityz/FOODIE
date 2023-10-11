import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from '../ContextReducer';
const Card = (props) => {
    let dispatch = useDispatchCart();
    let option = props.options;
    let priceoptions = Object.keys(option)
    const priceref=useRef() 
    let data = useCart()
    const [size, setSize] = useState("")
    const [qty, setQty] = useState(1)
    const handleAdd = async () => {
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: finalprice,
            qty: qty,
            size: size,
        })
        console.log(data);
    }

    let finalprice = qty * parseInt(option[size]);
    useEffect(()=>{
        setSize(priceref.current.value)
    })
    return (
        <div className="card mt-3 m-2" style={{ "background": "#191d2b", 'color': "#00d9ff", "width": "18rem", "maxHeight": "360px" }}>
            <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "180px" }} />
            <div className="card-body">
                <h5 className="card-title">{props.foodItem.name}</h5>
                <p className="card-text">{props.desc}</p>
                <div className='container w-100'>
                    <select className='m-2 h-100' onChange={(e) => { setQty(e.target.value) }}>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })
                        }
                    </select>
                    <select className='m-2 h-100 rounded' ref={priceref} onChange={(e) => { setSize(e.target.value) }}>
                        {
                            priceoptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })
                        }
                    </select>
                    <div className='d-inline h-100 fs-5'>₹{finalprice}</div>
                </div>
            </div>
            <button className={`btn justify-center fs-5`} style={{ color: "black", background: "#00d9ff" }} onClick={handleAdd}>Add to Cart</button>
        </div>
    )
}

export default Card
