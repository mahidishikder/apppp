import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc"; // Import the Google icon
import useAxiosPublic from "../../hooks/useAxiosPublic";

function Social() {
  const useAxios = useAxiosPublic();
  const { loginWithGoogle } = useContext(AuthContext); // ✅ Corrected function name
  const navigate = useNavigate();

  console.log("Google login function: ", loginWithGoogle); // Log the function

  // Handle Google login with .then()
  const handleGoogle = () => {
    console.log("Google login initiated..."); // Log when the button is clicked
    loginWithGoogle()
      .then((result) => {
        console.log(result);
        const userInfo = {
          email : result.user?.email ,
          name: result.user?.displayName
        }
        useAxios.post('/users',userInfo)
        .then(res => {
          console.log(res.data)
        })
        // Log the result or handle it accordingly
        navigate("/"); // Redirect to the desired route after successful login
      })
      .catch((error) => {
        console.error("Error during Google login:", error);
      });
  };

  return (
    <div className="flex justify-center">
      <button onClick={handleGoogle} className="btn px-14 text-2xl">
        <FcGoogle />
      </button>
    </div>
  );
}

export default Social;
