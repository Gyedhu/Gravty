import { FC, useState } from "react";
import { CheckBox } from "../../components";
import Input from "../../components/Input";
import { FormContainer } from "../../container";
import { useForm } from "react-hook-form";

// User data interface
interface UserData {
  email: string;
  name: string;
  password: string;
};

// Error message 
const ErrorText: FC = ({ children }) =>
  <span style={{ color: "tomato" }}>{children}</span>

// Signup
const Signup = () => {

  // react-hook-form
  // Get register, errors, handleSubmit
  const { register, errors, handleSubmit } = useForm<UserData>();

  // ShowPassword for set password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggling password visibility
  const togglePassword = () =>
    setShowPassword(prev => !prev);

  // Submit form data
  const submitForm = (onValid: UserData) => {
    console.log(onValid);
  }

  // Signup form
  return <FormContainer
    linkTitle="Create a new account?"
    linkTo="/signup"
    onSubmit={handleSubmit(submitForm)}
    subTitle="Welcome back to Gravty"
    title="Signup"
  >

    {/* Name field */}
    <Input
      name="name"
      placeholder="Name"
      ref={register({ required: true })}
      type="name"
    />
    {
      // name is required Error
      errors.name && errors.name.type === "required" && (
        <ErrorText>Please enter your name!</ErrorText>
      )
    }

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

export default Signup;
