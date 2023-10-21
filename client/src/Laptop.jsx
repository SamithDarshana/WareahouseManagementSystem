import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom" 
import NavBar from "./NavBar";
import "./Laptop.css"

export default function Laptop() {

    const navigate = useNavigate()

    const [laptops, setLaptops] = useState([{
        Brand: "yousaf", Model: "ysf@gmail.com", Quantity: 20
    }])

    useEffect(() => {
        axios.get('http://localhost:3001/laptops')
        .then(result => setLaptops(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteLaptop/" + id)
        .then(res => {console.log(res)
        window.location.reload() })
        .catch(err => console.log(err)) 
    }

    const handleupdate = (id) => {
        navigate(`/updateLaptop/${laptop._id}`)
    }
 
    return (
         
        <div className="laptop">
            <NavBar/>
            <div className="laptop-form">
                <Link to={"/addLaptop"} className="btn-add">ADD LAPTOP</Link>
                <table className="table">
                    <thead >
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            laptops.map((laptop) => {
                                return    <tr>
                                    <td>{laptop.brand}</td>
                                    <td>{laptop.model}</td>
                                    <td>{laptop.quantity}</td>
                                    <td> 
                                        <Link to={`/updateLaptop/${laptop._id}`} className="btn-update">UPDATE</Link> 
                                        <button className="btn-delete"
                                        onClick={(e) => handleDelete(laptop._id)}>DELETE</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}