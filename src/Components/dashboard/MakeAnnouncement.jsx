
import UseAxios from "../Hooks/UseAxios";
import swal from "sweetalert";
import dateTime from 'date-time';


const MakeAnnouncement = () => {
  const axiosSecure = UseAxios()

    const hendleAnnounce =(e)=>{
        e.preventDefault()
        
        const Title = e.target.Title.value

        const Description = e.target.Description.value
        const date = (dateTime());
        const Announce = {Title,Description,date}
        


        
    axiosSecure.post("/announcement",Announce)
            
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                   
                    swal("Thanks!", "Announcement Added Succesfully !", "success");
                      
                        
                

                }
                e.target.reset()

            })
        
        
        
    }

    




    return (

    
<section style={{ background: "cover" , height: "90vh", backgroundImage: 'url(https://i.ibb.co/qMBcLFN/undraw-Happy-announcement-re-tsm0.png)'}} className="overflow-hidden relative z-10">
  <div className="container">
    <div className="flex flex-wrap lg:justify-between -mx-4">
      <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
        <div className="max-w-[570px] lg:mt-52 lg:ml-32 lg:mb-0">
          
          <h2 className="
            text-red-500
            
            uppercase
            font-bold
            text-[20px]
            sm:text-[40px]
            lg:text-[36px]
            xl:text-[40px]
            ">
            Make Your Announcement !!
          </h2>
          
        </div>
      </div>
      <div className="w-full lg:mt-20  lg:w-1/2 xl:w-5/12 px-4">
        <div className=" relative glass bg-slate-200  rounded-lg p-8 sm:p-12 shadow-xl">
          <form onSubmit={hendleAnnounce}>
            <div className="mb-6">
              <input required name="Title" type="text" placeholder="Title" className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  " />
            </div>
            
            
            <div className="mb-6">
              <textarea required name="Description" rows={6} placeholder="Description" className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  resize-none
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  " defaultValue={""} />
            </div>
            <div>
              <button type="submit" className="
                  w-full
                  text-white
                  bg-primary
                  rounded
                  border border-primary
                  p-3
                  transition
                  hover:bg-opacity-90
                  ">
                Send Message
              </button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default MakeAnnouncement;