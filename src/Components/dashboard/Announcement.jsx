import { Backdrop, CircularProgress, Paper } from "@mui/material"
import { useQuery } from "@tanstack/react-query";


const Announcement = () => {

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/announcement")
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
    <Paper sx={{ width: '100%',  scrollbarColor: "red" }}>
      <div className=" h-[88vh] overflow-y-scroll shadow-none py-5  ">

        {
          data?.length > 0 ? <>

            <div className=" ">
              <div className="container mx-auto">

                <div className="grid md:grid-cols-2  gap-5">

                  {
                    data?.map(data => <>

                      <div key={data._id} className="cursor-default bg-white w-60 lg:w-[600px] mx-auto rounded-2xl overflow-hidden lg:shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">





                        <div className="py-10 bg-red-500 flex flex-col justify-center">
                          <p className="mx-5 break-words  text-white text-lg">Title: {data.Title}</p>
                        </div>
                        <p className="py-6 break-words text-lg tracking-wide px-16">{data.Description}</p>
                        <div className="flex justify-between px-5 mb-2 text-sm text-gray-600">


                          <p>{data?.date?.split(" ", 1)}</p> <p className="mr-4 text-black font-thin text-lg">Owner</p>
                        </div>
                      </div>
                    </>)
                  }




                </div>
              </div>
            </div>

          </>
            :
            <>
              <div className='flex justify-center items-center'>
                <div>
                  <img src="https://i.ibb.co/RT3f8bk/undraw-Server-re-twwj-removebg-preview.png" alt="" />
                  <h1 className='text-3xl font-semibold text-center'>No Announcement Here !!!</h1>
                </div>
              </div>
            </>




        }




      </div>
    </Paper>

  );
};

export default Announcement;










