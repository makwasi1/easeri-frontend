import {
    Card,
    CardBody,
    Avatar,
    Typography,
    Switch,
    Tooltip,
  
  } from "@material-tailwind/react";
  import {
    PencilIcon,
  } from "@heroicons/react/24/solid";
  import { Link } from "react-router-dom";
  import { ProfileInfoCard } from "@/widgets/cards";
  import { platformSettingsData } from "@/data";
  import {useEffect, useState} from "react";
  
  export function EditProperty() {
  
    const [user, setUser] = useState('')
    const [userToken, setUserToken] = useState('')
  
    useEffect(() => {
      const username = localStorage.getItem('username')
      setUser('username')
    },[])
  
    return (
      <>
      <div className="mb-4 mt-12">
        <Card className="mx-3 mt-16 mb-6 lg:mx-4">
          <CardBody className="p-4">
            <div className="mb-10 flex items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <Avatar
                  src="/img/bruce-mars.jpeg"
                  alt="bruce-mars"
                  size="xl"
                  className="rounded-lg shadow-lg shadow-blue-gray-500/40"
                />
                <div>
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    {user.toUpperCase()}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Platform Settings
                </Typography>
                <div className="flex flex-col gap-12">
                  {platformSettingsData.map(({ title, options }) => (
                    <div key={title}>
                      <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                        {title}
                      </Typography>
                      <div className="flex flex-col gap-6">
                        {options.map(({ checked, label }) => (
                          <Switch
                            key={label}
                            id={label}
                            label={label}
                            defaultChecked={checked}
                            labelProps={{
                              className: "text-sm font-normal text-blue-gray-500",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <ProfileInfoCard
                title="Profile Information"
                description=""
                details={{
                  "first name": user,
                  mobile: "",
                  email: "",
                  location: "",
                 
                }}
                action={
                  <Tooltip content="Edit Profile">
                    <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                  </Tooltip>
                }
              />
  
            </div>
  
          </CardBody>
        </Card>
        </div>
      </>
    );
  }
  
  export default Profile;
  