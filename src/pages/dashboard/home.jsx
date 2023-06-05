import React, { Fragment, useEffect, useState } from "react";


import {
  Chip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  IconButton
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";

import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Button,
} from "@material-tailwind/react";

import { StatisticsCard } from "@/widgets/cards";
import { formatDate } from '../../utils/date.jsx'

import {
  statisticsCardsData,
} from "@/data";
import axios from 'axios';
import { string } from "prop-types";
import { useNavigate } from "react-router-dom";
export function Home() {

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [bookList, setBookList] = useState([]);
  const [newTitle, setNewTitle] = useState();
  const [desc, setDesc] = useState();
  const [status, setStatus] = useState();
  const [userProperties, setUserProperties] = useState([])
  const [editProperty, setEditProperty] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')
  const [userToken, setUserToken] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const navigate = useNavigate();


  const apiURL = `https://easeri-backend-production.up.railway.app/api/properties/`;


  useEffect(() => {
    fetchData()
  }, [])

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDesc(event.target.value);
  };

  const handleCreateProperty = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('title', newTitle);
    formData.append('description', desc);
    formData.append('subscription_status', false)
    setLoading(true)

    try {
      const response = await axios.post(apiURL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${userToken}`
        }
      });
      if (response.status === 201) {
        alert("Property Has been added.")
        setOpen(false)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  }

  const handleEditProperty = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('title', newTitle);
    formData.append('description', desc);
    formData.append('subscription_status', false)
    setLoading(true)

    try {
      const response = await axios.post(apiURL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${userToken}`
        }
      });
      if (response.status === 201) {
        alert("Property Has been added.")
        setOpen(false)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  }

  
  const fetchData = async () => {
    setLoading(true)
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    const response = await axios.get(apiURL + username, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    setUserProperties(response.data);
    setLoading(false)
  }

  const handleOpen = () => setOpen(!open);
  const handleOpenEdit = () => setEdit(!edit);

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
                      <Input size="lg" onChange={handleNameChange} label="Property Name" />
                      <Textarea variant="outlined" onChange={handleDescriptionChange} label="Description" />
                      <Input type="file" size="md" onChange={handleFileChange} label="Upload file" />
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
                  {["Property Name", "Property notes", "subscription status", "date added", "action"].map((el) => (
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
                {userProperties.map(
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
                            value={subscription_status ? "SUBSCRIBED" : "PENDING"}
                            className="py-0.5 px-2 text-[11px] font-medium"
                          />
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {formatDate(created)}
                          </Typography>
                        </td>
                        <td className={className}>
                          <p className="flex gap-x-3">
                            <Fragment>
                              <IconButton
                                onClick={handleOpenEdit}
                              >
                                <i className="fas fa-edit" />
                              </IconButton>
                              <Dialog open={edit} handler={handleOpenEdit}>
                                <form onSubmit={handleEditProperty} className="mx-5 mt-8 mb-2 max-w-screen-lg">
                                  <DialogHeader>Edit Property</DialogHeader>
                                  <DialogBody divider className="flex flex-col gap-y-5">

                                    <div className="mb-4 flex flex-col gap-6">
                                      <Input size="lg" onChange={handleNameChange}   label="Property Name" />
                                      <Textarea variant="outlined" onChange={handleDescriptionChange} label="Description" />
                                      <Input type="file" size="md" onChange={handleFileChange} label="Upload file" />
                                    </div>

                                  </DialogBody>
                                  <DialogFooter>
                                    <Button
                                      variant="text"
                                      type="cancel"
                                      color="red"
                                      onClick={handleOpenEdit}
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
                            <IconButton color="red">
                              <i className="fas fa-trash" />
                            </IconButton>

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
