import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Textarea,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData } from "@/data";
import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
// import { useCountries } from "use-react-countries";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { ClockIcon, CheckIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { useNavigate } from "react-router-dom";



function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).\*/g, "$1/$2");
}

export function PaymentsTable() {
  const [open, setOpen] = useState(false);
  const [userProperties, setUserProperties] = useState([])
  const navigate = useNavigate();
  // const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");
  const [fee, setFee] = React.useState(0);
  const [plan, setPlan] = React.useState("bronze");
  const [userId, setUserId] = useState('');
  const [userToken, setUserToken] = useState('');
  const [paymentUrl, setPaymentUrl] = useState('');
  const [loading , setLoading] = useState(false);


  const handleOpen = () => setOpen(!open);
  // const apiURL = `https://easeri-backend-production.up.railway.app/api/properties/`;

  useEffect(() => {
    const username = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    setUserId(username);
    setUserToken(token);
    // fetchData();
  }, []);

  const fetchData = async () => {

    // let apiURL = `https://easeri-backend-production.up.railway.app/api/properties/`;
    let apiURL = `http://localhost:3000/payments/create/billing-request`;
   
    const response = await axios.get(apiURL + username + '/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    setUserProperties(response.data);

  }

  //create a billing request
  const  createBillingRequest = async (price, subPlan) => {
    let apiURL = `https://difficult-slug-headscarf.cyclic.app/payments/create/billing-request`;
    setLoading(true);
    
    try {
      const response = await fetch(apiURL , {
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

      if(response.status === 201){
        const data = await response.json();
        setPaymentUrl(data["data"]);
        //open the payment url
        window.open(paymentUrl);
        setLoading(false);
      } else {
        setLoading(false);
        throw new Error('Something went wrong');
      }
      
    } catch (error) {
      setLoading(false);
      throw new Error('Something went wrong');
    }
  }


  return (
    <div className="mb-4 mt-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Subscription Plan Cards */}
        <Card className="p-4 border border-blue-400 rounded-lg">
          <CardBody className="flex flex-col items-center">
            <Typography variant="h6" color="blue-gray" className="mb-4">
              Bronze Plan (Starter)
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-8">
              $49/year
            </Typography>
            <Button size="sm" onClick={() => createBillingRequest( '49000', 'Bronze Plan')} ripple variant="gradient" color="blue">
              Select Plan
            </Button>
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
            (loading ? <div className="flex items-center justify-center"> <Progress color="blue" size="sm" /> </div> : null)
            <Button size="sm" onClick={() => createBillingRequest( '14900', 'Gold Plan')} ripple variant="gradient" color="yellow">
              Select Plan
            </Button>
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
            <Button size="sm" onClick={() => createBillingRequest( '24900', 'Platinum Plan')} ripple variant="gradient" color="green">
              Select Plan
            </Button>
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
                {["Item", "Amount", "Completion"].map((el) => (
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
              {/* Table rows */}
            </tbody>
          </table>
        </CardBody>
      </Card>

    </div>
  );
}

export default PaymentsTable;
