import { FC, useState } from "react";
import { useForm } from "react-hook-form";

// Components
import {
  CheckBox,
  Input
} from "../../components";

// Container
import { FormContainer } from "../../container";
import { useSignin } from "../../firebase";


// User data interface
interface UserData {
  email: string;
  password: string;
};

// Error message 
const ErrorText: FC = ({ children }) =>
  <span style={{ color: "tomato" }}>{children}</span>

// Signin
const Signin = () => {

  // react-hook-form
  // Get register, errors, handleSubmit
  const { register, errors, handleSubmit } = useForm<UserData>();

  // Authentication
  const signin = useSignin();

  // ShowPassword for change password visibility
  const [showPassword, setShowPassword] = useState(false);


  // Toggling password visibility
  const togglePassword = () =>
    setShowPassword(prev => !prev);


  // Submit form data
  const submitForm = (userdata: UserData) => {

    const { email, password } = userdata;
    signin(email, password);
  }

  // Signin form
  return <FormContainer
    linkTitle="Create a new account?"
    linkTo="/signup"
    onSubmit={handleSubmit(submitForm)}
    subTitle="Welcome back to Gravty"
    title="Signin"
  >

    {/* Email field */}
    <Input
      name="email"
      placeholder="Email"
      ref={register({ required: true })}
      type="email"
    />
    {
      // Email is required Error
      errors.email && errors.email.type === "required" && (
        <ErrorText>Please enter your email!</ErrorText>
      )
    }

    {/* Password field */}
    <Input
      name="password"
      placeholder="Password"
      ref={register({ required: true })}
      type={showPassword ? "text" : "password"}
    />
    {
      // Password is required Error
      errors.password && errors.password.type === "required" && (
        <ErrorText>Please enter your password!</ErrorText>
      )
    }

    {/* Checkbox for toggle password visibility */}
    <CheckBox onChange={togglePassword} title="Show Password" />

  </FormContainer>
}

export default Signin;
