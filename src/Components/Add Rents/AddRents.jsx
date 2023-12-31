




import { useContext, useState } from "react";




import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Login/Firebase/AuthProvider';
import UseAxios from "../Hooks/UseAxios";


const AddRents = () => {

    
    const axiosSecure = UseAxios()
   
    const {user} =useContext(AuthContext)
    const email=(user?.email);

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const Title = form.Title.value
        const Amount = form.Amount.value
        
        const Floor = form.Floor.value
        const Block = form.Block.value
        const ApartmentNo = form.ApartmentNo.value
        



        const ImageURL = form.ImageURL.value
        const products = { Title,Floor,Amount, Block,ApartmentNo,email, ImageURL }
        console.log(products);


        
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
                                <option>F</option>
                                <option>G</option>
                                <option>H</option>
                                <option>I</option>
                                <option>J</option>
                                <option>K</option>
                                <option>L</option>
                                <option>M</option>
                                <option>N</option>
                                <option>O</option>
                                
                                

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
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                
                                
                                

                            </select>
                            <label className="label">
                                <span className="text-lg">Apartment no</span>
                            </label>
                            {/* <input name="brand" type="text" placeholder="Enter Brand Name" className="input input-bordered w-[500px]" required /> */}

                            <select name='ApartmentNo' className="select select-bordered lg:w-[500px] ">
                                <option disabled selected>Apartment no</option>
                                <option>101</option>
                                <option>202</option>
                                <option>303</option>
                                <option>404</option>
                                <option>505</option>
                                <option>606</option>
                                <option>707</option>
                                <option>808</option>
                                <option>909</option>
                                <option>1010</option>
                                <option>1111</option>
                                <option>1212</option>
                                <option>1313</option>
                                <option>1414</option>
                                <option>1515</option>
                                
                                
                                
                                

                            </select>

                           




                            
                            <div className="">
                            
                            
                                <label className="label">
                                    <span className="text-lg">Thumbnail</span>
                                </label>


                                <input name="ImageURL" type="text" placeholder="Enter Image URL" className="input lg:w-[500px] input-bordered" required />


                                <label className="label">
                                    <span className="text-lg">Amount</span>
                                </label>


                                <input name="Amount" type="number" placeholder="Enter Amount" className="input lg:w-[500px] input-bordered" required />


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