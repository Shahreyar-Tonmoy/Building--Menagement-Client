import { Backdrop, Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../Login/Firebase/AuthProvider";

import Modal from '@mui/material/Modal';

import Payments from "./Payments/Payments";


const MakePayment = () => {

   
    const [open, setOpen] = useState(false);
    const [price,setPrice]=useState(0)
    const [mounth,setMounth]=useState("")

    // const [per,setPer]=useState()

    const { user } = useContext(AuthContext)
    // console.log(user)
    const { isPending, isError, error, data } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-side-gules.vercel.app/rents/${user?.email}`)
            return res.json()
        }

    })
    const {  data: off } = useQuery({
        queryKey: ["off"],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-side-gules.vercel.app/coupons`)
            return res.json()
        }

    })


    const filter1 = data?.filter(e => e.Status === "checked")
    



    if (isPending) {
        return <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    }

    if (isError) {
        return <span>Error: {error?.message}</span>
    }

    // const handle = () => setOpen(true);
    const handleClose = () => setOpen(false)


    const hendleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        // const Name = form.Name.value
        // const Email = form.Email.value
        // const Title = form.Title.value
        // const Floor = form.Floor.value
        // const Block = form.Block.value
        const Amount = form.Amount.value
        const Date = form.Date.value
        // const ApartmentNo = form.ApartmentNo.value
        const Coupon = form.Coupon.value

        if(Coupon){
            const filter = off?.filter(e => e.CouponCode === Coupon)
            const per = parseInt(filter[0]?.DiscountPercentage)
            const AmountOF = parseInt(filter1[0]?.Amount)
            
            const de =  per / 100

            const price = AmountOF * de
            const Amount = AmountOF - price 
            console.log(AmountOF,Amount)
            setOpen(true)
            setPrice(Amount)
            setMounth(Date)
            
        }
        else{
        
        setPrice(Amount)
        setOpen(true)
        setMounth(Date)
        
        
        }
}

   








    return (

       <div className="h-[90vh] overflow-y-scroll">
         <div className="flex items-center justify-center bg-slate-300 -mt-4 lg:w-2/4 mx-auto rounded-xl glass shadow-xl p-12">
            <div className="mx-auto w-full lg:max-w-[550px]">
                <form onSubmit={hendleSubmit}>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Member Name
                                </label>
                                <input type="text" defaultValue={filter1[0]?.name} name="Name" disabled placeholder="Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Email
                                </label>
                                <input type="text" disabled defaultValue={filter1[0]?.email} name="Email" placeholder="Email" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Floor
                                </label>
                                <input type="text" defaultValue={filter1[0]?.Floor} name="Floor" disabled placeholder="Floor" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Block
                                </label>
                                <input type="text" disabled defaultValue={filter1[0]?.Block} name="Block" placeholder="Block" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Apartment No
                                </label>
                                <input type="text" disabled defaultValue={filter1[0]?.ApartmentNo} name="ApartmentNo" placeholder="Apartment No" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>

                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Title
                                </label>
                                <input type="text" defaultValue={filter1[0]?.Title} name="Title" disabled placeholder="Title" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>







                    </div>



                    <div className="-mx-3 flex flex-wrap">

                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Mounth
                                </label>
                                {/* <input type="date" name="Date" id="date" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" /> */}

                                <select name="Date" required className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                    <option disabled selected>Mounth</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>




                                </select>

                            </div>
                        </div>

                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Amount
                                </label>
                                <input type="text" disabled defaultValue={filter1[0]?.Amount} name="Amount" placeholder="Amount" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Coupon
                                </label>
                                <input type="text" name="Coupon" placeholder="Coupon" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>

                    </div>

                    <div>
                        <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Pay
                        </button>
                    </div>
                </form>



                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="lg:w-1/3 w-3/4 ml-[84px] lg:ml-0 mt-40 mx-auto rounded-2xl glass bg-slate-300">
                        <Payments prices={price} mounth={mounth}></Payments>
                    </Box>
                </Modal>


            </div>
        </div>
       </div>

    )
};

export default MakePayment;