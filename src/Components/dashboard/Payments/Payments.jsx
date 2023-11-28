/* eslint-disable react/prop-types */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PayForm from "./PayForm";


const Payments = ({prices,mounth}) => {
    
    

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key)
    


    return (
        <div>
            
            <Elements stripe={stripePromise}>
                <PayForm Price={prices} Mounth={mounth}></PayForm>
            </Elements>

        </div>
    );
};

export default Payments;