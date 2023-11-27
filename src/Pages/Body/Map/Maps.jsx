import HeaderTitle from "../../../Components/Hooks/HeadingTitle";


const Maps = () => {
  return (
    <div>
      
      <HeaderTitle title="Map"></HeaderTitle>

<section className="text-gray-600 mt-20 h-[600px] body-font relative">


  <div className="absolute inset-0 ">
    <iframe width="80%" className="mx-auto rounded-xl overflow-hidden"  height="90%" title="map"  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{overflow: "hidden"}} />
  </div>
  
</section>


    </div>
  )
};

export default Maps;