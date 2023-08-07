import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Dialog,
  Button,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import axios from 'axios';
// import { useCountries } from "use-react-countries";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Progress,
} from "@material-tailwind/react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import SubscriptionButton from "../../utils/subscriptionButton";




export function PaymentsTable() {
  const [open, setOpen] = useState(false);
  const [userProperties, setUserProperties] = useState([])
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");
  const [fee, setFee] = React.useState(0);
  const [plan, setPlan] = React.useState("bronze");
  const [user, setUser] = useState('');
  const [userToken, setUserToken] = useState('');
  const [paymentUrl, setPaymentUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState([]);


  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    const apiURL = `https://difficult-slug-headscarf.cyclic.app/payments/user-payments/`;
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get(apiURL + userId, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setPayments(response.data['data']);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mb-4 mt-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="p-4 border border-blue-400 rounded-lg">
          <CardBody className="flex flex-col items-center">
            <Typography variant="h6" color="blue-gray" className="mb-4">
              Bronze Plan (Starter)
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-8">
              $49/year
            </Typography>
            <SubscriptionButton plan="Bronze" price="4900" color="blue" />
          </CardBody>
        </Card>

        <Card className="p-4 border border-yellow-400 rounded-lg relative">
          <div className="absolute top-0 left-0 right-0 py-2 bg-orange-400 text-center text-white font-bold">
            Most Popular
          </div>
          <CardBody className="flex flex-col items-center">
            <Typography variant="h6" color="blue-gray" className="mb-4">
              Gold Plan (Standard)
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-8">
              $149/year
            </Typography>
            <SubscriptionButton plan="Gold" price="14900" color="yellow" />
          </CardBody>
        </Card>

        <Card className="p-4 border border-green-400 rounded-lg">
          <CardBody className="flex flex-col items-center">
            <Typography variant="h6" color="blue-gray" className="mb-4">
              Platinum Plan (Premium)
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-8">
              $249/year
            </Typography>

            <SubscriptionButton plan="platinum" price="24900" color="green" />
          </CardBody>
        </Card>
      </div>
      <br></br>
      <Card className="overflow-hidden xl:col-span-2">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex items-center justify-between p-6"
        >

          <div>

            <Typography variant="h6" color="blue-gray" className="mb-1">
              Subscription Status
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-4 w-4 text-green-500"
              />
              Active
            </Typography>
          </div>

          <div className="flex">
            {/* pop up */}

            <Dialog open={open} handler={handleOpen}>
              {/* Dialog content */}
            </Dialog>

            {/* END POPUP */}

            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["REF", "Amount", "Status", "Expiry Date"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-6 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-medium uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* create table rows here */}
              {payments.map(
                ({ billingReference, amount, status, date }, key) => {
                  const className = `py-3 px-5 ${key === payments.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;

                  return (

                    <tr key={billingReference}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          {/*<Avatar src={img} alt={name} size="sm" />*/}
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {billingReference}
                          </Typography>
                        </div>
                      </td>

                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >

                          </Typography>
                          <Button
                            value={status}
                            variant="gradient"
                            color={status === 'pending' ? "blue" : "green"}

                          > {status} </Button>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {date}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}

            </tbody>
          </table>
        </CardBody>
      </Card>

    </div>
  );
}

export default PaymentsTable;
