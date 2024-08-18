import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signupcom = () => {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let endpoint = '';

    if (role === 'student') {
      endpoint = 'http://localhost:5000/api/user/signup';
    } else if (role === 'busadmin') {
      endpoint = '/user/busadmin';
    } else if (role === 'bussuperadmin') {
      endpoint = '/user/busSuperadmib';
    }

    try {
      const response = await axios.post(endpoint, formData);
      console.log('Signup Successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>

        <div className="flex justify-around mb-6">
          <button
            onClick={() => handleRoleChange('student')}
            className={`py-2 px-4 rounded ${
              role === 'student' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
          >
            Student
          </button>
          <button
            onClick={() => handleRoleChange('busadmin')}
            className={`py-2 px-4 rounded ${
              role === 'busadmin' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
          >
            Bus Admin
          </button>
          <button
            onClick={() => handleRoleChange('bussuperadmin')}
            className={`py-2 px-4 rounded ${
              role === 'bussuperadmin' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
          >
            Bus Super Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {role === 'student' && (
            <>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="id"
                placeholder="ID"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="place"
                placeholder="Place"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </>
          )}

          {role === 'busadmin' && (
            <>
              <input
                type="text"
                name="userName"
                placeholder="Username"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                name="employeeId"
                placeholder="Employee ID"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="bus"
                placeholder="Bus"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                name="phoneNo"
                placeholder="Phone No"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </>
          )}

          {role === 'bussuperadmin' && (
            <>
              <input
                type="text"
                name="userName"
                placeholder="Username"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                name="employeeId"
                placeholder="Employee ID"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="bus"
                placeholder="Bus"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                name="phoneNo"
                placeholder="Phone No"
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signupcom;
