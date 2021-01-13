import { FC, useState } from "react";
import { useForm } from "react-hook-form";

// Components
import {
  CheckBox,
  Input
} from "../../components";

// Containers
import { FormContainer } from "../../container";
import { useSignup } from "../../firebase";

// User data interface
interface UserData {
  email: string;
  name: string;
  password: string;
  profession: string;
};

// Error message 
const ErrorText: FC = ({ children }) =>
  <span style={{ color: "tomato" }}>{children}</span>

// Signup
const Signup = () => {

  // react-hook-form
  // Get register, errors, handleSubmit
  const { register, errors, handleSubmit } = useForm<UserData>({
    mode: "onChange"
  });

  // Authentication
  const signup = useSignup();

  // ShowPassword for change password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggling password visibility
  const togglePassword = () =>
    setShowPassword(prev => !prev);

  // Submit form data
  const submitForm = (userdata: UserData) => {
    signup(userdata);
  }

  // Signup form
  return <FormContainer
    linkTitle="Already have an account?"
    linkTo="/signin"
    onSubmit={handleSubmit(submitForm)}
    subTitle="Welcome to Gravty"
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

    {/* Profession field */}
    <Input
      name="profession"
      placeholder="Profession"
      ref={register({ required: true })}
      type="text"
    />
    {
      // Profession is required Error
      errors.profession && errors.profession.type === "required" && (
        <ErrorText>Please enter your profession!</ErrorText>
      )
    }

    {/* Password field */}
    <Input
      name="password"
      placeholder="Password"
      ref={register({ required: true, minLength: 8 })}
      type={showPassword ? "text" : "password"}
    />
    {
      // Password is required Error
      errors.password && errors.password.type === "required" && (
        <ErrorText>Please enter your password!</ErrorText>
      )
    }
    {
      // Password length Error
      errors.password && errors.password.type === "minLength" && (
        <ErrorText>Password must need atleast 8 characters!</ErrorText>
      )
    }

    {/* Checkbox for toggle password visibility */}
    <CheckBox onChange={togglePassword} title="Show Password" />

  </FormContainer>
}

export default Signup;
