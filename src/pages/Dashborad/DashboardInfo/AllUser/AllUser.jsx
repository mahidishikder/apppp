import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { FaTrashAlt, FaHospitalUser } from "react-icons/fa"; // Role icons
import Swal from "sweetalert2";

function AllUser() {
  const axiosPublic = useAxiosPublic();

  // Use useQuery to fetch users data
  const { data: users = [], error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("users");
      return res.data;
    },
  });

  // Handle error display
  if (error) {
    return <div>Error loading users</div>;
  }

  // Handle user deletion
  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await axiosPublic.delete(`users/${_id}`);
      Swal.fire("Deleted!", "The user has been deleted.", "success");

      // Refetch users to reflect the changes
      refetch();
    }
  };

  // Handle role update to 'admin'
  const roleHandle = async (user) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to assign the role of admin to this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, promote to admin!",
    });

    if (result.isConfirmed) {
      try {
        const response = await axiosPublic.patch(`/users/admin/${user._id}`);
        Swal.fire("Success!", response.data.message, "success");

        // Refetch users to reflect the changes
        refetch();
      } catch (error) {
        Swal.fire("Error!", "An error occurred while promoting the user.", "error");
      }
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      {users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {users.map((user, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg">{user.name}</h3>
              <p className="text-sm">{user.email}</p>
              <div className="flex items-center mt-2">
                {/* Conditionally render role-based icon and disable button for admin */}
                {user.role === "admin" ? (
                  <p className="text-green-500 font-semibold">Admin</p> // Display "Admin" text if the user is an admin
                ) : (
                  <button
                    onClick={() => roleHandle(user)}
                    className="flex items-center"
                  >
                    <FaHospitalUser className="mr-2" />
                    Promote to Admin
                  </button>
                )}
              </div>
              <div className="mt-4">
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(user._id)} // Assuming user has an `_id` property
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default AllUser;
