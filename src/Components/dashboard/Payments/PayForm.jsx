/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import UseAxios from "../../Hooks/UseAxios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Login/Firebase/AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import dateTime from "date-time";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const PayForm = ({ Price, Mounth }) => {
    const stripe = useStripe();
    const elements = useElements()
    const axiosSecure = UseAxios()
    //    const price =(parseInt(Price))
    //    console.log(Price);
    const tk = parseInt(Price)
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('')
    const navigate = useNavigate()
    const axiosPublic = UseAxiosPublic()


    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { tk })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [tk, axiosSecure])



    const hendleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('[error]', error);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
        }


        const { paymentIntent, error: Error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName
                }
            }

        })
        if (Error) {
            console.log("Error", Error);
        }
        else {
            
            if (paymentIntent.status === "succeeded") {
                const Name = user?.displayName
                const Email = user?.email
                const TransactionId = paymentIntent.id
                const Status = "booked"
                const Time = dateTime()
                const data = { Mounth,Time,Price,Status,TransactionId,Name,Email }

                axiosPublic.post("/paymentHistory", data)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            
                            swal("Thanks!", "You Are Paid Successfully!", "success")
                            navigate("/dashboard/paymentHistory")




                        }

                    })




            }

        }







    }


    return (
        <div>
            <form onSubmit={hendleSubmit} className="card-body ">
                <CardElement className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',

                                color: '#424770',
                                '::placeholder': {
                                    color: '#000000',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn" type="submit" disabled={!stripe}>
                    Pay
                </button>

            </form>
        </div>
    );
};

export default PayForm;
