import React, {useEffect, useState} from "react";
import { Button } from "@material-tailwind/react";

const SubscriptionButton = ({ plan, price, color }) => {

    const [userId, setUserId] = useState('');
    const [userToken, setUserToken] = useState('');
    const [paymentUrl, setPaymentUrl] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('userId')
        const token = localStorage.getItem('token')
        setUserId(username);
        setUserToken(token);
        // fetchData();
      }, []);

    const createBillingRequest = async (price, subPlan) => {
        let apiURL = `https://difficult-slug-headscarf.cyclic.app/payments/create/billing-request`;
        setLoading(true);

        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify({
                    userId: userId,
                    amount: price,
                    currency: "GBP",
                    description: subPlan,
                    status: " ",
                    billingReference: " "
                })
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            if (response.status === 201) {
                const data = await response.json();
                setPaymentUrl(data["data"]);
                //open the payment url
                setLoading(false);
                return data["data"];
            } else {
                setLoading(false);
                throw new Error('Something went wrong');
            }

        } catch (error) {
            setLoading(false);
            throw new Error('Something went wrong');
        }
    }

    const handleSubscription = async () => {
        try {
            const link = await createBillingRequest(plan, price);
            // Open the link in a new browser tab
            window.open(link, "_blank");
        } catch (error) {
            // Handle any errors that may occur during the API request
            console.error("Error creating billing request:", error);
        }
    };

    return (
        <Button size="sm" onClick={handleSubscription} ripple variant="gradient" color={color}>
            Select Plan
        </Button>
    );
};

export default SubscriptionButton;