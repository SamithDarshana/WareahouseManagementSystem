import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateLaptop.css"

export default function UpdateLaptops() {

    const {id} = useParams(); 
    const [brand, setBrand] = useState();
    const [model, setmodel] = useState();
    const [quantity, setQuantity] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getLaptop/' + id)
        .then(result => {console.log(result)
            setBrand(result.data.brand)
            setmodel(result.data.model)
            setQuantity(result.data.quantity)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateLaptop/" + id, {brand, model, quantity})
        .then(result => {
            console.log(result)
            navigate('/laptop') 
            })
        .catch(err => console.log(err));
        }

    return (
         
            <div className="update-laptop"> 
                <div className="form-update-laptop">
                    <form onSubmit={Update}>
                        <h2>UPDATE LAPTOP</h2>
                        <div className="mb-2">
                            <label className="updateL-lebel">Brand</label>
                            <input type="text" placeholder="Enter Brand" className="form-control"
                            value={brand} onChange={(e) => setBrand(e.target.value)}/> 
                        </div>
                        <div className="mb-2">
                            <label className="updateL-lebel">Model</label>
                            <input type="text" placeholder="Enter Model" className="form-control"
                            value={model} onChange={(e) => setmodel(e.target.value)}/> 
                        </div>
                        <div className="mb-2">
                            <label className="updateL-lebel">Quantity</label>
                            <input type="text" placeholder="Enter Quantity" className="form-control"
                            value={quantity} onChange={(e) => setQuantity(e.target.value)}/> 
                        </div>
                        <button className="btn-submit">UPDATE</button>
                    </form>
                </div>
            </div>
         
    )
}