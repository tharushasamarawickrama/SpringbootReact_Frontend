import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  });

  useEffect(() => {
    const fetchStudent = async () => {
      const res = await axios.get(`http://localhost:8080/students/student/${id}`);
      setStudent(res.data);
    };
    fetchStudent();
  }, [id]);

  const { firstName, lastName, email, department } = student;

  return (
    <div className='container col-sm-8 py-2 px-5 shadow'>
      <h2 className='mt-5'>Student Profile</h2>
      <form>
        <div className='input-group mb-5 mt-5'>
          <label className='input-group-text' htmlFor='firstName'>
            First Name
          </label>
          <input
            className='form-control col-sm-6'
            type='text'
            name='firstName'
            id='firstName'
            value={firstName}
            readOnly
          />
        </div>
        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='lastName'>
            Last Name
          </label>
          <input
            className='form-control col-sm-6'
            type='text'
            name='lastName'
            id='lastName'
            value={lastName}
            readOnly
          />
        </div>
        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='email'>
            Your Email
          </label>
          <input
            className='form-control col-sm-6'
            type='text'
            name='email'
            id='email'
            value={email}
            readOnly
          />
        </div>
        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='department'>
            Department
          </label>
          <input
            className='form-control col-sm-6'
            type='text'
            name='department'
            id='department'
            value={department}
            readOnly
          />
        </div>
        <div className='row mb-5'>
          <div className='col-sm-2'>
            <Link to={"/view-students"} className='btn btn-outline-secondary btn-lg'>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;