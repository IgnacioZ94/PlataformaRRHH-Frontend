import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
    const [category, setCategory] = useState({
        name: "",
        description: ""
    });

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(category)
        const formData = new FormData();
        formData.append('name', category.name);
        formData.append('description', category.description);
        console.log(formData)
        axios.post('http://localhost:3000/auth/add_category', {category})
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/category')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
        <div className='p-3 rounded w-25 border'>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label for="inputName" className="form-label">
                        <strong>
                        Category:
                        </strong>
                    </label>
                    <input 
                    type="text"
                    className='form-control rounded-0'
                    id='inputName'
                    placeholder='Enter Category'
                     onChange={(e) => 
                        setCategory({ ...category, name: e.target.value })} 
                    />
                    <label for="inputDescription" className="form-label">
                        <strong>
                            Description:
                        </strong>
                    </label>
                    <input 
                    type="text" 
                    className='form-control rounded-0'
                    id='inputDescription'
                    placeholder='Enter Description'
                     onChange={(e) => 
                        setCategory({ ...category, description: e.target.value })}
                     />
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Add Category</button>
            </form>
        </div>
    </div>
  )
}
export default AddCategory