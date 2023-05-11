import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

export function SignIn() {

  const [bookList, setBookList] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
      setCSRF();
      login();
      fetchData()
      console.log("auth")
  }, []);


  const setCSRF = async () => {
    let csrfURL = "http://127.0.0.1:8000/api/setcsrf/";
    const response = await axios.get(csrfURL);
}

const login = async (e) => {
  e.preventDefault();
  console.log(email);
  let loginURL = "http://127.0.0.1:8000/api/login/";
  const response = await axios.post(loginURL, { 
      "username": email, "password": password });
    
      if (response.status == 200) {
        navigate("/dashboard/home")
      }
      
  }

  const apiURL = "http://127.0.0.1:8000/api/listbooks/";
  const fetchData = async () => {
      const response = await axios.get(apiURL,
          {'withCredentials': true });
      console.log(response)
      setBookList(response.data);
      console.log(bookList);
      console.log(response.data);
  }
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <form onSubmit={login}>
          <CardBody className="flex flex-col gap-4">
            <Input type="text" label="Email" size="lg" value={email} onChange={handleEmailChange} />
            <Input type="password" label="Password" size="lg" value={password} onChange={handlePasswordChange} />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              // onClick={() => login()}
              variant="gradient"
              type="submit"
              fullWidth
            >
              Sign In
            </Button>
            
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
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

export default SignIn;
