import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddLaptop.css"


export default function AddLaptops() {

    const [brand, setBrand] = useState();
    const [model, setmodel] = useState();
    const [quantity, setQuantity] = useState();
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/addLaptop", {brand, model, quantity})
        .then(result => {
            console.log(result)
            navigate('/laptop') 
            })
        .catch(err => console.log(err));
    }

    return (
        <div className=" add-laptop"> 
            <div className="form-add-laptop" >
                <form onSubmit={Submit}>
                    <h2>ADD LAPTOP</h2>
                    <div className="mb-2">
                        <label className="addL-lebel">Brand</label>
                        <input type="text" placeholder="Enter Brand" className="form-control"
                        onChange={(e) => setBrand(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label className="addL-lebel">Model</label>
                        <input type="text" placeholder="Enter Model" className="form-control"
                        onChange={(e) => setmodel(e.target.value)}/> 
                    </div>
                    <div className="mb-2">
                        <label className="addL-lebel">Quantity</label>
                        <input type="text" placeholder="Enter Quantity" className="form-control"
                        onChange={(e) => setQuantity(e.target.value)}/> 
                    </div>
                    <button className="btn-submit">ADD</button>
                </form>
            </div>
        </div>
    )
}