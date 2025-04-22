'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from "@/components/Card";

export default function ItemAddForm() {
    
    // dynamically updated/saved form data
    let [formData, setFormData] = useState({
      game: '',
      userIdentification: '',
      winCount: '',
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
      console.log(`game: ${formData.game}`);
      console.log(`userIdentification: ${formData.userIdentification}`);
      console.log(`win count: ${formData.winCount}`);
  
      // reset form data
      setFormData({ game: '', userIdentification: '', winCount: '' });
  
      // re-route web user
      router.push('/auth-view');
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0C0F11] text-black">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Add a New Highscore</h2>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="game"
                type="text"
                value={formData.game}
                onChange={handleChange} // Fixed
                placeholder="Game"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <input
                name="userIdentification" // Fixed name to match the state key
                type="text"
                value={formData.userIdentification}
                onChange={handleChange} // Fixed
                placeholder="User Identification"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <input
                name="winCount" // Fixed name to match the state key
                type="text"
                value={formData.winCount}
                onChange={handleChange} // Fixed
                placeholder="Win Count"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300"
                >
                  Add Highscore
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }
  