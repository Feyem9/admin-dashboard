import {
  Box,
  Link,
  Text,
  Button,
  Container,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Field } from "../ui/field";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export default function Login(this: any) {

  const [credentials , setCredentials] = useState({username:'', password:''})
 

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState({ [e.target.name]: e.target.value });
    const {name , value} = e.target;
    setCredentials(prevState =>({
      ...prevState, [name]:value
    }))
}
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(credentials);
  axios.post('https://jsonplaceholder.typicode.com/posts' , credentials)
  .then(response =>{
      console.log(response);
      // this.setState({posts : response.data})
  })
  .catch(error =>{
      console.log(error);
      // this.setState({errorMsg:'error retreiving data'})
  })
}
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/dash')
  }

  // const { username, password } = this.state as { username: string; password: string };
  return (
    <div className="parentD">
      <div className="parentDi">
        <div className="Pc">
          <div className="Fcc">
            <div className="Fccc">
              <img src="/Seven Kids Code logo.png" alt="" className="image" />
            </div>
          </div>
          <div className="Scc">
            <div className="Sccc">
              <div className="shift">
                <Container className="container">
                  <Box>
                    <Heading size="3xl">Login</Heading>
                    <Container>
                      <form className="form" onSubmit={submitHandler}>
                        <Field>
                          <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={changeHandler}
                            value={credentials.username}
                          />
                        </Field>
                        <Field>
                          <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={changeHandler}
                            value={credentials.password}
                          />
                        </Field>
                        <div className="flex">
                          <div className="check">
                            <input type="checkbox" name="" id="" />
                            <p>Remember Password</p>
                          </div>

                          <Text className="tex">
                            Forgot Password ? <Link> clik here </Link>
                          </Text>
                        </div>
                        <Button type="submit" className="login" onClick={handleLogin}>
                          Login
                        </Button>
                      </form>
                    </Container>
                  </Box>
                </Container>
              </div>
              <Text className="ptex">privacy policy disclaimer.</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
