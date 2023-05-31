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
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData } from "@/data";
import React, {Fragment, useState, useEffect } from "react";
import axios from 'axios';

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

export function Tables() {
  const [open, setOpen] = useState(false);
  const [userProperties, setUserProperties] = useState([])
  const navigate = useNavigate();


  const handleOpen = () => setOpen(!open);
  const apiURL = `https://easeri-backend-production.up.railway.app/api/properties/`;



  useEffect(() => {
    fetchData().then(r => console.log("")).catch((e) => {
      console.log(e)
      navigate("/auth/sign-in")
    });
  }, []);

  const fetchData = async () => {
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    
    const response = await axios.get(apiURL + username, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    setUserProperties(response.data);
  }


  return (
    <div className="mb-4 mt-12">
      <Card className="overflow-hidden xl:col-span-2">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex items-center justify-between p-6"
        >
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Payments
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <CheckIcon strokeWidth={3} className="h-4 w-4 text-blue-500" />
              <strong>30 done</strong> this month
            </Typography>
          </div>

          <div className="flex ">
            {/* pop up */}

            <Fragment>
              <Button size="sm" ripple onClick={handleOpen} variant="gradient">
                Add Payment
              </Button>
              <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Add payment</DialogHeader>
                <DialogBody divider className="flex flex-col gap-y-5">
                  <form className="mx-5 mt-8 mb-2 max-w-screen-lg">
                    <div className="mb-4 flex flex-col gap-6">
                      <Select
                        size="lg"
                        label="Select Property"
                        selected={(element) =>
                          element &&
                          React.cloneElement(element, {
                            className: "flex items-center px-0 gap-2 pointer-events-none",
                          })
                        }
                      >
                        {userProperties.map(({ id, title }) => (
                          <Option key={id} value={id} className="flex items-center gap-2">
                          
                            {title}
                          </Option>
                        ))}
                      </Select>
                      
                      <Input type="number" size="lg" label="Amount" />
                    </div>
                  </form>
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="blue"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </Dialog>
            </Fragment>

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
                {["Item", "amount", "completion"].map((el) => (
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
              {projectsTableData.map(
                ({ img, name, budget, completion }, key) => {
                  const className = `py-3 px-5 ${key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          {/*<Avatar src={img} alt={name} size="sm" />*/}
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>

                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {budget}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {completion}%
                          </Typography>
                          <Progress
                            value={completion}
                            variant="gradient"
                            color={completion === 100 ? "green" : "blue"}
                            className="h-1"
                          />
                        </div>
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

export default Tables;
