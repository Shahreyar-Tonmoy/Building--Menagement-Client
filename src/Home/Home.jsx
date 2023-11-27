


import AboutBuildingSlider from "../Pages/Body/About the building/AboutBuildingSlider";
import AboutTheBuilding from "../Pages/Body/About the building/AboutTheBuilding";
import Coupons from "../Pages/Body/Coupons/Coupons";
import Maps from "../Pages/Body/Map/Maps";

import Slider from "../Pages/Body/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutTheBuilding></AboutTheBuilding>
            <AboutBuildingSlider></AboutBuildingSlider>
            <Coupons></Coupons>
            <Maps></Maps>
            
            
        </div>
    );
};

export default Home;