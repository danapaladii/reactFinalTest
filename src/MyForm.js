import React, { useState } from 'react';

function MyForm() {
    const [formData, setFormData]  = useState({
        name:'',
        email: '',

    });
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit ={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default MyForm;