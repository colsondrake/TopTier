'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from "@/components/Card";

export default function SignupHome() {

  // dynamically updated/saved form data
  let [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const router = useRouter();

  // function to handle changes in the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // function to execute when submit button is pressed
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        router.push("/auth-view");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error submitting signup form:', error);
      alert('Something went wrong.');
    }

    setFormData({ username: '', password: '' });
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0C0F11] text-black">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register an Account with TopTier</h2>
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange} // Fixed
              placeholder="Enter a username"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <input
              name="password"
              type="text"
              value={formData.password}
              onChange={handleChange} // Fixed
              placeholder="Enter a password"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
} // sign up page Home component