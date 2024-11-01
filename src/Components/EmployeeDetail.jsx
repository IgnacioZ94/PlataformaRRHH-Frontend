import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Employee from './Employee'


const EmployeeDetail = () => {
    const [employee, setEmployee] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/employee/detail/'+id)
        .then(result => {
            setEmployee(result.data.Result)
        })
        .catch(err => console.log(err))
    }, []);

    const handleLogout = () => {
        axios.get('http://localhost:3000/employee/logout')
        .then(result => {
          if(result.data.Status) {
            localStorage.removeItem("valid")
            navigate('/')
          }
        }).catch(err => console.log(err))
      };


  console.log("=========>",employee)
  return (
    <div>
        <div className="p-2 d-flex justify-content-center shadow">
            <h4>Emoployee Management System</h4>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
        <img src={`http://localhost:3000/Images/`+ employee[0].image} className='emp_det_image'/>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>Name: {employee[0].name}</h3>
                <h3>Email: {employee[0].email}</h3>
                <h3>Salary: ${employee[0].salary}</h3>
            </div>
            <div>
                <button className='btn btn-primary me-2'>Edit</button>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDetail