/* eslint-disable react/prop-types */


const HeadingTitle = ({header,title}) => {
    
    return (
        <div>
            <h1 className="text-xl font-semibold text-center mt-20  text-amber-500 my-4">{header}</h1>
            <hr className="border border-5 border-black w-1/4  mx-auto " />
            <h1 className="text-3xl my-3 font-semibold text-center text-blue-500">{title}</h1>
            <hr className="border border-5  border-black w-1/4  mx-auto " />
            
        </div>
    );
};

export default HeadingTitle;