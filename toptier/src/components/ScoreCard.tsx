import * as React from "react";
import { useState } from "react";
import { ScoreCardContent } from "./ScoreCardContent";
import edit from "@/assets/edit.png";
import deleteImg from "@/assets/delete.png";

interface ScoreCardProps {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
  userIdentification: string;
  game: string;
  editable: boolean;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({
  _id,
  imageUrl,
  title,
  description,
  editable,
  game
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winCount, setWinCount] = useState(title.replace(" wins", ""));
  const [updatedWinCount, setUpdatedWinCount] = useState(winCount);

  const handleEditClick = () => {
    setUpdatedWinCount(winCount); // Reset input field
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (editable) {
      try {
        const response = await fetch(`/api/items/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({game, winCount: updatedWinCount }),
        });

        if (!response.ok) {
          throw new Error("Failed to update win count");
        }

        setIsModalOpen(false);
        window.location.reload();
      } catch (err) {
        console.error(err);
        alert("Error updating win count.");
      }
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/items/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Delete error:", errorData.message);
        throw new Error("Failed to delete");
      }
  
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Error deleting score.");
    }
  };

  return (
    <article className="relative flex flex-wrap gap-6 items-start p-6 w-full bg-white rounded-lg border border-solid border-zinc-300 min-w-60 max-md:px-5 max-md:max-w-full">
      <img
        src={imageUrl}
        alt={title}
        className="object-contain shrink-0 w-40 aspect-square min-h-40 min-w-40"
      />
      <div className="flex-1 shrink basis-0 min-w-40 max-md:max-w-full">
        <ScoreCardContent title={`${winCount}`} description={description} />
      </div>

      {editable && (
        <div className="flex gap-5">
          <div className="cursor-pointer" onClick={handleEditClick}>
            <img src={edit.src} alt="Edit" />
          </div>

          <div>
            <img src={deleteImg.src} alt="Delete" onClick={handleDelete}/>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="flex justify-center fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-white shadow-xl border border-gray-300 rounded-xl">
          <div className="bg-white p-6 w-full">
            <h3 className="text-lg font-semibold mb-4">Edit Wins</h3>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={updatedWinCount}
              onChange={(e) => setUpdatedWinCount(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
