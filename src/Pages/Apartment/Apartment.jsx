/* eslint-disable react/prop-types */
import { useState } from "react";


const Apartment = () => {
    const [showCard, setShowCard] = useState("all");

    const handleProject = (category) => {
        setShowCard(category);
    };

    return (
        <>
            <section className=" pb-12 px-8 mt-10  max-w-screen-xl mx-auto lg:pb-[90px] dark:bg-dark">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">

                                <hr className="border border-5 border-black w-2/3  mx-auto " />
                                <h1 className="text-3xl my-3 font-semibold text-center text-blue-500">Our All Apartment</h1>
                                <hr className="border border-5  border-black w-2/3  mx-auto " />

                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-center -mx-4">
                        <div className="w-full px-4">
                            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("all")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "all"
                                            ? "activeClasses bg-primary black"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-black"
                                            }`}
                                    >
                                        All Apartment
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("1")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "1"
                                            ? "activeClasses bg-primary black"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-black"
                                            }`}
                                    >
                                        Floor no. 1
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("2")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "2"
                                            ? "activeClasses bg-primary text-black"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-black"
                                            }`}
                                    >
                                        Floor no. 2
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("3")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "3"
                                            ? "activeClasses bg-primary text-black"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-black"
                                            }`}
                                    >
                                        Floor no. 3
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("4")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "4"
                                            ? "activeClasses bg-primary text-black"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-black"
                                            }`}
                                    >
                                        Floor no. 4
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("5")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "5"
                                            ? "activeClasses bg-primary text-black"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-black"
                                            }`}
                                    >
                                        Floor no. 5
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <PortfolioCard
                            Image="https://i.ibb.co/gZYPw7y/fitted.jpg"
                            Floor="4"
                            Block="B"
                            Apartment="12"



                            showCard={showCard}
                        />
                        <PortfolioCard
                            Image="https://i.ibb.co/g7K9qBV/fitted.jpg"
                            Floor="2"
                            Block="F"
                            Apartment="8"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            Image="https://i.ibb.co/Xs68kcx/fitted.jpg"
                            Floor="3"
                            Block="D"
                            Apartment="18"
                            showCard={showCard}
                        />

                        <PortfolioCard
                            Image="https://i.ibb.co/ZMsQT4p/399796474-337779458951395-7902647333558540508-n.jpg"
                            Floor="1"
                            Block="1"
                            Apartment="3"
                            showCard={showCard}
                        />

                    </div>
                </div>
            </section>
        </>
    );
};

export default Apartment;

const PortfolioCard = ({
    showCard,
    Image,
    Floor,
    Block,
    Apartment,

}) => {
    return (
        <>
            <div
                className={`w-full px-4 md:w-1/2 xl:w-1/3 ${showCard === "all" || showCard === Floor.toLowerCase()
                    ? "block"
                    : "hidden"
                    }`}
            >
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-[10px]">
                        <img src={Image} className="w-full h-80" />
                    </div>
                    <div className="relative  z-10 mx-7 -mt-20 rounded-lg bg-white shadow-2xl dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
                        <span className="text-primary mb-2 block text-2xl font-medium">
                            Rent
                        </span>
                        <div className="flex justify-around">
                            <h3 className="text-dark dark:text-dark mb-5 text-lg font-bold">Floor no. {Floor}</h3>
                            <h3 className="text-dark dark:text-dark mb-5 text-lg font-bold">Block name. {Block}</h3>
                        </div>
                        <h3 className="text-dark dark:text-dark mb-5 text-lg font-bold">Apartment no. {Apartment}</h3>
                        <button

                            className="text-body-color btn dark:text-dark-6 hover:border-blue-500 hover:bg-blue-500 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
                        >
                            Agreement
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
