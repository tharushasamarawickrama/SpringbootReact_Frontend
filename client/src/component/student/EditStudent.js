import React, { useEffect, useState } from 'react';
import axios from "axios";

import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  
    let navigate = useNavigate();

    const {id} = useParams();

    const [student, setStudent] = useState({
        firstName : '',
        lastName : '',
        email : '',
        department : ''
    })

    const{firstName,lastName,email,department} =student;

    useEffect(()=>{
    loadStudent();
},[]);

const loadStudent = async()=>{
    const result = await axios.get(`http://localhost:8080/students/student/${id}`);
    setStudent(result.data);
    
};

    const handleInputChange = (e) =>{
        setStudent({...student, [e.target.name] : e.target.value});
    };


    const updateStudent = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/students/update/${id}`,student);
        navigate("/view-students");
    };

  return (
    <div className='container col-sm-8 py-2 px-5 shadow'>
        <h2 className='mt-5'>Edit Student</h2>
        <form onSubmit={(e)=> updateStudent(e)} >
            <div className='input-group mb-5 mt-5'>
                <label className='input-group-text' htmlFor='firstName'>
                    First Name
                </label>
                <input className='form-control col-sm-6' type='text' name='firstName' id='firstName' value={firstName} onChange={(e)=>handleInputChange(e)} required />
                
            </div>
            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='lastName'>
                    Last Name
                </label>
                <input className='form-control col-sm-6' type='text' name='lastName' id='lastName' value={lastName} onChange={(e)=>handleInputChange(e)} required />
                
            </div>
            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='email'>
                    Your Email
                </label>
                <input className='form-control col-sm-6' type='text' name='email' id='email' value={email} onChange={(e)=>handleInputChange(e)} required />
                
            </div>
            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='department'>
                    Department
                </label>
                <input className='form-control col-sm-6' type='text' name='department' id='department' value={department} onChange={(e)=>handleInputChange(e)} required />
                
            </div>
            <div className='row mb-5'>
                <div className='col-sm-2'>
                    <button type='submit' className='btn btn-outline-success btn-lg'>
                        Save
                    </button>
                </div>

                <div className='col-sm-2'>
                    <Link to={"/view-students"} type='submit' className='btn btn-outline-warning btn-lg'>
                        Cancel
                    </Link>
                </div>

            </div>
        </form>
    </div>
  )
}

export default EditStudent