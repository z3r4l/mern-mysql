import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddUsers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name,
        email,
        gender,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white">
      <div className="flex justify-center bg-primary ">
        <form onSubmit={saveUser} className="form-control">
          <label className="mt-2">
            <span className="mr-5 justify-center">Name</span>
            <input type="text" placeholder="Name" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label className="mt-2">
            <span className="mr-5">Email</span>
            <input type="text" placeholder="Email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="mt-2">
            <span className="mr-3">Gender</span>
            <select className="select select-bordered w-full max-w-xs" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <div>
            <button className="btn btn-success mt-4">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
