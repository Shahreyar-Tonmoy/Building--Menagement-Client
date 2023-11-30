
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Backdrop, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';


import UseAxios from '../Hooks/UseAxios';
import swal from 'sweetalert';
import * as React from 'react';
import Box from '@mui/material/Box';


import Modal from '@mui/material/Modal';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export default function ManageCoupons() {


    const axiosSecure = UseAxios()
    const [open, setOpen] = React.useState(false);
    
    const handle = () => setOpen(true);
    const handleClose = () => setOpen(false)



    const { isPending, isError, error, data, refetch } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await fetch("https://assignment-12-server-side-gules.vercel.app/coupons",

            )
            return res.json()
        }

    })

    


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
        return <span>Error: {error.message}</span>
    }





    const hendleAdd = (e) => {
        e.preventDefault()
        const form = e.target
        const CouponCode = form.CouponCode.value
        const DiscountPercentage = form.DiscountPercentage.value
        const CouponDescription = form.CouponDescription.value






        const Coupons = { CouponCode, DiscountPercentage, CouponDescription }
        console.log(Coupons);


        axiosSecure.post(`/coupons`, Coupons)
            .then((res) => {
                console.log(res.data.insertedId);
                if (res.data) {
                    swal("Thanks!", "Coupons Added Success!", "success");
                    refetch()
                    setOpen(false)
                    e.target.reset()
                }


            })
    }












    return (

        <div className='lg:flex overflow-y-scroll h-[90vh]  justify-around  '>
            <div>
            {
                data?.length > 0 &&
                    <TableContainer component={Paper}>


                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Coupon Code</StyledTableCell>
                                    <StyledTableCell >Discount Percentage</StyledTableCell>
                                    <StyledTableCell >Coupon Description</StyledTableCell>



                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {data?.map((filter) => (
                                    <StyledTableRow key={filter?._id}>
                                        <StyledTableCell component="th" scope="row">
                                            {filter?.CouponCode}
                                        </StyledTableCell>
                                        <StyledTableCell >{filter?.DiscountPercentage}</StyledTableCell>
                                        <StyledTableCell ><p className='w-[600px] break-words'>{filter?.CouponDescription}</p></StyledTableCell>



                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>




                
            }

            {
                data?.length <= 0 && <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://i.ibb.co/RT3f8bk/undraw-Server-re-twwj-removebg-preview.png" alt="" />
                    <h1 className='text-3xl font-semibold text-center'>No coupons Found !!!</h1>



                   

                </div>

            </div>
            }

            </div>

            <div>
                


                <div className="cursor-default bg-white w-52 pb-10 mt-6 mx-auto  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">





                  <div className="py-4 bg-red-500 flex flex-col justify-center">
                    <p className="mx-5 break-words text-center text-white text-lg"> Add A New  Coupon </p>
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                    <button className='btn bg-blue-500 hover:bg-blue-600 text-white ' onClick={handle}>Add coupons</button>
                    </div>
                  
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="w-1/3 mt-40 mx-auto rounded-2xl glass bg-slate-300">
                        <form onSubmit={hendleAdd} className="card-body">
                            <div>
                                <div>


                                    <label className="label">
                                        <span className="text-lg">Coupon code</span>
                                    </label>


                                    <input name="CouponCode" type="text" placeholder="Enter Coupon Code" className="input w-full input-bordered" required />

                                    <label className="label">
                                        <span className="text-lg">discount percentage</span>
                                    </label>


                                    <input name="DiscountPercentage" type="number" placeholder="Enter Discount Percentage" className="input w-full input-bordered" required />



                                    <div className="">
                                        <label className="label">
                                            <span className="text-lg">Coupon Description</span>
                                        </label>

                                        <textarea name='CouponDescription' className="textarea w-full textarea-bordered " required placeholder="Enter Coupon Description"></textarea>

                                        <div className="form-control  mt-6">
                                            <button className="btn text-white border-none hover:bg-[#81246A] bg-[#81246A]">Submit</button>
                                        </div>

                                    </div>
                                </div>


                            </div>

                        </form>
                    </Box>
                </Modal>
            </div>

        </div>



    );
}











