import { FC, useState } from "react";
import { CheckBox } from "../../components";
import Input from "../../components/Input";
import { FormContainer } from "../../container";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { clearNotification, setNotification } from "../../redux/notification/action";
import { useHistory } from "react-router-dom";

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

  // history for change route
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // ShowPassword for set password visibility
  const [showPassword, setShowPassword] = useState(false);


  // Toggling password visibility
  const togglePassword = () =>
    setShowPassword(prev => !prev);


  // Submit form data
  const submitForm = (userdata: UserData) => {
    dispatch(setNotification("Loading..."));
    setTimeout(() => {
      dispatch(clearNotification());
      history.push("/");
    }, 5000);
    console.log(userdata);
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
