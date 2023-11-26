import { useContext } from "react";
import { AuthContext } from '../../Login/Firebase/AuthProvider';




const UserProfile = () => {

    

    const { user } = useContext(AuthContext)



    return (
        <>
            <div>
                <div className="relative mx-auto flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                    <img className="w-full" src={user?.photoURL} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Name: {user?.displayName}
                    </h4>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                        Email: {user?.email}
                    </p>
                </div>
                
            </div>
            </div>

        </>
    );
};

export default UserProfile;
