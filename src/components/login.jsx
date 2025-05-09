// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';
import Input from './input';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const login = async (data) => {
    setError('');
    try {
      const session = await authService.login(data);
      if (session) {
        navigate('/');  // I fixed your route here. You had navigate('/login') (which loops). You probably meant /user
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-center text-3xl font-extrabold text-blue-800 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="space-y-4">
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
            })}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
