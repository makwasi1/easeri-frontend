import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function ProfileInfoCard({ title, description, details, action }) {

  const [user, setUser] = useState('');
  const [userId, setUserId] = useState('');
  const [userToken, setUserToken] = useState('');
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const username = localStorage.getItem('userId');
    const userToken = localStorage.getItem('token');
    setUserId(username);
    setUserToken(userToken);
  }, []);

  const handleInputChange = (event, key) => {
    // Update the corresponding state variable based on the input field's "name" attribute.
    const { name, value } = event.target;
    console.log('name', name);
      setDetail((prevDetails) => ({
        ...prevDetails,
        [key]: value,
      }));
    
  };

  const updateUser = async () => {
    console.log('update user', detail);
    //submit to backend with axios and a post request with a body and auth token bearer token 
    const response = await fetch(`https://difficult-slug-headscarf.cyclic.app/users/profile/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      },
      body: JSON.stringify({
        userId: userId,
        name: detail.name,
        surname: detail.surname,
        email: detail.email,
        phone: detail.mobile,
        birthdaydate: detail.Date
      })
    });

    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    console.log(data);
  }

  return (
    <Card color="transparent" shadow={false}>
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="mx-0 mt-0 mb-4 flex items-center justify-between gap-4"
      >
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        {action}
      </CardHeader>
      <CardBody className="p-0">
        {description && (
          <Typography
            variant="small"
            className="font-normal text-blue-gray-500"
          >
            {description}
          </Typography>
        )}
        {description && details ? (
          <hr className="my-8 border-blue-gray-50" />
        ) : null}
        {details && (
          <ul className="flex flex-col gap-4 p-0">
            {Object.keys(details).map((el, key) => (
              <li key={key} className="flex items-center gap-4">
                <Input size="sm"  label={el} value={details[key]} onChange={(e) => handleInputChange(e, key)} />
              </li>
            ))}
          </ul>
        )}
        <br></br>
        <Button onClick={() => updateUser()}>Update Profile</Button>
      </CardBody>
    </Card>
  );
}

ProfileInfoCard.defaultProps = {
  action: null,
  description: null,
  details: {},
};

ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node,
  details: PropTypes.object,
};

ProfileInfoCard.displayName = "/src/widgets/cards/profile-info-card.jsx";

export default ProfileInfoCard;
