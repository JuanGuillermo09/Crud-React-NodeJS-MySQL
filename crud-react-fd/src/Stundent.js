import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function Studentn(){

    const[studentn, setStudentn] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setStudentn(res.data))
        .catch(err => console.log(err));
    }, [])

const handleDelete = async (Id) =>{

    try{
        await axios.delete('http://localhost:8081/studentn/' +Id,);
        window.location.reload();
    }catch(err){
        console.log(err);
        

    }


}

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
           <div className="w-50 bg-white p-4 rounded "> 
               <Link to="/create" className="btn btn-success ">ADD +</Link>
               <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentn.map((data, i) => (
                            <tr key={i}>
                                <td>{data.Id}</td>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>
                                    <Link to={`update/${data.Id}`} className="btn btn-primary">Update</Link>
                                    <button className="btn btn-danger ms-2" onClick={e => handleDelete(data.Id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
               </table>

           </div>

        </div>
    )
}

export default Studentn