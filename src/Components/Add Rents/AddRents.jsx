




import { useContext, useState } from "react";




import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Login/Firebase/AuthProvider';
import UseAxios from "../Hooks/UseAxios";


const AddRents = () => {

    const Navigate =useNavigate()

   
    const {user} =useContext(AuthContext)
    const email=(user?.email);

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const Title = form.Title.value
        
        const Floor = form.Floor.value
        const Block = form.Block.value
        const ApartmentNo = form.ApartmentNo.value
        



        const ImageURL = form.ImageURL.value
        const products = { Title,Floor,Block,ApartmentNo,email, ImageURL }
        console.log(products);


        const axiosSecure = UseAxios()
    axiosSecure.post("/apartments",products)
            
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    // Swal.fire({
                    //     title: 'Success!',
                    //     text: 'Product Added Succesfully',
                    //     icon: 'success',
                    //     confirmButtonText: 'Cool'
                    // })
                    

                }
            })

    }




    return (
        <div className="bg-cover rounded-lg py-10  bg-no-repeat" style={{ backgroundImage: `url("")` }}>
            <div className=' card rounded-xl glass flex-shrink-0 w-full max-w-xl mx-auto '>
                <form onSubmit={handleSubmit} className="card-body rounded-xl  shadow-2xl   ">

                    <div className="lg: mx-auto gap-9 ">
                        <div className="">
                        <label className="label">
                                <span className="text-lg">Title</span>
                            </label>
                            

                            <select name='Title' className="select select-bordered lg:w-[500px] ">
                                <option disabled selected>Title</option>
                                <option>Rent</option>
                                <option>Sell</option>
                                

                            </select>

                            <label className="label">
                                <span className="text-lg">Block</span>
                            </label>
                           
                            <select name='Block' className="select select-bordered lg:w-[500px] ">
                                <option disabled selected>Block</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                                
                                

                            </select>
                            <label className="label">
                                <span className="text-lg">Floor</span>
                            </label>
                            {/* <input name="brand" type="text" placeholder="Enter Brand Name" className="input input-bordered w-[500px]" required /> */}

                            <select name='Floor' className="select select-bordered lg:w-[500px] ">
                                <option disabled selected>Block</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                
                                

                            </select>
                            <label className="label">
                                <span className="text-lg">Apartment no</span>
                            </label>
                            {/* <input name="brand" type="text" placeholder="Enter Brand Name" className="input input-bordered w-[500px]" required /> */}

                            <select name='ApartmentNo' className="select select-bordered lg:w-[500px] ">
                                <option disabled selected>Apartment no</option>
                                <option>305</option>
                                <option>409</option>
                                <option>154</option>
                                <option>880</option>
                                <option>605</option>
                                
                                

                            </select>

                           




                            
                            <div className="">
                            
                            
                                <label className="label">
                                    <span className="text-lg">Thumbnail</span>
                                </label>


                                <input name="ImageURL" type="text" placeholder="Enter Image URL" className="input lg:w-[500px] input-bordered" required />


                                {/* <input name="photoURL" type="file" className="file-input file-input-bordered lg:w-[500px] file-input-info w-full max-w-xs" /> */}
                                <div className="form-control lg:w-[500px] mt-6">
                                    <button className="btn text-white border-none hover:bg-[#81246A] bg-[#81246A]">Add Product</button>
                                </div>

                            </div>
                        </div>


                    </div>

                </form>




            </div>
        </div>
    );
};

export default AddRents;