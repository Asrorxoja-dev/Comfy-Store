import { Form, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { useActionData } from "react-router-dom";
import { useLogin } from "./hooks/useLogin";
import { useEffect } from "react";


export const action = async({request}) =>{
  let formData = await request.formData()
  let email = formData.get("email")
  let password = formData.get("password")

  return {email, password}
}

function Login() {
  const data = useActionData()
  
  const { Login } = useLogin()
   
  useEffect(()=>{
   if(data){
     Login(data)
   }
  },[data])
  return (
    <div className="h-screen grid place-content-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="Email:" name="email" defaultValue="" />
        <FormInput
          type="password"
          label="Password:"
          name="password"
          defaultValue=""
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button className="btn btn-secondary btn-block">Guest User</button>
        <p className="text-center">
          Not a member yet ?{" "}
          <Link className="capitalize link-primary" to="/register">
            {" "}
            register{" "}
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
