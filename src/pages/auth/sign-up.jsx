import {Link, useNavigate} from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
   Alert
} from "@material-tailwind/react";
import {useState} from "react";
import axios from "axios";

export function SignUp() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [openAlert, setOpenAlert] = useState(false)
  const [open, setOpen] = useState(true);

  const handleChange = (setState) => (event) => {
    setState(event.target.value)
  }

  const onSubmit = async (e) => {

    e.preventDefault();
    const loginURL = "/api/users/register/";
    if(password === passwordConfirm){
      const response = await axios.post(
          loginURL, {
            "username": username, "password": password, "email":email
          }
      );
      if (response.status === 200) {
       
        if(password === passwordConfirm){
          const response = await axios.post(
              loginURL, {
                "username": username, "password": password, "email":email
              }
          );
          if (response.status === 200) {
            navigate("/auth/sign-in")
          }
        } else {
          alert('Passwords do not match. Try again.')
        }
      }
    } else {
      alert('Passwords do not match. Try again.')
    }
  }


  return (
    <>
    <Alert open={open} onClose={() => setOpen(false)}>
    A dismissible alert for showing message.
    </Alert>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <form onSubmit={onSubmit}>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">

            <Input label="User name" size="lg" onChange={handleChange(setUsername)} />
            <Input type="email" label="Email" size="lg" onChange={handleChange(setEmail)} />
            <Input type="password" label="Password" size="lg"  onChange={handleChange(setPassword)} />
            <Input type="password" label="Confirm Password" size="lg"  onChange={handleChange(setPasswordConfirm)} />
            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type={"submit"} variant="gradient" fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
