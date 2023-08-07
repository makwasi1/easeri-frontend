import React, {useEffect, useState} from "react";
import { Button, Alert,Typography } from "@material-tailwind/react";
import axios from 'axios';
import { NavLink } from "react-router-dom";



function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

const SubscriptionButton = ({ plan, price, color }) => {

    const [userId, setUserId] = useState('');
    const [userToken, setUserToken] = useState('');
    const [paymentUrl, setPaymentUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('userId')
        const token = localStorage.getItem('token')
        setUserId(username);
        setUserToken(token);
        // fetchData();
      }, []);


      const createBillingRequest = async (price, subPlan) => {
        let apiURL = `https://difficult-slug-headscarf.cyclic.app/payments/create/billing-request`;
        event.preventDefault();
        const userId = localStorage.getItem('userId')
        setLoading(true)
        //create a date object
    
        try {
          const response = await axios.post(apiURL, {
            "userId": userId,
            "amount": subPlan,
            "currency": "GBP",
            "description": price,
            "status": "pending",
            "billingReference": "0"
          
          }, {
            headers: {
             'Accept': 'application/json',
             'Authorization': `Bearer ${userToken}`
            }
          });
          if (response.status === 201) {
            
            console.log(response.data["data"])
            setPaymentUrl(response.data["data"]);
            setOpen(true);
          }
        } catch (error) {
            setOpen(false);
          setLoading(false)
          console.error(error);
        }
      }

    const handleSubscription = async () => {
        try {
            let link2 = await createBillingRequest(plan, price);
            console.log(link2);
        } catch (error) {
            // Handle any errors that may occur during the API request
            console.error("Error creating billing request:", error);
        }
    };

    

    return (
        <>
        

        <Button size="sm" onClick={handleSubscription} ripple variant="gradient" color={color}>
            Select Plan
        </Button>
        </>
        
    );
};

export default SubscriptionButton;