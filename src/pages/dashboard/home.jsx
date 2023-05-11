import React, { Fragment, useEffect, useState } from "react";

import {
  Chip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";

import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Button,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

export function Home() {
  const [open, setOpen] = useState(false);
  const [bookList, setBookList] = useState([]);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    fetchData()
  }, [])

  const apiURL = "http://127.0.0.1:8000/api/listbooks/";
  const fetchData = async () => {
    const response = await axios.get(apiURL,
      { 'withCredentials': true });
    console.log(response)
    setBookList(response.data);
    console.log(bookList);
    console.log(response.data);
  }

  const handleCreateProperty = async () => {
    const api = 'http://127.0.0.1:8000/api/listbooks/'
    const response = await axios.post(api, {
      'title': 'Test 3',
      'description': 'Test description',
      'subscription_status': true
    })
    if (response.status == 200) {
      navigate("/dashboard/home")
    }
  }

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>

      <div className="mt-16 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-8 flex items-center justify-between p-6"
          >
            <Typography variant="h6" color="white">
              Properties
            </Typography>

            {/* pop up */}

            <Fragment>
              <Button
                color="white"
                size="sm"
                ripple
                onClick={handleOpen}
                variant="gradient"
              >
                Add Property
              </Button>
              <Dialog open={open} handler={handleOpen}>
                <form onSubmit={handleCreateProperty} className="mx-5 mt-8 mb-2 max-w-screen-lg">
                  <DialogHeader>Add property</DialogHeader>
                  <DialogBody divider className="flex flex-col gap-y-5">

                    <div className="mb-4 flex flex-col gap-6">
                      <Input size="lg" label="Property Name" />
                      <Input type="number" size="lg" label="Payment Fee" />
                      <Textarea variant="outlined" label="Notes" />
                      <Input type="file" size="sm" label="Upload file" />
                    </div>

                  </DialogBody>
                  <DialogFooter>
                    <Button
                      variant="text"
                      type="cancel"
                      color="red"
                      onClick={handleOpen}
                      className="mr-1"
                    >
                      <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" type="submit" color="green">
                      <span>Confirm</span>
                    </Button>

                  </DialogFooter>
                </form>
              </Dialog>
            </Fragment>

            {/* END POPUP */}
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Property Name", "notes", "status", "added", "action"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookList.map(
                  ({ id, title, description, subscription_status, created
                  }, key) => {
                    const className = `py-3 px-5 ${key === authorsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                      }`;

                    return (
                      <tr key={id}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            {/* <Avatar src={img} alt={name} size="sm" /> */}
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {title}
                              </Typography>

                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {description}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Chip
                            variant="gradient"
                            color={subscription_status ? "green" : "blue-gray"}
                            value={subscription_status ? "Paid" : "PENDING"}
                            className="py-0.5 px-2 text-[11px] font-medium"
                          />
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {created}
                          </Typography>
                        </td>
                        <td className={className}>
                          <p className="flex gap-x-3">
                            <Typography
                              as="a"
                              href="#"
                              className="text-xs font-semibold text-blue-gray-600"
                            >
                              Edit
                            </Typography>
                            <Typography
                              as="a"
                              href="#"
                              className="text-xs font-semibold text-blue-gray-600"
                            >
                              Delete
                            </Typography>
                          </p>
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
    </div>
  );
}

export default Home;
