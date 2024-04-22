import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import "./TeleVision.css"

export default function TeleVision() {

    const [televisions, setTelevisions] = useState([{
        Brand: "yousaf", Model: "ysf@gmail.com", Quantity: 20
    }])

    useEffect(() => {
        axios.get('http://localhost:3001/televisions')
        .then(result => setTelevisions(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteTelevision/" + id)
        .then(res => {console.log(res)
        window.location.reload() })
        .catch(err => console.log(err))

    }

    return (
        <div className="television">
        <NavBar/>
        <div className="television-form">
            <Link to={"/addTelevision"} className="btn-add">Add Television</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        televisions.map((television) => {
                            return    <tr>
                                <td>{television.brand}</td>
                                <td>{television.model}</td>
                                <td>{television.quantity}</td>
                                <td>
                                    <Link to={`/updateTelevision/${television._id}`} className="btn-update">Update</Link>
                                    <button className="btn-delete"
                                    onClick={(e) => handleDelete(television._id)}>Delete</button>
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