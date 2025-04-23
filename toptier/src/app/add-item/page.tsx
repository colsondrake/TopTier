'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from "@/components/Card";

export default function ItemAddForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    game: 'Fortnite',
    winCount: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit form data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to add a score.");
      return;
    }

    try {
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        router.push("/auth-view"); // Redirect to dashboard or scores view
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong.');
    }

    setFormData({ game: 'Fortnite', winCount: '' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0C0F11] text-black">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Add a New Highscore</h2>
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <select
              name="game"
              value={formData.game}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
            >
              <option value="Fortnite">Fortnite</option>
              <option value="Warzone">Warzone</option>
              <option value="Wordle">Wordle</option>
            </select>

            <input
              name="winCount"
              type="text"
              value={formData.winCount}
              onChange={handleChange}
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
