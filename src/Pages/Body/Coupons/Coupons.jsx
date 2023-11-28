import { Backdrop, CircularProgress } from "@mui/material";
import HeadingTitle from "../../../Components/Hooks/HeadingTitle";
import { useQuery } from "@tanstack/react-query";


const Coupons = () => {





  const { isPending, isError, error, data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/coupons",
        
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












    return (
        <div>
          <HeadingTitle title="Our Coupons"></HeadingTitle>
          <div className="hero lg:h-96  mb-10 mt-20   rounded-xl lg:w-3/4 mx-auto" style={{background:"cover", backgroundImage: `url(https://i.ibb.co/ZMsQT4p/399796474-337779458951395-7902647333558540508-n.jpg)`}}>
        <div className="hero-overlay bg-opacity-40 rounded-xl "></div>
        <div className=" glass px-2 lg:px-52 rounded-lg">
        <div className="hero-content text-center lg:py-8 flex-col text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">Use This Coupon</h1>
            
            
            
          </div>
          <div className=" px-12 py-3 text-white rounded-lg font-semibold text-xl bg-blue-500">{data[0]?.CouponCode}</div>
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl text-white font-bold">To GET <span className="text-red-400">{data[0]?.DiscountPercentage}% </span>OFF</h1>
            
          </div>

        </div>
        </div>
      </div>
        </div>
    );
};

export default Coupons;
