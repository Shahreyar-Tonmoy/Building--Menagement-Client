import { Link } from "react-router-dom";



const Error = () => {
    return (
        <div>
            
            <div>
            <img className="mx-auto" src="https://i.ibb.co/921jCP8/image-processing20191008-30851-fhz5mc-removebg-preview.png" alt="" />
            </div>
            
             <div className="flex justify-center items-center">
             <Link to={"/"}><button className="btn btn-outline btn-info">Go To Home Page</button></Link>
             </div>
        </div>
    );
};

export default Error;