import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate('/');
    } catch (error) {
      console.log('Ini Errornya ==>', error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };
  return (
    <div className="form-control grid grid-cols-1 gap-6 ml-5 py-5">
      <form onSubmit={updateUser}>
        <label className="block">
          <span className="mr-5">Name</span>
          <input type="text" placeholder="Name" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="block">
          <span className="mr-5">Email</span>
          <input type="text" placeholder="Email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span className="mr-3">Gender</span>
          <select className="select select-bordered w-full max-w-xs" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <div>
          <button className="btn btn-success">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
