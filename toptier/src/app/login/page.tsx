'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from "@/components/Card";

export default function LoginHome() {
    
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
      // prevent default browser action
      e.preventDefault();
  
      // temporary substitute action
      console.log(`game: ${formData.username}`);
      console.log(`userIdentification: ${formData.password}`);
  
      // reset form data
      setFormData({ username: '', password: ''});
  
      // re-route web user
      router.push('/auth-view');
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0C0F11] text-black">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Log in to TopTier</h2>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange} // Fixed
                placeholder="Username"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <input
                name="password"
                type="text"
                value={formData.password}
                onChange={handleChange} // Fixed
                placeholder="Password"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300"
                >
                  Login
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  } // login page Home component