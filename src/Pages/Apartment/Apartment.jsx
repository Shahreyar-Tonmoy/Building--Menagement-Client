/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query';
import ApartmentCard from './ApartmentCard';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import HeaderTitle from '../../Components/Hooks/HeadingTitle';



const Apartment = () => {


    const { isPending, isError, error, data } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/apartments")
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



    return (
        <div>
            <HeaderTitle title="All Rental Apartments "></HeaderTitle>

            <div className='grid md:grid-cols-2 px-5 mt-20 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto'>
                {
                    data.map(data => <ApartmentCard key={data._id} data={data}></ApartmentCard>)
                }
            </div>
        </div>
    );
};

export default Apartment;