import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {/* User Profile Picture */}
      <div className="flex justify-center mb-4">
        <img
          src={user?.photoURL || 'https://via.placeholder.com/150'} // Placeholder if no photo is available
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      {/* User Name */}
      <div className="text-center text-xl font-bold mb-2">
        {user?.displayName || 'No Name Available'}
      </div>

      {/* User Email */}
      <div className="text-center text-gray-600 mb-4">
        {user?.email || 'No Email Available'}
      </div>
    </div>
  );
}

export default Profile;
