import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { useRegister } from "./hooks/useRegister";
import { useEffect } from "react";

export const action = async({request}) =>{
  let formData = await request.formData()
  let displayName = formData.get("displayName")
  let photoURL = formData.get("photoURL")
  let email = formData.get("email")
  let password = formData.get("password")

  return {displayName, photoURL, email, password}
}

function Register() {
  const data = useActionData()
  
 const { register } = useRegister()
  
 useEffect(()=>{
  if(data){
    register(data)
  }
 },[data])

  return (
    <div className="h-screen grid place-content-center my-4">
      <Form
        method="post"
        className="card w-96 p-8  bg-base-300 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="Display Name:"
          name="displayName"
          defaultValue=""
        />

        <FormInput
          type="url"
          label="Photo Url:"
          name="photoURL"
          defaultValue=""
        />

        <FormInput type="email" label="Email:" name="email" defaultValue="" />
        <FormInput
          type="password"
          label="Password:"
          name="password"
          defaultValue=""
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
         have you already an accaunt ?{" "}
          <Link className="capitalize link-primary" to="/login">
            {" "}
            login{" "}
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;
