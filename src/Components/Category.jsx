import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

    const [category, setCategory] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/category')
        .then(result => {
            if(result.data.Status) {
                setCategory(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_category/'+id)
        .then(result => {
            if(result.data.Status) {
                window.location.reload()
            } else {
                alert(result.data.Error)
            }
        })
      } 

  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Cetegory List</h3>
        </div>
        <Link to="/dashboard/add_category" className='btn btn-success'>Add Cetegory</Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map(c => (
                            <tr>
                                <td>{c.name}</td>
                                <td>{c.description}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c.id)}>
                                    Delete
                                    </button>
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

export default Category