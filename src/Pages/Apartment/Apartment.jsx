/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query';
import ApartmentCard from './ApartmentCard';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import HeaderTitle from '../../Components/Hooks/HeadingTitle';
import { useLoaderData } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const Apartment = () => {

    const { count } = useLoaderData()
    const [currentPage, setCurrentPage] = useState(0)


    const itemsPerPage = 6
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()]


    const hendlePlus = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }

    }
    const hendleminus = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const color = "mx-1 flex h-9 w-9 items-center justify-center rounded-full  p-0 text-sm text-dark shadow-md transition duration-150 ease-in-out cursor-pointer"
    const active = "mx-1 flex h-9 w-9 items-center justify-center rounded-full  p-0 text-sm  shadow-md transition duration-150 bg-pink-500 text-white ease-in-out cursor-pointer"



    const { isPending, isError, error, data } = useQuery({
        queryKey: ["data", currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-side-gules.vercel.app/apartments?page=${currentPage}&size=${itemsPerPage}`)
            return res.json()
        }

    })

    // useEffect(()=>{
    //     fetch
    // },[])



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



    return (
        <div>
            <HeaderTitle title="All Rental Apartments "></HeaderTitle>

            <div className='grid md:grid-cols-2 px-5 mt-20 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto'>
                {
                    data.map(data => <ApartmentCard key={data._id} data={data}></ApartmentCard>)
                }




            </div>

            <div className='flex justify-center'>
            <ul className="flex">
                <a onClick={hendleminus} className={active}><KeyboardArrowLeftIcon /></a>


                {
                    pages.map(page => <> <li>
                        <div key={page}
                            onClick={() => setCurrentPage(page)}


                            className={currentPage === page ? active : color}



                        >
                            {page}
                        </div>
                    </li></>)
                }

                <a onClick={hendlePlus} className={active}><KeyboardArrowRightIcon /></a>


                {/* <div className="relative h-10 w-20 ">
                            <select value={itemPerPages} onChange={hendleChange} className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">

                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                            </select>
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Pages
                            </label>
                        </div> */}


            </ul>
            <div></div>
            </div>
        </div>
    );
};

export default Apartment;