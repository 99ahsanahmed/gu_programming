import React from "react";
import { useParams } from "react-router-dom";
const UserProfile = () => {
  const [edit, setEdit] = React.useState(false);
  const {usr_id} = useParams();
  return (
    <div className="h-screen bg-[#3B1A69] flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full">
        
        <div className="flex flex-col items-center p-6">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFpRscIgNJRVg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681421050295?e=1740614400&v=beta&t=xyIoypQyIMLKdzfZWzGszdC2CAKmwJJmm5vPtXQjd9E"
            alt=""
            className="w-32 h-32 rounded-full object-cover border-4 border-[#3B1A69]"
          />
          <h1 className="text-2xl font-bold mt-4">{usr_id}</h1>
          <p className="text-gray-600">HTML developer.</p>
        </div>

        
        <div className="border-t border-gray-200 p-6 grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-500">Email</h3>
            <p className="text-gray-800">{usr_id}@</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500">Password</h3>
            <p className="text-gray-800">09 06 78601</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500">Location</h3>
            <p className="text-gray-800">GU Tech</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500">Website</h3>
            <p className="text-blue-500">
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                example.com
              </a>
            </p>
          </div>
        </div>

        
        <div className="border-t border-gray-200 p-6 flex justify-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => setEdit(!edit)}
          >
            {edit ? "😓" : "Edit profile"}
          </button>
        </div>
        <h1 className={`text-center ${edit ? "block" : "hidden"}`}>
          Abhi nahi seekha
        </h1>
      </div>
    </div>
  );
};

export default UserProfile;
