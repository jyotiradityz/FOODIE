import React from 'react'
const img1 = 'https://media01.stockfood.com/largepreviews/NDE0NTQyMjMw/13372330-Burger-with-cheese-and-lettuce-against-a-black-background.jpg';
const Card = () => {
    return (
        <div className="flex card mt-3 m-3" style={{ "background": "#191d2b", 'color': "#00d9ff", "width": "18rem", "maxHeight": "360px" }}>
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Burger</h5>
                <p className="card-text">Very Tasty thing</p>
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
                        <option value="Half">Half</option>
                        <option value="Full">Full</option>
                    </select>
                    <div className='d-inline h-100 fs-5'>Price</div>
                </div>
            </div>
        </div>
    )
}

export default Card
