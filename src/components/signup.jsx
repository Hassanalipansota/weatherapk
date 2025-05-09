// src/pages/Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';
import Input from './input';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const signup = async (data) => {
    setError('');
    try {
      const account = await authService.createAccount(data);
      if (account) {
        navigate('/'); 
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center pt-14 justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-center text-3xl font-extrabold text-blue-800 mb-2">Create an Account</h2>
        <p className="text-center text-gray-500 mb-6">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit(signup)} className="space-y-4">
          <Input
            label="Name"
            placeholder="Enter your name"
            type="text"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
              },
            })}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  'Email address must be valid',
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
